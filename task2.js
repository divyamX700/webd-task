fetch('resources.json').then((response) => {
  console.log('resolved', response);
  return response.json();
}).then(data => {
  console.log(data);
  renderImage(data);
})

function renderImage(data){
  data.forEach((item, index)=> {
    const img = document.querySelector(`#image${index+1}`)
    img.src = item.image;
  })
}