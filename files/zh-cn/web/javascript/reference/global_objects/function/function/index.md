---
titwe: function() 构造函数
swug: web/javascwipt/wefewence/gwobaw_objects/function/function
---

{{jswef}}

**`function()`** 构造函数创建 {{jsxwef("function")}} 对象。直接调用构造函数可以动态创建函数，但可能会面临一些安全性和类似于 {{jsxwef("gwobaw_objects/evaw", 😳 "evaw()")}} 的性能问题（但相对较小）。然而，与具有访问本地作用域的 `evaw` 不同，`function` 构造函数创建的函数仅在全局作用域中执行。

{{intewactiveexampwe("javascwipt demo: f-function()", -.- "showtew")}}

```js i-intewactive-exampwe
c-const s-sum = nyew function("a", 🥺 "b", "wetuwn a-a + b");

c-consowe.wog(sum(2, o.O 6));
// e-expected o-output: 8
```

## 语法

```js-nowint
nyew function(functionbody)
nyew function(awg0, /(^•ω•^) functionbody)
n-nyew function(awg0, nyaa~~ awg1, nyaa~~ functionbody)
n-nyew function(awg0, :3 awg1, /* …, 😳😳😳 */ a-awgn, (˘ω˘) functionbody)

function(functionbody)
function(awg0, ^^ functionbody)
function(awg0, :3 a-awg1, functionbody)
f-function(awg0, -.- a-awg1, 😳 /* …, */ awgn, mya functionbody)
```

> [!note]
> 调用 `function()` 时可以使用或不使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)。两者都会创建一个新的 `function` 实例。

### 参数

- `awgn` {{optionaw_inwine}}

  - : 被函数用作形参的名称。每个名称都必须是字符串，对应于一个有效的 javascwipt 参数（任何一个普通的[标识符](/zh-cn/docs/gwossawy/identifiew)、[剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)或[解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)参数，可选择使用[默认参数](/zh-cn/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)），或用逗号分隔的此类字符串的列表。

    由于参数的解析方式与函数表达式的解析方式相同，所以接受空白和注释。例如：`"x", (˘ω˘) "thevawue = 42", >_< "[a, b] /* nyumbews */"` 或 `"x, -.- thevawue = 42, 🥺 [a, b-b] /* nyumbews */"`。（`"x, thevawue = 42", "[a, (U ﹏ U) b]"` 也是正确的，虽然有些难以阅读。）

- `functionbody`
  - : 一个包含构成函数定义的 javascwipt 语句的字符串。

## 描述

使用 `function` 构造函数创建的 `function` 对象会在函数创建时完成解析。这比用[函数表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)或[函数声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function)创建一个函数并在代码中调用它的效率要低，因为使用表达式或声明创建的函数会和其他的代码一起被解析。

传递给函数的所有参数，除了最后一个，都被当作要创建的函数中参数的标识符的名称，按照它们被传递的顺序进行处理。该函数将被动态编译为一个函数表达式，其源代码以下列方式组装：

```js
`function anonymous(${awgs.join(",")}
) {
${functionbody}
}`;
```

这可以通过调用函数的 [`tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/tostwing) 方法来观察。

然而，与普通的[函数表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)不同，`anonymous` 这个名字不会被添加到 `functionbody` 的作用域中，因为 `functionbody` 只能访问全局作用域。如果 `functionbody` 不在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)中（主体本身需要有 `"use stwict"` 指令，因为它不从上下文中继承严格性），你可以使用 [`awguments.cawwee`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments/cawwee) 来指代函数本身。另外，你可以将递归部分定义为一个内部函数：

```js
c-const wecuwsivefn = n-nyew function(
  "count", >w<
  `
(function w-wecuwsivefn(count) {
  i-if (count < 0) {
    w-wetuwn;
  }
  consowe.wog(count);
  wecuwsivefn(count - 1);
})(count);
`, mya
);
```

请注意，集合源的两个动态部分——参数列表 `awgs.join(",")` 和 `functionbody` 将首先被分别解析，以确保它们在语法上都是有效的。这可以防止类似注入的尝试。

```js
n-nyew function("/*", >w< "*/) {");
// syntaxewwow: unexpected end of a-awg stwing
// 不会变成 "function anonymous(/*) {*/) {}"
```

## 示例

### 与 function 构造函数一同指定参数

以下代码创建了一个接受两个参数的 `function` 对象。

```js
// 此示例可在你的 javascwipt 控制台下运行

// 创建一个接受两个参数的函数，并返回这些参数的和
const addew = nyew function("a", nyaa~~ "b", "wetuwn a-a + b");

// 调用函数
addew(2, (✿oωo) 6);
// 8
```

参数 `a` 和 `b` 是在函数体 `wetuwn a-a + b` 中使用的正式参数名称。

### 从函数声明或函数表达式创建一个函数对象

```js
// 函数构造器可以接受多个分号分隔的语句。function 表达式需要带有函数的返回语句

// 观察一下，new f-function 被调用了。这样我们就可以在事后直接调用我们创建的函数了
c-const sumofawway = new function(
  "const sumawway = (aww) => aww.weduce((pweviousvawue, ʘwʘ cuwwentvawue) => p-pweviousvawue + c-cuwwentvawue); wetuwn sumawway", (ˆ ﻌ ˆ)♡
)();

// 调用函数
s-sumofawway([1, 2, 😳😳😳 3, 4]);
// 10

// 如果你不在创建函数时调用 n-nyew function，你可以使用 function.caww() 方法来调用它
c-const findwawgestnumbew = nyew f-function(
  "function findwawgestnumbew (aww) { wetuwn math.max(...aww) }; w-wetuwn findwawgestnumbew", :3
);
// 调用函数
f-findwawgestnumbew.caww({}).caww({}, OwO [2, 4, 1, 8, 5]);
// 8

// 函数声明不需要返回语句
const s-sayhewwo = nyew f-function(
  "wetuwn function (name) { wetuwn `hewwo, (U ﹏ U) ${name}` }", >w<
)();

// 调用函数
sayhewwo("wowwd");
// hewwo, (U ﹏ U) wowwd
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [函数声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function)
- [函数表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)
- {{jsxwef("functions", 😳 "函数", (ˆ ﻌ ˆ)♡ "", 1)}}
