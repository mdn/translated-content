---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
---

{{JSRef("Global_Objects", "Number")}}

## Сводка

Свойство **`Number.MIN_VALUE`** представляет минимальное положительное числовое значение, представимое в JavaScript.

{{js_property_attributes(0, 0, 0)}}

## Описание

Свойство `MIN_VALUE` является положительным ближайшим к нулю числом, которое может быть представлено в JavaScript.

`MIN_VALUE` имеет значение, приблизительно равное `5e-324`. Значения, меньшие `MIN_VALUE`, преобразуются в 0 (так называемое «исчезновение порядка» или «антипереполнение»).

Поскольку `MIN_VALUE` является статическим свойством объекта {{jsxref("Global_Objects/Number", "Number")}}, вы всегда должны использовать его как `Number.MIN_VALUE`, а не как свойство созданного вами объекта {{jsxref("Global_Objects/Number", "Number")}}.

## Примеры

### Пример: использование `MIN_VALUE`

В следующем примере кода производится деление одного значения на другое. Если результат больше или равен `MIN_VALUE`, вызывается функция `func1`; в противном случае вызывается функция `func2`.

```js
if (num1 / num2 >= Number.MIN_VALUE) {
  func1();
} else {
  func2();
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.MAX_VALUE")}}
