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
}