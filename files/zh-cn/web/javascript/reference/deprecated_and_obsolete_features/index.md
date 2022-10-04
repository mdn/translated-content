---
title: 废弃和过时的特性
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
---

{{JsSidebar("More")}}

本附录列出了那些已经废弃（仍然可用，但是已计划删除）或者过时（已被删除，无法使用）的 JavaScript 特性。

## 废弃特性

这些废弃的特性仍然可以使用，但是使用时一定要保持谨慎，因为它们很可能会在未来的某个时间点被移除。应当将其从需要使用的代码中移除。

### RegExp 对象的属性

下面的这些属性已经被废弃。注意，这和{{jsxref("String.replace", "替换字符串")}}中使用的同名标记没有直接关系。

| 属性                                                             | 描述                                     |
| ---------------------------------------------------------------- | ---------------------------------------- |
| {{jsxref("RegExp.n", "$1-$9")}}                         | 捕获分组的匹配结果。                     |
| {{jsxref("RegExp.input", "$_")}}                     | `input` 属性的别名。                     |
| {{jsxref("RegExp.multiline", "$*")}}                 | `multiline` 属性的别名。                 |
| {{jsxref("RegExp.lastMatch", "$&amp;")}}             | `lastMatch` 属性的别名。                 |
| {{jsxref("RegExp.lastParen", "$+")}}                 | `lastParen` 属性的别名。                 |
| {{jsxref("RegExp.leftContext", "$`")}}             | `leftContext` 属性的别名。               |
| {{jsxref("RegExp.rightContext", "$'")}}             | `rightContext` 属性的别名。              |
| {{jsxref("RegExp.input", "input")}}                 | 正则表达式的匹配结果。                   |
| {{jsxref("RegExp.lastMatch", "lastMatch")}}         | 上次匹配结果的最后一个字符串。           |
| {{jsxref("RegExp.lastParen", "lastParen")}}         | 上次匹配中，最后一个捕获分组的匹配结果。 |
| {{jsxref("RegExp.leftContext", "leftContext")}} | 上次匹配结果左边的字符串。               |
| {{jsxref("RegExp.rightContext", "rightContext")}} | 上次匹配结果右边的字符串。               |

应该使用下面这些 `RegExp` 实例上的同名属性来代替上面这些 `RegExp` 对象的属性：

| 属性                                                         | 描述                             |
| ------------------------------------------------------------ | -------------------------------- |
| {{jsxref("RegExp.global", "global")}}             | 该正则是否开启了全局匹配模式。   |
| {{jsxref("RegExp.ignoreCase", "ignoreCase")}} | 该正则是否开启了忽略大小写模式。 |
| {{jsxref("RegExp.lastIndex", "lastIndex")}}     | 上次成功匹配的索引位置。         |
| {{jsxref("RegExp.multiline", "multiline")}}     | 该正则是否开启了多行模式。       |
| {{jsxref("RegExp.source", "source")}}             | 正则的源文本。                   |

### RegExp 对象的方法

{{jsxref("RegExp.compile", "compile()")}} 方法已被废弃。

`valueOf` 方法已被废弃。使用 {{jsxref("Object.valueOf()")}} 代替它。

### Function 对象的属性

{{jsxref("Global_Objects/Function/caller", "caller")}} 和 {{jsxref("Global_Objects/Function/arguments", "arguments")}} 属性已经废弃，因为它们会泄漏调用函数的对象。应当在函数内部使用 `arguments` 对象来代替函数的 `arguments` 属性。

### 遗留的生成器

- {{jsxref("Statements/Legacy_generator_function", "遗留的生成器函数声明")}}和 {{jsxref("Operators/Legacy_generator_function", "遗留的生成器函数表达式")}}已被废弃。使用 {{jsxref("Statements/function*", "function* 声明")}}和 {{jsxref("Operators/function*", "function* 表达式")}}代替它们。
- {{jsxref("Operators/Array_comprehensions", "JS1.7/JS1.8 Array comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} 和 {{jsxref("Operators/Generator_comprehensions", "JS1.7/JS1.8 Generator comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} 已被废弃。

### 迭代器

- 全局对象 {{jsxref("Global_Objects/StopIteration", "StopIteration")}} 已被废弃。
- 全局对象 {{jsxref("Global_Objects/Iterator", "Iterator")}} 已被废弃。

### Object 对象的方法

- {{jsxref("Object.watch", "watch")}} 方法和 {{jsxref("Object.unwatch", "unwatch")}} 方法已被废弃。使用 {{jsxref("Proxy")}} 并编写相应的捕获器代替它们。
- `__iterator__` 方法已被废弃。
- {{jsxref("Object.noSuchMethod", "__noSuchMethod__")}} 方法已被废弃。使用 {{jsxref("Proxy")}} 并编写相应的捕获器作为代替。

### Date 对象的方法

- {{jsxref("Global_Objects/Date/getYear", "getYear")}} 方法和 {{jsxref("Global_Objects/Date/setYear", "setYear")}} 方法受千年虫问题（Year-2000-Problem）影响，已被 {{jsxref("Global_Objects/Date/getFullYear", "getFullYear")}} 方法和 {{jsxref("Global_Objects/Date/setFullYear", "setFullYear")}} 方法代替。
- 应当使用 {{jsxref("Global_Objects/Date/toISOString", "toISOString")}} 方法代替已废弃的 {{jsxref("Global_Objects/Date/toGMTString", "toGMTString")}} 方法。
- {{jsxref("Global_Objects/Date/toLocaleFormat", "toLocaleFormat")}} 已被废弃。

### 函数

- {{jsxref("Operators/Expression_closures", "表达式闭包")}}已被废弃。请用普通{{jsxref("Operators/function", "函数")}}或{{jsxref("Functions/Arrow_functions", "箭头函数")}}代替它。

### Proxy

- [`Proxy.create()`](/zh-CN/docs/Archive/Web/Old_Proxy_API) 和 [`Proxy.createFunction()`](/zh-CN/docs/Archive/Web/Old_Proxy_API) 已被废弃。使用 {{jsxref("Proxy")}} 即可。
- 下列捕获器已经过时：

  - `hasOwn` ([bug 980565](https://bugzilla.mozilla.org/show_bug.cgi?id=980565), Firefox 33).
  - `getEnumerablePropertyKeys` ([bug 783829](https://bugzilla.mozilla.org/show_bug.cgi?id=783829), Firefox 37)
  - `getOwnPropertyNames` ([bug 1007334](https://bugzilla.mozilla.org/show_bug.cgi?id=1007334), Firefox 33)
  - `keys` ([bug 1007334](https://bugzilla.mozilla.org/show_bug.cgi?id=1007334), Firefox 33)

### 转义序列

字符串字面量（literal）和正则表达式字面量中的八进制转义序列（反斜杠 `\` 后跟一到三位的八进制数字）已被废弃。

{{jsxref("Global_Objects/escape", "escape")}} 函数和 {{jsxref("Global_Objects/unescape", "unescape")}}函数已被废弃。使用 {{jsxref("Global_Objects/encodeURI", "encodeURI")}}、{{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}}、{{jsxref("Global_Objects/decodeURI", "decodeURI")}} 或 {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} 对特殊字符进行转义序列编码和解码。

### String 对象的方法

- [HTML 封装方法](/zh-CN/docs/tag/HTML%20wrapper%20methods)，比如 {{jsxref("String.prototype.fontsize")}} 和 {{jsxref("String.prototype.big")}}，已被废弃。
- {{jsxref("String.prototype.quote")}} 已在 Firefox 37 中被移除。
- non standard `flags` parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, and {{jsxref("String.prototype.replace")}} are deprecated.
- {{jsxref("String.prototype.substr")}} probably won't be removed anytime soon, but it's defined in [Annex B](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.substr) of the ECMA-262 standard, whose [introduction](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-additional-ecmascript-features-for-web-browsers) states: "… Programmers should not use or assume the existence of these features and behaviours when writing new ECMAScript code. …"

## 过时特性

这些过时的特性已经完全被删除，不能在当前或者未来版本的 JavaScript 中使用了。

### Object 对象

| 属性                                                                                     | 描述                                                             |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| {{jsxref("Global_Objects/Object/count", "__count__")}}                 | 返回用户自定义对象上的可枚举自身属性的个数。                     |
| {{jsxref("Global_Objects/Object/Parent", "__parent__")}}             | 指向一个对象的上下文。                                           |
| {{jsxref("Global_Objects/Object/eval", "Object.prototype.eval()")}} | 在指定对象的上下文上执行一个包含 JavaScript 代码的字符串。       |
| {{jsxref("Object.observe()")}}                                                 | Asynchronously observing the changes to an object.               |
| {{jsxref("Object.unobserve()")}}                                             | Remove observers.                                                |
| {{jsxref("Object.getNotifier()")}}                                             | Creates an object that allows to synthetically trigger a change. |

### 函数

| 属性                                                                 | 描述         |
| -------------------------------------------------------------------- | ------------ |
| {{jsxref("Global_Objects/Function/arity", "arity")}} | 形参的数量。 |

### Array 对象

| 属性                                     | 描述                                        |
| ---------------------------------------- | ------------------------------------------- |
| {{jsxref("Array.observe()")}} | Asynchronously observing changes to Arrays. |
| {{jsxref("Array.unobserve()")}} | Remove observers.                           |

### Number 对象

- {{jsxref("Number.toInteger()")}}

### ParallelArray 对象

- {{jsxref("ParallelArray")}}

### 声明

- {{jsxref("Statements/for_each...in", "for each...in")}} 声明已被废弃。使用 {{jsxref("Statements/for...of", "for...of")}} 作为代替。
- 解构 {{jsxref("Statements/for...in", "for...in")}} 声明已被废弃。使用 {{jsxref("Statements/for...of", "for...of")}} 作为代替。
- let 区块和 let 表达式已被废弃。

### E4X

详见 [E4X](/zh-CN/docs/Archive/Web/E4X)。

### 变量引用语法（Sharp variables）

详见 [JavaScript 中的变量引用语法](/zh-CN/docs/Archive/Web/Sharp_variables_in_JavaScript)。
