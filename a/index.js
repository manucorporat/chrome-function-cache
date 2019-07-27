

async function main() {
  window.importA = new Function('w', 'return import(w)');
  const {data} = await importA('./resource.js');
  document.querySelector('.a').textContent = data;
}
main();