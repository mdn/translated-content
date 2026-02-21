---
title: Constructeur Date()
short-title: Date()
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`Date()`** crée des objets {{JSxRef("Date")}}. Lorsqu'il est appelé en tant que fonction, il retourne une chaîne de caractères représentant l'heure courante.

{{InteractiveExample("Démonstration JavaScript&nbsp;: constructeur Date()")}}

```js interactive-example
const date1 = new Date("December 17, 1995 03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date("1995-12-17T03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// Résultat attendu : false

console.log(date1 - date2);
// Résultat attendu : 0
```

## Syntaxe

```js-nolint
new Date()
new Date(value)
new Date(dateString)
new Date(dateObject)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

Date()
```

> [!NOTE]
> `Date()` peut être appelé avec ou sans [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new), mais avec des effets différents. Voir [Valeur de retour](#valeur_de_retour).

### Paramètres

Il existe cinq formes basiques pour utiliser le constructeur `Date()`&nbsp;:

#### Sans paramètre

Lorsqu'aucun paramètre n'est fourni, le nouvel objet `Date` ainsi créé représente la date et heure courante du moment de l'instanciation.

#### Une valeur temporelle ou un horodatage numérique

- `value`
  - : Une valeur entière représentant le [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) (le nombre de millisecondes écoulées depuis minuit au début du 1er janvier 1970, UTC — c'est‑à‑dire [l'epoch](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide)).

#### Chaîne d'horodatage

- `dateString`
  - : Une chaîne de caractères représentant une date, analysée et interprétée selon le même algorithme que celui implémenté par {{JSxRef("Date.parse()")}}. Voir [format de chaîne de caractères date-heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#format_de_chaîne_date-heure) pour les mises en garde concernant l'utilisation de différents formats.

#### Objet Date

- `dateObject`
  - : Un objet `Date` existant. Cela crée effectivement une copie de l'objet `Date` existant avec la même date et la même heure. Cela équivaut à `new Date(dateObject.valueOf())`, sauf que la méthode `valueOf()` n'est pas appelée.

Lorsqu'un paramètre est passé au constructeur `Date()`, les instances de `Date` sont traitées de manière spécifique. Toutes les autres valeurs sont [converties en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contraintes_des_primitives). Si le résultat est une chaîne de caractères, elle sera analysée comme une chaîne de caractères de date. Sinon, la primitive résultante est convertie en nombre et traitée comme un timestamp.

#### Valeurs pour les composantes individuelles de la date et de l'heure

Soient au moins une année et un mois, cette forme de `Date()` renvoie un objet `Date` dont les valeurs des composantes (année, mois, jour, heure, minute, seconde, et milliseconde) proviennent des paramètres suivants. Chaque champ manquant prendra la valeur la plus basse possible (soit `1` pour le paramètre `day` et `0` pour les autres). Les valeurs des paramètres sont évaluées selon le fuseau horaire local et pas UTC. {{JSxRef("Date.UTC()")}} accepte des paramètres similaires mais interprète les composantes comme UTC et retourne un timestamp.

Si un paramètre dépasse ses bornes définies, il est «&nbsp;reporté&nbsp;». Par exemple, si un `monthIndex` supérieur à `11` est passé, ces mois supplémentaires feront augmenter l'année&nbsp;; si un `minutes` supérieur à `59` est passé, les `hours` augmenteront en conséquence, etc. Ainsi, `new Date(1990, 12, 1)` retournera le 1er janvier 1991&nbsp;; `new Date(2020, 5, 19, 25, 65)` retournera 2:05 le 20 juin 2020.

De même, si un paramètre est inférieur à sa borne minimale, il «&nbsp;emprunte&nbsp;» à la position supérieure. Par exemple, `new Date(2020, 5, 0)` retournera le 31 mai 2020.

- `year`
  - : Une valeur entière représentant l'année. Les valeurs de `0` à `99` correspondent aux années `1900` à `1999`. Les autres valeurs correspondent à l'année indiquée. Voir [l'exemple](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#interprétation_des_années_sur_deux_chiffres).
- `monthIndex`
  - : Une valeur entière représentant le mois, en commençant à `0` pour janvier, jusqu'à `11` pour décembre.
- `day` {{Optional_Inline}}
  - : Une valeur entière pour le jour du mois. La valeur par défaut est `1`.
- `hours` {{Optional_Inline}}
  - : Une valeur entière entre `0` et `23` représentant l'heure du jour. La valeur par défaut est `0`.
- `minutes` {{Optional_Inline}}
  - : Une valeur entière représentant le nombre de minutes dans l'heure. La valeur par défaut est `0`.
- `seconds` {{Optional_Inline}}
  - : Une valeur entière représentant le nombre de secondes dans la minute. La valeur par défaut est `0`.
- `milliseconds` {{Optional_Inline}}
  - : Une valeur entière représentant le nombre de millisecondes dans la seconde. La valeur par défaut est `0`.

### Valeur de retour

Appeler `new Date()` (le constructeur `Date()`) retourne un objet [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date). Si on l'appelle avec une chaîne de caractères invalide pour une date, ou si la date à construire a un timestamp inférieur à `-8,640,000,000,000,000` ou supérieur à `8,640,000,000,000,000` millisecondes, il retourne une [date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) (un objet `Date` dont la méthode {{JSxRef("Date/toString", "toString()")}} retourne `"Invalid Date"` et la méthode {{JSxRef("Date/valueOf", "valueOf()")}} retourne `NaN`).

Appeler la fonction `Date()` (sans le mot-clé `new`) retourne une représentation en chaîne de caractères de la date et de l'heure courante, exactement comme le fait `new Date().toString()`. Tout argument passé à un appel de fonction `Date()` (sans le mot-clé `new`) est ignoré&nbsp;; que ce soit une chaîne de caractères invalide pour une date — ou même n'importe quel objet ou autre primitive comme argument — cela retournera toujours une représentation en chaîne de caractères de la date et de l'heure courante.

## Description

### Précision temporelle réduite

Pour offrir une protection contre les attaques par mesure de temps et le {{Glossary("Fingerprinting", "profilage d'empreinte")}}, la précision de `new Date()` peut être arrondie selon les paramètres du navigateur. Dans Firefox, la préférence `privacy.reduceTimerPrecision` est activée par défaut et la valeur par défaut est 2 ms. Vous pouvez aussi activer `privacy.resistFingerprinting`, auquel cas la précision sera de 100 ms ou la valeur de `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, selon la plus grande des deux.

Par exemple, avec une précision temporelle réduite, le résultat de `new Date().getTime()` sera toujours un multiple de 2, ou un multiple de 100 (ou de `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) si `privacy.resistFingerprinting` est activé.

```js
// précision temporelle réduite (2 ms) dans Firefox 60
new Date().getTime();
// Peut être :
// 1519211809934
// 1519211810362
// 1519211811670
// …

// précision temporelle réduite avec `privacy.resistFingerprinting` activé
new Date().getTime();
// Peut être :
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Exemples

### Plusieurs façons de créer un objet Date

Les exemples qui suivent illustrent différentes façons de créer des dates JavaScript&nbsp;:

```js
const aujourdhui = new Date();
const anniversaire = new Date("September 22, 2018 15:00:00"); // DÉCONSEILLÉ : peut ne pas fonctionner dans tous les environnements
const anniversaire2 = new Date("2018-09-22T15:00:00"); // Ceci est standardisé et fonctionnera de manière fiable
const anniversaire3 = new Date(2018, 8, 22); // le mois est indexé à partir de 0
const anniversaire4 = new Date(2018, 8, 22, 15, 0, 0);
const anniversaire5 = new Date(628021800000); // en utilisant un timestamp epoch
```

### Passage d'une valeur qui n'est ni une Date, ni une chaîne de caractères, ni un nombre

Si le constructeur `Date()` est appelé avec un paramètre qui n'est pas une instance de `Date`, il sera converti en primitive puis vérifié pour savoir s'il s'agit d'une chaîne de caractères. Par exemple, `new Date(undefined)` est différent de `new Date()`&nbsp;:

```js
console.log(new Date(undefined)); // Invalid Date
```

Cela s'explique par le fait que `undefined` est déjà une primitive mais pas une chaîne de caractères, il sera donc converti en nombre, ce qui donne [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) et donc pas un timestamp valide. À l'inverse, `null` sera converti en `0`.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[Arrays](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) would be coerced to a string via [`Array.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/toString), which joins the elements with commas. However, the resulting string for any array with more than one element is not a valid ISO 8601 date string, so its parsing behavior would be implementation-defined. **Do not pass arrays to the `Date()` constructor.**

```js
console.log(new Date(["2020-06-19", "17:13"]));
// 2020-06-19T17:13:00.000Z dans Chrome, puisque "2020-06-19,17:13" est reconnu
// "Invalid Date" dans Firefox
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Date")}}
