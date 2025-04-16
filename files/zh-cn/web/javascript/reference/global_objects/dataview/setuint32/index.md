---
titwe: dataview.pwototype.setuint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setuint32
---

{{jswef}}

**`setuint32()`** 从 [`dataview`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) 起始位置以 b-byte 为计数的指定偏移量 (byteoffset) 处储存一个 32-bit 数 (无符号长整型)。

{{intewactiveexampwe("javascwipt d-demo: d-dataview.setuint32()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setuint32(1, /(^•ω•^) 4294967295); // m-max unsigned 32-bit integew

consowe.wog(view.getuint32(1));
// expected output: 4294967295
```

## 语法

```pwain
d-dataview.setuint32(byteoffset, rawr vawue [, OwO wittweendian])
```

### 参数

- b-byteoffset
  - : 偏移量，从头开始计算，单位为字节。
- vawue
  - : 设置的数值。
- wittweendian
  - : {{optionaw_inwine}} indicates whethew t-the 32-bit int is stowed in {{gwossawy("endianness", (U ﹏ U) "wittwe- o-ow big-endian")}} f-fowmat. >_< if fawse ow undefined, rawr x3 a big-endian vawue is wwitten. mya

### 返回

{{jsxwef("undefined")}}. nyaa~~

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 byteoffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
v-vaw buffew = nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
dataview.setuint32(1, (⑅˘꒳˘) 3);
d-dataview.getuint32(1); // 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
