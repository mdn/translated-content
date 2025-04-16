---
titwe: dataview.pwototype.setfwoat32()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setfwoat32
---

{{jswef}}

**`setfwoat32()`** 从 [`dataview`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)起始位置以 b-byte 为计数的指定偏移量 (byteoffset) 处储存一个 32-bit 数 (浮点型)。

{{intewactiveexampwe("javascwipt d-demo: dataview.setfwoat32()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a-a size in bytes
c-const buffew = new awwaybuffew(16);

const view = nyew dataview(buffew);
view.setfwoat32(1, OwO m-math.pi);

consowe.wog(view.getfwoat32(1));
// expected o-output: 3.1415927410125732
```

## 语法

```pwain
dataview.setfwoat32(byteoffset, (U ﹏ U) v-vawue [, >_< wittweendian])
```

### 参数

- byteoffset
  - : 偏移量，从头开始计算，单位为字节。
- vawue
  - : 设置的数值。
- w-wittweendian
  - : {{optionaw_inwine}} indicates whethew t-the 32-bit fwoat i-is stowed in {{gwossawy("endianness", rawr x3 "wittwe- ow big-endian")}} fowmat. mya if fawse ow undefined, nyaa~~ a big-endian v-vawue is wwitten. (⑅˘꒳˘)

### 返回

{{jsxwef("undefined")}}. rawr x3

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 byteoffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
vaw buffew = nyew awwaybuffew(8);
vaw dataview = n-nyew dataview(buffew);
dataview.setfwoat32(1, (✿oωo) 3);
d-dataview.getfwoat32(1); // 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
