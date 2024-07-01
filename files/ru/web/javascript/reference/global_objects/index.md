---
title: Стандартные встроенные объекты
slug: Web/JavaScript/Reference/Global_Objects
---

{{jsSidebar("Objects")}}

## Сводка

Эта глава описывает все стандартные встроенные объекты JavaScript, вместе с их методами и свойствами.

Термин «глобальные объекты» (или стандартные встроенные объекты) здесь не следует путать с самим _глобальным объектом_. Далее в главе под этим обозначением понимаются _объекты в глобальном пространстве имён_ (но только, если не используется строгий режим ECMAScript 5! В противном случае они возвращают `undefined`). Сам же _глобальный объект_ в глобальном пространстве имён доступен через оператор {{jsxref("Operators/this", "this")}}. На самом деле, глобальное пространство имён _состоит из_ свойств глобального объекта (в том числе включая унаследованные свойства, если они есть).

Другие объекты в глобальном пространстве имён [создаются либо с помощью пользовательских скриптов](/ru/docs/Web/JavaScript/Guide/Working_with_Objects#Creating_new_objects), либо предоставляются приложением хоста. Объекты хоста, доступные в контекстах браузера, задокументированы в [справке по API](/ru/docs/Web/API/Reference). Для получения дополнительной информации о различии между [DOM](/ru/docs/DOM/DOM_Reference) и ядром [JavaScript](/ru/docs/Web/JavaScript), смотрите [обзор технологии JavaScript](/ru/docs/Web/JavaScript/JavaScript_technologies_overview).

## Стандартные объекты (по категориям)

### Значения

Глобальные свойства, возвращающие простое значение.

- {{jsxref("Global_Objects/Infinity", "Infinity")}}
- {{jsxref("Global_Objects/NaN", "NaN")}}
- {{jsxref("Global_Objects/undefined", "undefined")}}
- литерал {{jsxref("Global_Objects/null", "null")}}

### Функции

Глобальные функции, возвращающие результат определённой подпрограммы.

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Global_Objects/uneval", "uneval()")}} {{non-standard_inline}}
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
- {{jsxref("Global_Objects/escape", "escape()")}} {{deprecated_inline}}
- {{jsxref("Global_Objects/unescape", "unescape()")}} {{deprecated_inline}}

### Фундаментальные объекты

Общие языковые объекты, функции и ошибки.

- {{jsxref("Global_Objects/Object", "Object")}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Global_Objects/Boolean", "Boolean")}}
- {{jsxref("Global_Objects/Symbol", "Symbol")}}
- {{jsxref("Global_Objects/Error", "Error")}}
- {{jsxref("Global_Objects/EvalError", "EvalError")}}
- {{jsxref("Global_Objects/InternalError", "InternalError")}}
- {{jsxref("Global_Objects/RangeError", "RangeError")}}
- {{jsxref("Global_Objects/ReferenceError", "ReferenceError")}}
- {{jsxref("Global_Objects/SyntaxError", "SyntaxError")}}
- {{jsxref("Global_Objects/TypeError", "TypeError")}}
- {{jsxref("Global_Objects/URIError", "URIError")}}

### Числа и даты

Объекты, имеющие дело с числами, датами и математическими вычислениями.

- {{jsxref("Global_Objects/Number", "Number")}}
- {{jsxref("Global_Objects/Math", "Math")}}
- {{jsxref("Global_Objects/Date", "Date")}}

### Обработка текста

Объекты для манипулирования текстом.

- {{jsxref("Global_Objects/String", "String")}}
- {{jsxref("Global_Objects/RegExp", "RegExp")}}

### Индексированные коллекции

Коллекции, упорядоченные по индексам. Массивоподобные объекты.

- {{jsxref("Global_Objects/Array", "Array")}}
- {{jsxref("Global_Objects/Int8Array", "Int8Array")}}
- {{jsxref("Global_Objects/Uint8Array", "Uint8Array")}}
- {{jsxref("Global_Objects/Uint8ClampedArray", "Uint8ClampedArray")}}
- {{jsxref("Global_Objects/Int16Array", "Int16Array")}}
- {{jsxref("Global_Objects/Uint16Array", "Uint16Array")}}
- {{jsxref("Global_Objects/Int32Array", "Int32Array")}}
- {{jsxref("Global_Objects/Uint32Array", "Uint32Array")}}
- {{jsxref("Global_Objects/Float32Array", "Float32Array")}}
- {{jsxref("Global_Objects/Float64Array", "Float64Array")}}

### Коллекции по ключу

Коллекции объектов по ключу. Элементы обходятся в порядке вставки.

- {{jsxref("Global_Objects/Map", "Map")}}
- {{jsxref("Global_Objects/Set", "Set")}}
- {{jsxref("Global_Objects/WeakMap", "WeakMap")}}
- {{jsxref("Global_Objects/WeakSet", "WeakSet")}}

### Структурированные данные

Буферы данных и Объектная нотация JavaScript (**J**ava**S**cript **O**bject **N**otation).

- [`ArrayBuffer`](/ru/docs/JavaScript_typed_arrays/ArrayBuffer)
- [`DataView`](/ru/docs/JavaScript_typed_arrays/DataView)
- {{jsxref("Global_Objects/JSON", "JSON")}}

### Объекты управляющих абстракций

- {{jsxref("Global_Objects/Promise", "Promise")}}

### Рефлексия

- {{jsxref("Global_Objects/Reflect", "Reflect")}} {{experimental_inline}}
- {{jsxref("Global_Objects/Proxy", "Proxy")}} {{experimental_inline}}

### Интернационализация

Дополнения к ядру ECMAScript, отвечающие за функциональность, чувствительную к языку.

- {{jsxref("Global_Objects/Intl", "Intl")}}
- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Global_Objects/NumberFormat", "Intl.NumberFormat")}}

### Нестандартные объекты

- {{jsxref("Generator")}} {{non-standard_inline}}
- {{jsxref("Iterator")}} {{non-standard_inline}}
- {{jsxref("ParallelArray")}} {{non-standard_inline}}
- {{jsxref("StopIteration")}} {{non-standard_inline}}

### Прочее

- [Аргументы функции (`arguments`)](/ru/docs/Web/JavaScript/Reference/Functions/arguments)
