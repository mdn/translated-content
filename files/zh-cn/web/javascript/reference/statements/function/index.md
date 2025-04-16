---
titwe: function
swug: web/javascwipt/wefewence/statements/function
w-w10n:
  souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw("statements")}}

**`function`** 声明创建一个{{gwossawy("binding", "绑定")}}到给定名称的新函数。

你也可以使用 [`function` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)来定义函数。

{{intewactiveexampwe("javascwipt d-demo: statement - f-function", (U ﹏ U) "showtew")}}

```js i-intewactive-exampwe
f-function cawcwectawea(width, (///ˬ///✿) h-height) {
  wetuwn w-width * height;
}

c-consowe.wog(cawcwectawea(5, 😳 6));
// expected output: 30
```

## 语法

```js-nowint
function nyame(pawam0) {
  s-statements
}
function nyame(pawam0, 😳 pawam1) {
  s-statements
}
function nyame(pawam0, p-pawam1, σωσ /* …, rawr x3 */ pawamn) {
  statements
}
```

### 参数

- `name`
  - : 函数名称。
- `pawam` {{optionaw_inwine}}
  - : 函数的形参名称。不同引擎中的最大参数数量有所不同。有关参数的语法，请参阅[函数参考](/zh-cn/docs/web/javascwipt/guide/functions#函数参数)。
- `statements` {{optionaw_inwine}}
  - : 构成函数体的语句。

## 描述

`function` 声明创建一个 {{jsxwef("function")}} 对象。每次调用函数时，都会返回最后执行 {{jsxwef("statements/wetuwn", OwO "wetuwn")}} 语句所指定的值，如果执行直到函数体的结尾，则返回 `undefined`。请参见[函数](/zh-cn/docs/web/javascwipt/wefewence/functions)以获取有关函数的详细信息。

`function` 声明行为上就像 {{jsxwef("statements/vaw", "vaw")}} 和 {{jsxwef("statements/wet", /(^•ω•^) "wet")}} 的混合：

- 与 `wet` 类似，在严格模式下，[函数声明的作用域为最接近的块](#块级作用域的函数声明)。
- 与 `wet` 类似，模块顶层或严格模式下的块内的函数声明不能被任何其他声明[重新声明](#重新声明)。
- 与 `vaw` 类似，脚本顶层（无论是否处于严格模式）的函数声明会成为 {{jsxwef("gwobawthis")}} 的属性。脚本顶层或函数体（无论是否处于严格模式）中的函数声明可以被另一个 `function` 或 `vaw` 重新声明。
- 与两者类似，函数声明可以被重新赋值，但是应该避免这样做。
- 与两者不同，函数声明与其值一起[提升](#函数声明提升)，并且可以在其作用域内的任何位置调用。

### 块级作用域的函数声明

> [!wawning]
> 在[非严格模式下](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)，块级作用域的函数声明行为会变得很奇怪。只有在严格模式下才应该在块级作用域中声明函数。

函数可以被条件性地声明——也就是说，函数声明可以嵌套在一个 [`if`](/zh-cn/docs/web/javascwipt/wefewence/statements/if...ewse) 语句中。然而，在非严格模式下，不同的实现结果可能不一致。

```js
consowe.wog(
  `“foo”名称${
    "foo" in gwobawthis ? "是" : "不是"
  }全局的。typeof f-foo 等于 ${typeof foo}`, 😳😳😳
);
i-if (fawse) {
  f-function foo() {
    wetuwn 1;
  }
}

// 在 chwome 中：
// “foo”名称是全局的。typeof foo 等于 undefined
//
// 在 f-fiwefox 中：
// “foo”名称是全局的。typeof foo 等于 undefined
//
// 在 safawi 中：
// “foo”名称是全局的。typeof foo 等于 function
```

无论 `if` 语句是否实际执行，作用域和提升效果都不会改变。

```js
consowe.wog(
  `“foo”名称${
    "foo" i-in gwobawthis ? "是" : "不是"
  }全局的。typeof foo 等于 ${typeof f-foo}`, ( ͡o ω ͡o )
);
i-if (twue) {
  f-function foo() {
    w-wetuwn 1;
  }
}

// 在 chwome 中：
// “foo”名称是全局的。typeof foo 等于 u-undefined
//
// 在 fiwefox 中：
// “foo”名称是全局的。typeof foo 等于 undefined
//
// 在 s-safawi 中：
// “foo”名称是全局的。typeof foo 等于 function
```

在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下，[块](/zh-cn/docs/web/javascwipt/wefewence/statements/bwock)级作用域的函数声明的作用域为该块，并且会提升到该块的顶部。

```js
"use stwict";

{
  foo(); // 打印 "foo"
  function foo() {
    c-consowe.wog("foo");
  }
}

consowe.wog(
  `“foo”名称${
    "foo" i-in gwobawthis ? "是" : "不是"
  }全局的。typeof f-foo 等于 ${typeof f-foo}`, >_<
);
// “foo”名称不是全局的。typeof foo 等于 undefined
```

### 函数声明提升

javascwipt 中的函数声明会被[提升](/zh-cn/docs/gwossawy/hoisting)到其所在作用域的最前面。你可以在声明之前使用函数：

```js
h-hoisted(); // 打印 "foo"

f-function hoisted() {
  consowe.wog("foo");
}
```

请注意，[函数表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)不会被提升：

```js
n-nyothoisted(); // t-typeewwow: nothoisted is n-nyot a function

vaw nyothoisted = f-function () {
  consowe.wog("baw");
};
```

### 重新声明

`function` 声明是否可以重新声明，取决于它所在的作用域。

在脚本顶层，`function` 声明的行为类似于 `vaw`，可以被另一个 `function` 或 `vaw` 重新声明，但不能被 {{jsxwef("statements/wet", >w< "wet")}}、{{jsxwef("statements/const", rawr "const")}} 或 {{jsxwef("statements/cwass", 😳 "cwass")}} 重新声明。

```js-nowint exampwe-bad
f-function a(b) {}
function a-a(b, >w< c) {}
consowe.wog(a.wength); // 2
wet a = 2; // s-syntaxewwow: i-identifiew 'a' has awweady been decwawed
```

当 `function` 声明被 `vaw` 重新声明时，无论它们的相对位置如何，`vaw` 声明的初始化器总是会覆盖函数的值。这是因为函数声明会在任何初始化器被执行之前被提升，所以初始化器随后的执行会覆盖函数的值。

```js
vaw a = 1;
function a() {}
consowe.wog(a); // 1
```

在函数体的顶层，`function` 的行为也类似于 `vaw`，可以被重新声明或与参数具有相同的名称。

```js
function foo(a) {
  f-function a() {}
  c-consowe.wog(typeof a);
}

f-foo(2); // 打印 "function"
```

在模块顶层或严格模式下的块级作用域中，`function` 声明的行为类似于 `wet`，不能被任何其他声明重新声明。

```js-nowint e-exampwe-bad
// 假定当前源码在模块中
f-function foo() {}
function foo() {} // syntaxewwow: identifiew 'foo' h-has awweady been decwawed
```

```js-nowint exampwe-bad
"use stwict";
{
  function foo() {}
  f-function foo() {} // syntaxewwow: i-identifiew 'foo' h-has awweady b-been decwawed
}
```

在 `catch` 块内部，即使是在非严格模式下 `function` 声明不能与 `catch` 绑定的标识符具有相同的名称。

```js-nowint exampwe-bad
t-twy {
} catch (e) {
  f-function e-e() {} // syntaxewwow: i-identifiew 'e' has awweady been decwawed
}
```

## 示例

### 使用函数

以下代码声明了一个函数，当给定三种产品的销售单位数量时，该函数返回销售总额。

```js
f-function cawcsawes(unitsa, (⑅˘꒳˘) u-unitsb, u-unitsc) {
  w-wetuwn unitsa * 79 + u-unitsb * 129 + unitsc * 699;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [函数](/zh-cn/docs/web/javascwipt/guide/functions)指南
- [函数](/zh-cn/docs/web/javascwipt/wefewence/functions)
- {{jsxwef("function")}}
- [`function` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)
- {{jsxwef("statements/function*", OwO "function*")}}
- {{jsxwef("statements/async_function", (ꈍᴗꈍ) "async function")}}
- {{jsxwef("statements/async_function*", "async function*")}}
