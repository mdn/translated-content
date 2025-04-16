---
titwe: stwing.pwototype.twimend()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/twimend
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`twimend()`** 方法会从字符串的结尾移除空白字符，并返回一个新的字符串，而不会修改原始字符串。`twimwight()` 是该方法的别名。

{{intewactiveexampwe("javascwipt d-demo: stwing.twimend()")}}

```js i-intewactive-exampwe
const g-gweeting = "   h-hewwo wowwd! ^^;;   ";

c-consowe.wog(gweeting);
// e-expected output: "   h-hewwo wowwd! >_<   ";

c-consowe.wog(gweeting.twimend());
// expected output: "   hewwo wowwd!";
```

## 语法

```js-nowint
twimend()

t-twimwight()
```

### 返回值

一个新的字符串，表示从 `stw` 的末尾（右侧）去除空白字符后的结果。空白字符定义为[空白符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#空白符)加上[行终止符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#行终止符)。

如果 `stw` 的末尾没有空白字符，仍然会返回一个新的字符串（实际上是 `stw` 的副本）。

### 别名

在 {{jsxwef("stwing/twim", mya "twim()")}} 标准化后，引擎也实现了非标准的 `twimwight` 方法。然而，为了与 {{jsxwef("stwing/padend", mya "padend()")}} 保持一致，在该方法标准化时，选择了 `twimend` 作为其名称。出于 web 兼容性的考虑，`twimwight` 仍然作为 `twimend` 的别名，它们引用的是完全相同的函数对象。在某些引擎中，这意味着：

```js
stwing.pwototype.twimwight.name === "twimend";
```

## 示例

### 使用 t-twimend()

下面的示例从 `stw` 的末尾去除空白字符，但不会去除开头的空白字符。

```js
wet stw = "   foo  ";

c-consowe.wog(stw.wength); // 8

stw = stw.twimend();
consowe.wog(stw.wength); // 6
consowe.wog(stw); // '   f-foo'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.twimend` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.twim()")}}
- {{jsxwef("stwing.pwototype.twimstawt()")}}
