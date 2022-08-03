---
title: RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
tags:
  - ECMAScript 2015
  - Expressions rationnelles
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/sticky
---
{{JSRef}}

La propriété **`sticky`** (adhérante) permet de déterminer si la recherche s'effectue uniquement à partir de l'indice {{jsxref("RegExp.lastIndex", "lastIndex")}} lié à l'expression rationnelle ou non). `sticky` est une propriété accessible en lecture seule, rattachée à l'instance.

{{EmbedInteractiveExample("pages/js/regexp-prototype-sticky.html")}}{{js_property_attributes(0,0,1)}}

## Description

La propriété `sticky` est un booléen qui vaut `true` si le marqueur (_flag_) "`y`" a été utilisé, `false` sinon. Ce marqueur indique que les correspondances ne sont recherchées qu'à partir de l'indice {{jsxref("RegExp.lastIndex", "lastIndex")}} au niveau de la chaîne de caractères (les correspondances à partir des autres positions ne seront pas trouvées). Lorsqu'une expression rationnelle qui utilise le marqueur `sticky` **et** le marqueur `global` ignorera le marqueur `global`.

La propriété `sticky` ne peut pas être modifiée directement. Elle est uniquement en lecture seule.

## Exemples

### Utiliser une expression rationnelle avec le _flag_ _sticky_

```js
var str = '#toto#';
var regex = /toto/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex est pris en compte avec sticky)
regex.lastIndex; // 0 (on rénitialise après un échec)
```

### Marqueur d'adhérence « ancré »

Pendant plusieurs versions, le moteur JavaScript de Firefox, SpiderMonkey, avait un bug qui entraînait des correspondances invalides lorsqu'étaient utilisés le marqueur d'adhérence et le symbole `^` dans l'expression rationnelle. Ce bug est apparu peu après Firefox 3.6. Afin d'éviter ce bug, la spécification ES2015 indique spécifiquement que, lorsque le marqueur `y` est utilisé avec un motif commençant par `^`, ce dernier doit correspondre au début de la chaine (ou, si `multiline` vaut `true`, au début de la ligne). Les exemples qui suivent illustrent le comportement correct :

```js
var regex = /^foo/y;
regex.lastIndex = 2; // désactive la correspondance au début
regex.test("..foo"); // false

var regex2 = /^foo/my;
regex2.lastIndex = 2;
regex2.test("..foo"); // false
regex2.lastIndex = 2;
regex2.test(".\nfoo"); // true
```

## Spécifications

| Spécification                                                                                                        | Etat                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-get-regexp.prototype.sticky', 'RegExp.prototype.sticky')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.sticky', 'RegExp.prototype.sticky')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.sticky")}}

## Voir aussi

- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
