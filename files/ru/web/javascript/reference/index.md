---
title: Справочник по JavaScript
slug: Web/JavaScript/Reference
l10n:
  sourceCommit: 9c4fb236cd9ced12b1eb8e7696d8e6fcb8d8bad3
---

{{JsSidebar}}

Этот раздел MDN служит хранилищем фактов о языке JavaScript. Весь язык подробно описан здесь. При написании кода JavaScript вы будете часто ссылаться на эти страницы (отсюда и название "Справочник по JavaScript").

Язык JavaScript предназначен для использования в какой-либо более крупной среде, будь то браузер, серверные скрипты или что-то подобное. По большей части, этот справочник пытается быть независимым от среды и не ориентирован на среду веб-браузера.

Если вы новичок в JavaScript, начните с [этого](/ru/docs/Web/JavaScript/Guide) раздела. Как только вы твердо усвоите основы, вы можете использовать текущий справочник, чтобы получить более подробную информацию об отдельных объектах и языковых конструкциях.

## Встроенные модули

Эта глава описывает все [стандартные встроенные объекты JavaScript](/ru/docs/Web/JavaScript/Reference/Global_Objects) вместе с их методами и свойствами.

### Значения свойств

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

### Структурированные данных

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

### Управление потоком

- {{jsxref("Statements/return", "return")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Statements/try...catch", "try...catch")}}

### Объявление переменных

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}

### Функции и классы

- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}

### Итерации

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
- {{jsxref("Statements/while", "while")}}

### Другое

- {{jsxref("Statements/Empty", "Empty", "", 1)}}
- {{jsxref("Statements/block", "Block", "", 1)}}
- {{jsxref("Statements/Expression_statement", "Expression statement", "", 1)}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/label", "label", "", 1)}}
- {{jsxref("Statements/with", "with")}} {{Deprecated_Inline}}

## Выражения и операторы

[JavaScript expressions and operators](/ru/docs/Web/JavaScript/Reference/Operators).

### Основные выражения

- {{JSxRef("Operators/this", "this")}}
- [Литералы](/ru/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
- {{JSxRef("Global_Objects/Array", "[]")}}
- {{JSxRef("Operators/Object_initializer", "{}")}}
- {{JSxRef("Operators/function", "function")}}
- {{JSxRef("Operators/class", "class")}}
- {{JSxRef("Operators/function*", "function*")}}
- {{JSxRef("Operators/async_function", "async function")}}
- {{JSxRef("Operators/async_function*", "async function*")}}
- {{JSxRef("Global_Objects/RegExp", "/abc/i")}}
- {{JSxRef("Template_literals", "`string`")}}
- {{JSxRef("Operators/Grouping", "( )")}}

### Второстепенные выражения

- {{JSxRef("Operators/Property_accessors", "Property accessors", "", 1)}}
- {{JSxRef("Operators/Optional_chaining", "?.")}}
- {{JSxRef("Operators/new", "new")}}
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
- {{JSxRef("Operators/import%2Emeta", "import.meta")}}
- {{JSxRef("Operators/super", "super")}}
- {{JSxRef("Operators/import", "import()")}}

### Инкремент и дикремент

- {{JSxRef("Operators/Increment", "A++")}}
- {{JSxRef("Operators/Decrement", "A--")}}
- {{JSxRef("Operators/Increment", "++A")}}
- {{JSxRef("Operators/Decrement", "--A")}}

### Унарные оператоты

- {{JSxRef("Operators/delete", "delete")}}
- {{JSxRef("Operators/void", "void")}}
- {{JSxRef("Operators/typeof", "typeof")}}
- {{JSxRef("Operators/Unary_plus", "+")}}
- {{JSxRef("Operators/Unary_negation", "-")}}
- {{JSxRef("Operators/Bitwise_NOT", "~")}}
- {{JSxRef("Operators/Logical_NOT", "!")}}
- {{JSxRef("Operators/await", "await")}}

### Арифмитические оператоты

- {{JSxRef("Operators/Exponentiation", "**")}}
- {{JSxRef("Operators/Multiplication", "*")}}
- {{JSxRef("Operators/Division", "/")}}
- {{JSxRef("Operators/Remainder", "%")}}
- {{JSxRef("Operators/Addition", "+")}}
- {{JSxRef("Operators/Subtraction", "-")}}

### Реляционные операторы

- {{JSxRef("Operators/Less_than", "&lt;")}} (Меньше чем)
- {{JSxRef("Operators/Greater_than", "&gt;")}} (Больше чем)
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}
- {{JSxRef("Operators/instanceof", "instanceof")}}
- {{JSxRef("Operators/in", "in")}}

### Оператоы сравнения

- {{JSxRef("Operators/Equality", "==")}}
- {{JSxRef("Operators/Inequality", "!=")}}
- {{JSxRef("Operators/Strict_equality", "===")}}
- {{JSxRef("Operators/Strict_inequality", "!==")}}

### Операторы побитового сдвига

- {{JSxRef("Operators/Left_shift", "&lt;&lt;")}}
- {{JSxRef("Operators/Right_shift", "&gt;&gt;")}}
- {{JSxRef("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}

### Двоичные побитовые операторы

- {{JSxRef("Operators/Bitwise_AND", "&amp;")}}
- {{JSxRef("Operators/Bitwise_OR", "|")}}
- {{JSxRef("Operators/Bitwise_XOR", "^")}}

### Двоичные логические операторы

- {{JSxRef("Operators/Logical_AND", "&amp;&amp;")}}
- {{JSxRef("Operators/Logical_OR", "||")}}
- {{JSxRef("Operators/Nullish_coalescing", "??")}}

### Условный (тернарный) оператор

- {{JSxRef("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}

### Операторы присваивания

- {{JSxRef("Operators/Assignment", "=")}}
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
- {{JSxRef("Operators/Division_assignment", "/=")}}
- {{JSxRef("Operators/Remainder_assignment", "%=")}}
- {{JSxRef("Operators/Addition_assignment", "+=")}}
- {{JSxRef("Operators/Subtraction_assignment", "-=")}}
- {{JSxRef("Operators/Left_shift_assignment", "&lt;&lt;=")}}
- {{JSxRef("Operators/Right_shift_assignment", "&gt;&gt;=")}}
- {{JSxRef("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
- {{JSxRef("Operators/Bitwise_AND_assignment", "&amp;=")}}
- {{JSxRef("Operators/Bitwise_XOR_assignment", "^=")}}
- {{JSxRef("Operators/Bitwise_OR_assignment", "|=")}}
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
- {{JSxRef("Operators/Nullish_coalescing_assignment", "??=")}}
- [`[a, b] = arr`, `{ a, b } = obj`](/ru/docs/Web/JavaScript/Reference/Operators/Destructuring)

### Операторы доходности

- {{JSxRef("Operators/yield", "yield")}}
- {{JSxRef("Operators/yield*", "yield*")}}

### Spread синтаксис

- {{JSxRef("Operators/Spread_syntax", "...obj")}}

### Оператор запятой

- {{JSxRef("Operators/Comma_Operator", ",")}}

## Функции

[JavaScript функции.](/ru/docs/Web/JavaScript/Reference/Functions)

- {{JSXRef("Functions/Arrow_functions", "Стрелочные функции", "", 1)}}
- {{JSxRef("Functions/Default_parameters", "Стандартные параметры", "", 1)}}
- {{JSxRef("Functions/rest_parameters", "Остальные параметры", "", 1)}}
- {{JSxRef("Functions/arguments", "arguments")}}
- {{JSxRef("Functions/Method_definitions", "Определения методов", "", 1)}}
- {{JSxRef("Functions/get", "getter", "", 1)}}
- {{JSxRef("Functions/set", "setter", "", 1)}}

## Классы

[JavaScript классы.](/ru/docs/Web/JavaScript/Reference/Classes)

- {{JSxRef("Classes/Constructor", "constructor")}}
- {{JSxRef("Classes/extends", "extends")}}
- [Особенности приватных классов](/ru/docs/Web/JavaScript/Reference/Classes/Private_elements)
- [Поля открытого класса](/ru/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{JSxRef("Classes/static", "static")}}
- [Статические блоки инициализации](/ru/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

## Дополнительные справочные страницы

- {{JSxRef("Lexical_grammar", "Lexical grammar", "", 1)}}
- [Типы и структуры данных](/ru/docs/Web/JavaScript/Guide/Data_structures)
- [Протоколы итерации](/ru/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Конечные запятые](/ru/docs/Web/JavaScript/Reference/Trailing_commas)
- [Ошибки](/ru/docs/Web/JavaScript/Reference/Errors)
- {{JSxRef("Strict_mode", "Strict mode", "", 1)}}
- {{JSxRef("Deprecated_and_obsolete_features", "Deprecated features", "", 1)}}
