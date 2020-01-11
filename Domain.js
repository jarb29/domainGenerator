var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

let onload = document.getElementById('new');
//function random_item(items)
//{
//return items[Math.floor(Math.random()*items.length)];
//}

//var resultado = (random_item(pronoun) + ' '+ random_item(adj) + ' ' +random_item(noun));
//console.log(resultado);


let a =[];

for(let i =0; i<pronoun.length; i++){
  for(let b =0; b<adj.length; b++){
    for(let c =0; c<noun.length; c++){
      a.push(pronoun[i]+ adj[b]+ noun[c]+".com"+"<br>");
    }}};


  onload.innerHTML = a.join(" ")
