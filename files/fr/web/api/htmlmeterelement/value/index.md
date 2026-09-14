---
title: "HTMLMeterElement : propriété value"
short-title: value
slug: Web/API/HTMLMeterElement/value
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`value`** de l'interface {{DOMxRef("HTMLMeterElement")}} représente la valeur courante de l'élément HTML {{HTMLElement("meter")}} sous forme de nombre à virgule flottante. Elle reflète l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/meter#value) de l'élément. Si aucune valeur `value` n'est définie, il s'agit de la valeur {{DOMxRef("HTMLMeterElement.min")}} ou `0`, selon la plus grande des deux.

Cette propriété peut aussi être définie directement, par exemple pour définir une valeur par défaut selon une condition.

## Valeur

Un nombre. Par défaut, {{DOMxRef("HTMLMeterElement.min")}} ou `0`, selon la plus grande des deux, si aucune valeur n'est définie.

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
console.log(meterElement.value); // 50
--meterElement.value;
console.log(meterElement.value); // 49
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("meter")}}
- La propriété {{DOMxRef("HTMLMeterElement.min")}}
- L'interface {{DOMxRef("HTMLProgressElement")}}
