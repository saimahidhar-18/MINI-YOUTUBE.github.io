$(document).ready(function() {
    var API_KEY="AIzaSyDyhao3qmRd8yXG_zXwKC9QW-IDG0sq3Ts"
    var video=''
    $("form").submit(function(event){
        event.preventDefault()
        var videos=$("#videos")
        var search=$("#search").val()
        videoSearch(API_KEY,search,10)
    })
    function videoSearch(key,search,maxresults){
        $.get("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults="+maxresults+"&q="+search,function(data){
            console.log(data)
           data.items.forEach(item=>{
                video=`
                    <iframe width="550" height="400" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>



                `

                $("#videos").append(video)
           });
        })
    }
})