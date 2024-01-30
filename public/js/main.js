const deleteBtn = document.querySelectorAll('.del')
const updateBtn = document.querySelectorAll('.update')
const closeBtn = document.querySelectorAll('.close')
document.querySelector('button').addEventListener('click', getBookInfo)


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(updateBtn).forEach((el)=>{
    el.addEventListener('click', openUpdateForm)
})

Array.from(closeBtn).forEach((el)=>{
    el.addEventListener('click', closeModal)
}) 

// Delete // 
async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
// Update/Modal // 
function openUpdateForm(){
    const todoId = this.parentNode.dataset.id
    window.location.href = `/todos/updateModal/${todoId}`;
}

function closeModal(){
    window.location.href = '/todos';
}

// Open Libary API // 
async function getBookInfo() {
   // let value = document.querySelector('.todoItem').value.replace(/ /g, '+')
   const choice = document.querySelector('input').value
   const url = `https://api.nasa.gov/planetary/apod?api_key=AyaDWBt5t4IqE78dHnFAhiWArP99hyE9w4sdHYvG&date=${choice}` 
    fetch(url) // https://openlibrary.org/search.json?q=${value}
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        /*
        console.log(data.docs[0].isbn[0])
        let img = new Image()
        img.src = `https://covers.openlibrary.org/b/isbn/${data.docs[0].isbn[0]}-S.jpg`>
        document.querySelector('#pic').append(img)
        */
        
    })
    .catch(err => {console.log(err)})
}


  /*  

    let isbn = ''

    let response = await fetch(`https://openlibrary.org/search.json?q=${value}`)
    let data = await response.json()
    console.log(data)
    isbn = data.docs[0].isbn[0]
    console.log(isbn)
   /* .then(data => fetch(`https://covers.openlibrary.org/b/isbn/${isbn}.json`))
    .then(res =>res.json())
    .then(result => {
        
    }) */


   // let url = ``
   // console.log(url)
  /*
    .then((res) => res.blob())
    .then((blob) => {
      const imageUrl = URL.createObjectURL(blob);
      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      const container = document.getElementById("image");
      container.appendChild(imageElement);
    }); 
    
}  

/*

// grab the cover URL with the isbn number and add it to the src of the image 
// will possibly need to change my createtodo and model schemas but possibly not because this is an api im calling 
// read the docks closer
// while its working in chrome its not working in firefox, possible cors 
*/



/*
async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
} */