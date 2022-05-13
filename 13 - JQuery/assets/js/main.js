// $(".notification").css({width:0,opacity:"0"})

// $(".click-me-btn").click(function(){
//     $(".notification").animate({opacity:"1",width:"300px"},500)
//     $(".loading").animate({width:"100%"},2500)
//     setTimeout(() => {
//         closeNotification();
//     }, 2500);
//     // $(".notification").slideDown();
// });
// $(".notification").click(function(){
//     closeNotification();
// })

// function closeNotification() {
//     $(".notification").animate({opacity:"0",width:"0"})
// }

// setInterval(() => {
//     $(".notification").toggle()
// }, 100);


// $('.count').each(function () {
//     var $this = $(this);
//     jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//       duration: 10000,
//       easing: 'swing',
//       step: function () {
//         $this.text(Math.ceil(this.Counter));
//       }
//     });
//   });

// $("p, span, div").css("color","red");    
$("button").click(function () {
    $("ul").append("<li>"+$("input").val()+"</li>");
    $("input").val("");
    // $("li").click(function(){
    //     $(this).remove();
    // })
})

// $("li").click(function(){
//     $(this).remove();
// })

$("ul").on("click","li",function() {
    $(this).remove();
})