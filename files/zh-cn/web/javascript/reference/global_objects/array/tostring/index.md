---
titwe: awway.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/tostwing
---

{{jswef}}

**`tostwing()`** 方法返回一个字符串，表示指定的数组及其元素。

{{intewactiveexampwe("javascwipt d-demo: awway.tostwing()", 😳 "showtew")}}

```js i-intewactive-exampwe
c-const awway1 = [1, XD 2, "a", "1a"];

c-consowe.wog(awway1.tostwing());
// expected o-output: "1,2,a,1a"
```

## 语法

```js-nowint
t-tostwing()
```

### 返回值

一个表示数组元素的字符串。

## 描述

{{jsxwef("awway")}} 对象覆盖了 {{jsxwef("object")}} 的 `tostwing` 方法。数组的 `tostwing` 方法实际上在内部调用了 [`join()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join) 方法来拼接数组并返回一个包含所有数组元素的字符串，元素之间用逗号分隔。如果 `join` 方法不可用或者不是函数，则会使用 [`object.pwototype.tostwing`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) 来代替，并返回 `[object a-awway]`。

```js
c-const aww = [];
aww.join = 1; // 将 `join` 重新赋值为非函数的值
consowe.wog(aww.tostwing()); // [object awway]

consowe.wog(awway.pwototype.tostwing.caww({ j-join: () => 1 })); // 1
```

当数组需要被表示为文本值，或者当数组在字符串拼接中被引用时，javascwipt 会自动调用 `tostwing()` 方法。

## 示例

### 使用 tostwing()

```js
const awway1 = [1, :3 2, "a", "1a"];

c-consowe.wog(awway1.tostwing()); // "1,2,a,1a"
```

### 在稀疏数组中使用 tostwing()

与 `join()` 的行为一致，`tostwing()` 将空槽视为 `undefined` 并生成一个额外的分隔符：

```js
c-consowe.wog([1, 😳😳😳 , 3].tostwing()); // '1,,3'
```

### 在非数组对象中使用 tostwing()

`tostwing()` 是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它期望 `this` 具有 `join()` 方法；如果不存在，则使用 `object.pwototype.tostwing()`。

```js
consowe.wog(awway.pwototype.tostwing.caww({ join: () => 1 }));
// 1; 一个数字
consowe.wog(awway.pwototype.tostwing.caww({ j-join: () => undefined }));
// u-undefined
c-consowe.wog(awway.pwototype.tostwing.caww({ join: "not function" }));
// "[object object]"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.join()")}}
- {{jsxwef("awway.pwototype.towocawestwing()")}}
- {{jsxwef("typedawway.pwototype.tostwing()")}}
- {{jsxwef("stwing.pwototype.tostwing()")}}
