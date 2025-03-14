---
title: "TypeError: Reduce of empty array with no initial value(Тип ошибки: уменьшение пустого массива без начального значения)"
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
---

{{jsSidebar("Errors")}}

## Сообщение

```
TypeError: уменьшение пустого массива без начального значения
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что пошло не так?

В JavaScript существует несколько уменьшающих функций :

- {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}} и
- {{jsxref("TypedArray.prototype.reduce()")}}, {{jsxref("TypedArray.prototype.reduceRight()")}}).

Эти функции дополнительно принимают значение initialValue (которое будет использоваться в качестве первого аргумента для первого вызова колбэка). Однако если начальное значение не указано, будет использоваться первый элемент {{jsxref("Array")}} или {{jsxref("TypedArray")}} в качестве начального значения. Эта ошибка возникает, когда предоставляется пустой массив, так как в этом случае не может быть возвращено начальное значение.

## Примеры

### Неправильные примеры

Эта проблема часто возникает в сочетании с фильтром ({{jsxref("Array.prototype.filter()")}}, {{jsxref("TypedArray.prototype.filter()")}}) который удалит все элементы списка. Таким образом, не оставляя ни одного для использования в качестве начального значения.

```js example-bad
var ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // удаление всех элементов
  .reduce((x, y) => x + y); // no more elements to use for the initial value.
```

Аналогично, та же проблема может возникнуть, если в селекторе есть опечатка или непредвиденное количество элементов в списке:

```js example-bad
var names = document.getElementsByClassName("names");
var name_list = Array.prototype.reduce.call(
  names,
  (acc, name) => acc + ", " + name,
);
```

### Правильные примеры

Эти проблемы могут быть решены двумя различными способами.

Один из способов - фактически предоставить initialValue в качестве нейтрального элемента оператора, например 0 для сложения, 1 для умножения или пустую строку для объединения

```js example-good
var ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x < 0) // removes all elements
  .reduce((x, y) => x + y, 0); // the initial value is the neutral element of the addition
```

Другим способом было бы два для обработки пустого случая, или перед вызовом reduce, или в обратном вызове после добавления неожиданного фиктивного начального значения.

```js example-good
var names = document.getElementsByClassName("names");

var name_list1 = "";
if (names1.length >= 1)
  name_list1 = Array.prototype.reduce.call(
    names,
    (acc, name) => acc + ", " + name,
  );
// name_list1 == "" when names is empty.

var name_list2 = Array.prototype.reduce.call(
  names,
  (acc, name) => {
    if (acc == "")
      // initial value
      return name;
    return acc + ", " + name;
  },
  "",
);
// name_list2 == "" when names is empty.
```

## Смотрите также

- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array")}}
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
