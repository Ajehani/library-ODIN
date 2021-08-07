let myLibrary=[]
let form
const display=document.querySelector('#display');
let button=document.querySelector('#new');
const modal=document.querySelector('#modal')
const submit=modal.querySelector('#submit')
const overlay=document.querySelector('#overlay')
let title=modal.querySelector("#title")
let author=modal.querySelector("#author")
let pages=modal.querySelector("#pages")
let ifread=modal.querySelectorAll('input[name="ifread"]')
let close=modal.querySelector('#close')

function Books(author,title,pages,status){
    this.author=author,
    this.title=title,
    this.pages=pages,
    this.status=status;
}
let data=JSON.parse(localStorage.getItem("Library"))
if(data){
for(let i of data){
    add(i)
}
}
console.log('this data',data)
overlay.addEventListener('click',()=>{
    modal.setAttribute("style","display:none;")
    overlay.setAttribute("style","opacity:0;")
})
close.addEventListener('click',()=>{
    modal.setAttribute("style","display:none;")
    overlay.setAttribute("style","opacity:0;")
})
button.addEventListener('click',()=>{
    overlay.setAttribute("style","opacity:1;pointer-events:all;")
    modal.setAttribute("style","display:flex;")
})
submit.addEventListener('click',(e)=>{
    let selected
    for(let i of ifread){
        if(i.checked){
            selected=i.value
        }
    }
    e.preventDefault();
    let book=new Books(author.value,title.value,pages.value,selected)
    add(book)
    title.value=" "
    author.value=" "
    pages.value=" "
    overlay.setAttribute('style',"opacity:0;")
    modal.setAttribute('style',"display:none;")
})

function add(b){
    let child=document.createElement("li")
    let btn=document.createElement("button")
    let check=document.createElement("button")
    check.type="button";
    child.setAttribute("id","child")
    btn.setAttribute("id","del")
    check.setAttribute("id","check")
    btn.innerHTML='&times;'
    check.textContent="Change Reading Status"
    child.textContent=`Title:${b.title} - Author:${b.author} - Pages:${b.pages} - Have you read it?:${b.status}`
    child.appendChild(btn)
    child.appendChild(check)
    display.appendChild(child) 

    btn.addEventListener('click',()=>{
        child.remove()
        btn.remove()
        myLibrary=myLibrary.filter(n=>n!=b)
        localStorage.clear()
        localStorage.setItem("Library",JSON.stringify(myLibrary))
    })
    check.addEventListener('click',()=>{
        if(b.status==="Yes"){
            b.status="No"
        }
        else{
            b.status="Yes"
    }
    child.textContent=`Title:${b.title} - Author:${b.author} - Pages:${b.pages} - Have you read it?:${b.status}`
    child.appendChild(btn)
    child.appendChild(check)
    myLibrary[myLibrary.indexOf(b)]=b
    localStorage.clear()
    localStorage.setItem("Library",JSON.stringify(myLibrary))
})
    myLibrary.push(b)
    console.log(myLibrary)
    localStorage.setItem("Library",JSON.stringify(myLibrary))
    
}


