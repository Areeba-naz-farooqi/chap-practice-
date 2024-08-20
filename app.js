var para = document.getElementById("para")
// console.log(document.childNodes[1].childNodes[1]);

// console.log(para.hasAttribute("href"));
// console.log(para.getAttribute("id"));


// para.setAttribute("class", "styling")
// console.log(para.attributes);

// console.log(para.nodeType)
//  console.log(para.nodeName)
// console.log(para.childNodes)

// function abc(event){
//     console.log(event.target.nodevalue);
    
// }
var list = document.getElementById("list");

function add(){
var childrens = list.children;
for(var i =0;i<childrens.length;i++){
    childrens[i].innerHTML = "<b>"+"hello"+"</b>";      
}
    
}

var para = document.createElement("p")

var content = document.createTextNode("hello")

var final= para.appendChild(content)
document.childNodes[1].childNodes[2].appendChild(final)
var div = document.getElementById("div")

var para = document.createElement("p");

var text = document.createTextNode("hello")

var btn = document.createElement("button")
var btnTxt = document.createTextNode("remove")

btn.appendChild(btnTxt)

para.appendChild(text)

div.appendChild(para)
div.appendChild(btn)







