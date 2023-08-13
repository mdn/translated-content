---
title: JavaScript 数据类型和数据结构
slug: Web/JavaScript/Data_structures
---

{{jsSidebar("More")}}

编程语言都具有内建的数据结构，但各种编程语言的数据结构常有不同之处。本文试图列出 JavaScript 语言中内建的数据结构及其属性，它们可以用来构建其他的数据结构。同时尽可能地描述与其他语言的不同之处。

[JavaScript 语言概述](/zh-CN/docs/Web/JavaScript/Language_overview)提供了对常见数据类型的类似总结，但是和其他的语言有着更多的比较。

## 动态和弱类型

JavaScript 是一种有着[动态类型](https://zh.wikipedia.org/wiki/類型系統#靜態和動態檢查)的[动态](https://zh.wikipedia.org/wiki/动态语言)语言。JavaScript 中的变量与任何特定值类型没有任何关联，并且任何变量都可以分配（重新分配）所有类型的值：

```js
let foo = 42; // foo 现在是一个数值
foo = "bar"; // foo 现在是一个字符串
foo = true; // foo 现在是一个布尔值
```

JavaScript 也是一个[弱类型](https://en.wikipedia.org/wiki/Strong_and_weak_typing)语言，这意味着当操作涉及不匹配的类型是否，它将允许隐式类型转换，而不是抛出一个错误。

```js
const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
```

强制隐式转换是非常方便的，但是如果开发者不打算转换，或者打算向另一个方向转换（例如，字符串转数值而不是数值到字符串），则会存在潜在的隐患。对于 [symbol](#symbol-类型) 和 [BigInt](#bigint-类型)，JavaScript 总是不允许某些隐式类型转换。

## 原始值

除了 [Object](#object) 以外，所有类型都定义了表示在语言最低层面的[不可变](/zh-CN/docs/Glossary/Immutable)值。我们将这些值称为*原始值*。

除了 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)，所有原始类型都可以使用 [`typeof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof) 运算符测试。`typeof null` 返回 `"object"`，因此必须使用 `=== null` 来测试 `null`。

除了 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 和 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)，所有原始类型都有它们相应的对象包装类型，这为处理原始值提供可用的方法。例如，[`Number`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 对象提供向 [`toExponential()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) 这样的方法。当在原始值上访问属性时，JavaScript 会自动将值包装到相应的包装对象中，并访问对象上的属性。然而，在 `null` 或 `undefined` 上访问属性时，会抛出 `TypeError` 异常，这需要采用[可选链](/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)运算符。

| 类型                         | `typeof` 返回值 | 对象包装器            |
| ---------------------------- | --------------- | --------------------- |
| [Null](#null_类型)           | `"object"`      | N/A                   |
| [Undefined](#undefined_类型) | `"undefined"`   | N/A                   |
| [Boolean](#boolean_类型)     | `"boolean"`     | {{jsxref("Boolean")}} |
| [Number](#number_类型)       | `"number"`      | {{jsxref("Number")}}  |
| [BigInt](#bigint_类型)       | `"bigint"`      | {{jsxref("BigInt")}}  |
| [String](#string_类型)       | `"string"`      | {{jsxref("String")}}  |
| [Symbol](#symbol_类型)       | `"symbol"`      | {{jsxref("Symbol")}}  |

对象包装器类的参考页面包含关于每个类型可用方法和属性类型的更多用法，以及原始类型本身的详细描述。

### Null 类型

Null 类型只有一个值：[`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

### undefined 类型

Undefined 类型只有一个值：[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

从概念上讲，`undefined` 表示没有任何*值*，`null` 表示没有任何*对象*（这也可以构成 [`typeof null === "object"` 的接口](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)）。当某些东西没有值时，该语言通常默认为 `undefined`：

- 没有值（`return;`）的 [`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return) 语句，隐式返回 `undefined`。
- 访问不存在的[对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)属性（`obj.iDontExist`），返回 `undefined`。
- 变量声明时没有初始化（`let x;`），隐式初始化为 `undefined`。
- 许多如 {{jsxref("Array.prototype.find()")}} 和 {{jsxref("Map.prototype.get()")}} 的方法，当没有发现元素时，返回 `undefined`。

`null` 在核心语言中使用频率少得多。最重要的地方是[原型链的末端](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)——其次是与原型交互的方法，如 {{jsxref("Object.getPrototypeOf()")}}、{{jsxref("Object.create()")}} 等，接受或返回 `null` 而不是 `undefined`。

`null` 是一个[关键字](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#关键字)，但是 `undefined` 是一个普通的[标识符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)，恰好是一个全局属性。在实践中，这两个差异很小，因为 `undefined` 不应该被重新定义或者遮蔽。

### Boolean 类型

{{jsxref("Boolean")}} 类型表示一个逻辑实体并且包括两个值：`true` 和 `false`。

布尔值通常用于条件运算，包括[三元运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_operator)、[`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)、[`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while) 等。

### Number 类型

{{jsxref("Number")}} 类型是一种[基于 IEEE 754 标准的双精度 64 位二进制格式的值](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_编码)。它能够存储 2<sup>-1074</sup>（{{jsxref("Number.MIN_VALUE")}}）和 2<sup>1024</sup>（{{jsxref("Number.MAX_VALUE")}}）之间的正浮点数，以及 -2<sup>-1074</sup> 和 -2<sup>1024</sup> 之间的负浮点数，但是它仅能安全地存储在 -(2<sup>53</sup> − 1)（{{jsxref("Number.MIN_SAFE_INTEGER")}}）到 2<sup>53</sup> − 1（{{jsxref("Number.MAX_SAFE_INTEGER")}}）范围内的整数。超出这个范围，JavaScript 将不能安全地表示整数；相反，它们将由双精度浮点近似表示。你可以使用 {{jsxref("Number.isSafeInteger()")}} 检查一个数是否在安全的整数范围内。

±(2<sup>-1074</sup> 到 2<sup>1024</sup>) 范围之外的值会自动转换：

- 大于 {{jsxref("Number.MAX_VALUE")}} 的正值被转换为 `+Infinity`。
- 小于 {{jsxref("Number.MIN_VALUE")}} 的正值被转换为 `+0`。
- 小于 -{{jsxref("Number.MAX_VALUE")}} 的负值被转换为 `-Infinity`。
- 大于 -{{jsxref("Number.MIN_VALUE")}} 的负值被转换为 `-0`。

`+Infinity` 和 `-Infinity` 行为类似于数学上的无穷大，但是有一些细微的区别；更多细节，参见 {{jsxref("Number.POSITIVE_INFINITY")}} 和 {{jsxref("Number.NEGATIVE_INFINITY")}}。

Number 类型仅有一个具有多个表现形式的值：`0` 同时表示为 `-0` 和 `+0`（其中 `0` 是 `+0` 的别名）。实际上，这两者之间几乎没有区别；例如，`+0 === -0` 是 `true`。然而，当你除以 0 的时候，你要注意到这一点：

```js
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

{{jsxref("NaN")}}（“**N**ot **a** **N**umber”）是一个特殊种类的数值，当算术运算的结果不表示数值时，通常会遇到它。它也是 JavaScript 中唯一不等于自身的值。

虽然 number 在概念上是一个“数学的值”，并且总是隐式的编码为浮点类型，但是 JavaScript 提供了[位运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#Assignment_operators)。当应用位运算符时，number 首先转换为 32 位整数。

> **备注：** 尽管位运算符*可以*使用[位掩码](https://zh.wikipedia.org/wiki/掩码)来表示单个数值中的几个布尔值，但通常这不是一个好的做法。JavaScript 提供了表示一组布尔值的其他方法（如布尔数组，或将布尔值分配给命名属性的对象）。位掩码也往往会使代码更难读取、理解和维护。

可能有必要在非常受限的环境中使用此类技术，例如在试图应对本地存储的限制时，或在极端情况下（例如当网络上的每个位计数时）。只有当这项技术是优化尺寸的最后一项措施时，才应考虑这项技术。

### BigInt 类型

{{jsxref("BigInt")}} 类型在 Javascript 中是一个数字的原始值，它可以表示任意大小的整数。使用 BigInt，你可以安全地存储和操作巨大的整数，甚至超过 Number 的安全整数限制（{{jsxref("Number.MAX_SAFE_INTEGER")}}）。

BigInt 是通过将 `n` 附加到整数末尾或调用 [`BigInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 函数来创建的。

此示例演示了增加 {{jsxref("Number.MAX_SAFE_INTEGER")}} 返回预期结果的位置：

```js
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
```

你可以使用大多数运算符为 BigInt 工作，包括 `+`、`*`、`-`、`**` 和 `%`——唯一被禁止的是 [`>>>`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)。BigInt 并不是[严格等于](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)有着相同数学值的 Number，但是它是[宽松的](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)。

BigInt 值并不总是更精确的，也不总是比 number 精确，因为 BigInt 不能表示分数，但是可以表示更准确的大整数。这两种类型都包含各自的类型，并且它们不能相互替代。如果 BigInt 值在算术表达式中与正则数值混合，或者它们相互[隐式转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)，则抛出 {{jsxref("TypeError")}}。

### String 类型

{{jsxref("String")}} 类型表示文本数据并编码为 [UTF-16 代码单位](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇（grapheme_clusters）)的 16 位无符号整数值序列。字符串中的每个元素在字符串中占据一个位置。第一个元素的索引为 `0`，下一个是索引 `1`，依此类推。字符串的长度是它的元素的数量。字符串的[长度](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length)是其中的 UTF-16 代码单元的数量，这可能与 Unicode 字符的实际数量不符；更多细节参见 [`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇（grapheme_clusters）) 参考页面。

JavaScript 字符串是不可变的。这意味着一旦字符串被创建，就不可能修改它。字符串方法基于当前字符串的内容创建一个新的字符串——例如：

- 使用 [`substring()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring) 获取原始的子字符串。
- 使用串联运算符（`+`）或 [`concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat) 将两个字符串串联。

#### 注意代码中的“字符串类型”！

使用字符串来表示复杂的数据可能很诱人。这样做会带来短期的好处：

- 容易通过字符串拼接来构造复杂的字串符。
- 字符串容易被调试（你看到的打印的内容始终是字符串）。
- 字符串通常是许多 API 的常见标准（[input 字段](/zh-CN/docs/Web/API/HTMLInputElement)、[local storage](/zh-CN/docs/Web/API/Web_Storage_API) 中的值，以及 [`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest) 使用 `responseText` 等作为响应）而且这些 API 可能只能与字符串一同使用。

使用约定，字符串一般可以用来表示任何数据结构。但这并不总是一个好主意。例如，使用一个分隔符，可以模拟一个列表（而 JavaScript 数组可能更适合）。不幸的是，当分隔符用于列表中的元素时，列表就会被破坏。这时可以选择转义字符，等等。所有这些都需要约定，并造成不必要的维护负担。

表示文本数据时候推荐使用字符串。当需要表示复杂的数据时，使用字符串*解析*并使用适当的抽象。

### Symbol 类型

{{jsxref("Symbol")}} 是**唯一**并且**不可变**的原始值并且可以用来作为对象属性的键（如下）。在某些程序语言当中，Symbol 也被称作“原子类型”（atom）。symbol 的目的是去创建一个唯一属性键，保证不会与其他代码中的键产生冲突。

## Object

在计算机科学中，对象（object）是指内存中的可以被[标识符](/zh-CN/docs/Glossary/Identifier)引用的一块区域。在 JavaScript 中，对象是唯一[可变](/zh-CN/docs/Glossary/Mutable)的值。事实上，[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)也是具有额外可*调用*能力的对象

### 属性

在 JavaScript 中，对象可以被看作是一组属性的集合。用[对象字面量语法](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#对象字面量_object_literals)来定义一个对象时，会自动初始化一组有限的属性；然后，这些属性还可以被添加和移除。对象属性等价于键值对。属性键要么是[字符串](#string-类型)类型，要么是 [symbol](#symbol-类型)。属性值可以是任何类型的值，包括其他对象，从而可以构建复杂的数据结构。

有两种对象属性的类型：[*数据*属性](#数据属性)和[*访问器*属性](#访问器属性)。每个属性都有对应的*特性*（attribute）。JavaScript 引擎在内部内置了访问性，但是你可以通过 {{jsxref("Object.defineProperty()")}} 设置它们，或者通过 {{jsxref("Object.getOwnPropertyDescriptor()")}} 读取它们。你可以在 {{jsxref("Object.defineProperty()")}} 页面上读取更多有关信息。

#### 数据属性

数据属性将键与值相关联。它可以通过以下属性来描述：

- `value`
  - : 通过属性访问器获取值。可以是任意的 JavaScript 值。
- `writable`
  - : 一个布尔值，表示是否可以通过赋值来改变属性。
- `enumerable`
  - : 一个布尔值，表示是否可以通过 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环来枚举属性。另请参阅[枚举性和属性所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)，以了解枚举属性如何与其他函数和语法交互。
- `configurable`
  - : 一个布尔值，表示该属性是否可以删除，是否可以更改为访问器属性，并可以更改其特性。

#### 访问器属性

将键与两个访问器函数（`get` 和 `set`）像关联，以获取或者存储值。

> **备注：** 重要的是，意识到它是访问器*属性*——而不是访问器*方法*。我们可以将函数作为值来提供给 JavaScript 对象的访问器，使得对象表现得像一个类——但这并不能使该对象成为类。

一个访问器属性有着以下的特性：

- `get`
  - : 该函数使用一个空的参数列表，以便有权对值执行访问时，获取属性值。参见 [getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get)。可能是 `undefined`。
- `set`
  - : 使用包含分配值的参数调用的函数。每当尝试更改指定属性时执行。参见 [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)。可能是 `undefined`。
- `enumerable`
  - : 一个布尔值，表示是否可以通过 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环来枚举属性。另请参阅[枚举性和属性所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)，以了解枚举属性如何与其他函数和语法交互。
- `configurable`
  - : 一个布尔值，表示该属性是否可以删除，是否可以更改为访问器属性，并可以更改其特性。

对象的[原型（prototype）](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)指向另一个对象或者 `null`——从概念上讲，它是对象的隐藏属性，通常表示为 `[[Prototype]]`。对象的 `[[Prototype]]` 属性也可以在对象自身访问。

对象是临时的键值对，因此它们通常当作映射使用。然而，这可能涉及人类工程学、安全以及性能的问题。然而，可以使用 {{jsxref("Map")}} 来存储任意的数据。[`Map` 引用](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps)更详细地讨论了使用普通对象和使用 map 存储键值之间的利弊。

### Date

当表示日期时，最好的选择是使用在 JavaScript 内置的 [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 工具类。

### 索引类集合：数组和类型化数组

[数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)是一种以整数为键（integer-keyed）的属性并与长度（length）属性关联的常规对象。

此外，数组对象还继承了 `Array.prototype` 的一些操作数组的便捷方法。例如，[`indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)（搜索数组中的一个值）或 [`push()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)（向数组中添加一个元素），等等。这使得数组是表示列表或集合的最优选择。

[类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)表示底层二进制缓冲区的类数组视图，并且提供了与数组相对应的类似语义的方法。“类型化数组”是一系列数据结构的总话术语，包括 `Int8Array`、`Float32Array` 等等。获取更多细节，请查看[类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)页。类型化数组通常与 {{jsxref("ArrayBuffer")}} 和 {{jsxref("DataView")}} 一起使用。

### 带键的集合：Map、Set、WeakMap、WeakSet

这些数据结构把对象的引用当作键。{{jsxref("Set")}} 和 {{jsxref("WeakSet")}} 表示唯一值的集合，而 {{jsxref("Map")}} 和 {{jsxref("WeakMap")}} 表示键值相关联的集合。

你也可以自己实现 `Map` 和 `Set`。然而，因为对象不能被比较（例如，在 `<`“小于”的意义上），另一方面，引擎也没有暴露出它的哈希函数，因此查找性能必定是线性的。它们的原始实现（包括 `WeakMap`）的查找性能大致为对数到相对恒定的时间。

通常，可以通过直接在对象上设置属性或使用 `data-*` 属性，将绑定数据到 DOM 节点。然而缺陷是在任何的脚本内，数据都运行在同样的上下文中。`Map` 和 `WeakMap` 能够方便地将数据*私密*地绑定到一个对象。

`WeakMap` 和 `WeakSet` 仅允许对象键，即使这些键留在集合中，也允许这些键被垃圾回收。它们专门用于[内存使用优化](/zh-CN/docs/Web/JavaScript/Memory_management#data_structures_aiding_memory_management)。

### 结构化数据：JSON

JSON（**J**ava**S**cript **O**bject **N**otation）是一种轻量级的数据交换格式，来源于 JavaScript，同时也被多种语言所使用。JSON 构建了通用数据结构，可以在不同环境之间传输，甚至可以跨语言传输。更多细节，请参见 {{jsxref("JSON")}}。

### 标准库中的更多对象

JavaScript 有一个内置对象的标准库。发现更多关于内置对象，请阅读[参考](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)。

## 强制类型转换

如上所述，JavaScript 是一个[弱类型](#动态和弱类型)语言。这意味着你经常可以使用与预期类型不同类型的值，并且该语言将为你转换它为正确的类型。为此，JavaScript 定义了少数强制规则。

### 强制原始值转换

[强制原始值转换](https://tc39.es/ecma262/#sec-toprimitive)用于得到一个期望的原始值，但对实际类型应该是什么并没有强烈的偏好。通常情况下可以接受[字符串](#string_类型)、[数值](#number_类型)或 [BigInt](#bigint_类型)。例如：

- [`Date()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) 构造函数，当它收到一个不是 `Date` 实例的参数时——字符串表示日期字符串，而数值表示时间戳。
- [`+`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition) 运算符——如果运算对象是字符串，执行字符串串联；否则，执行数值相加。
- [`==`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality) 运算符——如果一个运算对象是原始值，而另一个运算对象是对象（object），则该对象将转换为没有首选类型的原始值。

如果值已经是原始值，则此操作不会进行任何转换。对象按以下顺序调用它的 [`[@@toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)（将 hint 作为 `default`）、`valueOf()` 和 `toString()` 方法，将其转换为原始值。注意，原始值转换会在 `toString()` 方法之前调用 `valueOf()` 方法，这与[强制数字类型转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)的行为相似，但与[强制字符串类型转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)不同。

`[@@toPrimitive]()` 方法，如果存在，则必须返回原始值——返回对象，会导致 {{jsxref("TypeError")}}。对于 `valueOf()` 和 `toString()`，如果其中一个返回对象，则忽略其返回值，从而使用另一个的返回值；如果两者都不存在，或者两者都没有返回一个原始值，则抛出 {{jsxref("TypeError")}}。例如，以下代码：

```js
console.log({} + []); // "[object Object]"
```

`{}` 和 `[]` 都没有 `[@@toPrimitive]()` 方法。`{}` 和 `[]` 都从 {{jsxref("Object.prototype.valueOf")}} 继承 `valueOf()`，其返回对象自身。因为返回值是一个对象，因此它被忽略。因此，调用 `toString()` 方法。[`{}.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 返回 `"[object Object]"`，而 [`[].toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) 返回 `""`，因此这个结果是它们的串联：`"[object Object]"`。

在强制转换为任意的原始类型时，`[@@toPrimitive]()` 方法总是优先调用。原始值的强制转换的行为通常与强制 number 类型类似，因为优先调用 `valueOf()`；然而，有着自定义 `[@@toPrimitive]()` 方法的对象可以选择返回任意的原始值。{{jsxref("Date")}} 和 {{jsxref("Symbol")}} 对象是唯一重写 `[@@toPrimitive]()` 方法的对象。[`Date.prototype[@@toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive) 将 `"default"` hint 视为 `"string"`，而 [`Symbol.prototype[@@toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive) 忽略 hint 并始终返回一个 symbol。

### 强制数字类型转换

有两种数字类型：[number](#number_类型) 和 [BigInt](#bigint_类型)。有时候，该语言尤其希望是 number 或 BigInt（例如 {{jsxref("Array.prototype.slice()")}}，其中索引必须是一个数字）；其他时候，它可能容忍并且根据运算对象的类型不同执行不同的运算。有关不允许从其他类型隐式转换的严格强制转换过程，请参阅[强制 number 转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)和[强制 BigInt 转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion)。

强制数字类型转换与[强制 number 类型转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)几乎相同，只是 BigInt 会按原样返回，而不是引起 {{jsxref("TypeError")}}。强制数字类型转换用于所有算术运算，因为它们重载了 number 和 BigInt 类型。唯一例外的是[一元加](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)，它总是强制 number 类型转换。

### 强制其他类型转换

所有的数据类型，除了 Null、Undefined 以及 Symbol，都有它们各自的强制过程。更多细节，请参见[强制字符串转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)、[强制布尔值转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)以及[强制对象转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion)。

你可能已经注意到，有三种不同的路径可以将对象转换为原始值：

- [强制原始值转换](#强制原始值转换)：`[@@toPrimitive]("default")` → `valueOf()` → `toString()`
- [强制数字类型转换](#强制数字类型转换)、[强制 number 类型转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)、[强制 BigInt 类型转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt#转化)：`[@@toPrimitive]("number")` → `valueOf()` → `toString()`
- [强制字符串类型转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)：`[@@toPrimitive]("string")` → `toString()` → `valueOf()`

在所有情况下，`[@@toPrimitive]()` 如果存在，必须可调用并返回原始值，而如果它们不可调用或返回对象，`valueOf` 或 `toString` 将被忽略。在过程结束时，如果成功，结果保证是原始值。然后，由此产生的原始值会进一步强制类型转换，具体取决于上下文。

## 参见

- [由 Oleksii Trekhleb 撰写的 JavaScript 数据类型和数据结构](https://github.com/trekhleb/javascript-algorithms)
- [Nicholas Zakas 在 JavaScript 中收集了通用数据结构和通用算法。](https://github.com/humanwhocodes/computer-science-in-javascript)
- [搜索在 JavaScript 中实现的 Tre(i)es](https://github.com/monmohan/dsjslib)
- [ECMAScript 规范中的数据类型和值](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)
