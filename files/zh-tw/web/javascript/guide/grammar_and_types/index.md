---
title: 語法與型別
slug: Web/JavaScript/Guide/Grammar_and_types
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

本章討論 JavaScript 的基本語法與基礎資料類型、包括變數、常數、字元常數

## 基礎知識

JavaScript 許多基本語法借鑒自 Java，C 或是 C++，但亦受 Awk、Perl 和 Python 的影響。

JavaScript 是 Case-sensitive（區分大小寫）並使用 Unicode 編碼。舉例來說，Früh (德文的"early") 可以當作變數的名稱。

```plain
var Früh = "foobar";
```

但變數 früh 並不等於 Früh，因為大小寫對 JavaScript 是有區別的。

在 JavaScript 中，每行指令被稱為 {{Glossary("Statement", "Statements")}}，並用分號（;）分隔。空格、Tab 與換行符號皆被視為空白。JavaScript 的文件會從左到右進行掃描，並轉換成一系列的元素，像是令牌（Token）、控制字符（Control characters）、換行器（line terminators）、註解（Comments）或是空白（Withespace），ECMAScript 也定義了特定的保留字和字面值，並在每個沒有加分號的 Statement 自動加上分號。然而，推薦的作法還是在每個 Statement 的結尾自行加上分號，以防止一些潛在的副作用，如果需要更多資訊，可以參考[這篇](/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar)。

## 註解（Comments）

註解語法跟 C++ 和其他語言相同：

```js
// a one line comment

/* this is a longer,
   multi-line comment
 */

/* You can't, however, /* nest comments */ SyntaxError */
```

## 宣告（Declarations）

JavaScript 有三種宣告方式

- {{jsxref("Statements/var", "var")}}
  - : 宣告一個可隨意更改其內容的變數
- {{jsxref("Statements/let", "let")}}
  - : 宣告一個可隨意更改其內容的區塊區域變數
- {{jsxref("Statements/const", "const")}}
  - : 宣告一個只可讀取的不可變常數

### 變數（Variables）

變數（variable）是對值（value）的引用，變數的名稱被稱為 {{Glossary("Identifier", "identifiers")}} 需要遵從一定的規則。

在 JavaScript 中，變數必須使用字母（letter）、下底線（\_）、錢號（$）作為開頭；後面的字員組成可以包含數字（0-9）。JavaScript 是區分大小寫（case sensitive）的，大寫字母（'A' \~ 'Z'）和小寫字母（'a' \~ 'z'）皆可使用且不相等。

You can use most of ISO 8859-1 or Unicode letters such as å and ü in identifiers (for more details see [this blog post](https://mathiasbynens.be/notes/javascript-identifiers-es6)). You can also use the [Unicode escape sequences](/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals) as characters in identifiers.

Some examples of legal names are `Number_hits`, `temp99`, `$credit`, and `_name`.

### 定義變數

你可以透過三種方式來定義變數：

- 透過保留字 {{jsxref("Statements/var", "var")}} 來定義變數，舉例來說： `var x = 42`，這種方式可以用來定義區域以及全域變數。
- 直接指定一個值給該變數，例如：`x = 42`，這種方式只能定義全域變數，如果在方法外面使用該方法定義變數，嚴格模式裡會產生警告，該定義方式應該盡可能避免。
- 透過保留字 {{jsxref("Statements/let", "let")}}，舉例來說：`let y = 13`，{{jsxref("Statements/let", "let")}} 可以用來定義區塊裡的區域變數。想瞭解更多，可以參考[變數區域](/zh-TW/docs/Web/JavaScript/Reference/Statements/const)的章節。

### 變數取值

變數可以透過 `var` 或是 `let` 來定義，如果尚未指定數值給該變數，那麼該變數的值會是 {{jsxref("undefined")}}。如果嘗試去存取未定義的變數，會跳出 {{jsxref("ReferenceError")}} 的例外。

```js
var a;
console.log("The value of a is " + a); // The value of a is undefined

console.log("The value of b is " + b); // The value of b is undefined
var b;

console.log("The value of c is " + c); // Uncaught ReferenceError: c is not defined

let x;
console.log("The value of x is " + x); // The value of x is undefined

console.log("The value of y is " + y); // Uncaught ReferenceError: y is not defined
let y;
```

你可以利用 `undefined` 來判斷該變數是否有值，在下面的程式碼的例子中，`input` 這個變數沒有賦值，`if` 判斷式會得到 `true` 的結果。

```js
var input;
if (input === undefined) {
  doThis();
} else {
  doThat();
}
```

被賦予 `undefined` 的變數，在被當做布林值的情境下都會被視為 `false`，以下面的例子來說，程式碼會執行 `myFunction`，因為 `myArray` 是 `undefined`：

```js
var myArray = [];
if (!myArray[0]) myFunction();
```

被賦予 `undefined` 的變數，在和數值進行運算之後，會被轉成非數值（`NaN`）：

```js
var a;
a + 2; // Evaluates to NaN
```

當你對 {{jsxref("null")}} 進行運算，{{jsxref("null")}} 會自動轉換成數值 0，如果當做布林值運算，會被當成 `false`，舉例來說：

```js
var n = null;
console.log(n * 32); // Will log 0 to the console
```

### 變數範圍

當我們在函式外宣告一個變數時，這個變數會是一個全域變數 (global variable), 因為在這份程式文件裡面的所有程式碼都可以使用到這個變數。但當我們只在函式內宣告變數時，這變數是區域變數 (local variable)，因為變數只會在函式內被使用到。

**請注意!!** 在 ECMAScript 2015 以前的 JavaScript 版本裡，並沒有定義區塊描述 ([block statement](/zh-TW/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Block_statement)) 的變數有效範圍。更精確的說，之前版本所定義的變數，其特性相當於全域變數；不只在宣告的區塊或函數裡面有效 ，其變數值還會超出宣告區塊而影響到全部的描述碼。

從下面例子來看，其輸出結果會是 5。雖然 x 是在 if { } 區塊裡面被宣告的，但卻因為有全域變數的特性，因此溢出大括號而成為後續描述碼的變數值。

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

接著舉一個 ECMAScript 2015 之後的宣告範例。當使用了 `let` 這個區域變數宣告方式，變數 y 的有效範圍只有在 if { } 的範圍內，因此輸出結果是 ReferenceError。

```js
if (true) {
  let y = 5;
}
console.log(y); // ReferenceError: y is not defined (y沒有被定義)
```

### 變數提升

在 JavaScript 中另一件有關變數不常見的事, 是你可引用一個較晚宣告的變數並且不會有異常。這個概念被稱為「**提升**（**hoisting**）」；從意義上來說明，變數在 JavaScript 中是「被提升（hoisted）」或「被抬至（lifted）」到函式（function）或陳述式（statement）的頂部。
然而，被提升（hoisted）的變數將返回一個未定義的值（undefined）。所以即使你在使用或者引用這個變數之後才宣告和初始化它，它仍然會返回它是一個未定義的值（undefined）。

```js
/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = "my value";

(function () {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
```

上面的例子可以轉譯成如下相同的程式:

```js
/**
 * Example 1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * Example 2
 */
var myvar = "my value";

(function () {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();
```

由於提升(hoisting)，全部在函數(function) 中的 var 陳述式應該盡可能地置放在接近函數(function)的頂部。這個最佳實踐增加了程式碼的清晰度。

在 ECMAScript 2015 中，let（const）不會將變數提升到區塊（block）的頂部。但是，在變數宣告之前就引用塊中的變數，會導致 {{jsxref("ReferenceError")}}。變數從區塊（block）的開始到宣告被處理之前，就處於「暫時無效（temporal dead zone）」。

```js
console.log(x); // ReferenceError
let x = 3;
```

### 函式提升

針對函式來說，只有函式宣告式(function declaration)提昇到頂部，但函式表示式(function exprssion) 不被提昇至頂部。

```js
/* Function declaration */

foo(); // "bar"

function foo() {
  console.log("bar");
}

/* Function expression */

baz(); // TypeError: baz is not a function

var baz = function () {
  console.log("bar2");
};
```

### 全域變數 (Global variables)

全域變數事實上是全域物件的屬性值。在網頁中的全域物件是 {{domxref("window")}}，因此你可使用 `window.variable` 的語法來設定及存取全域變數。

Consequently, 你可以指定 window 或 frame 物件的名稱來存取在另一個在 window 物件或 frame 物件所宣告的全域變數。例如，如果在一個文檔中已宣告一個稱為 `phoneNumber` 的變數，你可以在 iframe 中使用 `parent.phoneNumber` 來存取該變數

### 常數 (Constants)

你可用 {{jsxref("Statements/const", "const")}} 關鍵字來建立一個唯讀、有名稱的常數。 常數識別子的命名語法與變數識別子的命名語法是一樣的: 必須由一個英文字母，底線或錢符號($)開始，之後可包含英文字母，數字及底線字元。

```js
const PI = 3.14;
```

當程式執行時，無法再透過賦值或重新宣告來改變常數已設定的值。常數必須被初始化。

The scope rules for constants are the same as those for `let` block-scope variables. If the `const` keyword is omitted, the identifier is assumed to represent a variable.

你不能在同一個局部範圍內使用與其它函式或變數相同的名稱來宣告變數。例如:

```js
// THIS WILL CAUSE AN ERROR
function f() {}
const f = 5;

// THIS WILL CAUSE AN ERROR ALSO
function f() {
  const g = 5;
  var g;

  //statements
}
```

但是常數物件內的物件屬性並不受到保護，因此以下陳述式可以正常執行。

```js
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
```

## 資料結構及型別

### 資料型別 (Data types)

最新 ECMAScript 標準定義以下七種資料型別:

- 六種基本({{Glossary("Primitive", "primitives")}})資料型別 :

  - {{Glossary("Boolean")}}. `true` and `false`.
  - {{Glossary("null")}}. A special keyword denoting a null value. Because JavaScript is case-sensitive, `null` is not the same as `Null`, `NULL`, or any other variant.
  - {{Glossary("undefined")}}. A top-level property whose value is undefined.
  - {{Glossary("Number")}}. `42` or `3.14159`.
  - {{Glossary("String")}}. "Howdy"
  - {{Glossary("Symbol")}} (new in ECMAScript 2015). A data type whose instances are unique and immutable.

- and {{Glossary("Object")}}

儘管這些變數關聯性很小，他們可以讓你在你的應用程式中，產生出有意義的函數。

[物件](/zh-TW/docs/JavaScript/Reference/Global_Objects/Object)與 [函數](/zh-TW/docs/JavaScript/Reference/Global_Objects/Function) 在語言中是其它的基本元素. 你可以把物件想成是一個被命名過且用來裝數值的容器,以及函數則為你的應用程式所執行的步驟.

### 資料型別轉換

JavaScript 是一個動態型別的語言，這意味著你不需要在宣告變數時定義它的資料型別，程式執行時會自動轉換，你可以用下面方式宣告變數：

```js
var answer = 42;
```

你可以指派字串在同個變數中，例如：

```js
answer = "Thanks for all the fish...";
```

由於 Javascript 是一個動態型別的語言，因此這樣的宣告方式不會導致錯誤。

在該陳述式中，它調用了字串和數字，並使用 + 進行運算，JavaScript 會自動把數字轉換成字串，例如：

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
```

在該陳述式中，它調用了其它運算子，JavaScript 就不會將數字轉換成字串，例如：

```js
"37" - 7; // 30
"37" + 7; // "377"
```

### 字串轉數值

當代表數字的值以字串形式存在記憶體中，有些方法可用來將這種字串轉換成整數或浮點數。

- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("parseFloat", "parseFloat()")}}

`parseInt` 只會返回整數，因此減少了對小數的使用。此外，parseInt 的最佳實務是始終包含基數參數。基數參數用於指定使用的數值系統。

另一個將字串轉成數字是使用單元 `+` (unary plus) 運算子:

```js
'1.1' + '1.1' = '1.11.1'
(+'1.1') + (+'1.1') = 2.2
// 注意: 括號是為了易於閱讀，並不是必須的.
```

## 字面值（Literals）

你能使用字面值來表示 JavaScript 中的值。這些是你在腳本中實際提供的固定值，而不是變量。本節描述以下類型的字面值：

- [Array literals](#陣列字面值_array_literals)
- [Boolean literals](#布林字面值_boolean_literals)
- [Floating-point literals](#浮點數字面值_floating-point_literals)
- [Integers](#整數字面值_numerical_literals)
- [Object literals](#物件字面值_object_literals)
- [RegExp literals](#正規表達式字面值_regexp_literals)
- [String literals](#字串字面值_string_literals)

### 陣列字面值 (Array literals)

陣列字面值是零或多個表達式的列表，每個表達式代表一個數組元素，並用方括號（\[]）括起來。使用陣列字面值創建陣列時，將使用指定的值作為其元素對其進行初始化，並將其長度設置為指定的參數值。

以下範例創建了陣列 `coffees` ，長度為 3 並包含三個元素：

```js
var coffees = ["French Roast", "Colombian", "Kona"];
```

> [!NOTE]
> An array literal is a type of object initializer. See [Using Object Initializers](/zh-TW/docs/Web/JavaScript/Guide/Working_with_Objects#Using_object_initializers).

If an array is created using a literal in a top-level script, JavaScript interprets the array each time it evaluates the expression containing the array literal. In addition, a literal used in a function is created each time the function is called.

Array literals are also `Array` objects. See {{jsxref("Array")}} and [Indexed collections](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections) for details on `Array` objects.

#### Extra commas in array literals

You do not have to specify all elements in an array literal. If you put two commas in a row, the array is created with `undefined` for the unspecified elements. The following example creates the `fish` array:

```js
var fish = ["Lion", , "Angel"];
```

This array has two elements with values and one empty element (`fish[0]` is "Lion", `fish[1]` is `undefined`, and `fish[2]` is "Angel").

If you include a trailing comma at the end of the list of elements, the comma is ignored. In the following example, the length of the array is three. There is no `myList[3]`. All other commas in the list indicate a new element.

> [!NOTE]
> Trailing commas can create errors in older browser versions and it is a best practice to remove them.

```js
var myList = ["home", , "school"];
```

In the following example, the length of the array is four, and `myList[0]` and `myList[2]` are missing.

```js
var myList = [, "home", , "school"];
```

In the following example, the length of the array is four, and `myList[1]` and `myList[3]` are missing. **Only the last comma is ignored.**

```js
var myList = ["home", , "school", ,];
```

Understanding the behavior of extra commas is important to understanding JavaScript as a language, however when writing your own code: explicitly declaring the missing elements as `undefined` will increase your code's clarity and maintainability.

### 布林字面值 (Boolean literals)

布林型別有兩種字面值： `true` 跟 `false`.

Do not confuse the primitive Boolean values `true` and `false` with the true and false values of the Boolean object. The Boolean object is a wrapper around the primitive Boolean data type. See {{jsxref("Boolean")}} for more information.

### 整數字面值 (Numerical literals)

整數能表示為「十進制」、「十六進制」、「八進制」、「二進制」

- 十進制整數字面值由「『不帶前導 0』的整數序列」組成
- 八進制整數字面值由「『前導 0』」或『前導 0o』或『前導 0O』的整數序列」組成。八進制整數只能包含數字 0-7
- 十六進制整數字面值由「『前導 0x』」或『前導 0X』的整數序列」組成。十六進制整數只能包含數字 0-9 、字母 A-F 和 a-f
- 二進制整數字面值由「『前導 0b』」或『前導 0B』的整數序列」組成。二進制整數只能包含數字 0 跟 1

整數字面值範例如下：

```plain
0, 117 and -345 (decimal, base 10)
015, 0001 and -0o77 (octal, base 8)
0x1123, 0x00111 and -0xF1A7 (hexadecimal, "hex" or base 16)
0b11, 0b0011 and -0b11 (binary, base 2)
```

更多資訊請參閱 [Numeric literals in the Lexical grammar reference](/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_literals).

### 浮點數字面值 (Floating-point literals)

浮點數字面值能包含以下部分：

- 整數部分 (十進位，可帶符號 "+" 或 "-" 於整數前)
- 小數點 "."
- 小數部分 (另一個十進位整數)
- 指數部分

指數部分由「"e" 或 "E" 後面跟整數」所組成，可帶符號 "+" 或 "-" 於整數前。浮點數字面值至少由「一位數字」與「一個小數點 "e" (或 "E")」組成。

簡言之，於法如下：

```plain
[(+|-)][digits][.digits][(E|e)[(+|-)]digits]
```

舉個例子：

```plain
3.1415926
-.123456789
-3.1E+12
.1e-23
```

### 物件字面值 (Object literals)

物件字面值是用大括號（{}）括起來的零或多對鍵值對的列表。因為 "{" 將被解譯為區塊(block)的開頭，因此你不應在陳述句開頭使用物件字面值，這將導致錯誤或不預期的行為。

以下是物件字面值的範例。`car` 物件包含三個屬性：

- 第一個屬性 `myCar` 賦值為字串 '`Saturn`'
- 第二個屬性 `getCar` 賦值為「調用函數`carTypes('Honda')`」的結果
- 第三個屬性 `special` 使用現有變量 `sales` 賦值

```js
var sales = "Toyota";

function carTypes(name) {
  if (name === "Honda") {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
```

此外，你可以使用數字或字串字面值作為屬性名，也可將物件嵌套在另一個物件中。如下範例：

```js
var car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

物件屬性名可以是任何字串，包括空字串。如果屬性名不是有效的 JavaScript {{Glossary("Identifier","識別字")}} 或數字，則必須將其用引號引起來。無效的屬性名稱也不能作為點 (`.`) 屬性訪問，但是可以使用類似數組的符號（"`[]`"）進行訪問和設置。

```js
var unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames['']);  // An empty string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
console.log(unusualPropertyNames['!']); // Bang!
```

#### Enhanced Object literals

In ES2015, object literals are extended to support setting the prototype at construction, shorthand for `foo: foo` assignments, defining methods, making super calls, and computing property names with expressions. Together, these also bring object literals and class declarations closer together, and let object-based design benefit from some of the same conveniences.

```js
var obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for ‘handler: handler’
  handler,
  // Methods
  toString() {
    // Super calls
    return "d " + super.toString();
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42,
};
```

Please note:

```js
var foo = { a: "alpha", 2: "two" };
console.log(foo.a); // alpha
console.log(foo[2]); // two
//console.log(foo.2);  // Error: missing ) after argument list
//console.log(foo[a]); // Error: a is not defined
console.log(foo["a"]); // alpha
console.log(foo["2"]); // two
```

### 正規表達式字面值 (RegExp literals)

正則表達式字面值是包含在斜杠間的樣式。以下是正則表達式文字的範例。

```js
var re = /ab+c/;
```

### 字串字面值 (String literals)

字串字面值是用雙引號（"）或單引號（'）包住的零或多個字元。字串必須用同類的引號定界；也就是「兩個單引號」或「兩個雙引號」。以下是字串字面值的範例：

```js
"foo";
"bar";
"1234";
"one line \n another line";
"John's cat";
```

你可以在字串字面值上調用 String 物件的任何方法 - JavaScript 將自動轉換字串字面值為臨時 String 物件並調用該方法，然後丟棄該臨時 String 物件。你還可以將 String.length 屬性與字串字面值一起使用：

```js
console.log("John's cat".length);
// Will print the number of symbols in the string including whitespace.
// In this case, 10.
```

In ES2015, template literals are also available. Template literals are enclosed by the back-tick (\` \`) ([grave accent](https://en.wikipedia.org/wiki/Grave_accent)) character instead of double or single quotes. Template strings provide syntactic sugar for constructing strings. This is similar to string interpolation features in Perl, Python and more. Optionally, a tag can be added to allow the string construction to be customized, avoiding injection attacks or constructing higher level data structures from string contents.

```js
// Basic literal string creation
`In JavaScript '\n' is a line-feed.` // Multiline strings
`In JavaScript template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`;

// String interpolation
var name = "Bob",
  time = "today";
`Hello ${name}, how are you ${time}?`;

// Construct an HTTP request prefix is used to interpret the replacements and construction
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);
```

You should use string literals unless you specifically need to use a String object. See {{jsxref("String")}} for details on `String` objects.

#### 字串裡的特殊字元

除了普通字元，字串也能包含特殊字元，範例如下：

```js
"one line \n another line";
```

下表列出了可以在 JavaScript 字串中使用的特殊字元。

| 字元        | 意涵                                                                                                                                                                                                                                               |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Null Byte                                                                                                                                                                                                                                          |
| `\b`        | 退格 (Backspace)                                                                                                                                                                                                                                   |
| `\f`        | Form feed                                                                                                                                                                                                                                          |
| `\n`        | 換行 (New line)                                                                                                                                                                                                                                    |
| `\r`        | 回車 (Carriage return)                                                                                                                                                                                                                             |
| `\t`        | 跳格 (Tab)                                                                                                                                                                                                                                         |
| `\v`        | Vertical tab                                                                                                                                                                                                                                       |
| `\'`        | Apostrophe or single quote                                                                                                                                                                                                                         |
| `\"`        | Double quote                                                                                                                                                                                                                                       |
| `\\`        | Backslash character                                                                                                                                                                                                                                |
| `\XXX`      | The character with the Latin-1 encoding specified by up to three octal digits _XXX_ between 0 and 377. For example, \251 is the octal sequence for the copyright symbol.                                                                           |
|             |                                                                                                                                                                                                                                                    |
| `\xXX`      | The character with the Latin-1 encoding specified by the two hexadecimal digits _XX_ between 00 and FF. For example, \xA9 is the hexadecimal sequence for the copyright symbol.                                                                    |
|             |                                                                                                                                                                                                                                                    |
| `\uXXXX`    | The Unicode character specified by the four hexadecimal digits _XXXX_. For example, \u00A9 is the Unicode sequence for the copyright symbol. See [Unicode escape sequences](/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals). |
| `\u{XXXXX}` | Unicode code point escapes. For example, \u{2F804} is the same as the simple Unicode escapes \uD87E\uDC04.                                                                                                                                         |

#### Escaping characters

For characters not listed in the table, a preceding backslash is ignored, but this usage is deprecated and should be avoided.

You can insert a quotation mark inside a string by preceding it with a backslash. This is known as _escaping_ the quotation mark. For example:

```js
var quote = 'He read "The Cremation of Sam McGee" by R.W. Service.';
console.log(quote);
```

The result of this would be:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

To include a literal backslash inside a string, you must escape the backslash character. For example, to assign the file path `c:\temp` to a string, use the following:

```js
var home = "c:\\temp";
```

You can also escape line breaks by preceding them with backslash. The backslash and line break are both removed from the value of the string.

```js
var str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiplelines.
```

Although JavaScript does not have "heredoc" syntax, you can get close by adding a line break escape and an escaped line break at the end of each line:

```js
var poem =
  "Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.";
```

ECMAScript 2015 introduces a new type of literal, namely [**template literals**](/zh-TW/docs/Web/JavaScript/Reference/template_strings). This allows for many new features including multiline strings!

```js
var poem = `Roses are red,
Violets are blue.
Sugar is sweet,
and so is foo.`;
```

## More information

This chapter focuses on basic syntax for declarations and types. To learn more about JavaScript's language constructs, see also the following chapters in this guide:

- [Control flow and error handling](/zh-TW/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Loops and iteration](/zh-TW/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Functions](/zh-TW/docs/Web/JavaScript/Guide/Functions)
- [Expressions and operators](/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators)

In the next chapter, we will have a look at control flow constructs and error handling.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
