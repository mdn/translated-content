---
title: Set.prototype.intersection()
short-title: intersection()
slug: Web/JavaScript/Reference/Global_Objects/Set/intersection
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Метод **`intersection()`** экземпляров {{jsxref("Set")}} принимает множество и возвращает новое множество, содержащее элементы, присутствующие одновременно и в исходном множестве, и в переданном.

## Синтаксис

```js-nolint
intersection(other)
```

### Параметры

- `other`
  - : Объект {{jsxref("Set")}} или [подобный множеству (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объект.

### Возвращаемое значение

Новый объект {{jsxref("Set")}}, содержащий элементы, присутствующие одновременно в исходном множестве и в множестве `other`.

## Описание

В математической нотации _пересечение_ определяется так:

<!-- Примечание: фигурные скобки нужно экранировать дважды — один раз для Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cap B = \\{x\in A\mid x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

А на диаграмме Венна:

![Диаграмма Венна с двумя пересекающимися окружностями. Пересечение A и B — область их наложения.](diagram.svg)

`intersection()` принимает [подобные множествам (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объекты в качестве параметра `other`. Метод требует, чтобы {{jsxref("this")}} был настоящим экземпляром {{jsxref("Set")}}, поскольку он напрямую читает данные, хранящиеся в `this`, не вызывая пользовательский код. Дальнейшее поведение зависит от размеров `this` и `other`:

- Если в `this` больше элементов, чем `other.size`, метод итерирует по `other`, вызывая его метод `keys()`, и создаёт новое множество из всех полученных элементов, которые также присутствуют в `this`.
- Иначе метод итерирует по элементам `this` и создаёт новое множество из всех элементов `e` множества `this`, для которых `other.has(e)` возвращает [истинное](/ru/docs/Glossary/Truthy) значение.

Из-за такой реализации эффективность `intersection()` в основном зависит от размера меньшего из множеств `this` и `other` (при условии, что доступ к множествам выполняется за сублинейное время). Порядок элементов в возвращаемом множестве совпадает с порядком в меньшем из множеств `this` и `other`.

## Примеры

### Использование intersection()

В следующем примере вычисляется пересечение множества нечётных чисел (<10) и множества полных квадратов (<10). Результат — множество нечётных чисел, являющихся полными квадратами.

```js
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.intersection(squares)); // Set(2) { 1, 9 }
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Set.prototype.intersection` в `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- [Полифил `Set.prototype.intersection` от es-shims](https://www.npmjs.com/package/set.prototype.intersection)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
