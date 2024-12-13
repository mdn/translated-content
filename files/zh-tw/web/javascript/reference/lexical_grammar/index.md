---
title: Lexical grammar
slug: Web/JavaScript/Reference/Lexical_grammar
---

{{JsSidebar("More")}}

此篇介紹 Javascript 的 lexical grammar。ECMAScript 的原始碼從左到右被掃描並被轉換成一系列的輸入元素也就是 token、控制字元、行終止字元、註解或是空白字元。ECMAScript 也定義了一些特定的關鍵字和實體語法還有用來自動插入分號來結束陳述式的規則。

## 控制字元

控制字元是用來控制對文本的解釋，但無法被顯示出來。

| 編碼位置 | 名稱           | 縮寫    | 說明                                                                                                                      |
| -------- | -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| `U+200C` | 零寬不連字     | \<ZWNJ> | 放置在兩個字元之間來避免在某些語言中這兩個字元被當成連字（[維基百科](https://zh.wikipedia.org/wiki/零宽不连字)）          |
| `U+200D` | 零寬連字       | \<ZWJ>  | 放置在兩個通常不會發生連字的字元中間在某些語言 來讓他們成為連字（[維基百科](https://zh.wikipedia.org/wiki/零宽连字)）     |
| `U+FEFF` | 位元組順序記號 | \<BOM>  | 出現在腳本的開頭，用來標記此腳本是否為 Unicode 還有文本的位元組順序（[維基百科](https://zh.wikipedia.org/wiki/端序記號)） |

## 空白字元

空白字元提升了程式碼的可讀性也能將 tokens 分開。這些字元通常對程式的執行是不必要的。[壓縮源碼工具](https://zh.wikipedia.org/wiki/極簡化)通常會移除不必要的空白來減少資料傳輸量。

| 編碼位置 | 名稱                  | 縮寫    | 說明                                                                                                 | 跳脫字元 |
| -------- | --------------------- | ------- | ---------------------------------------------------------------------------------------------------- | -------- |
| U+0009   | 定位字元              | \<HT>   | 橫向定位字元                                                                                         | \t       |
| U+000B   | 縱向定位字元          | \<VT>   | 縱向定位字元                                                                                         | \v       |
| U+000C   | 換頁字元              | \<FF>   | 控制換頁字元（[維基百科](https://en.wikipedia.org/wiki/Page_break#Form_feed)）                       | \f       |
| U+0020   | 空格                  | \<SP>   | 一般的空白字元                                                                                       |          |
| U+00A0   | 不中斷空格            | \<NBSP> | 一般的空白字元，但禁止自動換行或合併多個空白（[維基百科](https://zh.wikipedia.org/wiki/不换行空格)） |          |
| 其他     | 其他 Unicode 空白字元 | \<USP>  | [維基百科](https://zh.wikipedia.org/wiki/空格#Unicode定義)                                           |          |

## 行終止字元

除了空白字元之外，行終止字元也用來提升源碼可讀性。然而，在某些情況下行終止字元會影響 Javascript 程式的執行，所以有些地方是被禁止使用的。行終止字元同時也會影響[自動插入分號](#automatic_semicolon_insertion)的運作。在[正規表達式](/zh-TW/docs/Web/JavaScript/Guide/Regular_expressions)中，行終止字元屬於 **\s** 的類別。

在 ECMAScript 中，只有以下的 Unicode 碼位被視為行終止字元，其他如 Next Line, NEL, U+0085 等的行終止字元被視為空白字元。

| 編碼位置 | 名稱       | 縮寫  | 說明                                           | 跳脫字元 |
| -------- | ---------- | ----- | ---------------------------------------------- | -------- |
| U+000A   | 換行字元   | \<LF> | 在 UNIX 類的系統中的換行字元                   | \n       |
| U+000D   | 歸位字元   | \<CR> | 在 Commodore 與早期的 Mac 系統中的換行字元     | \r       |
| U+2028   | 行分隔字元 | \<LS> | [維基百科](https://zh.wikipedia.org/wiki/換行) |          |
| U+2029   | 段分隔字元 | \<PS> | [維基百科](https://zh.wikipedia.org/wiki/換行) |          |

## 註解

在 Javascript 程式中，註解通常被用來寫提示、註釋、建議或警告。這可以讓程式更好讀也更好理解，同時也是一個很好的除錯工具，可以讓一些程式碼不被執行。

Javascript 有兩種方式寫註解。

第一種是 `//`; 它將在它之後的文本變成註解。例如：

```js
function comment() {
  // 這是一行 Javascript 註解
  console.log("Hello world!");
}
comment();
```

第二種更有彈性的方式是 `/* */` 。

例如，你可以將它用在單行上：

```js
function comment() {
  /* 這是一行 Javascript 註解 */
  console.log("Hello world!");
}
comment();
```

你也可以將它用來寫多行註解：

```js
function comment() {
  /* 這個註解可以跨越多行。注意只有當我們要結束註解時才寫
     多行註解的終止符號 */
  console.log("Hello world!");
}
comment();
```

如果你想要你也可以把它插在一行的中央，雖然它會讓你的程式變得難讀所以請謹慎使用：

```js
function comment(x) {
  console.log("Hello " + x /* 插入 x 的值 */ + " !");
}
comment("world");
```

此外，你也可以把一段程式用註解包起來讓它不被執行：

```js
function comment() {
  /* console.log('Hello world!'); */
}
comment();
```

在這個情況， `console.log()` 永遠不會被呼叫因為它在註解裡面。任意行數的程式碼都可以用這個方法來使之失去作用。

## 保留字

### ECMAScript 2015 保留關鍵字

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

### 未來保留關鍵字

根據 ECMAScript 的規格，以下的關鍵字被保留供未來使用。他們目前沒有功用但未來可能有，所以不能將他們用作識別字。

以下關鍵字將永遠被保留：

- `enum`

以下關鍵字只有在嚴格模式底下才被保留：

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`

以下關鍵字只有在出現在模組程式碼中時才被保留：

- `await`

#### 舊標準中的未來保留關鍵字

以下關鍵字在舊的 ECMAScript 規格中 (ECMAScript 1 到 3) 為未來保留關鍵：

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

此外，如 `null`, `true` 與 `false` 等實體語法 (literal) 在 ECMAScript 中不能被用作識別字。

### 保留字的使用

只有當用在識別字的時候保留關鍵字才會被保留 (相對於 `IdentifierNames`) 。如 [es5.github.com/#A.1](http://es5.github.com/#A.1) 所述，以下保留關鍵字的用法都屬於`IdentifierNames` 因此是合法的。

```js
a.import
a['import']
a = { import: 'test' }.
```

反之，以下用法不合法因為用在識別字上，識別字屬於 `IdentifierName` 但不包含保留字。識別字用在 `FunctionDeclaration, FunctionExpression, VariableDeclaration` 等等?。而 `IdentifierName` 被用在 `MemberExpression, CallExpression` 等等。

```js
function import() {} // 不合法.
```

## 實體語法

### Null

更多說明請參閱 [`null`](/zh-TW/docs/Web/JavaScript/Reference/Operators/null) 。

```js-nolint
null
```

### 布林值

更多說明請參閱 [`Boolean`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 。

```js-nolint
true
false
```

### 數值

#### 十進制

```js-nolint
1234567890
42

// 謹慎使用前導零
0888 // 888 被解析成十進制
0777 // 被解析成八進制, 十進制值為 511
```

數值的實體語法可以可以以零 (`0`) 為首再街上其他十進制數字。然而一但零後面的的數字都小於 8 時，這個數值會被解讀成八進制數字，這個行為不會丟出例外，請參閱 [Firefox bug 957513](https://bugzil.la/957513)。也請參閱 [`parseInt()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/parseInt#octal_interpretations_with_no_radix)。

#### 二進制

二進制數字的語法為一個起首零加上小寫或大小的拉丁字元「B」（`0b` 或 `0B`）。因為這個語法是在 ECMAScript 2015 才新增的，請參閱底下的瀏覽器相容表。如果 `0b` 之後的數字不是 0 或 1，「0b 之後找不到二進制數字」的 [`SyntaxError`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) 會被丟出。

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### 八進制

八進制數字的語法為一個起首零加上小寫或大小的拉丁字元「O」（`0o` 或 `0O`）。因為這個語法是在 ECMAScript 2015 才新增的，請參閱底下的瀏覽器相容表。如果 `0o` 之後的數字不是（01234567）其中之一，「0o 之後找不到八進制數字」的 SyntaxError 會被丟出。

```js-nolint
0O755 // 493
0o644 // 420
```

#### 十六進制

十六進制數字的語法為一個起首零加上小寫或大小的拉丁字元"X" (`0x` 或 `0X`)。如果 `0x` 之後的數字不是 (0123456789ABCDEF) 其中之一，"識別字緊接在數值實體語法後"的 SyntaxError 會被丟出。

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

### 物件

更多說明請參閱 {{jsxref("Object")}} 及 [Object initializer](/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer)。

```js
var o = { a: "foo", b: "bar", c: 42 };

// 簡短表示法 (ES2015 新增)
var a = "foo",
  b = "bar",
  c = 42;
var o = { a, b, c };

// ES2015 以前必須這樣寫
var o = { a: a, b: b, c: c };
```

### 陣列

更多說明請參閱 {{jsxref("Array")}} 。

```js-nolint
[1954, 1974, 1990, 2014]
```

### 字串

```js-nolint
'foo'
"bar"
```

#### 十六進制跳脫序列

```js-nolint
"\xA9" // "©"
```

#### Unicode 跳脫序列

一個 Unicode 跳脫序列由 `\u` 接上 4 個十六進制的數值所組成。每一個十六進制的數值表示一個 UTF-16 編碼的 2 位元組字元。對於編碼位置在 0\~FFFF 之間的字元，其 Unicode 表示法與編碼位置相同。而更高的編碼位置需要兩個跳脫序列來表示，又稱為代理對(surrogate pair)，代理對表示的數值與編碼位置不同 ([代理對計算規則 wiki](https://en.wikipedia.org/wiki/UTF-16))。

```js-nolint
"\u00A9" // "©"
```

#### Unicode 跳脫編碼位置

ECMAScript 2015 新增。使用 Unicode 跳脫編碼位置表示法，即可使用與編碼位置完全相同的表示法 (最高到 `0x10FFFF`) 而不受編碼位置高於 FFFF 需用代理對表示的限制。

更多說明請參閱 {{jsxref("String.fromCodePoint()")}} 或 {{jsxref("String.prototype.codePointAt()")}}。

```js-nolint
"\u{2F804}"

// 等價於代理對表示法
"\uD87E\uDC04"
```

### 正規表達式

更多說明請參閱 [`RegExp`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 。

```js
/ab+c/g

// 一個空的正規表示法。
// 兩個斜線之間不得為空，否則將被視為單行註解。
/(?:)/
```

### 範本字串

更多說明請參閱 [template strings](/zh-TW/docs/Web/JavaScript/Reference/Template_literals) 。

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag `string text ${expression} string text`
```

## 自動插入分號

否些 [JavaScript statements](/zh-TW/docs/Web/JavaScript/Reference/Statements) 必須以分號作結，因此會受到自動插入分號 (ASI) 規則影響。

- 空運算式
- `let`, `const`, 變數宣告
- `import`, `export`, 模組宣告
- 運算式
- `debugger`
- `continue`, `break`, `throw`
- `return`

ECMAScript 規格闡明 [自動插入分號的三個規則](https://tc39.es/ecma262/#sec-rules-of-automatic-semicolon-insertion)。

1\. 如果 [行終止字元](#line_terminators) 或 "}" 出現在不符文法的地方，一個分號會被自動插入在其之前。

```js
{ 1 2 } 3

// 會被 ASI 轉換成

{ 1 2 ;} 3;
```

2\. 當一個 token 輸入流到了結尾而解析器仍然無法將其解析為一個完整的程式，一個分號會被自動插入於其後。

在這裡 `++` 並不會被當作作用於變數`b`的 [後綴運算元](/zh-TW/docs/Web/JavaScript/Reference/Operators#increment)，因為行終止字元出現在`b` 和 `++`之間。

```js-nolint
a = b
++c

// 會被 ASI 轉換成

a = b;
++c;
```

3\. 當一個運算式中出現 restricted productions 後面接著一個行終止元，一個分號會被自動插入於行終止元之前。以下這些陳述式有"不允許出現行終止元"規則：

- 後綴運算式 (`++` and `--`)
- `continue`
- `break`
- `return`
- `yield`, `yield*`
- `module`

```js-nolint
return
a + b

// 會被 ASI 轉換成

return;
a + b;
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參閱

- [Jeff Walden: Binary and octal numbers](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/)
- [Mathias Bynens: JavaScript character escape sequences](https://mathiasbynens.be/notes/javascript-escapes)
- {{jsxref("Boolean")}}
- {{jsxref("Number")}}
- {{jsxref("RegExp")}}
- {{jsxref("String")}}
