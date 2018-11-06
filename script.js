//封装一个代替getElentById()的方法
function byId(id) {
	return typeof(id)==="string"?document.getElementById(id):id;
}
//全局变量
var index=0,
    timer=null,
    pics=byId("main1").getElementsByTagName("div"),
    circle=byId("circle").getElementsByTagName("span"),
    left=byId("left"),
    right=byId("right"),
    len=pics.length,
    far=byId("main2-an"),
    son=far.getElementsByClassName("main2-1"),
    main2=byId("main2"),
    main2Du=main2.getElementsByClassName("main2-du jia"),
    bodyer5=byId("bodyer5");

function slideImg(){
	var main1=byId("main1");
	//滑过清除定时器，离开继续
	main1.onmouseover=function(){
		//清除定时器
		if(timer) clearInterval(timer);

	}
	main1.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
			//切换图片
			changeImg();
		},3000);
	}
	//自动在main1上触发鼠标离开的事件
	main1.onmouseout();
	//遍历所有点击，且绑定点击事件，点击原点切换图片
	for(var d=0;d<len;d++){
        //给所有span添加一个id的属性，值为d,作为当前span的索引
		circle[d].id=d;
		circle[d].onclick=function(){
			//改变index为当前span的id值
			index=this.id;
			//调用changeImg，实现切换图片
			changeImg();
		}	
	}
	//下一张
   right.onclick=function(){
   	index++;
   	if(index>=len) index=0;
   	changeImg();
   }
   //上一张
   left.onclick=function(){
   	index--;
   	if(index<0) index=len-1;
   	changeImg();
   }
	for(var m=0;m<son.length;m++){
		
		    son[m].setAttribute("date-index",m);
			son[m].onmouseover=function(){
               var idx=this.getAttribute("date-index");
               for(var n=0;n<main2Du.length;n++){
               	main2Du[n].style.display="none";
              }
               main2Du.className="main2-du";
               main2Du[idx].style.display="block";
               
			}
			far.onmouseout=function(){
				for(var n=0;n<main2Du.length;n++){
              	main2Du[n].style.display="none";
              }
			}
			
			
	}	
	/*bodyer5=setInterval (function(){
       bodyer5.style.top="150px";
	},2000)
	bodyer5.style,top*/
} 
function changeImg(){
	//遍历main1下div及circle下所有的span，将span清除类
	for(var i=0;i<len;i++){
		pics[i].style.display="none";
		circle[i].className="";
	}
	//根据index索引找到当前div和当前span,将其现实出来和设为当前
	pics[index].style.display="block";
    circle[index].className="cir";
}
slideImg();
