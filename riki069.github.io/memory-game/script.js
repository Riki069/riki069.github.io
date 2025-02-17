function main(){
    list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"];

    randomszam();

    var divek = document.querySelectorAll("main div");
    for (let index = 0; index < divek.length; index++) {
        const element = divek[index];
        element.id = list[randomlista[index]];
        element.innerHTML = list[randomlista[index]];
        element.addEventListener('click', klikk);
        element.felforditva = true;
    }
    
    indulhat()
    setTimeout(function(){
        for (let index = 0; index < divek.length; index++) {
            const element = divek[index];
            element.innerHTML = "";
            element.felforditva = false;
            }
    }, 2000);

    setTimeout(() => {
        szamlalo();
    }, 2000);
}//17

function indulhat(){
    for (let index = 0; index <= 20; index++) {
        setTimeout(function(){
            kivonas();
        }, index * 100);
    }
}



felcount = 0;
felegy = null;
lock = false;
kattintasok = 0;
megtalaltparok = 0;
function klikk(e){
    if(lock == false){
        let elem = e.target;
        if(elem.felforditva == false){
            kattintasok++;
            lock = true;

            elem.felforditva = true;
            elem.innerHTML = elem.id;
            if(felegy != null){
                if(felcount == 0){
                    felcount = 1;
                    felegy = elem;
                    lock = false;
                }
                else if(felcount == 1){
                    felcount = 0;
                    
                    if(felegy.id == elem.id){
                        //alert('Eltaláltad!');
                        felegy.style.backgroundColor = "green";
                        elem.style.backgroundColor = "green";
                        lock = false;
                        megtalaltparok++;
                        document.getElementById("megtalaltpar").style.color= "green";
                        document.getElementById("megtalaltpar").innerHTML = megtalaltparok;
                        setTimeout(() => {
                            document.getElementById("megtalaltpar").style.color= "";
                            
                        }, 1000);
                    }
                    else{
                        felegy.style.backgroundColor = "red";
                        elem.style.backgroundColor = "red";
                        setTimeout(function(){
                            
                            felegy.innerHTML = "";
                            felegy.felforditva = false;
                            elem.innerHTML = "";
                            elem.felforditva = false;
                            
                            felegy.style.backgroundColor = "";
                            elem.style.backgroundColor = "";
                            
                            lock = false;
                        }, 1000);
                    }
                }
            }
            else{
                felegy = elem;
                felcount = 1;
                lock = false;
            }
        }
        document.getElementById("katt").style.color= "red";
        document.getElementById("katt").innerHTML = kattintasok;
        setTimeout(() => {
            document.getElementById("katt").style.color= "";
                            
            }, 300);
    
    }
}

randomlista = [];
mennyivanbenne = 0;
function randomszam(){
    rand = Math.floor((Math.random() * 36))
    if(mennyivanbenne < 36){
        if(bennevane(rand, randomlista)){
            randomszam();
        }
        else{
            randomlista[mennyivanbenne] = rand;
            mennyivanbenne++;
            randomszam();
        }
    }
}

function bennevane(szam, lista){
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        if(lista[index] == szam){
            return true;
        }
    }
    return false;
}

main();