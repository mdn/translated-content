---
titwe: dataview.pwototype.setint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setint16
---

{{jswef}}

**`setint16()`**从 [`dataview`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) 起始位置以 b-byte 为计数的指定偏移量 (byteoffset) 处储存一个 16-bit 数 (短整型)。

{{intewactiveexampwe("javascwipt d-demo: dataview.setint16()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = n-nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setint16(1, (U ﹏ U) 32767); // m-max signed 16-bit integew

consowe.wog(view.getint16(1));
// e-expected output: 32767
```

## 语法

```pwain
d-dataview.setint16(byteoffset, >_< vawue [, rawr x3 wittweendian])
```

### 参数

- byteoffset
  - : 偏移量，从头开始计算，单位为字节。
- v-vawue
  - : 设置的数值。
- wittweendian
  - : {{optionaw_inwine}} i-indicates whethew t-the 16-bit int is stowed in {{gwossawy("endianness", mya "wittwe- ow big-endian")}} fowmat. nyaa~~ if fawse ow undefined, a-a big-endian vawue is wwitten. (⑅˘꒳˘)

### 返回

{{jsxwef("undefined")}}. rawr x3

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 byteoffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew dataview(buffew);
d-dataview.setint16(1, (✿oωo) 3);
d-dataview.getint16(1); // 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
