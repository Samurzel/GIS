"use strict";

interface Product {
    img: String;
    name: String;
    description: String;
    price: number;
}
let originals0: Product = {
    img: "url(MarkI.png)",
    name: "Mark I",
    description: "The real O.G with barely the very basics to escape a group of criminals holding you hostage",
    price: 1000000
};

let originals1: Product = {
    img: "url(MarkII.png)",
    name: "Mark II",
    description: "The silver design of this suit really represents it’s over the top coolness factor. So much it has a slight freezing problem.",
    price: 1500000
};

let originals2: Product = {
    img: "url(MarkIII.png)",
    name: "Mark III",
    description: "The Mark III introduces the basic design scheme for years to come. And a bunch of weapons to use against your standard world threatening villains.",
    price: 2000000
};

let originals3: Product = {
    img: "url(MarkIV.png)",
    name: "Mark IV",
    description: "It’s the Mark III, but better! More strength, more speed, more weapons, more everything!",
    price: 2500000
};

let advanced0: Product = {
    img: "url(MarkV.png)",
    name: "Mark V",
    description: "You know what a suit needs? A suitcase to carry it whereever you want to.",
    price: 3000000
};

let advanced1: Product = {
    img: "url(MarkVI.png)",
    name: "Mark VI",
    description: "This suit features not only a significantly higher energy output, it even let’s you breathe underwater!",
    price: 3500000
};

let advanced2: Product = {
    img: "url(MarkVII.png)",
    name: "Mark VII",
    description: "We refer to it as the Lego suit. You can take each individual part of and assemble it together when you need it.",
    price: 4000000
};

let advanced3: Product = {
    img: "url(MarkVIII.png)",
    name: "Mark VIII",
    description: "Less bulky, more maneuvery! The Mark VIII has the flexibility you need in close combat, while protecting you better than ever before.",
    price: 4500000
};

let advanced4: Product = {
    img: "url(MarkIX.png)",
    name: "Mark IX",
    description: "The first Tesla of our Iron Man suits. You want to suit up? Give it a call, it’ll fly right to you.",
    price: 5000000
};

let latest0: Product = {
    img: "url(MarkX.png)",
    name: "Mark X",
    description: "When you want to be an extra speedy boy. Fly three times faster than the Mark XI!",
    price: 5500000
};

let latest1: Product = {
    img: "url(MarkXI.png)",
    name: "Mark XI",
    description: "The Mark XI introduces basic stealth capabilities in our suits. Kinda like a snake? Snake? SNAAAAAKE?!",
    price: 6000000
};

let latest2: Product = {
    img: "url(MarkXII.png)",
    name: "Mark XII",
    description: "Mark XII breaks a bit with our design direction, but that’s certainly not the only thing it breaks. By far.",
    price: 6500000
};

let originals: Product[] = [originals0, originals1, originals2, originals3];
let advanced: Product[] = [advanced0, advanced1, advanced2, advanced3, advanced4];
let latest: Product[] = [latest0, latest1, latest2];
    

document.addEventListener("DOMContentLoaded", init);
function init(): void {
    document.getElementsByClassName("wrapper")[0].innerHTML += "<h2>Originals</h2>";
    renderProducts(originals);
    document.getElementsByClassName("wrapper")[0].innerHTML += "<h2>Advanced</h2>";
    renderProducts(advanced);
    document.getElementsByClassName("wrapper")[0].innerHTML += "<h2>Latest</h2>";
    renderProducts(latest);
}

function renderProducts(_article: Product[]): void {
    for (let i: number = 0; i < _article.length; i++) {
        createArticle(_article[i]);
    }
}

function createArticle(_article: Product): void {
    let htmlArticle: string = "";
    htmlArticle +=
    `<div class="shopping-element">
    <div class="img" style="background-image:${_article.img};"></div>
    <h3>${_article.name}</h3>
    <p>${_article.description}</p>
    <label>
    <button onclick="hndShoppingCart(${_article.price})">${_article.price} €</button>
    </label>
    </div>`;

    document.getElementsByClassName("wrapper")[0].innerHTML += htmlArticle;
}
let cartCounter: number = 0;
let cartValue: number = 0;




function hndShoppingCart(_article: number): void {

    cartValue += _article;
    cartCounter++;
 
    const el = document.getElementById('cartCounter');
 
    if (el) {
      const definitelyAnElement = el;
   definitelyAnElement.innerHTML = cartCounter.toString();
 }
 
    console.log(cartValue);
 }