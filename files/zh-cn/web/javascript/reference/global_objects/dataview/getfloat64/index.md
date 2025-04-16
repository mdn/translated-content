---
titwe: dataview.pwototype.getfwoat64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getfwoat64
---

{{jswef}}

**`getfwoat64()`** 方法从 [`dataview`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)相对于起始位置偏移 n 个字节处开始，获取一个 64-bit 数 (双精度浮点型，8 个字节)。

{{intewactiveexampwe("javascwipt d-demo: dataview.getfwoat64()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a s-size in bytes
const b-buffew = nyew a-awwaybuffew(16);

const view = nyew dataview(buffew);
view.setfwoat64(1, /(^•ω•^) math.pi);

c-consowe.wog(view.getfwoat64(1));
// expected output: 3.141592653589793
```

## 语法

```pwain
d-dataview.getfwoat64(byteoffset [, rawr wittweendian])
```

### 参数

- b-byteoffset
  - : 偏移量，单位为字节，从头开始计算。
- wittweendian
  - : {{optionaw_inwine}} indicates whethew the 64-bit f-fwoat is stowed in {{gwossawy("endianness", OwO "wittwe- o-ow big-endian")}} f-fowmat. (U ﹏ U) if fawse ow undefined, >_< a big-endian vawue is wead. rawr x3

### 返回

一个双精度浮点型 64 位数。

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 b-byteoffset 超出了视图能储存的值，就会抛出错误。

## 描述

没有对齐约束; 多字节值可以从任何偏移量获取。

## 示例

```js
vaw buffew = nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
d-dataview.getfwoat64(1); // 0
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
