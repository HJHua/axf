
from rest_framework import viewsets,mixins
from rest_framework.decorators import list_route
from rest_framework.response import Response

from carts.models import Cart
from orders.filters import OrderFilter
from orders.models import Order, OrderGoods
from orders.serializers import OrderSerializer, OrderGoodsSerializer
from utils.UserAuthentication import UserAuth


class OrderView(viewsets.GenericViewSet,mixins.CreateModelMixin,mixins.ListModelMixin):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    authentication_classes = (UserAuth,)
    filter_class= OrderFilter

    def get_queryst(self):
        return self.queryset.filter(o_user=self.request.user)
    # def list(self,request,*args,**kwargs):
    #     # list方法返回结构：{code:200,msg:'',data:[{订单，order_goods_info},{}]}
    #     queryset = self.get_queryset()
    #     queryset =queryset.filter(o_user=request.user)
    #     serializer = self.get_serializer(queryset,many=True)
    #     for order in serializer.data:
    #         order_goods = OrderGoods.objects.filter(o_order=order['id']).all()
    #         order['order_goods_info']= OrderGoodsSerializer(order_goods,many=True).data
    #     return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        # 创建订单和订单详情表内容
        carts = Cart.objects.filter(c_is_select=1,c_user=request.user).all()
        # 计算总价
        if carts:
            total_price = 0
            for cart in carts:
                total_price += cart.c_goods.price * cart.c_goods_num
            # 创建订单
            order = Order.objects.create(o_user=request.user,o_price=total_price)
            # 创建订单详情
            for cart in carts:
                OrderGoods.objects.create(o_order=order,o_goods=cart.c_goods,o_goods_num=cart.c_goods_num)
                # 删除购物车中商品信息
                cart.delete()
            res = {
                'code':200,
                'msg' : '下单成功'
            }
            return Response(res)
        res = {
            'code': 1009,
            'msg': '购物中没有商品，请添加商品再下单'
        }

        return Response(res)