

//Fonction pour le menu déroulant////////////////////////////////////////
var menuButton = document.getElementById("hamburger");
menuButton.addEventListener('click',function(){
    // une action à faire
    
    document.querySelector('#menu-aside').classList.remove("display-none")
    document.querySelector('#menu-aside').classList.toggle("menu");//on retire le menu ou on l'ajoute

    var a=document.querySelectorAll('#section-aside>*');// on crée un array de tous les enfants de #section-aside
    var i =0;
    while(i<a.length){ //on toogle la classe display none de tous les enfants de #section-aside
        a[i].classList.toggle("display-none");
        i=i+1;
    }

    if (document.querySelector('#menu-aside').classList != "menu")
    {
        
        document.querySelector('#menu-aside').classList.toggle("retirer");
    }


     
});
console.log(Date.now()-localStorage["date"]);
if( (Date.now()-localStorage["date"])>1000000){
    localStorage.clear();
    console.log("oui");
}

if ("jsonPanier" in localStorage ){
    
    // tampon = localStorage["jsonPanier"];
    tampon = JSON.parse(localStorage["jsonPanier"]);
    Object.keys(tampon).length
    

    
    if (Object.keys(tampon).length==0){
        tampon=0
    }
    else{
        tampon=Object.keys(tampon).length
    }
    document.getElementById('LePanier').insertAdjacentHTML('beforeend','<div>'+tampon+'</div>');
    document.getElementById('LePanier').addEventListener("click",function(){
        window.location="panier.html";
    });
}
else{
    
    tempo= {};
    localStorage.setItem("jsonPanier",JSON.stringify(tempo));
    document.getElementById('LePanier').insertAdjacentHTML('beforeend',"<div>0</div>");
    localStorage.setItem("date",Date.now());
}
console.log();
////////////////////////////////////////////////////////////////////////
