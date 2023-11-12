---
title: Лексический синтаксис
slug: Web/JavaScript/Reference/Lexical_grammar
---

{{JsSidebar("More")}}

Этот раздел описывает синтаксис JavaScript. Исходный код ECMAScript скриптов сканируется слева направо и преобразуется в последовательность найденных элементов в токены, управляющие символы, окончания строк, комментарии или пробелы.

ECMAScript также определяет ключевые слова и литералы и имеет указания для автоматической вставки точек с запятой к концу инструкции.

## Спецсимволы

Спецсимволы не имеют визуального представления, однако используются для управления интерпретацией текста.

| Code point | Name                  | Abbreviation | Description                                                                                                                                                                                                                        |
| ---------- | --------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `U+200C`   | Zero width non-joiner | \<ZWNJ>      | Размещается между символами во избежание их соединений в лигатуры для некоторых языков ([Wikipedia](http://en.wikipedia.org/wiki/Zero-width_non-joiner))                                                                           |
| `U+200D`   | Zero width joiner     | \<ZWJ>       | Размещается между символами, которые не могли бы нормально объединиться для того, чтобы символы отрисовывались, используя их соединительную форму в некоторых языках ([Wikipedia](http://en.wikipedia.org/wiki/Zero-width_joiner)) |
| `U+FEFF`   | Byte order mark       | \<BOM>       | Используется вначале скрипта для того, чтобы пометить Юникод и порядок байтов ([Wikipedia](http://en.wikipedia.org/wiki/Byte_order_mark))                                                                                          |

## Пробелы

Пробельные символы улучшают читабельность исходного текста и разделяет токены друг от друга. Пробельные символы обычно не обязательны для функционирования кода. [Утилиты для уменьшения объёма кода](http://en.wikipedia.org/wiki/Minification_%28programming%29) часто удаляют пробельные символы, чтобы уменьшить объем кода.

| Code point | Name                           | Abbreviation | Description                                                                                                     | Escape sequence |
| ---------- | ------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------- | --------------- |
| U+0009     | Character tabulation           | \<HT>        | Горизонтальная табуляция                                                                                        | \t              |
| U+000B     | Line tabulation                | \<VT>        | Вертикальная табуляция                                                                                          | \v              |
| U+000C     | Form feed                      | \<FF>        | Символ контроля разрыва страницы ([Wikipedia](http://en.wikipedia.org/wiki/Page_break#Form_feed))               | \f              |
| U+0020     | Space                          | \<SP>        | Обычный пробел                                                                                                  |                 |
| U+00A0     | No-break space                 | \<NBSP>      | Обычный пробел без точки, на которой может произойти разрыв страницы                                            |                 |
| Others     | Other Unicode space characters | \<USP>       | [Другие символы в Юникоде на Википедии](http://en.wikipedia.org/wiki/Space_%28punctuation%29#Spaces_in_Unicode) |                 |

## Окончание строк

В дополнение к пробельным символам, символы окончания строк тоже используются для читабельности исходного кода. Однако, в некоторых случаях, символы окончания строк могут влиять на выполнение JavaScript-кода, т.к. есть некоторые места, где они запрещены.

Окончания строк также затрагивают процесс [автоматического проставления точки с запятой](#Automatic_semicolon_insertion). Также окончания строк попадают под условия [регулярных выражений](/ru/docs/Web/JavaScript/Guide/Regular_Expressions) при поиске **\s** класса.

В ECMAScript, в качестве окончания строк можно использовать только ниже перечисленные Юникод символы. Другие символы окончания строк будут интерпретированы, как пробельные символы (например, Next Line, NEL, U+0085 будут интерпретироваться, как пробельные символы).

| Code point | Name                | Abbreviation | Description                                       | Escape sequence |
| ---------- | ------------------- | ------------ | ------------------------------------------------- | --------------- |
| U+000A     | Line Feed           | \<LF>        | Новая строка в UNIX системах.                     | \n              |
| U+000D     | Carriage Return     | \<CR>        | Новая строка в Commodore и ранних Mac systems.    | \r              |
| U+2028     | Line Separator      | \<LS>        | [Wikipedia](http://en.wikipedia.org/wiki/Newline) |                 |
| U+2029     | Paragraph Separator | \<PS>        | [Wikipedia](http://en.wikipedia.org/wiki/Newline) |                 |

## Комментарии

Комментарии используются для добавления подсказок, заметок, предложений или предупреждений. Они могут упростить чтение и понимание кода. Также они могут быть использованы для предотвращения выполнения кода (этот приём практикуется при отладке кода).

В JavaScript есть несколько способов указать комментарии в коде.

Первый способ `//` комментарий; в этом случае весь текст в строке после двойного слеша будет комментарием, например:

```js
function comment() {
  // Это комментарий в строке
  console.log("Hello world!");
}
comment();
```

Второй способ - это `/* */`, такой способ более гибок, чем первый.

Например, вы можете использовать его в одной строке:

```js
function comment() {
  /* Это однострочный комментарий */
  console.log("Hello world!");
}
comment();
```

Либо вы можете сделать многострочный комментарий, как показано здесь:

```js
function comment() {
  /* Этот комментарий располагается на нескольких линиях.
     Обратите внимание, что вам не нужно обрывать комментарий, пока вы его не закончите*/
  console.log("Hello world!");
}
comment();
```

Также, если пожелаете, то вы можете использовать такое комментирование посреди строки кода. Хотя это может ухудшить читабельность кода:

```js
function comment(x) {
  console.log("Hello " + x /* вставьте значение x */ + " !");
}
comment("world");
```

Чтобы отключить выполнение кода, просто оберните код в комментарий, как здесь:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

В этом случае `console.log()` никогда не выполнится, пока он внутри комментария. Таким способом можно отключить любое количество строк кода.

## Шебанг комментарии

Третий специализированный синтаксис комментариев, **шебанг комментарий**, в процессе стандартизации в ECMAScript (смотреть [Hashbang Grammar proposal](https://github.com/tc39/proposal-hashbang)).

Шебанг комментарий ведёт себя точно также как и однострочный (`//`) комментарий. Вместо этого, он начинается с `#!` и **действителен только в самом начале скрипта или модуля**. Обратите внимание, что никакие пробелы не разрешены перед `#!`. Комментарий состоит из всех символов после `#!` до конца первой строки; только такой комментарий разрешён.

Шебанг комментарий определяет путь к JavaScript интерпретатору, скрипт которого вы хотите выполнить. Пример, как это работает:

```js
#!/usr/bin/env node

console.log("Hello world");
```

> **Примечание:** Hashbang comments in JavaScript mimic [shebangs in Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) used to run files with proper interpreter.

> **Предупреждение:** Although [BOM](https://en.wikipedia.org/wiki/Byte_order_mark) before hashbang comment will work in a browser it is not advised to use BOM in a script with hasbang. BOM will not work when you try to run the script in Unix/Linux. So use UTF-8 without BOM if you want to run scripts directly from shell.

Для определения JavaScript интерпретатора используйте только `#!` . В любых других случаях используйте `//` (или многострочный комментарий).

## Ключевые слова

### Зарезервированные ключевые слова в ECMAScript 2015

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/switch", "case")}}
- `class`
- [`catch`](/ru/docs/Web/JavaScript/Reference/Statements/try...catch)
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/switch", "default")}}
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Statements/while", "do")}}
- [`else`](/ru/docs/Web/JavaScript/Reference/Statements/if...else)
- {{jsxref("Statements/export", "export")}}
- `extends`
- [`finally`](/ru/docs/Web/JavaScript/Reference/Statements/try...catch)
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/function", "function")}}
- [`if`](/ru/docs/Web/JavaScript/Reference/Statements/if...else)
- {{jsxref("Statements/import", "import")}}
- [`in`](/ru/docs/Web/JavaScript/Reference/Statements/for...in)
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Operators/this", "this")}}
- {{jsxref("Statements/throw", "throw")}}
- [`try`](/ru/docs/Web/JavaScript/Reference/Statements/try...catch)
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}
- `yield`

### Ключевые слова, зарезервированные на будущее

Следующие ключевые слова зарезервированы на будущее ECMAScript спецификацией. За ними сейчас не стоит никакой функциональности, но она может появиться в будущих версиях, поэтому эти ключевые слова не могут быть использованы, как идентификаторы. Эти ключевые слова не могут быть использованы даже в strict или non-strict режимах.

- `enum`
- `await`

Следующие ключевые слова зарезервированы для кода, который выполняется в strict режиме:

- `implements`
- `package`
- `protected`
- `static`
- `interface`
- `private`
- `public`

### Зарезервированные ключевые слова в более старых версиях

Перечисленные ниже ключевые слова зарезервированы для старых версий ECMAScript спецификаций (ECMAScript от 1 по 3).

- `abstract`
- `boolean`
- `byte`
- `char`
- `double`
- `final`
- `float`
- `goto`
- `int`
- `long`
- `native`
- `short`
- `synchronized`
- `transient`
- `volatile`

К тому же, литералы `null`, `true`, и `false` зарезервированы в ECMAScript для их обычной функциональности.

### Использование зарезервированных слов

Зарезервированные слова действительно применяются только к идентификаторам **(vs. IdentifierNames)**. Как описано в [es5.github.com/#A.1](http://es5.github.com/#A.1), это все имена IdentifierNames, которые не исключают зарезервированных слов.

```js
a.import
a["import"]
a = { import: "test" }.
```

С другой стороны, следующее выражение неправильно, т.к. Идентификатор `IdentifierName` не содержит зарезервированных слов. Идентификаторы используются для `FunctionDeclaration, FunctionExpression, VariableDeclaration` и т.п., в то время, как `IdentifierNames` используются для `MemberExpression, CallExpression` и т.п.

```js
function import() {} // неправильно.
```

## Литералы

### Литерал Null

Подробнее о `{{jsxref('Global_Objects/null','null')}}null`.

```js
null;
```

### Литерал Boolean

Подробнее о `{{jsxref('Global_Objects/Boolean','Boolean')}}`.

```js
true;
false;
```

### Литералы чисел

#### Decimal (десятичные числа)

```js
1234567890;
42;

// Будьте осторожны с использованием нуля вначале числа:

0888; // 888 распознается, как десятичное число
0777; // распознается, как восьмеричное число, 511 - как десятичное число
```

Имейте в виду, что литералы десятичных чисел могут начинаться с нуля (0), за которым следует другое десятичное число, но в случае, если число начинается с нуля и за ним идёт цифра меньше 8, то число будет распознано как восьмеричное. This won't throw in JavaScript, see {{bug(957513)}}. See also the page about `{{jsxref('Global_Objects/parseInt','parseInt()','Octal_interpretations_with_no_radix')}}`.

#### Binary (двоичные числа)

Синтаксис двоичных чисел состоит из цифры ноль, за которой следует маленькая или большая латинская буква "B" (0b или 0B). Этот синтаксис новый и появился только в ECMAScript 2015, пожалуйста посмотрите таблицу совместимости с браузерами. Это может производить ошибку `{{jsxref('Global_Objects/SyntaxError','SyntaxError')}}`: "Missing binary digits after 0b", Если цифры не 0 или 1.

```js
var FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0b00000000011111111111111111111111; // 8388607
```

#### Octal (восьмеричные числа)

Восьмеричный числовой синтаксис, который использует 0 с последующей, в нижнем или верхнем регистре, латинскую букву "О" (`0o` или `0O)`. Этот синтаксис появился в ECMAScript 2015, пожалуйста, посмотрите таблицу совместимости с браузерами. Это может производить ошибку `SyntaxError`: "Missing octal digits after 0o", если цифры не между 0 и 7.

```js
var n = 0o755; // 493
var m = 0o644; // 420

// Так же возможно с лидирующими нулями (см. заметку о десятичных дробях выше)
0755;
0644;
```

#### Hexadecimal (шестнадцатеричные числа)

Шестнадцатеричный числовой синтаксис, который использует 0 с последующей, в нижнем или верхнем регистре, латинскую букву "X" (`0x` или `0X)`. Если числа после 0x вне диапазона (0123456789ABCDEF), то может последовать за этим {{jsxref("SyntaxError")}}: "Identifier starts immediately after numeric literal".

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

### Литерал Object (Объект)

Смотрите также {{jsxref("Object")}} и {{jsxref('Operators/Object_initializer','Object initializer')}} для получения более подробной информации.

```js
var o = { a: "foo", b: "bar", c: 42 };

// сокращённая нотация. Появилась в ES2015
var a = "foo",
  b = "bar",
  c = 42;
var o = { a, b, c };
// вместо
var o = { a: a, b: b, c: c };
```

### Литерал Array (Массив)

Смотрите также {{jsxref("Array")}} для получения более подробной информации.

```js
[1954, 1974, 1990, 2014];
```

### Литерал String (Строка)

```js-nolint
'foo';
"bar";
```

#### Экранирование шестнадцатеричной последовательности

```js
"\xA9"; // "©"
```

#### Экранирование Юникод символов

Для экранирования Юникод символов обязательно нужно указать по крайней мере 4 символа после \u.

```js
"\u00A9"; // "©"
```

#### Unicode code point escapes

Новое в ECMAScript 2015. With Unicode code point escapes, any character can be escaped using hexadecimal numbers so that it is possible to use Unicode code points up to `0x10FFFF`. With simple Unicode escapes it is often necessary to write the surrogate halves separately to achieve the same.

See also {{jsxref("String.fromCodePoint()")}} or {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}";

// the same with simple Unicode escapes
"\uD87E\uDC04";
```

### Литерал Регулярного выражения

Смотрите также `{{jsxref('Global_Objects/RegExp','RegExp')}}` для получения более подробной информации.

```js
/ab+c/g

// An "empty" regular expression literal
// The empty non-capturing group is necessary
// to avoid ambiguity with single-line comments.
/(?:)/
```

### Литерал Шаблона

Смотрите также {{jsxref('template_strings','template strings')}} для получения более подробной информации.

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## Автоматическая вставка "точки с запятой"

Некоторые {{jsxref('Statements','JavaScript условия')}} должны быть завершены точкой с запятой и поэтому на них влияет автоматическая вставка точки с запятой (ASI):

- Пустое условие
- `let`, `const`, переменные
- `import`, `export`, объявление модулей
- Оператор-выражение
- `debugger`
- `continue`, `break`, `throw`
- `return`

1\. Точка с запятой ставится до, когда ограничитель строки или "}" is encountered that is not allowed by the grammar.

```js
{ 1 2 } 3

// согласно ASI, будет преобразовано в

{ 1 2 ;} 3;
```

2\. Точка с запятой ставится в конце, когда обнаружен конец вводимой строки токенов и парсер is unable to parse the single input stream as a complete program.

Here `++` is not treated as a {{jsxref('Operators/Arithmetic_Operators','postfix operator','Increment')}} applying to variable `b`, because a line terminator occurs between `b` and `++`.

```js-nolint
a = b
++c

// согласно ASI, будет преобразовано в

a = b;
++c;
```

3\. Точка с запятой вставляется в конце, когда согласно инструкции с ограниченным производством в грамматике следует ограничитель строки. Эти утверждения с правилами «no LineTerminator here» здесь:

- PostfixExpressions (`++` and `--`)
- `continue`
- `break`
- `return`
- `yield`, `yield*`
- `module`

```js-nolint
return
a + b

// согласно ASI, будет преобразовано в

return;
a + b;
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Особенности Firefox

- Prior to Firefox 5 (JavaScript 1.8.6), future reserved keywords could be used when not in strict mode. This ECMAScript violation was fixed in Firefox 5.

## Смотрите также

- [Jeff Walden: Двоичные и восьмеричные числа](http://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/)
- [Mathias Bynens: JavaScript character escape sequences](http://mathiasbynens.be/notes/javascript-escapes)
- {{jsxref("Boolean")}}
- {{jsxref("Number")}}
- {{jsxref("RegExp")}}
- {{jsxref("String")}}
