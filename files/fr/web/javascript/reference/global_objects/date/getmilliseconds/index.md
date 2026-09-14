---
title: "Date : méthode getMilliseconds()"
short-title: getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getMilliseconds()`** des instances de {{JSxRef("Date")}} retourne les millièmes de secondes de la date renseignée d'après l'heure locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getMilliseconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");
moonLanding.setMilliseconds(123);

console.log(moonLanding.getMilliseconds());
// Résultat attendu : 123
```

## Syntaxe

```js-nolint
getMilliseconds()
```

### Paramètres

Aucun.

### Valeur de retour

Un nombre entre 0 et 999 indiquant le nombre de millisecondes pour la date indiquée, selon l'heure locale. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Exemples

### Utiliser la méthode `getMilliseconds()`

La variable `millisecondes` a pour valeur `0`, d'après la valeur de l'objet {{JSxRef("Date")}} `noel95`, qui ne spécifie pas la composante des millisecondes, donc elle est par défaut à 0.

```js
const noel95 = new Date("1995-12-25T23:15:30");
const millisecondes = noel95.getMilliseconds();

console.log(millisecondes); // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCMilliseconds()")}}
- La méthode {{JSxRef("Date.prototype.setMilliseconds()")}}
