---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Объект **`Intl.NumberFormat`** предоставляет возможности форматирования чисел в соответствии с языковыми правилами.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

## Constructor

- {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : Создаёт новый объект `NumberFormat`.

## Статические методы

- {{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : Возвращает массив, содержащий локали, которые поддерживаются без необходимости возврата к локали по умолчанию.

## Свойства экземпляра

Эти свойства определены в `Intl.NumberFormat.prototype` и есть у всех экземпляров `Intl.NumberFormat`.

- {{jsxref("Object/constructor", "Intl.NumberFormat.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `Intl.NumberFormat` начальным значением является конструктор {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat")}}.
- `Intl.NumberFormat.prototype[@@toStringTag]`
  - : Начальным значением свойства [`@@toStringTag`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) является строка `"Intl.NumberFormat"`. Это свойство используется в {{jsxref("Object.prototype.toString()")}}.

## Методы экземпляра

- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
  - : Функция-геттер, которая форматирует число в соответствии с локалью и настройками форматирования этого объекта {{jsxref("Intl.NumberFormat")}}.
- {{jsxref("Intl/NumberFormat/formatRange", "Intl.NumberFormat.prototype.formatRange()")}}
  - : Функция-геттер, которая форматирует диапазон чисел в соответствии с локалью и настройками форматирования объекта {{jsxref("Intl.NumberFormat")}}, метод которого был вызван.
- {{jsxref("Intl/NumberFormat/formatRangeToParts", "Intl.NumberFormat.prototype.formatRangeToParts()")}}
  - : Возвращает {{jsxref("Array", "массив")}} объектов, представляющих диапазон числовых строк по частям, которые можно использовать для пользовательского форматирования с учетом локали.
- {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
  - : Возвращает {{jsxref("Array", "массив")}} объектов, представляющих части числа, которые могут быть использованы для пользовательского форматирования с учётом локали.
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
  - : Возвращает новый объект со свойствами, представляющими локаль и настройки форматирования, определённые во время инициализации объекта.

## Примеры

### Использование `NumberFormat`

При использовании без указания локали возвращается строка, отформатированная в соответствии с локалью и настройками по умолчанию.

```js
const number = 3500;

console.log(new Intl.NumberFormat().format(number));
// '3,500' в локали US English
```

### Использование параметра `locales`

Этот пример показывает некоторые локализованные форматы чисел. Для получения формата языка, используемого в пользовательском интерфейсе вашего приложения, убедитесь, что вы указали этот язык (и, возможно, несколько запасных языков) используя параметр `locales`:

```js
const number = 123456.789;

// В Германии в качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов - точка
console.log(new Intl.NumberFormat("de-DE").format(number));
// 123.456,789

// В России в качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов - пробел
console.log(new Intl.NumberFormat("ru-RU").format(number));
// 123 456,789

// В большинстве арабоязычных стран используют настоящие арабские цифры
console.log(new Intl.NumberFormat("ar-EG").format(number));
// ١٢٣٤٥٦٫٧٨٩

// В Индии используют разделители для тысяч/лакх/крор
console.log(new Intl.NumberFormat("en-IN").format(number));
// 1,23,456.789

// Ключ расширения nu запрашивает систему нумерации, например, китайскую десятичную
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(number));
// 一二三,四五六.七八九

// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(new Intl.NumberFormat(["ban", "id"]).format(number));
// 123.456,789
```

### Использование параметра `options`

Результат может быть настроен с помощью параметра `options`:

```js
const number = 123456.789;

// Запрашиваем формат валюты
console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// 123.456,79 €

console.log(
  new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" }).format(
    number,
  ),
);
// 123 456,79 руб.

// Японская йена не использует младшие единицы
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// ￥123,457

// Ограничиваем до трёх значащих цифр
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// 1,23,000

// Форматирование с единицами измерения
console.log(
  new Intl.NumberFormat("pt-PT", {
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(50),
);
// 50 km/h

console.log(
  (16).toLocaleString("en-GB", {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
  }),
);
// 16 litres
```

Полный список настроек смотрите на странице [`Intl.NumberFormat()` constructor](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Intl.NumberFormat` в FormatJS](https://formatjs.io/docs/polyfills/intl-numberformat/)
- {{jsxref("Intl")}}
