$(document).ready(function() {
    var vm =new Vue({
        el:"#vue",
        data:{
            //表示当前展示的购物车商品
            shopCar:[
                {shopCar_title:"1号店满199减100",shopCar_pic:"images/shop1.png",shopCar_commodity:"宝贝许愿坊 童装女装套装",shopCar_commDetails:"深蓝 140码",Price:190,num:1},
                {shopCar_title:"1号店",shopCar_pic:"images/shop2.png",shopCar_commodity:"亨氏 乐维滋清乐2+2果汁",shopCar_commDetails:"草莓山楂枸杞",Price:5.0,num:1},
                {shopCar_title:"1号店",shopCar_pic:"images/shop2.png",shopCar_commodity:"亨氏 乐维滋清乐2+2果汁",shopCar_commDetails:"草莓山楂枸杞",Price:5.0,num:1},
                {shopCar_title:"珠韵首饰旗舰店",shopCar_pic:"images/shop3.png",shopCar_commodity:"珠韵首饰 大粒径 9.5-10.5mm近圆白色淡水珍珠项链 送妈妈白色45CM",shopCar_commDetails:"淡水白色近圆珍珠",Price:758,num:1}
            ],
            //购物车总价
            shopCarTotal:0,
            //展示的商品
            showCommodity:[
                {CommodityName:"海瞳7-8mm水滴形天然珍珠项链",CommodityPrice:198.00,CommodityPic:"images/per_1.jpg"},
                {CommodityName:"佰色传情淡水珍珠项链圆8-9mm",CommodityPrice:598.00,CommodityPic:"images/per_2.jpg"},
                {CommodityName:"京润 【魅惑】海水珍珠项链",  CommodityPrice:440.00,CommodityPic:"images/per_3.jpg"},
                {CommodityName:"心鑫圆 天然珍珠项链淡水套装",CommodityPrice:680.00,CommodityPic:"images/per_4.jpg"},
                {CommodityName:"海瞳-明星款 玛瑙天然淡水珍珠",CommodityPrice:1980.00,CommodityPic:"images/per_5.jpg"},
                {CommodityName:"佰色传情 淡水珍珠项链",      CommodityPrice:198.00,CommodityPic:"images/per_6.jpg"},
                {CommodityName:"7-8mm米形珍珠 加长型",      CommodityPrice:390.00,CommodityPic:"images/per_7.jpg"},
                {CommodityName:"珠韵首饰 多色可选",   CommodityPrice:2980.00,CommodityPic:"images/per_8.jpg"},
                {CommodityName:"小清新8.5-10.5mm珍珠吊坠项链",CommodityPrice:670.00,CommodityPic:"images/per_9.jpg"},
                {CommodityName:"京润 【简爱】 淡水珍珠项链", CommodityPrice:2198.00,CommodityPic:"images/per_10.jpg"},
                {CommodityName:"海瞳 罕见7-8mm高亮泽 表皮光",CommodityPrice:5198.00,CommodityPic:"images/per_11.jpg"},
                {CommodityName:"媲美海水珠 天然浅粉金色珍珠项",CommodityPrice:212.00,CommodityPic:"images/per_12.jpg"},
                {CommodityName:"京润珍珠芳华白色淡水珍珠项链近圆强光7-8mm",CommodityPrice:888.00,CommodityPic:"images/per_13.jpg"},
                {CommodityName:"DCM S925纯银项链女 日韩版时尚简约珍珠吊坠女款学生",CommodityPrice:208.00,CommodityPic:"images/per_14.jpg"},
                {CommodityName:"翡宝翠 淡水珍珠项链吊坠",CommodityPrice:999.00,CommodityPic:"images/per_15.jpg"},
                {CommodityName:"Visvim2019淡水天然珍珠项链女款",CommodityPrice:4980.00,CommodityPic:"images/per_16.jpg"},
                {CommodityName:"天然珍珠项链-淡水珍珠小粒吊坠大颗珠子长款彩色吊坠",CommodityPrice:1020.00,CommodityPic:"images/per_17.jpg"},
                {CommodityName:"L'Ophelia欧兰薇雅 埃菲尔之恋", CommodityPrice:998.00,CommodityPic:"images/per_18.jpg"},
                {CommodityName:"黛米珍珠 9-10mm近圆强光淡水珍珠项链",CommodityPrice:108.00,CommodityPic:"images/per_19.jpg"},
                {CommodityName:"珠韵首饰 冰韵 天然白色正圆S925银扣珍珠项链",CommodityPrice:1776.00,CommodityPic:"images/p_big.jpg"}
            ],
            //展示的商品价格清单
            CommodityPriceList:["全部","0-199","200-599","600-1888","1889-2999","3000-4999","5000以上"],
            IsCheckPriceList:0
        },
        methods: {

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

            },
            AddShopCar:function (index) {
                //表示当前点击的商品不存在购物车
                var bool =0;
                var obj={};
                //判断点击的商品是否存在购物车，存在商品数量+1，不存在添加购物车
                for (var i =0;i<this.shopCar.length;i++){
                    if(this.showCommodity[index].CommodityName==this.shopCar[i].shopCar_commodity) {
                        this.shopCar[i].num++;
                        bool=1;
                        //计算购物车总价
                        this.count();
                        return ;
                    }
                }
                if(bool==0){
                    //商品没有标题--固定统一标题
                    var obj={};
                    obj.shopCar_title="周大福官方旗舰店";
                    //图片路径
                    obj.shopCar_pic=this.showCommodity[index].CommodityPic;
                    //商品名
                    obj.shopCar_commodity=this.showCommodity[index].CommodityName;
                    //没有商品详情--固定统一值
                    obj.shopCar_commDetails="--";
                    //商品价格
                    obj.Price=this.showCommodity[index].CommodityPrice;
                    obj.num=1;
                    this.shopCar.push(obj);
                    //计算购物车总价
                    this.count();
                }
            },
            //价格筛选---操作了DOM...
            SelectPriceList:function(index){
                this.IsCheckPriceList=index;
                //var s =document.querySelectorAll(".cate_list>li");
                var Prices =this.CommodityPriceList[index];
                //全部筛选
                if(Prices=="全部") {
                    /*this.showCommodity.forEach(item => {
                        newList.push(item);
                        return newList;
                    })*/
                    for(var i=0;i<document.querySelectorAll(".cate_list>li").length;i++){
                        document.querySelectorAll(".cate_list>li")[i].style.display="block";
                    }
                }
                //5000以上筛选
                else if(Prices==this.CommodityPriceList[6]){
                    for(var i=0;i<document.querySelectorAll(".cate_list>li").length;i++){
                        if(this.showCommodity[i].CommodityPrice>=5000) {
                            document.querySelectorAll(".cate_list>li")[i].style.display = "block";
                        }
                        else{
                            document.querySelectorAll(".cate_list>li")[i].style.display="none";
                        }
                    }
                }
                //中间值筛选
                //for (var i=0;i<this.showCommodity.length;i++)
                else{
                    var arr_Price=Prices.split("-");
                    /*//alert(arr_Price[0]);
                    //arr_Price[1];
                    for (var i=0;i<this.showCommodity.length;i++){
                        if(this.showCommodity[i].CommodityPrice>=parseInt(arr_Price[0])&&this.showCommodity[i].CommodityPrice<=parseInt(arr_Price[1])) {
                           newList.push(this.showCommodity[i]);
                        }
                    }*/
                    /*this.showCommodity.forEach(item => {
                        if(item.CommodityPrice>=parseInt(arr_Price[0])&&item.CommodityPrice<=parseInt(arr_Price[1])){
                        newList.push(item);
                    }
                })
                    return newList;*/
                }

                //return newList;

                for(var i=0;i<document.querySelectorAll(".cate_list>li").length;i++){
                    if(this.showCommodity[i].CommodityPrice>=parseInt(arr_Price[0])&&this.showCommodity[i].CommodityPrice<=parseInt(arr_Price[1])){
                        document.querySelectorAll(".cate_list>li")[i].style.display = "block";
                    }
                    else{
                        document.querySelectorAll(".cate_list>li")[i].style.display="none";
                    }
                }
            }
        },
        //vue实例完后执行定时器函数
        created:function(){
            this.count();
        }
    })


    //获取购物车的DOM元素
    var car = document.querySelector(".car_t");
    //判断购物车的显示与隐藏，初始值为隐藏
    var bool = false;
    car.onclick = function () {
        if (!bool) {
            //展示购物车
            $("header div.i_car").find("div.last").show();
            bool = true;
        } else {
            //隐藏购物车
            $("header div.i_car").find("div.last").hide();
            bool = false;
        }
    }


})