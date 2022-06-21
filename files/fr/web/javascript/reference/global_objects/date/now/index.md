---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
tags:
  - Date
  - JavaScript
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Date/now
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/now
---
{{JSRef}}

La méthode **`Date.now()`** renvoie le nombre de millisecondes écoulées depuis le 1er Janvier 1970 00:00:00 UTC.

{{EmbedInteractiveExample("pages/js/date-now.html")}}

## Syntaxe

```js
var tempsEnMs = Date.now();
```

### Valeur de retour

Le nombre de millisecondes écoulées depuis le premier janvier 1970 à minuit UTC.

## Description

La méthode `now()` renvoie le nombre de millisecondes écoulées depuis le 1er janvier 1970 00:00:00 UTC sous forme d'un {{jsxref("Number")}} (nombre).

`now()` étant une méthode statique de {{jsxref("Date")}}, on utilisera toujours la forme `Date.now()`.

## Prothèse d'émulation (_polyfill_)

Cette méthode a été standardisée dans la 5e édition d'ECMA-262. Les moteurs JavaScript ne la supportant pas peuvent l'émuler de la façon suivante :

```js
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
```

## Précision temporelle réduite

Afin de protéger contre les attaques de minutage et d'identification, la précision de `new Date.now()` peut être arrondie en fonction des paramètres du navigateur. Pour Firefox, la préférence `privacy.reduceTimerPrecision` est activée par défaut et vaut, par défaut 20ms pour Firefox 59 et 2ms pour Firefox 60.

```js
// Précision temporelle réduite (2ms) pour Firefox 60
new Date().getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// ...


// précision temporelle avec `privacy.resistFingerprinting` activé
new Date().getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

Pour Firefox, il est également possible d'activer `privacy.resistFingerprinting` auquel cas la précision sera 100ms ou la valeur de `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` selon laquelle est plus grande.

## Spécifications

| Spécification                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.9.4.4', 'Date.now')}} | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.5. |
| {{SpecName('ES6', '#sec-date.now', 'Date.now')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.now', 'Date.now')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.now")}}

## Voir aussi

- {{domxref("window.performance.now")}} - renvoie des timestamps (horodatages) avec une précision supérieure à la milliseconde pour mesurer la performance des pages web.
- {{domxref("console.time")}} / {{domxref("console.timeEnd")}}
