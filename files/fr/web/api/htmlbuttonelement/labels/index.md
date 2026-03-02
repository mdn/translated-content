---
title: "HTMLButtonElement : propriété labels"
short-title: labels
slug: Web/API/HTMLButtonElement/labels
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

La propriété en lecture seule **`labels`** retourne un objet {{DOMxRef("NodeList")}} des éléments HTML {{HTMLElement("label")}} associés à l'élément HTML {{HTMLElement("button")}}.

## Valeur

Un objet {{DOMxRef("NodeList")}} contenant les éléments `<label>` associés à l'élément `<button>`.

## Exemple

### HTML

```html
<label id="label1" for="test">Libellé 1</label>
<button id="test">Bouton</button>
<label id="label2" for="test">Libellé 2</label>
```

### JavaScript

```js
const button = document.getElementById("test");
for (const label of button.labels) {
  console.log(label.textContent); // "Libellé 1" et "Libellé 2"
}
```

### Résultat

{{EmbedLiveSample("Exemple", "100%", 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
