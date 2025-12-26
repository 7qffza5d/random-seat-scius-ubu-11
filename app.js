import a from './data.json' with { type: 'json' };

const code = ["KA","KM","KQ","PN","TM","MU","ST","FO","CQ","PT",
  "OC","IQ","IT","PU","MX","TP","TO","OK","RJ","TT",
  "BF","CT","ND","AB","PM","AU","YY","BN","JA","DN"
];

function shuffleObjectInPlace(obj) {
  const entries = Object.entries(obj);
  for (let i = entries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }
  for (const k of Object.keys(obj)) delete obj[k];
  for (const [k, v] of entries) obj[k] = v;
  return obj;
}

function random(){
  shuffleObjectInPlace(a);
  for(let i = 1; i <= 30; i++){
    const element = document.getElementById(i.toString());
    const currPerson = Object.values(a)[i-1];
    const name = currPerson.name;
    const number = currPerson.number;
    element.innerHTML = `
    <p class="name">${name}</p>
    <p class="number">${number}</p>
  `;
  }
}

document.getElementById('randomize').addEventListener('click', random);

