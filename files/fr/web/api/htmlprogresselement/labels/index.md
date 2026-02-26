---
title: "HTMLProgressElement : propriété labels"
short-title: labels
slug: Web/API/HTMLProgressElement/labels
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`labels`** de l'interface {{DOMxRef("HTMLProgressElement")}} retourne un objet {{DOMxRef("NodeList")}} des éléments HTML {{HTMLElement("label")}} associés à l'élément {{HTMLElement("progress")}}.

## Valeur

Un objet {{DOMxRef("NodeList")}} contenant les éléments `<label>` associés à l'élément `<progress>`.

## Exemples

### HTML

```html
<label id="label1" for="test">Étiquette 1</label>
<progress id="test" value="70" max="100">70%</progress>
<label id="label2" for="test">Étiquette 2</label>
```

### JavaScript

```js
const progress = document.getElementById("test");
for (const label of progress.labels) {
  console.log(label.textContent); // "Étiquette 1" et "Étiquette 2"
}
```

{{EmbedLiveSample("Exemples", "100%", 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
