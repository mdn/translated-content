---
title: "HTMLSelectElement : propriété labels"
short-title: labels
slug: Web/API/HTMLSelectElement/labels
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}

La propriété en lecture seule **`labels`** de l'interface {{DOMxRef("HTMLSelectElement")}} retourne une {{DOMxRef("NodeList")}} des éléments HTML {{HTMLElement("label")}} associés à l'élément HTML {{HTMLElement("select")}}.

## Valeur

Une liste ({{DOMxRef("NodeList")}}) contenant les éléments `<label>` associés à l'élément `<select>`.

## Exemples

### HTML

```html
<label id="label1" for="test">Étiquette 1</label>
<select id="test">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
<label id="label2" for="test">Étiquette 2</label>
```

### JavaScript

```js
const select = document.getElementById("test");
for (const label of select.labels) {
  console.log(label.textContent); // "Étiquette 1" et "Étiquette 2"
}
```

{{EmbedLiveSample("Exemples", "100%", 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
