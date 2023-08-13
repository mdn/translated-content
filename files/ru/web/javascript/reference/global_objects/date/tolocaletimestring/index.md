---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`toLocaleTimeString()`** возвращает строку с языкозависимым представлением части со временем в этой дате. Новые аргументы `locales` и `options` позволяют приложениям определять язык, чьи соглашения по форматированию должны использоваться, а также менять поведение этого метода. В старых реализациях, игнорирующих аргументы `locales` и `options`, используемая локаль и форма возвращённой строки целиком зависит от реализации.

## Синтаксис

```
dateObj.toLocaleTimeString([locales[, options]])
```

### Параметры

Проверьте раздел [Совместимость с браузерами](#Browser_compatibility), чтобы увидеть, какие браузеры поддерживают аргументы `locales` и `options`, и [Пример: проверка поддержки аргументов `locales` и `options`](#Example:_Checking_for_support_for_locales_and_options_arguments) для определения этой возможности.

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat', 'Parameters')}}

Значением по умолчанию для каждой компоненты даты-времени является {{jsxref("Global_Objects/undefined", "undefined")}}, однако, если все свойства `hour`, `minute` и `second` равны {{jsxref("Global_Objects/undefined", "undefined")}}, то их значения предполагаются равными `"numeric"`.

## Примеры

### Пример: использование метода `toLocaleTimeString()`

При базовом использовании без указания локали возвращается строка, отформатированная в соответствии с локалью и опциями по умолчанию.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// Вывод toLocaleTimeString() без аргументов зависит от реализации,
// локали по умолчанию и часового пояса по умолчанию
console.log(date.toLocaleTimeString());
// → "7:00:00 PM", если код запущен с локалью en-US и часовым поясом America/Los_Angeles
```

### Пример: проверка поддержки аргументов `locales` и `options`

Аргументы `locales` и `options` поддерживаются ещё не всеми браузерами. Для проверки того, поддерживает ли их уже реализация, можно затребовать несуществующую метку языка и проверить, будет ли выброшено исключение {{jsxref("Global_Objects/RangeError", "RangeError")}}:

```js
function toLocaleTimeStringSupportsLocales() {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Пример: использование аргумента `locales`

Этот пример показывает некоторые локализованные форматы времени. Для получения формата языка, используемого в пользовательском интерфейсе вашего приложения, убедитесь, что вы указали этот язык (и, возможно, несколько запасных языков) через аргумент `locales`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Форматирование ниже предполагает, что местный часовой пояс равен
// America/Los_Angeles для локали США

// В американском английском используется 12-часовой формат времени
console.log(date.toLocaleTimeString("en-US"));
// → "7:00:00 PM"

// В британском английском используется 24-часовой формат времени
console.log(date.toLocaleTimeString("en-GB"));
// → "03:00:00"

// В корейском используется 12-часовой формат времени
console.log(date.toLocaleTimeString("ko-KR"));
// → "오후 12:00:00"

// В большинстве арабоговорящих стран используют настоящие арабские цифры
console.log(date.toLocaleTimeString("ar-EG"));
// → "٧:٠٠:٠٠ م"

// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(date.toLocaleTimeString(["ban", "id"]));
// → "11.00.00"
```

### Пример: использование аргумента `options`

Результат, предоставляемый методом `toLocaleTimeString()`, может быть настроен с помощью аргумента `options`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Приложение может захотеть использовать UTC и показать это
const options = { timeZone: "UTC", timeZoneName: "short" };
console.log(date.toLocaleTimeString("en-US", options));
// → "3:00:00 AM GMT"

// Иногда даже в США нужен 24-х часовой формат времени
console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// → "19:00:00"
```

## Производительность

При форматировании большого количества дат лучшим вариантом будет создание объекта {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} и использование функции, предоставляемой его свойством {{jsxref("DateTimeFormat.prototype.format", "format")}}.

## Спецификации

| Спецификация                                                                                   | Статус                  | Комментарии                                            |
| ---------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------ |
| ECMAScript 3-е издание.                                                                        | Стандарт                | Изначальное определение. Реализована в JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.7', 'Date.prototype.toLocaleTimeString')}}                    | {{Spec2('ES5.1')}}      |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleTimeString')}} | {{Spec2('ES6')}}        |                                                        |
| {{SpecName('ES Int 1.0', '#sec-13.3.3', 'Date.prototype.toLocaleDateString')}}                 | {{Spec2('ES Int 1.0')}} | Определяет аргументы `locales` и `options`.            |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
