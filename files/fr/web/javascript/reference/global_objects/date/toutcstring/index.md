---
title: "Date : méthode toUTCString()"
short-title: toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toUTCString()`** des instances de {{JSxRef("Date")}} retourne une chaîne de caractères représentant cette date au format défini par la [RFC 7231 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.1), les années négatives étant autorisées. Le fuseau horaire utilisé est toujours UTC. `toGMTString()` est un alias de cette méthode.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.toUTCString()", "shorter")}}

```js interactive-example
const event = new Date("14 Jun 2017 00:00:00 PDT");

console.log(event.toUTCString());
// Résultat attendu : "Wed, 14 Jun 2017 07:00:00 GMT"
```

## Syntaxe

```js-nolint
toUTCString()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant la date indiquée en temps UTC (voir la description pour le format). Retourne `"Invalid Date"` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Description

La valeur retournée par `toUTCString()` est une chaîne de caractères au format `Www, dd Mmm yyyy HH:mm:ss GMT`, où&nbsp;:

| Format de chaîne | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| `Www`            | Jour de la semaine, en trois lettres (ex. `Sun`, `Mon`)                |
| `dd`             | Jour du mois, sur deux chiffres (avec zéro initial si nécessaire)      |
| `Mmm`            | Mois, en trois lettres (ex. `Jan`, `Feb`)                              |
| `yyyy`           | Année, sur quatre chiffres ou plus (avec zéros initiaux si nécessaire) |
| `HH`             | Heure, sur deux chiffres (avec zéro initial si nécessaire)             |
| `mm`             | Minute, sur deux chiffres (avec zéro initial si nécessaire)            |
| `ss`             | Secondes, sur deux chiffres (avec zéro initial si nécessaire)          |

### Alias

L'API `Date` de JavaScript s'est inspirée de la bibliothèque Java `java.util.Date` (cette dernière étant devenue de facto obsolète depuis Java 1.1 en 1997). En particulier, la classe Java `Date` possédait une méthode nommée `toGMTString` — un nom mal choisi, car [l'Heure moyenne de Greenwich](https://fr.wikipedia.org/wiki/Temps_moyen_de_Greenwich) n'est pas équivalente au [Temps universel coordonné](https://fr.wikipedia.org/wiki/Temps_universel_coordonn%C3%A9), alors que les dates JavaScript fonctionnent toujours en temps UTC. Pour des raisons de compatibilité web, `toGMTString` reste un alias de `toUTCString`, et ils réfèrent au même objet fonction. Cela signifie&nbsp;:

```js
Date.prototype.toGMTString.name === "toUTCString";
```

## Exemples

### Utiliser la méthode `toUTCString()`

```js
const d = new Date(0);
console.log(d.toUTCString()); // 'Thu, 01 Jan 1970 00:00:00 GMT'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.toLocaleString()")}}
- La méthode {{JSxRef("Date.prototype.toString()")}}
- La méthode {{JSxRef("Date.prototype.toISOString()")}}
