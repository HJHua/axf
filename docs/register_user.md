### 注册接口

#### 请求地址： /api/user/auth/register/

#### 请求方式：POST

#### 请求参数：

    u_username  注册账号  string  必填
    u_password  注册密码  string  必填
    u_password2  注册确认密码  string  必填
    u_email  注册邮箱   string 必填


#### 响应

#### 1.响应成功

    code：200，
    msg：'请求成功'，
    data:{
          user_id:''
    }
 
#### 2.失败响应
    

    {'code':1001,'msg':'用户名已存在'}
    {'code': 1002, 'msg': '密码不一致'}
    {'code':1003,'msg':'参数校验失败','data':serializer.errors}

#### 响应参数

    code  状态码  int
    
    msg  响应信息 string
    
    user_id 用户id值 int
    
    serializer.errors:校验后返回异常的信息
