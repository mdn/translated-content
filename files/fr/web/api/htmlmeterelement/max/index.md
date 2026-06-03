---
title: "HTMLMeterElement : propriété max"
short-title: max
slug: Web/API/HTMLMeterElement/max
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`max`** de l'interface {{DOMxRef("HTMLMeterElement")}} représente la valeur maximale de l'élément HTML {{HTMLElement("meter")}} sous forme de nombre à virgule flottante. Elle reflète l'attribut [`max`](/fr/docs/Web/HTML/Reference/Elements/meter#max) de l'élément, ou la valeur de `min` si aucun `max` n'est défini, ou `1` si ni `min` ni `max` ne sont définis.

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
console.log(meterElement.max); // 100
--meterElement.max;
console.log(meterElement.max); // 99
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("meter")}}
- La propriété {{DOMxRef("HTMLMeterElement.value")}}
- La propriété {{DOMxRef("HTMLMeterElement.min")}}
- L'interface {{DOMxRef("HTMLProgressElement")}}
