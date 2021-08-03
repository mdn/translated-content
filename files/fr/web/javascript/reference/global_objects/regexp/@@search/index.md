---
title: RegExp.prototype[@@search]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@search
tags:
  - Expressions rationnelles
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/@@search
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/@@search
---
{{JSRef}}

La méthode **`[@@search]()`** recherche une correspondance entre une expression rationnelle décrite par `this` et une chaîne de caractères donnée.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@search.html")}}

## Syntaxe

    regexp[Symbol.search](str)

### Paramètres

- `str`
  - : Une chaîne de caractères ({{jsxref("String")}}) sur laquelle on veut rechercher une correspondance.

### Valeur de retour

- `entier`
  - : Si la recherche réussit, `[@@search]()` renvoie la position de la première correspondance de l'expression rationnelle au sein de la chaîne, sinon elle renvoie `-1`.

## Description

Cette méthode est appelée en interne lors de l'utilisation de {{jsxref("String.prototype.search()")}}. Ainsi, les deux exemples qui suivent sont équivalents et le second est la version interne du premier :

```js
'abc'.search(/a/);

/a/[Symbol.search]('abc');
```

Cette méthode existe afin de pouvoir adapter le comportement de la recherche pour les sous-classes de `RegExp`.

## Exemples

### Appel direct

Cette méthode peut être utilisée comme {{jsxref("String.prototype.search()")}}, elle utilise simplement un objet `this` différent et un ordre de paramètres différent :

```js
var re = /-/g;
var str = '2016-01-02';
var résultat = re[Symbol.search](str);
console.log(résultat);  // 4
```

### Utiliser `@@search` avec une sous-classe

Les sous-classes de {{jsxref("RegExp")}} peuvent surcharger `[@@search]()` afin de modifier le comportement obtenu :

```js
class MaRegExp extends RegExp {
  constructor(str) {
    super(str)
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

var re = new MaRegExp('a+b');
var str = 'ab a+b';
var résultat = str.search(re); // String.prototype.search appelle re[@@search].
console.log(résultat); // 3
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-regexp.prototype-@@search', 'RegExp.prototype[@@search]')}}     | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-regexp.prototype-@@search', 'RegExp.prototype[@@search]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.@@search")}}

## Voir aussi

- {{jsxref("String.prototype.search()")}}
- {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
- {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
- {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
