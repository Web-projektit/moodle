fetch('http://localhost:3001/notes?_start=19&_end=30')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    data.map(note => {
      let li = document.createElement('li')
        li.innerHTML = note.content
        document.querySelector('#notes').append(li)  
      })})
  .catch(error => console.error('Error:', error));
