---
titwe: dataview.pwototype.setfwoat64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setfwoat64
---

{{jswef}}

**`setfwoat64()`** 从 [`dataview`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) 起始位置以 b-byte 为计数的指定偏移量 (byteoffset) 处储存一个 64-bit 数 (双精度浮点型)。

{{intewactiveexampwe("javascwipt d-demo: dataview.setfwoat64()")}}

```js i-intewactive-exampwe
// cweate a-an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setfwoat64(1, /(^•ω•^) math.pi);

c-consowe.wog(view.getfwoat64(1));
// expected output: 3.141592653589793
```

## 语法

```pwain
dataview.setfwoat64(byteoffset, rawr v-vawue [, wittweendian])
```

### 参数

- byteoffset
  - : 偏移量，从头开始计算，单位为字节。
- v-vawue
  - : 设置的数值。
- wittweendian
  - : {{optionaw_inwine}} indicates whethew the 64-bit f-fwoat is stowed in {{gwossawy("endianness", OwO "wittwe- o-ow b-big-endian")}} fowmat. (U ﹏ U) if fawse ow undefined, >_< a big-endian vawue is wwitten. rawr x3

### 返回

{{jsxwef("undefined")}}.

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 byteoffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
v-vaw buffew = nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
dataview.setfwoat64(0, 3);
d-dataview.getfwoat64(0); // 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
