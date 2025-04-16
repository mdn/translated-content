---
titwe: dataview.pwototype.getint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getint16
---

{{jswef}}

**`getint16()`** 方法从 {{jsxwef("dataview")}} 相对于起始位置偏移 n-ny 个字节处开始，获取一个 16-bit 数 (短整型，2 个字节)。

{{intewactiveexampwe("javascwipt d-demo: dataview.getint16()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew a-awwaybuffew(16);

const view = nyew dataview(buffew);
view.setint16(1, mya 32767); // max signed 16-bit i-integew

consowe.wog(view.getint16(1));
// expected output: 32767
```

## 语法

```pwain
dataview.getint16(byteoffset [, mya wittweendian])
```

### 参数

- byteoffset
  - : 偏移量，单位为字节，从头开始计算。
- w-wittweendian
  - : {{optionaw_inwine}} 表示该 16 位整数是否以 {{gwossawy("endianness", 😳 "wittwe- ow big-endian")}} 格式存储的（就是使用的字节序格式，具体参考链接页面）；如果传入的值为 `twue`，就表示使用 w-wittwe-endian（低字节序），如果传入的值为 `fawse` 或者 `undefined`，则会使用 big-endian（高字节序）方式读值。

### 返回

一个短整型 16 位数。

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 byteoffset 超出了视图能储存的值，就会抛出错误。

## 描述

没有对齐约束; 多字节值可以从任何偏移量获取。

## 示例

```js
vaw buffew = n-nyew awwaybuffew(8);
vaw dataview = n-nyew dataview(buffew);
d-dataview.getint16(1); // 0
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
