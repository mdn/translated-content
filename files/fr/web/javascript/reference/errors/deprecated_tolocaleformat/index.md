---
title: 'Warning: Date.prototype.toLocaleFormat is deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat
tags:
  - Avertissement
  - JavaScript
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat
original_slug: Web/JavaScript/Reference/Erreurs/Deprecated_toLocaleFormat
---
{{jsSidebar("Errors")}}

## Message

```
Warning: Date.prototype.toLocaleFormat is deprecated; consider using Intl.DateTimeFormat instead
```

## Type d'erreur

Un avertissement, l'exécution du script JavaScript n'est pas interrompue.

## Quel est le problème ?

La méthode non-standard {{jsxref("Date.prototype.toLocaleFormat")}} est dépréciée et ne devrait plus être utilisée. Elle utilise une chaîne de caractères qui indique le format avec la même syntaxe que la fonction `strftime()` en C. Cette fonction n'est plus disponible à partir de Firefox 58.

## Exemples

### Syntaxe dépréciée

La méthode {{jsxref("Date.prototype.toLocaleFormat")}} est dépréciée et sera retirée (aucune prise en charge par les autres navigateurs en dehors de Firefox).

```js example-bad
var today = new Date();
var date = today.toLocaleFormat('%A %e %B %Y');

console.log(date);
// En français
// "Vendredi 10 mars 2017"
```

### Utiliser une syntaxe standard grâce à l'API ECMAScript Intl

Le standard ECMA-402 (l'API ECMAScript Intl) définit des objets et méthodes standards qui permettent de mettre en forme des dates et heures (disponible à partir de Chrome 24, de Firefox 29, d'IE11 et de Safari10).

Si on souhaite uniquement formater une date, on pourra utiliser la méthode {{jsxref("Date.prototype.toLocaleDateString")}}.

```js example-good
var today = new Date();
var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var date = today.toLocaleDateString('fr-FR', options);

console.log(date);
// "Vendredi 10 mars 2017"
```

Si on manipule plus de dates, on peut utiliser l'objet {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} qui permet de mettre en cache certains des calculs afin d'avoir une mise en forme rapide (ce qui s'avère utile lorsqu'on a une boucle par exemple) :

```js example-good
var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var dateFormatter = new Intl.DateTimeFormat('de-DE', options)

var dates = [Date.UTC(2012, 11, 20, 3, 0, 0),
             Date.UTC(2014, 04, 12, 8, 0, 0)];

dates.forEach(date => console.log(dateFormatter.format(date)));

// "Donnerstag, 20. Dezember 2012"
// "Montag, 12. Mai 2014"
```

### Utiliser les méthodes de l'objet `Date`

L'objet {{jsxref("Date")}} dispose de plusieurs méthodes qui permettent de construire une chaîne de caractères pour une date donnée. Ainsi

```js example-bad
(new Date()).toLocaleFormat("%Y%m%d");
// "20170310"
```

Pourra être converti en :

```js example-good
let now = new Date();
let date = now.getFullYear() * 10000 +
          (now.getMonth() + 1) * 100 + now.getDate();

console.log(date);
// "20170310"
```

## Voir aussi

- {{jsxref("Date.prototype.toLocaleFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString")}}
- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
