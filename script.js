let myLibrary=[]
let form
const display=document.querySelector('#display');
let books=document.querySelector('#new');
const modal=document.querySelector('.modal')
const submit=modal.querySelector('#submit')
const overlay=document.querySelector('#overlay')
let title=modal.querySelector("#Title")
let author=modal.querySelector("#Author")
let pages=modal.querySelector("#Pages")
let close=modal.querySelector('#close')
pages.innerHTML="yo";

function Books(author,title,pages){
    this.author=author,
    this.title=title,
    this.pages=pages;
    // this.status=status;
}
overlay.addEventListener('click',()=>{
    modal.setAttribute("style","display:none;")
    overlay.setAttribute("style","opacity:0;")

})
close.addEventListener('click',()=>{
    modal.setAttribute("style","display:none;")
    overlay.setAttribute("style","opacity:0;")
})
books.addEventListener('click',function(){
    // form=document.createElement('div')
    // form.className="modal"
    // display.appendChild(form)
    overlay.setAttribute("style","opacity:1;pointer-events:all;")
    modal.setAttribute("style","display:flex;")
})
submit.addEventListener('click',function(){
    let book=new Books(author,title,pages)
    console.table(book)
    add(book)
    title.textContent=''
    author.textContent=''
    pages.textContent=''
    overlay.setAttribute('style',"opacity:0;")
    modal.setAttribute('style',"display:none;")
})
let count=0
function add(b){
    count++
    myLibrary.push(b)
    display.innerText+=`\n ${count}\\${myLibrary}`
    // let child=document.createElement("div")
    // display.appendChild(child)
    // child.textContent= + b
    
    console.log(myLibrary)
}

// function tab(){
//     for(let i in myLibrary){
//         display.textContent+=`${i}:${myLibrary[i]}.`
//         display.textContent+="\t"
//     } 
//     console.table(myLibrary)
// }
