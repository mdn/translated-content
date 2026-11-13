---
title: "HTMLSelectElement : propriété options"
short-title: options
slug: Web/API/HTMLSelectElement/options
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}

La propriété en lecture seule **`options`** de l'interface {{DOMxRef("HTMLSelectElement")}} retourne une {{DOMxRef("HTMLOptionsCollection")}} des éléments HTML {{HTMLElement("option")}} contenus dans l'élément HTML {{HTMLElement("select")}}.

## Valeur

Une collection {{DOMxRef("HTMLOptionsCollection")}} contenant les éléments `<option>` contenus dans l'élément `<select>`.

## Exemples

### HTML

```html
<label for="test">Étiquette</label>
<select id="test">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### JavaScript

```js
const select = document.getElementById("test");
for (const option of select.options) {
  console.log(option.label); // "Option 1" et "Option 2"
}
```

{{EmbedLiveSample("Exemples", "100%", 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
