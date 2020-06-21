"use strict";

interface Product {
    img: String;
    name: String;
    description: String;
    price: number;
}

document.addEventListener("DOMContentLoaded", init);
function init(): void {
    displayObjects("all");
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

    const el = document.getElementById("cartCounter");

    if (el) {
        const definitelyAnElement = el;
        definitelyAnElement.innerHTML = cartCounter.toString();
    }
    console.log(cartValue);
}

async function loadArtikel(): Promise<JSON> {
    let response: Response = await fetch("http://127.0.0.1:5500/Aufgabe7/Artikel.JSON");
    return response.json();
}

async function displayObjects(_kategorie: string): Promise<number>  {
    let jsonString = JSON.stringify(await loadArtikel());
    let objJson = JSON.parse(jsonString);

    let oCount = 0;
    let aCount = 0;
    let lCount = 0; 

    if (_kategorie == "all") {
        for (let i = 0; i < objJson.length; i++) {
                        
            if (objJson[i].kategorie == "originals" && oCount == 0) {
                oCount++;
                document.getElementsByClassName("wrapper")[0].innerHTML = "";
                document.getElementsByClassName("wrapper")[0].innerHTML += "<h2>Originals</h2>";
            }
            else if (objJson[i].kategorie == "advanced" && aCount == 0) {
                aCount++;
                document.getElementsByClassName("wrapper")[0].innerHTML += "<h2>Advanced</h2>";
            }
            else if (objJson[i].kategorie == "latest" && lCount == 0) {
                lCount++;
                document.getElementsByClassName("wrapper")[0].innerHTML += "<h2>Latest</h2>";
            }

            createArticle(objJson[i]);
        }
    } else {
        for (let i = 0; i < objJson.length; i++) {
            if (objJson[i].kategorie == _kategorie) {
                if (oCount == 0) {
                    oCount++;
                    document.getElementsByClassName("wrapper")[0].innerHTML = "";
                    document.getElementsByClassName("wrapper")[0].innerHTML += `<h2>${_kategorie.replace(/^./, _kategorie[0].toUpperCase())}</h2>`;
                }
                createArticle(objJson[i]);
            }
        }
    }

    return 0;
}