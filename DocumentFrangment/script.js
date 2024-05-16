// first method 

// let fragment=document.createDocumentFragment()

//  second method

// let fragment=new DocumentFragment()

// let language=["HTML","CSS","Python","C","Javascript","Bootstrap",".............."]

// let ul=document.querySelector("#lang")

// language.forEach(element => {
//     let listItem=document.createElement("li")
//     listItem.textContent=element
//     fragment.appendChild(listItem)
// });

// ul.appendChild(fragment)


// let newLang=language.map((ele)=>{
//     let li=document.createElement("li")
//     li.innerText=ele;
//     return li 
// })
// // ul.firstChild.after(...newLang)
// ul.lastChild.after(...newLang);

// fragment.appendChild(newLang)
// ul.appendChild(fragment)



// cloneNode() Method


// deep:if true so each and every element will come inside ul 
// if false :so only ul will come


// Syntax

// let cloneNode=originalNode.cloneNode(deep)



// let langEl=document.querySelector("ul")
// let cloneNodeEle=langEl.cloneNode(true)
// document.body.appendChild(cloneNodeEle);




// removeChild() Method



// syntax 

// let childNode=querySelector.removeChild()

// let langEl=document.querySelector("ul")
// // langEl.removeChild(langEl.lastElementChild)

// // langEl.innerHTML=""


// // Remove the element using while

// while(langEl.firstChild){
//     langEl.remove(langEl.firstChild)
// }


// let langEl=document.querySelector("#lang");
// let newLang=document.createElement("li")
// newLang.innerHTML="C+++";
// // langEl.insertBefore(newLang,langEl.firstElementChild);
// langEl.insertBefore(newLang, langEl.children[1]);


let langEl = document.querySelector("#lang");
let newLang = document.createElement("li");
newLang.innerHTML = "C+++";
// langEl.insertBefore(newLang,langEl.firstElementChild);
insertAfter(newLang, langEl.children[1]);
