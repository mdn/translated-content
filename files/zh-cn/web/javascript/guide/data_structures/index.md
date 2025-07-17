---
title: JavaScript 数据类型和数据结构
slug: Web/JavaScript/Guide/Data_structures
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

编程语言都有内置的数据结构，但各种编程语言的数据结构常有不同之处。本文尝试列出 JavaScript 语言中内置的数据结构及其属性。它们可以用来构建其他的数据结构。

[语言概述](/zh-CN/docs/Web/JavaScript/Guide/Language_overview)对常见的数据类型提供了类似的总结，但是更倾向于和其他语言进行比较。

## 动态类型和弱类型

JavaScript 是一门有着[动态类型](https://zh.wikipedia.org/wiki/類型系統#靜態和動態檢查)的[动态](https://zh.wikipedia.org/wiki/动态语言)语言。JavaScript 中的变量与任何特定值类型没有任何直接关联，任何变量都可以被赋值（和被重新赋值）为各种类型的值：

```js
let foo = 42; // foo 现在是数字
foo = "bar"; // foo 现在是字符串
foo = true; // foo 现在是布尔值
```

JavaScript 也是一门[弱类型](https://zh.wikipedia.org/wiki/強弱型別)语言，这意味着当运算涉及不匹配的类型时，它允许隐式类型转换，而不是抛出类型错误。

```js
const foo = 42; // foo 是数字
const result = foo + "1"; // JavaScript 将 foo 强制转换为字符串，因此可以将其与另一个操作数连接起来
console.log(result); // 421
```

隐式强制转换是非常方便的，但当转换在不期望发生的地方发生时，或者与期望发生的方向不同时（例如，字符串转换为数字，而不是数字转换为字符串），就会产生难以捉摸的错误。对于 [symbol](#symbol_类型) 和 [BigInt](#bigint_类型)，JavaScript 有意禁止了某些隐式类型转换。

## 原始值

除了 [Object](#object) 以外，所有的类型都定义了[不可变的](/zh-CN/docs/Glossary/Immutable)、在语言最底层直接表示的值。我们将这些类型的值称为*原始值*。

除了 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 以外，所有的原始类型都可以使用 [`typeof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof) 运算符进行测试。`typeof null` 返回 `"object"`，因此必须使用 `=== null` 来测试 `null`。

除了 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 和 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 以外，所有的原始类型都有对应的对象包装类型，它们为处理原始值提供了有用的方法。例如，[`Number`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 对象提供了像 [`toExponential()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) 这样的方法。当在原始值上访问属性时，JavaScript 会自动将值包装成对应的包装对象，并访问对象上的属性。然而，在 `null` 或 `undefined` 上访问属性时，会抛出 `TypeError` 异常，这需要使用[可选链](/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)运算符。

| 类型                         | `typeof` 返回值 | 对象包装器            |
| ---------------------------- | --------------- | --------------------- |
| [Null](#null_类型)           | `"object"`      | 不适用                |
| [Undefined](#undefined_类型) | `"undefined"`   | 不适用                |
| [Boolean](#boolean_类型)     | `"boolean"`     | {{jsxref("Boolean")}} |
| [Number](#number_类型)       | `"number"`      | {{jsxref("Number")}}  |
| [BigInt](#bigint_类型)       | `"bigint"`      | {{jsxref("BigInt")}}  |
| [String](#string_类型)       | `"string"`      | {{jsxref("String")}}  |
| [Symbol](#symbol_类型)       | `"symbol"`      | {{jsxref("Symbol")}}  |

对象包装器类的参考页面包含每个类型可用的方法和属性的更多信息，以及原始类型自身语义的详细描述。

### Null 类型

Null 类型只有一个值：[`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

### Undefined 类型

Undefined 类型只有一个值：[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

从概念上讲，`undefined` 表示*值*缺失，`null` 表示*对象*缺失（这也解释了 [`typeof null === "object"`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)）。当某些东西没有值时，JavaScript 语言通常默认为 `undefined`：

- 没有值的 [`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return) 语句（`return;`），隐式返回 `undefined`。
- 访问不存在的[对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)属性（`obj.iDontExist`），返回 `undefined`。
- 变量声明时没有初始化（`let x;`），隐式初始化为 `undefined`。
- 许多像 {{jsxref("Array.prototype.find()")}} 和 {{jsxref("Map.prototype.get()")}} 的方法，当没有找到元素时，返回 `undefined`。

`null` 在核心语言中使用频率少得多。最重要的地方是[原型链](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)的末端，其次是与原型交互的方法，如 {{jsxref("Object.getPrototypeOf()")}}、{{jsxref("Object.create()")}} 等，接受或返回 `null` 而不是 `undefined`。

`null` 是一个[关键字](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#关键字)，但 `undefined` 是一个普通的[标识符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)，这个标识符恰好是一个全局属性。实际上区别很小，因为 `undefined` 不应该被重新定义或者遮蔽。

### Boolean 类型

{{jsxref("Boolean")}} 类型表示一个逻辑实体并且包括两个值：`true` 和 `false`。

布尔值通常用于条件运算，包括[三元运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_operator)、[`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)、[`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while) 等。

### Number 类型

{{jsxref("Number")}} 类型是一种[基于 IEEE 754 标准的双精度 64 位二进制格式的值](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_编码)。它能够存储 2<sup>-1074</sup>（{{jsxref("Number.MIN_VALUE")}}）和 2<sup>1023</sup> × (2 - 2<sup>-52</sup>)（{{jsxref("Number.MAX_VALUE")}}）之间的正浮点数，以及相同范围的负浮点数，但是它仅能安全地存储在 -(2<sup>53</sup> − 1)（{{jsxref("Number.MIN_SAFE_INTEGER")}}）到 2<sup>53</sup> − 1（{{jsxref("Number.MAX_SAFE_INTEGER")}}）范围内的整数。超出这个范围，JavaScript 将不能安全地表示整数；相反，它们将由双精度浮点近似值表示。你可以使用 {{jsxref("Number.isSafeInteger()")}} 检查一个数是否在安全的整数范围内。

超出表示范围的值会自动转换：

- 大于 {{jsxref("Number.MAX_VALUE")}} 的正值被转换为 `+Infinity`。
- 小于 {{jsxref("Number.MIN_VALUE")}} 的正值被转换为 `+0`。
- 小于 -{{jsxref("Number.MAX_VALUE")}} 的负值被转换为 `-Infinity`。
- 大于 -{{jsxref("Number.MIN_VALUE")}} 的负值被转换为 `-0`。

`+Infinity` 和 `-Infinity` 行为类似于数学上的无穷大，但是有一些细微的区别；更多细节，参见 {{jsxref("Number.POSITIVE_INFINITY")}} 和 {{jsxref("Number.NEGATIVE_INFINITY")}}。

Number 类型仅有一个具有多个表现形式的值：`-0` 和 `+0` 都表示 `0`（其中 `0` 是 `+0` 的别名）。实际上，这两者之间几乎没有区别；例如，`+0 === -0` 是 `true`。然而，当你除以 0 的时候，你会注意到区别：

```js
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

{{jsxref("NaN")}}（“**N**ot **a** **N**umber”）是一个特殊种类的数字值，当算术运算的结果不能表示为数字时，通常会遇到它。它也是 JavaScript 中唯一不等于自身的值。

虽然 number 在概念上是一个“数学的值”，并且总是隐式的编码为浮点类型，但是 JavaScript 提供了[位运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#位运算符)。当应用位运算符时，number 首先转换为 32 位整数。

> [!NOTE]
> 尽管位运算符*可以*使用[位掩码](https://zh.wikipedia.org/wiki/掩码)来表示单个数字中的几个布尔值，但这通常不是最佳实践。JavaScript 提供了表示一组布尔值的其他方法（如布尔数组，或将布尔值赋值给具名属性的对象）。位掩码也往往让代码更难阅读、理解和维护。

在非常受限的环境中使用此类技术可能很必要，例如在试图应对本地存储的限制时，或在极端情况下（例如当网络上的每个位计数时）。只有当它是最后的优化大小的措施时，才应考虑这项技术。

### BigInt 类型

{{jsxref("BigInt")}} 类型是 JavaScript 中的数字原始类型，它可以表示任意大小的整数。使用 BigInt，你可以安全地存储和操作巨大的整数，即便是超过 Number 的安全整数限制（{{jsxref("Number.MAX_SAFE_INTEGER")}}）。

BigInt 通过在整数末尾添加 `n` 或调用 [`BigInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 函数创建。

本例演示了递增 {{jsxref("Number.MAX_SAFE_INTEGER")}} 会返回预期的结果：

```js
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false，因为 9007199254740992n 和 9007199254740993n 不相等

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true，因为都等于 9007199254740992
```

你可以使用大多数运算符处理 BigInt，包括 `+`、`*`、`-`、`**` 和 `%`——唯一被禁止的是 [`>>>`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)。BigInt 并不是[严格等于](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)有着相同数学值的 Number，而是[非严格相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)。

BigInt 值和 number 值相比，不总是更精确，也不总是更不精确，因为 BigInt 不能表示小数，但能更精确地表示大整数。这两种类型都不能相互替代。如果在算术表达式中将 BigInt 值和常规 number 值混合，或者它们相互[隐式转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)，则抛出 {{jsxref("TypeError")}}。

### String 类型

{{jsxref("String")}} 类型表示文本数据并编码为 [UTF-16 码元](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)的 16 位无符号整数值序列。字符串中的每个元素在字符串中占据一个位置。第一个元素的索引为 `0`，下一个的索引为 `1`，依此类推。字符串的[长度](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length)是其中的 UTF-16 码元的数量，这可能与 Unicode 字符的实际数量不符；更多细节参见 [`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇) 参考页面。

JavaScript 字符串是不可变的。这意味着一旦字符串被创建，就不可能修改它。字符串方法会基于当前字符串的内容创建一个新的字符串——例如：

- 使用 [`substring()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring) 获取原始字符串的子字符串。
- 使用串联运算符（`+`）或 [`concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat) 将两个字符串串联。

#### 注意代码中的“字符串类型”！

使用字符串来表示复杂的数据可能很诱人。这样做会带来短期的好处：

- 通过字符串拼接构造复杂的字符串很容易。
- 字符串容易调试（你看到的打印内容始终是字符串中的内容）。
- 字符串是许多 API 的常见标准（[input 字段](/zh-CN/docs/Web/API/HTMLInputElement)、[local storage](/zh-CN/docs/Web/API/Web_Storage_API) 中的值，以及 [`fetch()`](/zh-CN/docs/Web/API/Window/fetch) 使用 {{domxref("Response.text()")}} 时的响应，等等）而且这些 API 可能只能与字符串一同使用。

按照常规，用字符串表示任何数据结构是可能的。但这并不总是一个好主意。例如，使用一个分隔符，可以模拟一个列表（然而 JavaScript 数组更适合）。不幸的是，当分隔符是某个“列表”元素时，列表就遭到破坏。这时可以选择转义字符，等等。所有这些都需要约定，并造成不必要的维护负担。

表示文本数据时推荐使用字符串。当需要表示复杂的数据时，使用字符串*解析*并使用适当的抽象。

### Symbol 类型

{{jsxref("Symbol")}} 是一种**唯一**并且**不可变**的原始值，并且可以用作对象属性的键（如下）。在某些程序语言中，Symbol 也被称作“原子”。symbol 的目的是创建唯一的属性键，保证不会与其他代码中的键产生冲突。

## Object

在计算机科学中，对象是指内存中的值，这块内存可能被[标识符](/zh-CN/docs/Glossary/Identifier)引用。在 JavaScript 中，对象是唯一[可变](/zh-CN/docs/Glossary/Mutable)的值。事实上，[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)也是具有可*调用*这个额外能力的对象。

### 属性

在 JavaScript 中，对象可以被看作是一个属性的集合。用[对象字面量语法](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#对象字面量)会初始化一组有限的属性；然后，可以添加和移除属性。对象属性等价于键值对。属性键要么是[字符串](#string_类型)，要么是 [symbol](#symbol_类型)。当其他类型（如数字）用于索引对象时，值会隐式地转化为字符串。属性值可以是任何类型的值，包括其他对象，从而可以构建复杂的数据结构。

有两种类型的对象属性：[*数据*属性](#数据属性)和[*访问器*属性](#访问器属性)。每个属性都有对应的*特性*。每个特性由 JavaScript 引擎进行内部访问，但是你可以通过 {{jsxref("Object.defineProperty()")}} 设置它们，或通过 {{jsxref("Object.getOwnPropertyDescriptor()")}} 读取它们。你可以在 {{jsxref("Object.defineProperty()")}} 页面阅读更多有关各种细微差别的信息。

#### 数据属性

数据属性将键与值相关联。它可以由以下特性描述：

- `value`
  - : 通过属性的 get 访问获取值。可以是任意的 JavaScript 值。
- `writable`
  - : 布尔值，表示属性是否可以通过赋值进行修改。
- `enumerable`
  - : 布尔值，表示属性是否可以通过 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环进行枚举。另请参阅[属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)，以了解枚举性如何与其他函数和语法交互。
- `configurable`
  - : 布尔值，表示属性是否可以删除，是否可以更改为访问器属性，以及是否可以更改其特性。

#### 访问器属性

将键与两个访问器函数（`get` 和 `set`）相关联，以获取或者存储值。

> [!NOTE]
> 重要的是，意识到它是访问器*属性*——而不是访问器*方法*。我们可以将函数作为值给一个 JavaScript 对象提供近似于类的访问器——但这并不能使该对象成为类。

访问器属性有以下特性：

- `get`
  - : 当执行值的 get 访问时，使用一个空的参数列表调用函数获取属性值。参见 [getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get)。可能是 `undefined`。
- `set`
  - : 使用包含赋予的值的参数调用函数。每当尝试更改指定属性时执行。参见 [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)。可能是 `undefined`。
- `enumerable`
  - : 布尔值，表示属性是否可以通过 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环进行枚举。另请参阅[属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)，以了解枚举性如何与其他函数和语法交互。
- `configurable`
  - : 布尔值，表示属性是否可以删除，是否可以更改为访问器属性，以及是否可以更改其特性。

对象的[原型](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)指向另一个对象或者 `null`——从概念上讲，它是对象的隐藏属性，通常表示为 `[[Prototype]]`。对象的 `[[Prototype]]` 的属性也可以在对象自身上访问。

对象是临时的键值对，因此经常被用作 map。不过，这可能存在人体工程学、安全性和性能方面的问题。请使用 {{jsxref("Map")}} 存储任意的数据。[`Map` 参考](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map#object_和_map_的比较)对使用普通对象和使用 map 存储键值之间的利弊进行了更详细的讨论。

### Date

当表示日期时，最好的选择是使用 JavaScript 中内置的 [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 工具类。

### 索引类集合：数组和类型化数组

[数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)是整数键的属性和 `length` 属性之间有着特殊关系的常规对象。

此外，数组继承了 `Array.prototype` 的一组操作数组的便捷方法。例如，[`indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)（搜索数组中的一个值）或 [`push()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)（向数组追加一个元素），等等。这使得数组成为表示有序列表的理想选择。

[类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)表示底层二进制缓冲区的类数组视图，并且提供了与数组相对应的类似语义的方法。“类型化数组”是一系列数据结构的总话术语，包括 `Int8Array`、`Float32Array` 等等。获取更多细节，请查看[类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)页。类型化数组通常与 {{jsxref("ArrayBuffer")}} 和 {{jsxref("DataView")}} 一起使用。

### 带键的集合：Map、Set、WeakMap、WeakSet

这些数据结构把对象的引用当作键。{{jsxref("Set")}} 和 {{jsxref("WeakSet")}} 表示唯一值的集合，而 {{jsxref("Map")}} 和 {{jsxref("WeakMap")}} 表示键值相关联的集合。

你也可以自己实现 `Map` 和 `Set`。然而，因为对象不能比较（例如，在 `<`“小于”的意义上），另一方面，引擎也没有暴露对象的散列函数，因此查找性能必定是线性的。它们的原生实现（包括 `WeakMap`）有着近似对数到常数时间的查找性能。

通常，要将数据绑定到 DOM 节点，可以直接在对象上设置属性，或使用 `data-*` 属性。这样做的缺点是，在同一上下文中运行的任何脚本都可以使用这些数据。而 `Map` 和 `WeakMap` 则可以轻松地将数据*隐蔽地*绑定到对象上。

`WeakMap` 和 `WeakSet` 只允许将可垃圾回收的值作为键，这些键要么是对象，要么是[未注册的 symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，即使键仍在集合中，也可能被回收。它们专门用于[优化内存使用](/zh-CN/docs/Web/JavaScript/Guide/Memory_management#帮助内存管理的数据结构)。

### 结构化数据：JSON

JSON（**J**ava**S**cript **O**bject **N**otation）是一种轻量级的数据交换格式，来源于 JavaScript，同时也被多种语言所使用。JSON 构建了通用的数据结构，可以在不同环境之间传输，甚至可以跨语言传输。更多细节，请参见 {{jsxref("JSON")}}。

### 标准库中的更多对象

JavaScript 有一个内置对象的标准库。请阅读[参考](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)了解有关内置对象的更多信息。

## 强制类型转换

如上所述，JavaScript 是一门[弱类型](#动态类型和弱类型)语言。这意味着你可以经常使用与预期类型不同的类型的值，JavaScript 语言将为你把它转换为正确的类型。为此，JavaScript 定义了一些强制转换规则。

### 原始值强制转换

[原始值强制转换](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive)过程用于得到期望的原始值，但对实际的类型应该是什么并没有强烈的偏好。通常情况下可以接受 [string](#string_类型)、[number](#number_类型) 或 [BigInt](#bigint_类型)。例如：

- [`Date()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) 构造函数，当它收到一个不是 `Date` 实例的参数时——字符串表示日期字符串，而 number 表示时间戳。
- [`+`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition) 运算符——如果某个操作数是字符串，执行字符串串联；否则，执行数字相加。
- [`==`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality) 运算符——如果某个操作数是原始值，而另一个操作数是对象（object），则该对象将转换为没有首选类型的原始值。

如果值已经是原始值，则此操作不会进行任何转换。对象将依次调用它的 [`[Symbol.toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)（将 `default` 作为 hint 值）、`valueOf()` 和 `toString()` 方法，将其转换为原始值。注意，原始值转换会在 `toString()` 方法之前调用 `valueOf()` 方法，这与 [number 强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)的行为相似，但与[字符串强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)不同。

`[Symbol.toPrimitive]()` 方法，如果存在，则必须返回原始值——返回对象，会导致 {{jsxref("TypeError")}}。对于 `valueOf()` 和 `toString()`，如果其中一个返回对象，则忽略其返回值，从而使用另一个的返回值；如果两者都不存在，或者两者都没有返回原始值，则抛出 {{jsxref("TypeError")}}。例如，在下面的代码中：

```js
console.log({} + []); // "[object Object]"
```

`{}` 和 `[]` 都没有 `[Symbol.toPrimitive]()` 方法。`{}` 和 `[]` 都从 {{jsxref("Object.prototype.valueOf")}} 继承 `valueOf()`，其返回对象自身。因为返回值是对象，所以它被忽略。因此，调用 `toString()` 方法。[`{}.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 返回 `"[object Object]"`，而 [`[].toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) 返回 `""`，因此这个结果是它们的串联：`"[object Object]"`。

在强制转换为任意的原始类型时，`[Symbol.toPrimitive]()` 方法总是优先调用。原始值强制转换的行为通常与 number 强制转换类似，因为优先调用了 `valueOf()`；然而，有着自定义 `[Symbol.toPrimitive]()` 方法的对象可以选择返回任意的原始值。{{jsxref("Date")}} 和 {{jsxref("Symbol")}} 对象是唯一重写 `[Symbol.toPrimitive]()` 方法的对象。[`Date.prototype[Symbol.toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) 将 `"string"` 视为 `"default"` hint，而 [`Symbol.prototype[Symbol.toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) 忽略 hint 并始终返回一个 symbol。

### 数字类型强制转换

有两种数字类型：[Number](#number_类型) 和 [BigInt](#bigint_类型)。有时候，JavaScript 语言期望使用 number 或 BigInt（例如 {{jsxref("Array.prototype.slice()")}}，其中索引必须是 number）；其他时候，它可能容忍并且根据操作数的类型执行不同的运算。有关不允许从其他类型隐式转换的严格强制转换过程，请参阅 [number 强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)和 [BigInt 强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_强制转换)。

数字类型强制转换与 [number 强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)几乎相同，只是 BigInt 会按原样返回，而不是引起 {{jsxref("TypeError")}}。强制数字类型转换用于所有算术运算，因为它们重载了 number 和 BigInt 类型。唯一例外的是[一元加](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)，它总是实施 number 强制转换。

### 其他类型强制转换

除了 Null、Undefined 以及 Symbol 类型以外，所有的数据类型都有它们各自的强制转换过程。更多细节，请参见[字符串强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)、[布尔值强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean#布尔值强制转换)以及[对象强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#对象强制转换)。

你可能已经注意到，有三种不同的路径可以将对象转换为原始值：

- [原始值强制转换](#原始值强制转换)：`[Symbol.toPrimitive]("default")` → `valueOf()` → `toString()`
- [数字类型强制转换](#数字类型强制转换)、[number 强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)、[BigInt 强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_强制转换)：`[Symbol.toPrimitive]("number")` → `valueOf()` → `toString()`
- [字符串强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)：`[Symbol.toPrimitive]("string")` → `toString()` → `valueOf()`

在所有情况下，`[Symbol.toPrimitive]()` 如果存在，必须可调用并返回原始值，而如果 `valueOf` 或 `toString` 不可调用或返回对象，它们将被忽略。在过程结束时，如果成功，结果保证是原始值。然后，由此产生的原始值会根据上下文进一步的进行强制类型转换。

## 参见

- [JavaScript 数据结构和算法](https://github.com/trekhleb/javascript-algorithms)，由 Oleksii Trekhleb 撰写
- [JavaScript 中的计算机科学](https://github.com/humanwhocodes/computer-science-in-javascript)，由 Nicholas C. Zakas 撰写
