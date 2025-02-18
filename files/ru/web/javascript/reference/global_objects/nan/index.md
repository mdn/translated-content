---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
---

{{jsSidebar("Objects")}}

## Сводка

Глобальное свойство **`NaN`** является значением, представляющим не-число (Not-A-Number).

{{js_property_attributes(0, 0, 0)}}

{{InteractiveExample("JavaScript Demo: Standard built-in objects - NaN")}}

```js interactive-example
function sanitize(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitize("1"));
// Expected output: "1"

console.log(sanitize("NotANumber"));
// Expected output: NaN
```

## Описание

`NaN` является свойством _глобального объекта_.

Начальным значением `NaN` является Not-A-Number (не-число) — то же самое значение, что и у {{jsxref("Number.NaN")}}. В современных браузерах `NaN` является ненастраиваемым и незаписываемым свойством. Даже когда это не так, избегайте его переопределения.

В программах `NaN` используется довольно редко. Это возвращаемое значение в ситуациях, когда математические ({{jsxref("Math")}}) функции не срабатывают должным образом (например, при вызове `Math.sqrt(-1)`) или когда функция, пытающаяся считать число из строки, терпит неудачу по причине того, что в строке не число (`parseInt('blabla')`).

### Проверка на равенство `NaN`

`NaN` является неравным (посредством сравнения через `==`, `!=`, `===`, and `!==`) любому другому значению, включая другое значение NaN. Используйте {{jsxref("Number.isNaN()")}} или {{jsxref("Global_Objects/isNaN", "isNaN()")}}, чтобы наиболее понятным образом определить является ли значение значением NaN. Или выполните само-сравнение: NaN, и только NaN, в результате такого сравнения будет неравным самому себе.

```js
NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true

function valueIsNaN(v) {
  return v !== v;
}
valueIsNaN(1); // false
valueIsNaN(NaN); // true
valueIsNaN(Number.NaN); // true
```

Тем не менее, обратите внимание на разницу между функцией `isNaN()` и методом `Number.isNaN()`: первая вернёт `true`, если значение в настоящий момент является `NaN`, или если оно станет `NaN` после того, как преобразуется в число, в то время как последний вернёт `true`, только если текущим значением является `NaN`:

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN", "isNaN()")}}
