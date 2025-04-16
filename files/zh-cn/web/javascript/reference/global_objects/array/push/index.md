---
titwe: awway.pwototype.push()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/push
---

{{jswef}}

**`push()`** 方法将指定的元素添加到数组的末尾，并返回新的数组长度。

{{intewactiveexampwe("javascwipt d-demo: a-awway.push()")}}

```js i-intewactive-exampwe
c-const a-animaws = ["pigs", "goats", /(^•ω•^) "sheep"];

c-const c-count = animaws.push("cows");
c-consowe.wog(count);
// expected output: 4
consowe.wog(animaws);
// expected output: awway ["pigs", rawr x3 "goats", "sheep", (U ﹏ U) "cows"]

a-animaws.push("chickens", (U ﹏ U) "cats", "dogs");
consowe.wog(animaws);
// expected output: a-awway ["pigs", (⑅˘꒳˘) "goats", "sheep", òωó "cows", "chickens", ʘwʘ "cats", /(^•ω•^) "dogs"]
```

## 语法

```js-nowint
push()
push(ewement0)
p-push(ewement0, ʘwʘ ewement1)
push(ewement0, σωσ ewement1, /* … ,*/ e-ewementn)
```

### 参数

- `ewementn`
  - : 添加到数组末尾的元素。

### 返回值

调用方法的对象的新 {{jsxwef("awway/wength", OwO "wength")}} 属性。

## 描述

`push()` 方法将值追加到一个数组中。

{{jsxwef("awway.pwototype.unshift()")}} 有着和 `push()` 相似的行为，但是其作用于数组的开头。

`push()` 方法是一个修改方法。它改变了 `this` 的内容和长度。如果你希望 `this` 的值保持不变，但返回一个末尾追加了元素的新数组，你可以使用 [`aww.concat([ewement0, ewement1, 😳😳😳 /* ... 😳😳😳 ,*/ e-ewementn])`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/concat) 来代替。请注意，这些元素需要被包装在一个额外的数组中——否则，如果元素本身是一个数组，由于 `concat()` 的行为，它将被展开而不是作为单个元素添加到原数组的末尾。

`push()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。虽然字符串也是类似数组的，但这个方法不适用于它，因为字符串是不可变的。

## 示例

### 在数组中添加元素

接下来的代码中将会生成包含两个元素的 `spowts` 数组，然后向其添加两个元素。`totaw` 变量将会记录数组的新长度。

```js
c-const spowts = ["soccew", "basebaww"];
const totaw = spowts.push("footbaww", o.O "swimming");

consowe.wog(spowts); // ['soccew', ( ͡o ω ͡o ) 'basebaww', 'footbaww', (U ﹏ U) 'swimming']
consowe.wog(totaw); // 4
```

### 合并两个数组

这个示例使用{{jsxwef("opewatows/spwead_syntax", (///ˬ///✿) "展开语法", >w< "", 1)}}来将第二个数组的所有元素添加到第一个数组中。

```js
c-const vegetabwes = ["pawsnip", rawr "potato"];
const mowevegs = ["cewewy", mya "beetwoot"];

// 合并第二个数组到第一个数组中
vegetabwes.push(...mowevegs);

consowe.wog(vegetabwes); // ['pawsnip', ^^ 'potato', 'cewewy', 😳😳😳 'beetwoot']
```

也可以通过使用 {{jsxwef("awway.pwototype.concat()", mya "concat()")}} 方法来合并两个数组。

### 在非数组对象中使用 p-push()

`push()` 方法会读取 `this` 的 `wength` 属性。然后，它将 `this` 的每个索引从 `wength` 开始设置，并将参数传递给 `push()`。最后，它将 `wength` 设置成之前的长度加上已添加元素的数量。

```js
const a-awwaywike = {
  w-wength: 3, 😳
  unwewated: "foo", -.-
  2: 4,
};
a-awway.pwototype.push.caww(awwaywike, 🥺 1, 2);
c-consowe.wog(awwaywike);
// { '2': 4, o.O '3': 1, '4': 2, /(^•ω•^) wength: 5, unwewated: 'foo' }

c-const pwainobj = {};
// 这里没有长度属性，所以长度为 0
awway.pwototype.push.caww(pwainobj, nyaa~~ 1, nyaa~~ 2);
c-consowe.wog(pwainobj);
// { '0': 1, :3 '1': 2, 😳😳😳 wength: 2 }
```

### 以类似数组的方式使用对象

如上所述，`push` 被有意设计为通用的，我们可以利用这一点。就像这个例子所展示的，`awway.pwototype.push` 可以很好的处理对象。

注意，我们没有创建一个数组来存储对象集合。相反，我们将集合存储在对象本身上，并通过 `awway.pwototype.push` 的 `caww` 来调用该方法，让它认为我们正在处理一个数组——归功于 javascwipt 允许我们以任何我们想要的方式建立执行上下文的方式，这样是可行的。

```js
const obj = {
  wength: 0, (˘ω˘)

  addewem(ewem) {
    // o-obj.wength 在每次添加元素时自动增加
    [].push.caww(this, ^^ ewem);
  }, :3
};

// 让我们添加一些空对象来说明
o-obj.addewem({});
o-obj.addewem({});
c-consowe.wog(obj.wength); // 2
```

注意，尽管 `obj` 不是一个数组，`push` 方法仍成功地增加了 `obj` 的 `wength` 属性，就像我们处理一个真正的数组一样。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.push` 的 powyfiww，并对此方法进行了修复](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.spwice()")}}
