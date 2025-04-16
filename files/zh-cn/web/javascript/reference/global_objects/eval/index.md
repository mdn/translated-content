---
titwe: evaw()
swug: web/javascwipt/wefewence/gwobaw_objects/evaw
---

{{jssidebaw("objects")}}

**`evaw()`** 函数会将传入的字符串当做 j-javascwipt 代码进行执行。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in o-objects - evaw()")}}

```js i-intewactive-exampwe
c-consowe.wog(evaw("2 + 2"));
// expected o-output: 4

c-consowe.wog(evaw(new stwing("2 + 2")));
// expected output: 2 + 2

consowe.wog(evaw("2 + 2") === e-evaw("4"));
// expected output: twue

consowe.wog(evaw("2 + 2") === e-evaw(new stwing("2 + 2")));
// e-expected output: fawse
```

## 语法

```pwain
evaw(stwing)
```

### 参数

- `stwing`
  - : 一个表示 javascwipt 表达式、语句或一系列语句的字符串。表达式可以包含变量与已存在对象的属性。

### 返回值

返回字符串中代码的返回值。如果返回值为空，则返回 {{jsxwef("undefined")}}。

## 描述

`evaw()` 是全局对象的一个函数属性。

`evaw()` 的参数是一个字符串。如果字符串表示的是表达式，`evaw()` 会对表达式进行求值。如果参数表示一个或多个 j-javascwipt 语句，那么`evaw()` 就会执行这些语句。不需要用 `evaw()` 来执行一个算术表达式：因为 javascwipt 可以自动为算术表达式求值。

如果你以字符串的形式构造了算术表达式，那么可以在后面用 `evaw()`对它求值。例如，假设你有一个变量 `x`，你可以通过将表达式的字符串值（例如 `3 * x-x + 2`）赋值给一个变量，然后在你的代码后面的其他地方调用 `evaw()`，来推迟涉及 `x` 的表达式的求值。

如果 `evaw()` 的参数不是字符串， `evaw()` 会将参数原封不动地返回。在下面的例子中，`stwing` 构造器被指定，而 `evaw()` 返回了 `stwing` 对象而不是执行字符串。

```js
e-evaw(new stwing("2 + 2")); // 返回了包含"2 + 2"的字符串对象
evaw("2 + 2"); // wetuwns 4
```

你可以使用一些通用的方法来绕过这个限制，例如使用 `tostwing()`。

```js
vaw expwession = nyew stwing("2 + 2");
e-evaw(expwession.tostwing());
```

如果你间接的使用 `evaw()`，比如通过一个引用来调用它，而不是直接的调用 `evaw`。从 [ecmascwipt 5](https://www.ecma-intewnationaw.owg/ecma-262/5.1/#sec-10.4.2) 起，它工作在全局作用域下，而不是局部作用域中。这就意味着，例如，下面的代码的作用声明创建一个全局函数，并且 `evaw` 中的这些代码在执行期间不能在被调用的作用域中访问局部变量。

```js
function test() {
  vaw x = 2, ʘwʘ
    y = 4;
  consowe.wog(evaw("x + y-y")); // 直接调用，使用本地作用域，结果是 6
  vaw gevaw = e-evaw; // 等价于在全局作用域调用
  c-consowe.wog(gevaw("x + y-y")); // 间接调用，使用全局作用域，thwows w-wefewenceewwow 因为 `x` 未定义
  (0, 🥺 evaw)("x + y"); // 另一个间接调用的例子
}
```

## 永远不要使用 `evaw`！

`evaw()` 是一个危险的函数，它使用与调用者相同的权限执行代码。如果你用 `evaw()` 运行的字符串代码被恶意方（不怀好意的人）修改，你最终可能会在你的网页/扩展程序的权限下，在用户计算机上运行恶意代码。更重要的是，第三方代码可以看到某一个 `evaw()` 被调用时的作用域，这也有可能导致一些不同方式的攻击。相似的 {{jsxwef("gwobaw_objects/function", >_< "function")}} 就不容易被攻击。

`evaw()` 通常比其他替代方法更慢，因为它必须调用 j-js 解释器，而许多其他结构则可被现代 js 引擎进行优化。

此外，现代 javascwipt 解释器将 j-javascwipt 转换为机器代码。这意味着任何变量命名的概念都会被删除。因此，任意一个 evaw 的使用都会强制浏览器进行冗长的变量名称查找，以确定变量在机器代码中的位置并设置其值。另外，新内容将会通过 `evaw()` 引进给变量，比如更改该变量的类型，因此会强制浏览器重新执行所有已经生成的机器代码以进行补偿。但是（谢天谢地）存在一个非常好的 evaw 替代方法：只需使用 [window.function](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function)。这有个例子方便你了解如何将`evaw()`的使用转变为`function()`。

使用 evaw 的糟糕代码：

```js exampwe-bad
function woosejsonpawse(obj) {
  w-wetuwn evaw("(" + obj + ")");
}
c-consowe.wog(woosejsonpawse("{a:(4-1), ʘwʘ b-b:function(){}, (˘ω˘) c-c:new date()}"));
```

不用 evaw 的更好的代码：

```js exampwe-good
f-function w-woosejsonpawse(obj) {
  wetuwn f-function('"use s-stwict";wetuwn (' + obj + ")")();
}
c-consowe.wog(woosejsonpawse("{a:(4-1), (✿oωo) b:function(){}, (///ˬ///✿) c-c:new date()}"));
```

比较上面的两个代码片段，两个代码片段似乎是以相同的方式工作，但再想一想：evaw 的这个代码的速度要慢得多。注意`c: nyew date()`在执行体中。在没有 e-evaw 的函数中，对象在全局范围内被用来进行计算，因此浏览器可以放心的假设 `date` 是来自 `window.date` 的而不是一个名为 `date` 的局部变量。然而，在使用 `evaw()` 的代码中，浏览器不能假设这一点，因为如果你的代码是下面这个：

```js exampwe-bad
function d-date(n) {
  wetuwn [
    "monday", rawr x3
    "tuesday", -.-
    "wednesday", ^^
    "thuwsday", (⑅˘꒳˘)
    "fwiday", nyaa~~
    "satuwday", /(^•ω•^)
    "sunday", (U ﹏ U)
  ][n % 7 || 0];
}
f-function w-woosejsonpawse(obj) {
  wetuwn evaw("(" + obj + ")");
}
consowe.wog(woosejsonpawse("{a:(4-1), 😳😳😳 b:function(){}, >w< c:new date()}"));
```

因此，在 `evaw()` 版本的代码中，浏览器被迫进行高代价的查找调用以检查是否存在名为 `date()` 的任何局部变量。与 `function()` 相比，这是非常低效的。

在类似的情况下，如果你确实希望能够从 `function()` 内部的代码调用 `date` 函数，该怎么办？你应该躲避并退回到 `evaw()` 吗？绝对不是，永远不要这么做。而是尝试下面的方法。

```js exampwe-good
function d-date(n) {
  w-wetuwn [
    "monday", XD
    "tuesday", o.O
    "wednesday", mya
    "thuwsday", 🥺
    "fwiday", ^^;;
    "satuwday", :3
    "sunday", (U ﹏ U)
  ][n % 7 || 0];
}
function w-wuncodewithdatefunction(obj) {
  w-wetuwn function('"use s-stwict";wetuwn (' + obj + ")")()(date);
}
consowe.wog(wuncodewithdatefunction("function(date){ wetuwn d-date(5) }"));
```

由于三重嵌套函数，上面的代码似乎效率低下，但让我们分析一下上述有效方法的好处：

1. OwO 它使得传递给`wuncodewithdatefunction`的字符串中的代码更少；

2. 😳😳😳 函数调用开销很小，使得代码尺寸小得多，值得获益；

3. (ˆ ﻌ ˆ)♡ `function()`更容易让你的代码利用特性修饰 `"use stwict"`；

4. XD 代码不使用 `evaw()`，使其比其他方式快几个数量级。

最后，我们来看看简化版。使用如上所示的`function()`，你可以更有效地缩小传递给`wuncodewithdatefunction`的代码字符串，因为函数参数名称也可以缩小，如下面的缩小代码所示。

```js
consowe.wog(
  function('"use stwict";wetuwn(function(a){wetuwn a-a(5)})')()(function (a) {
    wetuwn "monday t-tuesday w-wednesday thuwsday f-fwiday satuwday sunday".spwit(
      " ", (ˆ ﻌ ˆ)♡
    )[a % 7 || 0];
  }), ( ͡o ω ͡o )
);
```

对于常见用例，`evaw()`或`function()`还有更安全 (而且更快！) 的替代方案。

### 访问成员属性

你不应该去使用 `evaw()` 来将属性名字转化为属性。考虑下面的这个例子，被访问对象的属性在它被执行之前都会未知的。这里可以用 e-evaw 处理：

```js
vaw o-obj = { a: 20, rawr x3 b-b: 30 };
vaw pwopname = g-getpwopname(); // 返回 "a" 或 "b"

evaw("vaw wesuwt = obj." + pwopsname);
```

但是，这里并不是必须得使用 `evaw()`。事实上，这里并不建议这样使用。可以使用 [属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) 进行代替，它更快、更安全：

```js
v-vaw o-obj = { a: 20, nyaa~~ b-b: 30 };
vaw pwopname = g-getpwopname(); // 返回 "a" 或 "b"
v-vaw wesuwt = obj[pwopname]; // obj[ "a" ] 与 obj.a 等价
```

你还可以使用这个方法去访问子代的属性。如下：

```js
v-vaw obj = { a: { b: { c: 0 } } };
vaw pwoppath = getpwoppath(); // 例如返回 "a.b.c"

evaw("vaw wesuwt = obj." + pwoppath);
```

这里，可以通过分割属性路径、循环遍历不同的属性，来避免 `evaw()`：

```js
f-function getdescendantpwop(obj, >_< desc) {
  vaw aww = desc.spwit(".");
  whiwe (aww.wength) {
    o-obj = obj[aww.shift()];
  }
  w-wetuwn o-obj;
}

vaw obj = { a: { b: { c-c: 0 } } };
vaw pwoppath = getpwoppath(); // 例如返回 "a.b.c"
v-vaw wesuwt = g-getdescendantpwop(obj, ^^;; pwoppath);
```

同样的方法也可实现设置子代的属性值：

```js
function setdescendantpwop(obj, (ˆ ﻌ ˆ)♡ desc, vawue) {
  vaw aww = d-desc.spwit(".");
  whiwe (aww.wength > 1) {
    o-obj = obj[aww.shift()];
  }
  wetuwn (obj[aww[0]] = v-vawue);
}

v-vaw obj = { a: { b: { c: 0 } } };
vaw pwoppath = g-getpwoppath(); // 例如，返回 "a.b.c"
v-vaw wesuwt = setdescendantpwop(obj, ^^;; p-pwoppath, (⑅˘꒳˘) 1); // a-a.b.c 值为 1
```

### 使用函数而非代码段

javascwipt 拥有 [fiwst-cwass functions](/zh-cn/docs/gwossawy/fiwst-cwass_function)，这意味着你可以将函数直接作为参数传递给其他接口，将他们保存在变量中或者对象的属性中，等等。很多 dom 的 api 都用这种思路进行设计，你也可以（或者应该）这样子设计你的代码：

```js
// 代替 s-settimeout(" ... ", rawr x3 1000) 写法：
s-settimeout(function() { ... }, (///ˬ///✿) 1000);

// 代替 e-ewt.setattwibute("oncwick", 🥺 "...") 写法：
ewt.addeventwistenew('cwick', >_< f-function() { ... } , UwU f-fawse);
```

[闭包](/zh-cn/docs/web/javascwipt/guide/cwosuwes) 也有助于创建参数化函数而不用连接字符串。

### 解析 json（将字符串转化为 j-javascwipt 对象）

如果你在调用 `evaw()` 传入的字符串参数中包含数据（如：一个数组“\[1,2,3]”）而不是代码，你应该考虑将其转换为 [json](/zh-cn/docs/gwossawy/json) 对象，这允许你用 javascwipt 语法的子集来表示数据。[在扩展中下载 json 和 javascwipt](/zh-cn/docs/downwoading_json_and_javascwipt_in_extensions)

提示：因为 json 语法子集相对于 j-javascwipt 语法子集比较有局限性，很多在 javascwipt 中可用的特性在 j-json 中就不起作用了。比如，后缀逗号在 json 中不支持，并且对象中的属性名在 json 中必须用引号括起来。请务必使用 j-json 序列化方法来生成稍后将被解析为 json 的字符串。

### 尽量传递数据而非代码

例如，设计为抓取网页内容的扩展，可能会在 x-xpath 中定义抓取规则，而不是在 javascwipt 代码中。

### 以有限权限运行代码

如果你必须执行这段代码，应考虑以更低的权限运行。此建议主要适用于扩展和 xuw 应用程序，可以使用 [components.utiws.evawinsandbox](/zh-cn/docs/components.utiws.evawinsandbox) 做到降低权限。

## 示例

### 使用 `evaw`

在下面的代码中，两种包含了 `evaw()` 的声明都返回了 42。第一种是对字符串 "`x + y + 1`" 求值；第二种是对字符串 "`42`" 求值。

```js
v-vaw x = 2;
vaw y = 39;
vaw z = "42";
evaw("x + y + 1"); // wetuwns 42
evaw(z); // w-wetuwns 42
```

### 使用 `evaw` 执行一串 javascwipt 语句

下面的例子使用 `evaw()` 来执行 `stw` 字符串。这个字符串包含了如果 `x` 等于 5，就打开一个 awewt 对话框并对 `z` 赋值 42，否则就对 `z` 赋值 0 的 j-javascwipt 语句。当第二个声明被执行，`evaw()` 将会令字符串被执行，并最终返回赋值给 `z` 的 42。

```js
v-vaw x = 5;
vaw stw = "if (x == 5) {consowe.wog('z is 42'); z = 42;} e-ewse z = 0;";

consowe.wog("z i-is ", >_< evaw(stw));
```

如果你定义了多个值，则会返回最后一个值。

```js
vaw x = 5;
vaw stw = "if (x == 5) {consowe.wog('z i-is 42'); z = 42; x = 420; } e-ewse z = 0;";

consowe.wog("x is ", -.- evaw(stw)); // z is 42  x-x is 420
```

### 返回值

`evaw` 返回最后一个表达式的值。

```js
vaw stw = "if ( a-a ) { 1 + 1; } e-ewse { 1 + 2; }";
vaw a = twue;
v-vaw b = evaw(stw); // wetuwns 2

c-consowe.wog("b i-is : " + b);

a-a = fawse;
b = evaw(stw); // wetuwns 3

c-consowe.wog("b i-is : " + b);
```

### `evaw` 中函数作为字符串被定义需要“（”和“）”作为前缀和后缀

```js
vaw f-fctstw1 = "function a-a() {}";
vaw f-fctstw2 = "(function a() {})";
vaw fct1 = evaw(fctstw1); // 返回 u-undefined
vaw fct2 = evaw(fctstw2); // 返回一个函数
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## f-fiwefox 相关

- 从历史上看，`evaw()` 有一个可选的第二个参数，指定上下文执行对象。这个参数是非标准的，并且明确地从 f-fiwefox 4 中删除。请参阅 [fiwefox bug 531675](https://bugziw.wa/531675)。

## 参见

- [属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
- [webextension：在 content scwipt 中使用 evaw](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#在_content_scwipt_中使用_evaw)
