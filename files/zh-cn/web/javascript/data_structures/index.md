---
title: JavaScript 数据类型和数据结构
slug: Web/JavaScript/Data_structures
tags:
  - JavaScript
  - 初学者
  - 数据结构
  - 类型
translation_of: Web/JavaScript/Data_structures
---
{{jsSidebar("More")}}

编程语言都具有内建的数据结构，但各种编程语言的数据结构常有不同之处。本文试图列出 JavaScript 语言中内建的数据结构及其属性，它们可以用来构建其他的数据结构。同时尽可能地描述与其他语言的不同之处。

## 动态类型

JavaScript 是一种**弱类型**或者说**动态**语言。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。这也意味着你可以使用同一个变量保存不同类型的数据：

```js
let foo = 42;    // foo 现在是一个数字
foo     = 'bar'; // foo 现在是一个字符串
foo     = true;  // foo 现在是一个布尔值
```

## 数据类型

JavaScript 语言中类型集合由[_原始值_](#原始值)和[_对象_](#对象)组成。

- [原始值](#原始值)（直接表示在语言底层的不可变数据）
  - [布尔类型](#布尔类型)
  - [Null 类型](#null_类型)
  - [Undefined 类型](#undefined_类型)
  - [数字类型](#数字类型)
  - [BigInt 类型](#bigint_类型)
  - [字符串类型](#字符串类型)
  - [符号类型](#符号类型)

- [对象](#对象)（一组属性的集合）

## 原始值

除对象类型（object）以外的其它任何类型定义的不可变的值（值本身无法被改变）。例如（与 C 语言不同），JavaScript 中字符串是不可变的（译注：如，JavaScript 中对字符串的操作一定返回了一个新字符串，原始字符串并没有被改变）。我们称这些类型的值为“_原始值_”。

### 布尔类型

布尔表示一个逻辑实体，可以有两个值：`true` 和 `false`。更多详情可查看 {{Glossary("Boolean")}} 和 {{jsxref("Boolean")}}。

### Null 类型

Null 类型只有一个值：`null`，更多详情可查看 {{jsxref("null")}} 和 {{Glossary("Null")}}。

### Undefined 类型

一个没有被赋值的变量会有个默认值 `undefined`，更多详情可查看 {{jsxref("undefined")}} 和 {{Glossary("Undefined")}}。

### 数字类型

ECMAScript 标准定义了两种内建数值类型：**Number**（数字类型）和 **BigInt**（见下方）。

数字类型是一种[基于 IEEE 754 标准的双精度 64 位二进制格式的值](https://zh.wikipedia.org/wiki/雙精度浮點數)（从 `-(2^53 -1)` 到 `2^53 - 1` 之间的数字）。除了能够表示浮点数外，还有三个带符号的值：`+Infinity`、`-Infinity` 和 `NaN`（非数值，**N**ot-**a**-**N**umber）。

要检查值是否大于或小于 {{jsxref("Infinity", "±Infinity")}}，你可以使用常量 {{jsxref("Number.MAX_VALUE")}} 和 {{jsxref("Number.MIN_VALUE")}}。

> **备注：** 从 ECMAScript 2015 开始，除了 {{jsxref("Number.MAX_SAFE_INTEGER")}} 和 {{jsxref("Number.MIN_SAFE_INTEGER")}}，你还可以通过 {{jsxref("Number.isSafeInteger()")}} 来检查值是否在双精度浮点数的取值范围内。
>
> 超出这个范围，JavaScript 中的**整数**将不再安全，该值将表示为与该值近似的双精度浮点数。

数字类型中只有一个整数有两种表示方法：`0` 可表示为 `-0` 和 `+0`（`0` 是 `+0` 的简写）。

在实践中，这几乎没有任何影响。例如，`+0 === -0` 为真。但是，你需要注意除以零的情况：

```js
> 42 / +0
Infinity
> 42 / -0
-Infinity
```

尽管一个数字通常仅代表它本身的值，但 JavaScript 提供了一些{{jsxref("Operators", "位运算符")}}。

> **备注：** 虽然位运算符可通过 [掩码](https://zh.wikipedia.org/wiki/掩码) 同时表示多个布尔类型的值，但这通常被认为是不好的。JavaScript 提供了其他的方式来表示一组布尔值（如一个布尔值数组或一个布尔值分配给命名属性的对象）。掩码也容易使代码变得难以阅读、理解和维护。

在一些非常受限的情况下，可能需要用到这些技术，比如试图应对本地存储的存储限制，或在一些极端场景下（例如，网络传输的每一比特都尤为重要时）。位操作只应该是用来优化字节数的最后选择。

### BigInt 类型

BigInt 类型是 JavaScript 中的一个基础的数值类型，可以表示任意精度的整数。使用 BigInt，您可以安全地存储和操作大整数，甚至可以超过**数字类型**的安全整数限制。

BigInt 是通过在整数末尾附加字母 `n` 或调用构造函数来创建的。

通过使用常量 {{jsxref("Number.MAX_SAFE_INTEGER")}}，您可以获得可以用数字递增的最安全的值。通过引入 BigInt，您可以操作超过 {{jsxref("Number.MAX_SAFE_INTEGER")}} 的数字。

以下示例演示了，递增超过 {{jsxref("Number.MAX_SAFE_INTEGER")}} 的值可以返回预期的结果：

```js
// BigInt
> const x = BigInt(Number.MAX_SAFE_INTEGER);
9007199254740991n
> x + 1n === x + 2n; // 9007199254740992n === 9007199254740993n
false

// Number
> Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // 9007199254740992 === 9007199254740992
true
```

可以对 BigInt 使用运算符 `+`、`*`、`-`、`**` 和 `%`，就像对数字一样。BigInt 严格来说并不等同于一个数字，但它也同样可以轻松地使用。

在将 BigInt 转换为 `Boolean` 时（例如：`if`、`||`、`&&`、`Boolean` 和 `!`），它的行为类似于一个数字。

`BigInt` 不能与数字相互运算。否则，将抛出 {{jsxref("TypeError")}}。

### 字符串类型

JavaScript 的字符串类型用于表示文本数据。它是一组 16 位的无符号整数值的“元素”。在字符串中的每个元素占据了字符串的位置。第一个元素的索引为 `0`，下一个是索引 `1`，依此类推。字符串的长度是它的元素的数量。

不同于一些编程语言（例如，C 语言），JavaScript 的字符串是不可更改的。这意味着字符串一旦被创建，就不能被修改。

但是，可以基于对原始字符串的操作来创建新的字符串。例如：

- 获取一个字符串的子串可通过选择个别字母或者使用 {{jsxref("String.substr()")}}。
- 两个字符串的连接使用连接运算符（`+`）或者 {{jsxref("String.concat()")}}。

#### 注意代码中的“字符串类型”！

可以使用字符串来表达复杂的数据。以下是一些很好的性质：

- 容易通过字符串拼接来构造复杂的字串符
- 字符串容易被调试（你看到的往往在字符串里）
- 字符串通常是许多 APIs 的常见标准（[input fields](/zh-CN/docs/Web/API/HTMLInputElement)、[local storage](/zh-CN/docs/Web/API/Web_Storage_API) 中的值，以及 [`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest) 使用 `responseText` 等作为响应）而且这些 APIs 可能只能与字符串一同使用。

使用约定，字符串一般可以用来表示任何数据结构。但这并不总是一个好主意。例如，使用一个分隔符，可以模拟一个列表（而 JavaScript 数组可能更适合）。不幸的是，当分隔符用于列表中的元素时，列表就会被破坏。这时可以选择转义字符，等等。所有这些都需要约定，并造成不必要的维护负担。

表示文本数据时候推荐使用字符串。当需要表示复杂的数据时，使用字符串解析并使用适当的抽象。

### 符号类型

符号（Symbols）类型是**唯一**且**不可修改**的原始值，并且可以用来作为对象的键 (key)（如下），在某些语言当中也有与之相似的类型（原子类型，atoms）。

更多详情可查看 {{Glossary("Symbol")}} 和 {{jsxref("Symbol")}}。

## 对象

在计算机科学中，对象（object）是指内存中的可以被{{Glossary("Identifier", "标识符")}}引用的一块区域。

### 属性

在 JavaScript 中，对象可以被看作是一组属性的集合。用[对象字面量语法](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#对象字面量_object_literals)来定义一个对象时，会自动初始化一组属性。而后，这些属性还可以被添加和移除。属性的值可以是任意类型，包括其它对象。属性使用键（key）来标识，它的键值可以是一个{{Glossary("String", "字符串")}}或者{{Glossary("Symbol", "符号值")}}（Symbol）。

对象拥有两种属性：[数据属性](#数据属性)和[访问器属性](#访问器属性)。

> **备注：** 每个属性（property）都由对应的特性（attributes）。JavaScript 引擎在内部使用了特性（attributes），因此你不能直接访问它们。这就是为什么特性（attributes）被放在两对方括号内，而不是单独列出的原因。
>
> 参见 {{jsxref("Object.defineProperty()")}}。

#### 数据属性

数据属性是键值对，并且每个数据属性拥有下列特性：

<table class="standard-table">
  <caption>
    数据属性的特性（Attributes of a data property）
  </caption>
  <thead>
    <tr>
      <th scope="col">特性</th>
      <th scope="col">数据类型</th>
      <th scope="col">描述</th>
      <th scope="col">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[[Value]]</td>
      <td>任何 Javascript 类型</td>
      <td>包含这个属性的数据值。</td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td>[[Writable]]</td>
      <td>Boolean</td>
      <td>
        如果该值为 <code>false</code>，则该属性的 [[Value]] 特性不能被修改。
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>[[Enumerable]]</td>
      <td>Boolean</td>
      <td>
        <p>
          如果该值为 <code>true</code>，则该属性可以用
          <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in"
             ><code>for...in</code></a
          >
          循环来枚举。<br />参见
          <a
            href="/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties"
            >属性的可枚举性和所有权</a
          >。
        </p>
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>[[Configurable]]</td>
      <td>Boolean</td>
      <td>
        如果该值为 <code>false</code>，则该属性不能被删除（对于访问器属性则不能被修改），并且除了
        [[Value]] 和 [[Writable]]
        以外的特性都不能被修改。
      </td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

| 特性       | 类型  | 描述                                              |
| ---------- | ------- | --------------------------------------------- |
| Read-only  | Boolean | ES5 [[Writable]] 属性的反状态 (Reversed state)。 |
| DontEnum   | Boolean | ES5 [[Enumerable]] 属性的反状态。               |
| DontDelete | Boolean | ES5 [[Configurable]] 属性的反状态。             |

#### 访问器属性

访问器属性有一个或两个访问器函数（`get` 和 `set`）来存取数值。

> **备注：** 注意它是访问器**属性**，而非访问器**方法**。我们可以将函数作为值赋给 JavaScript 对象的访问器（使得对象表现得像一个类）——但这不会使对象变成类。

访问器属性具有以下特性（attributes）：

| 特性                  | 类型                                 | 描述                                                                                                                                                                                                      | 默认值         |
| ----------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| [[Get]]               | 函数对象或者 `undefined` | 该函数使用一个空的参数列表，用于在有权访问的情况下读取属性值。参见 [`get`](/zh-CN/docs/Web/JavaScript/Reference/Functions/get)。 | `undefined` |
| [[Set]]                | 函数对象或者 `undefined` | 该函数有一个参数，用于在有权访问的情况下写入属性值。参见 [`set`](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)。                  | `undefined` |
| [[Enumerable]]  | Boolean                           | 如果该值为 `true`，则该属性可以用 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环来枚举。                           | `false`          |
| [[Configurable]] | Boolean                          | 如果该值为 `false`，则该属性不能被删除，且不能被转变成**数据属性**                                                                                                        | `false`         |

### “标准的”对象和函数

一个 JavaScript 对象就是键和值之间的映射。键是一个字符串（或者 {{jsxref("Symbol")}}），值可以是任意类型的。这使得对象非常符合[哈希表](https://zh.wikipedia.org/wiki/哈希表)。

函数是一个附带可被调用功能的常规对象。

### 日期

当你想要显示日期时，毋庸置疑，使用 JavaScript 内建的 [Date](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象。

### 有序集：数组和类型数组

[数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)是一种使用整数作为键（integer-keyed）属性并与长度（length）属性关联的常规对象。

此外，数组对象还继承了 `Array.prototype` 的一些操作数组的便捷方法。例如，[`indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)（搜索数组中的一个值）或 [`push()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)（向数组中添加一个元素），等等。这使得数组是表示列表或集合的最优选择。

[类型数组 (Typed Arrays)](/en-US/docs/Web/JavaScript/Typed_arrays) 是 ECMAScript 2015 中新定义的 JavaScript 内建对象，提供了一个基本的二进制数据缓冲区的类数组视图。下面的表格能帮助你找到对等的 C 语言数据类型：

| 类型                                         | 取值范围                                       | 占用字节数 | 描述                                                                                 | Web IDL 类型            | 对等的 C 语言类型                      |
| --------------------------------- | --------------------------------- | ------------ | ----------------------------------------------------------- | ---------------------- | --------------------------------- |
| {{jsxref("Int8Array")}}                  | `-128` 到 `127`                            | 1                 | 8 位有符号整数（补码）                                                  | `byte`                         | `int8_t`                                        |
| {{jsxref("Uint8Array")}}                | `0` 到 `255`                                 | 1                 | 8 位无符号整数                                                               | `octet`                        | `uint8_t`                                      |
| {{jsxref("Uint8ClampedArray")}} | `0` 到 `255`                                 | 1                 | 8 位无符号整数（固定数组）                                          | `octet`                        | `uint8_t`                                      |
| {{jsxref("Int16Array")}}                | `-32768` 到 `32767`                    | 2                 | 16 位有符号整数（补码）                                                | `short`                        | `int16_t`                                      |
| {{jsxref("Uint16Array")}}              | `0` 到 `65535`                             | 2                 | 16 位无符号整数                                                             | `unsigned short`        | `uint16_t`                                    |
| {{jsxref("Int32Array")}}                | `-2147483648` 到 `2147483647` | 4                | 32 位有符号整数（补码）                                                | `long`                         | `int32_t`                                       |
| {{jsxref("Uint32Array")}}              | `0` 到 `4294967295`                    | 4                | 32 位无符号整数                                                             | `unsigned long`         | `uint32_t`                                    |
| {{jsxref("Float32Array")}}             | `1.2E-38` 到 `3.4E38`                   | 4                 | 32 位 IEEE 浮点数（7 位有效数字，例如：`1.1234567`） | `unrestricted float`     | `float`                                          |
| {{jsxref("Float64Array")}}             | `5E-324` 到 `1.8E308`                  | 8                 | 64 位 IEEE 浮点数（16 位有效数字，例如：`1.123...15`）| `unrestricted double` | `double`                                      |
| {{jsxref("BigInt64Array")}}           | `-2^63` 到 `2^63 - 1`                  | 8                 | 64 位有符号整数（补码）                                               | `bigint`                        | `int64_t (signed long long)`        |
| {{jsxref("BigUint64Array")}}         | `0` 到 `2^64 - 1`                         | 8                  | 64 位无符号整数                                                            | `bigint`                        | `uint64_t (unsigned long long)` |

### 带键的集合：Maps, Sets, WeakMaps, WeakSets

这些数据结构把对象的引用当作键，其在 ECMAScript 第 6 版中有介绍。当 {{jsxref("Map")}} 和 {{jsxref("WeakMap")}} 把一个值和对象关联起来的时候，{{jsxref("Set")}} 和 {{jsxref("WeakSet")}} 表示一组对象。 Map 和 WeakMaps 之间的差别在于，在前者中，对象键是可枚举的。这允许垃圾收集器优化后面的枚举（This allows garbage collection optimizations in the latter case）。

在纯 ECMAScript 5 下可以实现 `Maps` 和 `Sets`。然而，因为对象并不能进行比较（就对象“小于”示例来讲），所以查询必定是线性的。它们的原生实现（包括 `WeakMap`）所需要的查询时间则是相对恒定的（呈对数增长）。

通常，可以通过直接在对象上设置属性或使用 `data-*` 属性，将绑定数据到 DOM 节点。然而缺陷是在任何的脚本内，数据都运行在同样的上下文中。`Map` 和 `WeakMap` 能够方便地将数据*私密*地绑定到一个对象。

### 结构化数据：JSON

JSON（**J**ava**S**cript **O**bject **N**otation）是一种轻量级的数据交换格式，来源于 JavaScript，同时也被多种语言所使用。JSON 用于构建通用的数据结构。

参见 {{Glossary("JSON")}} 和 {{jsxref("JSON")}} 以了解更多。

### 标准库中更多的对象

JavaScript 有一个内置对象的标准库。请查看[参考](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)以了解更多对象。

## 使用 `typeof` 操作符判断对象类型

`typeof` 运算符可以帮助你查询变量的类型。要了解更多细节和注意事项请阅读[参考页](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)。

## 参见

- [JavaScript Data Structures and Algorithms by Oleksii Trekhleb](https://github.com/trekhleb/javascript-algorithms)
- [Nicholas Zakas collection of common data structure and common algorithms in JavaScript.](https://github.com/nzakas/computer-science-in-javascript/)
- [Search Tre(i)es implemented in JavaScript](https://github.com/monmohan/DataStructures_In_Javascript)
- [Data Types and Values in the ECMAScript specification](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)
