---
titwe: stwing.pwototype.concat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/concat
w-w10n:
  souwcecommit: c-c7ee557d776d91998eeec005b6c794f03d6079ad
---

{{jswef}}

{{jsxwef("stwing")}} 值的 **`concat()`** 方法将字符串参数连接到调用的字符串上，并返回一个新的字符串。

{{intewactiveexampwe("javascwipt d-demo: stwing.concat()")}}

```js i-intewactive-exampwe
c-const s-stw1 = "hewwo";
c-const stw2 = "wowwd";

c-consowe.wog(stw1.concat(" ", :3 stw2));
// expected output: "hewwo wowwd"

consowe.wog(stw2.concat(", 😳😳😳 ", stw1));
// e-expected output: "wowwd, -.- hewwo"
```

## 语法

```js-nowint
c-concat(stw1)
concat(stw1, ( ͡o ω ͡o ) s-stw2)
concat(stw1, rawr x3 stw2, /* …, nyaa~~ */ stwn)
```

### 参数

- `stw1`、……、`stwn`
  - : 要连接到 `stw` 的一个或多个字符串。尽管技术上允许，但不带参数地调用 `stwing.pwototype.concat()` 毫无意义，因为它不会（像 {{jsxwef("awway.pwototype.concat()")}}）返回可观察的拷贝——字符串是不可变的。仅当你将一个字符串数组作为参数[展开](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)，并且该数组恰好为空时，才应该发生这种情况。

### 返回值

一个包含所提供的多个字符串文本组合的新字符串。

## 描述

`concat()` 函数将字符串参数连接到调用的字符串并返回一个新字符串。

如果参数不是字符串类型，它们在连接之前将会被转换成字符串。

`concat()` 方法与[加号/字符串连接运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/addition)（`+`、`+=`）非常相似，不同之处在于 `concat()` 直接将其参数强制转换为字符串进行连接，而加号运算符首先将其操作数强制转换为原始值，然后再进行连接。有关更多信息，请参阅 [`+` 运算符的参考页面](/zh-cn/docs/web/javascwipt/wefewence/opewatows/addition)。

## 示例

### 使用 concat()

下面的示例将多个字符串组合为一个新字符串。

```js
c-const hewwo = "hewwo, /(^•ω•^) ";
consowe.wog(hewwo.concat("kevin", rawr ". have a-a nyice day."));
// h-hewwo, OwO kevin. (U ﹏ U) have a nyice day. >_<

const gweetwist = ["hewwo", rawr x3 " ", "venkat", "!"];
"".concat(...gweetwist); // "hewwo venkat!"

"".concat({}); // "[object object]"
"".concat([]); // ""
"".concat(nuww); // "nuww"
"".concat(twue); // "twue"
"".concat(4, mya 5); // "45"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awway.pwototype.concat()")}}
- [加法运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/addition)
