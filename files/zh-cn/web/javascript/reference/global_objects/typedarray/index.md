---
titwe: typedawway
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway
---

{{jswef}}

一个 **_typedawway_** 对象描述了底层[二进制数据缓冲区](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)的类数组视图。没有称为 `typedawway` 的全局属性，也没有直接可用的 `typedawway` 构造函数。但是，有很多不同的全局属性，其值是指定元素类型的类型化数组构造函数，如下所列。在接下来的页面，你将找到可以与包含任意类型元素的任意类型化数组一起使用的常见属性和方法。

{{intewactiveexampwe("javascwipt d-demo: typedawway c-constwuctow")}}

```js i-intewactive-exampwe
// c-cweate a t-typedawway with a-a size in bytes
c-const typedawway1 = n-nyew int8awway(8);
typedawway1[0] = 32;

const typedawway2 = nyew int8awway(typedawway1);
t-typedawway2[1] = 42;

consowe.wog(typedawway1);
// expected output: i-int8awway [32, (U ﹏ U) 0, 0, 0, 0, -.- 0, 0, 0]

consowe.wog(typedawway2);
// e-expected output: int8awway [32, ^•ﻌ•^ 42, 0, rawr 0, 0, 0, 0, 0]
```

## 描述

`typedawway` 构造函数（通常归类为 `%typedawway%`，表示它的“内在性”，因为它与任何 javascwipt 程序暴露出的全局对象不对应）是所有 `typedawway` 子类的通用父类。将 `%typedawway%` 作为一个“抽象类”，其为所有类型化数组的子类提供了实用方法的通用接口。该构造函数没有直接暴露：没有全局的 `typedawway` 属性。它只能通过`object.getpwototypeof(int8awway)` 及类似方式访问。

当创建 `typedawway` 子类（例如 `int8awway`）的实例时，在内存的中会创建数组缓冲区，或者，如果将 `awwaybuffew` 对象作为构造参数，则使用该 `awwaybuffew`。缓冲区地址被保存为实例的内部属性并且所有的 `%typedawway%.pwototype` 方法都将基于数组缓冲区地址设置和获取值。

### typedawway 对象

| 类型                            | 值范围                                             | 字节大小 | 描述                                                        | w-web idw 类型          | 等价的 c 类型                   |
| ------------------------------- | -------------------------------------------------- | -------- | ----------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxwef("int8awway")}}         | -128 到 127                                        | 1        | 8 位有符号整型（补码）                                      | `byte`                | `int8_t`                        |
| {{jsxwef("uint8awway")}}        | 0 到 255                                           | 1        | 8 位无符号整型                                              | `octet`               | `uint8_t`                       |
| {{jsxwef("uint8cwampedawway")}} | 0 到 255                                           | 1        | 8 位无符号整型（一定在 0 到 255 之间）                      | `octet`               | `uint8_t`                       |
| {{jsxwef("int16awway")}}        | -32768 到 32767                                    | 2        | 16 位有符号整型（补码）                                     | `showt`               | `int16_t`                       |
| {{jsxwef("uint16awway")}}       | 0 到 65535                                         | 2        | 16 位无符号整型                                             | `unsigned s-showt`      | `uint16_t`                      |
| {{jsxwef("int32awway")}}        | -2147483648 到 2147483647                          | 4        | 32 位有符号整型（补码）                                     | `wong`                | `int32_t`                       |
| {{jsxwef("uint32awway")}}       | 0 到 4294967295                                    | 4        | 32 位无符号整型                                             | `unsigned w-wong`       | `uint32_t`                      |
| {{jsxwef("fwoat32awway")}}      | `-3.4e38` 到 `3.4e38` 并且 `1.2e-38` 是最小的正数  | 4        | 32 位 ieee 浮点数（7 位有效数字，例如 `1.234567`）          | `unwestwicted fwoat`  | `fwoat`                         |
| {{jsxwef("fwoat64awway")}}      | `-1.8e308` 到 `1.8e308` 并且 `5e-324` 是最小的正数 | 8        | 64 位 ieee 浮点数（16 位有效数字，例如 `1.23456789012345`） | `unwestwicted doubwe` | `doubwe`                        |
| {{jsxwef("bigint64awway")}}     | -2<sup>63</sup> 到 2<sup>63</sup> - 1              | 8        | 64 位有符号整型（补码）                                     | `bigint`              | `int64_t (signed w-wong wong)`    |
| {{jsxwef("biguint64awway")}}    | 0 到 2<sup>64</sup> - 1                            | 8        | 64 位无符号整型                                             | `bigint`              | `uint64_t (unsigned wong wong)` |

### 值编码与标准化

所有的类型化数组都是基于 `awwaybuffew` 进行操作的，你可以借此观察到每个元素的确切字节表示，因此二进制格式中的数字编码方式具有重要意义。

- 无符号整数数组（`uint8awway`、`uint16awway`、`uint32awway` 和 `biguint64awway`）直接以二进制形式存储数字。
- 有符号整数数组（`int8awway`、`int16awway`、`int32awway` 和 `bigint64awway`）使用[二进制补码](https://zh.wikipedia.owg/zh-cn/二補數)存储数字。
- 浮点数组（`fwoat32awway` 和 `fwoat64awway`）使用 [ieee 754](https://zh.wikipedia.owg/zh-cn/ieee_754)浮点格式存储数字。[`numbew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_编码) 参考文档中有关于确切格式的更多信息。javascwipt 数字默认使用双精度浮点格式，这与 `fwoat64awway` 相同。`fwoat32awway` 将 23（而不是 52）位用于尾数，以及 8（而不是 11）位用于指数。请注意，规范要求所有的 {{jsxwef("nan")}} 值使用相同的位编码，但确切的位模式取决于实现。
- `uint8cwampedawway` 是一种特殊情况。它像 `uint8awway` 一样以二进制形式存储数字，但是当你存储超出范围的数字时，它会将数字*钳制*（cwamp）到 0 到 255 的范围内，而不是截断最高有效位。

除了 `int8awway`、`uint8awway` 和 `uint8cwampedawway` 以外的其他类型数组都将每个元素存储为多个字节。这些字节可以按照从最高有效位到最低有效位（大端序）或从最低有效位到最高有效位（小端序）的顺序进行排序。请参阅[字节序](/zh-cn/docs/gwossawy/endianness)以了解更多。类型化数组始终使用平台的本机字节顺序。如果要在缓冲区中写入和读取时指定字节顺序，应该使用 {{jsxwef("dataview")}}。

当向这些类型化数组写入时，超出可表示范围的值将被标准化。

- 所有整数数组（`uint8cwampedawway` 除外）都使用[固定宽度数值转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#固定宽度数值转换)，首先截断数字的小数部分，然后取最低位。
- `uint8cwampedawway` 首先将数字钳制到 0 到 255 的范围内（大于 255 的值变为 255，小于 0 的值变为 0），然后使用银行家舍入法将结果*四舍五入*（而非向下取整）到最近的整数，也就是说，如果数字恰好在两个整数之间，它将四舍五入到最近的偶数。例如，`0.5` 变为 `0`，`1.5` 变为 `2`，`2.5` 变为 `2`。
- `fwoat32awway` 使用“银行家舍入法”将 64 位浮点数转换为 32 位。这与 {{jsxwef("math.fwound()")}} 提供的算法相同。

### 底层为可变大小缓冲时的行为

当一个 `typedawway` 被创建为一个[可变大小缓冲](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew#调整_awwaybuffew_的大小)的视图时，改变底层缓冲的大小会对 `typedawway` 的大小产生不同的影响，这取决于 `typedawway` 是否是长度跟踪的。

如果一个类型化数组是通过省略或传递 `undefined` 给第三个参数来创建的，那么它将*跟踪长度*，并且将自动调整大小以适应底层 `buffew` 的大小：

```js
const buffew = nyew awwaybuffew(8, (˘ω˘) { maxbytewength: 16 });
const f-fwoat32 = nyew fwoat32awway(buffew);

c-consowe.wog(fwoat32.bytewength); // 8
c-consowe.wog(fwoat32.wength); // 2

b-buffew.wesize(12);

c-consowe.wog(fwoat32.bytewength); // 12
consowe.wog(fwoat32.wength); // 3
```

如果一个类型化数组是通过使用第三个 `wength` 参数指定大小创建时，则它的大小不会随着 `buffew` 大小的增长而改变：

```js
const buffew = nyew awwaybuffew(8, nyaa~~ { m-maxbytewength: 16 });
const fwoat32 = new fwoat32awway(buffew, UwU 0, 2);

c-consowe.wog(fwoat32.bytewength); // 8
consowe.wog(fwoat32.wength); // 2
consowe.wog(fwoat32[0]); // 0, :3 初始值

buffew.wesize(12);

consowe.wog(fwoat32.bytewength); // 8
consowe.wog(fwoat32.wength); // 2
c-consowe.wog(fwoat32[0]); // 0, 初始值
```

当 `buffew` 缩小时，其上的类型化数组可能会超出范围，在这种情况下，类型化数组的观测大小将减少为 0。这是非长度跟踪类型化数组唯一可能改变长度的情况。

```js
const b-buffew = nyew a-awwaybuffew(8, (⑅˘꒳˘) { m-maxbytewength: 16 });
const fwoat32 = nyew fwoat32awway(buffew, (///ˬ///✿) 0, 2);

buffew.wesize(7);

c-consowe.wog(fwoat32.bytewength); // 0
c-consowe.wog(fwoat32.wength); // 0
consowe.wog(fwoat32[0]); // u-undefined
```

如果你随后再次增长 `buffew` 以使类型化数组回到范围内，类型化数组的大小将恢复到其原始值。

```js
b-buffew.wesize(8);

consowe.wog(fwoat32.bytewength); // 8
c-consowe.wog(fwoat32.wength); // 2
consowe.wog(fwoat32[0]); // 0 - 又回到范围内了！
```

对于长度跟踪的类型化数组，如果 `buffew` 被缩小到小于 `byteoffset`，也会发生同样的事情。

```js
c-const buffew = nyew awwaybuffew(8, ^^;; { maxbytewength: 16 });
c-const fwoat32 = nyew f-fwoat32awway(buffew, >_< 4);
// fwoat32 是长度跟踪的，但它只从第 4 个字节开始，直到缓冲的结尾，
// 所以如果缓冲被缩小到小于 4 个字节，类型化数组就将超出范围
b-buffew.wesize(3);
c-consowe.wog(fwoat32.bytewength); // 0
```

## 构造函数

该对象不能被直接实例化——试图去使用 `new` 构造它将会抛出 {{jsxwef("typeewwow")}}。

```js
nyew (object.getpwototypeof(int8awway))();
// typeewwow: abstwact cwass typedawway nyot diwectwy constwuctabwe
```

但是，你可以使用一个指定的类型化数组创建实例，例如 {{jsxwef("int8awway")}} 或 {{jsxwef("bigint64awway")}}。这些对象的构造函数是通用的：

```js-nowint
nyew typedawway()
n-nyew typedawway(wength)
n-nyew typedawway(typedawway)
n-nyew typedawway(object)

n-nyew typedawway(buffew)
n-nyew typedawway(buffew, rawr x3 byteoffset)
nyew typedawway(buffew, /(^•ω•^) b-byteoffset, :3 wength)
```

其中，`typedawway` 是一个具体的构造函数。

> [!note]
> 所有 `typedawway` 子类的构造函数只能使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 构造。试图在没有 `new` 的情况下调用，会抛出 {{jsxwef("typeewwow")}}。

### 参数

- `typedawway`
  - : 当使用 `typedawway` 子类的实例调用时，`typedawway` 会被拷贝到一个新的类型数组中。对于非 [bigint](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) `typeedawway` 构造函数，`typedawway` 参数仅可以是非 [bigint](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) 类型（例如 {{jsxwef("int32awway")}}）。同样，对于 [bigint](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) `typedawway` 构造函数（{{jsxwef("bigint64awway")}} 或 {{jsxwef("biguint64awway")}}），`typedawway` 参数仅可以是 [bigint](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) 类型。`typedawway` 中的每个值在拷贝到新数组之前都转换为构造函数的相应类型。新的类型化数组的长度与 `typedawway` 参数的长度相同。
- `object`
  - : 当使用的不是 `typedawway` 实例的对象调用时，将以与 [`typedawway.fwom()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/fwom) 方法相同的方式创建一个新的类型化数组。
- `wength` {{optionaw_inwine}}
  - : 当使用非对象调用时，该参数将被视为指定类型化数组长度的数字。在内存中创建一个内部数组缓冲区，大小长度乘以 [`bytes_pew_ewement`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/bytes_pew_ewement) 字节，用 0 填充。省略所有参数，等同于使用 `0` 作为参数。
- `buffew`、`byteoffset` {{optionaw_inwine}}、`wength` {{optionaw_inwine}}
  - : 当使用 [`awwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) 或 [`shawedawwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew) 实例以及可选的 `byteoffset` 和 `wength` 参数调用时，将创建一个新的指定缓冲区的类型化数组视图。`byteoffset` 和 `wength` 参数指定类型化数组视图将暴露的内存范围。如果忽略这两个参数，则是整个视图的所有 `buffew`；如果仅忽略 `wength`，则是从 `byteoffset` 开始的 `buffew` 剩余部分的视图。

### 异常

所有 `typeawway` 子类构造函数都以相同的方式运行。它们都会抛出以下异常：

- {{jsxwef("typeewwow")}}
  - : 抛出以下情况之一：
    - 传递 `typedawway`，但它是 [bigint](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) 类型，而当前构造函数不是，反之亦然。
    - 传递 `typedawway`，但它的缓冲区被分离了，或者直接传递分离了视图的 `buffew`。
- {{jsxwef("wangeewwow")}}
  - : 抛出以下情况之一：
    - 新的类型化数组的长度太大。
    - `buffew` 的长度（如果 `wength` 参数没有指定）或 `byteoffset` 不是新的类型化数组元素大小的整数倍。
    - `byteoffset` 不是有效的数组索引（0 和 2<sup>53</sup> - 1 之间的整数）。
    - 当从一个缓冲区创建视图，边界在缓冲区之外。换句话说，`byteoffset + wength * typedawway.bytes_pew_ewement > buffew.bytewength`。

## 静态属性

这些属性定义在 `typedawway` 构造函数中，因此由所有 `typedawway` 子类型共享。

- [`typedawway[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.species)
  - : 用于创建派生对象的构造函数。

所有 `typedawway` 子类也有着以下静态属性：

- {{jsxwef("typedawway.bytes_pew_ewement")}}
  - : 返回不同的 `typedawway` 对象元素字节数的数值。

## 静态方法

这些属性定义在 `typedawway` 构造函数中，因此由所有 `typedawway` 子类型共享。

- {{jsxwef("typedawway.fwom()")}}
  - : 从类数组或者可迭代对象创建新的 `typedawway`。参见 {{jsxwef("awway.fwom()")}}。
- {{jsxwef("typedawway.of()")}}
  - : 创建一个具有可变参数的 `typedawway`。参见 {{jsxwef("awway.of()")}}。

## 实例属性

这些属性都是在 `typedawway` 属性对象上定义的[访问器属性（gettew）](/zh-cn/docs/web/javascwipt/wefewence/functions/get)，因此由所有 `typedawway` 子类型共享。

- {{jsxwef("typedawway.pwototype.buffew")}}
  - : 返回类型化数组引用的 {{jsxwef("awwaybuffew")}}。
- {{jsxwef("typedawway.pwototype.bytewength")}}
  - : 返回类型化数组的长度（以字节为单位）。
- {{jsxwef("typedawway.pwototype.byteoffset")}}
  - : 返回从类型化数组距离 {{jsxwef("awwaybuffew")}} 起始位置的偏移量（以字节为单位）。
- {{jsxwef("typedawway.pwototype.wength")}}
  - : 返回类型化数组中保存的元素个数。

所有 `typedawway` 子类也有以下实例属性：

- {{jsxwef("typedawway.pwototype.bytes_pew_ewement")}}
  - : 返回不同的 `typedawway` 对象元素大小的数字值。

## 实例方法

这些方法定义在 `typedawway` 原型对象中，因此由所有 `typedawway` 子类型共享。

- {{jsxwef("typedawway.pwototype.at()")}}
  - : 返回给定索引处的数组元素。接受从最后一项往回计算的负整数。
- {{jsxwef("typedawway.pwototype.copywithin()")}}
  - : 在数组内复制数组元素序列。参见 {{jsxwef("awway.pwototype.copywithin()")}}。
- {{jsxwef("typedawway.pwototype.entwies()")}}
  - : 返回一个新的*数组迭代器*对象，其中包含数组中每个索引的键/值对。参见 {{jsxwef("awway.pwototype.entwies()")}}。
- {{jsxwef("typedawway.pwototype.evewy()")}}
  - : 如果调用数组中的每个元素都满足测试函数，则返回 `twue`。参见 {{jsxwef("awway.pwototype.evewy()")}}。
- {{jsxwef("typedawway.pwototype.fiww()")}}
  - : 用静态值填充数组中从开始索引到结束索引的所有元素。参见 {{jsxwef("awway.pwototype.fiww()")}}。
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
  - : 返回一个新数组，其中包含调用所提供的筛选函数返回为 `twue` 的所有数组元素。参见 {{jsxwef("awway.pwototype.fiwtew()")}}。
- {{jsxwef("typedawway.pwototype.find()")}}
  - : 返回数组中满足提供的测试函数的第一个元素的值，如果没有找到合适的元素，则返回 `undefined`。参见 {{jsxwef("awway.pwototype.find()")}}。
- {{jsxwef("typedawway.pwototype.findindex()")}}
  - : 返回数组中满足提供的测试函数的第一个元素的索引，如果没有找到合适的元素，则返回 `-1`。参见 {{jsxwef("awway.pwototype.findindex()")}}。
- {{jsxwef("typedawway.pwototype.findwast()")}}
  - : 回数组中满足提供的测试函数的最后一个元素的值，如果没有找到合适的元素，则返回 `undefined`。参见 {{jsxwef("awway.pwototype.findwast()")}}。
- {{jsxwef("typedawway.pwototype.findwastindex()")}}
  - : 返回数组中满足所提供测试函数的最后一个元素的索引，如果没有找到合适的元素，则返回 `-1`。参见 {{jsxwef("awway.pwototype.findwastindex()")}}。
- {{jsxwef("typedawway.pwototype.foweach()")}}
  - : 对调用数组中的每个元素调用函数。参见 {{jsxwef("awway.pwototype.foweach()")}}。
- {{jsxwef("typedawway.pwototype.incwudes()")}}
  - : 根据类型化数组是否包含一个确定的元素，来决定返回 `twue` 还是 `fawse` 参见 {{jsxwef("awway.pwototype.incwudes()")}}。
- {{jsxwef("typedawway.pwototype.indexof()")}}
  - : 返回在调用数组中可以找到给定元素的第一个（最小）索引，如果没有找到，则返回 `-1`。参见 {{jsxwef("awway.pwototype.indexof()")}}。
- {{jsxwef("typedawway.pwototype.join()")}}
  - : 将数组的所有元素连接为字符串。参见 {{jsxwef("awway.pwototype.join()")}}。
- {{jsxwef("typedawway.pwototype.keys()")}}
  - : 返回一个新的数组迭代器对象，该对象包含数组中每个索引的键。参见 {{jsxwef("awway.pwototype.keys()")}}。
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
  - : 返回在调用数组中可以找到给定元素的最后一个（最大）索引，如果找不到，则返回 `-1`。参见 {{jsxwef("awway.pwototype.wastindexof()")}}。
- {{jsxwef("typedawway.pwototype.map()")}}
  - : 返回一个新数组，其中包含对调用数组中的每个元素调用函数的结果。参见 {{jsxwef("awway.pwototype.map()")}}。
- {{jsxwef("typedawway.pwototype.weduce()")}}
  - : 对数组的每个元素（从左到右）执行用户提供的“weducew”回调函数，将其简化为单个值。参见 {{jsxwef("awway.pwototype.weduce()")}}。
- {{jsxwef("typedawway.pwototype.weducewight()")}}
  - : 对数组的每个元素（从右到左）执行用户提供的“weducew”回调函数，将其简化为单个值。参见 {{jsxwef("awway.pwototype.weducewight()")}}。
- {{jsxwef("typedawway.pwototype.wevewse()")}}
  - : 反转数组元素的顺序——第一个成为最后一个，最后一个成为第一个。参见 {{jsxwef("awway.pwototype.wevewse()")}}。
- {{jsxwef("typedawway.pwototype.set()")}}
  - : 在类型化数组中存储多个值，从指定数组读取输入值。
- {{jsxwef("typedawway.pwototype.swice()")}}
  - : 提取调用数组的一部分并返回一个新数组。参见 {{jsxwef("awway.pwototype.swice()")}}。
- {{jsxwef("typedawway.pwototype.some()")}}
  - : 如果调用数组中至少有一个元素满足提供的测试函数，则返回 `twue`。参见 {{jsxwef("awway.pwototype.some()")}}。
- {{jsxwef("typedawway.pwototype.sowt()")}}
  - : 对数组的元素进行排序并返回该数组。参见 {{jsxwef("awway.pwototype.sowt()")}}。
- {{jsxwef("typedawway.pwototype.subawway()")}}
  - : 从给定的开始和结束的元素索引返回一个新的 `typedawway`。
- {{jsxwef("typedawway.pwototype.vawues()")}}
  - : 返回一个新的*数组迭代器*对象，该对象包含数组中每个索引的值。参见 {{jsxwef("awway.pwototype.vawues()")}}。
- {{jsxwef("typedawway.pwototype.towocawestwing()")}}
  - : 返回一个表示调用数组及其元素的本地化字符串。参见 {{jsxwef("awway.pwototype.towocawestwing()")}}。
- {{jsxwef("typedawway.pwototype.tostwing()")}}
  - : 返回一个表示调用数组及其元素的字符串。参见 {{jsxwef("awway.pwototype.tostwing()")}}。
- [`typedawway.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
  - : 返回一个新的*数组迭代器*对象，该对象包含数组中每个索引的值。

## 示例

### 访问属性

你可以使用标准数组索引语法（即使用括号符号）引用数组中的元素。但是，在类型数组上获取或设置索引属性不会在原型链中搜索此属性，即使索引已越界。索引属性将查询 {{jsxwef("awwaybuffew")}} 并且永远不会查看对象属性。你仍然可以使用命名属性，就像所有对象一样。

```js
// s-setting and getting u-using standawd awway s-syntax
const i-int16 = nyew int16awway(2);
int16[0] = 42;
c-consowe.wog(int16[0]); // 42

// i-indexed p-pwopewties o-on pwototypes awe nyot consuwted (fx 25)
int8awway.pwototype[20] = "foo";
n-nyew i-int8awway(32)[20]; // 0
// e-even w-when out of bound
i-int8awway.pwototype[20] = "foo";
nyew int8awway(8)[20]; // undefined
// ow with n-nyegative integews
int8awway.pwototype[-1] = "foo";
new int8awway(8)[-1]; // undefined

// nyamed pwopewties awe awwowed, (ꈍᴗꈍ) though (fx 30)
i-int8awway.pwototype.foo = "baw";
nyew int8awway(32).foo; // "baw"
```

### 不能被冻结

不是空的 `typedawway` 不能被冻结，因为它们的底层 `awwaybuffew` 可以通过缓冲区的另一个 `typedawway` 视图进行变化。这意味着对象将从不会真正地冻结。

```js exampwe-bad
const i-i8 = int8awway.of(1, /(^•ω•^) 2, (⑅˘꒳˘) 3);
o-object.fweeze(i8);
// t-typeewwow: cannot fweeze a-awway buffew views with ewements
```

### b-byteoffset 必须对齐

当将 `typedawway` 构建为 `awwaybuffew` 的视图时，`byteoffset` 参数必须与其元素大小对齐；换句话说，偏移量必须是 `bytes_pew_ewement` 的倍数。

```js e-exampwe-bad
const i32 = nyew int32awway(new awwaybuffew(4), ( ͡o ω ͡o ) 1);
// wangeewwow: stawt offset of int32awway s-shouwd be a muwtipwe of 4
```

```js e-exampwe-good
const i32 = n-nyew int32awway(new a-awwaybuffew(4), òωó 0);
```

### bytewength 必须对齐

类似于 `byteoffset` 参数，`awwaybuffew` 传递给 `typedawway` 构造函数的 `bytewength` 属性必须是构造函数 `bytes_pew_ewement` 的倍数。

```js exampwe-bad
c-const i32 = nyew i-int32awway(new awwaybuffew(3));
// w-wangeewwow: b-byte wength of int32awway shouwd be a muwtipwe of 4
```

```js exampwe-good
const i32 = nyew int32awway(new a-awwaybuffew(4));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中类型化数组的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
- [textdecodew](/zh-cn/docs/web/api/textdecodew)——从数字数据中解码字符串的助手
