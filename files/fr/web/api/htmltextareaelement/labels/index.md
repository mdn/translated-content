---
title: "HTMLTextAreaElement : propriété labels"
short-title: labels
slug: Web/API/HTMLTextAreaElement/labels
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}

La propriété en lecture seule **`labels`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} retourne une liste ({{DOMxRef("NodeList")}}) des éléments HTML {{HTMLElement("label")}} associés à l'élément {{HTMLElement("textarea")}}.

## Valeur

Une liste ({{DOMxRef("NodeList")}}) contenant les éléments HTML `<label>` associés à l'élément `<textarea>`.

## Exemples

### HTML

```html
<label id="label1" for="test">Libellé 1</label>
<textarea id="test">Du texte</textarea>
<label id="label2" for="test">Libellé 2</label>
```

### JavaScript

```js
const textAreaElement = document.getElementById("test");
for (const label of textAreaElement.labels) {
  console.log(label.textContent); // "Libellé 1" et "Libellé 2"
}
```

{{EmbedLiveSample("Exemples", "100%", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
