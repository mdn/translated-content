---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toUTCString
---
{{JSRef}}

La méthode **`toUTCString()`** convertit une date en une chaîne de caractères, selon le fuseau horaire UTC.

{{EmbedInteractiveExample("pages/js/date-toutcstring.html")}}

## Syntaxe

    dateObj.toUTCString()

### Valeur de retour

Une chaîne de caractères représentant la date indiquée selon le fuseau horaire UTC.

## Description

La valeur renvoyée par `toUTCString()` est un texte au même format que celui renvoyé {{jsxref("Date.prototype.toString()")}} mais sans décalage de fuseau horaire (en UTC).

Avant ECMAScript 2018, le format de la valeur renvoyée pouvait varier selon les plateformes. La valeur la plus couramment renvoyée était une date formatée selon la RFC 1123, qui est une version mise à jour de la RFC 822.

## Exemples

### Utiliser `toUTCString()`

```js
var aujourdhui = new Date();
var UTCstring = aujourdhui.toUTCString();
// Mon, 03 Jul 2006 21:44:38 GMT
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                                                                |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. Le format dépend de l'implémentation. |
| {{SpecName('ES5.1', '#sec-15.9.5.42', 'Date.prototype.toUTCString')}}                         | {{Spec2('ES5.1')}}     |                                                                                             |
| {{SpecName('ES6', '#sec-date.prototype.toutcstring', 'Date.prototype.toUTCString')}}     | {{Spec2('ES6')}}         |                                                                                             |
| {{SpecName('ES2018', '#sec-date.prototype.toutcstring', 'Date.prototype.toUTCString')}} | {{Spec2('ES2018')}}     | Première standardisation du format                                                          |
| {{SpecName('ESDraft', '#sec-date.prototype.toutcstring', 'Date.prototype.toUTCString')}} | {{Spec2('ESDraft')}} |                                                                                             |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.toUTCString")}}

## Voir aussi

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
