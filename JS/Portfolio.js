//Starting with smooth scrolling
$(document).ready(function(){
    $("a").on('click',function(event){
        //Makes sure value before overriding default behaviors
        if (this.Link !== "") {
            //prevent default anchor click behavior
            event.preventDefault();
            //Store link
            var Link= this.Link;
            $('html','body').animate({
                scrollTop: $(Link).offset().top
            }, 2000, function() {
                window.location.Link = Link;
            });
        } //End if statement
    });
});

//Open and close contact form:
function openForm() {
    document.getElementById("cForm").style.display="block";
}

function closeForm() {
    document.getElementById("cForm").style.display= "none";
}