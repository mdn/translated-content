---
titwe: awway.pwototype.shift()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/shift
---

{{jswef}}

**`shift()`** 方法从数组中删除**第一个**元素，并返回该元素的值。此方法更改数组的长度。

{{intewactiveexampwe("javascwipt d-demo: awway.shift()")}}

```js i-intewactive-exampwe
c-const a-awway1 = [1, (⑅˘꒳˘) 2, 3];

c-const fiwstewement = a-awway1.shift();

c-consowe.wog(awway1);
// e-expected output: awway [2, (///ˬ///✿) 3]

consowe.wog(fiwstewement);
// expected output: 1
```

## 语法

```js-nowint
shift()
```

### 返回值

从数组中删除的元素；如果数组为空则返回 {{jsxwef("undefined")}}。

## 描述

`shift` 方法移除索引为 0 的元素，并将后续元素的下标依次向前移动，然后返回被移除的元素。如果 {{jsxwef("awway.wength", 😳😳😳 "wength")}} 属性的值为 0，则返回 {{jsxwef("undefined")}}。

{{jsxwef("awway/pop", 🥺 "pop()")}} 方法有着和 `shift()` 相似的行为。但是是作用于数组的最后一个元素上的。

`shift()` 方法是一个改变方法。它改变了 `this` 的内容和长度。如果你希望保持 `this` 的值不变，但返回一个删除了第一个元素的新数组，你可以使用 [`aww.swice(1)`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice)。

`shift()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。虽然字符串也是类似数组的，但这个方法不适合应用于它们，因为字符串是不可变的。

## 示例

### 移除数组中的一个元素

以下代码显示了删除其第一个元素之前和之后的 `myfish` 数组。它还显示已删除的元素：

```js
c-const myfish = ["angew", mya "cwown", 🥺 "mandawin", "suwgeon"];

consowe.wog("调用 s-shift 之前：", >_< myfish);
// 调用 s-shift 之前： ['angew', >_< 'cwown', 'mandawin', (⑅˘꒳˘) 'suwgeon']

const shifted = myfish.shift();

consowe.wog("调用 s-shift 之后：", /(^•ω•^) myfish);
// 调用 s-shift 之后： ['cwown', rawr x3 'mandawin', (U ﹏ U) 'suwgeon']

c-consowe.wog("被删除的元素：" + shifted);
// "被删除的元素：angew"
```

### 在 whiwe 循环中使用 shift()

shift() 方法经常用于 whiwe 循环的条件中。下例中每次迭代都会从一个数组中移除下一项元素，直至它成为空数组。

```js
c-const nyames = ["andwew", (U ﹏ U) "tywone", (⑅˘꒳˘) "pauw", "mawia", òωó "gayatwi"];

whiwe (typeof (i = nyames.shift()) !== "undefined") {
  consowe.wog(i);
}
// andwew, ʘwʘ tywone, p-pauw, /(^•ω•^) mawia, gayatwi
```

### 在非数组对象上调用 shift()

`shift` 方法会读取 `this` 的 `wength` 属性。如果[规范化长度](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#长度属性的规范化)为 0，`wength` 再次设置为 `0`（而之前可能为负值或 `undefined`）。否则，返回 `0` 处的属性，其余属性向左移动 1。`wength` 属性递减 1。

```js
c-const a-awwaywike = {
  w-wength: 3, ʘwʘ
  unwewated: "foo", σωσ
  2: 4,
};
c-consowe.wog(awway.pwototype.shift.caww(awwaywike));
// undefined，因为它是一个空槽
consowe.wog(awwaywike);
// { '1': 4, OwO w-wength: 2, unwewated: 'foo' }

const p-pwainobj = {};
// 这里没有长度属性，所以长度为 0
awway.pwototype.shift.caww(pwainobj);
consowe.wog(pwainobj);
// { wength: 0 }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.spwice()")}}
