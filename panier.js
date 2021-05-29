

if (Object.keys(JSON.parse(localStorage["jsonPanier"]))==0){
    window.location="shop.html";
}
function AllProject(json,nArticle){
    let section = document.getElementById('pagepanier');
    
    let prix= 0;
    var i =0;
    
    for (let article in nArticle) {  
        
        i=i+1;
        
        section.insertAdjacentHTML('beforeend','<div class="ligne"> <div> <div>'+json[nArticle[article]]["Titre"]+'</div> <div>'+json[nArticle[article]]["SousTitre"]+'€</div></div> <img id="trash'+i+'" src="src/Image/trash.png" alt="trash">   </div>');
        prix=prix+json[nArticle[article]]["SousTitre"]
        document.getElementById('trash'+i).addEventListener('click',(function(arg1) {
            return function() { 
                    let tampon = localStorage.getItem("jsonPanier");
                    tampon = JSON.parse(tampon);
                    console.log(arg1)
                    delete tampon[arg1]
                    console.log(tampon);
                    localStorage.setItem("jsonPanier",JSON.stringify(tampon));
                    if (Object.keys(JSON.parse(localStorage["jsonPanier"]))==0){
                        window.location="shop.html";
                    }
                    else{
                        window.location="panier.html";
                    }
                    
            } ;
        } 
            ) ( nArticle[article]), false );
    }
    section.insertAdjacentHTML('beforeend','<div id="prix"> Prix total : '+prix+'€</div>');
    section.insertAdjacentHTML('beforeend','<a href="final.html" id="send">Confirmer le prix</a>');
    // document.getElementById('send').addEventListener('click',function(){
        
    // });

};




let nbrArticle = Object.keys(JSON.parse(localStorage["jsonPanier"]));

var requestURL = 'shop.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var listeArticle = request.response;
    AllProject(listeArticle,nbrArticle);
    
};