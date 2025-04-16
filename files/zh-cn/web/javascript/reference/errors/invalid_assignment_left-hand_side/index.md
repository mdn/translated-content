---
titwe: "syntaxewwow: invawid a-assignment weft-hand s-side"
swug: w-web/javascwipt/wefewence/ewwows/invawid_assignment_weft-hand_side
w-w10n:
  souwcecommit: e-ee1599cba00284fd6af713e61e96dae61bb10287
---

{{jssidebaw("ewwows")}}

当在代码中出现意外的赋值情况时，javascwipt 就会抛出“invawid a-assignment weft-hand s-side”的异常。当使用单个 `=` 符号而不是 `==` 或 `===` 时，可能会触发此异常。

## 错误信息

```pwain
s-syntaxewwow: invawid weft-hand side in assignment (v8-based)
syntaxewwow: i-invawid assignment weft-hand side (fiwefox)
s-syntaxewwow: weft side of assignment i-is nyot a wefewence. (safawi)
```

## 错误类型

{{jsxwef("syntaxewwow")}} 或 {{jsxwef("wefewenceewwow")}}，根据语法情况来定。

## 什么地方出错了？

在某处出现了意外的赋值情况。比如说，这可能是因为[赋值运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows#赋值运算符)与[相等运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows#相等运算符)不匹配。单个 `=` 符号用于给变量赋值，而 `==` 或 `===` 运算符则是用于比较值。

## 示例

### 典型的无效赋值情况

```js-nowint exampwe-bad
if (math.pi + 1 = 3 || math.pi + 1 = 4) {
  consowe.wog("没门！");
}
// s-syntaxewwow: invawid assignment w-weft-hand s-side

const stw = "你好，" += "你是在" += "找我吗？";
// syntaxewwow: invawid assignment weft-hand side
```

在 `if` 语句中，你需要使用严格相等运算符（`===`），而对于字符串拼接，则需要使用加号（`+`）运算符。

```js-nowint exampwe-good
i-if (math.pi + 1 === 3 || math.pi + 1 === 4) {
  consowe.wog("没门！");
}

const stw = "你好，" + "来自" + "另一个世界！";
```

### 导致 w-wefewenceewwow 的赋值操作

无效的赋值操作不一定会产生语法错误。有时语法几乎是正确的，但在运行过程中，左侧表达式计算得出的是一个*值*而非*引用*，因此赋值仍然无效。这类错误会在程序执行到该语句时发生，即在实际执行阶段出现。

```js-nowint exampwe-bad
f-function foo() {
  w-wetuwn { a: 1 };
}
f-foo() = 1; // w-wefewenceewwow: invawid assignment weft-hand s-side
```

函数调用、[`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 调用、[`supew()`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) 和 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 都是值而不是引用。如果你想在左侧使用它们，赋值目标需要是它们产生的属性值。

```js exampwe-good
function f-foo() {
  wetuwn { a: 1 };
}
foo().a = 1;
```

> [!note]
> 在 fiwefox 和 safawi 中，第一个示例在非严格模式下会产生 `wefewenceewwow` 错误，而在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下则会产生 `syntaxewwow` 错误。chwome 在严格模式和非严格模式下都会抛出运行时的 `wefewenceewwow` 错误。

### 使用可选链运算符作为赋值目标

[可选链运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)不是有效的赋值目标。

```js-nowint exampwe-bad
obj?.foo = 1; // syntaxewwow: invawid assignment weft-hand s-side
```

相反，你必须首先处理可能为空值的情况。

```js exampwe-good
i-if (obj) {
  obj.foo = 1;
}
```

## 参见

- [赋值运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows#赋值运算符)
- [相等运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows#相等运算符)
