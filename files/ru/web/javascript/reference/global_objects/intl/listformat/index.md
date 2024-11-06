---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
---

{{JSRef}}

Объект **`Intl.ListFormat`** представляет собой конструктор объектов, включающих языка-зависимое форматирование списков.

{{EmbedInteractiveExample("pages/js/intl-listformat.html")}}

## Синтаксис

```
new Intl.ListFormat([locales[, options]])
```

### Параметры

- `locales`
  - : Необязательный параметр. Строка с языковой меткой BCP 47 или массив таких строк. Описание общей формы и интерпретации аргумента `locales` смотрите на странице {{jsxref("Global_Objects/Intl", "Intl", "#Locale_identification_and_negotiation", 1)}}.
- `options`

  - : Необязательный параметр. Объект с некоторыми или всеми из следующих свойств:

    - `localeMatcher`
      Используемый алгоритм сопоставления локалей. Возможные значения: `"lookup"` и `"best fit"`; по умолчанию используется `"best fit"`. Подробнее см. на странице [`Intl`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_negotiation).
    - `type`
      Формат вывода. Возможные значения: `"conjunction"` для вывода значений через "и" (используется по умолчанию, прим. `A, B и C`) или `"disjunction"` для вывода значений через "или" (прим. `A, B или C`). `"unit"` для вывода значений с единицами измерений (прим. `5 фунтов, 12 унций`).
    - `style`
      Стиль форматирования вывода. Возможные значения: `"long"` (используется по умолчанию, прим. `A, B и C`); `"short"` или `"narrow"` (прим. `A, B, C`). При использовании `narrow`, параметр `type` может принимать только значение `unit`.

## Описание

### Свойства

- {{jsxref("ListFormat.prototype", "Intl.ListFormat.prototype")}}
  - : Позволяет добавлять свойства ко всем объектам `Intl.ListFormat`

### Методы

- {{jsxref("ListFormat.supportedLocalesOf", "Intl.ListFormat.supportedLocalesOf()")}}
  - : Возвращает массив, содержащий те из переданных ему локалей, которые поддерживаются без необходимости использовать локаль по умолчанию.

## Примеры

### Использование `format`

Пример ниже показывает как создать объект `ListFormat` с поддержкой форматирования на русском языке и получить отформатированную строку с помощью метода `format`.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("ru-RU", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// > Motorcycle, Bus и Car

console.log(
  new Intl.ListFormat("ru-RU", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// > Motorcycle, Bus или Car

console.log(
  new Intl.ListFormat("ru-RU", { style: "narrow", type: "unit" }).format(list),
);
// > Motorcycle Bus Car
```

### Использование `formatToParts`

Пример ниже показывает как получить отформатированные части объекта `ListFormat` с помощью метода `formatToParts`.

```js
const list = ["Motorcycle", "Bus", "Car"];
console.log(
  new Intl.ListFormat("en-GB", {
    style: "long",
    type: "conjunction",
  }).formatToParts(list),
);

// > [ { "type": "element", "value": "Motorcycle" }, { "type": "literal", "value": ", " }, { "type": "element", "value": "Bus" }, { "type": "literal", "value": ", and " }, { "type": "element", "value": "Car" } ];
```

## Спецификации

{{Specifications}}
