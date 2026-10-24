---
title: Set.prototype.union()
short-title: union()
slug: Web/JavaScript/Reference/Global_Objects/Set/union
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Метод **`union()`** экземпляров {{jsxref("Set")}} принимает множество и возвращает новое множество, содержащее элементы, которые присутствуют хотя бы в одном из двух множеств: в исходном или в переданном.

## Синтаксис

```js-nolint
union(other)
```

### Параметры

- `other`
  - : Объект {{jsxref("Set")}} или [подобный множеству (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объект.

### Возвращаемое значение

Новый объект {{jsxref("Set")}}, содержащий элементы, присутствующие в исходном множестве, в множестве `other` или в обоих.

## Описание

В математической нотации _объединение_ определяется так:

<!-- Примечание: фигурные скобки нужно экранировать дважды — один раз для Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mtext>&nbsp;или&nbsp;</mtext><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cup B = \\{x\mid x\in A\text{ или }x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

А на диаграмме Венна:

![Диаграмма Венна с двумя пересекающимися окружностями. Объединение A и B — область, покрываемая любой из окружностей или обеими.](diagram.svg)

`union()` принимает [подобные множествам (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объекты в качестве параметра `other`. Метод требует, чтобы {{jsxref("this")}} был настоящим экземпляром {{jsxref("Set")}}, поскольку он напрямую читает данные, хранящиеся в `this`, не вызывая пользовательский код. Затем он итерирует по `other`, вызывая его метод `keys()`, и создаёт новое множество из всех элементов `this`, за которыми следуют все элементы `other`, отсутствующие в `this`.

Порядок элементов в возвращаемом множестве: сначала элементы из `this`, затем — из `other`.

## Примеры

### Использование union()

В следующем примере вычисляется объединение множества чётных чисел (<10) и множества полных квадратов (<10). Результат — множество чисел, которые являются чётными, полными квадратами или и тем и другим.

```js
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.union(squares)); // Set(6) { 2, 4, 6, 8, 1, 9 }
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Set.prototype.union` в `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- [Полифил `Set.prototype.union` от es-shims](https://www.npmjs.com/package/set.prototype.union)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
