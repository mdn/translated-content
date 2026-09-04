---
title: "HTMLOutputElement : propriété labels"
short-title: labels
slug: Web/API/HTMLOutputElement/labels
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}

La propriété en lecture seule **`labels`** de l'interface {{DOMxRef("HTMLOutputElement")}} retourne un objet {{DOMxRef("NodeList")}} des éléments HTML {{HTMLElement("label")}} associés à l'élément {{HTMLElement("output")}}.

## Valeur

Un objet {{DOMxRef("NodeList")}} contenant les éléments `<label>` associés à l'élément `<output>`.

## Exemples

### HTML

```html
<label id="label1" for="test">Étiquette 1</label>
<output id="test">Sortie</output>
<label id="label2" for="test">Étiquette 2</label>
```

### JavaScript

```js
const output = document.getElementById("test");
for (const label of output.labels) {
  console.log(label.textContent); // "Étiquette 1" et "Étiquette 2"
}
```

{{EmbedLiveSample("Exemples", "100%", 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
