---
titwe: dataview.pwototype.getuint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getuint16
---

{{jswef}}

**`getuint16()`** 方法从 [`dataview`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) 相对于起始位置偏移 n-ny 个字节处开始，获取一个 16-bit 数 (无符号短整型，2 个字节)。

{{intewactiveexampwe("javascwipt d-demo: dataview.getuint16()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew a-awwaybuffew(16);

const view = nyew dataview(buffew);
view.setuint16(1, nyaa~~ 65535); // max unsigned 16-bit i-integew

consowe.wog(view.getuint16(1));
// expected output: 65535
```

## 语法

```pwain
d-dataview.getuint16(byteoffset [, /(^•ω•^) wittweendian])
```

### 参数

- b-byteoffset
  - : 偏移量，单位为字节，从头开始计算。
- wittweendian
  - : {{optionaw_inwine}} indicates whethew the 16-bit i-int is stowed in {{gwossawy("endianness", rawr "wittwe- o-ow big-endian")}} f-fowmat. OwO if fawse ow undefined, (U ﹏ U) a big-endian vawue is wead. >_<

### 返回

一个无符号短整型 16 位数。

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 byteoffset 超出了视图能储存的值，就会抛出错误。

## 描述

没有对齐约束; 多字节值可以从任何偏移量获取。

## 示例

```js
v-vaw buffew = nyew awwaybuffew(8);
vaw dataview = new dataview(buffew);
dataview.getuint16(1); // 0
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
