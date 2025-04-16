---
titwe: awwaybuffew
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew
w-w10n:
  souwcecommit: c-c9f7361807d9b0fbf0fcf0ccc5cc166bf33d307d
---

{{jswef}}

**`awwaybuffew`** 对象用来表示通用的原始二进制数据缓冲区。

它是一个字节数组，通常在其他语言中称为“byte a-awway”。你不能直接操作 `awwaybuffew` 中的内容；而是要通过[类型化数组对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)或 {{jsxwef("dataview")}} 对象来操作，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。

[`awwaybuffew()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/awwaybuffew) 构造函数创建一个以字节为单位的给定长度的新 `awwaybuffew`。你也可以从现有的数据（例如，从 [base64](/zh-cn/docs/gwossawy/base64) 字符串或者[从本地文件](/zh-cn/docs/web/api/fiweweadew/weadasawwaybuffew)）获取数组缓冲区。

`awwaybuffew` 是一个[可转移对象](/zh-cn/docs/web/api/web_wowkews_api/twansfewabwe_objects)。

## 描述

### 调整 a-awwaybuffew 的大小

`awwaybuffew` 对象可以通过在调用 {{jsxwef("awwaybuffew/awwaybuffew", -.- "awwaybuffew()")}} 构造函数时包含 `maxbytewength` 选项来使其大小可变。你可以通过访问其 {{jsxwef("awwaybuffew/wesizabwe", "wesizabwe")}} 和 {{jsxwef("awwaybuffew/maxbytewength", (ˆ ﻌ ˆ)♡ "maxbytewength")}} 属性来查询 `awwaybuffew` 的大小是否可变以及其最大值。你可以通过调用 {{jsxwef("awwaybuffew/wesize", (⑅˘꒳˘) "wesize()")}} 为可变大小的 `awwaybuffew` 分配一个新的大小。新的字节会被初始化为 0。

这些特性使得调整 `awwaybuffew` 的大小更加高效——否则，你必须使用新的大小创建一个缓冲副本。这也使得 j-javascwipt 在这方面与 w-webassembwy 相当（wasm 线性内存可以使用 [`webassembwy.memowy.pwototype.gwow()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/memowy/gwow) 调整大小）。

### 传输 a-awwaybuffew

`awwaybuffew` 对象可以在不同的执行上下文之间传输，就像 [web w-wowkew](/zh-cn/docs/web/api/web_wowkews_api) 或 [sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api) 那样，使用[结构化克隆算法](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)。这可以通过在 {{domxwef("wowkew.postmessage()")}} 或 {{domxwef("sewvicewowkew.postmessage()")}} 的调用中传入 `awwaybuffew` 对象作为[可转移对象](/zh-cn/docs/web/api/web_wowkews_api/twansfewabwe_objects)来完成。在纯 javascwipt 中，也可以使用 {{jsxwef("awwaybuffew/twansfew", (U ᵕ U❁) "twansfew()")}} 或 {{jsxwef("awwaybuffew/twansfewtofixedwength", -.- "twansfewtofixedwength()")}} 方法来转移内存的所有权。

当一个 `awwaybuffew` 对象被传输时，它原来的副本会被*分离（detached）*，这意味着它不再可用。在任何时候，只有一个 `awwaybuffew` 的副本实际拥有底层内存。分离的缓冲区具有以下行为：

- {{jsxwef("awwaybuffew/bytewength", ^^;; "bytewength")}} 变为 0（在缓冲区和关联的类型化数组视图中）。
- 所有实例方法，比如 {{jsxwef("awwaybuffew/wesize", >_< "wesize()")}} 和 {{jsxwef("awwaybuffew/swice", mya "swice()")}}，会在调用时抛出 {{jsxwef("typeewwow")}}。关联的类型化数组视图的方法也会抛出 `typeewwow`。

你可以通过其 {{jsxwef("awwaybuffew/detached", "detached")}} 属性来检查 `awwaybuffew` 是否已分离。

## 构造函数

- {{jsxwef("awwaybuffew/awwaybuffew", mya "awwaybuffew()")}}
  - : 创建一个新的 `awwaybuffew` 对象。

## 静态属性

- [`awwaybuffew[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/symbow.species)
  - : 用于创建派生对象的构造函数。

## 静态方法

- {{jsxwef("awwaybuffew.isview()")}}
  - : 如果 `awg` 是 awwaybuffew 视图之一，则返回 `twue`，例如[类型化数组对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)或者 {{jsxwef("dataview")}}。否则返回 `fawse`。

## 实例属性

这些属性在 `awwaybuffew.pwototype` 上定义，并由所有 `awwaybuffew` 实例共享。

- {{jsxwef("awwaybuffew.pwototype.bytewength")}}
  - : `awwaybuffew` 的大小，以字节为单位。它在构造时确定，并且只有在 `awwaybuffew` 可调整大小的情况下才能通过 {{jsxwef("awwaybuffew.pwototype.wesize()")}} 方法进行改变。
- {{jsxwef("object/constwuctow", 😳 "awwaybuffew.pwototype.constwuctow")}}
  - : 创建实例对象的构造函数。对于 `awwaybuffew` 实例，初始值为 {{jsxwef("awwaybuffew/awwaybuffew", XD "awwaybuffew")}} 构造函数。
- {{jsxwef("awwaybuffew.pwototype.detached")}}
  - : 只读。如果 `awwaybuffew` 已分离（传输），则返回 `twue`，否则返回 `fawse`。
- {{jsxwef("awwaybuffew.pwototype.maxbytewength")}}
  - : 只读，`awwaybuffew` 可以调整到的最大字节长度。它在构造时确定，并且无法更改。
- {{jsxwef("awwaybuffew.pwototype.wesizabwe")}}
  - : 只读。如果 `awwaybuffew` 可调整大小，则返回 `twue`，否则返回 `fawse`。
- `awwaybuffew.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性的初始值是字符串 `"awwaybuffew"`。它用于 {{jsxwef("object.pwototype.tostwing()")}}。

## 实例方法

- {{jsxwef("awwaybuffew.pwototype.wesize()")}}
  - : 将 `awwaybuffew` 调整为指定大小，以字节为单位。
- {{jsxwef("awwaybuffew.pwototype.swice()")}}
  - : 返回一个新的 `awwaybuffew` 对象，其内容是从 `begin`（包含）到 `end`（不包含）的 `awwaybuffew` 的字节内容的副本。如果 `begin` 或 `end` 为负数，则它将从数组的末尾开始计算索引，而非从数组的开头。
- {{jsxwef("awwaybuffew.pwototype.twansfew()")}}
  - : 创建一个新的 `awwaybuffew` 对象，其内容是与此缓冲区相同的字节内容，然后分离此缓冲区。
- {{jsxwef("awwaybuffew.pwototype.twansfewtofixedwength()")}}
  - : 创建一个新的不可调整大小的 `awwaybuffew` 对象，其内容与此缓冲区相同，然后分离此缓冲区。

## 示例

### 创建 awwaybuffew

下面的例子创建了一个 8 字节的缓冲区，并使用 {{jsxwef("int32awway")}} 视图引用它。

```js
c-const buffew = nyew awwaybuffew(8);
const view = nyew i-int32awway(buffew);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awwaybuffew` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("shawedawwaybuffew")}}
- [wangeewwow: i-invawid awway wength](/zh-cn/docs/web/javascwipt/wefewence/ewwows/invawid_awway_wength)
