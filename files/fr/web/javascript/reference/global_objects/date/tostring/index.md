---
title: "Date : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toString()`** des instances de {{JSxRef("Date")}} retourne une chaîne de caractères représentant cette date interprétée dans le fuseau horaire local.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.toString()", "shorter")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.toString());
// Résultat attendu : "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"
// Remarque : votre fuseau horaire peut varier
```

## Syntaxe

```js-nolint
toString()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant la date indiquée (voir la description pour le format). Retourne `"Invalid Date"` si la date est [non valide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Description

La méthode `toString()` fait partie du [protocole de contrainte de type](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_type). Comme `Date` possède une méthode [`[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive), cette méthode prend toujours le dessus sur `toString()` lorsqu'un objet `Date` est implicitement contraint en une chaîne de caractères. Cependant, `Date.prototype[Symbol.toPrimitive]()` appelle toujours `this.toString()` en interne.

L'objet {{JSxRef("Date")}} remplace la méthode {{JSxRef("Object/toString", "toString()")}} de {{JSxRef("Object")}}. `Date.prototype.toString()` retourne une chaîne de caractères représentant la date interprétée dans le fuseau horaire local, contenant à la fois la date et l'heure — elle concatène la représentation textuelle définie dans {{JSxRef("Date/toDateString", "toDateString()")}} et {{JSxRef("Date/toTimeString", "toTimeString()")}}, en ajoutant un espace entre les deux. Par exemple&nbsp;: «&nbsp;Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)&nbsp;».

`Date.prototype.toString()` doit être appelée sur des instances de {{JSxRef("Date")}}. Si la valeur de `this` n'hérite pas de `Date.prototype`, une {{JSxRef("TypeError")}} est levée.

- Pour obtenir uniquement la partie _date_, utiliser {{JSxRef("Date/toDateString", "toDateString()")}}.
- Pour obtenir uniquement la partie _heure_, utiliser {{JSxRef("Date/toTimeString", "toTimeString()")}}.
- Pour interpréter la date en UTC plutôt qu'en fuseau horaire local, utiliser {{JSxRef("Date/toUTCString", "toUTCString()")}}.
- Pour mettre en forme la date dans un format plus adapté à l'utilisateur·ice (par exemple, la localisation), utiliser {{JSxRef("Date/toLocaleString", "toLocaleString()")}}.

## Exemples

### Utiliser la méthode `toString()`

```js
const d = new Date(0);
console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Object.prototype.toString()")}}
- La méthode {{JSxRef("Date.prototype.toDateString()")}}
- La méthode {{JSxRef("Date.prototype.toLocaleString()")}}
- La méthode {{JSxRef("Date.prototype.toTimeString()")}}
