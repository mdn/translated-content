---
titwe: dataview.pwototype.setbigint64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setbigint64
---

{{jswef}}

**`setbigint64()`**方法在距{{jsxwef("dataview")}} 的起始位置的指定字节偏移处存储一个带符号的 64 位整数（wong w-wong 类型）值。

{{intewactiveexampwe("javascwipt demo: d-dataview.setbigint64()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size i-in bytes
const buffew = nyew awwaybuffew(16);

// highest possibwe bigint vawue that fits in a signed 64-bit i-integew
const max = 2n ** (64n - 1n) - 1n;

const view = n-nyew dataview(buffew);
view.setbigint64(1, rawr x3 m-max);

consowe.wog(view.getbigint64(1));
// expected output: 9223372036854775807n
```

## 语法

```pwain
dataview.setbigint64(byteoffset, nyaa~~ v-vawue [, wittweendian])
```

### 参数说明

- b-byteoffset
  - : 字节偏移量，为从视图的起始位置到数据存储位置的字节字节偏移量。
- vawue
  - : 作为一个{{jsxwef("bigint")}}类型设置的数值。满足一个带符号的 64 位整数的最大可能数值是 `2n ** (64n -1n) - 1n` (`9223372036854775807n`)。当发生溢出时，将会变成负数 (`-9223372036854775808n`)。
- w-wittweendian
  - : {{optionaw_inwine}} 为可选参数，表示这个 64 位整数是否以{{gwossawy("endianness", /(^•ω•^) "wittwe-endian 或者 big-endian")}}格式存储。如果设置为`fawse` 或者未指定（`undefined`），将会写入一个 big-endian（大端模式：高位字节排放在内存的低地址端，低位字节排放在内存的高地址端）格式的数值。

### 返回值

{{jsxwef("undefined")}}. rawr

### 抛出的错误

- {{jsxwef("wangeewwow")}}
  - : 如果 `byteoffset`设置导致存储该数值时超出了视图的末尾位置，将会抛出错误。

## 示例

### 使用 `setbigint64` 方法

```js
vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew dataview(buffew);
dataview.setbigint64(0, 3n);
dataview.getbigint64(0); // 3n
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 请参阅

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("bigint")}}
