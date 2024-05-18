fetch('https://coding-week-2024-api.onrender.com/api/data').then((response) => {
  console.log('resolved', response);
  return response.json();
}).then(data => {
  console.log(data);
  renderImage(data);
  renderHeadline(data);
  renderDate(data);
  renderType(data);
  renderAuthor(data);
})

function renderImage(data){
  data.forEach((item, index)=> {
    const img = document.querySelector(`#image${index+1}`)
    img.src = item.image;
  })
}

function renderHeadline(data){
  data.forEach((item, index)=> {
    const hl = document.querySelector(`#hl${index+1}`)
    hl.innerHTML = item.headline;
  })
}

function renderDate(data){
  data.forEach((item, index)=> {
    const date = document.querySelector(`#date${index+1}`)
    date.innerHTML = item.date;
  })
}

function renderType(data){
  data.forEach((item, index)=> {
    const type = document.querySelector(`#type${index+1}`)
    type.innerHTML = item.type;
  })
}

function renderAuthor(data){
  data.forEach((item, index)=> {
    const authors = document.querySelector(`#authors${index+1}`);
    authors.innerHTML = item.author;
  })
}