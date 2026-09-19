---
title: Set.prototype.isSupersetOf()
short-title: isSupersetOf()
slug: Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Метод **`isSupersetOf()`** экземпляров {{jsxref("Set")}} принимает множество и возвращает логическое значение, указывающее, все ли элементы переданного множества присутствуют в исходном.

## Синтаксис

```js-nolint
isSupersetOf(other)
```

### Параметры

- `other`
  - : Объект {{jsxref("Set")}} или [подобный множеству (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объект.

### Возвращаемое значение

`true`, если все элементы множества `other` также присутствуют в исходном множестве, иначе `false`.

## Описание

В математической нотации _надмножество_ определяется так:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊇</mo><mi>B</mi><mo stretchy="false">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo>,</mo><mspace width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>A</mi></mrow><annotation encoding="TeX">A\supseteq B \Leftrightarrow \forall x\in B,\,x\in A</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

А на диаграмме Венна:

![Диаграмма Венна с двумя окружностями. A — надмножество B, потому что B целиком содержится в A.](diagram.svg)

> [!NOTE]
> Речь идёт об отношении _надмножества_, а не _строгого надмножества_: `isSupersetOf()` возвращает `true`, если `this` и `other` содержат одни и те же элементы.

`isSupersetOf()` принимает [подобные множествам (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объекты в качестве параметра `other`. Метод требует, чтобы {{jsxref("this")}} был настоящим экземпляром {{jsxref("Set")}}, поскольку он напрямую читает данные, хранящиеся в `this`, не вызывая пользовательский код. Дальнейшее поведение зависит от размеров `this` и `other`:

- Если в `this` меньше элементов, чем `other.size`, метод сразу возвращает `false`.
- Иначе метод итерирует по `other`, вызывая его метод `keys()`, и если какой-либо элемент `other` отсутствует в `this`, возвращает `false` (и закрывает итератор `keys()`, вызывая его метод `return()`). В противном случае возвращается `true`.

## Примеры

### Использование isSupersetOf()

Множество чётных чисел (<20) является надмножеством чисел, кратных 4 (<20):

```js
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const fours = new Set([4, 8, 12, 16]);
console.log(evens.isSupersetOf(fours)); // true
```

Множество нечётных чисел (<20) не является надмножеством простых чисел (<20), потому что число 2 простое, но не нечётное:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(odds.isSupersetOf(primes)); // false
```

Одинаковые множества являются надмножествами друг друга:

```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3]);
console.log(set1.isSupersetOf(set2)); // true
console.log(set2.isSupersetOf(set1)); // true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Set.prototype.isSupersetOf` в `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- [Полифил `Set.prototype.isSupersetOf` от es-shims](https://www.npmjs.com/package/set.prototype.issupersetof)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
