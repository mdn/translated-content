---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
---

{{JSRef("Global_Objects", "NumberFormat", "Intl,Collator,DateTimeFormat")}}

## Сводка

Метод **`Intl.NumberFormat.prototype.resolvedOptions()`** возвращает новый объект со свойствами, отражающими локаль и параметры форматирования чисел, вычисленные во время инициализации соответствующего объекта {{jsxref("Global_Objects/NumberFormat", "NumberFormat")}}.

## Синтаксис

```
numberFormat.resolvedOptions()
```

## Описание

Возвращает новый объект со свойствами, отражающими локаль и параметры форматирования чисел, вычисленные во время инициализации соответствующего объекта {{jsxref("Global_Objects/NumberFormat", "NumberFormat")}}. Объект содержит следующие свойства:

- `locale`
  - : Языковая метка BCP 47 реально используемой локали. Если во входной языковой метке BCP 47 запрошены какие-либо расширения Unicode, приведшие к этой локали, запрошенные и поддерживаемые для этой локали пары ключ-значение также будут включены в свойство `locale`.
- `numberingSystem`
  - : Значение, запрошенное ключом расширения Unicode `"nu"`, либо значение по умолчанию.
- `style`

  `useGrouping`

  - : Значения, предоставленные для этих свойств в аргументе `options`, либо значения по умолчанию.

- `currency`

  `currencyDisplay`

  - : Значения, предоставленные для этих свойств в аргументе `options`, либо значения по умолчанию. Эти свойства присутствуют только в том случае, если свойство `style` равно `"currency"`.

Из следующих двух групп свойств включается только одна:

- `minimumIntegerDigits`

  `minimumFractionDigits`

  `maximumFractionDigits`

  - : Значения, предоставленные для этих свойств в аргументе `options`, либо значения по умолчанию. Эти свойства присутствуют только в том случае, если в аргументе `options` не присутствовало ни свойства `minimumSignificantDigits`, ни свойства `maximumSignificantDigits`.

- `minimumSignificantDigits`

  `maximumSignificantDigits`

  - : Значения, предоставленные для этих свойств в аргументе `options`, либо значения по умолчанию. Эти свойства присутствуют только в том случае, если в аргументе `options` присутствовало хотя бы одно из них.

## Спецификации

| Спецификация                                                                             | Статус                  | Комментарии              |
| ---------------------------------------------------------------------------------------- | ----------------------- | ------------------------ |
| {{SpecName('ES Int 1.0', '#sec-11.3.3', 'Intl.NumberFormat.prototype.resolvedOptions')}} | {{Spec2('ES Int 1.0')}} | Изначальное определение. |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
