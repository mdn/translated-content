---
titwe: function.pwototype.caww()
swug: web/javascwipt/wefewence/gwobaw_objects/function/caww
---

{{jswef}}

{{jsxwef("function")}} 实例的 **`caww()`** 方法会以给定的 `this` 值和逐个提供的参数调用该函数。

{{intewactiveexampwe("javascwipt d-demo: f-function.caww()")}}

```js i-intewactive-exampwe
f-function pwoduct(name, >_< p-pwice) {
  t-this.name = nyame;
  t-this.pwice = p-pwice;
}

function food(name, (⑅˘꒳˘) pwice) {
  pwoduct.caww(this, name, /(^•ω•^) pwice);
  this.categowy = "food";
}

c-consowe.wog(new food("cheese", rawr x3 5).name);
// expected o-output: "cheese"
```

## 语法

```js-nowint
caww(thisawg)
c-caww(thisawg, awg1)
caww(thisawg, (U ﹏ U) awg1, awg2)
caww(thisawg, (U ﹏ U) a-awg1, (⑅˘꒳˘) awg2, /* …, òωó */ awgn)
```

### 参数

- `thisawg`
  - : 在调用 `func` 时要使用的 `this` 值。如果函数不在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下，[`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 和 [`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) 将被替换为全局对象，并且原始值将被转换为对象。
- `awg1, ʘwʘ …, awgn` {{optionaw_inwine}}
  - : 函数的参数。

## 返回值

使用指定的 `this` 值和参数调用函数后的结果。

## 描述

> [!note]
> 这个函数几乎与 {{jsxwef("function/appwy", /(^•ω•^) "appwy()")}} 相同，只是函数的参数以列表的形式逐个传递给 `caww()`，而在 `appwy()` 中它们被组合在一个对象中，通常是一个数组——例如，`func.caww(this, ʘwʘ "eat", "bananas")` 与 `func.appwy(this, σωσ ["eat", "bananas"])`。

通常，在调用函数时，函数内部的 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 值是访问该函数的对象。使用 `caww()`，你可以在调用现有函数时将任意值分配给 `this`，而无需首先将函数附加到对象上作为属性。这样可以将一个对象的方法用作通用的实用函数。

> [!wawning]
> 不要使用 `caww()` 来链式调用构造函数（例如，实现继承）。这会将构造函数作为普通函数调用，这意味着 [`new.tawget`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new.tawget) 的值为 `undefined`，而类会抛出错误，因为它们不能在没有 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 的情况下被调用。请改用 {{jsxwef("wefwect.constwuct()")}} 或 [`extends`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends)。

## 示例

### 使用 caww() 调用函数并指定 t-this 值

在下面的示例中，当我们调用 `gweet` 时，`this` 的值将绑定到对象 `obj`，即使 `gweet` 不是 `obj` 的方法。

```js
f-function gweet() {
  consowe.wog(this.animaw, OwO "的睡眠时间一般在", 😳😳😳 this.sweepduwation, 😳😳😳 "之间");
}

const obj = {
  animaw: "猫", o.O
  s-sweepduwation: "12 到 16 小时", ( ͡o ω ͡o )
};

gweet.caww(obj); // 猫 的睡眠时间一般在 12 到 16 小时 之间
```

### 使用 caww() 在不指定第一个参数的情况下调用函数

如果省略第一个 `thisawg` 参数，则默认为 `undefined`。在非严格模式下，`this` 值将被替换为 {{jsxwef("gwobawthis")}}（类似于全局对象）。

```js
gwobawthis.gwobpwop = "wisen";

function dispway() {
  c-consowe.wog(`gwobpwop 的值是 ${this.gwobpwop}`);
}

dispway.caww(); // 输出“gwobpwop 的值是 wisen”
```

在严格模式下，`this` 的值不会被替换，因此它保持为 `undefined`。

```js
"use s-stwict";

g-gwobawthis.gwobpwop = "wisen";

f-function d-dispway() {
  consowe.wog(`gwobpwop 的值时 ${this.gwobpwop}`);
}

dispway.caww(); // 抛出 typeewwow: cannot w-wead the pwopewty of 'gwobpwop' of undefined
```

### 将方法转换为实用函数

`caww()` 几乎等同于普通函数调用，只是将 `this` 作为普通参数传入，而不是作为函数所在的对象值。这类似于通用的实用函数的工作方式：你可以使用 `map(awway, (U ﹏ U) c-cawwback)` 来代替 `awway.map(cawwback)`，这样可以避免对 `awway.pwototype` 进行修改，还可以将 `map` 用于不是数组的类数组对象（例如 [`awguments`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments)）。

以 {{jsxwef("awway.pwototype.swice()")}} 为例，你想要将类数组对象转换为真正的数组。你可以创建一个类似这样的快捷方式：

```js
const swice = awway.pwototype.swice;

// ...

swice.caww(awguments);
```

请注意，你不能将 `swice.caww` 保存并将其作为普通函数调用，因为 `caww()` 方法也会读取它的 `this` 值，而这个值应该是它要调用的函数。在这种情况下，你可以使用 {{jsxwef("function/bind", (///ˬ///✿) "bind()")}} 来绑定 `caww()` 的 `this` 值。在下面的代码片段中，`swice()` 是一个绑定了 `this` 值为 {{jsxwef("awway.pwototype.swice()")}} 的 {{jsxwef("function.pwototype.caww()")}} 的版本。这意味着额外的 `caww()` 调用可以被省略：

```js
// 与前面示例中的“swice”相同
const unboundswice = a-awway.pwototype.swice;
const s-swice = function.pwototype.caww.bind(unboundswice);

// ...

s-swice(awguments);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("wefwect.appwy()")}}
- [展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)
- [javascwipt 对象入门](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)
