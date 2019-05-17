import json

from rest_framework import mixins, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from  django.core.cache import cache
from django_redis import get_redis_connection

from goods.filters import GoodFilter
from goods.models import MainMustBuy, MainNav, MainWheel, MainShop, MainShow, FoodType, Goods
from goods.serializers import MainWheelSerializer, MainNavSerializer, MainMustBuySerializer, MainShopSerializer, \
    MainShowSerializer, FoodTypeSerializer, Goodserializer


class Home(APIView):
    def get(self,request):
        main_wheels = MainWheel.objects.all()
        main_navs = MainNav.objects.all()
        main_mustbuys = MainMustBuy.objects.all()
        main_shops = MainShop.objects.all()
        main_shows = MainShow.objects.all()
        res = {
            'main_wheels': MainWheelSerializer(main_wheels, many=True).data,
            'main_navs': MainNavSerializer(main_navs, many=True).data,
            'main_mustbuys': MainMustBuySerializer(main_mustbuys, many=True).data,
            'main_shops': MainShopSerializer(main_shops, many=True).data,
            'main_shows': MainShowSerializer(main_shows, many=True).data,
        }
        return Response(res)



@api_view(['GET'])
def home(request):
    # 优化 ，使用redis进行缓存
    # 有序集合，无序集合，字符串，hash，列表
    # hash : key field value
    # 使用redis ,redis.Redis(port,host,password)
    conn = get_redis_connection()
    if not conn.hget('goods','main_wheels'):
        mainwheels = MainWheel.objects.all()
        value=MainWheelSerializer(mainwheels,many=True).data
        # 将字典转换为json格式数据
        value = json.dumps(value)
        conn.hset('goods','main_wheels',value)

    if not conn.hget('goods','main_navs'):
        mainnavs = MainNav.objects.all()
        value=MainNavSerializer(mainnavs,many=True).data
        value = json.dumps(value)
        conn.hset('goods','main_navs',value)


    if not conn.hget('goods','main_mustbuys'):
        mainmustbuys = MainMustBuy.objects.all()
        value=MainMustBuySerializer(mainmustbuys,many=True).data
        value = json.dumps(value)
        conn.hset('goods','main_mustbuys',value)

    if not conn.hget('goods','main_shops'):
        mainshops = MainShop.objects.all()
        value=MainShopSerializer(mainshops,many=True).data
        value = json.dumps(value)
        conn.hset('goods','main_shops',value)

    if not conn.hget('goods','main_shows'):
        mainshows = MainShow.objects.all()
        value=MainShowSerializer(mainshows,many=True).data
        value = json.dumps(value)
        conn.hset('goods','main_shows',value)

    # 取值，将json格式数据转换为字典
    redis_main_wheels = json.loads(conn.hget('goods', 'main_wheels'))
    redis_main_navs = json.loads(conn.hget('goods', 'main_navs'))
    redis_main_mustbuys = json.loads(conn.hget('goods','main_mustbuys'))
    redis_main_shops = json.loads(conn.hget('goods','main_shops'))
    redis_main_shows = json.loads(conn.hget('goods','main_shows'))

    # main_wheels = MainWheel.objects.all()
    # main_navs = MainNav.objects.all()
    # main_mustbuys = MainMustBuy.objects.all()
    # main_shops = MainShop.objects.all()
    # main_shows = MainShow.objects.all()

    res = {
        'main_wheels': redis_main_wheels,
        'main_navs': redis_main_navs,
        'main_mustbuys': redis_main_mustbuys,
        'main_shops': redis_main_shops,
        'main_shows': redis_main_shows,
    }
    return Response(res)


class FoodTypeView(viewsets.GenericViewSet,mixins.ListModelMixin):
    queryset = FoodType.objects.all()
    serializer_class =FoodTypeSerializer

    # 获取分类响应结果：{ code:200,msg:'',data:{全部的foodtype信息}}

class MarketView(viewsets.GenericViewSet,mixins.ListModelMixin):
    queryset = Goods.objects.all()
    serializer_class = Goodserializer
    filter_class = GoodFilter

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset,many=True)
        # 查询商品信息
        typeid = self.request.query_params.get('typeid')
        food_type = FoodType.objects.filter(typeid=typeid).first()
        # 第一种方式 :for 循环取子分类信息
        child_list=[]
        for childnames in food_type.childtypenames.split('#'):
            data ={
                'child_value': childnames.split(':')[1],
                'child_name': childnames.split(':')[0]
            }
            child_list.append(data)
        # 第二种
        # foodtype_childname_list = [{'child_value':childnames.split(':')[1],'child_name':childnames.split(':')[0]} for childnames in food_type.childtypenames.split('#')]


        # 排序
        order_rule_list=[
            {'order_name':'综合排序','order_value':0},
            {'order_name':'价格升序','order_value':1},
            {'order_name':'价格降序','order_value':2},
            {'order_name':'销量升序','order_value':3},
            {'order_name':'销量降序','order_value':4},
        ]


        res = {
            'goods_list':serializer.data,
            'order_rule_list':order_rule_list,
            'foodtype_childname_list':child_list,
        }

        return Response(res)
