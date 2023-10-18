---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
---

{{JSRef("Global_Objects", "Number")}}

## Сводка

Метод **`toLocaleString()`** возвращает строку с языкозависимым представлением числа.

Новые аргументы `locales` и `options` позволяют приложениям определять язык, чьё поведение и соглашения по форматированию которого оно хочет использовать. В старых реализациях, игнорирующих аргументы `locales` и `options`, используемая локаль и форма возвращённой строки целиком зависит от реализации.

## Синтаксис

```
numObj.toLocaleString([locales[, options]])
```

### Параметры

Проверьте раздел [Совместимость с браузерами](#Browser_compatibility), чтобы увидеть, какие браузеры поддерживают аргументы `locales` и `options`, и [Пример: проверка поддержки аргументов `locales` и `options`](#Example:_Checking_for_support_for_locales_and_options_arguments) для определения этой возможности.

> **Примечание:** API интернационализации ECMAScript, реализованное в Firefox 29, добавляет аргумент `locales` к методу `Number.toLocaleString()`. Если этот аргумент равен {{jsxref("Global_Objects/undefined", "undefined")}}, этот метод возвращает локализованные цифры на языке, определяемом ОС, в то время, как предыдущие версии Firefox возвращали цифры на английском языке. Это изменение было помечено, как регрессия, затрагивающая обратную совместимость, которая скоро может быть исправлена. ({{bug(999003)}})

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat', 'Parameters')}}

## Примеры

### Пример: использование `toLocaleString`

При базовом использовании без указания локали возвращается строка, отформатированная в соответствии с локалью и опциями по умолчанию.

```js
var number = 3500;

console.log(number.toLocaleString()); // Отобразит '3,500' в локали U.S. English
```

### Пример: проверка поддержки аргументов `locales` и `options`

Аргументы `locales` и `options` поддерживаются ещё не всеми браузерами. Для проверки того, поддерживает ли их уже реализация, можно затребовать несуществующую метку языка и проверить, будет ли выброшено исключение {{jsxref("Global_Objects/RangeError", "RangeError")}}:

```js
function toLocaleStringSupportsLocales() {
  var number = 0;
  try {
    number.toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Пример: использование аргумента `locales`

Этот пример показывает некоторые локализованные числовые форматы. Для получения формата языка, используемого в пользовательском интерфейсе вашего приложения, убедитесь, что вы указали этот язык (и, возможно, несколько запасных языков) через аргумент `locales`:

```js
var number = 123456.789;

// В Германии в качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов - точка
console.log(number.toLocaleString("de-DE"));
// → 123.456,789

// В России в качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов - пробел
console.log(number.toLocaleString("ru-RU"));
// → 123 456,789

// В большинстве арабоговорящих стран используют настоящие арабские цифры
console.log(number.toLocaleString("ar-EG"));
// → ١٢٣٤٥٦٫٧٨٩

// В Индии используют разделители для тысяч/лакх/крор
console.log(number.toLocaleString("en-IN"));
// → 1,23,456.789

// Ключ расширения nu запрашивает систему нумерации, например, китайскую десятичную
console.log(number.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// → 一二三,四五六.七八九

// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(number.toLocaleString(["ban", "id"]));
// → 123.456,789
```

### Пример: использование аргумента `options`

Результат, предоставляемый методом `toLocaleString()`, может быть настроен с помощью аргумента `options`:

```js
var number = 123456.789;

// Запрашиваем формат валюты
console.log(
  number.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// → 123.456,79 €

console.log(
  number.toLocaleString("ru-RU", { style: "currency", currency: "RUB" }),
);
// → 123 456,79 ₽

// Японская йена не использует младшие единицы
console.log(
  number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// → ￥123,457

// Ограничиваем до трёх значащих цифр
console.log(number.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// → 1,23,000
```

## Производительность

При форматировании большого количества чисел лучшим вариантом будет создание объекта {{jsxref("Global_Objects/NumberFormat", "NumberFormat")}} и использование функции, предоставляемой его свойством {{jsxref("NumberFormat.format")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.prototype.toString()")}}
