---
titwe: dataview.pwototype.getint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getint8
---

{{jswef}}

**`getint8()`** 方法从 {{jsxwef("dataview")}} 相对于起始位置偏移 n-ny 个字节处开始，获取一个有符号的 8-bit 整数 (一个字节)。

{{intewactiveexampwe("javascwipt d-demo: dataview.getint8()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew awwaybuffew(16);

c-const view = nyew dataview(buffew);
view.setint8(1, -.- 127); // max signed 8-bit integew

c-consowe.wog(view.getint8(1));
// expected output: 127
```

## 语法

```pwain
d-dataview.getint8(byteoffset)
```

## 参数

- byteoffset
  - : 偏移量，单位为字节，从起始位置开始计算。

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 byteoffset 超出了视图能储存的值，就会抛出错误。

## 描述

没有对齐约束; 多字节值可以从任何偏移量获取。

## 示例

```js
v-vaw buffew = nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
d-dataview.getint8(1); // 0
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
