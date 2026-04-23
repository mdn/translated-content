---
title: "Date : méthode toDateString()"
short-title: toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toDateString()`** des instances de {{JSxRef("Date")}} retourne une chaîne de caractères représentant la partie date de cette date, interprétée selon le fuseau horaire local.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.toDateString()")}}

```js interactive-example
const event = new Date(1993, 6, 28, 14, 39, 7);

console.log(event.toString());
// Résultat attendu : "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
// Remarque : votre fuseau horaire peut varier

console.log(event.toDateString());
// Résultat attendu : "Wed Jul 28 1993"
```

## Syntaxe

```js-nolint
toDateString()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant la partie date de la date donnée (voir la description pour le format). Retourne `"Invalid Date"` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Description

Les instances de {{JSxRef("Date")}} représentent un point précis dans le temps. `toDateString()` interprète la date selon le fuseau horaire local et formate la partie _date_ en anglais. Elle utilise toujours le format suivant, séparé par des espaces&nbsp;:

1. Les trois premières lettres du nom du jour de la semaine
2. Les trois premières lettres du nom du mois
3. Le jour du mois sur deux chiffres, complété à gauche par un zéro si nécessaire
4. L'année sur au moins quatre chiffres, complétée à gauche par des zéros si nécessaire. Peut avoir un signe négatif

Par exemple&nbsp;: «&nbsp;Thu Jan 01 1970&nbsp;».

- Si vous souhaitez obtenir uniquement la partie _heure_, utilisez la méthode {{JSxRef("Date/toTimeString", "toTimeString()")}}.
- Si vous souhaitez obtenir la date et l'heure, utilisez la méthode {{JSxRef("Date/toString", "toString()")}}.
- Si vous souhaitez que la date soit interprétée en UTC au lieu du fuseau horaire local, utilisez la méthode {{JSxRef("Date/toUTCString", "toUTCString()")}}.
- Si vous souhaitez formater la date dans un format plus adapté à l'utilisateur·ice (par exemple, localisé), utilisez la méthode {{JSxRef("Date/toLocaleDateString", "toLocaleDateString()")}}.

## Exemples

### Utiliser la méthode `toDateString()`

```js
const d = new Date(0);

console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(d.toDateString()); // "Thu Jan 01 1970"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.toLocaleDateString()")}}
- La méthode {{JSxRef("Date.prototype.toTimeString()")}}
- La méthode {{JSxRef("Date.prototype.toString()")}}
