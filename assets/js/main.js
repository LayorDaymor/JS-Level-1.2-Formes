function meinAlterBerechne(){
    const geburtsjahr =document.getElementById ("geburtsjahr").value

    const dasAlter = 2020 - geburtsjahr ;
    
    document.getElementById("geburtsjahr-ergibniss").innerText=dasAlter
    
}