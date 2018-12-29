module.exports={
   tabStyle:{
      activeColor:'#FE494C',//触发时文字颜色
      inactiveColor:'#353535',//未触发时文字的颜色
   },
   tabs:[
      {
         "content":"首页",//显示的文字
         "activeImg":"/images/index-s.png",//触发时的图片
         "inactiveImg":"/images/index.png",//未触发的图片
         "path":"/pages/index/index"//按钮对应的路径
      },
      {
         "content": "消息",
         "activeImg": "/images/news-s.png",
         "inactiveImg": "/images/news.png",
         "path": "/pages/news/news"
      },
      {
         "content": "",
         "activeImg": "",
         "inactiveImg": "",
         "path": "/pages/add/add"
      },
      {
         "content": "购物车",
         "activeImg": "/images/car-s.png",
         "inactiveImg": "/images/car.png",
         "path": "/pages/shop/shop"
      },
      {
         "content": "我的",
         "activeImg": "/images/user-s.png",
         "inactiveImg": "/images/user.png",
         "path": "/pages/user/user"
      }
   ]
}