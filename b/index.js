

async function main() {
  window.importB = new Function('w', 'return import(w)');
  const {data} = await importB('./resource.js');
  document.querySelector('.b').textContent = data;
}
main();