---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Объект **`Intl.DateTimeFormat`** предоставляет возможности форматирования даты и времени в соответствии с языковыми правилами.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html", "taller")}}

## Конструктор

- {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - : Создаёт новый объект `Intl.DateTimeFormat`.

## Статические методы

- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : Возвращает массив, содержащий локали, которые поддерживаются без необходимости возврата к локали по умолчанию.

## Свойства экземпляра

Эти свойства определены в `Intl.DateTimeFormat.prototype` и есть у всех экземпляров `Intl.DateTimeFormat`.

- {{jsxref("Object/constructor", "Intl.DateTimeFormat.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `Intl.DateTimeFormat` начальным значением является конструктор {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat")}}.
- `Intl.DateTimeFormat.prototype[@@toStringTag]`
  - : Начальным значением свойства [`@@toStringTag`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) является строка `"Intl.DateTimeFormat"`. Это свойство используется в {{jsxref("Object.prototype.toString()")}}.

## Методы экземпляра

- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
  - : Функция-геттер, которая форматирует дату в соответствии с локалью и настройками форматирования этого объекта `DateTimeFormat`.
- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
  - : Этот метод принимает две [даты](/ru/docs/Web/JavaScript/Reference/Global_Objects/Date) и форматирует диапазон дат наиболее кратким образом на основе локали и параметров, установленных при создании экземпляра `DateTimeFormat`.
- {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}}
  - : Этот метод принимает две [даты](/ru/docs/Web/JavaScript/Reference/Global_Objects/Date) и возвращает массив объектов, которые содержат специфичные для локали токены, представляющие каждую часть отформатированного диапазона дат.
- {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
  - : Возвращает {{jsxref("Array", "массив")}} объектов, представляющих части даты, которые могут быть использованы для пользовательского форматирования с учётом локали.
- {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
  - : Возвращает новый объект со свойствами, представляющими локаль и настройки форматирования, определённые во время инициализации объекта.

## Примеры

### Использование `DateTimeFormat`

При использовании без указания локали `DateTimeFormat` использует локаль и настройки по умолчанию.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// результат вызова без аргументов зависит от реализации,
// локали по умолчанию и часового пояса по умолчанию
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012", если код запущен с локалью en-US и часовым поясом America/Los_Angeles
```

### Использование параметра `locales`

Этот пример показывает некоторые локализованные форматы даты и времени. Для получения формата языка, используемого в пользовательском интерфейсе вашего приложения, убедитесь, что вы указали этот язык (и, возможно, несколько запасных языков) используя параметр `locales`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Форматирование ниже предполагает, что местный часовой пояс равен
// America/Los_Angeles для локали США

// В американском английском используется порядок месяц-день-год
console.log(new Intl.DateTimeFormat("en-US").format(date));
// "12/19/2012"

// В британском английском используется порядок день-месяц-год
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// "20/12/2012"

// В корейском используется порядок год-месяц-день
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// "2012. 12. 20."

// В большинстве арабоязычных стран используют настоящие арабские цифры
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// "٢٠‏/١٢‏/٢٠١٢"

// В Японии приложения могут захотеть использовать японский календарь,
// в котором 2012 год является 24-м годом эры Хейсей
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));
// "24/12/20"

// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// "20/12/2012"
```

### Использование параметра `options`

Формат даты и времени может быть настроен с помощью параметра `options`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));

// Запрашиваем день недели вместе с длинным форматом даты
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
// "Donnerstag, 20. Dezember 2012"

// Приложение может захотеть использовать UTC и показать это
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "Thursday, December 20, 2012, GMT"

// Иногда требуется большая точность
options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Australia/Sydney",
  timeZoneName: "short",
};
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00 pm AEDT"

// Иногда требуется ещё большая точность
options.fractionalSecondDigits = 3; // количество цифр для отображения долей секунд
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00.200 pm AEDT"

// Иногда даже в США нужен 24-часовой формат времени
options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "America/Los_Angeles",
};
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "12/19/2012, 19:00:00"

// Для указания настроек, но использования локали по умолчанию, нужно передать undefined
console.log(new Intl.DateTimeFormat(undefined, options).format(date));
// "12/19/2012, 19:00:00"

// Иногда полезно включать время суток
options = { hour: "numeric", dayPeriod: "short" };
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// 10 at night
```

Форматы календаря и нумерации также можно установить независимо с помощью параметра `options`:

```js
const options = { calendar: "chinese", numberingSystem: "arab" };
const dateFormat = new Intl.DateTimeFormat(undefined, options);
const usedOptions = dateFormat.resolvedOptions();

console.log(usedOptions.calendar);
// "chinese"

console.log(usedOptions.numberingSystem);
// "arab"

console.log(usedOptions.timeZone);
// "America/New_York" (the users default timezone)
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Intl.DateTimeFormat` в FormatJS](https://formatjs.io/docs/polyfills/intl-datetimeformat/)
- {{jsxref("Intl")}}

```

```
