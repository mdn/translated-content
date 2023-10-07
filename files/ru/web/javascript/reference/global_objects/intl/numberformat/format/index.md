---
title: Intl.NumberFormat.prototype.format
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
---

{{JSRef("Global_Objects", "NumberFormat", "Intl,Collator,DateTimeFormat")}}

## Сводка

Свойство **`Intl.NumberFormat.prototype.format`** возвращает функцию-геттер, форматирующую число согласно локали и параметрам форматирования соответствующего объекта {{jsxref("Global_Objects/NumberFormat", "NumberFormat")}}.

## Синтаксис

```
numberFormat.format(number)
```

### Параметры

- `number`
  - : Число для форматирования.

## Описание

Функция, возвращённая геттером `format`, форматирует число согласно локали и параметрам форматирования соответствующего объекта {{jsxref("Global_Objects/NumberFormat", "NumberFormat")}}.

## Примеры

### Пример: использование функции `format`

Использование функции, возвращённой геттером `format`, для форматирования одного значения валюты, здесь пример для русского языка:

```js
var options = { style: "currency", currency: "RUB" };
var numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// → "654 321,99 руб."
```

### Пример: использование функции `format` вместе с `map`

Использование функции, возвращённой геттером `format`, для форматирования всех чисел в массиве. Обратите внимание, что функция привязана к объекту {{jsxref("Global_Objects/NumberFormat", "NumberFormat")}}, из которого она была получена, так что её можно передавать в {{jsxref("Array.prototype.map")}} напрямую.

```js
var a = [123456.789, 987654.321, 456789.123];
var numberFormat = new Intl.NumberFormat("es-ES");
var formatted = a.map(numberFormat.format);
console.log(formatted.join("; "));
// → "123.456,789; 987.654,321; 456.789,123"
```

## Спецификации

| Спецификация                                                                    | Статус                  | Комментарии              |
| ------------------------------------------------------------------------------- | ----------------------- | ------------------------ |
| {{SpecName('ES Int 1.0', '#sec-11.3.2', 'Intl.NumberFormat.prototype.format')}} | {{Spec2('ES Int 1.0')}} | Изначальное определение. |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
