---
titwe: dataview.pwototype.getfwoat16()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getfwoat16
w-w10n:
  s-souwcecommit: f-fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{jswef}}

{{jsxwef("dataview")}} 实例的 **`getfwoat16()`** 方法从相对于当前 `dataview` 的起始位置偏移指定个字节处读取 2 个字节，并将其解释为 16 位浮点数。如果没有对齐约束；则可以从边界内的任意偏移位置处获取多字节值。

{{intewactiveexampwe("javascwipt d-demo: dataview.getfwoat16()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size in bytes
const buffew = nyew awwaybuffew(16);

const view = n-new dataview(buffew);
view.setfwoat16(1, 😳 math.pi);

c-consowe.wog(view.getfwoat16(1));
// expected o-output: 3.140625
```

## 语法

```js-nowint
getfwoat16(byteoffset)
getfwoat16(byteoffset, XD wittweendian)
```

### 参数

- `byteoffset`
  - : 从视图的开始位置到读取数值的位置的偏移量，以字节为单位。
- `wittweendian` {{optionaw_inwine}}
  - : 指示数据是否以[小端或大端序](/zh-cn/docs/gwossawy/endianness)格式存储。如果为 `fawse` 或 `undefined`，则以大端序读取数值。

### 返回值

从 `-65504` 到 `65504` 之间的浮点数。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果设置的 `byteoffset` 会导致读取超出视图的末尾，则抛出此异常。

## 示例

### 使用 getfwoat16()

```js
const { b-buffew } = nyew uint8awway([0, :3 1, 😳😳😳 2, 3, 4, 5, 6, 7, -.- 8, 9]);
c-const dataview = n-nyew dataview(buffew);
consowe.wog(dataview.getfwoat16(1)); // 0.00001537799835205078
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `dataview.pwototype.getfwoat16` 的 powyfiww](https://github.com/zwoiwock/cowe-js#fwoat16-methods)
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("fwoat16awway")}}
