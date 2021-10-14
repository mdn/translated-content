---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/Trim
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/String/Trim
original_slug: Web/JavaScript/Reference/Objets_globaux/String/trim
---
{{JSRef}}

La méthode **`trim()`** permet de retirer les blancs en début et fin de chaîne. Les blancs considérés sont les caractères d'espacement (espace, tabulation, espace insécable, etc.) ainsi que les caractères de fin de ligne (LF, CR, etc.).

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## Syntaxe

    str.trim()

### Valeur de retour

Une nouvelle chaîne de caractères dérivant de la chaîne appelante pour laquelle les blancs ont été retirés aux deux extrémités de la chaîne.

## Description

La méthode `trim()` renvoie la chaîne sans blanc au début et à la fin. La méthode `trim()` n'affecte pas la valeur de la chaîne courante.

## Exemples

L'exemple qui suit affiche la chaîne `'toto'` :

```js
var chaîneOriginale = '   toto  ';
console.log(chaîneOriginale.trim()); // 'toto'

// Un autre exemple de .trim() qui enlève les espaces juste d'un côté

var chaîneOriginale = 'toto    ';
console.log(chaîneOriginale.trim()); // 'toto'
```

## Prothèse d'émulation (_polyfill_)

Si l'environnement utilisé ne possède pas cette méthode, il est possible de l'émuler avec le fragment de code suivant :

```js
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires                                            |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.5.4.20', 'String.prototype.trim')}}                     | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.8.1. |
| {{SpecName('ES6', '#sec-string.prototype.trim', 'String.prototype.trim')}}     | {{Spec2('ES6')}}         |                                                         |
| {{SpecName('ESDraft', '#sec-string.prototype.trim', 'String.prototype.trim')}} | {{Spec2('ESDraft')}} |                                                         |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.trim")}}

## Voir aussi

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
