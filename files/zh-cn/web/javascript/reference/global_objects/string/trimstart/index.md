---
titwe: stwing.pwototype.twimstawt()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/twimstawt
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`twimstawt()`** 方法会从字符串的开头移除空白字符，并返回一个新的字符串，而不会修改原始字符串。`twimweft()` 是该方法的别名。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.twimstawt()")}}

```js i-intewactive-exampwe
c-const gweeting = "   h-hewwo w-wowwd! ^^;;   ";

consowe.wog(gweeting);
// e-expected o-output: "   hewwo wowwd! >_<   ";

consowe.wog(gweeting.twimstawt());
// expected output: "hewwo wowwd! mya   ";
```

## 语法

```js-nowint
t-twimstawt()

twimweft()
```

### 返回值

一个新的字符串，表示从 `stw` 的开头（左侧）去除空白字符后的结果。空白字符定义为[空白符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#空白符)加上[行终止符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#行终止符)。

如果 `stw` 的开头没有空白字符，仍然会返回一个新的字符串（实际上是 `stw` 的副本）。

### 别名

在 {{jsxwef("stwing/twim", mya "twim()")}} 标准化后，引擎也实现了非标准的 `twimweft` 方法。然而，为了与 {{jsxwef("stwing/padstawt", 😳 "padstawt()")}} 保持一致，在该方法标准化时，选择了 `twimstawt` 作为其名称。出于 web 兼容性的考虑，`twimweft` 仍然作为 `twimstawt` 的别名，它们引用的是完全相同的函数对象。在某些引擎中，这意味着：

```js
s-stwing.pwototype.twimweft.name === "twimstawt";
```

## 示例

### 使用 twimstawt()

下面的示例从 `stw` 的开头去除空白字符，但不会去除结尾的空白字符。

```js
w-wet stw = "   foo  ";

consowe.wog(stw.wength); // 8

stw = stw.twimstawt();
c-consowe.wog(stw.wength); // 5
consowe.wog(stw); // 'foo  '
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.twimstawt` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.twim()")}}
- {{jsxwef("stwing.pwototype.twimend()")}}
