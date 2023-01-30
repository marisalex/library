if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", render);
} else {
  render();
}

function render() {
  const submitFormBtn = document.getElementById("submit-form-btn")
 // console.log(submitFormBtn)
  submitFormBtn.addEventListener("click", submitBtnClicked)  
}



// //toggle btn
// let darkMode = localStorage.getItem("dark-mode")

// const toggleBtn = document.getElementById("toggle-btn")
// const theme = document.getElementById("theme")


// const addDarkMode = () =>{
//   theme.classList.add("dark-mode-theme")
//   toggleBtn.classList.remove("dark-mode-toggle")
//   localStorage.setItem("dark-mode", "enabled")
// }

// const removeDarkMode = () =>{
//   theme.classList.remove("dark-mode-theme")
//   toggleBtn.classList.add("dark-mode-toggle")
//   localStorage.setItem("darkmode", "disabled")
// }

// if(darkMode === "enabled"){
//   addDarkMode
// }

// toggleBtn.addEventListener("click", (e) =>{
//   darkMode = localStorage.getItem("dark-mode")
  
//   if(darkMode === "disabled") {
//     addDarkMode()
//   } else {
//     removeDarkMode()
//   }
// })


//Onclick of submit to cart button
function submitBtnClicked(){
  const title = document.getElementById("title").value
  const author = document.getElementById("author").value
  const isbn = document.getElementById("isbn").value
  const error = document.getElementById("error-message")
  const success = document.getElementById("success-message")
  
  if (title === "" || author === "" || isbn === "") {
    
    error.classList.add("error-message")
    error.textContent = "Incomplete Text Field"
    function errorFunction(){
      error.classList.remove("error-message")
      error.textContent = ""
    }
    setTimeout(errorFunction, 2000)
    submitFormBtn.disabled
  }
  
  if (title === title || author === author || isbn === isbn) {
    
    success.classList.add("success-message")
    success.textContent = "Book Successfully Added"
    function successMessage(){
      success.classList.remove("success-message")
      success.textContent = ""
    }
    setTimeout(successMessage, 2000)
  }
    
 
  
  const reloadTitle = document.getElementsByClassName("title")[0].value = ""
  const reloadAuthor = document.getElementsByClassName("author")[0].value = ""
  const reloadIsbn =document.getElementsByClassName("isbn")[0].value = ""
  
  
   addData(title, author, isbn)
 }

function addData(title, author, isbn){
  const tbody = document.querySelector("tbody")
  const tr = document.createElement("tr")
  
  const tableInfo = ` <td>${title}</td>
              <td>${author}</td>
              <td>${isbn}</td>
              <td><button class="remove-btn">
              <i class="fa-regular fa-trash-can"></i>
              </button></td>`
  
  tr.innerHTML = tableInfo
  
  tbody.appendChild(tr)
  
  const removeBtn = tr.getElementsByClassName("remove-btn")[0] 
  removeBtn.addEventListener("click", removeBtnClicked)
}

 


function removeBtnClicked(e) {
  const removeItem = e.target
   const decision = confirm("Are you sure about removing this item?");
  console.log(decision, "decision");
  if (!decision) {
    return;
  }
  removeItem.parentElement.parentElement.parentElement.remove()
  
}
