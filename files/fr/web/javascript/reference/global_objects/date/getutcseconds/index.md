---
title: "Date : méthode getUTCSeconds()"
short-title: getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getUTCSeconds()`** des instances de {{JSxRef("Date")}} retourne les secondes de la date indiquée selon le temps universel (UTC).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getUTCSeconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 1969, 20:18:04 UTC");

console.log(moonLanding.getUTCSeconds());
// Résultat attendu : 4
```

## Syntaxe

```js-nolint
getUTCSeconds()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier entre 0 et 59 correspondant au nombre de secondes écoulées pour la date indiquée selon le temps universel. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Exemples

### Utiliser la méthode `getUTCSeconds()`

L'exemple suivant assigne les secondes de la date actuelle à la variable `secondes`.

```js
const aujourdhui = new Date();
const secondes = aujourdhui.getUTCSeconds();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getSeconds()")}}
- La méthode {{JSxRef("Date.prototype.setUTCSeconds()")}}
