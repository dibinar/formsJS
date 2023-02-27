//<280>[1]
//  let elem = document.querySelector('#elem');

// elem.addEventListener('input', function() {
// 	if(elem.value.length >= 5){
//     console.log("5 symbols!")
//   }
// });

//  let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('input', function() {
// if(elem.value.length < 6 ){
//  p.textContent = "you can enter symbols" + " "+ (+(5) - +(elem.value.length))
// }
//  else if (elem.value.length > 5){
//    p.textContent = "you exceed by" + " "+ ( +(elem.value.length) - +5)
// }
// });

//<281>[1]
//  let elem1   = document.querySelector('#elem1');
// let elem2   = document.querySelector('#elem2');
// elem1.addEventListener('change', function() {
// 	if(elem1.value.length == 2){
//      elem2.focus()
//  }
    
// });

// elem2.addEventListener('change', function() {
// 	if(elem2.value.length == 2){
//         elem2.blur()
//   }
// });

//<282>[1]
// let select = document.querySelector('#select');
// let button = document.querySelector("#btn")
// let p = document.querySelector("p")
// button.addEventListener("click",func)
// function func(){
//     p.textContent = select.value
// }

//<282>[2]
// let select = document.querySelector('#select');
// select.addEventListener('change',func)
// function func(){
//     if(select.value % 4 == 0){
//       console.log('yes')
//    }
//     else{
//       console.log('no')
//    }
// }

//<282>[3]
// let select = document.querySelector('#select');
// select.addEventListener('change',func)
// function func(){
//    if(select.value <= 5){
//        console.log("the working day is selected")
//     }
//    else{
//       console.log("a day off is selected")
//    }
// }