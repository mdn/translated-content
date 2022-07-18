---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toString
---
{{JSRef}}

La méthode **`toString()`** renvoie une chaîne de caractères représentant l'objet {{jsxref("Date")}}.

{{EmbedInteractiveExample("pages/js/date-tostring.html")}}

## Syntaxe

```js
dateObj.toString()
```

### Valeur de retour

Une chaîne de caractères représentant la date indiquée.

## Description

L'objet {{jsxref("Date")}} remplace la méthode `toString()` de l'objet {{jsxref("Object")}} ; il n'hérite pas de {{jsxref("Object.prototype.toString()")}}. Pour les objets {{jsxref("Date")}}, la méthode `toString()` renvoie une représentation textuelle de l'objet.

La méthode `toString()` renvoie toujours une chaîne de caractères représentant une date en anglais américain. Ce format a été standardisé avec ES2018 et peut être décrit de la façon suivante :

- Le jour de la semaine avec les trois premières lettres du jour en anglais (ex. « Sat »)
- Un espace
- Le mois avec les trois premières lettres du mois en anglais (ex. « Sep »)
- Un espace
- La date du jour dans le mois sur deux chiffres (ex. « 01 »)
- Un espace
- L'année sur 4 chiffres (ex. « 2018 »)
- Un espace
- L'heure sur deux chiffres (ex. « 14 »)
- Un deux-points (:)
- Les minutes sur deux chiffres (ex. « 53 »)
- Un deux-points (:)
- Les secondes sur deux chiffres (ex. « 26 »)
- Un espace
- La chaîne de caractères « GMT »
- Le signe du décalage horaire par rapport à GMT :

  - La chaîne "+" pour les décalages positifs (0 ou plus)
  - La chaîne "-" pour les décalages strictement négatifs

- L'heure de décalage sur deux chiffres
- Les minutes de décalage sur deux chiffres
- Et, éventuellement, le nom du fuseau horaire avec

  - Un espace
  - Une parenthèse ouvrante (« ( »)
  - Une chaîne de caractères, pouvant varier selon l'implémentation, qui désigne le fuseau horaire. Ce peut être une abréviation ou un nom complet.
  - Une parenthèse fermante (« ) »)

Avant ES2018, le format de la chaîne de caractères renvoyé pouvait varier selon l'implémentation.

JavaScript appelle la méthode `toString()` automatiquement quand une date doit être representée sous forme d'un texte ou quand une date est référencée lors d'une concatenation de chaînes de caractères.

`toString()` est une méthode générique. Si `this` n'est pas une instance de {{jsxref("Date")}}, elle renverra "Invalid Date".

## Exemples

### Utiliser `toString()`

L'exemple suivant assigne la valeur de `toString()` de l'objet `Date` à `maVar` :

```js
var x = new Date();
var maVar = x.toString(); // assigne une valeur à maVar similaire à :
// Mon Sep 28 1998 14:36:22 GMT-0700 (PDT)
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                                      |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0.             |
| {{SpecName('ES5.1', '#sec-15.9.5.2', 'Date.prototype.toLocaleTimeString')}}         | {{Spec2('ES5.1')}}     |                                                                   |
| {{SpecName('ES6', '#sec-date.prototype.tostring', 'Date.prototype.toString')}}     | {{Spec2('ES6')}}         |                                                                   |
| {{SpecName('ES2018', '#sec-date.prototype.tostring', 'Date.prototype.toString')}} | {{Spec2('ES2018')}}     | Standardisation du format produit par `Date.prototype.toString()` |
| {{SpecName('ESDraft', '#sec-date.prototype.tostring', 'Date.prototype.toString')}} | {{Spec2('ESDraft')}} |                                                                   |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.toString")}}

## Voir aussi

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
