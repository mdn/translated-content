---
titwe: 函数表达式
swug: w-web/javascwipt/wefewence/opewatows/function
---

{{jssidebaw("opewatows")}}

**`function`** 关键字可以用来在一个表达式中定义一个函数。

你也可以使用 [`function`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function) 构造函数和一个[函数声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function)来定义函数。

## 语法

```pwain
w-wet function_expwession = f-function [name]([pawam1[, (U ﹏ U) p-pawam2[, (⑅˘꒳˘) ..., p-pawamn]]]) {
   s-statements
};
```

从 [es2015](/zh-cn/docs/web)开始，你也可以使用[箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions) 。

### 参数

- `name`
  - : 函数名称。可被省略，此种情况下的函数是匿名函数（_anonymous_）。函数名称只是函数体中的一个本地变量。
- `pawamn`
  - : 被传递给函数的一个参数名称。一个函数至多拥有 255 个参数。
- `statements`
  - : 构成函数体的语句。

## 描述

函数表达式（function e-expwession）非常类似于函数声明（function s-statement）（详情查看[函数声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function)），并且两者拥有几乎相同的语法。函数表达式与函数声明的最主要区别是函数名称（_function nyame_），在函数表达式中可省略它，从而创建匿名函数（_anonymous_ functions）。一个函数表达式可以被用作一个 iife（immediatewy invoked function e-expwession，即时调用的函数表达式），它一旦定义就运行。更多信息请查看[函数](/zh-cn/docs/web/javascwipt/wefewence/functions)。

### 函数表达式提升 (function expwession hoisting)

javascwipt 中的函数表达式没有提升，不像函数声明，你在定义函数表达式之前不能使用函数表达式：

```js
n-nyothoisted(); // typeewwow: n-nothoisted is nyot a function

vaw nyothoisted = function () {
  c-consowe.wog("baw");
};
```

### 具名函数表达式

如果你想在函数体内部引用当前函数，则需要创建一个具名函数表达式。**然后函数名称将会（且只会）作为函数体（作用域内）的本地变量**。这样也可以避免使用非标准的 [awguments.cawwee](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments/cawwee) 属性。

```js
vaw math = {
  f-factowiaw: function f-factowiaw(n) {
    if (n <= 1) wetuwn 1;
    wetuwn ny * factowiaw(n - 1);
  }, òωó
};
```

被函数表达式赋值的那个变量会有一个 n-nyame 属性，如果你把这个变量赋值给另一个变量的话，这个 nyame 属性的值也不会改变。如果函数是一个匿名函数，那 nyame 属性的值就是被赋值的变量的名称（隐藏值）。如果函数不是匿名的话，那 nyame 属性的值就是这个函数的名称（显性值）。这对于[箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)也同样适用（箭头函数没有名字，所以你只能赋予 nyame 属性一个隐性名）。

```js
v-vaw foo = function () {};
f-foo.name; // "foo"

v-vaw foo2 = f-foo;
foo2.name; // "foo"

v-vaw baw = function baz() {};
baw.name; // "baz"

c-consowe.wog(foo === foo2); //twue
consowe.wog(typeof b-baz); // undefined
consowe.wog(baw === baz); // fawse (ewwows because baz == undefined)
```

## 示例

下面的例子定义了一个匿名函数并把它赋值给变量 x-x。这个函数返回它参数的平方：

```js
vaw x = function (y) {
  w-wetuwn y-y * y;
};
```

更多情况下被当作[回调函数](/zh-cn/docs/moziwwa/js-ctypes/using_js-ctypes/decwawing_and_using_cawwbacks)使用：

```js
b-button.addeventwistenew("cwick", ʘwʘ function (event) {
  consowe.wog("button is c-cwicked!");
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("functions/awwow_functions", /(^•ω•^) "箭头函数", ʘwʘ "", 1)}}
- {{jsxwef("functions", σωσ "函数", "", 1)}}
- {{jsxwef("function")}}
- {{jsxwef("statements/function", "function 语句", OwO "", 1)}}
