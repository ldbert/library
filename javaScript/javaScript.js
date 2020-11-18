let i = 0;
let title = "";
let author = "";
let pages = "";
const rbs = document.querySelectorAll('input[name="choice"]');


document.getElementById("read").checked = false;
document.getElementById("reading").checked = false;
document.getElementById("notRead").checked = false;

// Array containing details for a few books
let myLibrary = [];

// Variables for the new book are initialiased before using it so that it can be toggled
var newBookForm = document.getElementById("bookForm");
newBookForm.style.visibility = "visible";




function deleteMe(d) {

    alert(d);

    //  alert("You are deliting book with id: " + d);
     let elem = document.getElementById(d);
     console.log(elem);
     elem.parentNode.removeChild(elem);
     elem.remove();
    
}


function editMe(ed){
    
    alert("ed is " + ed);
    console.log("ed is  " + ed);
    let x = document.getElementById(ed);
    console.log(x);
    if (x.innerHTML === "Read") { 
        x.innerHTML = "Reading";
      } else if (x.innerHTML === "Reading"){
        x.innerHTML = "Not Read";
      } else {
        x.innerHTML = "Read";
      }
}


function formValidation(title, author, pages){

    
    // Remove eventual spaces at the beginnign and at the end of title, 
    //author and pages fields
    title = title.trim();
    author = author.trim();
    pages = pages.trim();

   

   
    if (title.length == 0 ) { 
        console.log(title);
        alert("Please enter a valid title " + title.length);
        throw new Error("Something went badly wrong!");
   
    }  else if( author.length == 0 || !(/^[a-zA-Z\s]*$/.test(author))) {
        
        alert("Please enter a valid author's name"); 
        throw new Error("Something went badly wrong!");
        
    } else if(pages.length == 0 || !(/^\d+$/.test(pages))){
       
        alert("please enter the number of pages"); 
        throw new Error("Something went badly wrong!");
    }


    if(document.querySelector('input[name="choice"]:checked') == null) {
        window.alert("You need to choose an option!");
        throw new Error("Something went badly wrong!");
    }

}



// Book constructor
function Book(title, author, pages, status) {
    (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.status = status)
    
}



//  Function adding a Book to the library array
function addBook() {


    // Variables that will be used to fill the library columns
    let titleP = document.createElement("p");
    let authorP = document.createElement("p");
    let pagesP = document.createElement("p");
    let statusP = document.createElement("p");
    statusP.id="status"+i;
    let deleteBookBtn= document.createElement("button");
    deleteBookBtn.innerHTML = "Delete Book";
   
    // Assign id to the delete button inside the card
    deleteBookBtn.id="book"+i;

     
    deleteBookBtn.onclick = function() {deleteMe(this.id)};

    // "book"+(i-1)
    let editBookBtn= document.createElement("button");
    editBookBtn.id="status"+i;
    // editBookBtn.id="edit"+"book"+i;
    editBookBtn.innerHTML="Edit reading status";
    
    





    // User input variables
    var title = document.getElementById("bTitle").value;
    var author = document.getElementById("bAuthor").value;
    var pages = document.getElementById("bPages").value;
    let status;

   console.log("lenghth is  " + title.length)

    formValidation(title, author, pages, status);
    // Add function to buton to edit book reading status 
    editBookBtn.onclick = function() {editMe(this.id)};


    // const rbs = document.querySelectorAll('input[name="choice"]');
    // let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            status = rb.value;
            statusP.textContent = rb.value;
            break;
        } 
    }
    console.log ("STAUS IS : " + status);
    console.log(myLibrary);
    console.log("title value " + title);
    document.getElementById("read").checked = false;
    document.getElementById("reading").checked = false;
    document.getElementById("notRead").checked = false;


    
    const book = new Book(title, author, pages, status);

    myLibrary.push(book);


    titleP.textContent = book.title;
    //Assign an id to the created p for the title
    titleP.setAttribute("id", `title${i}`)
    authorP.textContent = book.author;
    pagesP.textContent = book.pages;
    

    // create a new div element
    let cardDiv = document.createElement("div");
    cardDiv.id = "book" + i;
    cardDiv.classList.add("stile");



    document.getElementById("cardsColumns").appendChild(cardDiv);
    document.getElementById(cardDiv.id).className = "card";
    document.getElementById(cardDiv.id).appendChild(titleP);
    document.getElementById(cardDiv.id).appendChild(authorP);
    document.getElementById(cardDiv.id).appendChild(pagesP);
    document.getElementById(cardDiv.id).appendChild(statusP);
    document.getElementById(cardDiv.id).appendChild(deleteBookBtn);
    document.getElementById(cardDiv.id).appendChild(editBookBtn);

    
    i++;
    

    // Clearing all the inputs from the Form
    document.getElementById("myForm").reset();
    document.getElementById("read").checked = false;
    document.getElementById("reading").checked = false;
    document.getElementById("notRead").checked = false;


}