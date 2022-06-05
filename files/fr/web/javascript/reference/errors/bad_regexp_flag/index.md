---
title: 'SyntaxError: invalid regular expression flag "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Bad_regexp_flag
original_slug: Web/JavaScript/Reference/Erreurs/Bad_regexp_flag
---
{{jsSidebar("Errors")}}

## Message

```
SyntaxError: Syntax error in regular expression (Edge)
SyntaxError: invalid regular expression flag "x" (Firefox)
SyntaxError: Invalid regular expression flags (Chrome)
```

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

Un marqueur (_flag_) invalide est utilisé dans une expression rationnelle. Un littéral d'expression rationnelle se compose d'un motif entouré de deux barres obliques, les marqueurs sont ajoutés après la seconde barre oblique. On peut également les indiquer dans le deuxième paramètre du constructeur {{jsxref("RegExp")}}. Les marqueurs d'une expression rationnelle peuvent être utilisés séparément ou combinés, dans n'importe quel ordre. Il existe uniquement cinq marqueurs autorisés en ECMAScript.

Pour ajouter un marqueur sur une expression rationnelle, on utilisera cette syntaxe :

```js
var re = /motif/marqueurs;
```

ou encore :

```js
var re = new RegExp('motif', 'marqueurs');
```

| Marqueur | Description                                                                                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `g`      | Recherche globale.                                                                                                                                                           |
| i        | Recherche non-sensible à la casse.                                                                                                                                           |
| m        | Recherche sur plusieurs lignes.                                                                                                                                              |
| u        | Unicode : le motif est interprété comme une suite de codets Unicode.                                                                                                         |
| y        | La recherche effectuée est « adhérente » et recherche une correspondance à la position indiquée dans la chaîne cible (cf. {{jsxref("RegExp.sticky", "sticky")}}). |

## Exemples

Seuls cinq marqueurs d'expression rationnelle sont valides :

```js example-bad
/toto/truc;

// SyntaxError: invalid regular expression flag "t"
```

Peut-être souhaitiez-vous créer une expression rationnelle ? Une expression qui contient deux barres obliques est interprétée comme un littéral d'expression rationnelle :

```js example-bad
let obj = {
  url: /docs/Web
};

// SyntaxError: invalid regular expression flag "W"
```

Peut-être souhaitiez-vous créer une chaîne de caractères ? Dans ce cas, il faut ajouter des quotes (simples ou doubles) afin de former un littéral de chaîne de caractères :

```js example-good
let obj = {
  url: '/docs/Web'
};
```

### Marqueurs valides

Voir le tableau ci-avant pour la liste des marqueurs autorisés pour manipuler les expressions rationnelles en JavaScript.

```js example-good
/toto/g;
/toto/gim;
/toto/uy;
```

## Voir aussi

- [Les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Expressions_régulières)
- [XRegEx](http://xregexp.com/flags/) – une bibliothèque relative aux expressions rationnelles qui fournit quatre nouveaux marqueurs (_flags_) (`n`, `s`, `x`, `A`)
