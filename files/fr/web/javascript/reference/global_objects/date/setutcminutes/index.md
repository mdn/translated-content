---
title: Date.prototype.setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setUTCMinutes
---
{{JSRef}}

La méthode **`setUTCMinutes()`** définit les minutes pour la date, selon UTC.

{{EmbedInteractiveExample("pages/js/date-setutcminutes.html")}}

## Syntaxe

    dateObj.setUTCMinutes(valeurMinutes[, valeurSecondes[, valeurMs]])

### Paramètres

- `valeurMinutes`
  - : Un entier entre 0 et 59, représentant les minutes.
- `valeurSecondes`
  - : Paramètre optionnel, un entier entre 0 et 59, représentant les secondes. Si ce paramètre est utilisé, il faut également utiliser `valeurMinutes`.
- `valeurMs`
  - : Paramètre optionnel, un nombre entre 0 et 999, représentant les millièmes de secondes. Si ce paramètre est utilisé, il faut aussi indiquer `valeurMinutes` et `valeurSecondes`.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si les paramètres `valeurSecondes` et `valeurMs` ne sont pas utilisés, les valeurs renvoyées par les méthodes {{jsxref("Date.prototype.getUTCSeconds", "getUTCSeconds()")}} et {{jsxref("Date.prototype.getUTCMilliseconds", "getUTCMilliseconds()")}} seront utilisées.

Si un paramètre est en dehors des limites attendues, `setUTCMinutes()` tentera de mettre à jour la date en conséquence. Par exemple, si on utilise 100 pour `valeurSecondes`, les minutes (`valeurMinutes`) seront incrémentées de 1 (`valeurMinutes` + 1), et 40 sera utilisé pour les secondes.

## Exemples

### Utiliser `setUTCMinutes()`

```js
var leGrandJour = new Date();
leGrandJour.setUTCMinutes(43);
```

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.33', 'Date.prototype.setUTCMinutes')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutcminutes', 'Date.prototype.setUTCMinutes')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcminutes', 'Date.prototype.setUTCMinutes')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.setUTCMinutes")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
