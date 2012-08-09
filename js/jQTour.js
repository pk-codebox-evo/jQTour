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

    tmpl: function(resp)
    {
        $(".jQTour").each(function(){
            $(this).remove();
        });

        var prev = "";
        if(resp["push"] != null)
            var prev = "<a id='prev' href='#h"+resp["push"]+"' data-id="+resp["push"]+"> < </a>";
    
        var next = "";
        if(resp["next"] != null)
            var next = "<a id='next' href='#h"+resp["next"]+"' data-id="+resp["next"]+"> > </a>";
    
        
        $("#bd").append("<div class='"+resp["content"].css+" jQTour'>"+
                        "<p id='title'>"+resp["content"].title+"</p>"+
                        "<p id='msg'>"+resp["content"].desc+"</p>"+
                        prev+next+
                        "</div>");
        $("#next").on("click",function(e){
            window.location = "#h"+$(this).attr('data-id');
            var resp = jQTour.disp($(this).attr("data-id"));
            jQTour.tmpl(resp);
            e.preventDefault();
        });
    
        $("#prev").bind("click",function(){
            var resp = jQTour.disp($(this).attr("data-id"));
            jQTour.tmpl(resp);
        });
    },

    disp: function(o) //Display
    {
        var resp = [];
        if(o == undefined)
            o = 0;

        if (o == this.msg.length-1) n = null;
        else n = parseInt(o)+1;

        if(o == 0) p = null;
        else p = parseInt(o)-1;

        resp["next"] = n;
        resp["push"] = p;
        for (var i in this.msg)
        {
            if(this.msg[i].key == o)
                resp["content"] = this.msg[i].value;
        }
        return resp;
    }
};

(function(d) {
    jQTour.init(d);
    var resp = jQTour.disp();
    jQTour.tmpl(resp);

}(data));

​