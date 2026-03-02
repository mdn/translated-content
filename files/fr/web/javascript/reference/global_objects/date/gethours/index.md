---
title: "Date : méthode getHours()"
short-title: getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getHours()`** des instances de {{JSxRef("Date")}} retourne l'heure pour la date renseignée, d'après l'heure locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getHours()", "shorter")}}

```js interactive-example
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getHours());
// Résultat attendu : 4
```

## Syntaxe

```js-nolint
getHours()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier, compris entre 0 et 23 qui indique l'heure de la date indiquée selon l'heure locale. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Exemples

### Utiliser la méthode `getHours()`

La variable `heure` a la valeur `23`, d'après la valeur de l'objet {{JSxRef("Date")}} `noel95`.

```js
const noel95 = new Date("1995-12-25T23:15:30");
const heure = noel95.getHours();

console.log(heure); // 23
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCHours()")}}
- La méthode {{JSxRef("Date.prototype.setHours()")}}
