---
title: "Date : méthode setDate()"
short-title: setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

La méthode **`setDate()`** des instances de {{JSxRef("Date")}} modifie le jour du mois pour cette date selon l'heure locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.setDate()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setDate(24);

console.log(event.getDate());
// Résultat attendu : 24

event.setDate(32);
// Seulement 31 jours en août !

console.log(event.getDate());
// Résultat attendu : 1
```

## Syntaxe

```js-nolint
setDate(dateValue)
```

### Paramètres

- `dateValue`
  - : Un entier représentant le jour du mois.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouveau [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Si `dateValue` vaut `NaN` (ou d'autres valeurs qui sont [contraintes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) et `NaN` est retourné.

## Description

Si vous définissez un nombre en dehors de la plage attendue, les informations de date dans l'objet {{JSxRef("Date")}} sont mises à jour en conséquence. Par exemple, si l'objet `Date` contient le 1er juin, une `dateValue` de 40 change la date au 10 juillet, tandis qu'une `dateValue` de 0 change la date au dernier jour du mois précédent, soit le 31 mai.

Comme `setDate()` fonctionne selon l'heure locale, franchir une transition d'heure d'été (DST) peut entraîner un temps écoulé différent de celui attendu. Par exemple, si le changement de date franchit une transition d'avance du printemps (perte d'une heure), la différence de timestamps entre la nouvelle et l'ancienne date est inférieure d'une heure à la différence nominale de jours multipliée par 24 heures. À l'inverse, franchir une transition de recul de l'automne (gain d'une heure) ajoute une heure supplémentaire. Si vous devez ajuster la date d'une durée fixe, envisagez d'utiliser {{JSxRef("Date/setUTCDate", "setUTCDate()")}} ou {{JSxRef("Date/setTime", "setTime()")}}.

Si la nouvelle heure locale tombe dans une transition de décalage, l'heure exacte est déterminée en utilisant le même comportement que l'option [`disambiguation: "compatible"`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_entre_lheure_locale_et_lheure_utc) de `Temporal`. C'est-à-dire, si l'heure locale correspond à deux instants, le plus tôt est choisi&nbsp;; si l'heure locale n'existe pas (il y a un écart), on avance de la durée de l'écart.

## Exemples

### Utiliser la méthode `setDate()`

```js
const leGrandJour = new Date(1962, 6, 7, 12); // midi du 7 juillet 1962 (le mois est indexé à partir de 0)
const leGrandJour2 = new Date(leGrandJour).setDate(24); // 1962-07-24 (24 juillet 1962)
const leGrandJour3 = new Date(leGrandJour).setDate(32); // 1962-08-01 (1er août 1962)
const leGrandJour4 = new Date(leGrandJour).setDate(22); // 1962-07-22 (22 juillet 1962)
const leGrandJour5 = new Date(leGrandJour).setDate(0); // 1962-06-30 (30 juin 1962)
const leGrandJour6 = new Date(leGrandJour).setDate(98); // 1962-10-06 (6 octobre 1962)
const leGrandJour7 = new Date(leGrandJour).setDate(-50); // 1962-05-11 (11 mai 1962)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le constructeur {{JSxRef("Date/Date", "Date()")}}
- La méthode {{JSxRef("Date.prototype.getDate()")}}
- La méthode {{JSxRef("Date.prototype.setUTCDate()")}}
