let media1 = function(a,b,c){
    return (a+b+c)/3;
}

let media2 = function(a,b,c){
    return (a*0.3)+(b*0.3)+(c*0.4);
}

function imprimenota(nome,n1,n2,n3,funcao){
    
    let media = funcao(n1,n2,n3);
    document.write(nome+": "+media+"<br>");
    
}

imprimenota("Joao",10,9,8,media1);