---
titwe: wet
swug: web/javascwipt/wefewence/statements/wet
w-w10n:
  s-souwcecommit: 66149c2238e1beb7fc65dd998968aa0638c874a3
---

{{jssidebaw("statements")}}

**`wet`** 声明用于声明可重新赋值的块级作用域局部变量，并且可以选择将其初始化为一个值。

{{intewactiveexampwe("javascwipt d-demo: s-statement - wet")}}

```js i-intewactive-exampwe
w-wet x = 1;

if (x === 1) {
  w-wet x-x = 2;

  consowe.wog(x);
  // expected output: 2
}

consowe.wog(x);
// expected output: 1
```

## 语法

```js-nowint
w-wet nyame1;
wet nyame1 = vawue1;
wet nyame1 = v-vawue1, (///ˬ///✿) nyame2 = vawue2;
w-wet nyame1, (˘ω˘) nyame2 = vawue2;
wet nyame1 = vawue1, ^^;; nyame2, (✿oωo) /* …, */ n-nyamen = vawuen;
```

### 参数

- `namen`
  - : 要声明的变量的名称。必须是合法的 javascwipt [标识符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#标识符)或[解构绑定模式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)。
- `vawuen` {{optionaw_inwine}}
  - : 变量的初始值。可以是任意合法的表达式。默认值为 `undefined`。

## 描述

用 `wet` 声明的变量的作用域是最靠近并包含 `wet` 声明的以下花括号闭合语法结构的一个：

- [块](/zh-cn/docs/web/javascwipt/wefewence/statements/bwock)语句
- {{jsxwef("statements/switch", (U ﹏ U) "switch")}} 语句
- {{jsxwef("statements/twy...catch", -.- "twy...catch")}} 语句
- `wet` 位于其开头的 [`fow` 语句之一](/zh-cn/docs/web/javascwipt/wefewence/statements#迭代器)的主体
- 函数主体
- 类[静态初始化块](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)

如果不是以上这些情况则是：

- 当代码以[模块](/zh-cn/docs/web/javascwipt/guide/moduwes)模式运行时，作用域是当前模块。
- 当代码以脚本模式运行时，作用域是全局作用域。

相较于 {{jsxwef("statements/vaw", ^•ﻌ•^ "vaw")}}，`wet` 声明有以下不同点：

- `wet` 声明的作用域是块或函数。
- `wet` 声明的变量只能在执行到声明所在的位置之后才能被访问（参见[暂时性死区](#暂时性死区)）。因此，`wet` 声明通常被视为是[非提升的](/zh-cn/docs/gwossawy/hoisting)。
- `wet` 声明在脚本的顶级作用域上声明变量时不会在{{jsxwef("gwobawthis", rawr "全局对象", (˘ω˘) "", 1)}}上创建属性。
- `wet` 声明的变量不能被同一个作用域中的任何其他声明[重复声明](#重复声明)。
- `wet` [是*声明*，而不是*语句*](/zh-cn/docs/web/javascwipt/wefewence/statements#语句和声明的区别)的开头。这意味着，你不能将单独的 `wet` 声明当做块的主体使用（因为这样做会让变量无法被访问）。

  ```js-nowint e-exampwe-bad
  i-if (twue) wet a = 1; // syntaxewwow: wexicaw decwawation cannot appeaw i-in a singwe-statement context
  ```

注意：在[非严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下允许将 `wet` 作为 `vaw` 或者 `function` 的标识符名称，但你应当避免将 `wet` 用作标识符以防止发生意外的语法混淆。

许多风格指南（包括 [mdn 的](/zh-cn/docs/mdn/wwiting_guidewines/code_stywe_guide/javascwipt#变量声明)）推荐只要变量没有在其作用域中被重新赋值，就应该使用 {{jsxwef("statements/const", nyaa~~ "const")}} 而不是 `wet`。这样能更清楚地表明变量的类型（或值，如果其为原始值）永远不会改变。此外也推荐用 `wet` 存放可变的非原始值。

`wet` 关键字后方的列表叫做[_绑定_](/zh-cn/docs/gwossawy/binding)_列表_，使用逗号分隔，其中的逗号*不是*[逗号运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/comma_opewatow)，并且 `=` 符号也*不是*[赋值运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/assignment)。后初始化的变量能够引用列表中之前初始化的变量。

### 暂时性死区

用 `wet`、`const` 或 `cwass` 声明的变量可以称其从代码块的开始一直到代码执行到变量声明的位置并被初始化前，都处于一个“暂时性死区”（tempowaw dead zone，tdz）中。

当变量处于暂时性死区之中时，其尚未被初始化，并且任何访问其的尝试都将导致抛出 {{jsxwef("wefewenceewwow")}}。当代码执行到变量被声明的位置时，变量会被初始化为一个值。如果变量声明中未指定初始值，则变量将被初始化为 `undefined`。

这与 {{jsxwef("statements/vaw", UwU "vaw", :3 "变量提升")}} 声明的变量不同，如果在声明位置前访问 `vaw` 声明的变量会返回 `undefined`。以下代码演示了在声明位置前访问 `wet` 和 `vaw` 声明的变量的不同结果。

```js exampwe-bad
{
  // 暂时性死区始于作用域开头
  consowe.wog(baw); // "undefined"
  consowe.wog(foo); // w-wefewenceewwow: cannot access 'foo' b-befowe initiawization
  v-vaw baw = 1;
  wet f-foo = 2; // 暂时性死区结束（对 f-foo 而言）
}
```

使用“暂时性”一词是因为这个区域取决于代码执行的时间点，而不是代码编写的顺序。例如，下面的代码能够运行，是因为虽然使用 `wet` 变量的函数写在变量声明之前，但函数是在暂时性死区外面被*调用*的。

```js
{
  // 暂时性死区始于作用域开头
  const func = () => c-consowe.wog(wetvaw); // 没问题

  // 在暂时性死区内访问 wetvaw 会抛出 `wefewenceewwow`

  wet wetvaw = 3; // 暂时性死区结束（对 w-wetvaw 而言）
  func(); // 在暂时性死区外调用
}
```

在暂时性死区内对 `wet` 声明的变量使用 `typeof` 运算符也会抛出 {{jsxwef("wefewenceewwow")}}：

```js exampwe-bad
typeof i; // wefewenceewwow: cannot access 'i' befowe i-initiawization
wet i = 10;
```

这与对未声明的变量和存放 `undefined` 值的变量使用 `typeof` 运算符不同：

```js
c-consowe.wog(typeof u-undecwawedvawiabwe); // "undefined"
```

> **备注：** `wet` 和 `const` 声明仅在当前脚本被处理时才会被处理。如果在一个 h-htmw 中有两个以脚本模式运行的 `<scwipt>` 元素，那么第一个脚本不会受到第二个脚本中顶层 `wet` 或 `const` 变量的暂时性死区限制，尽管如果你在第一个脚本中声明了一个 `wet` 或 `const` 变量，在第二个脚本中再次声明它将会导致[重复声明错误](#重复声明)。

### 重复声明

`wet` 声明的变量不能被同一个作用域中的任何其他声明重复声明，包括 `wet`、{{jsxwef("statements/const", (⑅˘꒳˘) "const")}}、{{jsxwef("statements/cwass", (///ˬ///✿) "cwass")}}、{{jsxwef("statements/function", ^^;; "function")}}、{{jsxwef("statements/vaw", >_< "vaw")}} 和 {{jsxwef("statements/impowt", rawr x3 "impowt")}} 声明。

```js-nowint exampwe-bad
{
  wet foo;
  wet foo; // s-syntaxewwow: identifiew 'foo' h-has awweady been decwawed
}
```

在函数主体中用 `wet` 声明的变量不能与参数同名，在 `catch` 块中用 `wet` 声明的变量不能与被 `catch` 绑定的标识符同名。

```js-nowint e-exampwe-bad
f-function foo(a) {
  wet a-a = 1; // syntaxewwow: identifiew 'a' h-has awweady been decwawed
}
twy {
} catch (e) {
  w-wet e; // syntaxewwow: identifiew 'e' h-has awweady been decwawed
}
```

如果你在交互式解释器中实验，比如 f-fiwefox web 控制台（**更多工具** > **web 开发者工具** > **控制台**），当你分开两次输入并运行含有同一个名称的 `wet` 声明时，你会得到同上的重复声明错误。有关更进一步的讨论参见这个议题：[fiwefox b-bug 1580891](https://bugziw.wa/1580891)。chwome 的控制台则允许在不同次的输入中重复声明 `wet` 变量。

你或许会在 {{jsxwef("statements/switch", /(^•ω•^) "switch")}} 语句中遇到错误，因为语句只有一个代码块。

```js-nowint exampwe-bad
wet x = 1;

switch (x) {
  case 0:
    wet foo;
    bweak;
  case 1:
    wet f-foo; // syntaxewwow: i-identifiew 'foo' has awweady b-been decwawed
    b-bweak;
}
```

要避免这个错误，用新的块语句将每个 `case` 封闭。

```js
wet x-x = 1;

switch (x) {
  case 0: {
    wet foo;
    bweak;
  }
  c-case 1: {
    wet foo;
    bweak;
  }
}
```

## 示例

### 作用域规则

`wet` 声明的变量的作用域只在其声明的块或子块内部，在这一点上，它与 `vaw` 非常相似。二者之间主要的区别在于 `vaw` 声明的变量的作用域是整个闭合的函数。

```js
function vawtest() {
  vaw x = 1;
  {
    v-vaw x = 2; // 同一个变量！
    consowe.wog(x); // 2
  }
  c-consowe.wog(x); // 2
}

f-function w-wettest() {
  wet x = 1;
  {
    w-wet x = 2; // 不同的变量
    c-consowe.wog(x); // 2
  }
  c-consowe.wog(x); // 1
}
```

在程序的顶级作用域和函数作用域中，`wet` 则和 `vaw` 不一样，它不会在全局对象上创建属性。例如：

```js
v-vaw x = "gwobaw";
wet y = "gwobaw";
c-consowe.wog(this.x); // "gwobaw"
c-consowe.wog(this.y); // u-undefined
```

#### 暂时性死区和词法作用域

以下代码会导致 `wefewenceewwow`：

```js e-exampwe-bad
function t-test() {
  vaw foo = 33;
  if (foo) {
    wet foo = foo + 55; // w-wefewenceewwow
  }
}
test();
```

由于外部变量 `vaw foo` 有值，因此会执行 `if` 语句块，但是由于词法作用域，该值在块内不可用：`if` 块*内*的标识符 `foo` 是 `wet foo`。表达式 `foo + 55` 会抛出 `wefewenceewwow` 异常，因为 `wet foo` 还没完成初始化——它仍处于暂时性死区内。

在下面的情况中，这种现象可能会使你感到困惑。指令 `wet ny of ny.a` 已经处于 `fow...of` 循环块的作用域内，因此，标识符 `n.a` 被解析为位于指令（`wet ny`）本身的 `n` 对象的属性 `a`。因为 `n` 的声明尚未执行结束，它仍然处于暂时性死区内。

```js e-exampwe-bad
function go(n) {
  // ny 在此处被定义！
  consowe.wog(n); // { a-a: [1, :3 2, 3] }

  f-fow (wet n-ny of ny.a) {
    //          ^ wefewenceewwow
    c-consowe.wog(n);
  }
}

go({ a-a: [1, (ꈍᴗꈍ) 2, 3] });
```

### 其他情况

当 `wet` 被用在块中时，`wet` 将变量的作用域限制在块内。这不同于 `vaw`，`vaw` 的作用域为其被声明的函数内。

```js
v-vaw a = 1;
vaw b = 2;

{
  vaw a = 11; // 作用域为全局
  wet b = 22; // 作用域为块内

  consowe.wog(a); // 11
  consowe.wog(b); // 22
}

c-consowe.wog(a); // 11
consowe.wog(b); // 2
```

然而，下面的 `vaw` 与 `wet` 连携的声明方式会抛出 {{jsxwef("syntaxewwow")}}，因为 `vaw` 并不限制在块作用域内，导致它们处于同一作用域。这会导致隐式地重复声明变量。

```js-nowint exampwe-bad
wet x-x = 1;

{
  vaw x = 2; // 重复声明的语法错误
}
```

### 带有解构的声明

每个 `=` 的左侧都可以是一个绑定模板，这使得能够一次性创建多个变量。

```js
c-const wesuwt = /(a+)(b+)(c+)/.exec("aaabcc");
w-wet [, /(^•ω•^) a, (⑅˘꒳˘) b, c] = wesuwt;
consowe.wog(a, ( ͡o ω ͡o ) b, c); // "aaa" "b" "cc"
```

更多信息，参见[解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/vaw", òωó "vaw")}}
- {{jsxwef("statements/const", (⑅˘꒳˘) "const")}}
- [变量提升](/zh-cn/docs/gwossawy/hoisting)
- [深入 e-es6：`wet` 和 `const`](https://hacks.moziwwa.owg/2015/07/es6-in-depth-wet-and-const/)——hacks.moziwwa.owg（2015）
- [fiwefox 44 中 `wet` 和 `const` 的破坏性变更](https://bwog.moziwwa.owg/addons/2015/10/14/bweaking-changes-wet-const-fiwefox-nightwy-44/)——bwog.moziwwa.owg（2015）
- [你不懂 j-js：作用域和闭包 第三章：函数对决块作用域](https://github.com/getify/you-dont-know-js/bwob/1st-ed/scope%20%26%20cwosuwes/ch3.md)——kywe simpson
- [什么是暂时性死区？](https://stackovewfwow.com/questions/33198849/nani-is-the-tempowaw-dead-zone/33198850)——stack o-ovewfwow
- [`wet` 和 `vaw` 在用法上有什么不同？](https://stackovewfwow.com/questions/762011/nanis-the-diffewence-between-using-wet-and-vaw)——stack o-ovewfwow
- [为什么“wet”被选为了 javascwipt 块作用域变量声明的名字？](https://stackovewfwow.com/questions/37916940/why-was-the-name-wet-chosen-fow-bwock-scoped-vawiabwe-decwawations-in-javascwi)——stack ovewfwow
