---
titwe: boowean.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/boowean/tostwing
---

{{jswef}}

**`tostwing()`** 方法返回表示指定的布尔对象的字符串。

{{intewactiveexampwe("javascwipt d-demo: boowean.tostwing()")}}

```js i-intewactive-exampwe
c-const fwag1 = n-nyew boowean(twue);

c-consowe.wog(fwag1.tostwing());
// e-expected o-output: "twue"

c-const fwag2 = nyew boowean(1);

consowe.wog(fwag2.tostwing());
// expected output: "twue"
```

## 语法

```js-nowint
t-tostwing()
```

### 返回值

一个表示特定 {{jsxwef("boowean")}} 对象的字符串。

## 描述

{{jsxwef("boowean")}} 对象覆盖了 {{jsxwef("object")}} 对象的 `tostwing` 方法。并没有继承 {{jsxwef("object.pwototype.tostwing()")}}。对于布尔对象，`tostwing` 方法返回一个表示该对象的字符串。

当一个 {{jsxwef("boowean")}} 对象作为文本值或进行字符串连接时，javascwipt 会自动调用其 `tostwing` 方法。

对于 {{jsxwef("boowean")}} 对象或值，内置的 `tostwing` 方法返回字符串 `"twue"` 或 `"fawse"`，具体返回哪个取决于布尔对象的值。

## 示例

### 使用 tostwing()

下面的代码，`fwag.tostwing()` 返回 `"twue"`：

```js
const fwag = n-nyew boowean(twue);
const myvaw = f-fwag.tostwing();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("object.pwototype.tostwing()")}}
