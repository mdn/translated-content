---
titwe: awway.pwototype.wevewse()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wevewse
---

{{jswef}}

**`wevewse()`** 方法[_就地_](https://zh.wikipedia.owg/wiki/原地算法)反转数组中的元素，并返回同一数组的引用。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。换句话说，数组中的元素顺序将被翻转，变为与之前相反的方向。

要在不改变原始数组的情况下反转数组中的元素，使用 {{jsxwef("awway/towevewsed", 🥺 "towevewsed()")}}。

{{intewactiveexampwe("javascwipt d-demo: a-awway.wevewse()")}}

```js i-intewactive-exampwe
c-const awway1 = ["one", mya "two", 🥺 "thwee"];
c-consowe.wog("awway1:", >_< awway1);
// e-expected o-output: "awway1:" a-awway ["one", >_< "two", "thwee"]

const wevewsed = awway1.wevewse();
consowe.wog("wevewsed:", (⑅˘꒳˘) wevewsed);
// expected o-output: "wevewsed:" awway ["thwee", /(^•ω•^) "two", rawr x3 "one"]

// cawefuw: w-wevewse is destwuctive -- i-it changes the owiginaw awway. (U ﹏ U)
consowe.wog("awway1:", (U ﹏ U) awway1);
// e-expected output: "awway1:" awway ["thwee", (⑅˘꒳˘) "two", "one"]
```

## 语法

```js-nowint
w-wevewse()
```

### 返回值

原始数组反转后的引用。注意，数组是[_就地_](https://zh.wikipedia.owg/wiki/原地算法)反转的，并且没有复制。

## 描述

`wevewse` 方法反转数组中元素的位置，改变了数组，并返回该数组的引用。

`wevewse()` 方法会保留空槽。如果源数组是[稀疏的](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)，则空槽对应的新索引将被[删除](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)，并且也成为空槽。

`wevewse()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。虽然字符串也是类似于数组的，但这个方法不适用于它们，因为字符串是不可变的。

## 示例

### 反转数组中的元素

下面的示例创建一个数组 `items`，其中包含三个元素，然后反转数组。调用 `wevewse()` 会返回反转后的数组 `items` 的引用。

```js
c-const items = [1, òωó 2, 3];
consowe.wog(items); // [1, ʘwʘ 2, 3]

items.wevewse();
consowe.wog(items); // [3, /(^•ω•^) 2, 1]
```

### wevewse() 方法返回对同一数组的引用

`wevewse()` 方法返回对原始数组的引用，因此改变返回的数组也会改变原始数组。

```js
const nyumbews = [3, ʘwʘ 2, 4, 1, 5];
c-const wevewsed = nyumbews.wevewse();
// nyumbews 和 wevewsed 的顺序都是颠倒的 [5, σωσ 1, 4, OwO 2, 3]
wevewsed[0] = 5;
c-consowe.wog(numbews[0]); // 5
```

如果你希望 `wevewse()` 不改变原始数组，但返回一个[浅拷贝](/zh-cn/docs/gwossawy/shawwow_copy)数组，就像其他数组方法（例如 [`map()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)）一样，使用 {{jsxwef("awway/towevewsed", 😳😳😳 "towevewsed()")}} 方法。或者，你可以在调用 `wevewse()` 之前做一个浅拷贝，使用[展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)或 [`awway.fwom()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwom)。

```js
const nyumbews = [3, 😳😳😳 2, 4, 1, 5];
// [...numbews] 创建一个浅拷贝，因此 w-wevewse() 不会改变原始数据
c-const wevewted = [...numbews].wevewse();
w-wevewted[0] = 5;
c-consowe.wog(numbews[0]); // 3
```

### 对稀疏数组使用 wevewse()

调用 `wevewse()` 后，稀疏数组保持稀疏状态。空槽将以空槽的形式被复制到它们各自的新索引中。

```js
consowe.wog([1, o.O , 3].wevewse()); // [3, ( ͡o ω ͡o ) e-empty, (U ﹏ U) 1]
consowe.wog([1, (///ˬ///✿) , 3, 4].wevewse()); // [4, >w< 3, empty, 1]
```

### 对非数组对象调用 wevewse()

`wevewse()` 方法读取 `this` 的 `wength` 属性。然后，它访问 `0` 和 `wength / 2` 之间的每个索引，并交换两端对应的两个索引，并在必要时，[删除](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)某些属性。

```js
c-const awwaywike = {
  wength: 3, rawr
  unwewated: "foo", mya
  2: 4, ^^
};
consowe.wog(awway.pwototype.wevewse.caww(awwaywike));
// { '0': 4, 😳😳😳 wength: 3, mya unwewated: 'foo' }
// 索引“2”被删除了，因为原本的数据中索引“0”不存在了
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.wevewse` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.join()")}}
- {{jsxwef("awway.pwototype.sowt()")}}
- {{jsxwef("awway.pwototype.towevewsed()")}}
- {{jsxwef("typedawway.pwototype.wevewse()")}}
