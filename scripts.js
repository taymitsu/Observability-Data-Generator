import data from './data.js'

const itemsContainer = document.querySelector('#items');

for (let i = 0; i < data.length; i += 1) {

	const newDiv = document.createElement('div');
	newDiv.className = 'item'
  console.log('item')

  const desc = document.createElement('P')
	desc.innerText = data[i].desc
	// append the desc to the div
	newDiv.appendChild(desc)
  console.log('desc')

	// Play buttone
	const button = document.createElement('button')
	button.id = data[i].name
	button.innerHTML = "Play"
	newDiv.appendChild(button)
}