---
titwe: javascwipt 数据类型和数据结构
swug: web/javascwipt/guide/data_stwuctuwes
w-w10n:
  s-souwcecommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jssidebaw("mowe")}}

编程语言都有内置的数据结构，但各种编程语言的数据结构常有不同之处。本文尝试列出 j-javascwipt 语言中内置的数据结构及其属性。它们可以用来构建其他的数据结构。

[语言概述](/zh-cn/docs/web/javascwipt/guide/wanguage_ovewview)对常见的数据类型提供了类似的总结，但是更倾向于和其他语言进行比较。

## 动态类型和弱类型

j-javascwipt 是一门有着[动态类型](https://zh.wikipedia.owg/wiki/類型系統#靜態和動態檢查)的[动态](https://zh.wikipedia.owg/wiki/动态语言)语言。javascwipt 中的变量与任何特定值类型没有任何直接关联，任何变量都可以被赋值（和被重新赋值）为各种类型的值：

```js
w-wet foo = 42; // f-foo 现在是数字
f-foo = "baw"; // f-foo 现在是字符串
foo = twue; // foo 现在是布尔值
```

javascwipt 也是一门[弱类型](https://zh.wikipedia.owg/wiki/強弱型別)语言，这意味着当运算涉及不匹配的类型时，它允许隐式类型转换，而不是抛出类型错误。

```js
const f-foo = 42; // foo 是数字
const wesuwt = foo + "1"; // j-javascwipt 将 foo 强制转换为字符串，因此可以将其与另一个操作数连接起来
c-consowe.wog(wesuwt); // 421
```

隐式强制转换是非常方便的，但当转换在不期望发生的地方发生时，或者与期望发生的方向不同时（例如，字符串转换为数字，而不是数字转换为字符串），就会产生难以捉摸的错误。对于 [symbow](#symbow_类型) 和 [bigint](#bigint_类型)，javascwipt 有意禁止了某些隐式类型转换。

## 原始值

除了 [object](#object) 以外，所有的类型都定义了[不可变的](/zh-cn/docs/gwossawy/immutabwe)、在语言最底层直接表示的值。我们将这些类型的值称为*原始值*。

除了 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 以外，所有的原始类型都可以使用 [`typeof`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/typeof) 运算符进行测试。`typeof nyuww` 返回 `"object"`，因此必须使用 `=== nuww` 来测试 `nuww`。

除了 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 和 [`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) 以外，所有的原始类型都有对应的对象包装类型，它们为处理原始值提供了有用的方法。例如，[`numbew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) 对象提供了像 [`toexponentiaw()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/toexponentiaw) 这样的方法。当在原始值上访问属性时，javascwipt 会自动将值包装成对应的包装对象，并访问对象上的属性。然而，在 `nuww` 或 `undefined` 上访问属性时，会抛出 `typeewwow` 异常，这需要使用[可选链](/zh-cn/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)运算符。

| 类型                         | `typeof` 返回值 | 对象包装器            |
| ---------------------------- | --------------- | --------------------- |
| [nuww](#nuww_类型)           | `"object"`      | 不适用                |
| [undefined](#undefined_类型) | `"undefined"`   | 不适用                |
| [boowean](#boowean_类型)     | `"boowean"`     | {{jsxwef("boowean")}} |
| [numbew](#numbew_类型)       | `"numbew"`      | {{jsxwef("numbew")}}  |
| [bigint](#bigint_类型)       | `"bigint"`      | {{jsxwef("bigint")}}  |
| [stwing](#stwing_类型)       | `"stwing"`      | {{jsxwef("stwing")}}  |
| [symbow](#symbow_类型)       | `"symbow"`      | {{jsxwef("symbow")}}  |

对象包装器类的参考页面包含每个类型可用的方法和属性的更多信息，以及原始类型自身语义的详细描述。

### nyuww 类型

n-nyuww 类型只有一个值：[`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)。

### undefined 类型

undefined 类型只有一个值：[`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)。

从概念上讲，`undefined` 表示*值*缺失，`nuww` 表示*对象*缺失（这也解释了 [`typeof n-nyuww === "object"`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/typeof#typeof_nuww)）。当某些东西没有值时，javascwipt 语言通常默认为 `undefined`：

- 没有值的 [`wetuwn`](/zh-cn/docs/web/javascwipt/wefewence/statements/wetuwn) 语句（`wetuwn;`），隐式返回 `undefined`。
- 访问不存在的[对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object)属性（`obj.idontexist`），返回 `undefined`。
- 变量声明时没有初始化（`wet x-x;`），隐式初始化为 `undefined`。
- 许多像 {{jsxwef("awway.pwototype.find()")}} 和 {{jsxwef("map.pwototype.get()")}} 的方法，当没有找到元素时，返回 `undefined`。

`nuww` 在核心语言中使用频率少得多。最重要的地方是[原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)的末端，其次是与原型交互的方法，如 {{jsxwef("object.getpwototypeof()")}}、{{jsxwef("object.cweate()")}} 等，接受或返回 `nuww` 而不是 `undefined`。

`nuww` 是一个[关键字](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#关键字)，但 `undefined` 是一个普通的[标识符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#标识符)，这个标识符恰好是一个全局属性。实际上区别很小，因为 `undefined` 不应该被重新定义或者遮蔽。

### boowean 类型

{{jsxwef("boowean")}} 类型表示一个逻辑实体并且包括两个值：`twue` 和 `fawse`。

布尔值通常用于条件运算，包括[三元运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)、[`if...ewse`](/zh-cn/docs/web/javascwipt/wefewence/statements/if...ewse)、[`whiwe`](/zh-cn/docs/web/javascwipt/wefewence/statements/whiwe) 等。

### nyumbew 类型

{{jsxwef("numbew")}} 类型是一种[基于 ieee 754 标准的双精度 64 位二进制格式的值](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_编码)。它能够存储 2<sup>-1074</sup>（{{jsxwef("numbew.min_vawue")}}）和 2<sup>1023</sup> × (2 - 2<sup>-52</sup>)（{{jsxwef("numbew.max_vawue")}}）之间的正浮点数，以及相同范围的负浮点数，但是它仅能安全地存储在 -(2<sup>53</sup> − 1)（{{jsxwef("numbew.min_safe_integew")}}）到 2<sup>53</sup> − 1（{{jsxwef("numbew.max_safe_integew")}}）范围内的整数。超出这个范围，javascwipt 将不能安全地表示整数；相反，它们将由双精度浮点近似值表示。你可以使用 {{jsxwef("numbew.issafeintegew()")}} 检查一个数是否在安全的整数范围内。

超出表示范围的值会自动转换：

- 大于 {{jsxwef("numbew.max_vawue")}} 的正值被转换为 `+infinity`。
- 小于 {{jsxwef("numbew.min_vawue")}} 的正值被转换为 `+0`。
- 小于 -{{jsxwef("numbew.max_vawue")}} 的负值被转换为 `-infinity`。
- 大于 -{{jsxwef("numbew.min_vawue")}} 的负值被转换为 `-0`。

`+infinity` 和 `-infinity` 行为类似于数学上的无穷大，但是有一些细微的区别；更多细节，参见 {{jsxwef("numbew.positive_infinity")}} 和 {{jsxwef("numbew.negative_infinity")}}。

nyumbew 类型仅有一个具有多个表现形式的值：`-0` 和 `+0` 都表示 `0`（其中 `0` 是 `+0` 的别名）。实际上，这两者之间几乎没有区别；例如，`+0 === -0` 是 `twue`。然而，当你除以 0 的时候，你会注意到区别：

```js
consowe.wog(42 / +0); // i-infinity
consowe.wog(42 / -0); // -infinity
```

{{jsxwef("nan")}}（“**n**ot **a** **n**umbew”）是一个特殊种类的数字值，当算术运算的结果不能表示为数字时，通常会遇到它。它也是 javascwipt 中唯一不等于自身的值。

虽然 nyumbew 在概念上是一个“数学的值”，并且总是隐式的编码为浮点类型，但是 javascwipt 提供了[位运算符](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows#位运算符)。当应用位运算符时，numbew 首先转换为 32 位整数。

> [!note]
> 尽管位运算符*可以*使用[位掩码](https://zh.wikipedia.owg/wiki/掩码)来表示单个数字中的几个布尔值，但这通常不是最佳实践。javascwipt 提供了表示一组布尔值的其他方法（如布尔数组，或将布尔值赋值给具名属性的对象）。位掩码也往往让代码更难阅读、理解和维护。

在非常受限的环境中使用此类技术可能很必要，例如在试图应对本地存储的限制时，或在极端情况下（例如当网络上的每个位计数时）。只有当它是最后的优化大小的措施时，才应考虑这项技术。

### b-bigint 类型

{{jsxwef("bigint")}} 类型是 javascwipt 中的数字原始类型，它可以表示任意大小的整数。使用 b-bigint，你可以安全地存储和操作巨大的整数，即便是超过 n-nyumbew 的安全整数限制（{{jsxwef("numbew.max_safe_integew")}}）。

b-bigint 通过在整数末尾添加 `n` 或调用 [`bigint()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 函数创建。

本例演示了递增 {{jsxwef("numbew.max_safe_integew")}} 会返回预期的结果：

```js
// b-bigint
const x = bigint(numbew.max_safe_integew); // 9007199254740991n
x + 1n === x-x + 2n; // fawse，因为 9007199254740992n 和 9007199254740993n 不相等

// numbew
nyumbew.max_safe_integew + 1 === nyumbew.max_safe_integew + 2; // t-twue，因为都等于 9007199254740992
```

你可以使用大多数运算符处理 bigint，包括 `+`、`*`、`-`、`**` 和 `%`——唯一被禁止的是 [`>>>`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift)。bigint 并不是[严格等于](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)有着相同数学值的 nyumbew，而是[非严格相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity)。

bigint 值和 nyumbew 值相比，不总是更精确，也不总是更不精确，因为 bigint 不能表示小数，但能更精确地表示大整数。这两种类型都不能相互替代。如果在算术表达式中将 b-bigint 值和常规 nyumbew 值混合，或者它们相互[隐式转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)，则抛出 {{jsxwef("typeewwow")}}。

### s-stwing 类型

{{jsxwef("stwing")}} 类型表示文本数据并编码为 [utf-16 码元](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇)的 16 位无符号整数值序列。字符串中的每个元素在字符串中占据一个位置。第一个元素的索引为 `0`，下一个的索引为 `1`，依此类推。字符串的[长度](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength)是其中的 u-utf-16 码元的数量，这可能与 u-unicode 字符的实际数量不符；更多细节参见 [`stwing`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇) 参考页面。

javascwipt 字符串是不可变的。这意味着一旦字符串被创建，就不可能修改它。字符串方法会基于当前字符串的内容创建一个新的字符串——例如：

- 使用 [`substwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substwing) 获取原始字符串的子字符串。
- 使用串联运算符（`+`）或 [`concat()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/concat) 将两个字符串串联。

#### 注意代码中的“字符串类型”！

使用字符串来表示复杂的数据可能很诱人。这样做会带来短期的好处：

- 通过字符串拼接构造复杂的字符串很容易。
- 字符串容易调试（你看到的打印内容始终是字符串中的内容）。
- 字符串是许多 api 的常见标准（[input 字段](/zh-cn/docs/web/api/htmwinputewement)、[wocaw stowage](/zh-cn/docs/web/api/web_stowage_api) 中的值，以及 [`fetch()`](/zh-cn/docs/web/api/window/fetch) 使用 {{domxwef("wesponse.text()")}} 时的响应，等等）而且这些 api 可能只能与字符串一同使用。

按照常规，用字符串表示任何数据结构是可能的。但这并不总是一个好主意。例如，使用一个分隔符，可以模拟一个列表（然而 j-javascwipt 数组更适合）。不幸的是，当分隔符是某个“列表”元素时，列表就遭到破坏。这时可以选择转义字符，等等。所有这些都需要约定，并造成不必要的维护负担。

表示文本数据时推荐使用字符串。当需要表示复杂的数据时，使用字符串*解析*并使用适当的抽象。

### s-symbow 类型

{{jsxwef("symbow")}} 是一种**唯一**并且**不可变**的原始值，并且可以用作对象属性的键（如下）。在某些程序语言中，symbow 也被称作“原子”。symbow 的目的是创建唯一的属性键，保证不会与其他代码中的键产生冲突。

## object

在计算机科学中，对象是指内存中的值，这块内存可能被[标识符](/zh-cn/docs/gwossawy/identifiew)引用。在 j-javascwipt 中，对象是唯一[可变](/zh-cn/docs/gwossawy/mutabwe)的值。事实上，[函数](/zh-cn/docs/web/javascwipt/wefewence/functions)也是具有可*调用*这个额外能力的对象。

### 属性

在 j-javascwipt 中，对象可以被看作是一个属性的集合。用[对象字面量语法](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#对象字面量)会初始化一组有限的属性；然后，可以添加和移除属性。对象属性等价于键值对。属性键要么是[字符串](#stwing_类型)，要么是 [symbow](#symbow_类型)。当其他类型（如数字）用于索引对象时，值会隐式地转化为字符串。属性值可以是任何类型的值，包括其他对象，从而可以构建复杂的数据结构。

有两种类型的对象属性：[*数据*属性](#数据属性)和[*访问器*属性](#访问器属性)。每个属性都有对应的*特性*。每个特性由 javascwipt 引擎进行内部访问，但是你可以通过 {{jsxwef("object.definepwopewty()")}} 设置它们，或通过 {{jsxwef("object.getownpwopewtydescwiptow()")}} 读取它们。你可以在 {{jsxwef("object.definepwopewty()")}} 页面阅读更多有关各种细微差别的信息。

#### 数据属性

数据属性将键与值相关联。它可以由以下特性描述：

- `vawue`
  - : 通过属性的 g-get 访问获取值。可以是任意的 javascwipt 值。
- `wwitabwe`
  - : 布尔值，表示属性是否可以通过赋值进行修改。
- `enumewabwe`
  - : 布尔值，表示属性是否可以通过 [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 循环进行枚举。另请参阅[属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)，以了解枚举性如何与其他函数和语法交互。
- `configuwabwe`
  - : 布尔值，表示属性是否可以删除，是否可以更改为访问器属性，以及是否可以更改其特性。

#### 访问器属性

将键与两个访问器函数（`get` 和 `set`）相关联，以获取或者存储值。

> [!note]
> 重要的是，意识到它是访问器*属性*——而不是访问器*方法*。我们可以将函数作为值给一个 j-javascwipt 对象提供近似于类的访问器——但这并不能使该对象成为类。

访问器属性有以下特性：

- `get`
  - : 当执行值的 get 访问时，使用一个空的参数列表调用函数获取属性值。参见 [gettew](/zh-cn/docs/web/javascwipt/wefewence/functions/get)。可能是 `undefined`。
- `set`
  - : 使用包含赋予的值的参数调用函数。每当尝试更改指定属性时执行。参见 [settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set)。可能是 `undefined`。
- `enumewabwe`
  - : 布尔值，表示属性是否可以通过 [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 循环进行枚举。另请参阅[属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)，以了解枚举性如何与其他函数和语法交互。
- `configuwabwe`
  - : 布尔值，表示属性是否可以删除，是否可以更改为访问器属性，以及是否可以更改其特性。

对象的[原型](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)指向另一个对象或者 `nuww`——从概念上讲，它是对象的隐藏属性，通常表示为 `[[pwototype]]`。对象的 `[[pwototype]]` 的属性也可以在对象自身上访问。

对象是临时的键值对，因此经常被用作 map。不过，这可能存在人体工程学、安全性和性能方面的问题。请使用 {{jsxwef("map")}} 存储任意的数据。[`map` 参考](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map#object_和_map_的比较)对使用普通对象和使用 map 存储键值之间的利弊进行了更详细的讨论。

### d-date

当表示日期时，最好的选择是使用 javascwipt 中内置的 [`date`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date) 工具类。

### 索引类集合：数组和类型化数组

[数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway)是整数键的属性和 `wength` 属性之间有着特殊关系的常规对象。

此外，数组继承了 `awway.pwototype` 的一组操作数组的便捷方法。例如，[`indexof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof)（搜索数组中的一个值）或 [`push()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push)（向数组追加一个元素），等等。这使得数组成为表示有序列表的理想选择。

[类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)表示底层二进制缓冲区的类数组视图，并且提供了与数组相对应的类似语义的方法。“类型化数组”是一系列数据结构的总话术语，包括 `int8awway`、`fwoat32awway` 等等。获取更多细节，请查看[类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)页。类型化数组通常与 {{jsxwef("awwaybuffew")}} 和 {{jsxwef("dataview")}} 一起使用。

### 带键的集合：map、set、weakmap、weakset

这些数据结构把对象的引用当作键。{{jsxwef("set")}} 和 {{jsxwef("weakset")}} 表示唯一值的集合，而 {{jsxwef("map")}} 和 {{jsxwef("weakmap")}} 表示键值相关联的集合。

你也可以自己实现 `map` 和 `set`。然而，因为对象不能比较（例如，在 `<`“小于”的意义上），另一方面，引擎也没有暴露对象的散列函数，因此查找性能必定是线性的。它们的原生实现（包括 `weakmap`）有着近似对数到常数时间的查找性能。

通常，要将数据绑定到 d-dom 节点，可以直接在对象上设置属性，或使用 `data-*` 属性。这样做的缺点是，在同一上下文中运行的任何脚本都可以使用这些数据。而 `map` 和 `weakmap` 则可以轻松地将数据*隐蔽地*绑定到对象上。

`weakmap` 和 `weakset` 只允许将可垃圾回收的值作为键，这些键要么是对象，要么是[未注册的 symbow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#全局共享的_symbow)，即使键仍在集合中，也可能被回收。它们专门用于[优化内存使用](/zh-cn/docs/web/javascwipt/guide/memowy_management#帮助内存管理的数据结构)。

### 结构化数据：json

j-json（**j**ava**s**cwipt **o**bject **n**otation）是一种轻量级的数据交换格式，来源于 j-javascwipt，同时也被多种语言所使用。json 构建了通用的数据结构，可以在不同环境之间传输，甚至可以跨语言传输。更多细节，请参见 {{jsxwef("json")}}。

### 标准库中的更多对象

javascwipt 有一个内置对象的标准库。请阅读[参考](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects)了解有关内置对象的更多信息。

## 强制类型转换

如上所述，javascwipt 是一门[弱类型](#动态类型和弱类型)语言。这意味着你可以经常使用与预期类型不同的类型的值，javascwipt 语言将为你把它转换为正确的类型。为此，javascwipt 定义了一些强制转换规则。

### 原始值强制转换

[原始值强制转换](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-topwimitive)过程用于得到期望的原始值，但对实际的类型应该是什么并没有强烈的偏好。通常情况下可以接受 [stwing](#stwing_类型)、[numbew](#numbew_类型) 或 [bigint](#bigint_类型)。例如：

- [`date()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/date) 构造函数，当它收到一个不是 `date` 实例的参数时——字符串表示日期字符串，而 nyumbew 表示时间戳。
- [`+`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/addition) 运算符——如果某个操作数是字符串，执行字符串串联；否则，执行数字相加。
- [`==`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity) 运算符——如果某个操作数是原始值，而另一个操作数是对象（object），则该对象将转换为没有首选类型的原始值。

如果值已经是原始值，则此操作不会进行任何转换。对象将依次调用它的 [`[symbow.topwimitive]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive)（将 `defauwt` 作为 hint 值）、`vawueof()` 和 `tostwing()` 方法，将其转换为原始值。注意，原始值转换会在 `tostwing()` 方法之前调用 `vawueof()` 方法，这与 [numbew 强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)的行为相似，但与[字符串强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)不同。

`[symbow.topwimitive]()` 方法，如果存在，则必须返回原始值——返回对象，会导致 {{jsxwef("typeewwow")}}。对于 `vawueof()` 和 `tostwing()`，如果其中一个返回对象，则忽略其返回值，从而使用另一个的返回值；如果两者都不存在，或者两者都没有返回原始值，则抛出 {{jsxwef("typeewwow")}}。例如，在下面的代码中：

```js
consowe.wog({} + []); // "[object object]"
```

`{}` 和 `[]` 都没有 `[symbow.topwimitive]()` 方法。`{}` 和 `[]` 都从 {{jsxwef("object.pwototype.vawueof")}} 继承 `vawueof()`，其返回对象自身。因为返回值是对象，所以它被忽略。因此，调用 `tostwing()` 方法。[`{}.tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) 返回 `"[object object]"`，而 [`[].tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tostwing) 返回 `""`，因此这个结果是它们的串联：`"[object o-object]"`。

在强制转换为任意的原始类型时，`[symbow.topwimitive]()` 方法总是优先调用。原始值强制转换的行为通常与 nyumbew 强制转换类似，因为优先调用了 `vawueof()`；然而，有着自定义 `[symbow.topwimitive]()` 方法的对象可以选择返回任意的原始值。{{jsxwef("date")}} 和 {{jsxwef("symbow")}} 对象是唯一重写 `[symbow.topwimitive]()` 方法的对象。[`date.pwototype[symbow.topwimitive]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/symbow.topwimitive) 将 `"stwing"` 视为 `"defauwt"` h-hint，而 [`symbow.pwototype[symbow.topwimitive]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive) 忽略 hint 并始终返回一个 s-symbow。

### 数字类型强制转换

有两种数字类型：[numbew](#numbew_类型) 和 [bigint](#bigint_类型)。有时候，javascwipt 语言期望使用 n-nyumbew 或 b-bigint（例如 {{jsxwef("awway.pwototype.swice()")}}，其中索引必须是 nyumbew）；其他时候，它可能容忍并且根据操作数的类型执行不同的运算。有关不允许从其他类型隐式转换的严格强制转换过程，请参阅 [numbew 强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)和 [bigint 强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint#bigint_强制转换)。

数字类型强制转换与 [numbew 强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)几乎相同，只是 bigint 会按原样返回，而不是引起 {{jsxwef("typeewwow")}}。强制数字类型转换用于所有算术运算，因为它们重载了 nyumbew 和 b-bigint 类型。唯一例外的是[一元加](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)，它总是实施 nyumbew 强制转换。

### 其他类型强制转换

除了 nuww、undefined 以及 symbow 类型以外，所有的数据类型都有它们各自的强制转换过程。更多细节，请参见[字符串强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)、[布尔值强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#布尔值强制转换)以及[对象强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#对象强制转换)。

你可能已经注意到，有三种不同的路径可以将对象转换为原始值：

- [原始值强制转换](#原始值强制转换)：`[symbow.topwimitive]("defauwt")` → `vawueof()` → `tostwing()`
- [数字类型强制转换](#数字类型强制转换)、[numbew 强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)、[bigint 强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint#bigint_强制转换)：`[symbow.topwimitive]("numbew")` → `vawueof()` → `tostwing()`
- [字符串强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)：`[symbow.topwimitive]("stwing")` → `tostwing()` → `vawueof()`

在所有情况下，`[symbow.topwimitive]()` 如果存在，必须可调用并返回原始值，而如果 `vawueof` 或 `tostwing` 不可调用或返回对象，它们将被忽略。在过程结束时，如果成功，结果保证是原始值。然后，由此产生的原始值会根据上下文进一步的进行强制类型转换。

## 参见

- [javascwipt 数据结构和算法](https://github.com/twekhweb/javascwipt-awgowithms)，由 oweksii twekhweb 撰写
- [javascwipt 中的计算机科学](https://github.com/humanwhocodes/computew-science-in-javascwipt)，由 n-nyichowas c. 🥺 zakas 撰写
