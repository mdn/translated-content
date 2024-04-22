---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
---

{{jsSidebar("Objects")}}

La propriété globale **`Infinity`** est une valeur numérique représentant l'infini.

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-infinity.html")}}

## Syntaxe

```js
Infinity;
```

## Description

`Infinity` est une propriété de _l'objet global_ , c'est-à-dire qu'elle est accessible globalement.

La valeur initiale d'`Infinity` est {{jsxref("Number.POSITIVE_INFINITY")}}. La valeur `Infinity` (infinité positive) est une valeur plus grande que n'importe quel nombre. Cette valeur se comporte comme l'infini mathématique&nbsp;; par exemple, tout ce qui est multiplié par `Infinity` vaut `Infinity`, et tout ce qui est divisé par `Infinity` vaut 0.

D'après la spécification ECMAScript 5, `Infinity` est en lecture seule.

## Exemples

```js
console.log(Infinity); // Infinity
console.log(Infinity + 1); // Infinity
console.log(Math.pow(10, 1000)); // Infinity
console.log(Math.log(0)); // -Infinity
console.log(1 / Infinity); // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
