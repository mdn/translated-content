---
title: Set.prototype.isDisjointFrom()
short-title: isDisjointFrom()
slug: Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Метод **`isDisjointFrom()`** экземпляров {{jsxref("Set")}} принимает множество и возвращает логическое значение, указывающее, верно ли, что у исходного множества нет общих элементов с переданным.

## Синтаксис

```js-nolint
isDisjointFrom(other)
```

### Параметры

- `other`
  - : Объект {{jsxref("Set")}} или [подобный множеству (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объект.

### Возвращаемое значение

`true`, если у исходного множества нет общих элементов с множеством `other`, иначе `false`.

## Описание

Два множества _не пересекаются_, если у них нет общих элементов. В математической нотации:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mtext>&nbsp;не пересекается с&nbsp;</mtext><mi>B</mi><mo stretchy="false">⇔</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\text{ не пересекается с }B \Leftrightarrow A\cap B = \empty</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

А на диаграмме Венна:

![Диаграмма Венна с двумя окружностями. A и B не пересекаются: у окружностей нет области наложения.](diagram.svg)

`isDisjointFrom()` принимает [подобные множествам (set-like)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) объекты в качестве параметра `other`. Метод требует, чтобы {{jsxref("this")}} был настоящим экземпляром {{jsxref("Set")}}, поскольку он напрямую читает данные, хранящиеся в `this`, не вызывая пользовательский код. Дальнейшее поведение зависит от размеров `this` и `other`:

- Если в `this` больше элементов, чем `other.size`, метод итерирует по `other`, вызывая его метод `keys()`, и если какой-либо элемент `other` присутствует в `this`, возвращает `false` (и закрывает итератор `keys()`, вызывая его метод `return()`). В противном случае возвращается `true`.
- Иначе метод итерирует по элементам `this` и возвращает `false`, если для какого-либо элемента `e` множества `this` вызов `other.has(e)` возвращает [истинное](/ru/docs/Glossary/Truthy) значение. В противном случае возвращается `true`.

Из-за такой реализации эффективность `isDisjointFrom()` в основном зависит от размера меньшего из множеств `this` и `other` (при условии, что доступ к множествам выполняется за сублинейное время).

## Примеры

### Использование isDisjointFrom()

Множество полных квадратов (<20) не пересекается с множеством простых чисел (<20), потому что полный квадрат по определению раскладывается в произведение двух целых чисел, а число 1 при этом не считается простым:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const squares = new Set([1, 4, 9, 16]);
console.log(primes.isDisjointFrom(squares)); // true
```

Множество полных квадратов (<20) пересекается с множеством составных чисел (<20), потому что все полные квадраты, кроме 1, по определению являются составными числами:

```js
const composites = new Set([4, 6, 8, 9, 10, 12, 14, 15, 16, 18]);
const squares = new Set([1, 4, 9, 16]);
console.log(composites.isDisjointFrom(squares)); // false
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Set.prototype.isDisjointFrom` в `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- [Полифил `Set.prototype.isDisjointFrom` от es-shims](https://www.npmjs.com/package/set.prototype.isdisjointfrom)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
