$(document).ready(function(){

    kartKaristir();
});

function yeniOyun(){
    $("#hak").text(2);
    $("#btnTekrar").css("display","");
    $("#btnYeniOyun").css("display","none");
    kartKaristir();
};

function kartKaristir(){    
    $("#kartDurum").val(1)
    var kartlar = ["kedi.jpg", "kopek.jpg","kus.jpg"];
    var kardDiv = document.getElementById("dvCards");
    kardDiv.style.marginLeft = "6%";
    kardDiv.innerHTML = "";
    kartlar = kartlar.sort(() => Math.random() - 0.5);
    for (let index = 0; index < kartlar.length; index++) {
      
        var element = kartlar[index];
        var array = element.split('.');
        var el = document.createElement("div");
        var hdn = document.createElement("input");
        hdn.type = "hidden";
        hdn.id = "hdn_"+index;
        hdn.value = array[0];
        var kart = document.createElement("img");
        kart.src = "kart.png";
        kart.height = 200;
        kart.onclick = function(){
               say(index);
        }
        var elimgDiv2= document.createElement("div");
        elimgDiv2.id = "kart_"+index;
        elimgDiv2.appendChild(kart);
        el.style.paddingRight = "10px";
        el.appendChild(elimgDiv2);
        
        el.style.border = 1;
        el.appendChild(hdn);

        var elimgDiv = document.createElement("div");
        elimgDiv.id = "img_"+index;
        elimgDiv.style.display = "none";
        var el2 = document.createElement("img");
        el2.height = 200;
        el2.src = element;
        elimgDiv.appendChild(el2);
        el.appendChild(elimgDiv);
        kardDiv.appendChild(el);
    }
    
    
}
function say(kart){
    
    if($("#kartDurum").val() == 1){
        $("#kartDurum").val(0);
        var hdn = $("#hdn_"+kart);
        var kartImg = $("#kart_"+kart);
        kartImg.css("display","none");
        var imgO = $("#img_"+kart);
        imgO.css("display","");
            if(hdn.val() == "kedi"){
                    $("#btnTekrar").css("display","none");
                    $("#btnYeniOyun").css("display","");
                    alert("Kazandınız...");
            }else{
                var kalan = $("#hak").text();
                var kalanHak = parseInt(kalan);
                kalanHak = kalanHak -1;
                $("#hak").text(kalanHak);
                if(kalanHak == 0){
                        $("#btnTekrar").css("display","none");
                        $("#btnYeniOyun").css("display","");
                        alert("Kaybettiniz..");
                }
            }
    }
    
}