---
title: Exemples de développement web et XML utilisant le DOM
slug: Web/API/Document_Object_Model/Examples
l10n:
  sourceCommit: 857ea18eaa00f33bfdca9b5d00c0d57e624a1e47
---

{{DefaultAPISidebar("DOM")}}

Cette page présente quelques exemples plus détaillés de développement Web et XML utilisant le DOM. Partout où c'est possible, les exemples utilisent des API courantes, des astuces et des modèles en JavaScript pour manipuler l'objet de document.

## Exemple 1 : _height_ (hauteur) et width _(largeur)_

L'exemple qui suit montre l'utilisation des propriétés `height` et `width` pour dimensionner des images de diverses tailles&nbsp;:

```html
<p>
  Image 1&nbsp;: sans height, width, ni style
  <img
    id="image1"
    src="https://www.mozilla.org/images/mozilla-banner.gif" />
</p>

<p>
  Image 2&nbsp;: height="50", width="500", mais sans style
  <img
    id="image2"
    src="https://www.mozilla.org/images/mozilla-banner.gif"
    height="50"
    width="500" />
</p>

<p>
  Image 3&nbsp;: sans height, width, mais avec style="height: 50px; width: 500px;"
  <img
    id="image3"
    src="https://www.mozilla.org/images/mozilla-banner.gif"
    style="height: 50px; width: 500px;" />
</p>

<div id="output"></div>
```

```js
const arrImages = [
  document.getElementById("image1"),
  document.getElementById("image2"),
  document.getElementById("image3"),
];

const objOutput = document.getElementById("output");
let strHtml = "<ul>";

for (let i = 0; i < arrImages.length; i++) {
  const img = arrImages[i];
  strHtml += `<li>image${i + 1}: height=${img.height}, width=${img.width}, style.height=${img.style.height}, style.width=${img.style.width}</li>`;
}

strHtml += "</ul>";

objOutput.innerHTML = strHtml;
```

{{EmbedLiveSample("exemple_1_height_hauteur_et_width_largeur", , 360)}}

## Exemple 2 : styles de bordure

```html
<div id="box"></div>

<form name="FormName">
  <button id="btn1">Mettre la bordure à 20px</button>
  <button id="btn2">Mettre la bordure à 5px</button>
</form>
```

```css
#box {
  border: 5px solid green;
  width: 100px;
  height: 100px;
}
```

```js
function setBorderWidth(width) {
  document.getElementById("box").style.borderWidth = `${width}px`;
}

document.getElementById("btn1").addEventListener("click", () => {
  setBorderWidth(20);
});
document.getElementById("btn2").addEventListener("click", () => {
  setBorderWidth(5);
});
```

{{EmbedLiveSample("exemple_2_styles_de_bordure", , 180)}}

## Exemple 3 : manipulation de styles

Dans cet exemple simple, on accède à certaines propriétés basiques de style d'un élément de paragraphe HTML à l'aide de son objet style. L'objet style de l'élément et ses propriétés de style CSS peuvent être récupérés et définis depuis le DOM. Dans ce cas-ci, les styles individuels sont manipulés directement. Dans l'exemple suivant (l'exemple 4), on utilisera les feuilles de style et leurs règles pour changer les styles de documents entiers.

```html
<p id="pid">Du texte pour faire joli</p>

<form>
  <p><button type="button">Changer le texte</button></p>
</form>
```

```js
function changeText() {
  const p = document.getElementById("pid");

  p.style.color = "blue";
  p.style.fontSize = "18pt";
}

document.querySelector("button").addEventListener("click", () => {
  changeText();
});
```

{{EmbedLiveSample("exemple_3_manipulation_de_styles")}}

## Exemple 4 : utilisation de feuilles de style

La propriété {{domxref("document.styleSheets", "styleSheets")}} de l'objet {{domxref("document")}} renvoie une liste des feuilles de style qui ont été chargées pour ce document. On peut accéder à ces feuilles de style et leurs règles individuelles à l'aide des objets `stylesheet`, `style` et {{domxref("CSSRule")}}, comme montré dans cet exemple qui affiche tous les sélecteurs de règles de style dans la console.

```js
var ss = document.styleSheets;

for (var i = 0; i < ss.length; i++) {
  for (var j = 0; j < ss[i].cssRules.length; j++) {
    // Affiche le sélecteur dans la console
    console.log(ss[i].cssRules[j].selectorText);
  }
}
```

Pour un document avec une seule feuille de style dans laquelle les trois règles suivantes sont définies&nbsp;:

```css
BODY {
  background-color: darkblue;
}
P {
  font-family: Arial;
  font-size: 10pt;
  margin-left: 0.125in;
}
#lumpy {
  display: none;
}
```

Ce script affiche les lignes suivantes&nbsp;:

```css
BODY
P
#LUMPY
```

## Exemple 5 : propagation d'évènements

Cet exemple montre comment les évènements se déclenchent et sont gérés dans le DOM d'une manière très simple. Lorsque l'élément BODY de ce document HTML est chargé, un écouteur d'évènement est enregistré sur la ligne supérieure de l'élément TABLE. Celui-ci gère l'évènement en exécutant la fonction `stopEvent`, qui modifie la valeur de la cellule inférieure du tableau.

Cependant, `stopEvent` appelle également une méthode d'objet `event`, {{domxref("event.stopPropagation")}}, qui empêche l'évènement de se propager (bubbling) plus haut dans le DOM. Notez que le tableau lui-même dispose d'un gestionnaire d'évènement {{domxref("Element.click_event","onclick")}} qui devrait afficher un message lorsqu'on clique sur le tableau. Mais comme la méthode `stopEvent` a interrompu la propagation, après que les données du tableau aient été mises à jour, la phase évènementielle est effectivement arrêtée et un message d'alerte est affiché pour le confirmer.

```html
<table id="t-daddy">
  <tr id="tbl1">
    <td id="c1">un</td>
  </tr>
  <tr>
    <td id="c2">deux</td>
  </tr>
</table>
```

```css
#t-daddy {
  border: 1px solid red;
}

#c1 {
  background-color: pink;
}
```

```js
function stopEvent(event) {
  const c2 = document.getElementById("c2");
  c2.textContent = "bonjour";

  // cela devrait empêcher t-daddy de recevoir le clic.
  event.stopPropagation();
  console.log("propagation de l'évènement arrêtée.");
}

const elem = document.getElementById("tbl1");
elem.addEventListener("click", stopEvent);

document.getElementById("t-daddy").addEventListener("click", () => {
  console.log("t-daddy est cliqué");
});
```

{{EmbedLiveSample("exemple_5_propagation_dévènements")}}

## Exemple 6 : getComputedStyle

Cet exemple montre comment la méthode {{domxref("window.getComputedStyle")}} peut être utilisée pour obtenir les styles d'un élément qui ne sont pas définis dans l'attribut `style` ou à l'aide de JavaScript (c'est-à-dire, `elt.style.backgroundColor="lightblue"`). Ces derniers types de styles peuvent être récupérés avec la propriété plus directe {{domxref("HTMLElement.style", "elt.style")}}, dont les propriétés sont listées dans la [liste des propriétés DOM CSS](/fr/docs/Web/CSS/Reference).

`getComputedStyle()` renvoie un objet {{domxref("CSSStyleDeclaration")}}, dont les propriétés de style individuelles peuvent être référencées à l'aide de sa méthode {{domxref("CSSStyleDeclaration.getPropertyValue()", "getPropertyValue()")}} comme montré dans l'exemple suivant.

```html
<div id="d1">&nbsp;</div>

<form action="">
  <p>
    <button type="button">Obtenir les styles</button><br/>
    height <input id="t1" type="text" value="1" /><br/> max-width <input
      id="t2"
      type="text"
      value="2" /><br/>
    bg-color <input id="t3" type="text" value="3" />
  </p>
</form>
```

```css
#d1 {
  margin-left: 10px;
  background-color: lightblue;
  height: 20px;
  max-width: 20px;
}
```

```js
function cStyles() {
  const refDiv = document.getElementById("d1");
  const txtHeight = document.getElementById("t1");
  const hStyle = document.defaultView
    .getComputedStyle(refDiv, null)
    .getPropertyValue("height");

  txtHeight.value = hStyle;

  const txtWidth = document.getElementById("t2");
  const wStyle = document.defaultView
    .getComputedStyle(refDiv, null)
    .getPropertyValue("width");

  txtWidth.value = wStyle;

  const txtBackgroundColor = document.getElementById("t3");
  const bStyle = document.defaultView
    .getComputedStyle(refDiv, null)
    .getPropertyValue("background-color");

  txtBackgroundColor.value = bStyle;
}

document.querySelector("button").addEventListener("click", cStyles);
```

{{EmbedLiveSample("exemple_6_getcomputedstyle")}}

## Exemple 7 : affichage des propriétés d'un objet `event`

Cet exemple utilise des méthodes DOM pour afficher les propriétés {{domxref("Window.load_event", "onload")}} d'un objet {{domxref("event")}} et leurs valeurs dans un tableau. Il montre également une technique utile utilisant une boucle [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) pour parcourir les propriétés d'un objet et obtenir leurs valeurs.

Les propriétés des objets `event` diffèrent sensiblement entre les différents navigateurs, la [spécification norme DOM de WHATWG <sup>(angl.)</sup>](https://dom.spec.whatwg.org/) liste les propriétés standard, mais beaucoup de navigateurs ont ajouté un bon nombre de propriétés supplémentaires.

Placez le code qui suit dans un fichier texte vide et chargez-le dans différents navigateurs, vous serez surpris des différences entre le nombre et le nom des propriétés. Vous pouvez également ajouter quelques éléments à la page et appeler cette fonction depuis d'autres gestionnaires d'évènements.

```html
<h1>Propriétés de l'objet évènement DOM <span id="eventType"></span></h1>
```

```css
table {
  border-collapse: collapse;
}
thead {
  font-weight: bold;
}
td {
  padding: 2px 10px;
}

.odd {
  background-color: #efdfef;
}
.even {
  background-color: white;
}
```

```js
function showEventProperties(e) {
  function addCell(row, text) {
    const cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  const event = e || window.event;
  const type = event && typeof event.type !== "undefined" ? event.type : "";
  document.getElementById("eventType").textContent = type;

  const table = document.createElement("table");
  const thead = table.createTHead();
  let row = thead.insertRow(-1);
  const labelList = ["#", "Property", "Value"];
  const len = labelList.length;

  for (let i = 0; i < len; i++) {
    addCell(row, labelList[i]);
  }

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  if (event) {
    for (const p in event) {
      row = tbody.insertRow(-1);
      row.className = row.rowIndex % 2 ? "odd" : "even";
      addCell(row, row.rowIndex);
      addCell(row, p);
      addCell(row, event[p]);
    }
  }

  document.body.appendChild(table);
}

showEventProperties(event);
```

{{EmbedLiveSample("exemple_7_affichage_des_propriétés_dun_objet_event", , 200)}}

## Exemple 8 : utilisation de l'interface DOM Table

L'interface DOM {{domxref("HTMLTableElement")}} fournit certaines méthodes utilitaires permettant de créer et de manipuler des tableaux. Deux méthodes utilisées fréquemment sont {{domxref("HTMLTableElement.insertRow")}} et {{domxref("HTMLTableRowElement.insertCell")}}.

Pour ajouter une ligne et quelques cellules à un tableau existant&nbsp;:

```html
<table id="table0">
  <tr>
    <td>Ligne 0 Cellule 0</td>
    <td>Ligne 0 Cellule 1</td>
  </tr>
</table>
```

```js
const table = document.getElementById("table0");
const row = table.insertRow(-1);
let cell;
let text;

for (let i = 0; i < 2; i++) {
  cell = row.insertCell(-1);
  text = `Ligne ${row.rowIndex} Cellule ${i}`;
  cell.appendChild(document.createTextNode(text));
}
```

{{EmbedLiveSample("exemple_8_utilisation_de_linterface_dom_table")}}

#### Notes

- La propriété {{domxref("element.innerHTML","innerHTML")}} d'un tableau ne doit jamais être utilisée pour modifier un tableau, même si vous pouvez l'utiliser pour écrire un tableau entier ou le contenu d'une cellule.
- Si les méthodes DOM Core {{domxref("document.createElement")}} et {{domxref("Node.appendChild")}} sont utilisées pour créer des lignes et des cellules, IE exige qu'elles soient ajoutées à un élément {{HTMLElement("tbody")}}, tandis que d'autres navigateurs permettront de les ajouter à un élément {{HTMLElement("table")}} (les lignes seront ajoutées au dernier élément `<tbody>`).
- Il existe un certain nombre d'autres méthodes utilitaires appartenant à l'[interface `HTMLTableElement`](/fr/docs/Web/API/HTMLTableElement#instance_methods) qui peuvent être utilisées pour créer et modifier des tableaux.
