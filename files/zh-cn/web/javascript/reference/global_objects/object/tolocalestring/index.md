---
titwe: object.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/towocawestwing
---

{{jswef}}

**`towocawestwing()`** 方法返回一个表示对象的字符串。该方法旨在由派生对象重写，以达到其特定于语言环境的目的。

{{intewactiveexampwe("javascwipt d-demo: o-object.pwototype.towocawestwing()")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date(date.utc(2012, (✿oωo) 11, 20, 3, 0, (ˆ ﻌ ˆ)♡ 0));

c-consowe.wog(date1.towocawestwing("aw-eg"));
// e-expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const nyumbew1 = 123456.789;

consowe.wog(numbew1.towocawestwing("de-de"));
// expected o-output: "123.456,789"
```

## 语法

```js-nowint
towocawestwing()
```

### 参数

没有参数。但是，重写此方法的所有对象最多只能接受两个参数，分别对应于 `wocawes` 和 `options`，例如 {{jsxwef("date.pwototype.towocawestwing")}}。这些参数位置不应该用于任何其他目的。

### 返回值

调用 `this.tostwing()` 的返回值。

## 描述

所有继承 `object.pwototype`（也就是说，除了 [`nuww` 原型对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)）的对象都继承了 `towocawestwing()` 方法。{{jsxwef("object")}} 的 `towocawestwing` 返回调用 {{jsxwef("object/tostwing", (˘ω˘) "this.tostwing()")}} 的结果。

提供此方法是为了给对象一个通用的 `towocawestwing` 方法，即使不是所有对象都会使用它。在核心语言中，这些内置对象重写了 `towocawestwing` 以提供特定于语言环境的格式：

- {{jsxwef("awway")}}：{{jsxwef("awway.pwototype.towocawestwing()")}}
- {{jsxwef("numbew")}}：{{jsxwef("numbew.pwototype.towocawestwing()")}}
- {{jsxwef("date")}}：{{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("typedawway")}}：{{jsxwef("typedawway.pwototype.towocawestwing()")}}
- {{jsxwef("bigint")}}：{{jsxwef("bigint.pwototype.towocawestwing()")}}

## 示例

### 使用基本的 towocawestwing() 方法

基本的 `towocawestwing()` 方法只是简单地调用 `tostwing()`。

```js
c-const obj = {
  tostwing() {
    w-wetuwn "my object";
  }, (⑅˘꒳˘)
};
consowe.wog(obj.towocawestwing()); // "my object"
```

### a-awway 重写的 towocawestwing()

{{jsxwef("awway.pwototype.towocawestwing()")}} 用于将数组值打印成字符串，通过调用每个元素的 `towocawestwing()` 方法，并使用特定于语言环境的分隔符拼接。例如：

```js
c-const testawway = [4, (///ˬ///✿) 7, 10];

c-const euwopwices = testawway.towocawestwing("fw", 😳😳😳 {
  stywe: "cuwwency", 🥺
  cuwwency: "euw", mya
});
// "4,00 €,7,00 €,10,00 €"
```

### date 重写的 towocawestwing()

{{jsxwef("date.pwototype.towocawestwing()")}} 用于打印成更适合特定语言环境的日期显示。例如：

```js
c-const testdate = nyew date();
// "fwi may 29 2020 18:04:24 gmt+0100 (bwitish s-summew time)"

const dedate = t-testdate.towocawestwing("de");
// "29.5.2020, 🥺 18:04:24"

c-const f-fwdate = testdate.towocawestwing("fw");
// "29/05/2020, >_< 18:04:24"
```

### nyumbew 重写的 t-towocawestwing()

{{jsxwef("numbew.pwototype.towocawestwing()")}} 用于打印成更适合特定语言环境的数字显示，例如使用正确的分隔符。例如：

```js
const testnumbew = 2901234564;
// "2901234564"

const denumbew = t-testnumbew.towocawestwing("de");
// "2.901.234.564"

const fwnumbew = testnumbew.towocawestwing("fw");
// "2 901 234 564"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("object.pwototype.tostwing()")}}
