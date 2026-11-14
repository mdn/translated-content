---
title: Set.prototype.symmetricDifference()
short-title: symmetricDifference()
slug: Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Метод **`symmetricDifference()`** экземпляров {{jsxref("Set")}} принимает множество и возвращает новое множество, содержащее элементы, которые присутствуют либо в исходном множестве, либо в переданном, но не в обоих сразу.

## Синтаксис

```js-nolint
symmetricDifference(other)
```

### Параметры

- `other`
  - : Объект {{jsxref("Set")}} или [подобный множеству (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объект.

### Возвращаемое значение

Новый объект {{jsxref("Set")}}, содержащий элементы, которые присутствуют либо в исходном множестве, либо в множестве `other`, но не в обоих сразу.

## Описание

В математической нотации _симметрическая разность_ определяется так:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">A\ominus B = (A\setminus B)\cup(B\setminus A)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

А на диаграмме Венна:

![Диаграмма Венна с двумя пересекающимися окружностями. Симметрическая разность A и B — область, покрываемая любой из окружностей, кроме области их наложения.](diagram.svg)

`symmetricDifference()` принимает [подобные множествам (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объекты в качестве параметра `other`. Метод требует, чтобы {{jsxref("this")}} был настоящим экземпляром {{jsxref("Set")}}, поскольку он напрямую читает данные, хранящиеся в `this`, не вызывая пользовательский код. Затем он итерирует по `other`, вызывая его метод `keys()`, и создаёт новое множество из всех элементов `this`, которые не встретились в `other`, и всех элементов `other`, которые не встретились в `this`.

Порядок элементов в возвращаемом множестве: сначала элементы из `this`, затем — из `other`.

## Примеры

### Использование symmetricDifference()

В следующем примере вычисляется симметрическая разность множества чётных чисел (<10) и множества полных квадратов (<10). Результат — множество чисел, которые являются чётными или полными квадратами, но не тем и другим одновременно.

```js
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.symmetricDifference(squares)); // Set(5) { 2, 6, 8, 1, 9 }
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Set.prototype.symmetricDifference` в `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- [Полифил `Set.prototype.symmetricDifference` от es-shims](https://www.npmjs.com/package/set.prototype.symmetricdifference)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.union()")}}
