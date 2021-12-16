$(document).ready(function() {
    var vm =new Vue({
        el:"#vue",
        data:{
            //轮播图片路径
            pic:[
                {id:1,src:"images/ban1.jpg"},{id:2,src:"images/nban.jpg"},{id:3,src:"images/de2.jpg"},{id:4,src:"images/nav_4.png"}
            ],
            //表示当前轮播图片的索引
            isActive:0,
            //表示当前展示的购物车商品
            shopCar:[
                {shopCar_title:"1号店满199减100",shopCar_pic:"images/shop1.png",shopCar_commodity:"宝贝许愿坊 童装女装套装",shopCar_commDetails:"深蓝 140码",Price:190,num:1},
                {shopCar_title:"1号店",shopCar_pic:"images/shop2.png",shopCar_commodity:"亨氏 乐维滋清乐2+2果汁",shopCar_commDetails:"草莓山楂枸杞",Price:5.0,num:1},
                {shopCar_title:"珠韵首饰旗舰店",shopCar_pic:"images/shop3.png",shopCar_commodity:"珠韵首饰 大粒径 9.5-10.5mm近圆白色淡水珍珠项链 送妈妈白色45CM",shopCar_commDetails:"淡水白色近圆珍珠",Price:758,num:1}
            ],
            //购物车总价
            shopCarTotal:0,
        },
        methods: {
            Lunbo:function(index){
                //操作要展示的img标签元素并改变对应图片路径
                this.$refs.pic.src=this.pic[index].src;
                //设置对应活动标签--改变css样式
                this.isActive=index;
            },
            AutoPlay:function () {
                var _this=this;
                window.setInterval(function(){
                    if(_this.isActive==_this.pic.length-1){
                        _this.isActive=0;
                    }
                    else{
                        _this.isActive++;
                    }
                    _this.$refs.pic.src=_this.pic[_this.isActive].src;
                },2000)
            },
            plus:function(index){
                this.shopCar[index].num++;
                this.count();
            },
            minus:function(index){
                //商品不可小于1
                if(this.shopCar[index].num<=1)
                {
                    this.shopCar[index].num=1;
                }
                else{
                    this.shopCar[index].num--;
                }
                this.count();
            },
            count:function () {
                //临时总价
                var total=0;
                this.shopCar.forEach(function(val){
                    total+=val.num*val.Price;
                });
                this.shopCarTotal=parseFloat(total);

            }
        },
        //vue实例完后执行定时器函数
        created:function(){
            this.AutoPlay();
            this.count();
        }
    })


    //获取购物车的DOM元素
    var car =document.querySelector(".car_t");
    //判断购物车的显示与隐藏，初始值为隐藏
    var bool =false;
    car.onclick=function(){
        if(!bool){
            //展示购物车
            $("header div.i_car").find("div.last").show();
            bool=true;
        }
        else{
            //隐藏购物车
            $("header div.i_car").find("div.last").hide();
            bool=false;
        }
    }


});



