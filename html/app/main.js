const items = document.querySelectorAll('.item');
for(let item of items){
  var r = Math.floor(255 * Math.random());
  var g = Math.floor(255 * Math.random());
  var b = Math.floor(255 * Math.random());
  item.style.background = `rgb(${r},${g},${b})`
}