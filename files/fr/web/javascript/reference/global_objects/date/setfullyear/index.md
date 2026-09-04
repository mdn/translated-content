---
title: "Date : méthode setFullYear()"
short-title: setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

La méthode **`setFullYear()`** des instances de {{JSxRef("Date")}} modifie l'année, le mois et/ou le jour du mois pour cette date selon l'heure locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.setFullYear()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setFullYear(1969);

console.log(event.getFullYear());
// Résultat attendu : 1969

event.setFullYear(0);

console.log(event.getFullYear());
// Résultat attendu : 0
```

## Syntaxe

```js-nolint
setFullYear(yearValue)
setFullYear(yearValue, monthValue)
setFullYear(yearValue, monthValue, dateValue)
```

### Paramètres

- `yearValue`
  - : Un entier représentant l'année. Par exemple, 1995.
- `monthValue` {{Optional_Inline}}
  - : Un entier représentant le mois&nbsp;: 0 pour janvier, 1 pour février, etc.
- `dateValue` {{Optional_Inline}}
  - : Un entier entre 1 et 31 représentant le jour du mois. Si vous indiquez `dateValue`, vous devez aussi indiquer `monthValue`.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouveau [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Si un paramètre vaut `NaN` (ou d'autres valeurs qui sont [contraintes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) et `NaN` est retourné.

## Description

Si vous ne définissez pas les paramètres `monthValue` et `dateValue`, les mêmes valeurs que celles retournées par {{JSxRef("Date/getMonth", "getMonth()")}} et {{JSxRef("Date/getDate", "getDate()")}} sont utilisées.

Si un paramètre que vous définissez est en dehors de la plage attendue, les autres paramètres et les informations de date dans l'objet {{JSxRef("Date")}} sont mises à jour en conséquence. Par exemple, si vous définissez 15 pour `monthValue`, l'année est incrémentée de 1 (`yearValue + 1`), et 3 est utilisé pour le mois.

Comme `setFullYear()` fonctionne selon l'heure locale, franchir une transition d'heure d'été (DST) peut entraîner un temps écoulé différent de celui attendu. Par exemple, si le changement de date franchit une transition d'avance du printemps (perte d'une heure), la différence de timestamps entre la nouvelle et l'ancienne date est inférieure d'une heure à la différence nominale de jours multipliée par 24 heures. À l'inverse, franchir une transition de recul de l'automne (gain d'une heure) ajoute une heure supplémentaire. Si vous devez ajuster la date d'une durée fixe, envisagez d'utiliser {{JSxRef("Date/setUTCFullYear", "setUTCFullYear()")}} ou {{JSxRef("Date/setTime", "setTime()")}}.

Si la nouvelle heure locale tombe dans une transition de décalage, l'heure exacte est déterminée en utilisant le même comportement que l'option [`disambiguation: "compatible"`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_entre_lheure_locale_et_lheure_utc) de `Temporal`. C'est-à-dire, si l'heure locale correspond à deux instants, le plus tôt est choisi&nbsp;; si l'heure locale n'existe pas (il y a un écart), on avance de la durée de l'écart.

## Exemples

### Utiliser la méthode `setFullYear()`

```js
const leGrandJour = new Date();
leGrandJour.setFullYear(1997);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCFullYear()")}}
- La méthode {{JSxRef("Date.prototype.setUTCFullYear()")}}
- La méthode {{JSxRef("Date.prototype.setYear()")}}
