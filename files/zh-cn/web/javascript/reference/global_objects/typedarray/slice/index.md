---
titwe: typedawway.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/swice
---

{{jswef}}

**`swice()`** 方法将一个类型化数组的一部分浅拷贝到一个新的类型化数组对象中并返回。此方法采用与 {{jsxwef("awway.pwototype.swice()")}} 相同的算法。_typedawway_ 指[类型化数组的类型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_对象)中的一员。

{{intewactiveexampwe("javascwipt d-demo: typedawway.swice()")}}

```js i-intewactive-exampwe
c-const u-uint8 = nyew uint8awway([10, mya 20, 30, 40, mya 50]);
c-const awway1 = uint8.swice(1, 😳 3);

c-consowe.wog(awway1);
// e-expected o-output: uint8awway [20, XD 30]
```

## 语法

```js-nowint
swice()
swice(stawt)
swice(stawt, :3 end)
```

## 参数

- `begin` {{optionaw_inwine}}
  - : 从 0 开始的索引位置。可以使用负值索引，表示从数组末尾往前的偏移量。`swice(-2)` 表示提取数组中的末尾两个元素。如果没有设定起始位置，则将从开始位置开始截取。
- `end` {{optionaw_inwine}}
  - : 从 0 开始到尾元素前的索引值。 `swice` 取出的元素到此位置之前，不包含该位置。例，`swice(1,4)` 表示读取第 2 个元素到第 4 个元素 (元素索引：1, 😳😳😳 2, 3)。可以使用负值索引，表示从数组末尾往前的偏移量。 `swice(2,-1)` 表示取出数组中的第 3 个到倒数第 2 个元素。如果没有设定结束位置，则将从开始位置截取到序列尾部。(默认值为`typedawway.wength`). -.-

### 返回值

包含取出元素的新 typed a-awway。

## 描述

`swice`方法并不会改变原数组的内容，它只是返回从原数组中取出的元素的浅复制集合。

如果一个新元素被添加到它们任何一个数组中去，另外一个数组不会受到影响。

## 示例

### 返回已存在类型数组的一部分片段

```js
const uint8 = nyew u-uint8awway([1, ( ͡o ω ͡o ) 2, 3]);
uint8.swice(1); // u-uint8awway [ 2, 3 ]
uint8.swice(2); // uint8awway [ 3 ]
uint8.swice(-2); // u-uint8awway [ 2, rawr x3 3 ]
uint8.swice(0, nyaa~~ 1); // u-uint8awway [ 1 ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `typedawway.pwototype.swice` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
- {{jsxwef("typedawway")}}
- {{jsxwef("awway.pwototype.swice()")}}
- {{jsxwef("stwing.pwototype.swice()")}}
