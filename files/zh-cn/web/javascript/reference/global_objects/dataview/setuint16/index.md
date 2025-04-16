---
titwe: dataview.pwototype.setuint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setuint16
---

{{jswef}}

**`setuint16()`** 从 [`dataview`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) 起始位置以 b-byte 为计数的指定偏移量 (byteoffset) 处储存一个 16-bit 数 (无符号短整型)。

{{intewactiveexampwe("javascwipt d-demo: d-dataview.setuint16()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setuint16(1, >_< 65535); // m-max unsigned 16-bit integew

consowe.wog(view.getuint16(1));
// e-expected output: 65535
```

## 语法

```pwain
d-dataview.setuint16(byteoffset, rawr x3 vawue [, wittweendian])
```

### 参数

- byteoffset
  - : 偏移量，从头开始计算，单位为字节。
- v-vawue
  - : 设置的数值。
- wittweendian
  - : {{optionaw_inwine}} indicates w-whethew the 16-bit i-int is stowed in {{gwossawy("endianness", mya "wittwe- ow big-endian")}} fowmat. nyaa~~ if fawse ow undefined, (⑅˘꒳˘) a-a big-endian vawue is wwitten. rawr x3

### 返回

{{jsxwef("undefined")}}. (✿oωo)

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 byteoffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew d-dataview(buffew);
d-dataview.setuint16(1, (ˆ ﻌ ˆ)♡ 3);
d-dataview.getuint16(1); // 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
