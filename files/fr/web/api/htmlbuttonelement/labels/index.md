---
title: "HTMLButtonElement: propriété labels"
short-title: labels
slug: Web/API/HTMLButtonElement/labels
l10n:
  sourceCommit: a3d9f61a89
---

{{APIRef("DOM")}}

La propriété en lecture seule **`HTMLButtonElement.labels`** renvoie une {{domxref("NodeList")}} (_liste de noeuds_) des éléments {{HTMLElement("label")}} (_étiquette_) associés avec l'élément {{HTMLElement("button")}} (_bouton_).

### Valeur de retour

Une {{domxref("NodeList")}} contenant les éléments `<label>` associés avec l'élément `<button>`.

## Exemple

### HTML

```html
<label id="label1" for="test">Label 1</label>
<button id="test">Button</button>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("test");
  for (const label of button.labels) {
    console.log(label.textContent); // "Label 1" et "Label 2"
  }
});
```

{{EmbedLiveSample("Exemple", "100%", 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
