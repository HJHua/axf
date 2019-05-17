## REST Framework 视图

#### 1.了解:使用 rest_framework 开发的时候,我们的视图的基类,是采用APIView,不再采用 dango.views.View

#### 2.APIView与View的区别:
    1.传入到视图方法中的是REST framework的Request对象，而不是Django的HttpRequeset对象
    2.APIView获取get数据:request.query_params
    3.APIView获取post数据:request.data
    4.视图方法可以返回REST framework的Response对象，视图会为响应数据设置（render）符合前端要求的格式

#### 3.APIView
    APIView是REST framework提供的所有视图的基类，继承自Django的View父类

#### 4.GenericAPIView:

    继承自APIVIew,通常使用时，可搭配一个或多个Mixin扩展类,使用时一般需要实现
                queryset属性 
               get_queryset方法

给GenericAPIView序列化器添加了一个属性:

    class BookDetaiView(GenericAPIView):
        queryset = BookInfo.objects.all()
        serializer_class = BookInfoSerializer
    
 serializer_class就是设置序列化器
 
##    视图的创建

###        1>.列表视图
            get
                1.获取所有的模型数据
                    books = self.get_queryset()
                2.通过序列化器实现序列化的转换
                    serializer = self.get_serializer(books, many=True)
                3.返回响应
                    return Response(serializer.data)
            post
                1.获取用户提交的数据
                    data = request.data
                2.序列化器的校验
                    serializer = self.get_serializer(data=data)
                        GenericAPIView 有一个方法 叫 get_serializer
                        get_serializer 相当于 BookSerializer(books,many=True)
                    serializer.is_valid()
                3.保存数据
                    serializer.save()
                4.返回响应
                    return Response(serializer.data)
###        2>.详情视图
            get
                1.获取指定数据
                    book = self.get_object()
                        GenericAPIView 有一个方法是 get_object 方法
                        get_object 方法可以根据pk获取指定数据
                2.创建序列化器
                    serializer = self.get_serializer(book)
                3.返回响应
                    return Response(serializer.data)
            put
                1.先获取对应的模型数据
                    book = self.get_object()
                2.获取用户提交的数据
                    data = request.data
                3.对数据进行校验
                    serializer = self.get_serializer(instance=book,data=data)
                        判断
                            if serializer.is_valid():
                4.更新数据
                    serializer.save()
                5.返回响应
                    return Response(serializer.data)
            delete
                1.获取模型
                    book = self.get_object()
                2.删除
                    book.delete()
                3.返回响应
                    return Response(status=status.HTTP_204_NO_CONTENT)
            补充
                详情视图的查询id默认是pk,我们要想修改查询字符串需要给lookup_field重写设值
                    lookup_field = 'id'

####  5.Mixin
    列表视图
        ListModelMixin======>self.list(request),可以实现get方法
        CreateModelMixin======>self.create(request),可以实现post方法
    详情视图
        RetrieveModelMixin======>self.retrieve(request),可以实现get方法
        DestroyModelMixin======>self.destroy(request),可以实现deletet方法
        UpdateModelMixin=====>self.update(request),可以实现put方法

####.三级视图
    只需要设置相关的属性即可
    
    
    视图名称
        ListAPIView,CreateAPIView
        RetrieveAPIView,UpdateAPIView,DestroyAPIView

