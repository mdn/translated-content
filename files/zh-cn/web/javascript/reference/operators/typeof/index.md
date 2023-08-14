---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
---

{{JSSidebar("Operators")}}

**`typeof`** 运算符返回一个字符串，表示操作数的类型。

{{EmbedInteractiveExample("pages/js/expressions-typeof.html")}}

## 语法

```js-nolint
typeof operand
```

### 参数

- `operand`
  - : 表示要返回类型的对象或[基本类型](/zh-CN/docs/Glossary/Primitive)的表达式。

## 描述

下表总结了 `typeof` 可能的返回值。有关类型和基本类型的更多信息，可查看 [JavaScript 数据结构](/zh-CN/docs/Web/JavaScript/Data_structures) 页面。

| 类型                                                                                                                                              | 结果                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [Undefined](/zh-CN/docs/Glossary/undefined)                                                                                                       | `"undefined"`                      |
| [Null](/zh-CN/docs/Glossary/Null)                                                                                                                 | `"object"`（[原因](#typeof_null)） |
| [Boolean](/zh-CN/docs/Glossary/Boolean)                                                                                                           | `"boolean"`                        |
| [Number](/zh-CN/docs/Glossary/Number)                                                                                                             | `"number"`                         |
| [BigInt](/zh-CN/docs/Glossary/BigInt)                                                                                                             | `"bigint"`                         |
| [String](/zh-CN/docs/Glossary/String)                                                                                                             | `"string"`                         |
| [Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)                                                                              | `"symbol"`                         |
| [Function](/zh-CN/docs/Glossary/Function)（在 ECMA-262 中实现 [[Call]]；[classes](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)也是函数) | `"function"`                       |
| 其他任何对象                                                                                                                                      | `"object"`                         |

这个值列表是详尽的。没有符合规范的引擎曾被报告过产生（或历史上产生过）除列出的值之外的值。在规范删除 `typeof` 为不可调用的非标准外来对象返回实现定义的字符串的行为之前，旧的 Internet Explorer 是已知的唯一一个[实现额外返回值](https://github.com/tc39/ecma262/issues/1440#issuecomment-461963872)的浏览器。

## 示例

### 基本用法

```js
// 数值
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // 尽管它是 "Not-A-Number" (非数值) 的缩写
typeof Number(1) === "number"; // Number 会尝试把参数解析成数值
typeof Number("shoe") === "number"; // 包括不能将类型强制转换为数字的值

typeof 42n === "bigint";

// 字符串
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string"; // 注意内容为数字的字符串仍是字符串
typeof typeof 1 === "string"; // typeof 总是返回一个字符串
typeof String(1) === "string"; // String 将任意值转换为字符串，比 toString 更安全

// 布尔值
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean() 会基于参数是真值还是虚值进行转换
typeof !!1 === "boolean"; // 两次调用 !（逻辑非）运算符相当于 Boolean()

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// 对象
typeof { a: 1 } === "object";

// 使用 Array.isArray 或者 Object.prototype.toString.call
// 区分数组和普通对象
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object";

// 下面的例子令人迷惑，非常危险，没有用处。避免使用它们。
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// 函数
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";
```

### typeof null

```js
// JavaScript 诞生以来便如此
typeof null === "object";
```

在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 `null` 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，`typeof null` 也因此返回 `"object"`。（[参考来源](http://www.2ality.com/2013/10/typeof-null.html)）

曾有一个 ECMAScript 的修复提案（通过选择性加入的方式），但[被拒绝了](http://wiki.ecmascript.org/doku.php?id=harmony:typeof_null)。该提案会导致 `typeof null === 'null'`。

### 使用 new 操作符

所有使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 调用的构造函数都将返回非基本类型（`"object"` 或 `"function"`）。大多数返回对象，但值得注意的例外是 [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)，它返回一个函数。

```js
const str = new String("String");
const num = new Number(100);

typeof str; // "object"
typeof num; // "object"

const func = new Function();

typeof func; // "function"
```

### 语法中需要圆括号

`typeof` 操作符的[优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)高于加法（`+`）等二进制操作符。因此，需要用括号来计算加法结果的类型。

```js
// 括号有无将决定表达式的类型。
const someData = 99;

typeof someData + " Wisen"; // "number Wisen"
typeof (someData + " Wisen"); // "string"
```

### 与未声明和未初始化变量的交互

`typeof` 通常总是保证为它提供的任何操作数返回一个字符串。即使使用未声明的标识符，`typeof` 也会返回 `"undefined"`，而不是抛出错误。

```js
typeof undeclaredVariable; // "undefined"
```

但在加入了块级作用域的 [let](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 和 [const](/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 之后，在其被声明之前对块中的 `let` 和 `const` 变量使用 `typeof` 会抛出一个 [ReferenceError](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)。块作用域变量在块的头部处于“[暂存死区](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#Temporal_Dead_Zone_and_errors_with_let)”，直至其被初始化，在这期间，访问变量将会引发错误。

```js example-bad
typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = "hello";
class newClass {}
```

### document.all 的异常行为

当前所有浏览器都公开了一个类型为 `undefined` 的非标准宿主对象 [`Document.All`](/zh-CN/docs/Web/API/Document/all)。

```js
typeof document.all === "undefined";
```

虽然 `document.all` 也是[假值](/zh-CN/docs/Glossary/falsy)，与 `undefined` [非严格相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)，但它不是 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。在 Web 标准中，`document.all` 具有 `"undefined"` 类型的情况被归类为“故意违反”原始 ECMAScript Web 兼容性标准。

### 获取具体类型的自定义方法

`typeof` 是非常有用的，但它不像需要的那样万能。例如，`typeof []` 是 `"object"`，以及 `typeof new Date()`、`typeof /abc/` 等。

为了更明确地检查类型，这里我们提供了一个自定义的 `type(value)` 函数，它主要模仿 `typeof` 的行为，但对于非基本类型（即对象和函数），它在可能的情况下返回更详细的类型名。

```js
function type(value) {
  if (value === null) {
    return "null";
  }
  const baseType = typeof value;
  // 基本类型
  if (!["object", "function"].includes(baseType)) {
    return baseType;
  }

  // Symbol.toStringTag 通常指定对象类的“display name”
  // 它在 Object.prototype.toString() 中使用。
  const tag = value[Symbol.toStringTag];
  if (typeof tag === "string") {
    return tag;
  }

  // 如果它是一个函数，其源代码以 "class" 关键字开头
  if (
    baseType === "function" &&
    Function.prototype.toString.call(value).startsWith("class")
  ) {
    return "class";
  }

  // 构造函数的名称；例如 `Array`、`GeneratorFunction`、`Number`、`String`、`Boolean` 或 `MyCustomClass`
  const className = value.constructor.name;
  if (typeof className === "string" && className !== "") {
    return className;
  }

  // 在这一点上，没有合适的方法来获取值的类型，因此我们使用基本实现。
  return baseType;
}
```

要检查可能不存在的变量，否则会抛出 {{JSxRef("ReferenceError")}}，请使用 `typeof nonExistentVar === 'undefined'`，因为自定义代码无法模仿这种行为。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{JSxRef("Operators/instanceof", "instanceof")}}
- [`document.all` willful violation of the standard](https://github.com/tc39/ecma262/issues/668)
