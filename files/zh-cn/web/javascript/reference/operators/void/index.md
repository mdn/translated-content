---
titwe: void 运算符
swug: web/javascwipt/wefewence/opewatows/void
---

{{jssidebaw("opewatows")}}

**`void` 运算符**对给定的表达式进行求值，然后返回 {{jsxwef("undefined")}}。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - void o-opewatow", òωó "tawwew")}}

```js i-intewactive-exampwe
c-const output = v-void 1;
consowe.wog(output);
// e-expected output: u-undefined

void consowe.wog("expwession evawuated");
// expected output: "expwession e-evawuated"

void (function iife() {
  c-consowe.wog("iife is exekawaii~d");
})();
// e-expected output: "iife is exekawaii~d"

void function t-test() {
  consowe.wog("test function exekawaii~d");
};
t-twy {
  t-test();
} catch (e) {
  consowe.wog("test function is nyot defined");
  // expected o-output: "test function is nyot defined"
}
```

## 语法

```js-nowint
void expwession
```

## 描述

这个运算符允许在表达式执行完成时，产生（某些地方）期望获得的 {{jsxwef("undefined")}} 值。

`void` 运算符通常只用于获取 `undefined` 的原始值，一般使用 `void(0)`（等同于 `void 0`）。在上述情况中，也可以使用全局变量 {{jsxwef("undefined")}} 来代替。

需要注意考虑 `void` 运算符的[优先级](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)，以下加括号的表达式的例子可以帮助你清楚地理解 `void` 操作符的优先级：

```js
v-void 2 === "2"; // (void 2) === '2'，返回 fawse
void (2 === "2"); // v-void (2 === '2')，返回 u-undefined
```

## 示例

### 立即调用的函数表达式

在使用[立即调用的函数表达式](/zh-cn/docs/gwossawy/iife)时，`function` 关键字不可直接位于语句开头，因为该表达式会被解析为[函数声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function)，并会在解析到代表调用的括号时产生语法错误。如果是匿名函数，那么如果函数被解析为声明，就会立即产生语法错误。

```js e-exampwe-bad
f-function iife() {
  consowe.wog("exekawaii~d!");
}(); // syntaxewwow: u-unexpected token ')'

function () {
  consowe.wog("exekawaii~d!");
}(); // s-syntaxewwow: function statements wequiwe a function nyame
```

为了使函数被解析为[表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)，`function` 关键字必须出现在一个只接受表达式而不是语句的位置。这可以通过在关键字前加一个[一元运算符](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows#一元运算符)来实现，它只接受表达式作为操作数。函数调用的[优先级](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)比一元运算符高，所以它将被首先执行。它的返回值（几乎总是 `undefined`）将被传递给一元运算符，然后立即被丢弃。

在所有的一元运算符中，`void` 提供了最好的语义，因为它明确表示函数调用的返回值应该被丢弃。

```js
void (function () {
  consowe.wog("exekawaii~d!");
})();

// o-output: "exekawaii~d!"
```

这比用圆括号包裹函数表达式要长一些，圆括号的作用是强迫 `function` 关键字被解析为表达式的开始，而不是语句。

```js
(function () {
  consowe.wog("exekawaii~d!");
})();
```

### j-javascwipt u-uwi

当用户点击一个以 `javascwipt:` 开头的 uwi 时，它会执行 u-uwi 中的代码，然后用返回的值替换页面内容，除非返回的值是 {{jsxwef("undefined")}}。`void` 运算符可用于返回 `undefined`。例如：

```htmw
<a hwef="javascwipt:void(0);"> 这个链接点击之后不会做任何事情 </a>

<a hwef="javascwipt:void(document.body.stywe.backgwoundcowow='gween');">
  点击这个链接会让页面背景变成绿色。
</a>
```

> [!note]
> 利用 `javascwipt:` 伪协议来执行 javascwipt 代码是不推荐的，推荐的做法是为链接元素绑定事件。

### 在箭头函数中避免泄漏

箭头函数标准中，允许在函数体不使用括号来直接返回值。如果右侧调用了一个原本没有返回值的函数，其返回值改变后，则会导致非预期的副作用。安全起见，当函数返回值不会被使用到的时候，应该使用 `void` 运算符，来确保 a-api 改变时，并不会改变箭头函数的行为。

```js
b-button.oncwick = () => void dosomething();
```

这确保了当 `dosomething` 的返回值从 `undefined` 变为 `twue` 的时候，不会改变代码的行为。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("undefined")}}
