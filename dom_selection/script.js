// DOM Selection Method     ||  hasil
// 1. getElementById()         ||  element
// 2. getElementsByTagName()   ||  HTMLCollection
// 3. getElementsByClassName() ||  HTMLCollection
// 4. querySelector()          ||  element
// 5. querySelectorAll()       ||  nodelist

// 1.
const judul = document.getElementById('judul');
judul.style.backgroundColor = 'red';
judul.innerHTML = 'Apriansyah Rizqi Setiawan';

// 2.
// const p = document.getElementsByTagName('p');
// for(let i = 0; i < p.length; i++){
//   p[i].style.backgroundColor = 'salmon';
// }
// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// 3.
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini dibuat pake DOM';

// 4.
const p4 = document.querySelector('#b p');
p4.style.color = 'green'
p4.style.fontSize = '30px'

const li2 = document.querySelector('#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// 5.
const p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'salmon';
  }


// tips
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = "salmon";

// const sectionB = document.querySelector('#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = "salmon";