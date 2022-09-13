
/*function soumettre(){
    event.preventDefault()

    var nom  = document.getElementById("nom_eleve").value
    console.log(nom);  
    // pour reniatilise l'element document.getelementbyid("nom de l'id , cree un input de type reset").click()=>fonction native 
    // cree une var tbody 
}*/
/*
localstorage:
const eleve = {
    nom:nom,
    prenom:prenom,
    email =emil

}
localstorage.setitem('eleve',Json.string)
declare une var qui recupere l'eve
var geteleve = localestorage.getitem('eleve)
json.parse(geteleve)
apres cree un tableau 
var eleves = []
eleve.push(eleves)





*/




//creation de la fonction suivant 

var btnSuivant = document.getElementById("btn_suivant")
var formParentAndEnfant = document.querySelectorAll(".form_enfant");
console.log(formParentAndEnfant);
let c =0;
// fonction quand on click
function suivant(){
  c +=1;
  if(c>1){
    c=0;
  }
  for(let i =0; i<formParentAndEnfant.length; i++){
    formParentAndEnfant[i].classList.remove("active");
  }
  formParentAndEnfant[c].classList.add("active");
  

  
}





//creation var pour recupere le stockage des eleves
let numero =0;
let tbody = document.getElementById("tbody");
var eleves =[];
var getEleve = localStorage.getItem("eleve")
if(localStorage.getItem("eleve")){
     eleves = JSON.parse(localStorage.getItem("eleve"))
     for(eleve of eleves){
        numero++;
        tbody.innerHTML +=`
    
        <tr>
        <th scope="row">${numero}</th>
        <td>${eleve.nom}</td>
        <td>${eleve.prenom}</td>
        <td>${eleve.date_nais}</td>
        <td>${eleve.lieu_nais}</td>
        <td>${ eleve.class_eleve}</td>
        <td>${ eleve.nom_parent}</td>
        
        <td>${eleve.prenom_parent}</td>
        <td>${eleve.number_parent}</td>
       
      
       
      </tr>
        
        
        
        `
     }
}



console.table(JSON.parse(getEleve));

//creation tab 





function soumettre(){
    
    event.preventDefault();
   
   
  
    
   
   
    var nom = document.getElementById("nom_eleve").value; 
   var prenom = document.getElementById("prenom_eleve").value;
   var date_nais = document.getElementById("date_naissance").value;
   var lieu_nais = document.getElementById("lieu_naissance").value;
   var class_eleve =document.getElementById("classe_eleve").value;
   var nom_parent =document.getElementById("nom_parent").value;
   var prenom_parent = document.getElementById("prenom_parent").value;
   var number_parent = document.getElementById("number_parent").value;

  
  
   //creation objet
   const eleve = {
    nom:nom,
    prenom:prenom,
    date_nais:date_nais,
    lieu_nais:lieu_nais,
    class_eleve:class_eleve,
    nom_parent:nom_parent,
    prenom_parent:prenom_parent,
    number_parent:number_parent 


   

}
// boucle 

    eleves.push(eleve)


   



//envoi la data dans le localstorage
localStorage.setItem("eleve",JSON.stringify(eleves));
//var reset = document.getElementById("reset").click;

    

   
    //incrementation du numero
  
    numero++;
   
    tbody.innerHTML +=`
    
    <tr>
    <th scope="row">${numero}</th>
    <td>${nom}</td>
    <td>${prenom}</td>
    <td>${date_nais}</td>
    <td>${lieu_nais}</td>
    <td>${class_eleve}</td>
    <td>${nom_parent}</td>
    <td>${prenom_parent}</td>
    <td>${number_parent}</td>
   

  
   
  </tr>
    
    
    
    `
    console.table(eleves);
    
    
    
}
//creation objet eleve



