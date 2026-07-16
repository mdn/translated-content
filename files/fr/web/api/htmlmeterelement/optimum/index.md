---
title: "HTMLMeterElement : propriété optimum"
short-title: optimum
slug: Web/API/HTMLMeterElement/optimum
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`optimum`** de l'interface {{DOMxRef("HTMLMeterElement")}} représente la valeur optimale de l'élément HTML {{HTMLElement("meter")}} sous forme de nombre à virgule flottante. Elle reflète l'attribut [`optimum`](/fr/docs/Web/HTML/Reference/Elements/meter#optimum) de l'élément, ou le point médian entre les valeurs de `min` et `max` si elle n'est pas définie. La valeur de `optimum` est contrainte par les valeurs de `min` et `max`.

Cette propriété peut aussi être définie directement, par exemple pour définir une valeur par défaut selon une condition.

## Valeur

Un nombre. Par défaut, il s'agit du point médian entre {{DOMxRef("HTMLMeterElement.min")}} et {{DOMxRef("HTMLMeterElement.max")}} s'il n'est pas défini.

## Exemples

Dans cet exemple, aucune valeur `optimum` n'est définie.

```html
<label for="review">Note en étoiles&nbsp;:</label>
<meter id="review" min="0" max="10" low="2" high="8" value="9"></meter>
```

Bien qu'elle ne soit pas explicitement définie, la valeur par défaut de `optimum` est le point médian entre `min` et `max`, mais elle peut être définie sur n'importe quelle valeur comprise entre `min` et `max`, inclus.

```js
const meterElement = document.getElementById("fuel");
console.log(meterElement.optimum); // 5
meterElement.optimum = (meterElement.max + meterElement.optimum) / 2;
console.log(meterElement.optimum); // 7.5
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("meter")}}
- La propriété {{DOMxRef("HTMLMeterElement.value")}}
- La propriété {{DOMxRef("HTMLMeterElement.high")}}
- La propriété {{DOMxRef("HTMLMeterElement.low")}}
- L'interface {{DOMxRef("HTMLProgressElement")}}
