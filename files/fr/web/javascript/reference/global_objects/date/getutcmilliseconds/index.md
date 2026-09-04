---
title: "Date : méthode getUTCMilliseconds()"
short-title: getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getUTCMilliseconds()`** des instances de {{JSxRef("Date")}} retourne les millièmes de secondes pour la date renseignée selon le temps universel (UTC).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getUTCMilliseconds()", "shorter")}}

```js interactive-example
const exampleDate = new Date("2018-01-02T03:04:05.678Z"); // 2 Janvier 2018, 03:04:05.678 (UTC)

console.log(exampleDate.getUTCMilliseconds());
// Résultat attendu : 678
```

## Syntaxe

```js-nolint
getUTCMilliseconds()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier, entre 0 et 999, représentant les millièmes de seconde pour la date indiquée selon le temps universel. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

À ne pas confondre avec le timestamp. Pour obtenir le nombre total de millisecondes écoulées depuis l'époque, utilisez la méthode [`getTime()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime).

## Exemples

### Utiliser la méthode `getUTCMilliseconds()`

L'exemple suivant assigne les millièmes de secondes pour la date actuelle à la variable `millisecondes`.

```js
const aujourdhui = new Date();
const millisecondes = aujourdhui.getUTCMilliseconds();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getMilliseconds()")}}
- La méthode {{JSxRef("Date.prototype.setUTCMilliseconds()")}}
