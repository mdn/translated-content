---
title: JavaScript 标准内置对象
slug: Web/JavaScript/Reference/Global_Objects
---

本章介绍和说明了 JavaScript 中所有的标准内置对象、以及它们的方法和属性。

这里的术语“全局对象”（或标准内置对象）不应与 **global 对象**混淆。这里的“全局对象”指的是**处在全局作用域里的多个对象**。

**global 对象**可以在全局作用域里通过使用 {{JSxRef("Operators/this", "this")}} 访问到（但只有在 ECMAScript 5 的非严格模式下才可以，在严格模式下得到的是 {{JSxRef("undefined")}}）。其实全局作用域**包含**全局对象中的属性，包括它可能继承来的属性。

全局作用域中的其他对象则可[由用户的脚本创建](/zh-CN/docs/Web/JavaScript/Guide/Working_with_objects#创建新对象)，或由宿主程序提供。浏览器环境中所提供的宿主对象的说明可以在这里找到：[API 参考](/zh-CN/docs/Web/API)。

要了解关于 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 和核心 [JavaScript](/zh-CN/docs/Web/JavaScript) 之间区别的更多信息，可参阅 [JavaScript 技术概述](/zh-CN/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)。

## 标准内置对象分类

### 值属性

这些全局属性返回一个简单值，这些值没有自己的属性和方法。

- {{JSxRef("globalThis")}}
- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}

### 函数属性

全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。

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

### 基本对象

基本对象是定义或使用其他对象的基础。

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

#### 错误对象

错误对象是一种特殊的基本对象。它们拥有基本的 {{JSxRef("Error")}} 类型，同时也有多种具体的错误类型。

- {{JSxRef("Error")}}
- {{JSxRef("AggregateError")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}
- {{JSxRef("InternalError")}} {{Non-Standard_Inline}}

### 数字和日期对象

用来表示数字、日期和执行数学计算的对象。

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}

### 字符串

这些对象表示字符串并支持操作字符串。

- {{JSxRef("String")}}
- {{JSxRef("RegExp")}}

### 可索引的集合对象

这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。

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

### 使用键的集合对象

这些集合对象在存储数据时会使用到键，包括可迭代的 {{JSxRef("Map")}} 和 {{JSxRef("Set")}}，支持按照插入顺序来迭代元素。

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### 结构化数据

这些对象用来表示和操作结构化的缓冲区数据，或使用 JSON（JavaScript Object Notation）编码的数据。

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("DataView")}}
- {{JSxRef("JSON")}}

### 内存管理对象

这些对象会与垃圾回收机制产生交互。

- {{JSxRef("WeakRef")}}
- {{JSxRef("FinalizationRegistry")}}

### 控制抽象对象

控件抽象对象可以帮助构造代码，尤其是异步代码（例如不使用深度嵌套的回调）。

- {{JSxRef("Iterator")}}
- {{JSxRef("AsyncIterator")}}
- {{JSxRef("Promise")}}
- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncGeneratorFunction")}}
- {{JSxRef("Generator")}}
- {{JSxRef("AsyncGenerator")}}
- {{JSxRef("AsyncFunction")}}

### 反射

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### 国际化

ECMAScript 核心的附加功能，用于支持多语言处理。

- {{JSxRef("Intl")}}
- {{JSxRef("Intl.Collator")}}
- {{JSxRef("Intl.DateTimeFormat")}}
- {{JSxRef("Intl.DisplayNames")}}
- {{JSxRef("Intl.DurationFormat")}}
- {{JSxRef("Intl.ListFormat")}}
- {{JSxRef("Intl.Locale")}}
- {{JSxRef("Intl.NumberFormat")}}
- {{JSxRef("Intl.PluralRules")}}
- {{JSxRef("Intl.RelativeTimeFormat")}}
- {{JSxRef("Intl.Segmenter")}}
