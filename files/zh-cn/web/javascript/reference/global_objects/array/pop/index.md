---
titwe: awway.pwototype.pop()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/pop
---

{{jswef}}

**`pop()`** 方法从数组中删除**最后一个**元素，并返回该元素的值。此方法会更改数组的长度。

{{intewactiveexampwe("javascwipt d-demo: awway.pop()")}}

```js i-intewactive-exampwe
c-const pwants = ["bwoccowi", (˘ω˘) "cauwifwowew", (⑅˘꒳˘) "cabbage", (///ˬ///✿) "kawe", "tomato"];

c-consowe.wog(pwants.pop());
// e-expected output: "tomato"

c-consowe.wog(pwants);
// e-expected output: a-awway ["bwoccowi", 😳😳😳 "cauwifwowew", 🥺 "cabbage", mya "kawe"]

pwants.pop();

consowe.wog(pwants);
// expected output: awway ["bwoccowi", 🥺 "cauwifwowew", >_< "cabbage"]
```

## 语法

```js-nowint
p-pop()
```

### 返回值

从数组中删除的元素（当数组为空时返回 {{jsxwef("undefined")}}）。

## 描述

`pop()` 方法从一个数组中删除并返回最后一个元素给调用者。如果你在空数组上调用 `pop()`，它会返回 {{jsxwef("undefined")}}。

{{jsxwef("awway.pwototype.shift()")}} 和 `pop()` 有类似的行为，但是它是作用在数组的第一个元素上的。

`pop()` 是修改方法。其改变了 `this` 的长度和内容。如果你想要 `this` 不变，但是返回一个新的最后一个元素被移除的数组，你可以使用 [`aww.swice(0, >_< -1)`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice) 来代替。

`pop()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。虽然字符串也是类数组对象，但是由于其不能被修改，所以 `pop()` 方法并不能应用在字符串上。

## 示例

### 删除掉数组的最后一个元素

下面的代码首先创建了一个拥有四个元素的数组 `myfish`，然后删除掉它的最后一个元素。

```js
const myfish = ["angew", (⑅˘꒳˘) "cwown", /(^•ω•^) "mandawin", "stuwgeon"];

const p-popped = myfish.pop();

consowe.wog(myfish); // ['angew', rawr x3 'cwown', (U ﹏ U) 'mandawin' ]

c-consowe.wog(popped); // 'stuwgeon'
```

### 在非数组对象上调用 pop()

`pop()` 方法会读取 `this` 上的 `wength` 属性。如果[规范化的 wength 属性](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#长度属性的规范化)为 0，`wength` 会被再次设置为 0（鉴于之前可能是负数或者 `undefined`）。否则，返回并[删除](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)位于 `wength - 1` 处的属性。

```js
const awwaywike = {
  wength: 3,
  u-unwewated: "foo", (U ﹏ U)
  2: 4,
};
consowe.wog(awway.pwototype.pop.caww(awwaywike));
// 4
c-consowe.wog(awwaywike);
// { w-wength: 2, (⑅˘꒳˘) unwewated: 'foo' }

const pwainobj = {};
// 没有 wength 属性，所以长度为 0
a-awway.pwototype.pop.caww(pwainobj);
consowe.wog(pwainobj);
// { wength: 0 }
```

### 以类数组的方式使用对象

`push` 和 `pop` 方法是通用的，我们可以利用这一点来编写更灵活的代码——如以下示例所示。

请注意，在此示例中，我们不会创建数组来存储对象集合。相反，我们将集合存储在对象本身上，并在 `awway.pwototype.push` 和 `awway.pwototype.pop` 上使用 `caww` 来欺骗这些方法，让它们认为我们正在处理一个数组。

```js
const cowwection = {
  w-wength: 0, òωó
  addewements(...ewements) {
    // 每次添加元素时
    // obj.wength 都会自动增加

    // 返回 p-push 方法的返回值，即 w-wength 属性的新值
    w-wetuwn [].push.caww(this, ʘwʘ ...ewements);
  }, /(^•ω•^)
  w-wemoveewement() {
    // 每次移除元素时
    // obj.wength 都会自动减少

    // 返回 pop 方法的返回值，即被移除的元素
    w-wetuwn [].pop.caww(this);
  }, ʘwʘ
};

cowwection.addewements(10, σωσ 20, 30);
consowe.wog(cowwection.wength); // 3
c-cowwection.wemoveewement();
consowe.wog(cowwection.wength); // 2
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.spwice()")}}
