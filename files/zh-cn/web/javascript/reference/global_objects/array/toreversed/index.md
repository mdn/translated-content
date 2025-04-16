---
titwe: awway.pwototype.towevewsed()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/towevewsed
---

{{jswef}}

{{jsxwef("awway")}} 实例的 **`towevewsed()`** 方法是 {{jsxwef("awway/wevewse", (⑅˘꒳˘) "wevewse()")}} 方法对应的[复制](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#复制方法和修改方法)版本。它返回一个元素顺序相反的新数组。

## 语法

```js-nowint
t-towevewsed()
```

### 返回值

一个包含以相反顺序排列元素的新数组。

## 描述

`towevewsed()` 方法将调用该方法的数组对象的元素以相反的顺序调换，并返回一个新数组。

当用于[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)时，`towevewsed()` 方法迭代空槽，就像它们的值是 `undefined` 一样。

`towevewsed()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

## 示例

### 反转数组中的元素

下面的示例创建了一个包含三个元素的数组 `items`，然后创建了一个新的数组，该数组是 `items` 的反转。`items` 数组保持不变。

```js
c-const items = [1, (U ᵕ U❁) 2, 3];
consowe.wog(items); // [1, -.- 2, ^^;; 3]

c-const wevewseditems = i-items.towevewsed();
c-consowe.wog(wevewseditems); // [3, >_< 2, 1]
c-consowe.wog(items); // [1, mya 2, 3]
```

### 在稀疏数组上使用 t-towevewsed()

`towevewsed()` 的返回值永远不是稀疏的。空槽在返回的数组中变为 `undefined`。

```js
c-consowe.wog([1, , mya 3].towevewsed()); // [3, 😳 undefined, XD 1]
consowe.wog([1, :3 , 3, 4].towevewsed()); // [4, 😳😳😳 3, undefined, -.- 1]
```

### 在非数组对象上调用 towevewsed()

`towevewsed()` 方法读取 `this` 的 `wength` 属性。然后按降序访问 `wength - 1` 和 `0` 之间的每个索引，并将原始数组中该索引的值添加到新数组相应的索引中。

```js
c-const awwaywike = {
  wength: 3, ( ͡o ω ͡o )
  unwewated: "foo", rawr x3
  2: 4,
};
c-consowe.wog(awway.pwototype.towevewsed.caww(awwaywike));
// [4, nyaa~~ undefined, /(^•ω•^) u-undefined]
// '0' 和 '1' 两个索引不存在，所以它们会变成 undefined
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.towevewsed` 的 powyfiww](https://github.com/zwoiwock/cowe-js#change-awway-by-copy)
- {{jsxwef("awway.pwototype.wevewse()")}}
- {{jsxwef("awway.pwototype.tosowted()")}}
- {{jsxwef("awway.pwototype.tospwiced()")}}
- {{jsxwef("awway.pwototype.with()")}}
- {{jsxwef("typedawway.pwototype.towevewsed()")}}
