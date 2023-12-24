import computerobjectarray from "./re.js";

const navbar = `
<li><a class="active" href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Contacts</a></li>
<li><a href="#">Blogs</a></li>
`;

const mainnav=document.createElement("nav");
mainnav.classList.add("main_menu");
const navlist=document.createElement("ul");
navlist.innerHTML=navbar;

mainnav.append(navlist);

document.querySelector(".container").prepend(mainnav);

const content = computerobjectarray.map((item) => {
    let computerarticle = document.createElement("div");
    computerarticle.classList.add("item");
    computerarticle.setAttribute("id", item.id);

    computerarticle.innerHTML=`
    <article>
    <figure class="item_image">
    <img src=${item.image} alt="" loading="lazy">
    </figure>
    <h3 class="item_name">${item.model}</h3>
    <ul class="item_features">
    <li class="item_ram">RAM: ${item.ram}</li>
    <li class="item_storage">Storage: ${item.storage}</li>
    </ul>
    </article>
    `;

    return computerarticle;
});

const main = document.getElementById("content_row");

content.forEach((item) => {
    document.getElementById("content_row").prepend(item);
});