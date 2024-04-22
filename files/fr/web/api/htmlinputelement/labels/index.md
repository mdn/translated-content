---
title: HTMLInputElement.labels
slug: Web/API/HTMLInputElement/labels
---

{{APIRef("DOM")}}

La propriété en lecture seule **`HTMLInputElement.labels`** renvoie une {{domxref("NodeList")}} (_liste de noeuds_) des éléments {{HTMLElement("label")}} (_étiquette_) associés avec l'élément {{HTMLElement("input")}} (_entrée_).

## Syntaxe

```js
var labelElements = input.labels;
```

### Valeur retournée

Une {{domxref("NodeList")}} contenant les éléments `<label>` associés avec l'élément `<input>`.

## Exemple

### HTML

```html
<label id="label1" for="test">Label 1</label>
<input id="test" />
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("test");
  for (var i = 0; i < input.labels.length; i++) {
    console.log(input.labels[i].textContent); // "Label 1" et "Label 2"
  }
});
```

{{EmbedLiveSample("Exemple", "100%", 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
