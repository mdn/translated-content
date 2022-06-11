---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setMilliseconds
---
{{JSRef}}

La méthode **`setMilliseconds()`** définit les millièmes de secondes pour la date, selon l'heure locale.

{{EmbedInteractiveExample("pages/js/date-setmilliseconds.html")}}

## Syntaxe

```js
dateObj.setMilliseconds(valeurMs)
```

### Paramètres

- `valeurMs`
  - : Un entier entre 0 et 999, représentant les millièmes de secondes.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si vous indiquez un nombre en dehors des limites attendues, la date sera mise à jour en conséquence. Par exemple, si vous indiquez 1005, le nombre des secondes sera incrémenté de 1, et 5 sera utilisé pour les millièmes de secondes.

## Exemples

### Utiliser `setMilliseconds()`

```js
var leGrandJour = new Date();
leGrandJour.setMilliseconds(100);
```

## Spécifications

| Spécification                                                                                                                    | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                         | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.28', 'Date.prototype.setMilliseconds')}}                                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setmilliseconds', 'Date.prototype.setMilliseconds')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setmilliseconds', 'Date.prototype.setMilliseconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.setMilliseconds")}}

## Voir aussi

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
