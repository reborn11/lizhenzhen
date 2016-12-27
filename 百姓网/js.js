	var f=document.getElementById("fl");
		
		var lb1=document.getElementById("lb1");
		var lb2=document.getElementById("lb2");
		
		
			f.onmouseover=function(){
					var lb=this.getElementsByTagName("div")[0];
					lb.style.display="block";
			}
			f.onmouseout=function(){
				var lb=this.getElementsByTagName("div")[0];
					lb.style.display="none";
			}
			lb1.onmouseover=function(){	
				var ej1=this.getElementsByTagName("div")[0];
					ej1.style.display="block";
			}
			lb1.onmouseout=function(){	
				var ej1=this.getElementsByTagName("div")[0];
					ej1.style.display="none";
			}
			lb2.onmouseover=function(){	
				var ej2=this.getElementsByTagName("div")[0];
					ej2.style.display="block";
			}
			lb2.onmouseout=function(){
				var ej2=this.getElementsByTagName("div")[0];
					ej2.style.display="none";
			}
			var a1=document.getElementById("dgd")
			var a2=document.getElementById("dgd2")
		a2.innerHTML+=a2.innerHTML;
		var time,t;
		function scrollL(){
			if(a1.scrollLeft%1349==0){
				clearInterval(time);
				t=setTimeout(starttime,1000)
			}
			if(a1.scrollLeft>=a2.scrollWidth/2){
				a1.scrollLeft=0
			}else{
				a1.scrollLeft++
			}
		}
		function starttime(){
			a1.scrollLeft++
			time=setInterval(scrollL,5)
		}
		starttime();
		a1.onmouseover=function(){
			clearInterval(time)
			clearTimeout(t)
		}
		a1.onmouseout=function(){
		time=setInterval(scrollL,5)
		}
	