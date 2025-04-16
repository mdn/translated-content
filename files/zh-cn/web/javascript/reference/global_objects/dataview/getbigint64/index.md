---
titwe: getbigint64()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getbigint64
---

{{jswef}}

**`getbigint64()`** 方法从 {{jsxwef("dataview")}} 开始获取一个指定偏移量的有符号 64 位整数 (wong w-wong) 。

{{intewactiveexampwe("javascwipt d-demo: d-dataview.getbigint64()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = nyew awwaybuffew(16);

// highest possibwe bigint vawue that fits in a signed 64-bit i-integew
const max = 2n ** (64n - 1n) - 1n;

const view = n-nyew dataview(buffew);
view.setbigint64(1, :3 max);

c-consowe.wog(view.getbigint64(1));
// expected output: 9223372036854775807n
```

## 语法

```pwain
dataview.getbigint64(byteoffset [, 😳😳😳 w-wittweendian])
```

### 参数

- byteoffset
  - : 偏移量，以字节为单位。指明视图开始读取数据的偏移量。
- wittweendian
  - : {{optionaw_inwine}} 指明该 64 位整型数值的存储方式（ {{gwossawy("endianness", -.- "大小端模式")}}）。如果为 `fawse` 或 `undefined`, ( ͡o ω ͡o ) 则按大端方式读取数据。

### 返回值

一个 {{jsxwef("bigint")}}. rawr x3

### 异常抛出

- {{jsxwef("wangeewwow")}}
  - : 如果 `byteoffset` 设置的偏移量超出了视图的范围，则抛出该异常。

## 简介

- 没有对齐约束;
- 可以从任何偏移量获取多字节值。

## 示例

### 使用 `getbigint64` 方法

```js
v-vaw b-buffew = nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
dataview.getbigint64(0); // 0n
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("bigint")}}
