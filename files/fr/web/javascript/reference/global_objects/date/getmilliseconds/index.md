---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getMilliseconds
---
{{JSRef}}

La méthode **`getMilliseconds()`** renvoie les millièmes de secondes de la date renseignée d'après l'heure locale.

{{EmbedInteractiveExample("pages/js/date-getmilliseconds.html")}}

## Syntaxe

```js
dateObj.getMilliseconds()
```

### Valeur de retour

Un nombre entre 0 et 999 indiquant le nombre de millisecondes pour la date indiquée, selon l'heure locale.

## Exemples

### Utiliser `getMilliseconds()`

L'exemple suivant assigne la partie des millièmes de secondes de l'heure courante à la variable `ms`.

```js
var aujd = new Date();
var ms = aujd.getMilliseconds();
```

## Spécifications

| Spécification                                                                                                                    | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                         | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.24', 'Date.prototype.getMilliseconds')}}                                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getmilliseconds', 'Date.prototype.getMilliseconds')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getmilliseconds', 'Date.prototype.getMilliseconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getMilliseconds")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
