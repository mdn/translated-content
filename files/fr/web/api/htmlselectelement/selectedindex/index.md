---
title: HTMLSelectElement.selectedIndex
slug: Web/API/HTMLSelectElement/selectedIndex
---

{{APIRef("HTML DOM")}}

**`HTMLSelectElement.selectedIndex`** est un `long` qui représente l'index du premier élément sélectionné {{HTMLElement("option")}}. La valeur `-1` indique qu'aucun élément est sélectionné.

## Syntaxe

```js
var index = selectElem.selectedIndex;
selectElem.selectedIndex = index;
```

## Exemple

### HTML

```html
<p id="p">selectedIndex: 0</p>

<select id="select">
  <option selected>Option A</option>
  <option>Option B</option>
  <option>Option C</option>
  <option>Option D</option>
  <option>Option E</option>
</select>
```

### JavaScript

```js
var selectElem = document.getElementById("select");
var pElem = document.getElementById("p");

// Quand une nouvelle <option> est selectionnée
selectElem.addEventListener("change", function () {
  var index = selectElem.selectedIndex;
  // Rapporter cette donnée au <p>
  pElem.innerHTML = "selectedIndex: " + index;
});
```

{{EmbedLiveSample("Exemple", "200px", "80px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
