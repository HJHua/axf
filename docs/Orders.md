### 全部订单信息接收数据接口

#### 请求地址：/api/orders/orders/


#### 请求方式：GET

#### 请求参数：
        
        order_goods: 购物车勾选的商品信息
        order_goods_info :订单中所有商品信息
        o_status : 商品订单支付状态  ( 0:not_pay ,2:not_send,3:not_receive)
 
### 响应

#### 1.响应成功：

        {'code':200,'msg' : '请求成功'}


#### 2.失败响应：
        
        {
            'code':1007,
            'msg':'用户认证失败，无法操作'
        }
        

#### 响应参数：
        
        code  状态码  int
    
        msg  响应信息 string
        
        c_is_select 勾选的商品
        
        c_user  登录用户信息
        
        o_price   下单的总价  int
        
        not_pay 未支付商品信息 string
        
        not_send 未收货商品信息 string