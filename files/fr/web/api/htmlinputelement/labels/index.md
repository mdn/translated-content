---
title: "HTMLInputElement : propriété labels"
short-title: labels
slug: Web/API/HTMLInputElement/labels
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}

La propriété en lecture seule **`labels`** de l'interface {{DOMxRef("HTMLInputElement")}} retourne une liste de nœuds ({{DOMxRef("NodeList")}}) des éléments HTML {{HTMLElement("label")}} associés à l'élément HTML {{HTMLElement("input")}}, si l'élément n'est pas caché. Si l'élément a le type `hidden`, la propriété retourne `null`.

## Valeur

Un objet {{DOMxRef("NodeList")}} contenant les éléments `<label>` associés avec l'élément `<input>`.

## Exemples

### HTML

```html
<label id="label1" for="test">Libellé 1</label>
<input id="test" />
<label id="label2" for="test">Libellé 2</label>
```

### JavaScript

```js
const input = document.getElementById("test");
for (const label of input.labels) {
  console.log(label.textContent); // "Libellé 1" et "Libellé 2"
}
```

{{EmbedLiveSample("Exemples", "100%", 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
