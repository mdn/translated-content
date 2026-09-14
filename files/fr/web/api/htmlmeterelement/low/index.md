---
title: "HTMLMeterElement : propriété low"
short-title: low
slug: Web/API/HTMLMeterElement/low
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`low`** de l'interface {{DOMxRef("HTMLMeterElement")}} représente la limite basse de l'élément HTML {{HTMLElement("meter")}} sous forme de nombre à virgule flottante. Elle reflète l'attribut [`low`](/fr/docs/Web/HTML/Reference/Elements/meter#low) de l'élément, ou la valeur de `min` si non définie. La valeur de `low` est contrainte par les valeurs de `min` et `max`.

Cette propriété peut aussi être définie directement, par exemple pour définir une valeur par défaut selon une condition.

## Valeur

Un nombre qui n'est pas inférieur à {{DOMxRef("HTMLMeterElement.min")}} ni supérieur à {{DOMxRef("HTMLMeterElement.max")}}.

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
console.log(meterElement.low); // 15
--meterElement.low;
console.log(meterElement.low); // 14
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("meter")}}
- La propriété {{DOMxRef("HTMLMeterElement.value")}}
- La propriété {{DOMxRef("HTMLMeterElement.min")}}
- La propriété {{DOMxRef("HTMLMeterElement.high")}}
- L'interface {{DOMxRef("HTMLProgressElement")}}
