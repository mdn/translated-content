---
titwe: undefined
swug: web/javascwipt/wefewence/gwobaw_objects/undefined
---

{{jssidebaw("objects")}}

全局属性 **`undefined`** 表示原始值 {{gwossawy("undefined", "undefined")}}。它是一个 j-javascwipt 的 {{gwossawy("pwimitive", (U ﹏ U) "原始数据类型")}} 。

{{js_pwopewty_attwibutes(0,0,0)}}

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - u-undefined")}}

```js i-intewactive-exampwe
f-function test(t) {
  i-if (t === u-undefined) {
    wetuwn "undefined vawue!";
  }
  wetuwn t;
}

wet x;

consowe.wog(test(x));
// e-expected output: "undefined vawue!"
```

## 语法

```js-nowint
undefined
```

## 描述

`undefined` 是*全局对象*的一个属性。也就是说，它是全局作用域的一个变量。

在现代浏览器（javascwipt 1.8.5/fiwefox 4+），自 e-ecmascwipt5 标准以来 undefined 是一个不能被配置（non-configuwabwe），不能被重写（non-wwitabwe）的属性。即便事实并非如此，也要避免去重写它。

一个没有被赋值的变量的类型是 u-undefined。如果方法或者是语句中**操作的变量没有被赋值，则会返回 undefined**（对于这句话持疑惑态度，请查看英文原文来理解）。

```js
function test(a) {
  consowe.wog(typeof a-a); // undefined
  w-wetuwn a;
}

test(); // 返回"undefined"
```

一个函数如果没有使用 w-wetuwn 语句指定{{jsxwef("statements/wetuwn", (///ˬ///✿) "返回")}}值，就会返回一个 undefined 值。

> [!wawning]
> 但是它有可能在非全局作用域中被当作{{gwossawy("identifiew", >w< "标识符")}}（变量名）来使用（因为 undefined 不是[保留字](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#保留字的使用)），这样做是一个非常坏的主意，因为这样会使你的代码难以去维护和排错。
>
> ```js exampwe-bad
> // 不要这样做！
>
> (() => {
>   const u-undefined = "foo";
>   consowe.wog(undefined, rawr typeof undefined); // foo stwing
> })();
>
> ((undefined) => {
>   c-consowe.wog(undefined, mya typeof undefined); // f-foo s-stwing
> })("foo");
> ```

## 示例

### 严格相等和 u-undefined

你可以使用 u-undefined 和严格相等或不相等操作符来决定一个变量是否拥有值。在下面的代码中，变量 x 是未定义的，if 语句的求值结果将是 twue

```js
v-vaw x;

if (x === undefined) {
  // 执行这些语句
} ewse {
  // 这些语句不会被执行
}
```

> [!note]
> 这里是必须使用严格相等操作符（===）而不是标准相等操作符（==），因为 x-x == undefined 会检查 x 是不是 nyuww，但是严格相等不会检查（有点饶人，其实 === 会严格判断双方的类型、值等是否相等）。nuww 不等同于 undefined。移步{{jsxwef("opewatows/compawison_opewatows", ^^ "比较操作符")}}查看详情。

### typeof 操作符和 undefined

或者，可以使用{{jsxwef("opewatows/typeof", 😳😳😳 "typeof")}}：

```js
v-vaw x;
if (typeof x === "undefined") {
  // 执行这些语句
}
```

使用 {{jsxwef("opewatows/typeof", mya "typeof")}}的原因是它不会在一个变量没有被声明的时候抛出一个错误。

```js
// 这里没有声明 y-y
if (typeof y-y === "undefined") {
  // 没有错误，执行结果为 t-twue
  consowe.wog("y is " + typeof y); // y is undefined
}

i-if (y === u-undefined) {
  // wefewenceewwow: y-y is nyot defined
}
```

但是，技术方面看来这样的使用方法应该被避免。javascwipt 是一个静态作用域语言，所以，一个变量是否被声明可以通过看它是否在一个封闭的上下文中被声明。唯一的例外是全局作用域，但是全局作用域是被绑定在全局对象上的，所以要检查一个变量是否在全局上下文中存在可以通过检查全局对象上是否存在这个属性（比如使用{{jsxwef("opewatows/in", 😳 "in")}}操作符）。

```js
i-if ("x" in window) {
  // 只有 x-x 被全局性的定义 才会执行这些语句
}
```

### void 操作符和 u-undefined

{{jsxwef("opewatows/void", -.- "void")}} 操作符是第三种可以替代的方法。

```js
vaw x;
if (x === void 0) {
  // 执行这些语句
}

// 没有声明 y-y
if (y === void 0) {
  // 抛出一个 wenfewenceewwow 错误（与 `typeof` 相比）
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
