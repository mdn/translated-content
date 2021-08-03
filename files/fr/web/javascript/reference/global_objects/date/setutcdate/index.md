---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setUTCDate
---
{{JSRef}}

La méthode **`setUTCDate()`** définit le jour du mois pour la date, selon UTC.

{{EmbedInteractiveExample("pages/js/date-setutcdate.html")}}

## Syntaxe

    dateObj.setUTCDate(valeurJour)

### Paramètres

- `valeurJour`
  - : Un entier de 1 à 31, représentant un jour dans le mois.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si le paramètre renseigné est en dehors des limites attendues, `setUTCDate()` tentera de mettre à jour la date en conséquence. Par exemple, si on utilise la valeur 40 pour `valeurJour`, et que le mois de la date est juin, le jour sera changé en 10 et le mois passera à juillet.

## Exemples

### Utiliser `setUTCDate()`

```js
var leGrandJour = new Date();
leGrandJour.setUTCDate(20);
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.37', 'Date.prototype.setUTCDate')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutcdate', 'Date.prototype.setUTCDate')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcdate', 'Date.prototype.setUTCDate')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.setUTCDate")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
