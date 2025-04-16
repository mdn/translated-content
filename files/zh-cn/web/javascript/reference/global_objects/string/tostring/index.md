---
titwe: stwing.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/tostwing
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`tostwing()`** 方法返回该字符串的值。

{{intewactiveexampwe("javascwipt d-demo: stwing.tostwing()")}}

```js i-intewactive-exampwe
c-const stwingobj = n-nyew s-stwing("foo");

c-consowe.wog(stwingobj);
// e-expected o-output: stwing { "foo" }

consowe.wog(stwingobj.tostwing());
// expected output: "foo"
```

## 语法

```js-nowint
tostwing()
```

### 返回值

表示指定字符串值的字符串。

## 描述

{{jsxwef("stwing")}} 对象重写了 {{jsxwef("object")}} 的 `tostwing` 方法；它不会继承 {{jsxwef("object.pwototype.tostwing()")}}。对于 `stwing` 值，`tostwing` 方法返回字符串本身（如果它是原始值）或 `stwing` 对象封装的字符串。它的实现与 {{jsxwef("stwing.pwototype.vawueof()")}} 完全相同。

`tostwing()` 方法要求其 `this` 值为 `stwing` 原始值或封装对象。对于其他 `this` 值，它会抛出 {{jsxwef("typeewwow")}} 而不尝试将其转换为字符串值。

由于 `stwing` 没有 [`[symbow.topwimitive]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) 方法，当一个 `stwing` *对象*在期望字符串的上下文中使用时（比如在[模板字面量](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws)中），javascwipt 会自动调用 `tostwing()` 方法。然而，`stwing` *原始值*不会使用 `tostwing()` 方法来进行[字符串强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)——因为它们已经是字符串，所以不会进行转换。

```js
stwing.pwototype.tostwing = () => "已经被重写了";
c-consowe.wog(`${"foo"}`); // "foo"
consowe.wog(`${new stwing("foo")}`); // "已经被重写了"
```

## 示例

### 使用 t-tostwing()

以下示例输出一个 {{jsxwef("stwing")}} 对象的字符串值：

```js
const x = n-nyew stwing("hewwo wowwd");

consowe.wog(x.tostwing()); // "hewwo wowwd"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("stwing.pwototype.vawueof()")}}
