




function AllProject(json){
    let section = document.getElementById('projets');
    for (let projet in json) {
        section.insertAdjacentHTML('beforeend','<section> <img src=" '+json[projet]["image"]+' " alt="imageProjet"><div> <div>'+json[projet]["Titre"]+'</div> <div>'+json[projet]["SousTitre"]+'</div> <a href="'+json[projet]["lien"]+'">Suite</a><div/>   </section>');
      }
    

};

var requestURL = 'projets.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var listeProjets = request.response;
    AllProject(listeProjets)
};
