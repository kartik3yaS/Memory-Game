import computerobjectarray from "./re.js";

const mobile=`
<ul class="mobile-menu">
<li><a href="#">Menu</a></li>
<li><a href="#" class="toggle">+</a></li>
</ul>
`;

const navbar = `
<li><a class="active" href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Blogs</a></li>
<li><a href="#">Contacts</a></li>
`;

const mainnav = document.createElement("nav");
mainnav.classList.add("main_menu");
const navlist = document.createElement("ul");

navlist.innerHTML=navbar;

mainnav.innerHTML=mobile;
mainnav.append(navlist);

document.querySelector(".container").prepend(mainnav);


const content = computerobjectarray.map((item) => {
    let computerarticle = document.createElement("div");
    computerarticle.classList.add("col-md-4");
    computerarticle.setAttribute("id", item.id);

    computerarticle.innerHTML=`
                    <article class="card">
                        <img src=${item.image} class="card-img-top" alt="">
                        <div class="card_body">
                            <h5 class="card-title">${item.model}</h5>
                            <p class="card-text">Features</p>
                            <ul>
                                <li><strong>Ram: </strong>${item.ram}</li>
                                <li><strong>Storage: </strong>${item.storage}</li>
                            </ul>
                        </div>
                    </article>
    `;

    return computerarticle;
});

const main=document.getElementById("content_row");

content.forEach((item) => {
    main.prepend(item);
});