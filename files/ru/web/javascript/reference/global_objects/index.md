---
title: Стандартные встроенные объекты
slug: Web/JavaScript/Reference/Global_Objects
---

{{jsSidebar("Objects")}}

## Сводка

Эта глава описывает все стандартные встроенные объекты JavaScript, вместе с их методами и свойствами.

Термин «глобальные объекты» (или стандартные встроенные объекты) здесь не следует путать с самим _глобальным объектом_. Далее в главе под этим обозначением понимаются _объекты в глобальном пространстве имён_ (но только, если не используется строгий режим ECMAScript 5! В противном случае они возвращают `undefined`). Сам же _глобальный объект_ в глобальном пространстве имён доступен через оператор {{jsxref("this")}}. На самом деле, глобальное пространство имён _состоит из_ свойств глобального объекта (в том числе включая унаследованные свойства, если они есть).

Другие объекты в глобальном пространстве имён [создаются либо с помощью пользовательских скриптов](/ru/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects), либо предоставляются приложением хоста. Объекты хоста, доступные в контекстах браузера, задокументированы в [справке по API](/ru/docs/Web/API). Для получения дополнительной информации о различии между [DOM](/ru/docs/Web/API/Document_Object_Model) и ядром [JavaScript](/ru/docs/Web/JavaScript), смотрите [обзор технологии JavaScript](/ru/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Стандартные объекты (по категориям)

### Значения

Глобальные свойства, возвращающие простое значение.

- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}
- литерал {{jsxref("null")}}

### Функции

Глобальные функции, возвращающие результат определённой подпрограммы.

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Deprecated_and_obsolete_features", "uneval()")}} {{non-standard_inline}}
- {{jsxref("isFinite()")}}
- {{jsxref("isNaN()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
- {{jsxref("escape()")}} {{deprecated_inline}}
- {{jsxref("unescape()")}} {{deprecated_inline}}

### Фундаментальные объекты

Общие языковые объекты, функции и ошибки.

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}
- {{jsxref("Error")}}
- {{jsxref("EvalError")}}
- {{jsxref("InternalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}

### Числа и даты

Объекты, имеющие дело с числами, датами и математическими вычислениями.

- {{jsxref("Number")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}

### Обработка текста

Объекты для манипулирования текстом.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Индексированные коллекции

Коллекции, упорядоченные по индексам. Массивоподобные объекты.

- {{jsxref("Array")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}

### Коллекции по ключу

Коллекции объектов по ключу. Элементы обходятся в порядке вставки.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Структурированные данные

Буферы данных и Объектная нотация JavaScript (**J**ava**S**cript **O**bject **N**otation).

- [`ArrayBuffer`](/ru/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [`DataView`](/ru/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- {{jsxref("JSON")}}

### Объекты управляющих абстракций

- {{jsxref("Promise")}}

### Рефлексия

- {{jsxref("Reflect")}} {{experimental_inline}}
- {{jsxref("Proxy")}} {{experimental_inline}}

### Интернационализация

Дополнения к ядру ECMAScript, отвечающие за функциональность, чувствительную к языку.

- {{jsxref("Intl")}}
- {{jsxref("Intl/Collator", "Intl.Collator")}}
- {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}

### Нестандартные объекты

- {{jsxref("Generator")}} {{non-standard_inline}}
- {{jsxref("Iterator")}} {{non-standard_inline}}
- {{jsxref("ParallelArray")}} {{non-standard_inline}}
- {{jsxref("StopIteration")}} {{non-standard_inline}}

### Прочее

- [Аргументы функции (`arguments`)](/ru/docs/Web/JavaScript/Reference/Functions/arguments)
