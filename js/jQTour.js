//jQuery Tour Plugin

 var data = [
             {"key":0, "value": {"title":"start",  "desc":"This is the start","css":"start" }} ,
             {"key":1, "value": {"title":"middle", "desc":"This is the middle","css":"mid" }} ,
             {"key":2, "value": {"title":"end",    "desc":"This is the end","css":"end" }}
        ];

 var jQTour = {

     init: function(msg){
         this.msg = msg;
     },
     dict: function(o)
     {
    	 if (o === 0)
    		 return "start";
     	 if (o === 1)
     		 return "mid";
     	 if (o === 2)
     		 return "end";
     	 if (o === "mid")
     		 return 1;
     	 if (o === "start")
     		 return 0;
     	 if (o === "end")
     		 return 2;
     },
     show: function(o, e)
     {
    	 var tmp = jQTour.dict(o);
         window.location = "#h-"+o;
         var resp = jQTour.disp(tmp);
         jQTour.tmpl(resp);
         e.preventDefault();
     },
     tmpl: function(resp)
     {
         $(".jQTour").each(function(){ $(this).remove(); });
         var prev = "";
         if(resp["push"] != null) { prev = "<a id='prev' href='#h-"+resp["push"]+"' data-id='"+resp["push"]+"'> < </a>"; }

         var next = "";
         if(resp["next"] != null) { next = "<a id='next' href='#h-"+resp["next"]+"' data-id='"+resp["next"]+"'> > </a>"; }

         $("#h-"+resp["content"].css).append("<div class='"+resp["content"].css+" jQTour'>"+
                         "<p id='title'>"+resp["content"].title+"</p>"+
                         "<p id='msg'>"+resp["content"].desc+"</p>"+
                         prev+next+
                         "</div>");
         $("#next").on("click",function(e){ jQTour.show($(this).attr("data-id"), e); });
         $("#prev").bind("click",function(e){ jQTour.show($(this).attr("data-id"), e); });
     },
     disp: function(o) //Display
     {
         var resp = [];
         if(o == undefined) { o = 0; }

         if (o == this.msg.length-1) n = null;
         else n = parseInt(o)+1;

         if(o == 0) p = null;
         else p = parseInt(o)-1;

         var n = jQTour.dict(n);
         var p = jQTour.dict(p);

         resp["next"] = n;
         resp["push"] = p;
         for (var i in jQTour.msg)
         {
             if(jQTour.msg[i].key == o)
                 resp["content"] = jQTour.msg[i].value;
         }
         return resp;
     }
 };

$(document).load(function(data){
    jQTour.init(data);
    var resp = jQTour.disp();
    setTimeout(function(){
    	jQTour.tmpl(resp);
    }, 1000);
}(data));
