---
title: "Number : propriété statique MIN_VALUE"
short-title: MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété statique **`Number.MIN_VALUE`** représente la plus petite valeur numérique positive qu'il est possible de représenter en JavaScript.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.MIN_VALUE")}}

```js interactive-example
function divide(x, y) {
  if (x / y < Number.MIN_VALUE) {
    return "Représenté comme 0";
  }
  return x / y;
}

console.log(divide(5e-324, 1));
// Résultat attendu : 5e-324

console.log(divide(5e-324, 2));
// Résultat attendu : "Représenté comme 0"
```

## Valeur

2<sup>-1074</sup>, ou `5E-324`.

{{js_property_attributes(0, 0, 0)}}

## Description

`Number.MIN_VALUE` est le plus petit nombre positif (et non le nombre négatif le plus petit) qui peut être représenté avec une précision flottante — en d'autres termes, le nombre le plus proche de 0. La spécification ECMAScript ne définit pas de valeur précise que les implémentations doivent supporter — elle indique plutôt _«&nbsp;doit être la plus petite valeur positive non nulle qui peut réellement être représentée par l'implémentation&nbsp;»_. Cela est dû au fait que les petits nombres à virgule flottante IEEE-754 sont [dénormalisés <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Subnormal_number), mais les implémentations ne sont pas tenues de supporter cette représentation, auquel cas `Number.MIN_VALUE` peut être plus grand.

En pratique, sa valeur précise dans les moteurs principaux comme V8 (utilisé par Chrome, Edge, Node.js), SpiderMonkey (utilisé par Firefox) et JavaScriptCore (utilisé par Safari) est 2<sup>-1074</sup>, ou `5E-324`.

Puisque `MIN_VALUE` est une propriété statique de {{JSxRef("Number")}}, vous l'utilisez toujours comme `Number.MIN_VALUE`, plutôt que comme propriété d'une valeur numérique.

## Exemples

### Utiliser `MIN_VALUE`

Le code suivant divise deux valeurs numériques. Si le résultat est supérieur ou égal à `MIN_VALUE`, la fonction `func1` est appelée&nbsp;; sinon, la fonction `func2` est appelée.

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

- La propriété statique {{JSxRef("Number.MAX_VALUE")}}
