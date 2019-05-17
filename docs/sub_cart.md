### 减少购物车商品接口

#### 请求地址：/api/cart/cart/sub_cart/


#### 请求方式：POST

#### 请求参数：
    
    goodsid = request.data.get('goodsid') 添加的商品id值
    cart 登录用户购物车中的商品信息
    user 用户信息

### 响应

#### 1.响应成功：
     
    {
            'code':200,
            'msg':'操作成功'
        }


#### 2.失败响应：
      
      { 'code':1007,'msg':'用户认证失败，无法操作'}
      
      {'code':1008,'msg':'购物车中没有该商品，请先添加'}
      


#### 响应参数

         code  状态码  int
    
         msg  响应信息 string
         
         cart.c_goods_num 添加的商品数量