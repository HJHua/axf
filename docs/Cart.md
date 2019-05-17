### 购物车接收数据接口

#### 请求地址：/api/cart/cart/

#### 请求方式：GET

#### 请求参数：
        
        carts 当前登录用户的购物车信息
        
        total_price： 计算勾选的商品总价  int
        
### 响应

#### 1.响应成功：

        {'code':200,'msg':'请求成功'}
        
#### 2.失败响应：
        
       { 'code':1007,'msg':'用户认证失败，无法操作'}
        
        
#### 响应参数：

        code  状态码  int
    
        msg  响应信息 string
         
        cart.c_goods.price 购物车中商品价格  int
        
        cart.c_goods.num  购物车中勾选的商品数量  int
