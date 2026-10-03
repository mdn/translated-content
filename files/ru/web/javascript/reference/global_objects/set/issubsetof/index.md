---
title: Set.prototype.isSubsetOf()
short-title: isSubsetOf()
slug: Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Метод **`isSubsetOf()`** экземпляров {{jsxref("Set")}} принимает множество и возвращает логическое значение, указывающее, все ли элементы исходного множества присутствуют в переданном.

## Синтаксис

```js-nolint
isSubsetOf(other)
```

### Параметры

- `other`
  - : Объект {{jsxref("Set")}} или [подобный множеству (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объект.

### Возвращаемое значение

`true`, если все элементы исходного множества также присутствуют в множестве `other`, иначе `false`.

## Описание

В математической нотации _подмножество_ определяется так:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊆</mo><mi>B</mi><mo stretchy="false">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>,</mo><mspace width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>B</mi></mrow><annotation encoding="TeX">A\subseteq B \Leftrightarrow \forall x\in A,\,x\in B</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

А на диаграмме Венна:

![Диаграмма Венна с двумя окружностями. A — подмножество B, потому что A целиком содержится в B.](diagram.svg)

> [!NOTE]
> Речь идёт об отношении _подмножества_, а не _строгого подмножества_: `isSubsetOf()` возвращает `true`, если `this` и `other` содержат одни и те же элементы.

`isSubsetOf()` принимает [подобные множествам (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объекты в качестве параметра `other`. Метод требует, чтобы {{jsxref("this")}} был настоящим экземпляром {{jsxref("Set")}}, поскольку он напрямую читает данные, хранящиеся в `this`, не вызывая пользовательский код. Дальнейшее поведение зависит от размеров `this` и `other`:

- Если в `this` больше элементов, чем `other.size`, метод сразу возвращает `false`.
- Иначе метод итерирует по элементам `this` и возвращает `false`, если для какого-либо элемента `e` множества `this` вызов `other.has(e)` возвращает [ложное](/ru/docs/Glossary/Falsy) значение. В противном случае возвращается `true`.

## Примеры

### Использование isSubsetOf()

Множество чисел, кратных 4 (<20), является подмножеством чётных чисел (<20):

```js
const fours = new Set([4, 8, 12, 16]);
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
console.log(fours.isSubsetOf(evens)); // true
```

Множество простых чисел (<20) не является подмножеством нечётных чисел (<20), потому что число 2 простое, но не нечётное:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(primes.isSubsetOf(odds)); // false
```

Одинаковые множества являются подмножествами друг друга:

```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3]);
console.log(set1.isSubsetOf(set2)); // true
console.log(set2.isSubsetOf(set1)); // true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Set.prototype.isSubsetOf` в `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- [Полифил `Set.prototype.isSubsetOf` от es-shims](https://www.npmjs.com/package/set.prototype.issubsetof)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
