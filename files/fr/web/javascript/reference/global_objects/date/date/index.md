---
title: Constructeur Date()
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
translation-of: Web/JavaScript/Reference/Global_Objects/Date/Date
browser-compat: javascript.builtins.Date.Date
---
{{JSRef}}

Crée une instance d'un objet JavaScript **`Date`** qui représente un instant donné de façon indépendante de la plateforme. Les objets `Date` contiennent un nombre (`Number`) qui représente le nombre de millisecondes écoulées depuis le premier janvier 1970 (UTC).

{{EmbedInteractiveExample("pages/js/date-constructor.html")}}

## Syntaxe

```js
new Date()
new Date(value)
new Date(dateString)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

> **Note :** La seule façon correcte d'instancier un nouvel objet `Date` est d'utiliser l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Si vous invoquez ce constructeur directement (`now = Date()` par exemple), la valeur renvoyée sera une chaîne de caractères plutôt qu'un objet `Date`.

### Paramètres

Il existe quatre formes basiques pour utiliser le constructeur `Date()`&nbsp;:

1.  #### Sans paramètre

    Lorsqu'aucun paramètre n'est fourni, le nouvel objet `Date` ainsi créé représente la date et heure courante du moment de l'instanciation.

2.  #### Une valeur temporelle ou un horodatage numérique

    - `value`
      - : Une valeur entière qui représente le nombre de millisecondes depuis le premier janvier 1970 00:00:00 UTC (l'epoch ECMAScript est équivalente à l'epoch UNIX) et pour laquelle les secondes intercalaires sont ignorées. On gardera à l'esprit que la plupart des [fonctions d'horodatage UNIX](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16) sont précises à la seconde la plus proche.

3.  #### Chaîne d'horodatage

    - `dateString`
      - : Une chaîne de caractères qui représente une date, selon le format reconnu par la méthode [`Date.parse()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) qui sont [conformes à la RFC 2822 IETF sur les horodatages](https://datatracker.ietf.org/doc/html/rfc2822#page-14) ou selon [le format ISO8601](https://www.ecma-international.org/ecma-262/11.0/#sec-date.parse).)
        > **Note :** Analyser des chaînes de caractères représentant des dates en utilisant le constructeur `Date` (ou `Date.parse()`, qui fonctionne de la même façon) est _fortement déconseillé_ en raison des différences et incohérences entre les différents navigateurs.
        >
        > - La prise en charge des chaînes de caractères de format [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822) repose uniquement sur une convention.
        > - La prise en charge des formats ISO 8601 diffère en ce que les chaînes décrivant uniquement des dates (ex. `"1970-01-01"`) sont considérées comme UTC et pas comme locales.

4.  #### Valeurs pour les composantes individuelles de la date et de l'heure

    Soient au moins une année et un mois, cette forme de `Date()` renvoie un objet `Date` dont les valeurs des composantes (année, mois, jour, heure, minute, seconde, et milliseconde) proviennent des paramètres suivants. Chaque champ manquant prendra la valeur la plus basse possible (soit `1` pour le paramètre `day` et `0` pour les autres). Les valeurs des paramètres sont évaluées selon le fuseau horaire local et pas UTC.

    - `year`

      - : Une valeur entière représentant l'année.

        Les valeurs de `0` à `99` correspondent aux années `1900` à `1999`. Les autres valeurs correspondent aux années avec cette valeur. Voir [l'exemple](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#les_années_sur_deux_chiffres_correspondent_à_la_période_1900_–_1999).

    - `monthIndex`
      - : Une valeur entière représentant le mois, en commençant à `0` pour janvier, jusqu'à `11` pour décembre. Si une valeur supérieure à `11` est utilisée, les mois supplémentaires sont ajoutés à la date. Ainsi, `new Date(1990, 12, 1)` renverra une date représentant le premier janvier 1991.
    - `day` {{optional_inline}}
      - : Une valeur entière pour le jour du mois. La valeur par défaut est `1`.
    - `hours` {{optional_inline}}
      - : Une valeur entière entre `0` et `23`, représentant l'heure du jour. La valeur par défaut est `0`.
    - `minutes` {{optional_inline}}
      - : Une valeur entière représentant le nombre de minutes écoulées dans l'heure. La valeur par défaut est `0`.
    - `seconds` {{optional_inline}}
      - : Une valeur entière représentant le nombre de secondes écoulées dans la minute. La valeur par défaut est `0`.
    - `milliseconds` {{optional_inline}}
      - : Une valeur entière représentant le nombre de millisecondes écoulées dans la seconde. La valeur par défaut est `0`.

### Valeur de retour

Invoquer `new Date()` (le constructeur `Date()`) renvoie un objet [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date). Si le constructeur est appelé avec une chaîne de caractères invalide pour une date, il renvoie un objet `Date` dont la méthode [`toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toString) renverra la valeur littérale `Invalid Date`.

Invoquer la fonction `Date()` (sans le mot-clé `new`) renvoie une représentation en chaîne de caractères de la date et heure courante, de la même façon que `new Date().toString()`. Tout argument passé à la fonction `Date()` utilisée sans le mot-clé `new` sera ignoré, quelle que soit la valeur (invalide ou non) : sous cette forme, la valeur renvoyée sera toujours une représentation en chaîne de caractères de la date et de l'heure courante.

## Exemples

### Plusieurs façons de créer un objet Date

Les exemples qui suivent illustrent différentes façons de créer des dates JavaScript :

> **Note :** L'analyse de chaîne de caractères représentant des dates avec le constructeur `Date` (ou `Date.parse` qui est équivalent à cet égard) est fortement déconseillée en raison des différences et incohérences entre les navigateurs.

```js
let today = new Date()
let birthday = new Date('December 17, 1995 13:24:00')
let birthday = new Date('1995-12-17T13:24:00')
let birthday = new Date(1995, 11, 17)            // les mois sont numérotés à partir de 0
let birthday = new Date(1995, 11, 17, 13, 24, 0)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
