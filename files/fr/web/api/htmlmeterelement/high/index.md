---
title: "HTMLMeterElement : propriété high"
short-title: high
slug: Web/API/HTMLMeterElement/high
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`high`** de l'interface {{DOMxRef("HTMLMeterElement")}} représente la limite haute de l'élément HTML {{HTMLElement("meter")}} sous forme de nombre à virgule flottante. Elle reflète l'attribut [`high`](/fr/docs/Web/HTML/Reference/Elements/meter#high) de l'élément, ou la valeur de `max` si non définie. La valeur de `high` est contrainte par les valeurs de `low` et `max`.

Cette propriété peut aussi être définie directement, par exemple pour définir une valeur par défaut selon une condition.

## Valeur

Un nombre qui n'est pas inférieur à {{DOMxRef("HTMLMeterElement.low")}} ni supérieur à {{DOMxRef("HTMLMeterElement.max")}}.

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
console.log(meterElement.high); // 66
++meterElement.high;
console.log(meterElement.high); // 67
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("meter")}}
- La propriété {{DOMxRef("HTMLMeterElement.value")}}
- La propriété {{DOMxRef("HTMLMeterElement.max")}}
- La propriété {{DOMxRef("HTMLMeterElement.low")}}
- L'interface {{DOMxRef("HTMLProgressElement")}}
