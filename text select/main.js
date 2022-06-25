let btn =document.getElementById("btn")
let show = document.getElementById("show")
let output = document.querySelector(".output");
document.addEventListener("mouseup", () => {
    btn.onclick = function () {
        //add input 
        let input = document.createElement("input")
        let att = document.createAttribute("id")
        let msg = document.getElementById("msg")
        // show the msg
        msg.innerHTML = "Write the link in the input";
        att.value = "inputId"
        input.setAttributeNode(att)
        output.appendChild(input);
        //add save btn 
        let btn = document.createElement("button");
        let attbtn = document.createAttribute("id");
        let text = document.createTextNode("save");
        attbtn.value = "btnId";
        btn.setAttributeNode(attbtn);
        btn.appendChild(text)
        output.appendChild(btn);
        let idvalue = document.getElementById("btnId")
        let inputId = document.getElementById("inputId")

        idvalue.onclick = function addLink() {
            let link = inputId.value;
            let text = document.createTextNode(textSelector);
            let a = document.createElement("a");
            const att = document.createAttribute("href");
            const id = document.createAttribute("id");
            id.value="aId"
            att.value = link;
            a.setAttributeNode(att);
            a.setAttributeNode(id);
             a.appendChild(text);
            show.appendChild(a);
        }
        let btndel = document.createElement("button");
        let attbtndel = document.createAttribute("id");
        let textdel = document.createTextNode("cancel");
        attbtndel.value = "btnIddel";
        btndel.setAttributeNode(attbtndel);
        btndel.appendChild(textdel);
        output.appendChild(btndel);
        let delbtn = document.getElementById("btnIddel");
        delbtn.onclick = function () {
            console.log(inputId);
            inputId.style.display="none"
            idvalue.style.display = "none";
            delbtn.style.display = "none";
            
           
            
        }
    }
    let textSelector = window.getSelection().toString();
});
