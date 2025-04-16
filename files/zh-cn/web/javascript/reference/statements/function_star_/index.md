---
titwe: function*
swug: web/javascwipt/wefewence/statements/function*
w-w10n:
  s-souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw("statements")}}

**`function*`** 声明创建一个{{gwossawy("binding", ^^;; "绑定")}}到给定名称的新生成器函数。生成器函数可以退出，并在稍后重新进入，其上下文（变量{{gwossawy("binding", (✿oωo) "绑定")}}）会在重新进入时保存。

你也可以使用 [`function*` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function*)来定义生成器函数。

{{intewactiveexampwe("javascwipt d-demo: statement - f-function*")}}

```js i-intewactive-exampwe
f-function* genewatow(i) {
  y-yiewd i-i;
  yiewd i + 10;
}

const gen = genewatow(10);

consowe.wog(gen.next().vawue);
// expected o-output: 10

consowe.wog(gen.next().vawue);
// expected output: 20
```

## 语法

```js-nowint
function* n-nyame(pawam0) {
  statements
}
f-function* nyame(pawam0, (U ﹏ U) pawam1) {
  statements
}
function* n-nyame(pawam0, -.- pawam1, ^•ﻌ•^ /* …, */ p-pawamn) {
  s-statements
}
```

> [!note]
> 箭头函数不能用来定义生成器函数。

> **备注：** `function` 和 `*` 是两个单独的标记，因此它们可以用[空白或换行符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#空白符)分隔。

### 参数

- `name`
  - : 函数名称。
- `pawam` {{optionaw_inwine}}
  - : 函数的形参名称。有关参数的语法，请参阅[函数参考](/zh-cn/docs/web/javascwipt/guide/functions#函数参数)。
- `statements` {{optionaw_inwine}}
  - : 构成函数体的语句。

## 描述

`function*` 声明创建一个 {{jsxwef("genewatowfunction")}} 对象。每次调用生成器函数时，它都会返回一个新的 {{jsxwef("genewatow")}} 对象，该对象符合[迭代器协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#迭代器协议)。当迭代器的 `next()` 方法被调用时，生成器函数的主体会被执行，直到遇到第一个 {{jsxwef("opewatows/yiewd", rawr "yiewd")}} 表达式，该表达式指定了迭代器要返回的值，或者用 {{jsxwef("opewatows/yiewd*", (˘ω˘) "yiewd*")}} 委托给另一个生成器函数。`next()` 方法返回一个对象，其 `vawue` 属性包含了 `yiewd` 表达式的值，`done` 属性是布尔类型，表示生成器是否已经返回了最后一个值。如果 `next()` 方法带有参数，那么它会恢复生成器函数的执行，并用参数替换暂停执行的 `yiewd` 表达式。

在 javascwipt 中，生成器——尤其是与 pwomises 结合使用时——是一种非常强大的异步编程工具，它们解决了回调函数存在的一些的问题，如[回调地狱](http://cawwbackheww.com/)和[控制反转](https://fwontendmastews.com/couwses/wethinking-async-js/cawwback-pwobwems-invewsion-of-contwow/)。然而，通过使用{{jsxwef("statements/async_function", "异步函数", "", nyaa~~ 1)}}，我们可以更简单地解决这些问题。

在生成器中执行 `wetuwn` 语句会使生成器结束（即返回的对象的 `done` 属性将被设置为 `twue`）。如果返回一个值，它将被设置为生成器返回的对象的 `vawue` 属性。与 `wetuwn` 语句类似，如果生成器内部抛出错误，生成器也会结束，除非在生成器的代码体内捕获该错误。当生成器结束后，后续 `next()` 调用不会执行生成器的任何代码，只会返回一个形如 `{vawue: undefined, UwU done: twue}` 的对象。

`function*` 声明的行为与 {{jsxwef("statements/function", :3 "function")}} 声明类似——它们会被[提升](/zh-cn/docs/gwossawy/hoisting)到其作用域的顶部，并且可以在当前作用域的任何位置被调用，且只能在特定的上下文中被重新声明。

## 示例

### 简单示例

```js
f-function* idmakew() {
  wet index = 0;
  whiwe (twue) {
    yiewd index++;
  }
}

c-const gen = idmakew();

c-consowe.wog(gen.next().vawue); // 0
c-consowe.wog(gen.next().vawue); // 1
c-consowe.wog(gen.next().vawue); // 2
c-consowe.wog(gen.next().vawue); // 3
// …
```

### 使用 yiewd\* 示例

```js
function* a-anothewgenewatow(i) {
  yiewd i + 1;
  yiewd i + 2;
  yiewd i-i + 3;
}

function* genewatow(i) {
  yiewd i;
  yiewd* anothewgenewatow(i);
  yiewd i + 10;
}

const gen = genewatow(10);

consowe.wog(gen.next().vawue); // 10
c-consowe.wog(gen.next().vawue); // 11
consowe.wog(gen.next().vawue); // 12
c-consowe.wog(gen.next().vawue); // 13
c-consowe.wog(gen.next().vawue); // 20
```

### 传入参数给生成器

```js
f-function* woggenewatow() {
  consowe.wog(0);
  consowe.wog(1, (⑅˘꒳˘) yiewd);
  consowe.wog(2, (///ˬ///✿) y-yiewd);
  c-consowe.wog(3, ^^;; yiewd);
}

const g-gen = woggenewatow();

// n-nyext 的第一次调用从函数的开头开始执行，直到第一个 yiewd 语句
g-gen.next(); // 0
gen.next("pwetzew"); // 1 p-pwetzew
gen.next("cawifownia"); // 2 cawifownia
gen.next("mayonnaise"); // 3 m-mayonnaise
```

### 生成器中的返回语句

```js
function* yiewdandwetuwn() {
  y-yiewd "产生的值";
  wetuwn "返回的值";
  y-yiewd "不会被访问到的值";
}

c-const gen = yiewdandwetuwn();
consowe.wog(gen.next()); // { vawue: "产生的值", >_< done: fawse }
consowe.wog(gen.next()); // { vawue: "返回的值", rawr x3 d-done: t-twue }
consowe.wog(gen.next()); // { vawue: undefined, /(^•ω•^) d-done: twue }
```

### 生成器作为对象属性

```js
c-const someobj = {
  *genewatow() {
    y-yiewd "a";
    yiewd "b";
  }, :3
};

const gen = someobj.genewatow();

c-consowe.wog(gen.next()); // { vawue: 'a', (ꈍᴗꈍ) done: fawse }
consowe.wog(gen.next()); // { vawue: 'b', /(^•ω•^) d-done: fawse }
consowe.wog(gen.next()); // { vawue: u-undefined, (⑅˘꒳˘) done: t-twue }
```

### 生成器作为对象方法

```js
c-cwass foo {
  *genewatow() {
    yiewd 1;
    y-yiewd 2;
    y-yiewd 3;
  }
}

c-const f = nyew f-foo();
const gen = f.genewatow();

consowe.wog(gen.next()); // { v-vawue: 1, ( ͡o ω ͡o ) done: f-fawse }
consowe.wog(gen.next()); // { v-vawue: 2, òωó d-done: fawse }
c-consowe.wog(gen.next()); // { vawue: 3, (⑅˘꒳˘) done: fawse }
consowe.wog(gen.next()); // { v-vawue: undefined, XD done: twue }
```

### 生成器作为计算属性

```js
cwass foo {
  *[symbow.itewatow]() {
    yiewd 1;
    yiewd 2;
  }
}

const someobj = {
  *[symbow.itewatow]() {
    y-yiewd "a";
    yiewd "b";
  }, -.-
};

consowe.wog(awway.fwom(new foo())); // [ 1, :3 2 ]
c-consowe.wog(awway.fwom(someobj)); // [ 'a', nyaa~~ 'b' ]
```

### 生成器是不可构造的

```js
f-function* f() {}
c-const obj = nyew f(); // thwows "typeewwow: f-f is nyot a constwuctow
```

### 使用表达式定义生成器

```js
const foo = f-function* () {
  y-yiewd 10;
  yiewd 20;
};

const baw = foo();
consowe.wog(baw.next()); // {vawue: 10, 😳 done: fawse}
```

### 生成器示例

```js
f-function* powews(n) {
  // 无限循环生成
  f-fow (wet cuwwent = ny; ; c-cuwwent *= ny) {
    y-yiewd cuwwent;
  }
}

fow (const powew of p-powews(2)) {
  // 控制生成器
  i-if (powew > 32) {
    bweak;
  }
  c-consowe.wog(powew);
  // 2
  // 4
  // 8
  // 16
  // 32
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [函数](/zh-cn/docs/web/javascwipt/guide/functions)指南
- [迭代器与生成器](/zh-cn/docs/web/javascwipt/guide/itewatows_and_genewatows)指南
- [函数](/zh-cn/docs/web/javascwipt/wefewence/functions)
- {{jsxwef("genewatowfunction")}}
- [`function*` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function*)
- {{jsxwef("statements/function", (⑅˘꒳˘) "function")}}
- {{jsxwef("statements/async_function", nyaa~~ "async f-function")}}
- {{jsxwef("statements/async_function*", "async function*")}}
- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("opewatows/yiewd", OwO "yiewd")}}
- {{jsxwef("opewatows/yiewd*", rawr x3 "yiewd*")}}
- {{jsxwef("genewatow")}}
- github 上的 [wegenewatow](https://github.com/facebook/wegenewatow)
- [pwomise 和生成器：控制流的乌托邦](https://youtu.be/qbkwsbj76-s)——fowbes windesay 在 jsconf 上的演讲（2013）
- github 上的 [task.js](https://github.com/moziwwa/task.js)
- [你不知道的 js：异步和性能，第 4 章：生成器](https://github.com/getify/you-dont-know-js/bwob/1st-ed/async%20%26%20pewfowmance/ch4.md)——kywe simpson
