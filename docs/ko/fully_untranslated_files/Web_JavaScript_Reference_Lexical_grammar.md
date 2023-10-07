---
title: 어휘 문법
slug: Web/JavaScript/Reference/Lexical_grammar
---

{{JsSidebar("More")}}

이 페이지는 JavaScript의 어휘 문법(lexical grammar)을 설명합니다. ECMAScript 소스 본문은 왼쪽에서 오른쪽 방향으로 분석되고 토큰, 제어문자, 줄바꿈, 주석, 또는 공백으로 구성되는 입력 요소 시퀀스로 바뀝니다. 또한 ECMAScript는 특별한 키워드와 리터럴을 정의하고 있으며 명령문 끝에 자동으로 세미콜론을 추가하는 규칙이 있습니다.

## 제어 문자

제어 문자는 눈에 보이지 않지만 스크립트 소스 본문 해석을 제어하는 데 사용됩니다.

<table class="standard-table">
  <caption>
    유니코드 형식 제어 문자
  </caption>
  <tbody>
    <tr>
      <th>코드 포인트</th>
      <th>이름</th>
      <th>축약형</th>
      <th>설명</th>
    </tr>
    <tr>
      <td><code>U+200C</code></td>
      <td>Zero width non-joiner</td>
      <td>&#x3C;ZWNJ></td>
      <td>
        <p>
          특정 언어에서 문자들이 연결선으로 묶이지 않게 하기 위해 문자 사이에
          위치한다(<a href="http://en.wikipedia.org/wiki/Zero-width_non-joiner"
            >Wikipedia</a
          >).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>U+200D</code></td>
      <td>Zero width joiner</td>
      <td>&#x3C;ZWJ></td>
      <td>
        <p>
          특정 언어에서, 보통은 연결되지 않는 문자이나 해당 문자를 연결된 형태로
          그리기 위해서(to be rendered) 사용하며 문자 사이에 위치한다(<a
            href="http://en.wikipedia.org/wiki/Zero-width_joiner"
            >Wikipedia</a
          >).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>U+FEFF</code></td>
      <td>Byte order mark</td>
      <td>&#x3C;BOM></td>
      <td>
        <p>
          스크립트 맨 앞에 두어 스크립트 본문의 byte order와 유니코드를 표시하는
          데에 사용한다.(<a href="http://en.wikipedia.org/wiki/Byte_order_mark"
            >Wikipedia</a
          >).
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 공백

공백 문자는 소스 본문을 읽기 좋게 만들고 토큰을 구분합니다. 이 공백 문자들은 보통 코드의 기능에 필요한 것은 아닙니다. 최소화 도구([Minification tools](http://en.wikipedia.org/wiki/Minification_%28programming%29))는 종종 전송해야하는 데이터 크기를 줄이기 위해서 공백을 제거합니다.

| 코드 포인트 | 이름                           | 축약형  | 설명                                                                                                     | 이스케이프 시퀀스 |
| ----------- | ------------------------------ | ------- | -------------------------------------------------------------------------------------------------------- | ----------------- |
| U+0009      | Character tabulation           | \<HT>   | Horizontal tabulation                                                                                    | \t                |
| U+000B      | Line tabulation                | \<VT>   | Vertical tabulation                                                                                      | \v                |
| U+000C      | Form feed                      | \<FF>   | Page breaking control character ([Wikipedia](http://en.wikipedia.org/wiki/Page_break#Form_feed)).        | \f                |
| U+0020      | Space                          | \<SP>   | Normal space                                                                                             |                   |
| U+00A0      | No-break space                 | \<NBSP> | Normal space, but no point at which a line may break                                                     |                   |
| Others      | Other Unicode space characters | \<USP>  | [Spaces in Unicode on Wikipedia](http://en.wikipedia.org/wiki/Space_%28punctuation%29#Spaces_in_Unicode) |                   |

## 개행 문자

공백문자와 더불어, 개행 문자는 소스 본문의 가독성을 향상시킵니다. 하지만, 몇몇 상황에서 개행 문자는 코드 내부에 숨겨지기 때문에 자바스크립트 코드 실행에 영향을 미칩니다. 개행 문자는 자동 새미콜론 삽입([automatic semicolon insertion](#Automatic_semicolon_insertion)) 규칙에도 영향을 줍니다. 개행 문자는 표준 표현방식([regular expressions](/ko/docs/Web/JavaScript/Guide/Regular_Expressions))의 클래스인 \s로 매치됩니다.

아래의 유니코드 문자만이 ECMAScript에서 라인 종결자로 다뤄지며, 라인을 바꾸는 다른 문자들은 공백으로 생각하시면 됩니다(예를 들어, Next Line, NEL, U+0085는 공백으로 간주).

| 코드 포인트 | 이름                | 축약형 | 설명                                                   | 이스케이프 시퀀스 |
| ----------- | ------------------- | ------ | ------------------------------------------------------ | ----------------- |
| U+000A      | Line Feed           | \<LF>  | New line character in UNIX systems.                    | \n                |
| U+000D      | Carriage Return     | \<CR>  | New line character in Commodore and early Mac systems. | \r                |
| U+2028      | Line Separator      | \<LS>  | [Wikipedia](http://en.wikipedia.org/wiki/Newline)      |                   |
| U+2029      | Paragraph Separator | \<PS>  | [Wikipedia](http://en.wikipedia.org/wiki/Newline)      |                   |

## 주석

주석은 힌트, 필기, 제안이나 주의할 점들을 자바스크립트 코드에 넣을 때 사용합니다. 이는 더 쉽게 읽고 이해할 수 있게 도와줍니다. 또한 특정 코드가 실행되지 않도록 막아주기도 합니다. 따라서 주석은 유용한 디버깅 도구라고도 할 수 있습니다.

자바스크립트에는 코드 속에 주석을 쓰는 두 가지 방식이 있습니다.

첫 번째, '//'로 첨언하기입니다. 이는 아래의 예시처럼 같은 줄에 있는 모든 코드를 주석으로 바꿉니다.

```js
function comment() {
  // 자바스크립트의 각주 한 줄입니다.
  console.log("Hello world!");
}
comment();
```

두 번째, 좀 더 유연하게 쓸 수 있는 '/\* \*/'로 첨언하기입니다.

예를 들면, 한 줄에 첨언할 때는 이렇게 쓸 수 있습니다 :

```js
function comment() {
  /* 자바스크립트 각주 한 줄입니다. */
  console.log("Hello world!");
}
comment();
```

여러 줄로 첨언할 때는, 이렇게 씁니다 :

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

원한다면, 라인 중간에도 사용할 수 있습니다. 물론 코드의 가독성이 떨어지게 됩니다. 그러니 주의를 기울여 사용해야 합니다:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

게다가, 코드 실행을 막기 위해 코드를 무용화 시키는데도 사용할 수 있습니다. 아래처럼 코드를 코멘트로 감싸는 거죠:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In this case, the `console.log()` call is never issued, since it's inside a comment. Any number of lines of code can be disabled this way.

## 해시뱅 주석

A specialized third comment syntax, the **hashbang comment**, is in the process of being standardized in ECMAScript (see the [Hashbang Grammar proposal](https://github.com/tc39/proposal-hashbang)).

A hashbang comment behaves exactly like a single line-only (`//`) comment, but it instead begins with `#!` and **is only valid at the absolute start of a script or module**. Note also that no whitespace of any kind is permitted before the `#!`. The comment consists of all the characters after `#!` up to the end of the first line; only one such comment is permitted.

The hashbang comment specifies the path to a specific JavaScript interpreter
that you want to use to execute the script. An example is as follows:

```js
#!/usr/bin/env node

console.log("Hello world");
```

> **Note:** Hashbang comments in JavaScript mimic [shebangs in Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) used to run files with proper interpreter.

> **Warning:** Although [BOM](https://en.wikipedia.org/wiki/Byte_order_mark) before hashbang comment will work in a browser it is not advised to use BOM in a script with hasbang. BOM will not work when you try to run the script in Unix/Linux. So use UTF-8 without BOM if you want to run scripts directly from shell.

You must only use the `#!` comment style to specify a JavaScript interpreter. In all other cases just use a `//` comment (or mulitiline comment).

## 키워드

### ECMAScript 2015 기준 예약 키워드

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/switch", "case")}}
- {{jsxref("Statements/try...catch", "catch")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/default", "default")}}
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Statements/do...while", "do")}}
- {{jsxref("Statements/if...else", "else")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/class", "extends")}}
- {{jsxref("Statements/try...catch", "finally")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/if...else", "if")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Operators/this", "this")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Operators/yield", "yield")}}

### 확장 예약 키워드

The following are reserved as future keywords by the ECMAScript specification. They have no special functionality at present, but they might at some future time, so they cannot be used as identifiers.

These are always reserved:

- `enum`

The following are only reserved when they are found in strict mode code:

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`

The following are only reserved when they are found in module code:

- `await`

#### 구형 표준의 확장 예약 키워드

The following are reserved as future keywords by older ECMAScript specifications (ECMAScript 1 till 3).

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
- `throws`
- `transient`
- `volatile`

Additionally, the literals `null`, `true`, and `false` cannot be used as identifiers in ECMAScript.

### 예약어 사용법

Reserved words actually only apply to Identifiers (vs. `IdentifierNames`) . As described in [es5.github.com/#A.1](http://es5.github.com/#A.1), these are all `IdentifierNames` which do not exclude `ReservedWords`.

```js
a.import
a['import']
a = { import: 'test' }.
```

On the other hand the following is illegal because it's an `Identifier`, which is an `IdentifierName` without the reserved words. Identifiers are used for `FunctionDeclaration, FunctionExpression, VariableDeclaration` and so on. `IdentifierNames` are used for `MemberExpression, CallExpression` and so on.

```js
function import() {} // Illegal.
```

## 리터럴

### Null 리터럴

See also [`null`](/ko/docs/Web/JavaScript/Reference/Global_Objects/null) for more information.

```js
null;
```

### 불리언 리터럴

See also [`Boolean`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean) for more information.

```js
true;
false;
```

### 숫자 리터럴

#### 10진법

```js
1234567890;
42;

// Caution when using with a leading zero:
0888; // 888 parsed as decimal
0777; // parsed as octal, 511 in decimal
```

Note that decimal literals can start with a zero (`0`) followed by another decimal digit, but If all digits after the leading `0` are smaller than 8, the number is interpreted as an octal number. This won't throw in JavaScript, see [Firefox bug 957513](https://bugzil.la/957513). See also the page about [`parseInt()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt#Octal_interpretations_with_no_radix).

##### Exponential

The decimal exponential literal is specified by the following format: `beN`; where `b` is a base number (integer or floating), followed by `e` char (which serves as separator or _exponent indicator_) and _`N`_, which is _exponent_ or _power_ number – a signed integer (as per 2019 ECMA-262 specs):

```
    0e-5   // => 0
    0e+5   // => 0
    5e1    // => 50
    175e-2 // => 1.75
    1e3    // => 1000
    1e-3   // => 0.001
```

#### 2진법

Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (`0b` or `0B`). Because this syntax is new in ECMAScript 2015, see the browser compatibility table, below. If the digits after the `0b` are not 0 or 1, the following [`SyntaxError`](/ko/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) is thrown: "Missing binary digits after 0b".

```js
var FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0b00000000011111111111111111111111; // 8388607
```

#### 8진법

Octal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O" (`0o` or `0O)`. Because this syntax is new in ECMAScript 2015, see the browser compatibility table, below. If the digits after the `0o` are outside the range (01234567), the following [`SyntaxError`](/ko/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) is thrown: "Missing octal digits after 0o".

```js
var n = 0o755; // 493
var m = 0o644; // 420

// Also possible with just a leading zero (see note about decimals above)
0755;
0644;
```

#### 16진법

Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (`0x` or `0X)`. If the digits after 0x are outside the range (0123456789ABCDEF), the following [`SyntaxError`](/ko/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) is thrown: "Identifier starts immediately after numeric literal".

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

#### BigInt literal

The {{jsxref("BigInt")}} type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. BigInt literals are created by appending `n` to the end of an integer.

```
    123456789123456789n     // 123456789123456789
    0o777777777777n         // 68719476735
    0x123456789ABCDEFn      // 81985529216486895‬
    0b11101001010101010101n // 955733
```

Note that legacy octal numbers with just a leading zero won't work for `BigInt`:

```plain example-bad
// 0755n
// SyntaxError: invalid BigInt syntax
```

For octal `BigInt` numbers, always use zero followed by the letter "o" (uppercase or lowercase):

```plain example-good
0o755n
```

For more information about `BigInt`, see also [JavaScript data structures](/ko/docs/Web/JavaScript/Data_structures#BigInt_type).

#### Numeric separators

To improve readability for numeric literals, underscores (`_`, `U+005F`) can be used as separators:

```
    // separators in decimal numbers
    1_000_000_000_000
    1_050.95

    // separators in binary numbers
    0b1010_0001_1000_0101

    // separators in octal numbers
    0o2_2_5_6

    // separators in hex numbers
    0xA0_B0_C0

    // separators in BigInts
    1_000_000_000_000_000_000_000n
```

Note these limitations:

```plain example-bad
// More than one underscore in a row is not allowed
100__000; // SyntaxError

// Not allowed at the end of numeric literals
100_; // SyntaxError

// Can not be used after leading 0
0_1; // SyntaxError
```

### 객체 리터럴

See also {{jsxref("Object")}} and [Object initializer](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer) for more information.

```js
var o = { a: "foo", b: "bar", c: 42 };

// shorthand notation. New in ES2015
var a = "foo",
  b = "bar",
  c = 42;
var o = { a, b, c };

// instead of
var o = { a: a, b: b, c: c };
```

### 배열 리터럴

See also {{jsxref("Array")}} for more information.

```js
[1954, 1974, 1990, 2014];
```

### 문자열 리터럴

A string literal is zero or more Unicode code points enclosed in single or double quotes. Unicode code points may also be represented by an escape sequence. All code points may appear literally in a string literal except for these closing quote code points:

- U+005C (backslash),
- U+000D \<CR>,
- and U+000A \<LF>.

Prior to the [proposal to make all JSON text valid ECMA-262](https://github.com/tc39/proposal-json-superset), U+2028 \<LS> and U+2029 \<PS>, were also disallowed from appearing unescaped in string literals.

Any code points may appear in the form of an escape sequence. String literals evaluate to ECMAScript String values. When generating these String values Unicode code points are UTF-16 encoded.

```js-nolint
'foo';
"bar";
```

#### 16진수 이스케이프 시퀀스

Hexadecimal escape sequences consist of `\x` followed by exactly two hexadecimal digits representing a code unit or code point in the range 0x0000 to 0x00FF.

```js
"\xA9"; // "©"
```

#### 유니코드 이스케이프 시퀀스

A Unicode escape sequence consists of exactly four hexadecimal digits following `\u`. It represents a code unit in the UTF-16 encoding. For code points U+0000 to U+FFFF, the code unit is equal to the code point. Code points U+10000 to U+10FFFF require two escape sequences representing the two code units (a surrogate pair) used to encode the character; the surrogate pair is distinct from the code point.

See also {{jsxref("String.fromCharCode()")}} and {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### 유니코드 코드 포인트 시퀀스

A Unicode code point escape consists of `\u{`, followed by a code point in hexadecimal base, followed by `}`. The value of the hexadecimal digits must be in the range 0 and 0x10FFFF inclusive. Code points in the range U+10000 to U+10FFFF do not need to be represented as a surrogate pair. Code point escapes were added to JavaScript in ECMAScript 2015 (ES6).

See also {{jsxref("String.fromCodePoint()")}} and {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### 정규 표현식 리터럴

See also [`RegExp`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp) for more information.

```js
/ab+c/g

// An "empty" regular expression literal
// The empty non-capturing group is necessary
// to avoid ambiguity with single-line comments.
/(?:)/
```

### 템플릿 리터럴

See also [template strings](/ko/docs/Web/JavaScript/Reference/template_strings) for more information.

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## 자동 세미콜론 삽입

Some [JavaScript statements](/ko/docs/Web/JavaScript/Reference/Statements) must be terminated with semicolons and are therefore affected by automatic semicolon insertion (ASI):

- Empty statement
- `let`, `const`, variable statement
- `import`, `export`, module declaration
- Expression statement
- `debugger`
- `continue`, `break`, `throw`
- `return`

The ECMAScript specification mentions [three rules of semicolon insertion](https://tc39.github.io/ecma262/#sec-rules-of-automatic-semicolon-insertion).

1. A semicolon is inserted before, when a [Line terminator](#Line_terminators) or "}" is encountered that is not allowed by the grammar.

   ```js-nolint
   { 1 2 } 3

   // is transformed by ASI into

   { 1 2 ;} 3;
   ```

2. A semicolon is inserted at the end, when the end of the input stream of tokens is detected and the parser is unable to parse the single input stream as a complete program.

   Here `++` is not treated as a [postfix operator](/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment) applying to variable `b`, because a line terminator occurs between `b` and `++`.

   ```js-nolint
   a = b
   ++c

   // is transformend by ASI into

   a = b;
   ++c;
   ```

3. A semicolon is inserted at the end, when a statement with restricted productions in the grammar is followed by a line terminator. These statements with "no LineTerminator here" rules are:

   - PostfixExpressions (`++` and `--`)
   - `continue`
   - `break`
   - `return`
   - `yield`, `yield*`
   - `module`

   ```js-nolint
   return
   a + b

   // is transformed by ASI into

   return;
   a + b;
   ```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Boolean")}}
- {{jsxref("Number")}}
- {{jsxref("RegExp")}}
- {{jsxref("String")}}
- [Jeff Walden: Binary and octal numbers](http://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/)
- [Mathias Bynens: JavaScript character escape sequences](http://mathiasbynens.be/notes/javascript-escapes)
