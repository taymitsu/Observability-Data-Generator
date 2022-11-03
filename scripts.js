import data from './data.js'
const itemsContainer = document.querySelector('#items');

for (let i = 0; i < data.length; i += 1) {

	const newDiv = document.createElement('div');
	newDiv.className = 'item'
  console.log('item')

  //name
  const name = document.createElement('name');
  name.innerText = data[i].name
  newDiv.appendChild(name)
  itemsContainer.appendChild(newDiv);

  //desc
  const desc = document.createElement('P')
	desc.innerText = data[i].desc
	newDiv.appendChild(desc)
  

	// Play button
	const button = document.createElement('button')
	button.id = data[i].button
	button.innerHTML = "Play"
	newDiv.appendChild(button)
}

/////////////////////Jeremy Status Bar Functionality 
/* Status Bar */
button1 = document.querySelector('.button1');
button2 = document.querySelector('.button2');
function showButton1() {
  button1.style.opacity = 1;
};

function hideButton1() {
  button1.style.opacity = 0.2;
};

function showButton2() {
  button2.style.opacity = 1;
};
button2.addEventListener('mouseenter', showButton2);

function hideButton2() {
  button2.style.opacity = 0.2;
};
button2.addEventListener('mouseleave', hideButton2);


/* MENUS */
menu_1 = document.querySelector('#menu_1');
menu_2 = document.querySelector('#menu_2');
function hideMenu2() {
  menu_2.style.display = 'none';
};

function hideMenu1() {
  menu_1.style.display = 'none';
};

function showMenu2() {
  menu_2.style.display = 'block';
  menu_2.style.visibility = 'visible';
};

function showMenu1() {
  menu_1.style.display = 'block';
  menu_1.style.visibility = 'visible';
};


/* CLICKING THE BUTTONS */
button1.addEventListener('click', (evt) => {
  hideButton2();
  hideMenu2();
  showMenu1();
  button1.removeEventListener('mouseenter', showButton1);
  button1.removeEventListener('mouseleave', hideButton1);
  button2.addEventListener('mouseenter', showButton2);
  button2.addEventListener('mouseleave', hideButton2);
});

button2.addEventListener('click', (evt) => {
  hideButton1();
  hideMenu1();
  showMenu2();
  button2.removeEventListener('mouseenter', showButton2);
  button2.removeEventListener('mouseleave', hideButton2);
  button1.addEventListener('mouseenter', showButton1);
  button1.addEventListener('mouseleave', hideButton1);
});




// $(document).ready(function () {
//   $('.dropdown-submenu a.test').on("click", function (e) {
//       $(this).next('ul').toggle();
//       e.stopPropagation();
//       e.preventDefault();
//   });
// });
// function changeImage(){
//   let displayImage = document.getElementById("image1")
//   if(displayImage.src.match("./icons/play.png")){
//       displayImage.src = "./icons/pause.png"
//   } else {
//       displayImage.src = "./icons/play.png"
//   }
// }