---
title: "Date : méthode setMilliseconds()"
short-title: setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

La méthode **`setMilliseconds()`** des instances de {{JSxRef("Date")}} modifie les millisecondes pour cette date selon l'heure locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.setMilliseconds()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.getMilliseconds());
// Résultat attendu : 0

event.setMilliseconds(456);

console.log(event.getMilliseconds());
// Résultat attendu : 456
```

## Syntaxe

```js-nolint
setMilliseconds(millisecondsValue)
```

### Paramètres

- `millisecondsValue`
  - : Un entier entre 0 et 999, représentant les millièmes de secondes.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouveau [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Si `millisecondsValue` vaut `NaN` (ou d'autres valeurs qui sont [contraintes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) et `NaN` est retourné.

## Description

Si vous définissez un nombre en dehors de la plage attendue, les informations de date dans l'objet {{JSxRef("Date")}} sont mises à jour en conséquence. Par exemple, si vous définissez 1005, le nombre de secondes est incrémenté de 1, et 5 est utilisé pour les millisecondes.

Comme `setMilliseconds()` fonctionne selon l'heure locale, franchir une transition d'heure d'été (DST) peut entraîner un temps écoulé différent de celui attendu. Par exemple, si le changement de millisecondes franchit une transition d'avance du printemps (perte d'une heure), la différence de timestamps entre la nouvelle et l'ancienne date est inférieure d'une heure à la différence nominale de temps. À l'inverse, franchir une transition de recul de l'automne (gain d'une heure) ajoute une heure supplémentaire. Si vous devez ajuster la date d'une durée fixe, envisagez d'utiliser {{JSxRef("Date/setUTCMilliseconds", "setUTCMilliseconds()")}} ou {{JSxRef("Date/setTime", "setTime()")}}.

Si la nouvelle heure locale tombe dans une transition de décalage, l'heure exacte est déterminée en utilisant le même comportement que l'option [`disambiguation: "compatible"`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_entre_lheure_locale_et_lheure_utc) de `Temporal`. C'est-à-dire, si l'heure locale correspond à deux instants, le plus tôt est choisi&nbsp;; si l'heure locale n'existe pas (il y a un écart), on avance de la durée de l'écart.

## Exemples

### Utiliser la méthode `setMilliseconds()`

```js
const leGrandJour = new Date();
leGrandJour.setMilliseconds(100);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getMilliseconds()")}}
- La méthode {{JSxRef("Date.prototype.setUTCMilliseconds()")}}
