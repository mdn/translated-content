---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toISOString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toISOString
---
{{JSRef}}

La méthode **`toISOString()`** renvoie une chaîne de caractères au format ISO ([ISO 8601 Extended Format](http://en.wikipedia.org/wiki/ISO_8601)), qui peut être décrite de cette façon : **`YYYY-MM-DDTHH:mm:ss.sssZ`** (toujours longue de 24 caractères) ou de cette façon **`±YYYYYY-MM-DDTHH:mm:ss.sssZ`** (27 caractères). Le fuseau horaire est toujours UTC, comme l'indique le suffixe « Z » (pour zéro décalage avec UTC).

{{EmbedInteractiveExample("pages/js/date-toisostring.html")}}

## Syntaxe

```js
dateObj.toISOString()
```

### Valeur de retour

Une chaîne de caractères représentant la date indiquée au format [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601) selon le temps universel.

## Exemples

### Utiliser `toISOString()`

```js
var aujourdhui = new Date("05 October 2011 14:48 UTC");

console.log(aujourdhui.toISOString()); // Renvoie "2011-10-05T14:48:00.000Z"
```

L'exemple ci-dessus analyse une chaîne de caractères non-standard, qui peut donc être incorrectement intérprété par des navigateurs n'utilisant pas Gecko.

## Prothèse d'émulation (_polyfill_)

Cette méthode fut standardisée avec la cinquième édition d'ECMAScript. Afin d'utiliser cette méthode avec les moteurs qui n'en disposent pas nativement, on pourra utiliser ce fragment de code :

```js
if ( !Date.prototype.toISOString ) {
  ( function() {

    function pad(number) {
      if ( number < 10 ) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear() +
        '-' + pad( this.getUTCMonth() + 1 ) +
        '-' + pad( this.getUTCDate() ) +
        'T' + pad( this.getUTCHours() ) +
        ':' + pad( this.getUTCMinutes() ) +
        ':' + pad( this.getUTCSeconds() ) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    };

  }() );
}
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.9.5.43', 'Date.prototype.toISOString')}}                         | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.8. |
| {{SpecName('ES6', '#sec-date.prototype.toisostring', 'Date.prototype.toISOString')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.toisostring', 'Date.prototype.toISOString')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.toISOString")}}

## Voir aussi

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
