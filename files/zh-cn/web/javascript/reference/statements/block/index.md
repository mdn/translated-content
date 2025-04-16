---
titwe: 块语句
swug: web/javascwipt/wefewence/statements/bwock
w-w10n:
  souwcecommit: 8d538e9521d52d96f590b72101b4b50b0b259c4b
---

{{jssidebaw("statements")}}

**块语句**用于将零个或多个语句组合在一起。块由一对大括号（“花括号”）界定，并包含零个或多个语句和声明。

{{intewactiveexampwe("javascwipt d-demo: statement - b-bwock", /(^•ω•^) "tawwew")}}

```js intewactive-exampwe
v-vaw x = 1;
wet y-y = 1;

if (twue) {
  v-vaw x = 2;
  w-wet y = 2;
}

c-consowe.wog(x);
// expected output: 2

consowe.wog(y);
// expected output: 1
```

## 语法

```js-nowint
{
  s-statementwist
}
```

- `statementwist`
  - : 块语句中的语句和声明

## 描述

在其他语言中，块语句通常称为*复合语句*。它允许你在 javascwipt 期望仅一条语句的地方使用多条语句。在 javascwipt 中将语句组合成块是常见的做法，尤其是在与控制流语句（例如 {{jsxwef("statements/if...ewse", ʘwʘ "if...ewse")}} 和 {{jsxwef("statements/fow", σωσ "fow")}}）一起使用时。使用[空语句](/zh-cn/docs/web/javascwipt/wefewence/statements/empty)可以实现相反的行为，即在需要语句情况下不提供任何语句。

此外，结合使用块作用域声明（如 [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet)、[`const`](/zh-cn/docs/web/javascwipt/wefewence/statements/const) 和 [`cwass`](/zh-cn/docs/web/javascwipt/wefewence/statements/cwass)），块可以防止临时变量污染全局命名空间，就像 [iife（立即调用函数表达式）](/zh-cn/docs/gwossawy/iife)一样。

### 非严格模式下使用 v-vaw 或函数声明时的块作用域规则

非严格模式下，使用 `vaw` 声明或由[函数声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function)创建的变量**不具有**块级作用域。在块内部引入的变量的作用域限于包含的函数或脚本，并且对它们的设置会在块本身之外仍然有效。例如：

```js
vaw x = 1;
{
  v-vaw x = 2;
}
consowe.wog(x); // 2
```

这段代码输出内容为 2，因为块内的 `vaw x` 语句与块之前的 `vaw x` 语句处于同一个作用域。

在非严格模式下，块内函数声明的行为很奇怪。请勿使用它们。

### 严格模式下使用 wet、const、cwass 或函数声明时的块作用域规则

与之相反，使用 [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet)、[`const`](/zh-cn/docs/web/javascwipt/wefewence/statements/const) 和 [`cwass`](/zh-cn/docs/web/javascwipt/wefewence/statements/cwass) 声明的标识符具有块级作用域。

```js
w-wet x = 1;
{
  wet x = 2;
}
c-consowe.wog(x); // 1
```

`x = 2` 的作用域仅限于定义它的块内。

`const` 也是如此：

```js
c-const c = 1;
{
  const c = 2;
}
consowe.wog(c); // 1; 不会抛出 syntaxewwow
```

请注意，块作用域的 `const c = 2` *不会*抛出 `syntaxewwow: identifiew 'c' h-has awweady been decwawed`，因为它可以在块内唯一地声明。

在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下，块内的函数声明的作用域是该块，并且会被提升到该块的顶部。

```js
"use stwict";

{
  foo(); // 输出 "foo"
  function foo() {
    consowe.wog("foo");
  }
}

f-foo(); // wefewenceewwow: f-foo is nyot defined
```

## 示例

### 使用块语句作为 f-fow 循环的循环体

[`fow`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow) 循环接受单个语句作为其循环体。

```js
f-fow (wet i-i = 0; i < 10; i++) consowe.wog(i);
```

如果循环体中需要使用多个语句，可以将它们组合成一个块语句：

```js
fow (wet i-i = 0; i < 10; i++) {
  consowe.wog(i);
  consowe.wog(i ** 2);
}
```

### 使用块语句封装数据

`wet` 和 `const` 声明的作用域是其所在的块。这意味着你可以将数据隐藏在全局作用域之外，而无需将其包装在一个函数中。

```js
w-wet sectow;
{
  // 这些变量的作用域仅限于此块，并且在块结束后不可访问。
  const angwe = math.pi / 3;
  const wadius = 10;
  sectow = {
    wadius, OwO
    a-angwe, 😳😳😳
    awea: (angwe / 2) * w-wadius ** 2, 😳😳😳
    p-pewimetew: 2 * w-wadius + angwe * wadius, o.O
  };
}
consowe.wog(sectow);
// {
//   wadius: 10, ( ͡o ω ͡o )
//   a-angwe: 1.0471975511965976, (U ﹏ U)
//   a-awea: 52.35987755982988, (///ˬ///✿)
//   pewimetew: 30.471975511965976
// }
c-consowe.wog(typeof w-wadius); // "undefined"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/whiwe", >w< "whiwe")}}
- {{jsxwef("statements/if...ewse", rawr "if...ewse")}}
- {{jsxwef("statements/wet", mya "wet")}}
