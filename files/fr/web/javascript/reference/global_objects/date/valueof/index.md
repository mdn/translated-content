---
title: "Date : méthode valueOf()"
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`valueOf()`** des instances de {{JSxRef("Date")}} retourne le nombre de millisecondes pour cette date depuis [l'époch](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide), qui est définie comme le passage à minuit du 1er janvier 1970, UTC.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.valueOf()")}}

```js interactive-example
const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

console.log(date1.valueOf());
// Résultat attendu : 823230245000

const date2 = new Date("02 Feb 1996 03:04:05 GMT");

console.log(date2.valueOf());
// Résultat attendu : 823230245000
```

## Syntaxe

```js-nolint
valueOf()
```

### Paramètres

Aucun.

### Valeur de retour

Un nombre représentant le [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide), en millisecondes, de cette date. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Description

La méthode `valueOf()` fait partie du [protocole de contrainte de type](/fr/docs/Web/JavaScript/Guide/Data_structures#contraintes_de_type). Comme `Date` possède une méthode [`[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive), cette méthode a toujours la priorité sur `valueOf()` lorsqu'un objet `Date` est implicitement contraint en nombre. Cependant, `Date.prototype[Symbol.toPrimitive]()` appelle toujours `this.valueOf()` en interne.

L'objet {{JSxRef("Date")}} surcharge la méthode {{JSxRef("Object/valueOf", "valueOf()")}} de {{JSxRef("Object")}}. `Date.prototype.valueOf()` retourne le timestamp de la date, ce qui est fonctionnellement équivalent à la méthode {{JSxRef("Date.prototype.getTime()")}}.

## Exemples

### Utiliser la méthode `valueOf()`

```js
const d = new Date(0); // 1970-01-01T00:00:00.000Z
console.log(d.valueOf()); // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Object.prototype.valueOf()")}}
- La méthode {{JSxRef("Date.prototype.getTime()")}}
