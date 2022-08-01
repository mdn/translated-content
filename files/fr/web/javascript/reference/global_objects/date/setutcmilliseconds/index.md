---
title: Date.prototype.setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setUTCMilliseconds
---
{{JSRef}}

La méthode **`setUTCMilliseconds()`** définit les millièmes de secondes pour la date, selon UTC.

{{EmbedInteractiveExample("pages/js/date-setutcmilliseconds.html")}}

## Syntaxe

```js
dateObj.setUTCMilliseconds(valeurMs)
```

### Paramètres

- `valeurMs`
  - : Un entier entre 0 et 999, représentant les millièmes de secondes.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si le paramètre indiqué est en dehors des limites attendues, la date sera mise à jour en conséquence. Par exemple, si on utilise la valeur 1005, le nombre des secondes sera incrémenté de 1, et 5 sera utilisé pour les millièmes de secondes.

## Exemples

### Utiliser `setUTCMilliseconds()`

```js
var leGrandJour = new Date();
leGrandJour.setUTCMilliseconds(500);
```

## Spécifications

| Spécification                                                                                                                            | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                                 | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.29', 'Date.prototype.setUTCMilliseconds')}}                                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutcmilliseconds', 'Date.prototype.setUTCMilliseconds')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcmilliseconds', 'Date.prototype.setUTCMilliseconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.setUTCMilliseconds")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
