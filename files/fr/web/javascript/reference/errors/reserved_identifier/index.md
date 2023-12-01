---
title: 'SyntaxError: "x" is a reserved identifier'
slug: Web/JavaScript/Reference/Errors/Reserved_identifier
---

{{jsSidebar("Errors")}}

## Message

```
SyntaxError: The use of a future reserved word for an identifier is invalid (Edge)
SyntaxError: "x" is a reserved identifier (Firefox)
SyntaxError: Unexpected reserved word (Chrome)
```

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

[Les mots-clés réservés](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Mots-clés_réservés_selon_ECMAScript_2015) lèveront une exception s'ils sont utilisés en tant qu'identifiants. Voici les mots-clés réservés en mode strict et en mode _sloppy_ :

- `enum`

Voici les mots-clés uniquement réservés en mode strict :

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`

## Exemples

### Mots-clés réservés en modes strict et non-strict

L'identifiant `enum` est réservé dans les différents cas :

```js example-bad
var enum = { RED: 0, GREEN: 1, BLUE: 2 };
// SyntaxError: enum is a reserved identifier
```

En mode strict, d'autres mots-clés sont réservés :

```js example-bad
"use strict";
var package = ["pomme", "poire", "pêches"];
// SyntaxError: package is a reserved identifier
```

Pour ne pas avoir l'erreur, il faudra renommer les variables :

```js example-good
var enumCouleurs = { RED: 0, GREEN: 1, BLUE: 2 };
var liste = ["pomme", "poire", "pêches"];
```

### Mettre à jour les anciens navigateurs

Si vous utilisez un ancien navigateur qui n'implémente pas [`let`](/fr/docs/Web/JavaScript/Reference/Instructions/let) ou [`class`](/fr/docs/Web/JavaScript/Reference/Instructions/class), vous devrez mettre à jour votre navigateur :

```js
"use strict";
class DocArchiver {}

// SyntaxError: class is a reserved identifier
// (lève une exception dans les anciens navigateurs
// tels que Firefox 44 et les versions antérieures)
```

## Voir aussi

- [Utiliser de bons noms de variable](https://wiki.c2.com/?GoodVariableNames)
