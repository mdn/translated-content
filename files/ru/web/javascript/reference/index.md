---
title: Справочник по JavaScript
slug: Web/JavaScript/Reference
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference
---

{{JsSidebar}}

этот раздел служит хранилищем фактов о языке JavaScript. Весь язык подробно описан здесь. При написании кода JavaScript вы будете часто ссылаться на эти страницы (отсюда и название "Справочник по JavaScript").

Язык JavaScript предназначен для использования в какой-либо более крупной среде, будь то браузер, серверные скрипты или что-то подобное. По большей части, этот справочник пытается быть независимым от среды и не ориентирован на среду веб-браузера.

Если вы новичок в JavaScript, начните с [этого](/ru-RU/docs/Web/JavaScript/Guide) раздела. Как только вы твердо усвоите основы, вы можете использовать текущий справочник, чтобы получить более подробную информацию об отдельных объектах и языковых конструкциях.


## Встроенные модули

Эта глава описывает все [стандартные встроенные объекты JavaScript](/ru/docs/Web/JavaScript/Reference/Global_Objects) вместе с их методами и свойствами.

### Свойства и их значения

- {{JSxRef("globalThis")}}
- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}

### Свойства функции

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{JSxRef("Global_Objects/isFinite", "isFinite()")}}
- {{JSxRef("Global_Objects/isNaN", "isNaN()")}}
- {{JSxRef("Global_Objects/parseFloat", "parseFloat()")}}
- {{JSxRef("Global_Objects/parseInt", "parseInt()")}}
- {{JSxRef("Global_Objects/decodeURI", "decodeURI()")}}
- {{JSxRef("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{JSxRef("Global_Objects/encodeURI", "encodeURI()")}}
- {{JSxRef("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
- {{JSxRef("Global_Objects/escape", "escape()")}} {{Deprecated_Inline}}
- {{JSxRef("Global_Objects/unescape", "unescape()")}} {{Deprecated_Inline}}

### Фундаментальные объекты

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### Объекты ошибок

- {{JSxRef("Error")}}
- {{JSxRef("AggregateError")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}
- {{JSxRef("InternalError")}} {{Non-Standard_Inline}}

### Числа и даты

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}

### Обработка текста

- {{JSxRef("String")}}
- {{JSxRef("RegExp")}}

### Индексированные коллекции

- {{JSxRef("Array")}}
- {{JSxRef("Int8Array")}}
- {{JSxRef("Uint8Array")}}
- {{JSxRef("Uint8ClampedArray")}}
- {{JSxRef("Int16Array")}}
- {{JSxRef("Uint16Array")}}
- {{JSxRef("Int32Array")}}
- {{JSxRef("Uint32Array")}}
- {{JSxRef("BigInt64Array")}}
- {{JSxRef("BigUint64Array")}}
- {{JSxRef("Float32Array")}}
- {{JSxRef("Float64Array")}}

### Коллекции с ключами

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### Структурированные данные

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("DataView")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("JSON")}}

### Управление памятью

- {{JSxRef("WeakRef")}}
- {{JSxRef("FinalizationRegistry")}}

### Абстракционные объекты управления

- {{JSxRef("Promise")}}
- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncGeneratorFunction")}}
- {{JSxRef("Generator")}}
- {{JSxRef("AsyncGenerator")}}
- {{JSxRef("AsyncFunction")}}

### Объекты отражения

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### Интернационализация

- {{JSxRef("Intl")}}
- {{JSxRef("Global_Objects/Intl/Collator", "Intl.Collator")}}
- {{JSxRef("Global_Objects/Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{JSxRef("Global_Objects/Intl/DisplayNames", "Intl.DisplayNames")}}
- {{JSxRef("Global_Objects/Intl/ListFormat", "Intl.ListFormat")}}
- {{JSxRef("Global_Objects/Intl/Locale", "Intl.Locale")}}
- {{JSxRef("Global_Objects/Intl/NumberFormat", "Intl.NumberFormat")}}
- {{JSxRef("Global_Objects/Intl/PluralRules", "Intl.PluralRules")}}
- {{JSxRef("Global_Objects/Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
- {{JSxRef("Global_Objects/Intl/Segmenter", "Intl.Segmenter")}}

## Инструкции

Эта глава описывает все [инструкции и объявления JavaScript](/ru/docs/Web/JavaScript/Reference/Statements).

{{page('/ru/docs/Web/JavaScript/Reference/Statements', 'Statements_and_declarations_by_category')}}

## Выражения и операторы

Эта глава описывает все [выражения и операторы JavaScript](/ru/docs/Web/JavaScript/Reference/Operators).

{{page('/ru/docs/Web/JavaScript/Reference/Operators', 'Expressions_and_operators_by_category')}}

## Функции

Эта глава описывает, как работать с [функциями JavaScript](/ru/docs/Web/JavaScript/Reference/Functions) для разработки ваших приложений.

- [`arguments`](/ru/docs/Web/JavaScript/Reference/Functions/arguments)
- [Стрелочные функции](/ru/docs/Web/JavaScript/Reference/Arrow_functions)
- [Параметры по умолчанию](/ru/docs/Web/JavaScript/Reference/Default_parameters)
- [Остаточные параметры](/ru/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## Дополнительные справочные страницы

- [Лексическая грамматика](/ru/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Типы и структуры данных](/ru/docs/Web/JavaScript/Data_structures)
- [Строгий режим](/ru/docs/Web/JavaScript/Reference/Strict_mode)
- [Устаревшие возможности](/ru/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
