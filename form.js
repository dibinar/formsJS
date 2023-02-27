// <274>
//  let elem = document.querySelector('#elem');
// let p = document.querySelector('#p');
// elem.addEventListener("blur", func)
// function func() {
//  p.textContent = elem.value
// }

// <275>[1]

//  let elem = document.querySelector('#elem');
// let button = document.querySelector("#button")
// button.addEventListener("click", func);
// function func() {
//   elem.disabled = true
// }


// <275>[2]

//  let elem = document.querySelector('#elem');
// let button = document.querySelector("#button");
// let button2 = document.querySelector("#button2");
// button.addEventListener("click", func);
// function func() {
//   elem.disabled = true
// }
//  button2.addEventListener("click", func2);
// function func2(){
//   elem.disabled = false
// }

// <275>[3]

//  let elem = document.querySelector('#elem');
// let button = document.querySelector("#button");
// button.addEventListener("click", func);
// function func() {
//  console.log(elem.disabled)
// }

// <276>[1]

//  let button2 = document.querySelector('#button2');
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

//  button.addEventListener("click", func)
// function func(){
//   elem.checked = true;
// }

//  button2.addEventListener("click", func2)
// function func2(){
//   elem.checked = false;
// }

// <276>[2]

//  let p = document.querySelector('#p');
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

//  button.addEventListener("click", func)
// function func(){
//   let a = elem.checked
//    if (a<true) {
//        p.textContent = "goodbye";
//     }
//    else{
//       p.textContent = "hello";
//    } 
// }


//<277>
// let elem   = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	if (elem.disabled) {
// 		elem.disabled = false;
// 	} else {
// 		elem.disabled = true;
// 	}
// });

//<278>[1]
// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('#button');
// let p = document.querySelector('p');
// button.addEventListener('click', function() {
// 	for (let radio of radios) {
// 		if (radio.checked) {
//             radio.checked = true
//             p.textContent = +radio.value
// 		}
       
// 	}
// });