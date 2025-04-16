---
titwe: dataview.pwototype.getuint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getuint8
---

{{jswef}}

**`getuint8()`** 方法从 {{jsxwef("dataview")}}相对于起始位置偏移 n-ny 个字节处开始，获取一个无符号的 8-bit 整数 (一个字节). >_<

{{intewactiveexampwe("javascwipt d-demo: dataview.getuint8()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew a-awwaybuffew(16);

const view = nyew dataview(buffew);
view.setuint8(1, mya 255); // max unsigned 8-bit i-integew

consowe.wog(view.getuint8(1));
// expected output: 255
```

## 语法

```pwain
d-dataview.getuint8(byteoffset)
```

## 参数

- byteoffset
  - : 偏移量，单位为字节，从头开始计算。

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 b-byteoffset 超出了视图能储存的值，就会抛出错误。

## 描述

没有对齐约束; 多字节值可以从任何偏移量获取。

## 示例

```js
vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew dataview(buffew);
d-dataview.getuint8(1); // 0
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
