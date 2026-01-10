---
title: "HTMLMeterElement : propriété labels"
short-title: labels
slug: Web/API/HTMLMeterElement/labels
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}

La propriété en lecture seule **`HTMLMeterElement.labels`** retourne un objet {{DOMxRef("NodeList")}} des éléments HTML {{HTMLElement("label")}} associés à l'élément
{{HTMLElement("meter")}}.

## Valeur

Un {{DOMxRef("NodeList")}} contenant les éléments `<label>` associés à l'élément `<meter>`.

## Exemples

### HTML

```html
<label id="label1" for="test">Étiquette 1</label>
<meter id="test" min="0" max="100" value="70">70</meter>
<label id="label2" for="test">Étiquette 2</label>
```

### JavaScript

```js
const meter = document.getElementById("test");
for (const label of meter.labels) {
  console.log(label.textContent); // "Étiquette 1" et "Étiquette 2"
}
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
