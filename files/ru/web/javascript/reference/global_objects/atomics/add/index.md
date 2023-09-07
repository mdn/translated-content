---
title: Atomics.add()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/add
---

{{JSRef}}

Статический метод **`Atomics.add()`** добавляет значение к текущему по указанной позиции в массиве и возвращает предыдущее значение в этой позиции. Эта атомарная операция гарантирует, что никакой другой записи не произойдёт, пока изменённое значение не будет записано обратно.

## Синтаксис

```
Atomics.add(typedArray, index, value)
```

### Параметры

- `typedArray`
  - : Разделённый массив целых чисел. {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} или {{jsxref("Uint32Array")}}.
- `index`
  - : Позиция в `typedArray` для добавления `value`.
- `value`
  - : Число для добавления.

### Возвращаемое значение

Предыдущее значение в указанной позиции (`typedArray[index]`).

### Исключения

- Выбрасывает {{jsxref("TypeError")}}, если тип `typedArray` не является одним из допустимых целочисленных типов.
- Выбрасывает {{jsxref("TypeError")}}, если тип `typedArray` не общего типа.
- Выбрасывает {{jsxref("RangeError")}}, если `index` вне `typedArray`.

## Примеры

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12); // возвращает 0, предыдущее значение
Atomics.load(ta, 0); // 12
```

## Спецификации

| Specification                                              | Status               | Comment                       |
| ---------------------------------------------------------- | -------------------- | ----------------------------- |
| {{SpecName('ESDraft', '#sec-atomics.add', 'Atomics.add')}} | {{Spec2('ESDraft')}} | Initial definition in ES2017. |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.sub()")}}
