let acc = document.getElementsByClassName("according");


for(var i=0; i<acc.length; i++)
{
    acc[i].addEventListener("click", function(){

        this.classList.toggle("active"); 
        var mov = this.nextElementSibling;

        if(mov.style.display === "block")
        {
            mov.style.display = "none";
        }else{
            mov.style.display = "block"
        }
    })
}