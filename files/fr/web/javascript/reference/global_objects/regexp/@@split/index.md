---
title: RegExp.prototype[@@split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@split
tags:
  - Expressions rationnelles
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/@@split
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/@@split
---
{{JSRef}}

La méthode **`[@@split]()`** permet de découper une chaîne de caractères ({{jsxref("String")}}) en un tableau de sous-chaînes.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@split.html")}}

## Syntaxe

    regexp[Symbol.split](str[, limite])

### Paramètres

- `str`
  - : La chaîne de caractères qu'on souhaite découper.
- `limite`
  - : Paramètre optionnel. Un entier indiquant le nombre maximal de sous-chaînes à trouver. La méthode `[@@split]()` découpe la chaîne pour chaque correspondance de l'expression rationnelle `this` jusqu'à ce que le nombre d'éléments obtenus atteigne cette limite ou que la chaîne n'ait plus de correspondances.

### Valeur de retour

Un tableau ({{jsxref("Array")}}) dont les éléments sont les sous-chaînes de caractères issues de la découpe.

## Description

Cette méthode est appelée de façon interne par la méthode {{jsxref("String.prototype.split()")}} lorsque l'argument `str` est un objet {{jsxref("RegExp")}}. Ainsi, les deux exemples qui suivent sont équivalents et le second est la version interne du premier :

```js
'a-b-c'.split(/-/);

/-/[Symbol.split]('a-b-c');
```

Cette méthode existe afin de pouvoir adapter le fonctionnement de la découpe pour les sous-classes de `RegExp`.

Si le séparateur n'est pas un objet {{jsxref("RegExp")}}, la méthode {{jsxref("String.prototype.split()")}} n'appellera pas cette méthode et ne créera pas d'objet {{jsxref("RegExp")}}.

## Exemples

### Appel direct

Cette méthode peut être utilisée comme  {{jsxref("String.prototype.split()")}}, l'objet `this` est différent et l'ordre des arguments également.

```js
var re = /-/g;
var str = '2016-01-02';
var résultat = re[Symbol.split](str);
console.log(résultat);  // ["2016", "01", "02"]
```

### Utiliser `@@split` avec une sous-classe

Les sous-classes de {{jsxref("RegExp")}} peuvent surcharger  `[@@split]()` afin de modifier le comportement de la découpe :

```js
class MaRegExp extends RegExp {
  [Symbol.split](str, limit) {
    var résultat = RegExp.prototype[Symbol.split].call(this, str, limit);
    return résultat.map(x => "(" + x + ")");
  }
}

var re = new MaRegExp('-');
var str = '2016-01-02';
var résultat = str.split(re); // String.prototype.split appelle re[@@split].
console.log(résultat); // ["(2016)", "(01)", "(02)"]
```

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-regexp.prototype-@@split', 'RegExp.prototype[@@split]')}}     | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-regexp.prototype-@@split', 'RegExp.prototype[@@split]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.@@split")}}

## Voir aussi

- {{jsxref("String.prototype.split()")}}
- {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
- {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
- {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
