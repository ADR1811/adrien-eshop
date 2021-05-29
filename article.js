

function Article(json,unArticle){

    var unArticle = unArticle
    var json = json
    let section = document.getElementById('PageArticle');
    let titre=  document.getElementById('titreArticle');
    let contenuArticle = document.getElementById('contenuArticle');
    let contenuPhoto = document.getElementById('contenuPhoto');
    let PrixStockScoreEval = document.getElementById('PrixStockScoreEval');
    let prix = document.getElementById('prix');
    let resume = document.getElementById('resume');
    let commentaire = document.getElementById('commentaire');
    let panier = document.getElementById('panier');
    let popup = document.getElementById('popup');
    let close = document.getElementById('close');
        
    titre.insertAdjacentHTML('beforeend',json[unArticle]["Titre"]);      
    contenuPhoto.insertAdjacentHTML('beforeend','<section id="photo"> <img id="image1" src=" '+json[unArticle]["image"]["image1"]+' " alt="imageArticle"> <img id="image2" src=" '+json[unArticle]["image"]["image2"]+' " alt="imageArticle"> <img id="image3" src=" '+json[unArticle]["image"]["image3"]+' " alt="imageArticle"> <img id="image4" src=" '+json[unArticle]["image"]["image4"]+' " alt="imageArticle"> <img id="image5" src=" '+json[unArticle]["image"]["image5"]+' " alt="imageArticle"> </section> <img id="ImageChange" src=" '+json[unArticle]["image"]["image1"]+' " alt="imageArticle">');
    prix.insertAdjacentHTML('beforeend','<div>'+json[unArticle]["SousTitre"]+'€</div>')
    StockScoreEval.insertAdjacentHTML('beforeend','<div>Avis : '+json[unArticle]["score"]+'</div>  <div>Nombre avis : '+json[unArticle]["évaluation"]+' </div>');
    resume.insertAdjacentHTML('beforeend','<div>Résumé : '+json[unArticle]["résumé"]+'</div>')

    

    panier.addEventListener("click",function(){
        
        if (popup.classList=="nothere"){
            
            popup.classList.remove("nothere"); 
            
            
            
            tampon = localStorage.getItem("jsonPanier");
            tampon = JSON.parse(tampon);
            tampon[unArticle] = json[unArticle];
            
            localStorage.setItem("jsonPanier",JSON.stringify(tampon));


        }
        
    });


    close.addEventListener("click",function(){
        popup.classList.add("nothere");
        
        window.location= "shop.html";
    });


    
    for (let com in json[unArticle]["commentaires"] ){
        commentaire.insertAdjacentHTML('beforeend','<div> <div>'+json[unArticle]["commentaires"][com]["name"]+'</div> <div>'+json[unArticle]["commentaires"][com]["avis"]+'</div> <div>'+json[unArticle]["commentaires"][com]['commentaire']+'</div>   </div>');
    }

    document.getElementById('image1').addEventListener("mouseover",function(){document.getElementById("ImageChange").setAttribute( 'src', json[unArticle]["image"]["image1"] );});
    document.getElementById('image2').addEventListener("mouseover",function(){document.getElementById("ImageChange").setAttribute( 'src', json[unArticle]["image"]["image2"] );});
    document.getElementById('image3').addEventListener("mouseover",function(){document.getElementById("ImageChange").setAttribute( 'src', json[unArticle]["image"]["image3"] );});
    document.getElementById('image4').addEventListener("mouseover",function(){document.getElementById("ImageChange").setAttribute( 'src', json[unArticle]["image"]["image4"] );});
    document.getElementById('image5').addEventListener("mouseover",function(){document.getElementById("ImageChange").setAttribute( 'src', json[unArticle]["image"]["image5"] );});

};



var article = localStorage["article"]

var requestURL = 'shop.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    listeProjets = request.response;
    Article(listeProjets,article);
    
};



