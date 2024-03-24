---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
---

{{JSRef}}

## Сводка

Метод **`toString()`** возвращает строку, представляющую исходный код функции.

## Синтаксис

```
function.toString(indentation)
```

### Параметры

- `indentation` {{non-standard_inline}}
  - : Количество пробелов для отступов в строковом представлении исходного кода. Если параметр меньше или равен `-1`, большинство ненужных пробелов будет удалено.

## Описание

Объект {{jsxref("Global_Objects/Function", "Function")}} переопределяет метод {{jsxref("Object.prototype.toString", "toString")}}, унаследованный из объекта {{jsxref("Global_Objects/Object", "Object")}}; он не наследует метод {{jsxref("Object.prototype.toString")}}. Для объектов {{jsxref("Global_Objects/Function", "Function")}} метод `toString` возвращает строку, представляющую объект в форме объявления функции. То есть, метод `toString` декомпилирует функцию и возвращает строку, включающую ключевое слово `function`, список аргументов, фигурные скобки и исходный код тела функции.

JavaScript вызывает метод `toString` автоматически в случае, когда объект {{jsxref("Global_Objects/Function", "Function")}} представляется в качестве текстового значения, то есть, когда функция соединяется со строкой.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toString()")}}
