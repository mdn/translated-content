---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
tags:
  - Date
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date
original_slug: Web/JavaScript/Reference/Objets_globaux/Date
---
{{JSRef}}

Les objets JavaScript **`Date`** représentent un instant donné sur l'axe du temps dans un format indépendant de la plateforme utilisée. Les objets `Date` contiennent un nombre (`Number`) qui représente le nombre de millisecondes écoulées depuis le premier janvier 1970 sur l'échelle [UTC](https://fr.wikipedia.org/wiki/Temps_universel_coordonn%C3%A9).

> **Note :** TC39 travaille actuellement sur [Temporal](https://tc39.es/proposal-temporal/docs/index.html), une nouvelle API pour la gestion des dates, heures et données temporelles.
> Pour en savoir plus, consultez le [blog d'Igalia](https://blogs.igalia.com/compilers/2020/06/23/dates-and-times-in-javascript/) et n'hésitez pas à répondre [au sondage](https://forms.gle/iL9iZg7Y9LvH41Nv8). Les retours concrets de développeurs web sont importants pour affiner cette API. Attention, elle n'est pas encore prête à être utilisée en production !

## Description

### L'epoch ECMAScript

D'un point de vue technique, une date JavaScript correspond au nombre de millisecondes écoulées depuis le premier janvier 1970, minuit UTC. Cette date et cette heure sont les mêmes que **l'[epoch](https://fr.wikipedia.org/wiki/Epoch) UNIX**, qui est l'instant de référence principalement utilisé pour manipuler les dates/heures dans les systèmes informatiques.

> **Note :** Bien que les valeurs temporelles des objets dates soient relatives à UTC, certaines des méthodes simples pour obtenir les composantes d'une date/heure fonctionnent relativement au fuseau horaire du système.

On notera également que la représentation maximale d'un objet `Date` n'est pas la même que le plus grand entier représentable en JavaScript (`Number.MAX_SAFE_INTEGER` vaut 9,007,199,254,740,991). En effet, ECMA-262 définit un maximum de ±100 000 000 (cent millions) jours relatifs au premier janvier 1970 UTC (ce qui correspond au 20 avril 271 821 avant notre ètre d'une part et au 13 septembre 275 760 de notre ère) pouvant être représentés par un objet `Date` standard (soit un intervalle de ±8 640 000 000 000 000 millisecondes).

### Les formats de date et les conversions entre les fuseaux horaires

Il existe différentes méthodes pour obtenir une date sous différents formats ou effectuer une conversion entre différents fuseaux. On distingue notamment les fonctions qui manipulent les dates relativement au temps universal coordonné (UTC). Le temps local est celui utilisé par l'appareil de l'utilisateur.

Ainsi, on dispose de méthodes permettant d'obtenir ou de définir les différentes composantes d'une date selon le temps local (ex. {{jsxref("Date.getDay", "getDay()")}}, {{jsxref("Date.setHours", "setHours()")}}) et de méthodes équivalentes pour la manipulation en UTC (ex. {{jsxref("Date.getUTCDay()", "getUTCDay()")}} et {{jsxref("Date.setUTCHours", "setUTCHours()")}} respectivement).

## Constructeur

- {{jsxref("Date/Date", "Date()")}}
  - : Cette fonction permet de créer un nouvel objet `Date`.

## Méthodes statiques

- {{jsxref("Date.now()")}}
  - : Renvoie la valeur numérique correspondant au moment présent sous la forme du nombre de millisecondes écoulées depuis le premier janvier 1970 00:00:00 UTC (les secondes intercalaires (_leap seconds_) sont ignorées).
- {{jsxref("Date.parse()")}}

  - : Analyse la représentation textuelle d'une date et renvoie le nombre de millisecondes écoulées entre cette date et le premier janvier 1970, 00:00:00 UTC (les secondes intercalaires (_leap seconds_) sont ignorées).

    > **Note :** L'analyse de chaînes de caractères à l'aide de `Date.parse` est fortement déconseillée en raison des incohérences qui existent entre les navigateurs.

- {{jsxref("Date.UTC()")}}
  - : Accepte les mêmes paramètres que la forme longue du constructeur (c'est-à-dire entre 2 et 7) et renvoie le nombre de millisecondes entre cette date et le premier janvier 1970, 00:00:00 UTC (les secondes intercalaires (_leap seconds_) sont ignorées).

## Méthodes des instances

- {{jsxref("Date.prototype.getDate()")}}
  - : Renvoie le jour du mois (entre `1` et `31`) pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.getDay()")}}
  - : Renvoie le jour de la semaine (entre `0` et `6`) pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.getFullYear()")}}
  - : Renvoie l'année (sans chiffre implicite, `1999` sera renvoyé et pas `99` par exemple) pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.getHours()")}}
  - : Renvoie l'heure (entre `0` et `23`) pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.getMilliseconds()")}}
  - : Renvoie les millisecondes (entre `0` et `999`) pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.getMinutes()")}}
  - : Renvoie les minutes (entre `0` et `59`) pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.getMonth()")}}
  - : Renvoie le mois (entre `0` et `11`) pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.getSeconds()")}}
  - : Renvoie les secondes (entre `0` et `59`) pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.getTime()")}}
  - : Renvoie la valeur numérique de la date donnée, exprimée en nombre de millisecondes écoulées depuis le premier janvier 1970, 00:00:00 UTC (pour les temps antérieurs, ce sont des valeurs négatives qui seront renvoyées).
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : Renvoie le décalage horaire, exprimé en minutes, pour la locale courante.
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : Renvoie le jour du mois (entre `1` et `31`) pour la date donnée, selon le temps universel.
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : Renvoie le jour de la semaine (entre `0` et `6`) pour la date donnée, selon le temps universel.
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : Renvoie l'année (sans chiffre implicite, `1999` sera renvoyé plutôt que `99`) pour la date donnée, selon le temps universel.
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : Renvoie l'heure (entre `0` et `23`) pour la date donnée, selon le temps universel.
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : Renvoie les millisecondes (entre `0` et `999`) pour la date donnée, selon le temps universel.
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : Renvoie les minutes (entre `0` et `59`) pour la date donnée, selon le temps universel.
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : Renvoie le mois (entre `0` et `11`) pour la date donnée, selon le temps universel.
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : Renvoie les secondes (entre `0` et `59`) pour la date donnée, selon le temps universel.
- {{jsxref("Date.prototype.getYear()")}}
  - : Renvoie l'année (généralement exprimée sur 2 ou 3 chiffres) pour la date donnée selon le temps local. **On utilisera plutôt {{jsxref("Date.prototype.getFullYear()", "getFullYear()")}}**.
- {{jsxref("Date.prototype.setDate()")}}
  - : Définit le jour du mois pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.setFullYear()")}}
  - : Définit l'année (sans chiffre implicite, on utilisera `1999` et pas `99`) pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.setHours()")}}
  - : Définit les heures pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.setMilliseconds()")}}
  - : Définit les millisecondes pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.setMinutes()")}}
  - : Définit les minutes pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.setMonth()")}}
  - : Définit le mois pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.setSeconds()")}}
  - : Définit les secondes pour la date donnée, selon le temps local.
- {{jsxref("Date.prototype.setTime()")}}
  - : Définit le nombre de millisecondes écoulées depuis le premier janvier 1970, 00:00:00 UTC et la date donnée. On utilisera des nombres négatifs pour les moments antérieurs à cette date.
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : Définit le jour du mois pour la date donnée selon le temps universel.
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : Définit l'année (exprimée sans chiffres implicites, ex. `1999` et pas `99`) pour la date donnée selon le temps universel.
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : Définit l'heure pour la date donnée selon le temps universel.
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
  - : Définit les millisecondes pour la date donnée selon le temps universel.
- {{jsxref("Date.prototype.setUTCMinutes()")}}
  - : Définit les minutes pour la date donnée selon le temps universel.
- {{jsxref("Date.prototype.setUTCMonth()")}}
  - : Définit le mois pour la date donnée selon le temps universel.
- {{jsxref("Date.prototype.setUTCSeconds()")}}
  - : Définit les secondes pour la date donnée selon le temps universel.
- {{jsxref("Date.prototype.setYear()")}}
  - : Définit l'année (avec 2 à 3 chiffres) pour la date courante selon le temps local. **On privilégiera la méthode {{jsxref("Date.prototype.setFullYear()", "setFullYear()")}} à la place.**
- {{jsxref("Date.prototype.toDateString()")}}
  - : Renvoie la partie "date" (jour, mois, année) de l'objet {{jsxref("Date")}} en une chaîne de caractères compréhensible par un humain (anglophone) (ex. `'Thu Apr 12 2018'`).
- {{jsxref("Date.prototype.toISOString()")}}
  - : Convertit une date en une chaîne de caractères selon le format ISO 8601 Étendu.
- {{jsxref("Date.prototype.toJSON()")}}
  - : Renvoie une chaîne de caractères représentant l'objet {{jsxref("Date")}} avec {{jsxref("Date.prototype.toISOString()", "toISOString()")}}. Cette méthode est utilisée par {{jsxref("JSON.stringify()")}}.
- {{jsxref("Date.prototype.toGMTString()")}}
  - : Renvoie une chaîne de caractères représentant l'objet {{jsxref("Date")}} d'après le fuseau GMT (UTC). **On utilisera plutôt {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}}**.
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : Renvoie une chaîne de caractères représentant les jours / mois / années de la date courante avec une représentation propre à la locale courante (déduite des paramètres systèmes utilisés).
- {{jsxref("Date.prototype.toLocaleFormat()")}}
  - : Convertit la date courante en une chaîne de caractères avec un format décrit en paramètre via une chaîne de caractères.
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : Renvoie une chaîne de caractères représentant la date sous le forme de la locale courante. Cette méthode surcharge la méthode {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : Renvoie une chaîne de caractères représentant les heures / minutes / secondes de la date courante avec une représentation propre à la locale courante (déduite des paramètres systèmes utilisés).
- {{jsxref("Date.prototype.toString()")}}
  - : Renvoie une chaîne de caractères représentant l'objet {{jsxref("Date")}} courant. Cette méthode surcharge la méthode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Date.prototype.toTimeString()")}}
  - : Renvoie l'heure (avec les minutes et les secondes) d'une date sous la forme d'une chaîne de caractères compréhensible par un humain.
- {{jsxref("Date.prototype.toUTCString()")}}
  - : Convertit une date en chaîne de caractère en utilisant le temps universel comme référentiel.
- {{jsxref("Date.prototype.valueOf()")}}
  - : Renvoie la valeur primitive d'un objet {{jsxref("Date")}}. Cette méthode surcharge la méthode {{jsxref("Object.prototype.valueOf()")}}.

## Exemples

### Différentes façons de créer un objet `Date`

Les exemples qui suivent illustrent différentes méthodes permettant de créer des dates JavaScript :

> **Note :** L'analyse de chaîne de caractères représentant des dates avec le constructeur `Date`  (ou `Date.parse` qui est équivalent) est fortement déconseillée en raison des différences de comportement existant entre les navigateurs.

```js
let aujourdhui = new Date()
let anniversaire = new Date('September 22, 2018 15:00:00')
let anniversaire = new Date('2018-09-22T15:00:00')
let anniversaire = new Date(2018, 8, 22)            // the month is 0-indexed
let anniversaire = new Date(2018, 8, 22, 15, 0, 0)
```

### Les années sur deux chiffres correspondent à la période 1900 – 1999

Afin de créer et de manipuler des dates sur les années `0` à `99` de notre ère, on doit utiliser les méthodes {{jsxref("Date.prototype.setFullYear()")}} and {{jsxref("Date.prototype.getFullYear()")}}.

```js
let date = new Date(98, 1)  // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

// Méthode dépréciée, 98 correspond également ici à 1998
date.setYear(98)            // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

date.setFullYear(98)        // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)
```

### Calculer le temps écoulé

Dans les exemples suivants, on illustre comment calculer le temps écoulé entre deux dates JavaScript en millisecondes.

En raison de durées différentes pour les jours (heure d'été / heure d'hiver), les mois et les années, il faudra faire attention et étudier le sujet avant d'exprimer des durées en unités supérieures à des heures / minutes / secondes.

```js
// Utiliser des objets Date
let debut = Date.now()

// Ici, l'évènement dont on veut mesurer la durée :
faireQuelqueChosePendantLongtemps()
let fin = Date.now()
let duree = fin - debut // La durée écoulée, en millisecondes
```

```js
// En utilisant les méthodes natives
let debut = new Date()

// Ici, l'évènement dont on veut mesurer la durée :
faireQuelqueChosePendantLongtemps()
let fin = new Date()
let duree = fin.getTime() - debut.getTime() // La durée écoulée, en millisecondes
```

```js
// Pour tester le temps d'exécution d'une fonction
function afficheDureeEcoulee(fTest) {
  let debut = Date.now(),
      valRetour = fTest(),
      fin = Date.now()

  console.log(`Durée écoulée : ${ String(fin - debut) } millisecondes`)
  return valRetour
}

let valeurDeRetour = afficheDureeEcoulee(maFonctionATester)
```

> **Note :** Pour les navigateurs qui prennent en charge l'{{domxref("Window.performance", "API Web Performance", "", 1)}}, la méthode {{domxref("Performance.now()")}} peut fournir un outil de mesure des durées écoulées plus fiable et précis que {{jsxref("Date.now()")}}.

### Obtenir le nombre de secondes écoulées depuis l'epoch ECMAScript

```js
let secondes = Math.floor(Date.now() / 1000)
```

Dans ce cas, on renvoie un entier et c'est pour ça qu'on utilise {{jsxref("Math.floor()")}}. Par ailleurs, on n'utilise pas {{jsxref("Math.round()")}} afin d'avoir le nombre de secondes effectivement écoulées.

## Spécifications

| Spécification                                                        |
| -------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date-objects', 'Date')}} |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date", 3)}}

## Voir aussi

- Le constructeur {{jsxref("Date/Date", "Date()")}}
