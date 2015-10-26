/**
 * Created by Echo on 2015/10/23.
 */
var progressBar = {
    initProgressBar: function($ele, cfg){
        this.cfg = {
            title: {
                show: true,
                style: {
                    color: "#000",
                    "background-color": "#fff"
                }
            },
            height: '25',
            width: "100%",
            backgroundColor: "#337ab7",
            striped: false,
            name: "root",
            percentage: 0
        };

        $.extend(true, this.cfg, cfg);


        var percent = this.cfg.percentage;
        var backColor = this.cfg.backgroundColor;

        /*if($("html").find("head").html().indexOf("css/progressBar.css") == -1){
            $("head").prepend("<link rel=\"stylesheet\" href=\"css/progressBar.css\"/>");
        }*/


        var contentHTML = "<div class=\"progress\">"
                        + "<div class=\"progress-bar\">"
                        + "<span>" + this.cfg.name + "</span>"
                        + "</div>"
                        + "</div>";

        if(this.cfg.title.show){
            contentHTML += "<div class=\"progress-title\">"
                        + "<span>" + percent + "%</span>"
                        + " </div>";
        }
        $ele.empty();
        $ele.html(contentHTML);
        if(this.cfg.striped){
            $ele.find(".progress-bar").addClass("progress-bar-striped");
        }
        setTimeout(function(){
            $ele.find(".progress-bar").css({"background-color": backColor})
                                        .animate({'width': percent +"%"});
        }, 50);
    }
};