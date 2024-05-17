$(document).ready(function () {
    $("#nav_list a").click(function (evt) {

        var speakerTitle = $(this).attr("title"); 
        var jsonFile = "./json_files/" + speakerTitle + ".json"; 

        $.ajax({
            type: "get",
            url: jsonFile,
            beforeSend: function () {
                $("main").html(""); 
            },
            timeout: 10000, 
            error: function () {
                alert("Error: It’s not working!"); 
            },
            dataType: "json", 
            success: function (data) {
                $.each(data.speakers, function (index, speaker) {
                    var html = "<h1>" + speaker.title + "</h1>" +
                                      "<img src='" + speaker.image + "' alt='" + speaker.title + "'>" +
                                      "<h2>" + speaker.month + "<br>" + speaker.speaker + "</h2>" +
                                      "<p>" + speaker.text + "</p>" ;

                    $("main").append(html);
                });
            }
        });
   
        evt.preventDefault(); 
    });
});