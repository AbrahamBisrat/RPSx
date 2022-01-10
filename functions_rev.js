

let cats = ["Leopard", "Lion", "Meaw", "BobCat", "Jaguar", "Serval", "Tiger", "Carcal"];

for(const cat of cats){
    console.log(cat);
}

cats = cats.filter(x => x.length <= 5)
            .map(x => x.toUpperCase())
            .map(x => x += " X ")
            .filter(x => x.startsWith('L'));

console.log("#########################")

for(const catya of cats){
    console.log(catya);
}

let arrayCopy = [];

for(const cat of cats){
    arrayCopy.unshift(cat);
}

console.log("#########################")

arrayCopy.reverse();

for(const copies of arrayCopy){
    console.log(copies);
}


// const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
// const para = document.querySelector('p');
// const input = "Sarah";
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     const searchName = input.value.toLowerCase();
//     input.value = "";
//     for(const contact of contacts){
//         const splitContact = contact.split(":");
//         if(splitContact[0] === searchName){
//             para.textContent = `Found user ${splitContact[0]} number is ${splitContact[1]}`;
//             break;
//         }
//     }
//   para.textContent = "no match!";

// });

// btn.addEventListener('click', () => {
//   const searchName = input.value.toLowerCase();
//   input.value = '';
//   input.focus();
//   para.textContent = '';
//   for (const contact of contacts) {
//     const splitContact = contact.split(':');
//     if (splitContact[0].toLowerCase() === searchName) {
//       para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
//       break;
//     }
//   }
//   if (para.textContent === '') {
//    para.textContent = 'Contact not found.';
//  }
// });






const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = "Sarah";
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const findString = input.value.toLowerCase();
    input.value = '';
    for(const contact of contacts){
        const delimittedContact = contact.split(":");
        if(delimittedContact[0].toLowerCase() === findString){
            console.log(`User : ${findString} is found with the ID of ${delimittedContact[1]}`)
            return;
            // break;
        }
    }
    // contact not found
});

let output = document.querySelector('.output');
output.innerHTML = '';

for(let i = 10; i >= 0; i--){
  const para = document.createElement('p');
  if(i === 10){ para.textContent = "Countdown to Zero";}
  else if(i === 0){ para.textContent = "BlastOff!!!";}
  else { para.textContent = i; }
  output.appendChild(para);
}



const refusedFolks = people.filter(x => {x.toLowerCase() === 'phil' || x.toLowerCase() === 'lola'});
for(const unfortunate of refusedFolks){
refused.textContent += unfortunate;
}