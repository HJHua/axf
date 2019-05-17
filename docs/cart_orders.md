### 购物车下单接口

#### 请求地址：/api/orders/orders/?token=${token}


#### 请求方式：POST

#### 请求参数：
        
        order_goods: 购物车勾选的商品信息
 
### 响应

#### 1.响应成功：

        {'code':200,'msg' : '下单成功'}


#### 2.失败响应：
        
        {
            'code':1007,
            'msg':'用户认证失败，无法操作'
        }
        
        {
            'code': 1009,
            'msg': '购物中没有商品，请添加商品再下单'
        }

#### 响应参数：
        
        code  状态码  int
    
        msg  响应信息 string
        
        c_is_select 勾选的商品
        
        c_user  登录用户信息
        
        o_price   下单的总价  int
        
        
         

