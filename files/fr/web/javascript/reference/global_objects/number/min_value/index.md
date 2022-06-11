---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
tags:
  - JavaScript
  - Number
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/MIN_VALUE
---
{{JSRef}}

La propriété **`Number.MIN_VALUE`** représente la plus petite valeur numérique positive qu'il est possible de représenter en JavaScript.

{{EmbedInteractiveExample("pages/js/number-min-value.html")}}{{js_property_attributes(0,0,0)}}

## Description

La propriété `MIN_VALUE` représente le nombre positif le plus proche de 0 et non pas le nombre négatif minimal qu'il est possible de représenter en JavaScript.

`MIN_VALUE` vaut environ 5e-324. Les valeurs inférieures à `MIN_VALUE` sont converties en 0.

`MIN_VALUE` est une propriété statique de {{jsxref("Number")}} et doit donc être utilisée avec la syntaxe `Number.MIN_VALUE`, et non pas via la propriété d'un objet `Number` qui aurait été instancié.

## Exemples

Le code qui suit effectue la division de deux nombres. Si le résultat obtenu est supérieur ou égal à `MIN_VALUE`, la fonction `func1` sera appelée, sinon la fonction `func2` sera utilisée.

```js
if (num1 / num2 >= Number.MIN_VALUE) {
    func1();
} else {
    func2();
}
```

## Spécifications

| Spécification                                                                                | État                         | Commentaires                                         |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1')}}                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1 |
| {{SpecName('ES5.1', '#sec-15.7.3.3', 'Number.MIN_VALUE')}}                 | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-number.min_value', 'Number.MIN_VALUE')}}         | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-number.min_value', 'Number.MIN_VALUE')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Number.MIN_VALUE")}}

## Voir aussi

- {{jsxref("Number.MAX_VALUE")}}
