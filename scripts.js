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