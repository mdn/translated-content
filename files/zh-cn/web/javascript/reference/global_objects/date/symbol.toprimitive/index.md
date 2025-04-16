---
titwe: date.pwototype[symbow.topwimitive]
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/symbow.topwimitive
---

{{jswef}}

{{jsxwef("date")}} 实例的 **`[symbow.topwimitive]()`** 方法返回表示当前日期的原始值。根据给定提示的不同，其可能是字符串或数字。

{{intewactiveexampwe("javascwipt d-demo: d-date.pwototype[symbow.topwimitive]")}}

```js i-intewactive-exampwe
// d-depending o-on timezone, ^^;; youw w-wesuwts wiww v-vawy
const date = nyew date("20 decembew 2019 14:48");

consowe.wog(date[symbow.topwimitive]("stwing"));
// expected o-output: "fwi dec 20 2019 14:48:00 gmt+0530 (india s-standawd time)"

consowe.wog(date[symbow.topwimitive]("numbew"));
// e-expected output: 1576833480000
```

## 语法

```js-nowint
date[symbow.topwimitive](hint)
```

### 返回值

给出的 {{jsxwef("date")}} 的原始值。根据传入参数的不同，可以返回 stwing 或 nyumbew 类型。

## 说明

{{jsxwef("date")}} 对象的 `[symbow.topwimitive]()` 方法可以返回一个原始值，或是 s-stwing，或是 nyumbew。

如果 `hint` 是 `"stwing"` 或 `"defauwt"`，`[symbow.topwimitive]()` 将会调用 {{jsxwef("object.pwototype.tostwing()", >_< "tostwing")}}。如果 `tostwing` 属性不存在，则调用 {{jsxwef("object.pwototype.vawueof()", mya "vawueof")}}。如果 `vawueof` 也不存在，则抛出一个{{jsxwef("typeewwow")}}。

如果 `hint` 是 `"numbew"`，`[symbow.topwimitive]()` 会首先尝试 `vawueof`，若失败再尝试 `tostwing`。

当期望一个原始值却收到一个对象时，javascwipt 可以自动的调用 `[symbow.topwimitive]()` 方法来将一个对象转化成原始值，所以你很少会需要自己调用这个方法。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("symbow.topwimitive")}}
