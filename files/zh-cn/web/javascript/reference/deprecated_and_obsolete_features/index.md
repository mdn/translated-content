---
title: 废弃和过时的特性
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
---

{{JsSidebar("More")}}

本附录列出了那些已经废弃（仍然可用，但是已计划删除）或者过时（已被删除，无法使用）的 JavaScript 特性。

## 废弃的特性

这些废弃的特性仍然可以使用，但是使用时一定要保持谨慎，因为它们很可能会在未来的某个时间点被移除。应当将其从需要使用的代码中移除。

ECMAScript 规范的 [Annex B](https://tc39.es/ecma262/#sec-additional-ecmascript-features-for-web-browsers) 部分列出了其中的一些废弃功能。这一部分被描述为规范性的可选功能，也就是说，web 浏览器主机必须实现这些功能，而非 web 主机可以不实现。这些功能很可能是稳定的，因为删除它们会导致向下兼容的问题，并破坏传统的网站（JavaScript 的设计目标是“不要破坏 web”）。尽管如此，它们还是不能跨平台移植，而且可能不被所有的分析工具所支持，所以建议你不要使用它们，正如 Annex B 的介绍所说：

> … All of the language features and behaviors specified in this annex have one or more undesirable characteristics and in the absence of legacy usage would be removed from this specification.（本附录中规定的所有语言特性和行为都有一个或多个不理想的特性，在没有遗留使用的情况下，将从本规范中删除。） …
>
> … Programmers should not use or assume the existence of these features and behaviors when writing new ECMAScript code.（程序员在编写新的 ECMAScript 代码时，不应该使用或假设这些特性和行为的存在。） …

其他一些，尽管在规范主体中，也被标记为规范性可选，不应该依赖它们。

### HTML 注释

如果 JavaScript 源码被作为脚本代码解析，它允许 HTML 注释，就像这些脚本是 `<script>` 的标签一部分那样。

以下是在 web 浏览器（或使用支持 Chrome 的 V8 引擎的 Node.js）中运行的有效 JavaScript 代码：

```js
<!-- 注释
console.log("a"); <!-- 另外一段注释
console.log("b");
--> 更多注释
// 输出 "a" 和 "b"
```

`<!--` 和 `-->` 的作用都与 `//` 类似，即起始行注释。`-->` 只在行首有效（以避免与紧跟大于运算符的后缀式自减相混淆），而 `<!--` 可以出现在行的任何地方。

### RegExp

下面的这些属性已经被废弃。这并不影响它们在[替换字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)中的使用。

- {{jsxref("RegExp/n", "$1–$9")}}
  - : 括号内的子串匹配结果。
- {{jsxref("RegExp.input", "input, $_")}}
  - : 用于匹配正则表达式的字符串。
- {{jsxref("RegExp.lastMatch", "lastMatch, $&amp;")}}
  - : 最后匹配的子串。
- {{jsxref("RegExp.lastParen", "lastParen, $+")}}
  - : 最后一个括号内的子串匹配。
- {{jsxref("RegExp.leftContext", "leftContext, $`")}}
  - : 最近一次匹配前的子串。
- {{jsxref("RegExp.rightContext", "rightContext, $'")}}
  - : 最近一次匹配后的子串。

> **警告：** 避免使用这些静态属性，因为它们可能导致[与外部代码交互时的问题](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc)！

{{jsxref("RegExp/compile", "compile()")}} 方法已被废弃，请构造一个新的 `RegExp` 实例。

### Function

- 函数的 {{jsxref("Global_Objects/Function/caller", "caller")}} 和 [`arguments.callee`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee) 属性在严格模式中废弃且不可用。
- 应该在函数闭包中使用 {{jsxref("Functions/arguments", "arguments")}} 对象，而不是将 `arguments` 作为函数的一个属性来访问。

{{jsxref("Global_Objects/Function/caller", "caller")}} 和 {{jsxref("Global_Objects/Function/arguments", "arguments")}} 属性已经废弃，因为它们会泄漏调用函数的对象。应当在函数内部使用 `arguments` 对象来代替函数的 `arguments` 属性。

### Object

- [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) 访问器已被废弃。使用 [`Object.getPrototypeOf`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) 和 [`Object.setPrototypeOf`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) 代替。这不适用于对象字面量中的 `__proto__` 字面键。
- [`Object.prototype.__defineGetter__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)、[`Object.prototype.__defineSetter__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)、[`Object.prototype.__lookupGetter__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) 和 [`Object.prototype.__lookupSetter__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) 方法已被废弃。使用 [`Object.getOwnPropertyDescriptor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) 和 [`Object.defineProperty`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)代替。

### String

- HTML 包装方法，如 {{jsxref("String.prototype.fontsize")}} 和 {{jsxref("String.prototype.big")}}。
- {{jsxref("String.prototype.substr")}} 可能不会很快被删除，但它被定义在 Annex B 中，因此是规范性的可选项。
- `String.prototype.trimLeft` 和 `String.prototype.trimRight` 应替换为 {{jsxref("String.prototype.trimStart")}} 和 {{jsxref("String.prototype.trimEnd")}}。

### Date

- {{jsxref("Global_Objects/Date/getYear", "getYear()")}} 和 {{jsxref("Global_Objects/Date/setYear", "setYear()")}}方法受千年虫问题影响，已并入 {{jsxref("Global_Objects/Date/getFullYear", "getFullYear")}} 和 {{jsxref("Global_Objects/Date/setFullYear", "setFullYear")}} 中。
- `toGMTString()` 方法已被弃用，请使用 {{jsxref("Global_Objects/Date/toUTCString", "toUTCString()")}} 方法。

### 转义序列

- 在字符串和正则表达式字面中，八进制转义序列（\ 后跟一个、两个或三个八进制数字）被弃用。
- {{jsxref("Global_Objects/escape", "escape")}} 和 {{jsxref("Global_Objects/unescape", "unescape")}} 函数已被弃用。使用 {{jsxref("Global_Objects/encodeURI", "encodeURI")}}、{{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}}、{{jsxref("Global_Objects/decodeURI", "decodeURI")}} 或 {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} 来对特殊字符的转义序列进行编码和解码。

### 语句

[`with`](/zh-CN/docs/Web/JavaScript/Reference/Statements/with) 语句在严格模式中已被弃用且不可用。

在严格模式下，[`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环头的 `var` 声明中的初始化器被弃用并产生[语法错误](/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer)。在非严格模式下，它们会被静默地忽略。

## 过时的特性

这些过时的功能已经从 JavaScript 中完全删除，从指定的 JavaScript 版本开始就不能再使用了。

### RegExp

以下是 `RegExp` 实例的属性，不再是 `RegExp` 构造函数的属性：

| 属性                                                                | 描述                                                                             |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| {{jsxref("RegExp/global", "global")}}                               | 是否针对字符串中所有可能的匹配进行正则表达式测试，或者只针对第一个匹配进行测试。 |
| {{jsxref("RegExp/ignoreCase", "ignoreCase")}}                       | 在尝试匹配一个字符串时是否忽略大小写。                                           |
| {{jsxref("RegExp/lastIndex", "lastIndex")}}                         | 开始下一次匹配的索引。                                                           |
| {{jsxref("RegExp/multiline", "multiline")}}（也可通过 `RegExp.$*`） | 是否在多行的字符串中搜索。                                                       |
| {{jsxref("RegExp/source", "source")}}                               | 模式的文本。                                                                     |

`valueOf()` 方法不再专门用于 `RegExp`。它使用 {{jsxref("Object.prototype.valueOf()")}}，并返回它本身。

### Function

- Function 的 `arity` 属性已经过时，请使用 [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length) 代替。

### Object

| 属性                         | 描述                                                                       | 替代方法                                                                                                                                                            |
| ---------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | 返回直接在用户定义的对象上的可枚举属性的数量。                             | [`Object.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                  |
| `__parent__`                 | 指向对象的上下文                                                           | 没有直接的替换方法                                                                                                                                                  |
| `__iterator__`               | 和[遗留的生成器和迭代器](#遗留的生成器和迭代器)一起使用。                  | [`Symbol.iterator`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) 和新的[迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | 当一个不存在的属性被作为方法调用时，这个方法被调用。                       | {{jsxref("Proxy")}}                                                                                                                                                 |
| `Object.prototype.eval()`    | 在指定对象的上下文中评估 JavaScript 代码字符串。                           | 没有直接的替换方法                                                                                                                                                  |
| `Object.observe()`           | 异步地观察一个对象的变化。                                                 | {{jsxref("Proxy")}}                                                                                                                                                 |
| `Object.unobserve()`         | 移除观察器。                                                               | {{jsxref("Proxy")}}                                                                                                                                                 |
| `Object.getNotifier()`       | 创建一个通知者对象，允许用 `Object.observe()` 来综合触发一个变化的观察者。 | 没有直接的替换方法                                                                                                                                                  |
| `Object.prototype.watch()`   | 在一个属性上附加一个处理器回调，当属性被分配时被调用。                     | {{jsxref("Proxy")}}                                                                                                                                                 |
| `Object.prototype.unwatch()` | 移除一个属性上的观察处理器。                                               | {{jsxref("Proxy")}}                                                                                                                                                 |

### String

- 非标准的字符串通用方法，如 `String.slice(myStr, 0, 12)`、`String.replace(myStr, /\./g, "!")` 等，在 Firefox 1.5（JavaScript 1.6）中引入，在 Firefox 53 中被废弃，并在 Firefox 68 中删除。你可以使用 {{jsxref("String", "String.prototype", "实例方法")}} 和 {{jsxref("Function.call")}} 来代替。
- `String.prototype.quote` 已在 Firefox 37 中移除。
- {{jsxref("String.prototype.search")}}、{{jsxref("String.prototype.match")}} 和 {{jsxref("String.prototype.replace")}} 中非标准的 `flags` 参数已被淘汰。

### WeakMap

- `WeakMap.prototype.clear()` 在 Firefox 20 中添加，在 Firefox 46 中移除。不可能遍历一个 [`WeakMap`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) 中的所有键。

### Date

- `Date.prototype.toLocaleFormat()` 使用与 C 语言中 `strftime()` 函数所期望的格式相同的格式字符串，已经过时了。使用 [`toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) 或 [`Intl.DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) 代替。

### Array

非标准的 Array 通用方法，如 `Array.slice(myArr, 0, 12)`、`Array.forEach(myArr, myFn)` 等，在 Firefox 1.5（JavaScript 1.6）中引入，在 Firefox 68 中被废弃，并在 Firefox 71 中删除。你可以使用 {{jsxref("Array", "Array.prototype", "实例方法")}} 和 {{jsxref("Function.call")}} 来代替。

| 属性                | 描述                 | 替代                |
| ------------------- | -------------------- | ------------------- |
| `Array.observe()`   | 异步地观察数组的变化 | {{jsxref("Proxy")}} |
| `Array.unobserve()` | 移除观察器。         | {{jsxref("Proxy")}} |

### Number

- `Number.toInteger()` 已经过时了。使用 [`Math.floor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)、[`Math.round`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round) 或其他方法代替。

### Proxy

- `Proxy.create` 和 `Proxy.createFunction` 已经过时了，请使用 {{jsxref("Proxy/Proxy", "Proxy()")}} 构造函数。
- 下列陷入已经过时：
  - `hasOwn`（[bug 980565](https://bugzil.la/980565)，Firefox 33）
  - `getEnumerablePropertyKeys`（[bug 783829](https://bugzil.la/783829)，Firefox 37）
  - `getOwnPropertyNames`（[bug 1007334](https://bugzil.la/1007334)，Firefox 33）
  - `keys`（[bug 1007334](https://bugzil.la/1007334)，Firefox 33）

### ParallelArray

- `ParallelArray` 已过时。

### 语句

- `for each...in` 已经过时了，使用 {{jsxref("Statements/for...of", "for...of")}} 代替。
- let 块和 let 表达式已经过时了。
- 表达式闭包（`function () 1` 作为`function () { return 1; }` 的缩写）已经过时。使用常规的 {{jsxref("Operators/function", "function")}} 或{{jsxref("Functions/Arrow_functions", "箭头函数", "", 1)}}代替。

### 获取源文本

数组、数字、字符串等的 `toSource()` 方法和 `uneval()` 全局函数已经过时。使用 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)，或者编写你自己的序列化方法来代替。

### 遗留的生成器和迭代器

遗留的生成器函数语句和遗留的生成器函数表达式被移除。传统的生成器函数语法重用了 `function` 关键字，当主体中有一个或多个 `yield` 表达式时，它自动成为生成器函数——现在这是一个语法错误。使用 [`function*` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)和 [`function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function*)代替。

数组推导式和生成器推导式已被移除。

```
// 遗留的数组推导式
[for (x of iterable) x]
[for (x of iterable) if (condition) x]
[for (x of iterable) for (y of iterable) x + y]

// 遗留的生成器推导式
(for (x of iterable) x)
(for (x of iterable) if (condition) x)
(for (x of iterable) for (y of iterable) x + y)
```

Firefox 26 版本之前实现了另一个迭代器协议，与标准的[迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)类似。当一个对象实现了 `next()` 方法时，它就是一个遗留的迭代器，该方法在每次调用时产生一个值，并在迭代结束时抛出一个 `StopIteration` 对象。这种遗留迭代器协议与标准迭代器协议不同：

- 值直接作为调用 `next()` 的返回值，而不是 `IteratorResult` 对象的 `value` 属性。
- 迭代终止是通过抛出一个 `StopIteration` 对象，而不是通过 `IteratorResult` 对象的 `done` 属性来表达。

这个功能，连同 `StopIteration` 全局构造函数，在 Firefox 58+ 中被移除。未来可以使用 [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环和[迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)。

### 变量引用语法（Sharp variable）

变量引用语法已经过时。要创建循环结构，请使用临时变量代替。
