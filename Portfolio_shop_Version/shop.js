

function PutOnclick(listeprojets) {
    // console.log(listeprojets)
    for (var i = 0; i < listeprojets.length; i++){
        
        // document.getElementById(listeprojets[i]).onclick = function() { console.log(listeprojets[i]); };
        document.getElementById(listeprojets[i]).addEventListener('click',( function(arg1) {
                                                                                                return function() { localStorage.setItem('article', arg1); } ;
                                                                                            } 
                                                                ) ( listeprojets[i] ), false );
    }

}


function AllProject(json){
    let section = document.getElementById('projets');
    let i=0;
    let listeProjets=[];
    for (let projet in json) {      
        i=i+1;
        section.insertAdjacentHTML('beforeend','<a id=article'+i+' href="article.html"> <img src=" '+json[projet]["image"]["image1"]+' " alt="imageProjet"><div> <div>'+json[projet]["Titre"]+'</div> <div>'+json[projet]["SousTitre"]+'€</div> </div> </a>');
        // document.getElementById(i).onclick = function() { alert(document.getElementById(i).id); };    
        // console.log(document.getElementById(i));
        listeProjets.push("article"+i)  ;
    }
    return listeProjets

};





var requestURL = 'shop.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var listeProjets = request.response;
    var projets=AllProject(listeProjets);
    PutOnclick(projets);
};





