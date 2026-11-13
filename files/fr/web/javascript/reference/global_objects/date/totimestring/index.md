---
title: "Date : méthode toTimeString()"
short-title: toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toTimeString()`** des instances de {{JSxRef("Date")}} retourne une chaîne de caractères représentant la partie heure de cette date interprétée dans le fuseau horaire local.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.toTimeString()", "shorter")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.toTimeString());
// Résultat attendu : "23:15:30 GMT+0200 (CEST)"
// Remarque : votre fuseau horaire peut varier
```

## Syntaxe

```js-nolint
toTimeString()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant la partie heure de la date indiquée (voir la description pour le format). Retourne `"Invalid Date"` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Description

Les instances de {{JSxRef("Date")}} représentent un point précis dans le temps. `toTimeString()` interprète la date dans le fuseau horaire local et formate la partie _heure_ en anglais. Elle utilise toujours le format `HH:mm:ss GMT±xxxx (TZ)`, où&nbsp;:

| Format de chaîne | Description                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| `HH`             | Heure, sur deux chiffres (avec zéro initial si nécessaire)                                                         |
| `mm`             | Minute, sur deux chiffres (avec zéro initial si nécessaire)                                                        |
| `ss`             | Secondes, sur deux chiffres (avec zéro initial si nécessaire)                                                      |
| `±xxxx`          | Le décalage horaire local — deux chiffres pour les heures et deux chiffres pour les minutes (ex. `-0500`, `+0800`) |
| `TZ`             | Le nom du fuseau horaire (ex. `PDT`, `PST`)                                                                        |

Par exemple&nbsp;: «&nbsp;04:42:04 GMT+0000 (Coordinated Universal Time)&nbsp;».

- Pour obtenir uniquement la partie _date_, utilisez la méthode {{JSxRef("Date/toDateString", "toDateString()")}}.
- Pour obtenir à la fois la date et l'heure, utilisez la méthode {{JSxRef("Date/toString", "toString()")}}.
- Pour interpréter la date en UTC plutôt qu'en fuseau horaire local, utilisez la méthode {{JSxRef("Date/toUTCString", "toUTCString()")}}.
- Pour mettre en forme l'heure dans un format plus adapté à l'utilisateur (par exemple, la localisation), utilisez la méthode {{JSxRef("Date/toLocaleTimeString", "toLocaleTimeString()")}}.

## Exemple

### Utiliser la méthode `toTimeString()`

```js
const d = new Date(0);

console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(d.toTimeString()); // "00:00:00 GMT+0000 (Coordinated Universal Time)"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.toLocaleTimeString()")}}
- La méthode {{JSxRef("Date.prototype.toDateString()")}}
- La méthode {{JSxRef("Date.prototype.toString()")}}
