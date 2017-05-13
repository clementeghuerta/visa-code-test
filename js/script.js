/*
console.log('working');


$(function(){	
var direction = "",
    oldx = 0,
    mousemovemethod = function (e) {
    
        if (e.pageX < oldx) {
            $('.animation').addClass('.animation-2');
        } else if (e.pageX > oldx) {
            $('.animation').addClass('.animation-1');
        }
        
        document.body.innerHTML = direction;
        
        oldx = e.pageX;
        
        console.log('working');
}
});



console.log('working');


*/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}