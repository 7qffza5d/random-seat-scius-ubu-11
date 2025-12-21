import a from './data.json' with { type: 'json' };

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
  console.log('original:', a);
  shuffleObjectInPlace(a);
  console.log('shuffled (in-place):', a);
}

document.getElementById('randomize').addEventListener('click', random);