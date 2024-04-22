---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
---

{{JSRef}}

Метод **`join()`** объединяет все элементы массива в строку. Метод работает по тому же алгоритму, что и {{jsxref("Array.prototype.join()")}}. _TypedArray_ это один из типизированных массивов: [типы массивов](/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects).

## Синтаксис

```
typedarray.join([separator = ',']);
```

### Параметры

- `разделитель`
  - : Необязательный параметр. Определяет строку, разделяющую элементы массива. Разделитель приводится к строке в случае необходимости. Если он опущен, элементы массива разделяются запятой (",").

### Возвращаемое значение

Строка, соединяющая все элементы массива.

## Примеры

```js
var uint8 = new Uint8Array([1, 2, 3]);
uint8.join(); // '1,2,3'
uint8.join(" / "); // '1 / 2 / 3'
uint8.join(""); // '123'
```

## {{Glossary('Polifill', 'Полифил')}}

Поскольку теперь нет глобального объекта с именем _TypedArray_, то полифилинг должен быть выполнен "по требованию".

```js
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
if (!Uint8Array.prototype.join) {
  Object.defineProperty(Uint8Array.prototype, "join", {
    value: Array.prototype.join,
  });
}
```

Если вам нужна поддержка устаревшего JavaScript-движка, который не поддерживает свойство [`Object.defineProperty`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), то лучше не создавать полифилы новых методов `Array.prototype`, так как вы не сможете сделать их неперечислимыми.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.join()")}}
