let myBtn = document.getElementById("btn");
let myInput = document.getElementById("pass");

myBtn.onclick = function (event) {
    event.preventDefault();//Preventing the default form submission behavior
    if (myInput.dataset.flag === "true") {
        myInput.dataset.flag = "false" ;
        myInput.setAttribute("type","text");
        this.textContent = "hide";
    }
    else {
        myInput.setAttribute("type","password");
        myInput.dataset.flag = "true" ;
        this.textContent = "show";
    }

};


