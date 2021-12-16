$(document).ready(function() {
    var vm =new Vue({
        el:"#vue",
        data:{
            ShowCommoditySrc:["images/ps1.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"],
            //表示当前展示的购物车商品
            shopCar:[
                {shopCar_title:"1号店满199减100",shopCar_pic:"images/shop1.png",shopCar_commodity:"宝贝许愿坊 童装女装套装",shopCar_commDetails:"深蓝 140码",Price:190,num:1},
                {shopCar_title:"1号店",shopCar_pic:"images/shop2.png",shopCar_commodity:"亨氏 乐维滋清乐2+2果汁",shopCar_commDetails:"草莓山楂枸杞",Price:5.0,num:1},
                {shopCar_title:"珠韵首饰旗舰店",shopCar_pic:"images/shop3.png",shopCar_commodity:"珠韵首饰 大粒径 9.5-10.5mm近圆白色淡水珍珠项链 送妈妈白色45CM",shopCar_commDetails:"淡水白色近圆珍珠",Price:758,num:1}
            ],
            //展示得商品
            showCommodity:[
                {id:1,CommodityName:"海瞳7-8mm水滴形天然珍珠项链",CommodityPrice:198.00,CommodityActivePrice:247,CommodityPic:"images/per_1.jpg",CommoditySize:["43cm","45cm","50cm"],CommodityColor:["粉色","白色","浅蓝色"],CommodityChildSrc:["images/per_1.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:2,CommodityName:"佰色传情淡水珍珠项链圆8-9mm",CommodityPrice:598.00,CommodityActivePrice:747,CommodityPic:"images/per_2.jpg",CommoditySize:["28cm","32cm","50cm","55cm"],CommodityColor:["粉色"],CommodityChildSrc:["images/per_2.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:3,CommodityName:"京润 【魅惑】海水珍珠项链",  CommodityPrice:440.00,CommodityActivePrice:550,CommodityPic:"images/per_3.jpg",CommoditySize:["39cm","42cm"],CommodityColor:["湛蓝色","白色"],CommodityChildSrc:["images/per_3.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:4,CommodityName:"心鑫圆 天然珍珠项链淡水套装",CommodityPrice:680.00,CommodityActivePrice:850,CommodityPic:"images/per_4.jpg",CommoditySize:["29cm","35cm","40cm"],CommodityColor:["玫瑰色","白色","金红色"],CommodityChildSrc:["images/per_4.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:5,CommodityName:"海瞳-明星款 玛瑙天然淡水珍珠",CommodityPrice:1980.00,CommodityActivePrice:2475,CommodityPic:"images/per_5.jpg",CommoditySize:["41cm","45cm"],CommodityColor:["粉色","白色","黄色","绿色"],CommodityChildSrc:["images/per_5.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:6,CommodityName:"佰色传情 淡水珍珠项链",      CommodityPrice:198.00,CommodityActivePrice:247,CommodityPic:"images/per_6.jpg",CommoditySize:["55cm","60cm"],CommodityColor:["白色"],CommodityChildSrc:["images/per_6.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:7,CommodityName:"7-8mm米形珍珠 加长型",      CommodityPrice:390.00,CommodityActivePrice:487,CommodityPic:"images/per_7.jpg",CommoditySize:["42cm"],CommodityColor:["青色","白色"],CommodityChildSrc:["images/per_7.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:8,CommodityName:"珠韵首饰 多色可选",   CommodityPrice:2980.00,CommodityActivePrice:3725,CommodityPic:"images/per_8.jpg",CommoditySize:["38cm","40cm","42cm","50cm"],CommodityColor:["粉色","玫瑰色","浅蓝色"],CommodityChildSrc:["images/per_8.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:9,CommodityName:"小清新8.5-10.5mm珍珠吊坠项链",CommodityPrice:670.00,CommodityActivePrice:837,CommodityPic:"images/per_9.jpg",CommoditySize:["25cm","30cm","35cm"],CommodityColor:["金红色","白色"],CommodityChildSrc:["images/per_9.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:10,CommodityName:"京润 【简爱】 淡水珍珠项链", CommodityPrice:2198.00,CommodityActivePrice:2747,CommodityPic:"images/per_10.jpg",CommoditySize:["18cm","20cm"],CommodityColor:["粉色","绿色","红色"],CommodityChildSrc:["images/per_10.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:11,CommodityName:"海瞳 罕见7-8mm高亮泽 表皮光",CommodityPrice:5198.00,CommodityActivePrice:6475,CommodityPic:"images/per_11.jpg",CommoditySize:["38cm","43cm","48cm","50cm","55cm"],CommodityColor:["白色","绿色"],CommodityChildSrc:["images/per_11.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:12,CommodityName:"媲美海水珠 天然浅粉金色珍珠项",CommodityPrice:212.00,CommodityActivePrice:265,CommodityPic:"images/per_12.jpg",CommoditySize:["41cm","45cm","48cm"],CommodityColor:["粉色"],CommodityChildSrc:["images/per_12.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:13,CommodityName:"京润珍珠芳华白色淡水珍珠项链近圆强光7-8mm",CommodityPrice:888.00,CommodityActivePrice:1110,CommodityPic:"images/per_13.jpg",CommoditySize:["45cm","55cm"],CommodityColor:["棕色","红色","白色","湛蓝色"],CommodityChildSrc:["images/per_13.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:14,CommodityName:"DCM S925纯银项链女 日韩版时尚简约珍珠吊坠女款学生",CommodityPrice:208.00,CommodityActivePrice:260,CommodityPic:"images/per_14.jpg",CommoditySize:["50cm"],CommodityColor:["浅蓝色","白色"],CommodityChildSrc:["images/per_14.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:15,CommodityName:"翡宝翠 淡水珍珠项链吊坠",CommodityPrice:999.00,CommodityActivePrice:1248,CommodityPic:"images/per_15.jpg",CommoditySize:["30cm","32cm","36cm","42cm","50cm"],CommodityColor:["粉色","白色"],CommodityChildSrc:["images/per_15.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:16,CommodityName:"Visvim2019淡水天然珍珠项链女款",CommodityPrice:4980.00,CommodityActivePrice:6227,CommodityPic:"images/per_16.jpg",CommoditySize:["40cm","50cm"],CommodityColor:["绿色","白色"],CommodityChildSrc:["images/per_16.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:17,CommodityName:"天然珍珠项链-淡水珍珠小粒吊坠大颗珠子长款彩色吊坠",CommodityPrice:1020.00,CommodityActivePrice:1275,CommodityPic:"images/per_17.jpg",CommoditySize:["38cm","42cm"],CommodityColor:["金黄色","白色","粉色","浅蓝色","绿色"],CommodityChildSrc:["images/per_17.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:18,CommodityName:"L'Ophelia欧兰薇雅 埃菲尔之恋", CommodityPrice:998.00,CommodityActivePrice:1247,CommodityPic:"images/per_18.jpg",CommoditySize:["40cm","45cm","50cm","55cm"],CommodityColor:["浅蓝色","白色"],CommodityChildSrc:["images/per_18.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:19,CommodityName:"黛米珍珠 9-10mm近圆强光淡水珍珠项链",CommodityPrice:108.00,CommodityActivePrice:135,CommodityPic:"images/per_19.jpg",CommoditySize:["43cm","45cm"],CommodityColor:["湛蓝色","白色"],CommodityChildSrc:["images/per_19.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]},
                {id:20,CommodityName:"珠韵首饰 冰韵 天然白色正圆S925银扣珍珠项链",CommodityPrice:1776.00,CommodityActivePrice:3886,CommodityPic:"images/p_big.jpg",CommoditySize:["43cm","45cm","48cm","55cm","60cm"],CommodityColor:["金黄色","白色","绿色"],CommodityChildSrc:["images/p_big.jpg","images/ps2.jpg","images/ps3.jpg","images/ps4.jpg"]}
            ],
            Comments:[
                {id:1,UserName:"向死而生",UserHeadPic:"images/peo1.jpg",CommodityColor:"粉色",CommoditySize:"43cm",Comment:"产品很好，香味很喜欢，必须给赞。",DateTime:"2019-03-24"},
                {id:2,UserName:"就是这么想的",UserHeadPic:"images/peo2.jpg",CommodityColor:"白色",CommoditySize:"50m",Comment:"送朋友，她很喜欢，大爱。 ",DateTime:"2019-04-10"},
                {id:3,UserName:"墨镜墨镜",UserHeadPic:"images/peo3.jpg",CommodityColor:"白色",CommoditySize:"46cm",Comment:"大家都说不错",DateTime:"2019-04-28"},
                {id:4,UserName:"那*****洋",UserHeadPic:"images/peo4.jpg",CommodityColor:"粉色",CommoditySize:"48cm",Comment:"下次还会来买，推荐。",DateTime:"2019-05-12"}
            ],
            //当前tab选项卡信息
            comName:["商品属性","商品评论","售后服务"],
            //当前tab选项卡信息得hasn值
            comHasn:["attribute","comment","detail"],
            //购物车总价
            shopCarTotal:0,
            //表示当前选中商品的尺寸索引
            isCheckedSize:0,
            //表示当前选中商品的颜色索引
            isCheckedColor:0,
            //当前商品数量
            ShowCommodityNum:1,
            //当前展示的商品索引
            index:0,
            //表示当前展示的组件
            tabCom:"attribute",
            //表示当前选中tab选项卡的索引
            isCheckedTab:0,
            Customer:1
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
            //选择商品尺寸
            SelectCommoditySize:function (index) {
                this.isCheckedSize=index;
            },
            //选择商品颜色
            SelectCommodityColor:function (index) {
                this.isCheckedColor=index;
            },
            //增加商品
            IncreCommodity:function(){
                this.ShowCommodityNum++;
            },
            ReduceCommodity:function(){
                //商品不可小于1
                if(this.ShowCommodityNum<=1)
                {
                    this.ShowCommodityNum=1
                }
                else{
                    this.ShowCommodityNum--;
                }
            },
            //展示的商品子图片点击事件
            ShowCommodityPic:function (index) {
                this.$refs.ShowCommPic.src=this.showCommodity[this.index].CommodityChildSrc[index];
            },
            //展示的组件
            ShowTabCom:function(index){
                this.tabCom=this.comHasn[index];
                this.isCheckedTab=index;
            },
            //发表评论
            AddComment:function(){
                var obj={UserName:('游客'+this.Customer),UserHeadPic:"images/userHead.png",CommodityColor:this.showCommodity[this.index].CommodityColor[this.isCheckedColor],CommoditySize:this.showCommodity[this.index].CommoditySize[this.isCheckedSize],Comment:this.$refs.children.TextMsg,DateTime:"2019-05-14"};
                this.Customer++;
                this.Comments.push(obj);
            },
            //加入购物车
            AddShopCar:function () {
                //表示当前点击的商品不存在购物车
                var bool =0;
                var obj={};
                //判断点击的商品是否存在购物车，存在商品数量+1，不存在添加购物车
                //根据购物车中的商品详情来判定
                for (var i =0;i<this.shopCar.length;i++){
                    if((this.showCommodity[this.index].CommodityColor[this.isCheckedColor]+'--'+this.showCommodity[this.index].CommoditySize[this.isCheckedSize])==this.shopCar[i].shopCar_commDetails) {
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
                    obj.shopCar_title=this.showCommodity[this.index].CommodityName.substr(0,2)+"旗舰店";
                    //图片路径
                    obj.shopCar_pic=this.showCommodity[this.index].CommodityPic;
                    //商品名
                    obj.shopCar_commodity=this.showCommodity[this.index].CommodityName;
                    //没有商品详情
                    obj.shopCar_commDetails=this.showCommodity[this.index].CommodityColor[this.isCheckedColor]+'--'+this.showCommodity[this.index].CommoditySize[this.isCheckedSize];
                    //商品价格
                    obj.Price=this.showCommodity[this.index].CommodityPrice;
                    obj.num=this.ShowCommodityNum;
                    this.shopCar.push(obj);
                    //计算购物车总价
                    this.count();

                }

                //var obj={shopCar_title:this.showCommodity[this.index].CommodityName.substr(0,2)+"旗舰店",shopCar_pic:this.showCommodity[this.index].CommodityPic,shopCar_commodity:this.showCommodity[this.index].CommodityName,shopCar_commDetails:this.showCommodity[this.index].CommodityColor[this.isCheckedColor]+'--'+this.showCommodity[this.index].CommoditySize[this.isCheckedSize],Price:this.showCommodity[this.index].CommodityPrice,num:"1"};
                //this.shopCar.push(obj);
            }
        },

        //组件
        components:{
            //商品属性
            attribute:{
                template:"<div class='des_con' id='p_attribute'><table border='0' align='center' style='width:100%; margin:10px auto;' cellspacing='0' cellpadding='0'>" +
                    "<tr><td>商品名称：天然淡水珍珠</td><td>商品编号：1546211</td><td>品牌： 珠韵首饰</td><td>上架时间：2018-09-06 09:19:09</td></tr>" +
                    "<tr><td>商品毛重：160.00g</td><td>商品产地：法国</td><td>珍珠形状：正圆</td> <td>&nbsp;</td></tr>" +
                    "<tr><td>镶嵌材质：纯银</td><td>款式：项链</td><td>&nbsp;</td><td>&nbsp;</td></tr>" +
                    "</table></div>"
            },
            //商品详情
            detail:{
                template:"<div class='desqoute' style='display: block;'>\n" +
                    "<p class='tit'>1号店承诺</p><p class='con'>1号店平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务。请您放心购买！<br>注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若没有及时更新，请大家谅解！</p><br><p class='tit'>全国联保</p><p class='con'>凭质保证书及1号店发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由1号店联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。1号店还为您提供具有竞争力的商品价格和运费政策，请您放心购买！</p><br><p class='tit'>权利声明</p><p class='con'>1号店上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是1号店重要的经营资源，未经许可，禁止非法转载使用。<br>注：本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任。</p><br><p class='tit'>价格说明</p><p class='con'><strong>1号店价：</strong>商品在1号店平台上，不参加降价让利促销团购等活动时的常规销售价格。<br><strong>参考价：</strong>商品展示的参考价，可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在1号店平台曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价、销售商门店曾经展示过的销售价等可能会与您购物时展示的不一致，该价格仅供您参考。<br><strong>问题反馈：</strong>如有疑问，建议您在购买前联系客服咨询。</p></div>"
            },
            //商品评论
            comment: {
                template: "<div class='rate-msg-box'><div class='textinput'><textarea class='rate-msg' v-model='TextMsg'></textarea></div><div class='ft'><button type='button' class='btn_comment' @click='sub'>发表评论</button></div></div>",
                methods: {
                    //子组件向父组件传递参数
                    sub:function () {
                        this.$emit('fun');
                    }
                },
                props:['TestMsg']
            }

        },
        //vue实例完后执行定时器函数
        created:function(){
            this.count();
            //获取地址栏url
            var url=decodeURI(location.href);
            //获取=号后边的字符串
            var index = url.lastIndexOf("=");
            if(index>=0)
            {
                this.index = parseInt(url.substring(index + 1, url.length))-1;
            }

        }

    })


    $('#btn').click(function(){
        //给btn按钮添加点击事件，点击模态框显示
        $("#showModal").modal('show');
    });


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