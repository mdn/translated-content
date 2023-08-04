---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
---

{{JSRef}}

**symbol** 是一种基本数据类型（{{Glossary("Primitive", "primitive data type")}}）。`Symbol()` 函数会返回 **symbol** 类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的 symbol 注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："`new Symbol()`"。

每个从 `Symbol()` 返回的 symbol 值都是唯一的。一个 symbol 值能作为对象属性的标识符；这是该数据类型仅有的目的。更进一步的解析见—— [glossary entry for Symbol](/zh-CN/docs/Glossary/Symbol)。

{{EmbedInteractiveExample("pages/js/symbol-constructor.html")}}

## 语法

```plain
Symbol([description])
```

### 参数

- `description` {{optional_inline}}
  - : 可选的，字符串类型。对 symbol 的描述，可用于调试但不是访问 symbol 本身。

## 描述

直接使用`Symbol()`创建新的 symbol 类型，并用一个可选的字符串作为其描述。

```js
var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");
```

上面的代码创建了三个新的 symbol 类型。注意，`Symbol("foo")` 不会强制将字符串“foo”转换成 symbol 类型。它每次都会创建一个新的 symbol 类型：

```js
Symbol("foo") === Symbol("foo"); // false
```

下面带有 {{jsxref("Operators/new", "new")}} 运算符的语法将抛出 {{jsxref("TypeError")}} 错误：

```js
var sym = new Symbol(); // TypeError
```

这会阻止创建一个显式的 Symbol 包装器对象而不是一个 Symbol 值。围绕原始数据类型创建一个显式包装器对象从 ECMAScript 6 开始不再被支持。然而，现有的原始包装器对象，如 `new Boolean`、`new String`以及`new Number`，因为遗留原因仍可被创建。

如果你真的想创建一个 **Symbol 包装器对象** (`Symbol wrapper object`)，你可以使用 `Object()` 函数：

```js
var sym = Symbol("foo");
typeof sym; // "symbol"
var symObj = Object(sym);
typeof symObj; // "object"
```

### 全局共享的 Symbol

上面使用 `Symbol()` 函数的语法，不会在你的整个代码库中创建一个可用的全局的 symbol 类型。要创建跨文件可用的 symbol，甚至跨域（每个都有它自己的全局作用域），使用 {{jsxref("Symbol.for()")}} 方法和 {{jsxref("Symbol.keyFor()")}} 方法从全局的 symbol 注册表设置和取得 symbol。

### 在对象中查找 Symbol 属性

{{jsxref("Object.getOwnPropertySymbols()")}} 方法让你在查找一个给定对象的符号属性时返回一个 symbol 类型的数组。注意，每个初始化的对象都是没有自己的 symbol 属性的，因此这个数组可能为空，除非你已经在对象上设置了 symbol 属性。

## 属性

- `Symbol.length`
  - : 长度属性，值为 0。
- {{jsxref("Symbol.prototype")}}
  - : `symbol` 构造函数的原型。

### 内置通用（well-known）symbol

除了自己创建的 symbol，JavaScript 还内建了一些在 ECMAScript 5 之前没有暴露给开发者的 symbol，它们代表了内部语言行为。它们可以使用以下属性访问：

- 迭代 symbols {{jsxref("Symbol.iterator")}}
  - : 一个返回一个对象默认迭代器的方法。被 [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 使用。
- {{jsxref("Symbol.asyncIterator")}} {{experimental_inline}}
  - : 一个返回对象默认的异步迭代器的方法。被 [`for await of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of) 使用。
- 正则表达式 symbols {{jsxref("Symbol.match")}}
  - : 一个用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用。被 {{jsxref("String.prototype.match()")}} 使用。
- {{jsxref("Symbol.replace")}}
  - : 一个替换匹配字符串的子串的方法。被 {{jsxref("String.prototype.replace()")}} 使用。
- {{jsxref("Symbol.search")}}
  - : 一个返回一个字符串中与正则表达式相匹配的索引的方法。被 {{jsxref("String.prototype.search()")}} 使用。
- {{jsxref("Symbol.split")}}
  - : 一个在匹配正则表达式的索引处拆分一个字符串的方法.。被 {{jsxref("String.prototype.split()")}} 使用。
- 其他 symbols {{jsxref("Symbol.hasInstance")}}
  - : 一个确定一个构造器对象识别的对象是否为它的实例的方法。被 {{jsxref("Operators/instanceof", "instanceof")}} 使用。
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : 一个布尔值，表明一个对象是否应该 flattened 为它的数组元素。被 {{jsxref("Array.prototype.concat()")}} 使用。
- {{jsxref("Symbol.unscopables")}}
  - : 拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。
- {{jsxref("Symbol.species")}}
  - : 一个用于创建派生对象的构造器函数。
- {{jsxref("Symbol.toPrimitive")}}
  - : 一个将对象转化为基本数据类型的方法。
- {{jsxref("Symbol.toStringTag")}}
  - : 用于对象的默认描述的字符串值。被 {{jsxref("Object.prototype.toString()")}} 使用。

## 方法

- {{jsxref("Symbol.for()", "Symbol.for(key)")}}
  - : 使用给定的 key 搜索现有的 symbol，如果找到则返回该 symbol。否则将使用给定的 key 在全局 symbol 注册表中创建一个新的 symbol。
- {{jsxref("Symbol.keyFor", "Symbol.keyFor(sym)")}}
  - : 从全局 symbol 注册表中，为给定的 symbol 检索一个共享的？symbol key。

## Symbol 原型

所有 Symbols 继承自 {{jsxref("Symbol.prototype")}}.

### 实例属性

- {{jsxref("Symbol.prototype.description")}}
  - : 一个只读的字符串，意为对该 Symbol 对象的描述

### 实例方法

- {{jsxref("Symbol.prototype.toSource")}}
  - : 返回该 Symbol 对象的源代码。该方法重写了 {{jsxref("Object.prototype.toSource")}} 方法
- {{jsxref("Symbol.prototype.toString")}}
  - : 返回一个包含着该 Symbol 对象描述的字符串。该方法重写了 {{jsxref("Object.prototype.toString")}} 方法
- {{jsxref("Symbol.prototype.valueOf")}}
  - : 返回该 Symbol 对象。该方法重写了 {{jsxref("Object.prototype.valueOf")}} 方法
- {{jsxref("Symbol.@@toPrimitive", "Symbol.prototype[@@toPrimitive]")}}
  - : 返回该 Symbol 对象。

## 示例

### 对 symbol 使用 typeof 运算符

{{jsxref("Operators/typeof", "typeof")}}运算符能帮助你识别 symbol 类型

```js
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
```

### Symbol 类型转换

当使用 symbol 值进行类型转换时需要注意一些事情：

- 尝试将一个 symbol 值转换为一个 number 值时，会抛出一个 {{jsxref("TypeError")}} 错误 (e.g. `+sym` or `sym | 0`).
- 使用宽松相等时，`Object(sym) == sym` returns `true.`
- 这会阻止你从一个 symbol 值隐式地创建一个新的 string 类型的属性名。例如，`Symbol("foo") + "bar"` 将抛出一个 {{jsxref("TypeError")}} (can't convert symbol to string).
- ["safer" `String(sym)` conversion](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换) 的作用会像 symbol 类型调用 {{jsxref("Symbol.prototype.toString()")}} 一样，但是注意 `new String(sym)` 将抛出异常。

### Symbols 与 `for...in` 迭代

Symbols 在 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 迭代中不可枚举。另外，{{jsxref("Object.getOwnPropertyNames()")}} 不会返回 symbol 对象的属性，但是你能使用 {{jsxref("Object.getOwnPropertySymbols()")}} 得到它们。

```js
var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (var i in obj) {
  console.log(i); // logs "c" and "d"
}
```

### Symbols 与 `JSON.stringify()`

当使用 JSON.stringify() 时，以 symbol 值作为键的属性会被完全忽略：

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

更多细节，请看 {{jsxref("JSON.stringify()")}}。

### Symbol 包装器对象作为属性的键

当一个 Symbol 包装器对象作为一个属性的键时，这个对象将被强制转换为它包装过的 symbol 值：

```js
var sym = Symbol("foo");
var obj = { [sym]: 1 };
obj[sym]; // 1
obj[Object(sym)]; // still 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考文档

- [Glossary: Symbol data type](/zh-CN/docs/Glossary/Symbol)
- {{jsxref("Operators/typeof", "typeof")}}
- [Data types and data structures](/zh-CN/docs/Web/JavaScript/Data_structures)
- ["ES6 In Depth: Symbols"（深入 ES6 Symbols）on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/)
