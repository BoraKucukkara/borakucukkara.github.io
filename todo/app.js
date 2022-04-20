/* NOTLAR
task çift tıklandığında ondblclick- tekrar açılacak ve sayaçları tekrar hesaplayacak
done durumunda olanlara remove özelliği eklenecek
clear all X sağa dayanacak
 */


let active = 0;
let passive = 0;
let total = 0;
let identity = []; // her taskın ID'sini tutuyor.
// let poz = identity.indexOf("task2345"); // array pozisyonunu veriyor örn. 4
// const ayir = identity.slice(0,1); // 0ıncı itemin adını verir.

function onLoadFocus() {
    document.getElementById("newtask").focus();
}

function add() {
    let todoekle = document.getElementById("newtask").value
    if (todoekle === "" || todoekle === " ") {
        return;
    }
    let liid = total + 1; // 1'den başlayarak artan ID verdik;
    let ul = document.getElementById("tasks");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(todoekle)); // li ekledik
    li.setAttribute("id", liid); // id verdik
    ul.appendChild(li);
    document.getElementById(liid).className = "list-group-item list-group-item-action"
    li.setAttribute("onclick", "tamam(" + liid + "); this.classList.add('done');");
    identity.push(liid);
    active = identity.length;
    total = identity.length;
    document.getElementById("activebox").innerText = total;
    document.getElementById("bodytext").innerText = "";
    document.getElementById("newtask").focus();
    document.getElementById("idbox").innerText = identity;
}

function tamam(taskid) { // tıklanan li elementinin ID'sini aldık
    passive++
    active--
    document.getElementById("passivebox").innerText = passive;
    document.getElementById(taskid).removeAttribute("onclick"); // tekrar tıklanmasını engelledik
    if (passive === total) {
        document.getElementById("bodytext").innerText = "Well done! All tasks completed!";
    }
    loadbar();
}

function loadbar() {
    let yuzdekac = ((100 / total) * passive);
    document.getElementById("loading").setAttribute("style", "width:" + yuzdekac + "%;");
}

function reset() { // sayac sıfırlama fonksiyonu
    passive = 0
    active = 0
    total = 0
    document.getElementById("passivebox").innerText = passive;
    document.getElementById("activebox").innerText = active;
    document.getElementById("newtask").focus();
    document.getElementById("newtask").value = ""
    document.getElementById("loading").setAttribute("style", "width:0%;");
    document.getElementById("loading").innerText = ""

}

window.clearall = function () { //li elementleri siliyoruz
    var ul = document.querySelector('.tasks');
    var listLength = ul.children.length;
    for (i = 0; i < listLength; i++) {
        ul.removeChild(ul.children[0]);
    }
    reset(); // sayacları sıfırlıyoruz
    document.getElementById("bodytext").innerText = "Add a new task";
    identity = []
    document.getElementById("idbox").innerText = identity;
}

// tamamla() onclickten kaldır.
