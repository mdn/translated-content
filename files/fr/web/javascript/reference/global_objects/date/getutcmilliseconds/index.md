---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getUTCMilliseconds
---
{{JSRef}}

La méthode **`getUTCMilliseconds()`** renvoie les millièmes de secondes pour la date renseignée selon UTC.

{{EmbedInteractiveExample("pages/js/date-getutcmilliseconds.html")}}

## Syntaxe

    dateObj.getUTCMilliseconds()

### Valeur de retour

Un entier entre 0 et 999 correspondant au nombre de millisecondes pour la date indiquée, selon le temps universel.

> **Note :** Le résultat de cette méthode n'est pas le temps "Epoch". Si on veut obtenir le nombre de millisecondes depuis le premier janvier 1970, on utilisera la méthode {{jsxref("Date.prototype.getTime()")}}.

## Exemples

### Utiliser `getUTCMilliseconds()`

L'exemple suivant assigne les millièmes de secondes pour la date actuelle à la variable `ms`.

```js
var aujourdhui = new Date();
var ms = aujourdhui.getUTCMilliseconds();
```

## Spécifications

| Spécification                                                                                                                            | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                                 | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.25', 'Date.prototype.getUTCMilliseconds')}}                                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcmilliseconds', 'Date.prototype.getUTCMilliseconds')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcmilliseconds', 'Date.prototype.getUTCMilliseconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getUTCMilliseconds")}}

## Voir aussi

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
