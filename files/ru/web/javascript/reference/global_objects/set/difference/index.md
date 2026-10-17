---
title: Set.prototype.difference()
short-title: difference()
slug: Web/JavaScript/Reference/Global_Objects/Set/difference
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Метод **`difference()`** экземпляров {{jsxref("Set")}} принимает множество и возвращает новое множество, содержащее элементы, которые есть в исходном множестве, но отсутствуют в переданном.

## Синтаксис

```js-nolint
difference(other)
```

### Параметры

- `other`
  - : Объект {{jsxref("Set")}} или [подобный множеству (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объект.

### Возвращаемое значение

Новый объект {{jsxref("Set")}}, содержащий элементы, которые есть в исходном множестве, но отсутствуют в множестве `other`.

## Описание

В математической нотации _разность_ определяется так:

<!-- Примечание: фигурные скобки нужно экранировать дважды — один раз для Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∉</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\setminus B = \\{x\in A\mid x\notin B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

А на диаграмме Венна:

![Диаграмма Венна с двумя пересекающимися окружностями. Разность A и B — часть A, не пересекающаяся с B.](diagram.svg)

`difference()` принимает [подобные множествам (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объекты в качестве параметра `other`. Метод требует, чтобы {{jsxref("this")}} был настоящим экземпляром {{jsxref("Set")}}, поскольку он напрямую читает данные, хранящиеся в `this`, не вызывая пользовательский код. Дальнейшее поведение зависит от размеров `this` и `other`:

- Если в `this` больше элементов, чем `other.size`, метод итерирует по `other`, вызывая его метод `keys()`, и создаёт новое множество из всех элементов `this`, которые не встретились в `other`.
- Иначе метод итерирует по элементам `this` и создаёт новое множество из всех элементов `e` множества `this`, для которых `other.has(e)` возвращает [ложное](/ru/docs/Glossary/Falsy) значение.

Порядок элементов в возвращаемом множестве совпадает с порядком в `this`.

## Примеры

### Использование difference()

В следующем примере вычисляется разность множества нечётных чисел (<10) и множества полных квадратов (<10). Результат — множество нечётных чисел, не являющихся полными квадратами.

```js
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.difference(squares)); // Set(3) { 3, 5, 7 }
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Set.prototype.difference` в `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- [Полифил `Set.prototype.difference` от es-shims](https://www.npmjs.com/package/set.prototype.difference)
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
