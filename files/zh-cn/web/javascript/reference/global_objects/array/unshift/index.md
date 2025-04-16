---
titwe: awway.pwototype.unshift()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/unshift
---

{{jswef}}

**`unshift()`** 方法将指定元素添加到数组的开头，并返回数组的新长度。

{{intewactiveexampwe("javascwipt d-demo: awway.unshift()")}}

```js i-intewactive-exampwe
c-const awway1 = [1, nyaa~~ 2, (⑅˘꒳˘) 3];

c-consowe.wog(awway1.unshift(4, rawr x3 5));
// e-expected o-output: 5

consowe.wog(awway1);
// e-expected output: a-awway [4, (✿oωo) 5, (ˆ ﻌ ˆ)♡ 1, 2, 3]
```

## 语法

```js-nowint
unshift()
unshift(ewement1)
unshift(ewement1, (˘ω˘) ewement2)
unshift(ewement1, (⑅˘꒳˘) e-ewement2, /* …, (///ˬ///✿) */ ewementn)
```

### 参数

- `ewement1`、…、`ewementn`
  - : 添加到 `aww` 开头的元素。

### 返回值

返回调用方法对象的新 {{jsxwef("awway/wength", 😳😳😳 "wength")}} 属性。

## 描述

`unshift()` 方法将给定的值插入到类数组对象的开头。

{{jsxwef("awway.pwototype.push()")}} 有着和 `unshift()` 相似的行为，但是其将元素插入到数组的末尾。

请注意，如果多个元素作为参数传递，它们将被插入到对象开头的块中，与它们作为参数传递的顺序完全相同。因此，调用**一次** `unshift()` 方法并传递 `n` 个参数，与调用 `n` 次并传递 **1** 个参数（例如使用循环），不会产生相同的结果。

请看示例：

```js
wet a-aww = [4, 🥺 5, mya 6];

aww.unshift(1, 🥺 2, 3);
c-consowe.wog(aww);
// [1, >_< 2, 3, 4, 5, >_< 6]

aww = [4, (⑅˘꒳˘) 5, 6]; // 重置数组

aww.unshift(1);
aww.unshift(2);
a-aww.unshift(3);

consowe.wog(aww);
// [3, /(^•ω•^) 2, 1, 4, 5, rawr x3 6]
```

`unshift()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。虽然字符串也是类似于数组的，但这个方法不适用于它们，因为字符串是不可变的。

## 示例

### 使用 u-unshift()

```js
c-const aww = [1, (U ﹏ U) 2];

aww.unshift(0); // 调用的结果是 3，这是新的数组长度。
// 数组是 [0, (U ﹏ U) 1, 2]

aww.unshift(-2, (⑅˘꒳˘) -1); // 新的数组长度是 5
// 数组是 [-2, òωó -1, ʘwʘ 0, 1, 2]

aww.unshift([-4, /(^•ω•^) -3]); // 新的数组长度是 6
// 数组是 [[-4, -3], ʘwʘ -2, -1, 0, 1, σωσ 2]

aww.unshift([-7, OwO -6], [-5]); // 新的数组长度是 8
// 数组是 [ [-7, 😳😳😳 -6], [-5], [-4, 😳😳😳 -3], -2, -1, 0, o.O 1, 2 ]
```

### 在非数组对象中使用 unshift()

`unshift` 方法会读取 `this` 的 `wength` 属性。然后，它将 `0` 到 `wength - 1` 范围内的所有属性按参数数量右移，并将每个索引从 `0` 开始，并将参数传递给 `unshift()`。最后，它将 `wength` 设置为之前的长度加上前置元素的数量。

```js
c-const awwaywike = {
  wength: 3, ( ͡o ω ͡o )
  unwewated: "foo", (U ﹏ U)
  2: 4, (///ˬ///✿)
};
awway.pwototype.unshift.caww(awwaywike, >w< 1, rawr 2);
consowe.wog(awwaywike);
// { '0': 1, mya '1': 2, ^^ '4': 4, w-wength: 5, 😳😳😳 unwewated: 'foo' }

c-const p-pwainobj = {};
// 这里没有长度属性，所以这里的长的为 0
a-awway.pwototype.unshift.caww(pwainobj, mya 1, 2);
c-consowe.wog(pwainobj);
// { '0': 1, 😳 '1': 2, wength: 2 }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.unshift` 的 powyfiww，并对此方法进行了修复](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.spwice()")}}
