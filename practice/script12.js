import computerobjectarray from "./data.js";

const content=computerobjectarray.map((computer)=>{
    let computerarticle=document.createElement("article");
    computerarticle.classList.add("computer");
    computerarticle.setAttribute("id", computer.id);
    computerarticle.innerHTML=`
    <h3 class="computer_name">${computer.name}</h3>
    <ul class="computer_features">
    <li class=computer_id> id : ${computer.id}</li>
    <li class=computer_name> name : ${computer.name}</li>
    <li class=computer_screen> screen : ${computer.screen}</li>
    <li class=computer_ram> ram : ${computer.ram}</li>
    <li class=computer_storage> storage : ${computer.storage}</li>
    </ul>
    `;
    return computerarticle;
});

const main=document.querySelector("main");

content.forEach((computer)=>{
    main.append(computer);
});