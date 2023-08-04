---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
---

{{jsSidebar("Objects")}}

**`eval()`** 函数会将传入的字符串当做 JavaScript 代码进行执行。

{{EmbedInteractiveExample("pages/js/globalprops-eval.html")}}

## 语法

```plain
eval(string)
```

### 参数

- `string`
  - : 一个表示 JavaScript 表达式、语句或一系列语句的字符串。表达式可以包含变量与已存在对象的属性。

### 返回值

返回字符串中代码的返回值。如果返回值为空，则返回 {{jsxref("undefined")}}。

## 描述

`eval()` 是全局对象的一个函数属性。

`eval()` 的参数是一个字符串。如果字符串表示的是表达式，`eval()` 会对表达式进行求值。如果参数表示一个或多个 JavaScript 语句，那么`eval()` 就会执行这些语句。不需要用 `eval()` 来执行一个算术表达式：因为 JavaScript 可以自动为算术表达式求值。

如果你以字符串的形式构造了算术表达式，那么可以在后面用 `eval()`对它求值。例如，假设你有一个变量 `x`，您可以通过将表达式的字符串值（例如 `3 * x + 2`）赋值给一个变量，然后在你的代码后面的其他地方调用 `eval()`，来推迟涉及 `x` 的表达式的求值。

如果 `eval()` 的参数不是字符串， `eval()` 会将参数原封不动地返回。在下面的例子中，`String` 构造器被指定，而 `eval()` 返回了 `String` 对象而不是执行字符串。

```js
eval(new String("2 + 2")); // 返回了包含"2 + 2"的字符串对象
eval("2 + 2"); // returns 4
```

你可以使用一些通用的方法来绕过这个限制，例如使用 `toString()`。

```js
var expression = new String("2 + 2");
eval(expression.toString());
```

如果你间接的使用 `eval()`，比如通过一个引用来调用它，而不是直接的调用 `eval`。从 [ECMAScript 5](http://www.ecma-international.org/ecma-262/5.1/#sec-10.4.2) 起，它工作在全局作用域下，而不是局部作用域中。这就意味着，例如，下面的代码的作用声明创建一个全局函数，并且 `eval` 中的这些代码在执行期间不能在被调用的作用域中访问局部变量。

```js
function test() {
  var x = 2,
    y = 4;
  console.log(eval("x + y")); // 直接调用，使用本地作用域，结果是 6
  var geval = eval; // 等价于在全局作用域调用
  console.log(geval("x + y")); // 间接调用，使用全局作用域，throws ReferenceError 因为`x`未定义
  (0, eval)("x + y"); // 另一个间接调用的例子
}
```

## 永远不要使用 `eval`！

`eval()` 是一个危险的函数，它使用与调用者相同的权限执行代码。如果你用 `eval()` 运行的字符串代码被恶意方（不怀好意的人）修改，您最终可能会在您的网页/扩展程序的权限下，在用户计算机上运行恶意代码。更重要的是，第三方代码可以看到某一个 `eval()` 被调用时的作用域，这也有可能导致一些不同方式的攻击。相似的 {{jsxref("Global_Objects/Function", "Function")}} 就不容易被攻击。

`eval()` 通常比其他替代方法更慢，因为它必须调用 JS 解释器，而许多其他结构则可被现代 JS 引擎进行优化。

此外，现代 JavaScript 解释器将 JavaScript 转换为机器代码。这意味着任何变量命名的概念都会被删除。因此，任意一个 eval 的使用都会强制浏览器进行冗长的变量名称查找，以确定变量在机器代码中的位置并设置其值。另外，新内容将会通过 `eval()` 引进给变量，比如更改该变量的类型，因此会强制浏览器重新执行所有已经生成的机器代码以进行补偿。但是（谢天谢地）存在一个非常好的 eval 替代方法：只需使用 [window.Function](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)。这有个例子方便你了解如何将`eval()`的使用转变为`Function()`。

使用 eval 的糟糕代码：

```js example-bad
function looseJsonParse(obj) {
  return eval("(" + obj + ")");
}
console.log(looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}"));
```

不用 eval 的更好的代码：

```js example-good
function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ")")();
}
console.log(looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}"));
```

比较上面的两个代码片段，两个代码片段似乎是以相同的方式工作，但再想一想：eval 的这个代码的速度要慢得多。注意`c: new Date()`在执行体中。在没有 eval 的函数中，对象在全局范围内被用来进行计算，因此浏览器可以放心的假设 `Date` 是来自 `window.Date` 的而不是一个名为 `Date` 的局部变量。然而，在使用 `eval()` 的代码中，浏览器不能假设这一点，因为如果您的代码是下面这个：

```js example-bad
function Date(n) {
  return [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ][n % 7 || 0];
}
function looseJsonParse(obj) {
  return eval("(" + obj + ")");
}
console.log(looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}"));
```

因此，在 `eval()` 版本的代码中，浏览器被迫进行高代价的查找调用以检查是否存在名为 `Date()` 的任何局部变量。与 `Function()` 相比，这是非常低效的。

在类似的情况下，如果您确实希望能够从 `Function()` 内部的代码调用 `Date` 函数，该怎么办？你应该躲避并退回到 `eval()` 吗？绝对不是，永远不要这么做。而是尝试下面的方法。

```js example-good
function Date(n) {
  return [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ][n % 7 || 0];
}
function runCodeWithDateFunction(obj) {
  return Function('"use strict";return (' + obj + ")")()(Date);
}
console.log(runCodeWithDateFunction("function(Date){ return Date(5) }"));
```

由于三重嵌套函数，上面的代码似乎效率低下，但让我们分析一下上述有效方法的好处：

1. 它使得传递给`runCodeWithDateFunction`的字符串中的代码更少；

2. 函数调用开销很小，使得代码尺寸小得多，值得获益；

3. `Function()`更容易让你的代码利用特性修饰 `"use strict"`；

4. 代码不使用 `eval()`，使其比其他方式快几个数量级。

最后，我们来看看简化版。使用如上所示的`Function()`，您可以更有效地缩小传递给`runCodeWithDateFunction`的代码字符串，因为函数参数名称也可以缩小，如下面的缩小代码所示。

```js
console.log(
  Function('"use strict";return(function(a){return a(5)})')()(function (a) {
    return "Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(
      " ",
    )[a % 7 || 0];
  }),
);
```

对于常见用例，`eval()`或`Function()`还有更安全 (而且更快！) 的替代方案。

### 访问成员属性

你不应该去使用 `eval()` 来将属性名字转化为属性。考虑下面的这个例子，被访问对象的属性在它被执行之前都会未知的。这里可以用 eval 处理：

```js
var obj = { a: 20, b: 30 };
var propName = getPropName(); // 返回 "a" 或 "b"

eval("var result = obj." + propsName);
```

但是，这里并不是必须得使用 `eval()`。事实上，这里并不建议这样使用。可以使用 [属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors) 进行代替，它更快、更安全：

```js
var obj = { a: 20, b: 30 };
var propName = getPropName(); // 返回 "a" 或 "b"
var result = obj[propName]; // obj[ "a" ] 与 obj.a 等价
```

你还可以使用这个方法去访问子代的属性。如下：

```js
var obj = { a: { b: { c: 0 } } };
var propPath = getPropPath(); // 例如返回 "a.b.c"

eval("var result = obj." + propPath);
```

这里，可以通过分割属性路径、循环遍历不同的属性，来避免 `eval()`：

```js
function getDescendantProp(obj, desc) {
  var arr = desc.split(".");
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

var obj = { a: { b: { c: 0 } } };
var propPath = getPropPath(); // 例如返回 "a.b.c"
var result = getDescendantProp(obj, propPath);
```

同样的方法也可实现设置子代的属性值：

```js
function setDescendantProp(obj, desc, value) {
  var arr = desc.split(".");
  while (arr.length > 1) {
    obj = obj[arr.shift()];
  }
  return (obj[arr[0]] = value);
}

var obj = { a: { b: { c: 0 } } };
var propPath = getPropPath(); // 例如，返回 "a.b.c"
var result = setDescendantProp(obj, propPath, 1); // a.b.c 值为 1
```

### 使用函数而非代码段

JavaScript 拥有 [first-class functions](/zh-CN/docs/Glossary/First-class_Function)，这意味着你可以将函数直接作为参数传递给其他接口，将他们保存在变量中或者对象的属性中，等等。很多 DOM 的 API 都用这种思路进行设计，你也可以（或者应该）这样子设计你的代码：

```js
// 代替 setTimeout(" ... ", 1000) 写法：
setTimeout(function() { ... }, 1000);

// 代替 elt.setAttribute("onclick", "...") 写法：
elt.addEventListener('click', function() { ... } , false);
```

[闭包](/zh-CN/docs/Web/JavaScript/Closures) 也有助于创建参数化函数而不用连接字符串。

### 解析 JSON（将字符串转化为 JavaScript 对象）

如果你在调用 `eval()` 传入的字符串参数中包含数据（如：一个数组“\[1,2,3]”）而不是代码，你应该考虑将其转换为 [JSON](/zh-CN/docs/Glossary/JSON) 对象，这允许你用 JavaScript 语法的子集来表示数据。[在扩展中下载 JSON 和 JavaScript](/zh-CN/docs/Downloading_JSON_and_JavaScript_in_extensions)

提示：因为 JSON 语法子集相对于 JavaScript 语法子集比较有局限性，很多在 JavaScript 中可用的特性在 JSON 中就不起作用了。比如，后缀逗号在 JSON 中不支持，并且对象中的属性名在 JSON 中必须用引号括起来。请务必使用 JSON 序列化方法来生成稍后将被解析为 JSON 的字符串。

### 尽量传递数据而非代码

例如，设计为抓取网页内容的扩展，可能会在 XPath 中定义抓取规则，而不是在 JavaScript 代码中。

### 以有限权限运行代码

如果你必须执行这段代码，应考虑以更低的权限运行。此建议主要适用于扩展和 XUL 应用程序，可以使用 [Components.utils.evalInSandbox](/zh-CN/docs/Components.utils.evalInSandbox) 做到降低权限。

## 示例

### 使用 `eval`

在下面的代码中，两种包含了 `eval()` 的声明都返回了 42。第一种是对字符串 "`x + y + 1`" 求值；第二种是对字符串 "`42`" 求值。

```js
var x = 2;
var y = 39;
var z = "42";
eval("x + y + 1"); // returns 42
eval(z); // returns 42
```

### 使用 `eval` 执行一串 JavaScript 语句

下面的例子使用 `eval()` 来执行 `str` 字符串。这个字符串包含了如果 `x` 等于 5，就打开一个 Alert 对话框并对 `z` 赋值 42，否则就对 `z` 赋值 0 的 JavaScript 语句。当第二个声明被执行，`eval()` 将会令字符串被执行，并最终返回赋值给 `z` 的 42。

```js
var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42;} else z = 0;";

console.log("z is ", eval(str));
```

如果您定义了多个值，则会返回最后一个值。

```js
var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42; x = 420; } else z = 0;";

console.log("x is ", eval(str)); // z is 42  x is 420
```

### 返回值

`eval` 返回最后一个表达式的值。

```js
var str = "if ( a ) { 1 + 1; } else { 1 + 2; }";
var a = true;
var b = eval(str); // returns 2

console.log("b is : " + b);

a = false;
b = eval(str); // returns 3

console.log("b is : " + b);
```

### `eval` 中函数作为字符串被定义需要“（”和“）”作为前缀和后缀

```js
var fctStr1 = "function a() {}";
var fctStr2 = "(function a() {})";
var fct1 = eval(fctStr1); // 返回 undefined
var fct2 = eval(fctStr2); // 返回一个函数
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## Firefox 相关

- 从历史上看，`eval()` 有一个可选的第二个参数，指定上下文执行对象。这个参数是非标准的，并且明确地从 Firefox 4 中删除。请参阅 [Firefox bug 531675](https://bugzil.la/531675)。

## 参见

- [属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtension：在 content script 中使用 eval](/zh-CN/Add-ons/WebExtensions/Content_scripts#在_content_script_中使用_eval)
