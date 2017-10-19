 var topics = ["Spice World", "Game of Thrones", "Pizza", "Owls", "Orange is the New Black", "Cats", "Puppies", "90s"];
 //for loop for creating buttons to display all items in topics array as buttons
 //add class
 //add data attribute
 //add to buttons div


// function displayTopicInfo(){


$('body').on("click", ".topic", function() {

     var topic = $(this).data("name");
     console.log(topic);

     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=TzcfkrW6fe8k4hoyLrvT4LmOMLeFibbe&limit=10";

     // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + topic;

     // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=TzcfkrW6fe8k4hoyLrvT4LmOMLeFibbe&tag=" + topic;



     $.ajax({
         url: queryURL,
         method: "GET"
     }).done(function(response) {

        var imgArray = response.data;

        console.log(response);

        for (var i = 0; i < imgArray.length; i++) {
         var imageUrl = imgArray[i].images.original.url;
         console.log(imageUrl);

         var gif = $("<img>");
        
    
         gif.attr("src", imageUrl);
         gif.attr("alt", "images");

         $(".gifs").prepend(gif);
         renderButtons();
       }  
     });
    
 });
// }

function renderButtons() {
 
$("#buttons").empty();


 for (var i = 0; i < topics.length; i++) {

     var a = $("<button>");
     a.addClass("topic");
     a.attr("data-name", topics[i]);
     a.text(topics[i]);
     $("#buttons").append(a);
 }
}

 $("#add-topic").on("click", function(event) {
       event.preventDefault();
       var newtopic = $("#topic-input").val().trim();

       topics.push(newtopic);
       console.log(newtopic);
       renderButtons();
     });

 // $(document).on("click", ".topic", displayTopicInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();


 //add click event to call the display gif function
 // $(document).on("click", ".gifs", displaygif);