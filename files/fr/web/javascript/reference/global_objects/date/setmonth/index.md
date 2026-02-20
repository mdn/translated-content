---
title: "Date : méthode setMonth()"
short-title: setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

La méthode **`setMonth()`** des instances de {{JSxRef("Date")}} modifie le mois et/ou le jour du mois pour cette date selon l'heure locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.setMonth()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setMonth(3);

console.log(event.getMonth());
// Résultat attendu : 3

console.log(event);
// Résultat attendu : "Sat Apr 19 1975 23:15:30 GMT+0100 (CET)"
// Remarque : votre fuseau horaire peut varier
```

## Syntaxe

```js-nolint
setMonth(monthValue)
setMonth(monthValue, dateValue)
```

### Paramètres

- `monthValue`
  - : Un entier représentant le mois&nbsp;: 0 pour janvier, 1 pour février, etc.
- `dateValue` {{Optional_Inline}}
  - : Un entier de 1 à 31 représentant le jour du mois.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouveau [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Si un paramètre vaut `NaN` (ou d'autres valeurs qui sont [contraintes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) et `NaN` est retourné.

## Description

Si vous ne définissez pas le paramètre `dateValue`, la même valeur que celle retournée par {{JSxRef("Date/getDate", "getDate()")}} est utilisée.

Si un paramètre que vous définissez est en dehors de la plage attendue, les autres paramètres et les informations de date dans l'objet {{JSxRef("Date")}} sont mises à jour en conséquence. Par exemple, si vous définissez 15 pour `monthValue`, l'année est incrémentée de 1, et 3 est utilisé pour le mois.

Le jour du mois courant aura un impact sur le comportement de cette méthode. Conceptuellement, il ajoutera le nombre de jours donné par le jour du mois courant au premier jour du nouveau mois défini comme paramètre, pour retourner la nouvelle date. Par exemple, si la valeur courante est le 31 janvier 2016, appeler setMonth avec une valeur de 1 retournera le 2 mars 2016. Cela s'explique par le fait qu'en 2016, février avait 29 jours.

Comme `setMonth()` fonctionne selon l'heure locale, franchir une transition d'heure d'été (DST) peut entraîner un temps écoulé différent de celui attendu. Par exemple, si le changement de mois franchit une transition d'avance du printemps (perte d'une heure), la différence de timestamps entre la nouvelle et l'ancienne date est inférieure d'une heure à la différence nominale de jours multipliée par 24 heures. À l'inverse, franchir une transition de recul de l'automne (gain d'une heure) ajoute une heure supplémentaire. Si vous devez ajuster la date d'une durée fixe, envisagez d'utiliser {{JSxRef("Date/setUTCMonth", "setUTCMonth()")}} ou {{JSxRef("Date/setTime", "setTime()")}}.

Si la nouvelle heure locale tombe dans une transition de décalage, l'heure exacte est déterminée en utilisant le même comportement que l'option [`disambiguation: "compatible"`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_entre_lheure_locale_et_lheure_utc) de `Temporal`. C'est-à-dire, si l'heure locale correspond à deux instants, le plus tôt est choisi&nbsp;; si l'heure locale n'existe pas (il y a un écart), on avance de la durée de l'écart.

## Exemples

### Utiliser la méthode `setMonth()`

```js
const leGrandJour = new Date();
leGrandJour.setMonth(6);

// Attention aux transitions de fin de mois
const finDuMois = new Date(2016, 7, 31);
finDuMois.setMonth(1);
console.log(finDuMois); // Wed Mar 02 2016 00:00:00
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getMonth()")}}
- La méthode {{JSxRef("Date.prototype.setUTCMonth()")}}
