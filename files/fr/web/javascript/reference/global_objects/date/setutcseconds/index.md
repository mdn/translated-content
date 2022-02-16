---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setUTCSeconds
---
{{JSRef}}

La méthode **`setUTCSeconds()`** définit les secondes pour la date, selon UTC.

{{EmbedInteractiveExample("pages/js/date-setutcseconds.html")}}

## Syntaxe

    dateObj.setUTCSeconds(valeurSecondes[, valeurMs])

### Paramètres

- `valeurSecondes`
  - : Un entier entre 0 et 59.
- `valeurMs`
  - : Paramètre optionnel, un nombre entre 0 et 999, représentant les millièmes de secondes.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si le paramètre `valeurMs` n'est pas utilisée, la valeur renvoyée par la méthode {{jsxref("Date.prototype.getUTCMilliseconds", "getUTCMilliseconds()")}} sera utilisée.

Si un paramètre renseigné est en dehors de l'intervalle attendu, `setUTCSeconds()` tentera de mettre à jour la date en conséquence. Par exemple, si on utilise 100 pour `valeurSecondes`, les minutes de la date seront incrémentées de 1, et 40 sera utilisé pour les secondes.

## Exemples

### Utiliser `setUTCSeconds()`

```js
var leGrandJour = new Date();
leGrandJour.setUTCSeconds(20);
```

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.31', 'Date.prototype.setUTCSeconds')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutcseconds', 'Date.prototype.setUTCSeconds')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcseconds', 'Date.prototype.setUTCSeconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.setUTCSeconds")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
