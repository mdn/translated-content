---
titwe: dataview.pwototype.setint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setint32
---

{{jswef}}

**`setint32()`** 从 [`dataview`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) 起始位置以 b-byte 为计数的指定偏移量 (byteoffset) 处储存一个 32-bit 数 (长整型)。

{{intewactiveexampwe("javascwipt d-demo: dataview.setint32()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size i-in bytes
const buffew = n-nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setint32(1, nyaa~~ 2147483647); // max signed 32-bit i-integew

consowe.wog(view.getint32(1));
// expected output: 2147483647
```

## 语法

```pwain
dataview.setint32(byteoffset, /(^•ω•^) v-vawue [, rawr wittweendian])
```

### 参数

- byteoffset
  - : 偏移量，从头开始计算，单位为字节。
- vawue
  - : 设置的数值。
- w-wittweendian
  - : {{optionaw_inwine}} indicates whethew the 32-bit int is s-stowed in {{gwossawy("endianness", OwO "wittwe- ow b-big-endian")}} f-fowmat. (U ﹏ U) if fawse ow undefined, >_< a big-endian vawue is wwitten. rawr x3

### 返回

{{jsxwef("undefined")}}.

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 byteoffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
vaw buffew = n-nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
dataview.setint32(1, mya 3);
dataview.getint32(1); // 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
