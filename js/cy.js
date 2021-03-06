//图片轮播
$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
					//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
					direction:'horizontal',
					autoplay:1000,
					//自动播放时间
			        loop:true,
			        //播放速度
			        speed:1000,
			        //如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
			        //操作包括触碰，拖动，点击pagination等。
			        autoplayDisableOnInteraction:false,
			        // 如果需要分页器，即下面的小圆点
			        pagination:".swiper-pagination",
			        //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
			        paginationClickable:true,

			    });
	var res = {
		"show_download_bar":true,
		"app":"0",
	    "hot_problems":[
	        {
	            "ask":"你好 性交阴道出血 是什么原因（女，30岁）",
	            "answer":"你好，每次同房都有出血吗？",
	            "title":"你好，性交阴道出血，是什么原因？",
	            "id":"S2qyx4ii1Xwu3sUsi604CA",
	            "doctor":{
	                "hospital":"山东泰安煤矿医院",
	                "name":"徐颖"
	            }
	        },
	        {
	            "ask":"鼻粘膜糜烂怎么办？？？？（男，24岁）",
	            "answer":"建议多喝水，多吃果蔬。一定要戒除挖鼻习惯。可使用红霉素眼膏涂抹",
	            "title":"鼻粘膜糜烂怎么办？？？？",
	            "id":"NDrfudEDdE2orcyNi3K2tA",
	            "doctor":{
	                "hospital":"莘县第二人民医院",
	                "name":"冯俊杰"
	            }
	        },
	        {
	            "ask":"女性安全期是什么时候？（女，16岁）",
	            "answer":"你好，很高兴为你解答！！！！",
	            "title":"女性安全期是什么时候？",
	            "id":"-Q86rV8fHUl7W79G_mvZ6g",
	            "doctor":{
	                "hospital":"成都市金牛区中医医院",
	                "name":"刘青"
	            }
	        }
	    ],
	    "popular_diseases":[
	        {
	            "id":237446,
	            "name":"感冒"
	        },
	        {
	            "id":264890,
	            "name":"过敏"
	        },
	        {
	            "id":243779,
	            "name":"湿疹"
	        },
	        {
	            "id":246581,
	            "name":"痤疮"
	        },
	        {
	            "id":273362,
	            "name":"阴道炎"
	        },
	        {
	            "id":273218,
	            "name":"痔疮"
	        },
	        {
	            "id":222110,
	            "name":"包皮"
	        },
	        {
	            "id":273242,
	            "name":"糖尿病"
	        },
	        {
	            "id":229808,
	            "name":"宫颈糜烂"
	        },
	        {
	            "id":273383,
	            "name":"高血压"
	        },
	        {
	            "id":273296,
	            "name":"肺炎"
	        },
	        {
	            "id":271667,
	            "name":"鼻炎"
	        },
	        {
	            "id":229727,
	            "name":"宫外孕"
	        },
	        {
	            "id":216869,
	            "name":"乙肝"
	        },
	        {
	            "id":273341,
	            "name":"艾滋病"
	        },
	        {
	            "id":268796,
	            "name":"颈椎病"
	        },
	        {
	            "id":273236,
	            "name":"盆腔炎"
	        },
	        {
	            "id":233339,
	            "name":"尖锐湿疣"
	        }
    	],
    	"health_news":[
	        {
	            "favor_num":0,
	            "img":"https://media2.chunyuyisheng.com/@/media/images/2017/11/22/0ea2/7f1f0ea68235_w180_h150_.jpg?imageView2/1/w/120/h/116",
	            "title":"小皮听你说：有什么你特别喜欢但总被别人diss的食物？",
	            "date_str":"1小时前",
	            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/22/0ea2/7f1f0ea68235_w180_h150_.jpg?imageView2/1/w/120/h/116",
	            "news_id":114115,
	            "channel_id":21,
	            "view_times":761,
	            "type":"news",
	            "id":114115,
	            "digest":"汝之蜜糖，彼之砒霜",
	            "channel_name":"生活",
        	},
        	{
	            "favor_num":1,
	            "img":"https://media2.chunyuyisheng.com/@/media/images/2017/11/22/d1a6/613e94d1359f_w180_h150_.jpg?imageView2/1/w/120/h/116",
	            "title":"雾霾不只伤肺，也许还会伤害你的“骨头”！",
	            "date_str":"2小时前",
	            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/22/d1a6/613e94d1359f_w180_h150_.jpg?imageView2/1/w/120/h/116",
	            "news_id":114111,
	            "channel_id":21,
	            "view_times":1282,
	            "type":"news",
	            "id":114111,
	            "digest":"美国哥伦比亚大学美尔曼公共卫生学院（Mailman School of Public Health）研究发现，空气中PM2.5颗粒的浓度升高的时候，因骨折而入院寻求治疗的患者人数也比较高，并且低收入社区当中，医院收治的骨折患者的数量也大大增加",
	            "channel_name":"生活",
        	},
	        {
	            "description":"",
	            "title":"备孕期间遭遇“排卵期ED”，该咋办？",
	            "url":"https://media2.chunyuyisheng.com/@/media/video/99ce33d1vodtransgzp1252638726/c485b3b49031868223496158398/v.f20.mp4",
	            "type":"video_segment",
	            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/07/254a/bf8a5d883182_w729_h684_.png",
	            "lecture_status":"已结束",
	            "play_count":0,
	            "seconds":"01:41",
	            "room_id":428,
	            "duration":"01:41",
	            "lecture_id":467,
	            "date_str":"11月7日",
	            "id":2696,
	            "subiect":"有请大医生",
        	},
	    ],
	}

	//经典问答
	var questionStr = "";
	for(i=0; i<res.hot_problems.length; i++){
		questionStr +='<a href="iavascript:void(0)" class="user-question-list first"><h6 class="title"><span class="title-tag">问</span>'+res.hot_problems[i].title+'</h6><p class="user-info">'+res.hot_problems[i].ask+'</p></a>';
	}
	$(".user-question").html(questionStr);

	//健康咨询
	var str = "";
	for(var j=0; j<res.health_news.length; j++){
		str +='<div class="health-info-list"><img class="info-pic" src="'+res.health_news[j].image+'"><div class="info-detail"><h6 class="title">'+res.health_news[j].title+'</h6><p class="info-footer"><span class="topic-type">'+res.health_news[j].channel_name+'</span><span class="create-time">'+res.health_news[j].date_str+'</span></p></div></div>';
	}
	$(".health-info").html(str);

	//疾病科普
	var diseaseStr ="";
	for(k=0; k<res.popular_diseases.length; k++){
		diseaseStr +='<li class="block-list"><a href="javascript:void(0)" title="感冒">'+res.popular_diseases[k].name+'</a></li>';
	}
	$(".disease-list").html(diseaseStr);
});