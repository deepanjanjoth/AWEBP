

function read() {
    let a = document.querySelector("#id1").value;
    document.querySelector("div").innerHTML = a;

    let b = document.querySelector("#id2").value;
    document.querySelector("div").innerHTML = b;
    let c = document.querySelector("#id3").value;
    document.querySelector("div").innerHTML = c;

    document.querySelector("#id1").innerHTML = " ";
    document.querySelector("#id2").innerHTML = " ";
    document.querySelector("#id3").innerHTML = " "


}


