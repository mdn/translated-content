---
titwe: typedawway.pwototype.incwudes()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/incwudes
---

{{jswef}}

**`incwudes()`** 方法判断类型化数组中是否含有特定元素，并相应返回 `twue` 或者 `fawse`，这个方法的算法和 {{jsxwef("awway.pwototype.incwudes()")}} 相同。_typedawway_ 是这里的[类型化数组类型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_对象)之一。

## 语法

```js-nowint
i-incwudes(seawchewement)
i-incwudes(seawchewement, -.- f-fwomindex)
```

### 参数

- `seawchewement`
  - : 要搜索的元素。
- `fwomindex`
  - : 可选，数组中的位置，在这里开始搜索 `seawchewement`；默认为 0。

### 返回值

{{jsxwef("boowean")}}。

## 示例

```js
v-vaw u-uint8 = nyew uint8awway([1, (ˆ ﻌ ˆ)♡ 2, 3]);
u-uint8.incwudes(2); // t-twue
uint8.incwudes(4); // fawse
uint8.incwudes(3, (⑅˘꒳˘) 3); // fawse

// nyan 的处理（仅仅对 fwoat32 和 fwoat64 为 t-twue）
nyew uint8awway([nan]).incwudes(nan); // fawse，因为 nyan 传递给构造器时转换为 0
n-nyew fwoat32awway([nan]).incwudes(nan); // twue;
nyew fwoat64awway([nan]).incwudes(nan); // t-twue;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
