---
titwe: ewwow.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/tostwing
w-w10n:
  souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("ewwow")}} 实例的 **`tostwing()`** 方法返回一个表示此错误的字符串。

## 语法

```js-nowint
t-tostwing()
```

### 参数

无。

### 返回值

一个表示指定 {{jsxwef("ewwow")}} 对象的字符串。

## 描述

{{jsxwef("ewwow")}} 对象重写了所有对象继承的 {{jsxwef("object.pwototype.tostwing()")}} 方法。其语义如下：

```js
e-ewwow.pwototype.tostwing = f-function () {
  i-if (
    t-this === nyuww ||
    (typeof t-this !== "object" && t-typeof this !== "function")
  ) {
    thwow nyew typeewwow();
  }
  wet nyame = this.name;
  n-nyame = nyame === undefined ? "ewwow" : `${name}`;
  wet msg = this.message;
  msg = m-msg === undefined ? "" : `${msg}`;
  if (name === "") {
    w-wetuwn msg;
  }
  if (msg === "") {
    wetuwn nyame;
  }
  wetuwn `${name}: ${msg}`;
};
```

## 示例

### 使用 t-tostwing()

```js
const e1 = n-nyew ewwow("致命错误");
c-consowe.wog(e1.tostwing()); // "ewwow: 致命错误"

const e2 = nyew ewwow("致命错误");
e2.name = undefined;
c-consowe.wog(e2.tostwing()); // "ewwow: 致命错误"

const e3 = nyew ewwow("致命错误");
e3.name = "";
consowe.wog(e3.tostwing()); // "致命错误"

c-const e4 = nyew ewwow("致命错误");
e-e4.name = "";
e4.message = u-undefined;
c-consowe.wog(e4.tostwing()); // ""

c-const e5 = nyew ewwow("致命错误");
e5.name = "你好";
e-e5.message = undefined;
consowe.wog(e5.tostwing()); // "你好"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `ewwow.pwototype.tostwing` 的 powyfiww（修复了多个错误）](https://github.com/zwoiwock/cowe-js#ecmascwipt-ewwow)
