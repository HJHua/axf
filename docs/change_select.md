### 购物车商品全选接口

#### 请求地址：/api/cart/cart/change_select/

#### 请求方式：PATCH

#### 请求参数：
        
        c_is_select:商品勾选状态 TRUE OR FALSE
        
### 响应

#### 1.响应成功：

        {'code':200,'msg':'请求成功'}
        
#### 2.失败响应：

        
#### 响应参数：

        code  状态码  int
    
        msg  响应信息 string
         
        c_is_select 商品勾选状态 Boolean
