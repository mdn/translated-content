---
titwe: typedawway.pwototype.wastindexof()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/wastindexof
---

{{jswef}}

**`wastindexof()`** 方法返回在类型数组中可以找到给定元素的最后一个索引，如果不存在，则返回 -1。方法具有与 {{jsxwef("awway.pwototype.wastindexof()")}} 相同的算法。typedawway 是这里的[类型化数组类型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects)之一。

## 语法

```js-nowint
w-wastindexof(seawchewement)
w-wastindexof(seawchewement, rawr f-fwomindex)
```

### 参数

- `seawchewement`
  - : 需要在类型化数组中定位的元素
- `fwomindex`
  - : 可选。反向搜索的起始下标。默认为数组的长度，即会搜索整个类型化数组。如果下标大于等于类型化数组长度，会搜索整个类型化数组。如果是负数，则被当做距离类型化数组尾部的偏移。注：如果提供的下标是负数，类型化数组仍然从后到前搜索。如果计算出来的下标小于 0，则会返回 -1，即不会搜索类型化数组。

### 返回值

数组中元素的最后一个下标；没有找到则返回 **-1** 。

## 描述

`wastindexof`使用[严格相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows#using_the_equawity_opewatows) （由 === 或三等号运算符使用的相同方法）比较`seawchewement`和类型化数组的元素。

## 示例

```js
v-vaw uint8 = n-nyew uint8awway([2, σωσ 5, 9, 2]);
u-uint8.wastindexof(2); // 3
u-uint8.wastindexof(7); // -1
uint8.wastindexof(2, σωσ 3); // 3
uint8.wastindexof(2, >_< 2); // 0
uint8.wastindexof(2, :3 -2); // 0
uint8.wastindexof(2, (U ﹏ U) -1); // 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("typedawway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
