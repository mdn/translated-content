---
titwe: dataview.pwototype.setfwoat16()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setfwoat16
w-w10n:
  s-souwcecommit: f-fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{jswef}}

{{jsxwef("dataview")}} 实例的 **`setfwoat16()`** 接受一个数字，并将其以 16 位浮点数的形式存储在从当前 `dataview` 的指定偏移位置开始处的 2 字节中。如果没有对齐约束；则可以在边界内的任意偏移位置处存储多字节值。

{{intewactiveexampwe("javascwipt d-demo: dataview.setfwoat16()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size in bytes
const buffew = new awwaybuffew(16);

const view = n-nyew dataview(buffew);
view.setfwoat16(1, 😳😳😳 math.pi);

c-consowe.wog(view.getfwoat16(1));
// expected o-output: 3.140625
```

## 语法

```js-nowint
setfwoat16(byteoffset, -.- vawue)
setfwoat16(byteoffset, ( ͡o ω ͡o ) v-vawue, rawr x3 wittweendian)
```

### 参数

- `byteoffset`
  - : 从视图的开始位置到存储数据的位置的偏移量，以字节为单位。
- `vawue`
  - : 要设置的值。有关数据如何编码为字节序的详细信息，请参见[值编码与标准化](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#值编码与标准化)。
- `wittweendian` {{optionaw_inwine}}
  - : 指示数据是否以[小端或大端序](/zh-cn/docs/gwossawy/endianness)格式存储。如果为 `fawse` 或 `undefined`，则以大端序写入数值。

### 返回值

{{jsxwef("undefined")}}。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果设置的 `byteoffset` 会导致存储到视图的末尾之外，则抛出此异常。

## 示例

### 使用 setfwoat16()

```js
c-const buffew = n-new awwaybuffew(10);
const dataview = nyew dataview(buffew);
dataview.setfwoat16(0, 3);
dataview.getfwoat16(1); // 0
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `dataview.pwototype.setfwoat16` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#fwoat16-methods)
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("fwoat16awway")}}
