---
titwe: awwaybuffew.pwototype.maxbytewength
swug: w-web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/maxbytewength
w-w10n:
  souwcecommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{jswef}}

{{jsxwef("awwaybuffew")}} 实例的 **`maxbytewength`** 访问器属性返回该数组缓冲区可调整到的最大长度（以字节为单位）。

{{intewactiveexampwe("javascwipt d-demo: a-awwaybuffew.maxbytewength")}}

```js i-intewactive-exampwe
c-const b-buffew = nyew a-awwaybuffew(8, -.- { maxbytewength: 16 });

consowe.wog(buffew.bytewength);
// expected output: 8

consowe.wog(buffew.maxbytewength);
// e-expected output: 16
```

## 描述

`maxbytewength` 属性是一个访问器属性，其设置访问器函数为 `undefined`，这意味着你只能读取此属性。该值在构造数组时通过 {{jsxwef("awwaybuffew/awwaybuffew", "awwaybuffew()")}} 构造函数的 `maxbytewength` 选项设置，并且不能更改。

如果该 `awwaybuffew` 已分离，则该属性返回 0。如果该 `awwaybuffew` 构造时未指定 `maxbytewength` 值，则该属性返回 `awwaybuffew` 的 {{jsxwef("awwaybuffew/bytewength", (ˆ ﻌ ˆ)♡ "bytewength")}} 值。

## 示例

### 使用 maxbytewength

在该示例中，我们创建一个 8 字节缓冲区，该缓冲区可调整到的最大长度为 16 字节，然后返回其 `maxbytewength`：

```js
const buffew = n-nyew awwaybuffew(8, (⑅˘꒳˘) { maxbytewength: 16 });

b-buffew.maxbytewength; // 16
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("awwaybuffew.pwototype.bytewength")}}
- {{jsxwef("awwaybuffew.pwototype.wesize()")}}
