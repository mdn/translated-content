---
title: Intl.DateTimeFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts
---

{{JSRef}}

La fonction **`Intl.DateTimeFormat.prototype.formatRangeToParts()`** permet, selon la locale utilisée, de représenter chaque élément de l'intervalle de dates via [`DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).

## Syntaxe

```js
Intl.DateTimeFormat.prototype.formatRangeToParts(dateDebut, dateFin);
```

## Exemples

### Usage basique de `formatRangeToParts`

Cette fonction reçoit deux [Dates](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) et retourne un [Array](/fr/docs/Glossary/Array) d'objets contenant les élements qui représentent chaque partie de l'intervalle de date formatée, selon la locale utilisée.

```js
let date1 = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
let date2 = new Date(Date.UTC(2007, 0, 10, 11, 0, 0));
// > 'Wed, 10 Jan 2007 10:00:00 GMT'
// > 'Wed, 10 Jan 2007 11:00:00 GMT'

let fmt = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

console.log(fmt.formatRange(date1, date2));
// > '10:00 – 11:00 AM'

fmt.formatRangeToParts(date1, date2);
// retourne la valeur:
// [
//   { type: 'hour',      value: '10',  source: "startRange" },
//   { type: 'literal',   value: ':',   source: "startRange" },
//   { type: 'minute',    value: '00',  source: "startRange" },
//   { type: 'literal',   value: ' – ', source: "shared"     },
//   { type: 'hour',      value: '11',  source: "endRange"   },
//   { type: 'literal',   value: ':',   source: "endRange"   },
//   { type: 'minute',    value: '00',  source: "endRange"   },
//   { type: 'literal',   value: ' ',   source: "shared"     },
//   { type: 'dayPeriod', value: 'AM',  source: "shared"     }
// ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
