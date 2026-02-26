---
title: "Date : méthode getSeconds()"
short-title: getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getSeconds()`** des instances de {{JSxRef("Date")}} retourne les secondes pour la date renseignée d'après l'heure locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getSeconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getSeconds());
// Résultat attendu : 18
```

## Syntaxe

```js-nolint
getSeconds()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier, entre 0 et 59, représentant les secondes pour la date indiquée selon l'heure locale. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Exemples

### Utiliser la méthode `getSeconds()`

La variable `secondes` a pour valeur `30`, d'après la valeur de l'objet {{JSxRef("Date")}} `noel95`.

```js
const noel95 = new Date("1995-12-25T23:15:30");
const secondes = noel95.getSeconds();

console.log(secondes); //30
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCSeconds()")}}
- La méthode {{JSxRef("Date.prototype.setSeconds()")}}
