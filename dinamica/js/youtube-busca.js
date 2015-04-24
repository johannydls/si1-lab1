(function( $ ) {
    $.fn.YoutubeVideo = function (pars) {
        var feeddiv = $(this);
        var pubdt;
        $(this).html("<center>"+pars.loadingtext+"</center>");
        $.ajax({type:"GET",url:pars.feedurl+"&max-results="+pars.count,dataType:"jsonp",success:function(yt_data){

            feeddiv.html("");
            $.each(yt_data.data.items,function(i,entry){
                var video_id=entry.id;
                var video_frame="<iframe width='"+pars.width+"' height='"+pars.height+"' src='http://www.youtube.com/embed/"+video_id+"' frameborder='0' type='text/html'></iframe>";
                pubdt=new Date(entry.updated);

                feeddiv.append('<div class="col-lg-4" id="fancyvideo" style="left: 50px">' + '<div class="video">'+video_frame+'</div>');
            }) }
        });

}})( jQuery );// JavaScript Document