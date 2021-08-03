---
title: Symbol.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/@@toPrimitive
---
{{JSRef}}

La méthode **`[@@toPrimitive]()`** permet de convertir un objet symbole en une valeur primitive.

## Syntaxe

    Symbol()[Symbol.toPrimitive](hint);

### Valeur de retour

La valeur primitive de l'objet {{jsxref("Symbol")}} indiqué.

## Description

La méthode `[@@toPrimitive]()` de {{jsxref("Symbol")}} renvoie la valeur primitive d'un objet `Symbol` (le résultat sera  donc un symbole au sens primitif). L'argument `hint` n'est pas utilisé.

Le moteur JavaScript appelle la méthode `[@@toPrimitive]()` afin de convertir un objet en une valeur primitive. Généralement, il n'est pas nécessaire d'appeler `[@@toPrimitive]()` car le moteur JavaScript l'appelle automatiquement lorsqu'il détecte un objet là où une valeur primitive est attendue.

## Spécifications

| Spécification                                                                                                                    | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-symbol.prototype-@@toprimitive', 'Symbol.prototype.@@toPrimitive')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-symbol.prototype-@@toprimitive', 'Symbol.prototype.@@toPrimitive')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Symbol.@@toPrimitive")}}

## Voir aussi

- {{jsxref("Symbol.toPrimitive")}}
