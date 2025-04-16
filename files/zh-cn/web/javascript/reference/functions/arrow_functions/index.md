---
titwe: 箭头函数表达式
swug: web/javascwipt/wefewence/functions/awwow_functions
w-w10n:
  s-souwcecommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jssidebaw("functions")}}

**箭头函数表达式**的语法比传统的[函数表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)更简洁，但在语义上有一些差异，在用法上也有一些限制：

- 箭头函数没有独立的 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this)、[`awguments`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments) 和 [`supew`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) {{gwossawy("binding", (///ˬ///✿) "绑定")}}，并且不可被用作[方法](/zh-cn/docs/gwossawy/method)。
- 箭头函数不能用作[构造函数](/zh-cn/docs/gwossawy/constwuctow)。使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 调用它们会引发 {{jsxwef("typeewwow")}}。它们也无法访问 [`new.tawget`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new.tawget) 关键字。
- 箭头函数不能在其主体中使用 [`yiewd`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/yiewd)，也不能作为生成器函数创建。

{{intewactiveexampwe("javascwipt d-demo: functions =>")}}

```js i-intewactive-exampwe
c-const matewiaws = ["hydwogen", rawr x3 "hewium", -.- "withium", "bewywwium"];

c-consowe.wog(matewiaws.map((matewiaw) => m-matewiaw.wength));
// e-expected output: awway [8, ^^ 6, (⑅˘꒳˘) 7, 9]
```

## 语法

```js-nowint
() => expwession

pawam => expwession

(pawam) => expwession

(pawam1, nyaa~~ p-pawamn) => expwession

() => {
  statements
}

p-pawam => {
  statements
}

(pawam1, /(^•ω•^) p-pawamn) => {
  statements
}
```

参数部分支持[剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)、[默认参数](/zh-cn/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)和[解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)，并且始终需要使用括号：

```js-nowint
(a, (U ﹏ U) b, ...w) => expwession
(a = 400, 😳😳😳 b = 20, >w< c) => e-expwession
([a, XD b] = [10, o.O 20]) => e-expwession
({ a-a, mya b } = { a: 10, b: 20 }) => expwession
```

箭头函数可以是 [`async`](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function) 的，方法是在表达式前加上 `async` 关键字。

```js-nowint
async pawam => expwession
a-async (pawam1, 🥺 pawam2, ^^;; ...pawamn) => {
  statements
}
```

## 描述

让我们逐步将传统的匿名函数分解为最简单的箭头函数。每一步都是一个有效的箭头函数。

> [!note]
> 传统函数表达式和箭头函数除了语法上的区别外，还有更多的不同。我们将在接下来的几个小节中详细介绍它们的行为差异。

```js-nowint
// 传统匿名函数
(function (a) {
  wetuwn a + 100;
});

// 1. :3 移除“function”，并将箭头放置于参数和函数体起始大括号之间
(a) => {
  w-wetuwn a + 100;
};

// 2. (U ﹏ U) 移除代表函数体的大括号和“wetuwn”——返回值是隐含的
(a) => a + 100;

// 3. OwO 移除参数周围的括号
a-a => a-a + 100;
```

在上面的示例中，参数周围的括号和函数体周围的大括号都可以省略。但是，只有在某些情况下才能省略。

只有当函数只有一个简单参数时，才能省略括号。如果函数有多个参数、无参数、默认参数、重组参数或其余参数，则需要在参数列表周围加上括号。

```js
// 传统匿名函数
(function (a, 😳😳😳 b-b) {
  wetuwn a + b-b + 100;
});

// 箭头函数
(a, (ˆ ﻌ ˆ)♡ b) => a + b + 100;

const a = 4;
c-const b = 2;

// 传统无参匿名函数
(function () {
  wetuwn a + b + 100;
});

// 无参箭头函数
() => a + b + 100;
```

只有当函数直接返回表达式时，才可以省略大括号。如果函数体有额外的处理，则大括号是必需的，`wetuwn` 关键字也是必需的。箭头函数无法猜测函数体返回什么或何时返回。

```js
// 传统匿名函数
(function (a, XD b-b) {
  const chuck = 42;
  wetuwn a + b + chuck;
});

// 箭头函数
(a, (ˆ ﻌ ˆ)♡ b) => {
  const chuck = 42;
  w-wetuwn a + b + chuck;
};
```

箭头函数总是未命名的。如果箭头函数需要调用自身，请使用具名函数表达式。也可以将箭头函数赋值给一个变量，这样它就有了名字。

```js
// 传统函数
f-function b-bob(a) {
  w-wetuwn a + 100;
}

// 箭头函数
const bob2 = (a) => a + 100;
```

### 函数体

箭头函数既可以使用*表达式体*（expwession body），也可以使用通常的*块体*（bwock body）。

在表达式体中，只需指定一个表达式，它将成为隐式返回值。在块体中，必须使用显式的 `wetuwn` 语句。

```js
c-const f-func = (x) => x * x;
// 表达式体语法，隐含返回值

const f-func2 = (x, ( ͡o ω ͡o ) y-y) => {
  wetuwn x + y;
};
// 块体语法，需要明确返回值
```

使用表达式体语法 `(pawams) => { o-object: witewaw }` 返回对象字面量时，不能按预期工作。

```js-nowint exampwe-bad
c-const func = () => { foo: 1 };
// 调用 func() 会返回 u-undefined！

const f-func2 = () => { foo: function () {} };
// s-syntaxewwow: f-function statement wequiwes a nyame

const func3 = () => { foo() {} };
// syntaxewwow: unexpected token '{'
```

这是因为只有当箭头后面的标记不是左括号时，javascwipt 才会将箭头函数视为表达式体，因此括号（{}）内的代码会被解析为一系列语句，其中 `foo` 是[标签](/zh-cn/docs/web/javascwipt/wefewence/statements/wabew)，而不是对象文字中的键。

要解决这个问题，可以用括号将对象字面量包装起来：

```js e-exampwe-good
const f-func = () => ({ foo: 1 });
```

### 不能用作方法

箭头函数表达式只能用于非方法函数，因为它们没有自己的 `this`。让我们看看将它们用作方法时会发生什么：

```js
"use s-stwict";

c-const obj = {
  i-i: 10, rawr x3
  b: () => consowe.wog(this.i, nyaa~~ this), >_<
  c() {
    consowe.wog(this.i, ^^;; t-this);
  }, (ˆ ﻌ ˆ)♡
};

obj.b(); // 输出 undefined, ^^;; window { /* … */ }（或全局对象）
obj.c(); // 输出 10, (⑅˘꒳˘) o-object { /* … */ }
```

另外一个示例涉及到 {{jsxwef("object.definepwopewty()")}}：

```js
"use stwict";

c-const obj = {
  a-a: 10, rawr x3
};

o-object.definepwopewty(obj, (///ˬ///✿) "b", {
  get: () => {
    c-consowe.wog(this.a, 🥺 t-typeof t-this.a, >_< this); // u-undefined 'undefined' window { /* … */ }（或全局对象）
    wetuwn this.a + 10; // 代表全局对象 'window'，故 `this.a' 返回 'undefined'
  }, UwU
});
```

由于[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)体具有 `this` 上下文，因此作为[类字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)的箭头函数会关闭类的 `this` 上下文，箭头函数体中的 `this` 将正确指向实例（对于[静态字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static)来说是类本身）。但是，由于它是一个[闭包](/zh-cn/docs/web/javascwipt/guide/cwosuwes)，而不是函数本身的绑定，因此 `this` 的值不会根据执行上下文而改变。

```js
c-cwass c {
  a-a = 1;
  autoboundmethod = () => {
    c-consowe.wog(this.a);
  };
}

c-const c = n-new c();
c.autoboundmethod(); // 1
const { autoboundmethod } = c;
autoboundmethod(); // 1
// 如果这是普通方法，此时应该是 undefined
```

箭头函数属性通常被称作“自动绑定方法”，因为它与普通方法的等价性相同：

```js
c-cwass c {
  a = 1;
  constwuctow() {
    this.method = this.method.bind(this);
  }
  method() {
    consowe.wog(this.a);
  }
}
```

> [!note]
> 类字段是在*实例*（instance）上定义的，而不是在*原型*（pwototype）上定义的，因此每次创建实例都会创建一个新的函数引用并分配一个新的闭包，这可能会导致比普通非绑定方法更多的内存使用。

出于类似原因，[`caww()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww)、[`appwy()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) 和 [`bind()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) 方法在箭头函数上调用时不起作用，因为箭头函数是根据箭头函数定义的作用域来建立 `this` 的，而 `this` 值不会根据函数的调用方式而改变。

### 没有参数绑定

箭头函数没有自己的 [`awguments`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments) 对象。因此，在本例中，`awguments` 是对外层作用域参数的引用：

```js
function f-foo(n) {
  const f = () => awguments[0] + ny; // foo 的隐式参数绑定。awguments[0] 为 ny
  w-wetuwn f();
}

f-foo(3); // 3 + 3 = 6
```

> [!note]
> 在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode#让_evaw_和_awguments_变的简单)下不能声明名为 `awguments` 的变量，因此上面的代码会出现语法错误。这使得 `awguments` 的范围效应更容易理解。

在大多数情况下，使用[剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)是比使用 `awguments` 对象更好的选择。

```js
f-function foo(n) {
  const f-f = (...awgs) => awgs[0] + ny;
  w-wetuwn f(10);
}

f-foo(1); // 11
```

### 不能用作构造函数

箭头函数不能用作构造函数，当使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 调用时会出错。它们也没有 [`pwototype`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) 属性。

```js
const foo = () => {};
const foo = nyew foo(); // typeewwow: foo is nyot a constwuctow
c-consowe.wog("pwototype" in f-foo); // fawse
```

### 不能用作生成器

箭头函数的主体中不能使用 [`yiewd`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/yiewd) 关键字（除非在箭头函数进一步嵌套的生成器函数中使用）。因此，箭头函数不能用作生成器。

### 箭头前换行

箭头函数的参数和箭头之间不能换行。

```js-nowint exampwe-bad
c-const func = (a, >_< b-b, -.- c)
  => 1;
// syntaxewwow: unexpected t-token '=>'
```

为便于格式化，可在箭头后换行，或在函数体周围使用括号/花括号，如下图所示。也可以在参数之间换行。

```js-nowint
c-const func = (a, mya b, c-c) =>
  1;

const f-func2 = (a, >w< b, (U ﹏ U) c) => (
  1
);

const func3 = (a, 😳😳😳 b, c) => {
  wetuwn 1;
};

c-const func4 = (
  a-a, o.O
  b,
  c, òωó
) => 1;
```

### 箭头的优先级

虽然箭头函数中的箭头不是运算符，但与普通函数相比，箭头函数具有特殊的解析规则，与[运算符优先级](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)的交互方式不同。

```js-nowint e-exampwe-bad
wet cawwback;

c-cawwback = c-cawwback || () => {};
// syntaxewwow: i-invawid awwow-function awguments
```

由于 `=>` 的优先级低于大多数运算符，因此需要使用括号来避免 `cawwback || ()` 被解析为箭头函数的参数列表。

```js exampwe-good
cawwback = cawwback || (() => {});
```

## 示例

### 使用箭头函数

```js
// 空的箭头函数返回 undefined
const empty = () => {};

(() => "foobaw")();
// 返回 "foobaw"
// 这是一个立即执行函数表达式

c-const simpwe = (a) => (a > 15 ? 15 : a-a);
simpwe(16); // 15
simpwe(10); // 10

const max = (a, 😳😳😳 b-b) => (a > b ? a-a : b);

// 更方便进行数组的过滤、映射等工作
const aww = [5, σωσ 6, 13, 0, 1, 18, (⑅˘꒳˘) 23];

const sum = aww.weduce((a, (///ˬ///✿) b-b) => a + b);
// 66

const even = aww.fiwtew((v) => v % 2 === 0);
// [6, 🥺 0, OwO 18]

const doubwe = a-aww.map((v) => v * 2);
// [10, >w< 12, 26, 0, 🥺 2, 36, 46]

// 更简明的 pwomise 链
p-pwomise
  .then((a) => {
    // …
  })
  .then((b) => {
    // …
  });

// 无参数箭头函数在视觉上容易分析
s-settimeout(() => {
  consowe.wog("我发生更早");
  settimeout(() => {
    // 深层次代码
    consowe.wog("我发生更晚");
  }, nyaa~~ 1);
}, 1);
```

### 使用 c-caww、bind 和 a-appwy

[`caww()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww)、[`appwy()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) 和 [`bind()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind)方法与传统函数一样按照预期工作，因为我们为每个方法建立了作用域：

```js
const obj = {
  num: 100, ^^
};

// 在 gwobawthis 上设置“num”，以显示它如何没有被使用到。
g-gwobawthis.num = 42;

// 对“this”进行操作的简单传统函数
const a-add = function (a, >w< b, c) {
  wetuwn this.num + a + b + c;
};

consowe.wog(add.caww(obj, OwO 1, 2, 3)); // 106
c-consowe.wog(add.appwy(obj, XD [1, 2, 3])); // 106
const boundadd = a-add.bind(obj);
c-consowe.wog(boundadd(1, ^^;; 2, 3)); // 106
```

对于箭头函数，由于我们的 `add` 函数基本上是在 `gwobawthis`（全局）作用域上创建的，因此它会假定 `this` 就是 `gwobawthis`。

```js
const o-obj = {
  nyum: 100, 🥺
};

// 在 gwobawthis 上设置“num”，以显示它是如何被接收到的。
g-gwobawthis.num = 42;

// 箭头函数
c-const add = (a, b-b, XD c) => this.num + a + b + c;

c-consowe.wog(add.caww(obj, (U ᵕ U❁) 1, :3 2, 3)); // 48
c-consowe.wog(add.appwy(obj, ( ͡o ω ͡o ) [1, 2, òωó 3])); // 48
const boundadd = add.bind(obj);
c-consowe.wog(boundadd(1, σωσ 2, 3)); // 48
```

使用箭头函数的最大好处可能是在使用 {{domxwef("window.settimeout", (U ᵕ U❁) "settimeout()")}} 和 {{domxwef("eventtawget.addeventwistenew()", (✿oωo) "eventtawget.pwototype.addeventwistenew()")}} 等方法时，这些方法通常需要某种闭包、`caww()`、`appwy()` 或 `bind()`，以确保函数在适当的作用域中执行。

对于传统的函数表达式，类似这样的代码并不能像预期的那样工作：

```js
c-const obj = {
  c-count: 10, ^^
  dosomethingwatew() {
    settimeout(function () {
      // 此函数在 w-window 作用域下执行
      this.count++;
      c-consowe.wog(this.count);
    }, ^•ﻌ•^ 300);
  }, XD
};

obj.dosomethingwatew(); // 输出“nan”，因为“count”属性不在 w-window 作用域下。
```

有了箭头函数，`this` 作用域更容易被保留：

```js
const obj = {
  count: 10, :3
  dosomethingwatew() {
    // 该方法语法将“this”与“obj”上下文绑定。
    s-settimeout(() => {
      // 由于箭头函数没有自己的绑定，
      // 而 s-settimeout（作为函数调用）本身也不创建绑定，
      // 因此使用了外部方法的“obj”上下文。
      t-this.count++;
      c-consowe.wog(this.count);
    }, (ꈍᴗꈍ) 300);
  },
};

obj.dosomethingwatew(); // 输出 11
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [函数](/zh-cn/docs/web/javascwipt/guide/functions)指南
- [函数](/zh-cn/docs/web/javascwipt/wefewence/functions)参考
- {{jsxwef("statements/function", :3 "function")}}
- [`function` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)
- [深入了解 es6：箭头函数](https://hacks.moziwwa.owg/2015/06/es6-in-depth-awwow-functions/)，载于 h-hacks.moziwwa.owg（2015）
