---
title: 模板字符串
slug: Web/JavaScript/Reference/Template_literals
original_slug: Web/JavaScript/Reference/template_strings
---

{{JsSidebar("More")}}

**模板字面量** 是用反引号 `` ` `` 分隔的字面量，允许[多行字符串](#多行字符串)、带嵌入表达式的[字符串插值](#字符串插值)和一种叫[带标签的模板](#带标签的模板)的特殊结构（译注：几种语法）。

模板字面量有时被非正式地叫作*模板字符串*，因为它们最常被用作[字符串插值](#字符串插值)（通过替换占位符来创建字符串）。然而，带标签的模板字面量可能不会产生字符串——它可以与自定义[标签函数](#带标签的模板)一起使用，来对模板字面量的不同部分执行任何操作。

## 语法

```plain
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tagFunction`string text ${expression} string text`
```

### 参数

- `string text`
  - : 将成为模板字面量的一部分的字符串文本。几乎允许所有字符，包括[换行符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#行终止符)和其他[空白字符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#空白符)。但是，除非使用了标记函数，否则无效的转义序列将导致语法错误。
- `expression`
  - : 要插入当前位置的表达式，其值被转换为字符串或传递给 `tagFunction`。
- `tagFunction`
  - : 如果指定，将使用模板字符串数组和替换表达式调用它，返回值将成为模板字面量的值。见[带标签的模板](#带标签的模板)。

## 描述

模板字面量用反引号 `` ` `` 括起来，而不是双引号 `"` 或单引号 `'`。
除了普通字符串外，模板字面量还可以包含*占位符*——一种由美元符号和大括号分隔的嵌入式表达式：`${expression}`。字符串和占位符被传递给一个函数（要么是默认函数，要么是自定义函数）。默认函数（当未提供自定义函数时）只执行[字符串插值](#字符串插值)来替换占位符，然后将这些部分拼接到一个字符串中。

若要提供自定义函数，需在模板字面量之前加上函数名（结果被称为[带标签的模板](#带标签的模板)）。此时，模板字面量被传递给你的标签函数，然后就可以在那里对模板文本的不同部分执行任何操作。

若要转义模板字面量中的反引号 `` ` ``，需在反引号之前加一个反斜杠 `\`。

```js
`\`` === "`"; // true
```

美元符号 `$` 也可以被转义，来阻止插值。

```js
`\${1}` === "${1}"; // true
```

### 多行字符串

在源码中（译注：指在 ` `` ` 所包裹的范围内）插入的任何换行符都是模板字面量的一部分。

使用普通字符串，可以通过下面的方式得到多行字符串：

```js
console.log('string text line 1\n' + 'string text line 2');
// "string text line 1
// string text line 2"
```

使用模板字面量，下面的代码同样可以做到：

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### 字符串插值

如果没有模板字面量，当你想组合表达式的输出与字符串时，可以使用[加法运算符 `+`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)[连接它们](/zh-CN/docs/Learn/JavaScript/First_steps/Strings#连接字符串)：

```js
var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
```

这可能很难阅读，尤其是当存在多个表达式时。

有了模板字面量，就可以通过使用占位符 `${expression}` 嵌入待替换的表达式，从而避免串联运算符，并提高代码的可读性：

```js
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

注意，这两种语法有一点小区别：模板字面量直接将其表达式[强制转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)，而加法则会先强制转换为原语类型。更多相关信息，参见[加法（+）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)。

### 嵌套模板

[字符串插值](#字符串插值)语法是可递归的，即，可以在模板字面量的占位符 `${expression}` 中继续写模板字面量。在某些情况下，嵌套模板是具有可配置字符串的最简单的（也许还是更可读的）方法。例如，不用模板字面量的情况下，如果你想根据特定条件返回某个值，可以执行以下操作：

```js example-bad
var classes = 'header'
classes += (isLargeScreen()
  ? ''
  : item.isCollapsed
  ? ' icon-expander'
  : ' icon-collapser');
```

用模板字面量但不能嵌套时：

```js example-bad
const classes = `header ${
  isLargeScreen() ? '' : (item.isCollapsed ? 'icon-expander' : 'icon-collapser')
}`;
```

用模板字面量并可以嵌套时：

```js example-good
const classes = `header ${
  isLargeScreen() ? '' : `icon-${item.isCollapsed ? 'expander' : 'collapser'}`
}`;
```

### 带标签的模板

*带标签的*模板是模板字面量的一种更高级的形式，它允许你使用函数解析模板字面量。标签函数的第一个参数包含一个字符串数组，其余的参数与表达式相关。你可以用标记函数对这些参数执行任何操作，并返回被操作过的字符串（或者，也可返回完全不同的内容，见下面的示例）。用作标签的函数名没有限制。

```js
let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${ person } is a ${ age }.`;

console.log(output);
// That Mike is a youngster.
```

标签不必是普通的标识符，你可以使用任何[优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#汇总表)大于16的表达式，包括[属性访问](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors)、函数调用、[new 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)，甚至其他标签的模板字面量。

```js
console.log`Hello`; // [ 'Hello' ]
console.log.bind(1, 2)`Hello`; // 2 [ 'Hello' ]
new Function("console.log(arguments)")`Hello`; // [Arguments] { '0': [ 'Hello' ] }
function recursive(strings, ...values) {
  console.log(strings, values);
  return recursive;
}
recursive`Hello``World`;
// [ 'Hello' ] []
// [ 'World' ] []
```

虽然语法可行，但*不带标签的*模板字面量是字符串，并且在链接时会抛出 {{jsxref("TypeError")}}。

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

唯一的例外是可选的链接，将会抛出语法错误。

```js example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

请注意，这两个表达式仍然是可解析的。这意味着它们将不受[自动分号补全](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#自动分号补全)的影响，其只会插入分号来修复无法解析的代码。

```js example-bad
// Still a syntax error
const a = console?.log
`Hello`
```

标签函数甚至不需要返回字符串！

```js
function template(strings, ...keys) {
  return (...values) => {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

const t1Closure = template`${0}${1}${0}!`;
// const t1Closure = template(["","","","!"],0,1,0);

t1Closure("Y", "A"); // "YAY!"
const t2Closure = template`${0} ${"foo"}!`;
// const t2Closure = template([""," ","!"],0,"foo");
t2Closure("Hello", { foo: "World" }); // "Hello World!"

const t3Closure = template`I'm ${"name"}. I'm almost ${"age"} years old.`;
// const t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure("foo", { name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
t3Closure({ name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
```

标签函数接收到的第一个参数是一个字符串数组。对于任何模板字面量，其长度等于替换次数（`${…}`出现次数）加一，因此总是非空的。对于任何特定的带标签的模板字面量表达式，无论对字面量求值多少次，都将始终使用完全相同的字面量数组调用标签函数。

```js
const callHistory = [];

function tag(strings, ...values) {
  callHistory.push(strings);
  // Return a freshly made object
  return {};
}

function evaluateLiteral() {
  return tag`Hello, ${"world"}!`;
}

console.log(evaluateLiteral() === evaluateLiteral()); // false; each time `tag` is called, it returns a new object
console.log(callHistory[0] === callHistory[1]); // true; all evaluations of the same tagged literal would pass in the same strings array
```

这允许标签函数以其第一个参数作为标识来缓存结果。为了进一步确保数组值不变，第一个参数及其[原始属性](#原始字符串)都会被[冻结](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)，因此你将无法改变它们。

### 原始字符串

在标签函数的第一个参数中，存在一个特殊的属性`raw` ，我们可以通过它来访问模板字符串的原始字符串，而无需[转义特殊字符](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#在字符串中使用的特殊字符)。

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
```

另外，使用{{jsxref("String.raw()")}} 方法创建原始字符串和使用默认模板函数和字符串连接创建是一样的。

```js
let str = String.raw`Hi\n${2+3}!`;
// "Hi\\n5!"

str.length;.
// 6

str.split('').join(',');.
// "H,i,\\,n,5,!"
```

如果字面量不包含任何转义序列，`String.raw` 函数就像一个“标识”标签。如果你想要一个始终像未标记字面量那样的实际标识标签，可以用自定义函数，将“熟的”（例如，经转义序列处理过的）字面量数组传递给 `String.raw`，将它们当成原始字符串。（译注：“熟的”对应“生的（raw）”。）

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

这对于许多工具来说很有用，它们要对用特定名称标记的字面量作特殊处理。

```js
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Some formatters will format this literal's content as HTML
const doc = html`<!DOCTYPE html>
  <html lang="en-US">
    <head>
      <title>Hello</title>
    </head>
    <body>
      <h1>Hello world!</h1>
    </body>
  </html>`;
```

### 带标签的模版字面量及转义序列

在普通模板字面量中，字符串字面量中的转义序列都是允许的，任何其他格式不正确的转义序列都是语法错误，包括：

- `\` 后跟 `0` 以外的任何十进制数字，或 `\0` 后跟一个十进制数字，例如 `\9` 和 `\07`（这是一种[已弃用语法](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#转义序列)）
- `\x` 后跟两位以下十六进制数字，例如`\xz`
- `\u` 后不跟 `{`，并且后跟四个以下十六进制数字，例如 `\uz`
- `\u{}` 包含无效的 Unicode 码点——包含一个非十六进制数字，或者它的值大于10FFFF，例如 `\u{110000}` 和 `\u{z}`

> **备注：** `\` 后面跟着其他字符，虽然它们可能没有用，因为没有转义，但它们不是语法错误。

然而，这对于带标签的模板来说是有问题的，除了“熟的”字面量外，这些模板还可以访问原始字面量（转义序列按原样保留）。带标签的模板应该允许嵌入语言（例如 [DSL](https://zh.wikipedia.org/wiki/领域特定语言) 或 [LaTeX](https://zh.wikipedia.org/wiki/LaTeX)），在这些语言里其他转义序列是常见的。因此，从带标签的模板中删除了转义序列诸多格式的语法限制。

不过，非法转义序列在"熟的"当中仍然会体现出来。它们将以 {{jsxref("undefined")}} 元素的形式存在于"熟的"数组之中：

```js
function latex(str) {
 return { "cooked": str[0], "raw": str.raw[0] }
}

latex`\unicode`

// { cooked: undefined, raw: "\\unicode" }
```

值得注意的是，这一转义序列限制只对带标签的模板字面量移除，而不包括不带标签的模板字面量：

```js example-bad
let bad = `bad escape sequence: \unicode`;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexical grammar](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Template-like strings in ES3 compatible syntax](https://gist.github.com/WebReflection/8f227532143e63649804)
- ["ES6 in Depth: Template strings" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)
