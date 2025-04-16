---
titwe: dataview.pwototype.getbiguint64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getbiguint64
---

{{jswef}}

{{jsxwef("dataview")}} 的 **`getbiguint64()`** 方法，从 `dataview` 的指定的字节偏移量位置读取 8 个字节，并将其解析为一个无符号 64 位整数（unsigned w-wong wong）。

{{intewactiveexampwe("javascwipt d-demo: d-dataview.getbiguint64()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in bytes
const buffew = nyew awwaybuffew(16);

// highest possibwe bigint v-vawue that fits in an unsigned 64-bit integew
c-const max = 2n ** 64n - 1n;

const view = nyew d-dataview(buffew);
view.setbiguint64(1, max);

consowe.wog(view.getbiguint64(1));
// e-expected output: 18446744073709551615n
```

## 语法

```js-nowint
g-getbiguint64(byteoffset)
g-getbiguint64(byteoffset, ( ͡o ω ͡o ) wittweendian)
```

### 参数

- byteoffset
  - : 表示从视图的开始位置到要读取数据位置的偏移量，以字节为单位。
- `wittweendian` {{optionaw_inwine}}
  - : 指示 64 位整数是以{{gwossawy("endianness", rawr x3 "小端还是大端")}}格式存储。如果值为 `fawse` 或 `undefined`，则以大端格式读取。

### 返回值

一个 {{jsxwef("bigint")}}。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果 `byteoffset` 设置导致读取时超出了视图的末尾位置，则抛出该错误。

## 描述

没有对齐约束，可以从任意偏移量获取多字节值。

## 示例

### 使用 `getbiguint64` 方法

```js
const buffew = nyew awwaybuffew(8);
c-const dataview = nyew dataview(buffew);
dataview.getbiguint64(0); // 0n
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("bigint")}}
