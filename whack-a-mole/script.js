function random(elozo){
    if(document.getElementById("ido").innerHTML != "0"){
        rand = Math.floor(Math.random() * 16) + 1;
        if(rand == elozo){
        random();
        }
        document.getElementById(rand).style.backgroundColor = "red";
    }
}

function pontszam(){
    document.getElementById("pont").innerHTML = parseInt(document.getElementById("pont").innerHTML) + 1;

}

function indit(){
    if(document.getElementById("ido").innerHTML == "" || document.getElementById("ido").innerHTML == "0" ){    
    random(0);
    document.getElementById("ido").innerHTML = "20";
    timer();
}
}

function timer(){
    if(parseInt(document.getElementById("ido").innerHTML) > 0){
       setTimeout(() => {
        document.getElementById("ido").innerHTML = parseInt(document.getElementById("ido").innerHTML) - 1;
        timer();
       }, 1000
       )
    }
    else{
        alert("Vége a játéknak! Pontszámod: " + document.getElementById("pont").innerHTML)
    }
}

function check(szam){
    
    if(document.getElementById(szam).style.backgroundColor == "red"){
        document.getElementById(szam).style.backgroundColor = "";
        pontszam();
        random(szam);
    }
}