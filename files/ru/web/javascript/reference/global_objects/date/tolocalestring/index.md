---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`toLocaleString()`** возвращает строку с языкозависимым представлением даты. Новые аргументы `locales` и `options` позволяют приложениям определять язык, чьи соглашения по форматированию должны использоваться, а также менять поведение этого метода. В старых реализациях, игнорирующих аргументы `locales` и `options`, используемая локаль и форма возвращённой строки целиком зависит от реализации.

## Синтаксис

```
dateObj.toLocaleString([locales[, options]])
```

### Параметры

Проверьте раздел [Совместимость с браузерами](#Browser_compatibility), чтобы увидеть, какие браузеры поддерживают аргументы `locales` и `options`, и [Пример: проверка поддержки аргументов `locales` и `options`](#Example:_Checking_for_support_for_locales_and_options_arguments) для определения этой возможности.

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat', 'Parameters')}}

Значением по умолчанию для каждой компоненты даты-времени является {{jsxref("Global_Objects/undefined", "undefined")}}, однако, если все свойства `weekday`, `year`, `month`, `day`, `hour`, `minute` и `second` равны {{jsxref("Global_Objects/undefined", "undefined")}}, то их значения предполагаются равными `"numeric"`.

## Примеры

### Пример: использование метода `toLocaleString()`

При базовом использовании без указания локали возвращается строка, отформатированная в соответствии с локалью и опциями по умолчанию.

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// Вывод toLocaleString() без аргументов зависит от реализации,
// локали по умолчанию и часового пояса по умолчанию
console.log(date.toLocaleString());
// → "12/11/2012, 7:00:00 PM", если код запущен с локалью en-US и часовым поясом America/Los_Angeles
```

### Пример: проверка поддержки аргументов `locales` и `options`

Аргументы `locales` и `options` поддерживаются ещё не всеми браузерами. Для проверки того, поддерживает ли их уже реализация, можно затребовать несуществующую метку языка и проверить, будет ли выброшено исключение {{jsxref("Global_Objects/RangeError", "RangeError")}}:

```js
function toLocaleStringSupportsLocales() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Пример: использование аргумента `locales`

Этот пример показывает некоторые локализованные форматы даты и времени. Для получения формата языка, используемого в пользовательском интерфейсе вашего приложения, убедитесь, что вы указали этот язык (и, возможно, несколько запасных языков) через аргумент `locales`:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Форматирование ниже предполагает, что местный часовой пояс равен
// America/Los_Angeles для локали США

// В американском английском используется порядок месяц-день-год
// и 12-часовой формат времени
console.log(date.toLocaleString("en-US"));
// → "12/19/2012, 7:00:00 PM"

// В британском английском используется порядок день-месяц-год
// и 24-часовой формат времени
console.log(date.toLocaleString("en-GB"));
// → "20/12/2012 03:00:00"

// В корейском используется порядок год-месяц-день
// и 12-часовой формат времени
console.log(date.toLocaleString("ko-KR"));
// → "2012. 12. 20. 오후 12:00:00"

// В большинстве арабоговорящих стран используют настоящие арабские цифры
console.log(date.toLocaleString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// В Японии приложения могут захотеть использовать японский календарь,
// в котором 2012 год является 24-м годом эры Хейсей
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// → "24/12/20 12:00:00"

// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(date.toLocaleString(["ban", "id"]));
// → "20/12/2012 11.00.00"
```

### Пример: использование аргумента `options`

Результат, предоставляемый методом `toLocaleString()`, может быть настроен с помощью аргумента `options`:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Запрашиваем день недели вместе с длинным форматом даты
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// Приложение может захотеть использовать UTC и показать это
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleString("en-US", options));
// → "Thursday, December 20, 2012, GMT"

// Иногда даже в США нужен 24-х часовой формат времени
console.log(date.toLocaleString("en-US", { hour12: false }));
// → "12/19/2012, 19:00:00"
```

## Производительность

При форматировании большого количества дат лучшим вариантом будет создание объекта {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} и использование функции, предоставляемой его свойством {{jsxref("DateTimeFormat.prototype.format", "format")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
