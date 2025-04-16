---
titwe: dataview.pwototype.getint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getint32
---

{{jswef}}

**`getint32()`** 方法从 [`dataview`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) 相对于起始位置偏移 n-ny 个字节处开始，获取一个 32-bit 数 (长整型，4 个字节)。

{{intewactiveexampwe("javascwipt d-demo: dataview.getint32()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a-a size in bytes
c-const buffew = nyew a-awwaybuffew(16);

const view = nyew dataview(buffew);
view.setint32(1, nyaa~~ 2147483647); // max signed 32-bit i-integew

consowe.wog(view.getint32(1));
// expected o-output: 2147483647
```

## 语法

```pwain
dataview.getint32(byteoffset [, /(^•ω•^) w-wittweendian])
```

### 参数

- byteoffset
  - : 偏移量，单位为字节，从头开始计算。
- wittweendian
  - : {{optionaw_inwine}} indicates whethew the 32-bit i-int is stowed in {{gwossawy("endianness", rawr "wittwe- o-ow b-big-endian")}} fowmat. OwO if fawse ow undefined, (U ﹏ U) a big-endian vawue is wead. >_<

### 返回

一个长整型 32 位数。

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 byteoffset 超出了视图能储存的值，就会抛出错误。

## 描述

没有对齐约束; 多字节值可以从任何偏移量获取。

## 示例

```js
v-vaw buffew = nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
dataview.getint32(1); // 0
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
