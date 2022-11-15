document.addEventListener("DOMContentLoaded",domloaded,false);
function domloaded(){
    /*Get Element implementation*/ 
    let christmas_string = document.getElementById("christmas");
    console.log(christmas_string.textContent);
    /*querySelector implementation*/
    christmas_string = document.querySelector("#christmas");
    console.log(christmas_string.textContent);
    /*querySelectorAll*/
    const items = document.querySelectorAll("#firstUl > li");
    console.log(items);
    for(let i = 0;i < items.length;i++){
        console.log(items[i].textContent);
    }
    /*querySelectorAll .hot*/
    const hot_items = document.querySelectorAll("#firstUl > li.hot");
    console.log(hot_items);
    for(let i = 0;i < hot_items.length;i++){
        console.log(hot_items[i].textContent);
    }
    /*DOM Operation, merry christmas*/
    let insert_christmas="Gleðileg Jól!";
    let html_insert = document.querySelector("#secondChristmas");
    html_insert.firstChild.nodeValue = insert_christmas;
    html_insert.setAttribute("style","color:red");
    html_insert.setAttribute("class","merry");
    /*InnerHtml insertion*/
    let name = "Friðrik Fannar Söebech";
    let content = document.getElementsByTagName("body")[0];
    content.innerHTML += `<div id="container">\n<h1>${name}</h1>\n</div>`;
    /*Create Element*/
    let insert_list = document.createElement("ol");
    let placement = document.getElementById("secondChristmas");
    document.body.insertBefore(insert_list,placement);
    insert_list.setAttribute("type","I");
    for(let i = 0; i < 3;i++){
        let list_item = document.createElement("li");
        list_item.textContent = "item";
        insert_list.appendChild(list_item);
    }
    let form_list = document.querySelectorAll("#vorur > li > a");
    let product_bar = document.querySelector("#vara");
    
    product_bar.addEventListener("change",(val)=>{
        if(val.target.value != ""){
            let add_item = document.createElement("li");
            let add_item_link = document.createElement("a");
            add_item_link.addEventListener("click",()=>{add_item.remove();});
            add_item_link.textContent = val.target.value;
            add_item.appendChild(add_item_link);
            form_list[0].parentElement.parentElement.appendChild(add_item);
        }
    });
    for(let i = 0; i < form_list.length;i++){
        if(form_list[i].textContent == "jalapeno"){
            form_list[i].textContent = "paprika";
        }
        form_list[i].removeAttribute("href");
        form_list[i].addEventListener("click",()=>{form_list[i].parentElement.remove();});
    }
}