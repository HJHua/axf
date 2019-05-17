### 首页接口

#### 请求地址： /api/goods/home/

#### 请求方式：GET

#### 请求参数：
    
    main_wheels:首页顶部轮播
    
    main_navs:首页顶部的导航
    
    main_mustbuys:首页必购
    
    main_shops:首页商店
    
    main_shows:首页主显示
    
#### 响应

#### 1.响应成功

    code：200，
    msg：'请求成功'，
    data:{
        main_wheels:首页顶部轮播
        
        main_navs:首页顶部的导航
        
        main_mustbuys:首页必购
        
        main_shops:首页商店
        
        main_shows:首页主显示
    }
    
 
 #### 响应参数

    code  状态码  int
    
    msg  响应信息 string
    
    value=MainWheelSerializer(mainwheels,many=True).data 首页顶部轮播数据信息
    json.dumps(value)   # 将字典转换为json格式数据 