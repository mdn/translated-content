---
title: "Date : méthode getDate()"
short-title: getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`getDate()`** des instance de {{JSxRef("Date")}} retourne le jour du mois pour la date spécifiée d'après l'heure locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getDate()", "shorter")}}

```js interactive-example
const birthday = new Date("August 19, 1975 23:15:30");
const date1 = birthday.getDate();

console.log(date1);
// Résultat attendu : 19
```

## Syntaxe

```js-nolint
getDate()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier entre 1 et 31 correspondant au jour du mois de la date indiquée selon l'heure locale. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Exemples

### Utiliser la méthode `getDate()`

La variable `jour` a pour valeur `25`, d'après la valeur de l'objet {{JSxRef("Date")}} `noel95`.

```js
const noel95 = new Date("1995-12-25T23:15:30");
const jour = noel95.getDate();

console.log(jour); // 25
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCDate()")}}
- La méthode {{JSxRef("Date.prototype.getUTCDay()")}}
- La méthode {{JSxRef("Date.prototype.setDate()")}}
