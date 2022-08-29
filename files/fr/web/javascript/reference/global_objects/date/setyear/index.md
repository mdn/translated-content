---
title: Date.prototype.setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
tags:
  - Date
  - Déprécié
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setYear
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setYear
---
{{JSRef}} {{deprecated_header}}

La méthode **`setYear()`** définit l'année pour pour la date, selon l'heure locale. `setYear()` ne définissant pas des années complêtes ( « bug de l'an 2000 » ), elle n'est plus utilisée et a été remplacée par la méthode {{jsxref("Date.prototype.setFullYear", "setFullYear")}}.

## Syntaxe

```js
dateObj.setYear(valeurAnnée)
```

### Paramètres

- `valeurAnnée`
  - : Un entier.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si `valeurAnnée` est un nombre entre 0 et 99 (inclus), alors l'année de `dateObj` sera définie à 1900 + `valeurAnnée`. Sinon, l'année de `dateObj` sera définie à `valeurAnnée`.

## Exemples

### Utiliser `setYear()`

Les deux premières instructions définissent l'année 1996. La troisième définit l'année 2000.

```js
var leGrandJour = new Date();

leGrandJour.setYear(96);
leGrandJour.setYear(1996);
leGrandJour.setYear(2000);
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                                                                |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0.                                       |
| {{SpecName('ES5.1', '#sec-B.2.5', 'Date.prototype.setYear')}}                             | {{Spec2('ES5.1')}}     | Définie dans l'annexe informative sur la compatibilité.                                     |
| {{SpecName('ES6', '#sec-date.prototype.setyear', 'Date.prototype.setYear')}}         | {{Spec2('ES6')}}         | Définie dans l'annexe normative sur les fonctionnalités additionnelles des navigateurs web. |
| {{SpecName('ESDraft', '#sec-date.prototype.setyear', 'Date.prototype.setYear')}} | {{Spec2('ESDraft')}} | Définie dans l'annexe normative sur les fonctionnalités additionnelles des navigateurs web. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.setYear")}}

## Voir aussi

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
