---
title: "Date : méthode setMinutes()"
short-title: setMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

La méthode **`setMinutes()`** des instances de {{JSxRef("Date")}} définit les minutes pour la date donnée, selon l'heure locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.setMinutes()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setMinutes(45);

console.log(event.getMinutes());
// Résultat attendu : 45

console.log(event);
// Résultat attendu : "Tue Aug 19 1975 23:45:30 GMT+0200 (CEST)"
// Remarque : votre fuseau horaire peut varier
```

## Syntaxe

```js-nolint
setMinutes(minutesValue)
setMinutes(minutesValue, secondsValue)
setMinutes(minutesValue, secondsValue, msValue)
```

### Paramètres

- `minutesValue`
  - : Un entier compris entre 0 et 59 représentant les minutes.
- `secondsValue` {{Optional_Inline}}
  - : Un entier compris entre 0 et 59 représentant les secondes. Si vous définissez `secondsValue`, vous devez aussi définir `minutesValue`.
- `msValue` {{Optional_Inline}}
  - : Un entier compris entre 0 et 999 représentant les millisecondes. Si vous définissez `msValue`, vous devez aussi définir `minutesValue` et `secondsValue`.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouveau [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Si un paramètre vaut `NaN` (ou d'autres valeurs qui sont [contraintes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) et `NaN` est retourné.

## Description

Si vous ne définissez pas les paramètres `secondsValue` et `msValue`, les mêmes valeurs que celles retournées par {{JSxRef("Date/getSeconds", "getSeconds()")}} et {{JSxRef("Date/getMilliseconds", "getMilliseconds()")}} sont utilisées.

Si un paramètre que vous définissez est en dehors de la plage attendue, les autres paramètres et les informations de date dans l'objet {{JSxRef("Date")}} sont mises à jour en conséquence. Par exemple, si vous définissez 100 pour `secondsValue`, les minutes sont incrémentées de 1 (`minutesValue + 1`), et 40 est utilisé pour les secondes.

Comme `setMinutes()` fonctionne selon l'heure locale, franchir une transition d'heure d'été (DST) peut entraîner un temps écoulé différent de celui attendu. Par exemple, si le changement de minutes franchit une transition d'avance du printemps (perte d'une heure), la différence de timestamps entre la nouvelle et l'ancienne date est inférieure d'une heure à la différence nominale de temps. À l'inverse, franchir une transition de recul de l'automne (gain d'une heure) ajoute une heure supplémentaire. Si vous devez ajuster la date d'une durée fixe, envisagez d'utiliser {{JSxRef("Date/setUTCMinutes", "setUTCMinutes()")}} ou {{JSxRef("Date/setTime", "setTime()")}}.

Si la nouvelle heure locale tombe dans une transition de décalage, l'heure exacte est déterminée en utilisant le même comportement que l'option [`disambiguation: "compatible"`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_entre_lheure_locale_et_lheure_utc) de `Temporal`. C'est-à-dire, si l'heure locale correspond à deux instants, le plus tôt est choisi&nbsp;; si l'heure locale n'existe pas (il y a un écart), on avance de la durée de l'écart.

## Exemples

### Utiliser la méthode `setMinutes()`

```js
const leGrandJour = new Date();
leGrandJour.setMinutes(45);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getMinutes()")}}
- La méthode {{JSxRef("Date.prototype.setUTCMinutes()")}}
