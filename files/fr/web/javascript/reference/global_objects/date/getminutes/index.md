---
title: "Date : méthode getMinutes()"
short-title: getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getMinutes()`** des instances de {{JSxRef("Date")}} retourne les minutes pour la date renseignée d'après l'heure locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getMinutes()", "shorter")}}

```js interactive-example
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getMinutes());
// Résultat attendu : 20
```

## Syntaxe

```js-nolint
getMinutes()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier, entre 0 et 59, représentant les minutes pour la date indiquée selon l'heure locale. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Exemples

### Utiliser la méthode `getMinutes()`

La variable `minutes` a pour valeur `15`, d'après la valeur de l'objet {{JSxRef("Date")}} `noel95`.

```js
var noel95 = new Date("1995-12-25T23:15:30");
var minutes = noel95.getMinutes();

console.log(minutes); // 15
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCMinutes()")}}
- La méthode {{JSxRef("Date.prototype.setMinutes()")}}
