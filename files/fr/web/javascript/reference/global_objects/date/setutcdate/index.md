---
title: "Date : méthode setUTCDate()"
short-title: setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

La méthode **`setUTCDate()`** des instances de {{JSxRef("Date")}} modifie le jour du mois pour cette date selon le temps universel.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.setUTCDate()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCDate());
// Résultat attendu : 20

event.setUTCDate(19);

console.log(event.getUTCDate());
// Résultat attendu : 19
```

## Syntaxe

```js-nolint
setUTCDate(dateValue)
```

### Paramètres

- `dateValue`
  - : Un entier de 1 à 31 représentant un jour dans le mois.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouvel [horodatage (<i lang="en">timestamp</i> en anglais)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_horodatages_et_la_date_invalide). Si `dateValue` vaut `NaN` (ou d'autres valeurs qui sont [contraintes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_horodatages_et_la_date_invalide) et `NaN` est retourné.

## Description

Si la valeur `dateValue` est en dehors de la plage des jours du mois, `setUTCDate()` met à jour l'objet {{JSxRef("Date")}} en conséquence.

Par exemple, si 0 est fourni pour `dateValue`, la date est définie au dernier jour du mois précédent. Si vous utilisez 40 pour `dateValue` et que le mois stocké dans l'objet {{JSxRef("Date")}} est juin, le jour est changé en 10 et le mois est incrémenté à juillet.

Si un nombre négatif est fourni pour `dateValue`, la date est définie en comptant à rebours à partir du dernier jour du mois précédent. -1 a pour effet de définir la date à 1 jour avant le dernier jour du mois précédent.

## Exemples

### Utiliser la méthode `setUTCDate()`

```js
const leGrandJour = new Date();
leGrandJour.setUTCDate(20);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCDate()")}}
- La méthode {{JSxRef("Date.prototype.setDate()")}}
