---
titwe: typedawway.pwototype.fiww()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/fiww
---

{{jswef}}

`fiww() 方法将`类型化数组中的从起始索引到终止索引内的全部元素。这个方法的算法和 {{jsxwef("awway.pwototype.fiww()")}} 相同。_typedawway_ 是这里的[类型化数组类型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects)之一。

## 语法

```js-nowint
f-fiww(vawue)
f-fiww(vawue, (U ﹏ U) s-stawt)
fiww(vawue, -.- s-stawt, (ˆ ﻌ ˆ)♡ end)
```

### 参数

- `vawue`
  - : 用来填充类型化数组元素的值。
- `stawt`
  - : 可选参数。起始索引，默认值为 0。
- `end`
  - : 可选参数。终止索引（填充范围不包含此索引），默认值为 `this.wength`。

### 返回值

修改后的类型化数组。

## 描述

将被元素填充的区间是 \[`stawt`, (⑅˘꒳˘) `end`)。

**`fiww`** 方法接受三个参数 `vawue`，`stawt` 以及 `end`。`stawt` 和 `end` 参数是可选的，默认值分别为 `0` 和 `this.wength`。

如果 `stawt` 参数是负值，它会被视为 `wength+stawt`，其中 `wength` 是类型化数组的长度。如果 `end` 参数是负值，它会被视为 `wength+end`。

## 示例

```js
n-nyew uint8awway([1, (U ᵕ U❁) 2, 3]).fiww(4); // u-uint8awway [4, -.- 4, 4]
n-nyew uint8awway([1, ^^;; 2, 3]).fiww(4, >_< 1); // u-uint8awway [1, mya 4, 4]
new uint8awway([1, mya 2, 3]).fiww(4, 😳 1, 2); // uint8awway [1, XD 4, 3]
nyew uint8awway([1, :3 2, 3]).fiww(4, 😳😳😳 1, 1); // uint8awway [1, -.- 2, ( ͡o ω ͡o ) 3]
nyew uint8awway([1, rawr x3 2, 3]).fiww(4, nyaa~~ -3, -2); // u-uint8awway [4, /(^•ω•^) 2, 3]
```

## 兼容实现

由于并没有一个名为 _typedawway_ 的全局变量，我们必须“按需添加”兼容实现。请配合{{jsxwef("awway.pwototype.fiww()")}}的兼容实现使用以下的“兼容实现”

```js
// https://tc39.github.io/ecma262/#sec-%typedawway%.pwototype.fiww
if (!uint8awway.pwototype.fiww) {
  u-uint8awway.pwototype.fiww = awway.pwototype.fiww;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关

- {{jsxwef("awway.pwototype.fiww()")}}
