var genButton = document.querySelector("#genButton");
var output = document.querySelector(".pass__container p");
const symbols = ["q","w","e","r","t","y","u","i","o","p","è","é","ù","a","s","d","f","g","h","j","k","l","ò","à","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","1","2","3","4","5","6","7","8","9","!","£","$","%","€","?","ì",".",",",";",":"]



var genPass = function(n = 14){
    var pass = "";
    for(let i = 0; i < n; i++){
        let num = Math.floor(Math.random() * symbols.length);
        pass = pass + symbols[num];
    };
    return(pass);
};


genButton.addEventListener('click', event => {
    output.innerHTML = genPass();
},
false
);