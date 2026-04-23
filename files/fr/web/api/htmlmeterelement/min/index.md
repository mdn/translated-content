---
title: "HTMLMeterElement : propriété min"
short-title: min
slug: Web/API/HTMLMeterElement/min
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`min`** de l'interface {{DOMxRef("HTMLMeterElement")}} représente la valeur minimale de l'élément HTML {{HTMLElement("meter")}} sous forme de nombre à virgule flottante. Elle reflète l'attribut [`min`](/fr/docs/Web/HTML/Reference/Elements/meter#min) de l'élément, ou `0` si aucun `min` n'est défini.

Cette propriété peut aussi être définie directement, par exemple pour définir une valeur par défaut selon une condition.

## Valeur

Un nombre.

## Exemples

```html
<label for="fuel">Niveau de carburant actuel&nbsp;:</label>
<meter
  id="fuel"
  min="0"
  max="100"
  low="15"
  high="66"
  optimum="80"
  value="50"></meter>
```

```js
const meterElement = document.getElementById("fuel");
console.log(meterElement.min); // 0
++meterElement.min;
console.log(meterElement.min); // 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("meter")}}
- La propriété {{DOMxRef("HTMLMeterElement.value")}}
- La propriété {{DOMxRef("HTMLMeterElement.max")}}
- L'interface {{DOMxRef("HTMLProgressElement")}}
