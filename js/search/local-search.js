// build time:Fri May 18 2018 10:02:47 GMT+0800 (中国标准时间)
$(function(){var t=false;$("a.social-icon.search").on("click",function(){$("body").css("width","100%");$("body").css("overflow-y","scroll");$("body").css("position","fixed");$(".search-dialog").velocity("stop").velocity("transition.expandIn",{duration:300});$(".search-mask").velocity("stop").velocity("transition.fadeIn",{duration:300});if(!t){i(GLOBAL.localSearch.path);t=true}});$(".search-mask, .search-close-button").on("click",function(){$("body").css("position","absolute");$(".search-dialog").velocity("stop").velocity("transition.expandOut",{duration:300});$(".search-mask").velocity("stop").velocity("transition.fadeOut",{duration:300})});function i(t){$.ajax({url:"/"+t,dataType:"xml",success:function(t){var i=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("link",this).attr("href")}}).get();var a=$("#local-search-input input")[0];var e=$("#local-hits")[0];a.addEventListener("input",function(){var t='<div class="search-result-list">';var a=this.value.trim().toLowerCase().split(/[\s]+/);e.innerHTML="";if(this.value.trim().length<=0){$(".local-search-stats__hr").hide();return}var s=0;i.forEach(function(i){var e=true;var r=i.title.trim().toLowerCase();var o=i.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var c=i.url;var n=-1;var l=-1;if(r!==""&&o!==""){a.forEach(function(t,i){n=r.indexOf(t);l=o.indexOf(t);if(n<0&&l<0){e=false}else{if(l<0){l=0}}})}if(e){t+='<div class="local-search__hit-item"><a href="'+c+'" class="search-result-title">'+r+"</a>"+"</div>";s+=1;$(".local-search-stats__hr").show()}});if(s===0){t+='<div id="local-search__hits-empty">'+GLOBAL.localSearch.labels.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"}e.innerHTML=t})}})}});
//rebuild by neat 