---
title: "Date : méthode toISOString()"
short-title: toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toISOString()`** des instances de {{JSxRef("Date")}} retourne une chaîne de caractères représentant cette date au [format chaîne de date-heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#format_de_chaîne_date-heure), un format _simplifié_ basé sur la [norme ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601), qui fait toujours 24 ou 27 caractères (`YYYY-MM-DDTHH:mm:ss.sssZ` ou `±YYYYYY-MM-DDTHH:mm:ss.sssZ`, respectivement). Le fuseau horaire est toujours UTC, comme indiqué par le suffixe `Z`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.toISOString()")}}

```js interactive-example
const event = new Date("05 October 2011 14:48 UTC");
console.log(event.toString());
// Résultat attendu : "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)"
// Remarque : votre fuseau horaire peut varier

console.log(event.toISOString());
// Résultat attendu : "2011-10-05T14:48:00.000Z"
```

## Syntaxe

```js-nolint
toISOString()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant la date donnée au [format chaîne de date-heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#format_de_chaîne_date-heure) selon le temps universel. Il s'agit du même format que celui requis pour être reconnu par {{JSxRef("Date.parse()")}}.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) ou si elle correspond à une année qui ne peut pas être représentée dans le format de chaîne de date.

## Exemples

### Utiliser la méthode `toISOString()`

```js
const d = new Date(0);

console.log(d.toISOString()); // "1970-01-01T00:00:00.000Z"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.toLocaleDateString()")}}
- La méthode {{JSxRef("Date.prototype.toString()")}}
- La méthode {{JSxRef("Date.prototype.toUTCString()")}}
