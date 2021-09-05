---
title: Date.prototype.getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
tags:
  - Date
  - Déprécié
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getYear
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getYear
---
{{JSRef}} {{Deprecated_header}}

La méthode **`getYear()`** renvoie l'année de la date renseignée, d'après l'heure locale. Parce que `getYear()` ne renvoie pas l'année complète (« bug de l'an 2000 »), cette méthode n'est plus utilisée et doit être remplacée par {{jsxref("Date.getFullYear", "getFullYear")}}.

## Syntaxe

    dateObj.getYear()

### Valeur de retour

Un nombre représentant l'année de la date indiquée, selon l'heure locale, auquel on a soustrait 1900.

## Description

La méthode `getYear()` renvoie l'année moins 1900 ; par conséquent :

- Pour les années supérieures ou égales à 2000, la valeur renvoyée par `getYear()` est supérieure ou égale à 100. Par exemple, si l'année est 2026, `getYear()` renvoie 126.
- Pour les années entre 1900 et 1999 incluses, la valeur renvoyée par `getYear()` est comprise entre 0 et 99. Par exemple, si l'année est 1976, `getYear()` renvoie 76.
- Pour les années inférieures à 1900, la valeur renvoyée par `getYear()` est négative. Par exemple, si l'année est 1800, `getYear()` renvoie -100.

Pour prendre en compte les années avant et après 2000, il vaut mieux utiliser {{jsxref("Date.getFullYear", "getFullYear()")}} au lieu de `getYear` afin que l'année soit spécifiée en entier.

## Rétrocompatibilité

### Comportement dans JavaScript 1.2 et versions antérieures

La méthode `getYear()` renvoyait soit une année en deux chiffres, soit une année en quatre chiffres :

- Pour les années entre 1900 et 1999 incluses, la valeur renvoyée par `getYear()` était l'année moins 1900. Par exemple, si l'année était 1976, la valeur renvoyée était 76.
- Pour les années inférieures à 1900 ou supérieures à 1999, la valeur renvoyée par `getYear` était l'année en quatre chiffres. Par exemple, si l'année était 1856, la valeur renvoyée était 1856. Si l'année était 2026, la valeur renvoyée était 2026.

## Exemples

### Années entre 1900 et 1999

La seconde instruction assigne la valeur 95 à la variable `annee`.

```js
var noel = new Date("December 25, 1995 23:15:00");
var annee = noel.getYear(); // renvoie 95
```

### Années après 1999

La seconde instruction assigne la valeur 100 à la variable `annee`.

```js
var noel = new Date("December 25, 2000 23:15:00");
var annee = noel.getYear(); // renvoie 100
```

### Années avant 1900

La seconde instruction assigne la valeur -100 à la variable `annee`.

```js
var noel = new Date("December 25, 1800 23:15:00");
var annee = noel.getYear(); // renvoie -100
```

### Définition et lecture d'une année entre 1900 et 1999

La troisième instruction assigne la valeur 95 à la variable `annee`, représentant l'année 1995.

```js
var noel = new Date("December 25, 1800 23:15:00");
var noel.setYear(95);
var annee = noel.getYear(); // renvoie 95
```

## Specifications

| Spécification                                                                                                | État                         | Commentaires                                                                               |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------------ |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3.                                      |
| {{SpecName('ES5.1', '#sec-B.2.4', 'Date.prototype.getYear')}}                             | {{Spec2('ES5.1')}}     | Défini dans l'annexe informative sur la compatibilité.                                     |
| {{SpecName('ES6', '#sec-date.prototype.getyear', 'Date.prototype.getYear')}}         | {{Spec2('ES6')}}         | Défini dans l'annexe normative sur les fonctionnalités additionnelles des navigateurs web. |
| {{SpecName('ESDraft', '#sec-date.prototype.getyear', 'Date.prototype.getYear')}} | {{Spec2('ESDraft')}} |                                                                                            |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getYear")}}

## Voir aussi

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
