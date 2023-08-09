---
title: event.defaultPrevented
slug: Web/API/Event/defaultPrevented
---

{{APIRef("DOM")}}

## Résumé

Retourne un booléen indiquant si {{domxref("event.preventDefault()")}} a été appelée sur l'évènement ou non.

> **Note :** Cette propriété doit etre utilisée au lieu de la méthode `getPreventDefault()` qui n'est pas standard et est désormais dépréciée (voir [bug Firefox 691151](https://bugzil.la/691151)).

## Syntaxe

```js
bool = event.defaultPrevented;
```

## Exemple

```js
if (e.defaultPrevented) {
  /* Le comportement par défaut a été inhibé */
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
