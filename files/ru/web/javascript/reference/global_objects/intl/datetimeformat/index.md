---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
---

{{JSRef("Global_Objects", "DateTimeFormat", "Intl,Collator,NumberFormat")}}

## Сводка

Объект **`Intl.DateTimeFormat`** является конструктором объектов, включающих языка-зависимое форматирование даты и времени.

## Синтаксис

```
new Intl.DateTimeFormat([locales[, options]])
Intl.DateTimeFormat.call(this[, locales[, options]])
```

### Параметры

- `locales`

  - : Необязательный параметр. Строка с языковой меткой BCP 47, либо массив таких строк. Описание общей формы и интерпретации аргумента `locales` смотрите на {{jsxref("Global_Objects/Intl", "странице, посвящённой объекту Intl", "#Locale_identification_and_negotiation", 1)}}. Разрешены следующие ключи расширения Unicode:

    - `nu`
      - : Используемая система нумерации. Возможные значения включают в себя: `"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.
    - `ca`
      - : Используемый календарь. Возможные значения включают в себя: `"buddhist"`, `"chinese"`, `"coptic"`, `"ethioaa"`, `"ethiopic"`, `"gregory"`, `"hebrew"`, `"indian"`, `"islamic"`, `"islamicc"`, `"iso8601"`, `"japanese"`, `"persian"`, `"roc"`.

- `options`

  - : Необязательный параметр. Объект с некоторыми или всеми из следующих свойств:

    - `localeMatcher`
      - : Используемый алгоритм сопоставления локалей. Возможными значениями являются `"lookup"` и `"best fit"`; значением по умолчанию является `"best fit"`. Информацию по этой опции смотрите на {{jsxref("Global_Objects/Intl", "странице, посвящённой объекту Intl", "#Locale_negotiation", 1)}}.
    - `timeZone`
      - : Используемый часовой пояс. Единственным значением, которые реализации обязаны распознавать, является `"UTC"`; значением по умолчанию является часовой пояс по умолчанию среды выполнения. Реализации также могут распознавать названия часовых поясов из [базы данных часовых поясов IANA](https://www.iana.org/time-zones), например `"Asia/Shanghai"`, `"Asia/Kolkata"` или `"America/New_York"`.
    - `hour12`
      - : Определяет, использовать ли 12-часовой формат времени (в противовес 24-часовому). Возможными значениями являются `true` и `false`; значение по умолчанию зависит от локали.
    - `formatMatcher`
      - : Используемый алгоритм сопоставления форматов. Возможными значениями являются `"basic"` и `"best fit"`; значением по умолчанию является `"best fit"`. Смотрите следующий абзац, объясняющий, как использовать это свойство.

    Следующие свойства описывают компоненты даты/времени, используемые в форматированном выводе, и их желаемые представления. Реализации должны поддерживать, как минимум, следующие подмножества:

    - `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
    - `weekday`, `year`, `month`, `day`
    - `year`, `month`, `day`
    - `year`, `month`
    - `month`, `day`
    - `hour`, `minute`, `second`
    - `hour`, `minute`

    Также реализации могут поддерживать другие подмножества и запросы будут сравниваться со всеми доступными подмножествами представлений для поиска наилучшего соответствия. Для такого сравнения доступно два алгоритма, нужный из которых выбирается свойством `formatMatcher`: [чётко определённый алгоритм `"basic"`](http://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher) и зависящий от реализации алгоритм `"best fit"`.

    - `weekday`
      - : Представление дней недели. Возможными значениями являются `"narrow"`, `"short"` и `"long"`.
    - `era`
      - : Представление эр. Возможными значениями являются `"narrow"`, `"short"` и `"long"`.
    - `year`
      - : Представление лет. Возможными значениями являются `"numeric"` и `"2-digit"`.
    - `month`
      - : Представление месяцев. Возможными значениями являются `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` и `"long"`.
    - `day`
      - : Представление дней. Возможными значениями являются `"numeric"` и `"2-digit"`.
    - `hour`
      - : Представление часов. Возможными значениями являются `"numeric"` и `"2-digit"`.
    - `minute`
      - : Представление минут. Возможными значениями являются `"numeric"` и `"2-digit"`.
    - `second`
      - : Представление секунд. Возможными значениями являются `"numeric"` и `"2-digit"`.
    - `timeZoneName`
      - : Представление названий часовых поясов. Возможными значениями являются `"short"` и `"long"`.

    Значение по умолчанию для всех свойств компонентов даты/времени является значение {{jsxref("Global_Objects/undefined", "undefined")}},но если все свойства компонентов будут равны {{jsxref("Global_Objects/undefined", "undefined")}}, то будет предполагаться, что значением свойств `year`, `month` и `day` является `"numeric"`.

## Описание

### Свойства

- {{jsxref("DateTimeFormat.prototype", "Intl.DateTimeFormat.prototype")}}
  - : Позволяет добавлять свойства ко всем объектам.

## Методы

- {{jsxref("DateTimeFormat.supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : Возвращает массив, содержащий те из предоставленных локалей, которые поддерживаются без отката к локали по умолчанию среды выполнения.

## Экземпляры объекта `DateTimeFormat`

### Свойства

Экземпляры `DateTimeFormat` наследуют следующие свойства из своего прототипа:

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/prototype', 'Properties')}}

### Методы

Экземпляры `DateTimeFormat` наследуют следующие методы из своего прототипа:

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/prototype', 'Methods')}}

## Примеры

### Пример: использование `DateTimeFormat`

При базовом использовании без определения локали `DateTimeFormat` использует локаль и опции по умолчанию.

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Вывод format без аргументов зависит от реализации,
// локали по умолчанию и часового пояса по умолчанию
console.log(new Intl.DateTimeFormat().format(date));
// → "12/19/2012", если код запущен с локалью en-US и часовым поясом America/Los_Angeles
```

### Пример: использование аргумента `locales`

Этот пример показывает некоторые локализованные форматы даты и времени. Для получения формата языка, используемого в пользовательском интерфейсе вашего приложения, убедитесь, что вы указали этот язык (и, возможно, несколько запасных языков) через аргумент `locales`:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Форматирование ниже предполагает, что местный часовой пояс равен
// America/Los_Angeles для локали США

// В американском английском используется порядок месяц-день-год
console.log(new Intl.DateTimeFormat("en-US").format(date));
// → "12/19/2012"

// В британском английском используется порядок день-месяц-год
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// → "20/12/2012"

// В корейском используется порядок год-месяц-день
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// → "2012. 12. 20."

// В большинстве арабоговорящих стран используют настоящие арабские цифры
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// → "٢٠‏/١٢‏/٢٠١٢"

// В Японии приложения могут захотеть использовать японский календарь,
// в котором 2012 год является 24-м годом эры Хейсей
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));
// → "24/12/20"

// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// → "20/12/2012"
```

### Пример: использование аргумента `options`

Формат даты и времени может быть настроен с помощью аргумента `options`:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Запрашиваем день недели вместе с длинным форматом даты
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
// → "Donnerstag, 20. Dezember 2012"

// Приложение может захотеть использовать UTC и показать это
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// → "Thursday, December 20, 2012, GMT"

// Иногда нам нужна большая точность
options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
};
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// → "2:00:00 pm AEDT"

// Иногда даже в США нужен 24-часовой формат времени
options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};
console.log(date.toLocaleString("en-US", options));
// → "12/19/2012, 19:00:00"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl', 'See_also')}}
