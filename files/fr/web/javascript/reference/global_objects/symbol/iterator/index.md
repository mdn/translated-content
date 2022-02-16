---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
tags:
  - ECMAScript 2015
  - JavaScript
  - Propriété
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/iterator
---
{{JSRef}}

Le symbole **`Symbol.iterator`** définit l'itérateur par défaut d'un objet. C'est l'itérateur qui sera utilisé par [`for...of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of).

{{EmbedInteractiveExample("pages/js/symbol-iterator.html")}}

## Description

Lorsqu'on doit itérer sur un objet (par exemple avec une boucle `for..of`), sa méthode `@@iterator` est appelée sans argument et l'itérateur renvoyé par la méthode est utilisé pour récupérer les valeurs sur lesquelles itérer.

Certains types natifs possèdent un comportement par défaut pour l'itération, d'autres types (tels qu'{{jsxref("Object")}}) n'ont pas de tel comportement. Les types natifs qui disposent d'une méthode `@@iterator` sont :

- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}

Pour plus d'informations, voir aussi [la page sur les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration).

{{js_property_attributes(0,0,0)}}

## Exemples

### Itérables définis par l'utilisateur

Il est possible de construire un itérable de la façon suivante :

```js
var monItérable = {}
monItérable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...monItérable] // [1, 2, 3]
```

On peut également définir ces itérables via des propriétés calculées dans des déclarations de classe ou dans des littéraux objets :

```js
class Toto {
  *[Symbol.iterator] () {
    yield 1;
    yield 2;
    yield 3;
  }
}

const monObj = {
  *[Symbol.iterator] () {
    yield "a";
    yield "b";
  }
}

[... new Toto] // [1, 2, 3]
[... monObj]   // ["a", "b"]
```

### Itérables mal-formés

Si la méthode `@@iterator` d'un itérable ne renvoie pas un itérateur, on dira que c'est un itérable mal-formé. Utiliser un tel itérable peut provoquer des erreurs lors de l'exécution :

```js
var itérableMalFormé = {}
itérableMalFormé[Symbol.iterator] = () => 1
[...itérableMalFormé] // TypeError: [] is not a function
```

## Spécifications

| Spécification                                                                            | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-symbol.iterator', 'Symbol.iterator')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-symbol.iterator', 'Symbol.iterator')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Symbol.iterator")}}

## Voir aussi

- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration)
- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}
