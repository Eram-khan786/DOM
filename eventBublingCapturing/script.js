// Bubbling =>Rander from child to parent
// Capturing=>from parent to child

const grandParent=document.querySelector(".grandParent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child")
const button=document.getElementById("btn")

// Bubling


// grandParent.addEventListener("click",()=>{
//     console.log("grandParent is clicked")
// })
// parent.addEventListener("click",()=>{
//     console.log("parent is clicked")
// })
// child.addEventListener("click",()=>{
//     console.log("child is click")
// })


// Event Capturing

// grandParent.addEventListener("click", () => {
//   console.log("grandParent is clicked");
// },{capture:true});
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent is clicked");
//   },
//   { capture: true }
// );
// child.addEventListener(
//   "click",
//   () => {
//     console.log("child is click");
//   },
//   { capture: true }
// );


// Stop propogation

// grandParent.addEventListener(
//   "click",
//   (e) => {
//     // e.stopPropagation();
//     console.log("grandParent is clicked");
//   },
//   { capture: true }
// );
// parent.addEventListener(
//   "click",
//   (e) => {
//     // e.stopPropagation();

//     console.log("parent is clicked");
//   },
//   { capture: true }
// );
// child.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();

//     console.log("child is click");
//   },
//   { capture: true }
// );


// it is working in bubbling now 

// grandParent.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("grandParent is clicked");
//   },
//   { once: true }
// );
// parent.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();

//     console.log("parent is clicked");
//   },
//   { once: true }
// );
// child.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();

//     console.log("child is click");
//   },
//   { once: true }
// );




// grandParent.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("grandParent is clicked");
//   },
//   { once: true ,capture:true}
// );
// parent.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
    
//     console.log("parent is clicked");
//   },
//   { once: true ,capture:true}
// );
// child.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();

//     console.log("child is click");
//   },
//   { once: true ,capture:true}
// );


// for removing the element after specific interval of time 


// function printGrandParent(){
//     console.log("grandParent bubling")
// }
// grandParent.addEventListener("click",printGrandParent);

// setTimeout(()=>{
//     grandParent.removeEventListener("click",printGrandParent)
// },5000)


// function printGrandParent(){
//     console.log("grandParent Bubling")
// }

// grandParent.addEventListener("click",printGrandParent)



// function removeGrandParent() {
//   setTimeout(()=>{
//     grandParent.removeEventListener("click",printGrandParent)
//   },500)
// }
// button.addEventListener("click",removeGrandParent)


// grandParent.addEventListener("mouseover",()=>{
//     console.log("hovering")
// })


// grandParent.addEventListener("mouseenter", () => {
//   console.log("hovering");                            // only at grandParent
// });



// grandParent.addEventListener("mouseout", () => {
//   console.log("hovering");                              //it acts as mouseover , when in bulling , if we go at any place means in child or parent so it will count
// });

// grandParent.addEventListener("mouseleave", () => {
//   console.log("hovering");               // only at grandParent
// });