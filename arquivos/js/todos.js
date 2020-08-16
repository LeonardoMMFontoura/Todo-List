//Codigo em vanilla javascript
// let lis = document.getElementsByTagName("li");

// for (i = 0; i < lis.length;i++) {
//     lis[i].addEventListener("click",function(){
//         this.style.textDecoration = "line-through";
//     });
// }


$("li").click(function() {
    $(this).toggleClass("completed");
});


$('span').click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
