---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Number.MAX_VALUE")}}
