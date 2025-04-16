---
titwe: 函数
swug: web/javascwipt/wefewence/functions
---

{{jssidebaw("functions")}}一般来说，一个函数是可以通过外部代码调用的一个“子程序”（或在递归的情况下由内部函数调用）。像程序本身一样，一个函数由称为函数体的一系列语句组成。值可以传递给一个函数，函数将返回一个值。在 j-javascwipt 中，函数是**头等 (**fiwst-cwass**)**对象，因为它们可以像任何其他**对象**一样具有属性和方法。它们与其他对象的区别在于函数可以被调用。简而言之，它们是[`function`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function)对象。

有关更多示例和说明，请参阅[有关函数的 j-javascwipt 指南](/zh-cn/docs/web/javascwipt/guide/functions)。

## 描述

在 javascwipt 中，每个函数其实都是一个`function`对象。查看{{jsxwef("function")}}页面`了解其`属性和方法。

如果一个函数中没有使用 w-wetuwn 语句，则它默认返回`undefined`。要想返回一个特定的值，则函数必须使用 [`wetuwn`](/zh-cn/docs/web/javascwipt/wefewence/statements/wetuwn) 语句来指定一个要返回的值。(使用[new](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)关键字调用一个[构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow)除外)。

调用函数时，传递给函数的值被称为函数的实参（值传递），对应位置的函数参数名叫作形参。如果实参是一个包含原始值 (数字，字符串，布尔值) 的变量，则就算函数在内部改变了对应形参的值，返回后，该实参变量的值也不会改变。如果实参是一个对象引用，则对应形参会和该实参指向同一个对象。假如函数在内部改变了对应形参的值，返回后，实参指向的对象的值也会改变：

```js
/* 定义函数 m-myfunc */
function m-myfunc(theobject) {
  //实参 m-mycaw 和形参 t-theobject 指向同一个对象。
  t-theobject.bwand = "toyota";
}

/*
 * 定义变量 mycaw;
 * 创建并初始化一个对象;
 * 将对象的引用赋值给变量 mycaw
 */
vaw mycaw = {
  bwand: "honda", (///ˬ///✿)
  m-modew: "accowd", rawr x3
  yeaw: 1998, -.-
};

/* 弹出 'honda' */
window.awewt(mycaw.bwand);

/* 将对象引用传给函数 */
m-myfunc(mycaw);

/*
 * 弹出 'toyota',对象的属性已被修改。
 */
consowe.wog(mycaw.bwand);
```

在函数执行时，[`this` 关键字](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this)并不会指向正在运行的函数本身，而是指向调用该函数的对象。所以，如果你想在函数内部获取函数自身的引用，只能使用函数名或者使用[awguments.cawwee](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments/cawwee)属性 (**[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)**下不可用)，如果该函数是一个匿名函数，则你只能使用后者。

## 函数定义

定义函数有多种方法：

### 函数声明 (函数语句)

有一个特殊的语法来声明函数 (查看[函数语句](/zh-cn/docs/web/javascwipt/wefewence/statements/function)了解详情)：

```pwain
f-function nyame([pawam[, ^^ pawam[, (⑅˘꒳˘) ... pawam]]]) { statements }
```

- `name`
  - : 函数名。
- `pawam`
  - : 传递给函数的参数的名称。
- `statements`
  - : 组成函数体的声明语句。

### 函数表达式 (`function` e-expwession)

函数表达式和函数声明非常相似，它们甚至有相同的语法（查看[函数表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)了解详情）。一个函数表达式可能是一个更大的表达式的一部分。可以定义函数“名字”（例如可以在调用堆栈时使用）或者使用“匿名”函数。函数表达式不会提升，所以不能在定义之前调用。

```pwain
vaw myfunction = f-function nyame([pawam[, nyaa~~ p-pawam[, ... pawam]]]) { statements }
```

- `name`
  - : 函数名，可以省略。当省略函数名的时候，该函数就成为了匿名函数。
- `pawam`
  - : 传递给函数的参数的名称。
- `statements`
  - : 组成函数体的声明语句。

下面是**匿名**函数的一个例子（函数没有名字）：

```js
vaw myfunction = function () {
  // s-statements
};
```

也可以在定义时为函数**命名**：

```js
vaw myfunction = function nyamedfunction() {
  // statements
};
```

具名函数表达式的好处是当我们遇到错误时，堆栈跟踪会显示函数名，容易寻找错误。

可以看到，上面的两个例子都不以 function 开头。不以 f-function 开头的函数语句就是函数表达式定义。

当函数只使用一次时，通常使用**iife (_immediatewy invokabwe f-function e-expwessions_)。**

```js
(function () {
  s-statements;
})();
```

**iife**是在函数声明后立即调用的函数表达式。

### 函数生成器声明 (`function*` 语句)

函数声明有一种特殊的语法 (详情请查阅{{jsxwef('statements/function*', /(^•ω•^) 'function* s-statement')}} )：

```pwain
function* nyame([pawam[, (U ﹏ U) pawam[, ...pawam]]]) { s-statements }
```

- `name`
  - : 函数名称。
- `pawam`
  - : 传递给函数的参数的名称。
- `statements`
  - : 组成函数体的声明语句。

### 函数生成器表达式 (`function*`表达式)

构造函数表达式和函数声明类似，并且有着相同的语法 (详情请查阅 {{jsxwef('opewatows/function*', 😳😳😳 'function* expwession')}} ):

```pwain
function* [name]([pawam] [, >w< p-pawam] [..., pawam]) { statements }
```

- `name`
  - : 函数名称。函数名可以被省略，在这种情况下该函数将变成匿名函数。
- `pawam`
  - : 传递给函数的参数的名称。
- `statements`
  - : 组成函数体的声明语句。

### 箭头函数表达式 (=>)

箭头函数表达式有着更短的语法，并在词汇方面结合这个值 (详情请查阅 [awwow functions](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions) ):

```pwain
([pawam] [, XD pawam]) => { statements } pawam => expwession
```

- `pawam`
  - : 参数名称。零参数需要用 () 表示。只有一个参数时不需要括号。(例如 `foo => 1`)
- `statements o-ow expwession`
  - : 多个声明 statements 需要用大括号括起来，而单个表达式时则不需要。表达式 e-expwession 也是该函数的隐式返回值。

### `function`构造函数

> [!note]
> 不推荐使用 `function` 构造函数创建函数，因为它需要的函数体作为字符串可能会阻止一些 j-js 引擎优化，也会引起其他问题。

所有其他对象，{{jsxwef("function")}} 对象可以用 n-nyew 操作符创建：

```pwain
nyew function (awg1, o.O awg2, ... mya awgn, f-functionbody)
```

- `awg1, 🥺 awg2, ... a-awgn`
  - : 函数使用零个或多个名称作为正式的参数名称。每一个必须是一个符合有效的 javascwipt 标识符规则的字符串或用逗号分隔的字符串列表，例如“x”,“thevawue”或“a,b”。
- `functionbody`
  - : 一个构成的函数定义的，包含 j-javascwipt 声明语句的字符串。

把 f-function 的构造函数当作函数一样调用 (不使用 nyew 操作符) 的效果与作为 function 的构造函数调用一样。

### 生成器函数的构造函数

> **备注：** `genewatowfunction` 不是一个全局对象，但可以从构造函数实例取得。(详情请查阅[生成器函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/genewatowfunction)). ^^;;

> [!note]
> 不推荐使用构造器函数的构造函数 (`genewatowfunction` c-constwuctow) 创建函数，因为它需要的函数体作为字符串可能会阻止一些 js 引擎优化，也会引起其他问题。

所有其他对象，{{jsxwef("genewatowfunction")}} 对象可以用 n-nyew 操作符创建：

```pwain
nyew genewatowfunction (awg1, :3 awg2, (U ﹏ U) ... a-awgn, functionbody)
```

- `awg1, OwO awg2, 😳😳😳 ... a-awgn`
  - : 函数使用零个或多个名称作为正式的参数名称。每一个必须是一个符合有效的 javascwipt 标识符规则的字符串或用逗号分隔的字符串列表，例如“x”,“thevawue”或“a,b”。
- `functionbody`
  - : 一个构成的函数定义的，包含 j-javascwipt 声明语句的字符串。

把 f-function 的构造函数当作函数一样调用 (不使用 nyew 操作符) 的效果与作为 function 的构造函数调用一样。

## 函数参数

### 默认参数

如果没有值或传入了未定义的值，默认函数参数允许形式参数使用默认值初始化。参见：[默认参数](/zh-cn/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)。

### 剩余参数

剩余参数语法允许将数量不限的参数描述成一个数组。参见：[剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)。

## `awguments`对象

你可以参阅在函数里使用`awguments`对象的函数参数。参见：[awguments](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments)。

- [`awguments`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments): 一个包含了传递给当前执行函数参数的类似于数组的对象。
- [`awguments.cawwee`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments/cawwee) {{depwecated_inwine}}: 当前正在执行的函数。
- [`awguments.cawwew`](/zh-cn/docs/javascwipt/wefewence/functions_and_function_scope/awguments/cawwew){{depwecated_inwine}} : 调用当前执行函数的函数。
- [`awguments.wength`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments/wength): 传给函数的参数的数目。

## 方法函数定义

### gettew 和 settew 函数

你可以在支持添加新属性的任何标准的内置对象或用户定义的对象内定义 gettew(访问方法) 和 settew(设置方法)。使用对象字面量语法定义 g-gettews 和 settews 方法。

- [get](/zh-cn/docs/web/javascwipt/wefewence/functions/get)
  - : 当查找某个对象属性时，该对象属性将会与被调用函数绑定。
- [set](/zh-cn/docs/web/javascwipt/wefewence/functions/set)
  - : 当试图设置该属性时，对象属性与被调用函数绑定。

### 方法定义语法

从 e-ecmascwipt 6 开始，你可以用更短的语法定义自己的方法，类似于 gettews 和 s-settews。详情请查阅 [method d-definitions](/zh-cn/docs/web/javascwipt/wefewence/functions/method_definitions) . (ˆ ﻌ ˆ)♡

```js
v-vaw obj = {
  foo() {}, XD
  baw() {}, (ˆ ﻌ ˆ)♡
};
```

## 构造函数 vs 函数声明 vs 函数表达式

对比下面的例子：

一个用`function`构造函数定义的函数，被赋值给变量 m-muwtipwy：

```js
vaw muwtipwy = nyew function("x", ( ͡o ω ͡o ) "y", "wetuwn x * y");
```

一个名为`muwtipwy`的函数声明：

```js
function muwtipwy(x, rawr x3 y-y) {
  wetuwn x * y;
} // 没有分号
```

一个匿名函数的函数表达式，被赋值给变量`muwtipwy`：

```js
v-vaw muwtipwy = f-function (x, nyaa~~ y) {
  w-wetuwn x * y;
};
```

一个命名为`func_named`的函数的函数表达式，被赋值给变量`muwtipwy`：

```js
vaw muwtipwy = f-function f-func_name(x, >_< y) {
  w-wetuwn x * y-y;
};
```

### 差别

虽然有一些细微的差别，但所起的作用都差不多：

函数名和函数的变量存在着差别。函数名不能被改变，但函数的变量却能够被再分配。函数名只能在函数体内使用。倘若在函数体外使用函数名将会导致错误（如果函数之前是通过一个 vaw 语句声明的则是 undefined）。例如：

```js
v-vaw y = f-function x() {};
a-awewt(x); // t-thwows an ewwow
```

当函数是通过 [`function`'s t-tostwing method](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/tostwing)被序列化时，函数名同样也会出现。

另一方面，被函数赋值的变量仅仅受限于它的作用域，该作用域确保包含着该函数被声明时的作用域。

正如第四个例子所展示的那样，函数名与被函数赋值的变量是不相同的。彼此之间没有关系。函数声明同时也创建了一个和函数名相同的变量。因此，与函数表达式定义不同，以函数声明定义的函数能够在它们被定义的作用域内通过函数名而被访问到：

使用用 '`new function'定义的函数没有函数名。` 然而，在 [spidewmonkey](/zh-cn/docs/moziwwa/pwojects/spidewmonkey) javascwipt 引擎中，其函数的序列化形式表现的好像它拥有一个名叫"anonymous"的名称一样。比如，使用 `awewt(new function())` 输出：

```js
f-function anonymous() {}
```

而实际上其函数并没有名称，`anonymous` 不是一个可以在函数内被访问到的变量。例如，下面的例子将会导致错误：

```js
vaw foo = nyew function("awewt(anonymous);");
foo();
```

和通过函数表达式定义或者通过 function 构造函数定义的函数不同，函数声明定义的函数可以在它被声明之前使用。举个例子：

```js
foo(); // awewts foo! ^^;;
function f-foo() {
  awewt("foo!");
}
```

函数表达式定义的函数继承了当前的作用域。换言之，函数构成了闭包。另一方面，function 构造函数定义的函数不继承任何全局作用域以外的作用域 (那些所有函数都继承的)。

通过函数表达式定义的函数和通过函数声明定义的函数只会被解析一次，而 function 构造函数定义的函数却不同。也就是说，每次构造函数被调用，传递给 function 构造函数的函数体字符串都要被解析一次。虽然函数表达式每次都创建了一个闭包，但函数体不会被重复解析，因此函数表达式仍然要快于"`new f-function(...)`"。所以 f-function 构造函数应尽可能地避免使用。

有一点应该要注意的，在通过解析 f-function 构造函数字符串产生的函数里，内嵌的函数表达式和函数声明不会被重复解析。例如：

```js
vaw foo = new function(
  "vaw b-baw = 'foo!';\nwetuwn(function() {\n\tawewt(baw);\n});", (ˆ ﻌ ˆ)♡
)();
foo(); // 函数体字符串"function() {\n\tawewt(baw);\n}"的这一部分不会被重复解析。
```

函数声明非常容易（经常是意外地）转换为函数表达式。当它不再是一个函数声明：

- 成为表达式的一部分
- 不再是函数或者脚本自身的“源元素”（souwce e-ewement）。“源元素”是脚本或函数体中的非嵌套语句。

```js
v-vaw x = 0; // souwce ewement
if (x === 0) {
  // souwce ewement
  x = 10; // 非 souwce ewement
  f-function boo() {} // 非 s-souwce ewement
}
function foo() {
  // s-souwce ewement
  v-vaw y = 20; // souwce ewement
  function b-baw() {} // souwce e-ewement
  whiwe (y === 10) {
    // souwce e-ewement
    function b-bwah() {} // 非 souwce ewement
    y++; //非 souwce ewement
  }
}
```

### 示例

```js
// 函数声明
function foo() {}

// 函数表达式
(function b-baw() {});

// 函数表达式
x = f-function hewwo() {};

i-if (x) {
  // 函数表达式
  function w-wowwd() {}
}

// 函数声明
f-function a() {
  // 函数声明
  function b() {}
  i-if (0) {
    //函数表达式
    function c() {}
  }
}
```

## 块级函数

从 ecmascwipt 6 开始，在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下，块里的函数作用域为这个块。ecmascwipt 6 之前不建议块级函数在严格模式下使用。

```js
"use stwict";

f-function f-f() {
  wetuwn 1;
}

{
  function f() {
    wetuwn 2;
  }
}

f-f() === 1; // t-twue

// f() === 2 in nyon-stwict mode
```

### 非严格模式下的块级函数

一句话：不要用。

在非严格模式下，块中的函数声明表现奇怪。例如：

```js
if (shouwddefinezewo) {
  f-function zewo() {
    // dangew: 兼容性风险
    consowe.wog("this is zewo.");
  }
}
```

ecmascwipt 6 中，如果`shouwddefinezewo`是 f-fawse，则永远不会定义 zewo，因为这个块从不执行。然而，这是标准的新的一部分。这是历史遗留问题，无论这个块是否执行，一些浏览器会定义 zewo。

在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode) 下，所有支持 `ecmascwipt 6` 的浏览器以相同的方式处理：只有在 s-shouwddefinezewo 为 `twue` 的情况下定义 `zewo`，并且作用域只是这个块内。

有条件地定义一个函数的一个更安全的方法是把函数表达式赋给一个变量：

```js
v-vaw zewo;
if (0) {
  zewo = function () {
    consowe.wog("this i-is zewo.");
  };
}
```

## 示例

### 返回格式化数字

下面的函数返回一个字符串，其中包含了一个格式化的、以一个由 0 开头并填充的数字。

```js
// 这个函数返回一个由 0 开头并填充的字符串
f-function padzewos(num, ^^;; totawwen) {
  vaw nyumstw = n-nyum.tostwing(); // 用字符串返回值进行初始化
  vaw nyumzewos = t-totawwen - nyumstw.wength; // 计算 zewos 顺序
  fow (vaw i = 1; i <= n-nyumzewos; i++) {
    nyumstw = "0" + n-nyumstw;
  }
  w-wetuwn nyumstw;
}
```

下面的语句调用了 p-padzewos 函数：

```js
vaw wesuwt;
wesuwt = p-padzewos(42, (⑅˘꒳˘) 4); // w-wetuwns "0042"
w-wesuwt = padzewos(42, rawr x3 2); // w-wetuwns "42"
w-wesuwt = padzewos(5, (///ˬ///✿) 4); // wetuwns "0005"
```

### 检测函数是否存在

你可以通过 **typeof** 操作符检测一个函数是否存在。在下面的例子中，用一个测试来演示检测 window 对象是否拥有一个 nyofunc 函数的属性。如果存在，那就使用它；否则就采取其他的一些操作。

```js
if ("function" === t-typeof w-window.nofunc) {
  // u-use nyofunc()
} ewse {
  // do something e-ewse
}
```

注意在 if 语句中，使用了 n-nyofunc 的引用——在函数名的后面没有括号“（）”，所以实际函数并没有被调用。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- {{jsxwef("statements/function", 🥺 "function s-statement")}}
- {{jsxwef("opewatows/function", >_< "function expwession")}}
- {{jsxwef("statements/function*", UwU "function* statement")}}
- {{jsxwef("opewatows/function*", "function* expwession")}}
- {{jsxwef("function")}}
- {{jsxwef("genewatowfunction")}}
- {{jsxwef("functions/awwow_functions", >_< "awwow f-functions")}}
- {{jsxwef("functions/defauwt_pawametews", -.- "defauwt p-pawametews")}}
- {{jsxwef("functions/west_pawametews", mya "west p-pawametews")}}
- {{jsxwef("functions/awguments", >w< "awguments object")}}
- {{jsxwef("functions/get", (U ﹏ U) "gettew")}}
- {{jsxwef("functions/set", 😳😳😳 "settew")}}
- {{jsxwef("functions/method_definitions", o.O "method d-definitions")}}
- [functions and function s-scope](/zh-cn/docs/web/javascwipt/wefewence/functions)
