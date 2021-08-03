---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/includes
original_slug: Web/JavaScript/Reference/Objets_globaux/String/includes
---
{{JSRef}}

La méthode **`includes()`** détermine si une chaîne de caractères est contenue dans une autre et renvoie `true` ou `false` selon le cas de figure.

{{EmbedInteractiveExample("pages/js/string-includes.html")}}

## Syntaxe

    str.includes(chaîneRecherchée);
    str.includes(chaîneRecherchée, position);

### Paramètres

- `chaîneRecherchée`
  - : Une chaîne à rechercher dans la chaîne courante.
- `position` {{optional_inline}}
  - : La position dans la chaîne à partir de laquelle commencera la recherche. La valeur par défaut de `position` est 0.

### Valeur de retour

`true` si la chaîne de caractères contient la sous-chaîne recherchée, `false` sinon.

## Description

Cette méthode détermine si une chaîne de caractères est contenue dans une autre.

### Sensibilité à la case

`includes()` est sensible à la casse. Par exemple, l'expression suivante nous retournera `false` :

```js
'Baleine bleue'.includes('baleine'); // false
```

## Exemples

### Utiliser `includes()`

```js
const str = "Être ou ne pas être, telle est la question.";

console.log(str.includes("Être"));       // true
console.log(str.includes("question"));   // true
console.log(str.includes("pléonasme"));  // false
console.log(str.includes("Être", 1));    // false
console.log(str.includes("ÊTRE"));       // false
console.log(str.includes(""));       // true
```

## Prothèse d'émulation (_polyfill_)

Cette méthode a été ajoutée à la spécification ECMAScript 2015 et n'est peut-être pas encore disponible dans toutes les implémentations JavaScript.

Cependant, vous pouvez facilement {{Glossary('polyfill')}} cette méthode pour de vieux navigateurs :

```js
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }
    if (start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
}
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.includes', 'String.prototype.includes')}} | {{Spec2('ESDraft')}} |                      |
| {{SpecName('ES6', '#sec-string.prototype.includes', 'String.prototype.includes')}}         | {{Spec2('ES6')}}         | Définition initiale. |

## Compatibilité du navigateur

{{Compat("javascript.builtins.String.includes")}}

## String.prototype.contains

Les versions de Firefox allant de Firefox 18 à Firefox 39 utilisent cette méthode avec le nom `contains()`. Cette méthode a été renommée en `includes()` via {{bug(1102219)}} pour la raison suivante :

Il a été [rapporté](https://bugzilla.mozilla.org/show_bug.cgi?id=789036) que certains sites web utilisant MooTools 1.2 plantaient sur Firefox 17. Cette version de MooTools vérifie que `String.prototype.contains()` existe bien, et si ce n'est pas le cas, ajoute sa propre fonction similaire. Avec l'introduction de cette fonction dans Firefox 17, le comportement de ce contrôle a changé de telle manière qu'il cause un plantage du code de MooTools implémenté pour `String.prototype.contains()`. En conséquence, cette implémentation a été [désactivée](https://hg.mozilla.org/releases/mozilla-aurora/rev/086db97198a8 "https://bugzilla.mozilla.org/show_bug.cgi?id=793781") de Firefox 17. `String.prototype.contains()` est ainsi disponible sur une version ultérieure : Firefox 18 lorsque [MooTools a déclenché la sortie de la version 1.2.6.](https://mootools.net/blog/2013/02/19/mootools-1-2-6-released)

MooTools 1.3 force sa propre version de `String.prototype.includes()`, les sites Web l'implémentant ne sont donc pas perturbés. Néanmoins, il faut noter que les signatures des méthodes diffèrent entre [MooTools 1.3](https://mootools.net/docs/core/Types/String#String:includes) et ECMAScript 2015 (pour le second paramètre). [MooTools 1.5+ a modifié sa signature afin de prendre en compte le standard de ES2015.](https://github.com/mootools/mootools-core/blob/master/Docs/Types/String.md#note)

Dans Firefox 48, la méthode `String.prototype.contains()` a été retirée. `String.prototype.includes()` doit être utilisée à la place.

## Voir aussi

- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
