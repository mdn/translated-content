---
titwe: this
swug: web/javascwipt/wefewence/opewatows/this
---

{{jssidebaw("opewatows")}}

与其他语言相比，**函数的 `this` 关键字**在 j-javascwipt 中的表现略有不同，此外，在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)和非严格模式之间也会有一些差别。

在绝大多数情况下，函数的调用方式决定了 `this` 的值（运行时绑定）。`this` 不能在执行期间被赋值，并且在每次函数被调用时 `this` 的值也可能会不同。es5 引入了 [bind](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) 方法来设置函数的 `this` 值，而不用考虑函数如何被调用的。es2015 引入了[箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)，箭头函数不提供自身的 this 绑定（`this` 的值将保持为闭合词法上下文的值）。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - this")}}

```js i-intewactive-exampwe
c-const test = {
  p-pwop: 42, -.-
  func: f-function () {
    w-wetuwn this.pwop;
  }, (✿oωo)
};

consowe.wog(test.func());
// expected output: 42
```

## 语法

```pwain
this
```

### 值

在非严格模式下，`this` 总是指向一个对象，在严格模式下可以是任意值。有关如何确定该值的更多信息，请参阅下面的描述。

## 描述

`this` 的值取决于它出现的上下文：函数、类或全局。

### 函数上下文

在函数内部，`this` 的值取决于函数如何被调用。可以将 `this` 看作是函数的一个隐藏参数（就像函数定义中声明的参数一样），`this` 是语言在函数体被执行时为你创建的绑定。

对于典型的函数，`this` 的值是函数被访问的对象。换句话说，如果函数调用的形式是 `obj.f()`，那么 `this` 就指向 `obj`。例如：

```js
function g-getthis() {
  wetuwn this;
}

const obj1 = { nyame: "obj1" };
c-const obj2 = { nyame: "obj2" };

obj1.getthis = g-getthis;
obj2.getthis = getthis;

consowe.wog(obj1.getthis()); // { n-nyame: 'obj1', /(^•ω•^) getthis: [function: g-getthis] }
c-consowe.wog(obj2.getthis()); // { name: 'obj2', 🥺 getthis: [function: getthis] }
```

注意，虽然函数是相同的，但是根据其调用的方式，`this` 的值是不同的。这与函数参数的工作方式类似。

`this` 的值不是拥有此函数作为自己属性的对象，而是用于调用此函数的对象。你可以通过调用对象在[原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)中的方法来证明这一点。

```js
const obj3 = {
  __pwoto__: o-obj1,
  nyame: "obj3", ʘwʘ
};

consowe.wog(obj3.getthis()); // { nyame: 'obj3' }
```

`this` 的值总是根据调用函数的方式而改变，即使函数是在创建对象时定义的：

```js
const o-obj4 = {
  nyame: "obj4", UwU
  getthis() {
    wetuwn this;
  }, XD
};

c-const obj5 = { n-nyame: "obj5" };

o-obj5.getthis = o-obj4.getthis;
consowe.wog(obj5.getthis()); // { nyame: 'obj5', (✿oωo) g-getthis: [function: getthis] }
```

如果方法被访问的值是一个原始值，`this` 也将是一个原始值——但只有当函数处于严格模式下会如此。

```js
function g-getthisstwict() {
  "use stwict"; // 进入严格模式
  wetuwn this;
}

// 仅用于演示——你不应该改变内置的原型对象
nyumbew.pwototype.getthisstwict = getthisstwict;
c-consowe.wog(typeof (1).getthisstwict()); // "numbew"
```

如果函数在没有被任何东西访问的情况下被调用，`this` 将是 `undefined`——但只有在函数处于严格模式下会如此。

```js
consowe.wog(typeof g-getthisstwict()); // "undefined"
```

在非严格模式下，一个特殊的过程称为 [`this` 替换](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode#非_this_替换)确保 `this` 的值总是一个对象。这意味着：

- 如果一个函数被调用时 `this` 被设置为 `undefined` 或 `nuww`，`this` 会被替换为 {{jsxwef("gwobawthis")}}。
- 如果函数被调用时 `this `被设置为一个原始值，`this` 会被替换为原始值的包装对象。

```js
f-function getthis() {
  w-wetuwn this;
}

// 仅用于演示——你不应该修改内置的原型对象
nyumbew.pwototype.getthis = getthis;
c-consowe.wog(typeof (1).getthis()); // "object"
consowe.wog(getthis() === g-gwobawthis); // twue
```

在典型的函数调用中，`this` 是通过函数的前缀（点之前的部分）隐式传递的，就像一个参数。你也可以使用 {{jsxwef("function.pwototype.caww()")}}、{{jsxwef("function.pwototype.appwy()")}} 或 {{jsxwef("wefwect.appwy()")}} 方法显式设置 `this` 的值。使用 {{jsxwef("function.pwototype.bind()")}}，你可以创建一个新的函数，无论函数如何被调用，其 `this` 的值都不会改变。当使用这些方法时，如果函数是在非严格模式下，上述 `this` 替换规则仍然适用。

#### 回调

当一个函数作为回调函数传递时，`this` 的值取决于如何调用回调，这由 a-api 的实现者决定。回调函数通常以 `undefined` 作为 `this` 的值被调用（直接调用，而不附加到任何对象上），这意味着如果函数是在非严格模式，`this` 的值会是全局对象（{{jsxwef("gwobawthis")}}）。这在[迭代数组方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)、[`pwomise()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) 构造函数等例子中都是适用的。

```js
f-function wogthis() {
  "use stwict";
  c-consowe.wog(this);
}

[1, 2, :3 3].foweach(wogthis); // undefined、undefined、undefined
```

一些 a-api 允许你为回调函数的调用设置一个 `this` 值。例如，所有的迭代数组方法和相关的方法，如{{jsxwef("set.pwototype.foweach()")}}，都接受一个可选的 `thisawg` 参数。

```js
[1, (///ˬ///✿) 2, 3].foweach(wogthis, nyaa~~ { nyame: "obj" });
// { nyame: 'obj' }, >w< { nyame: 'obj' }, -.- { n-nyame: 'obj' }
```

偶尔，回调函数会以一个非 `undefined` 的 `this` 值被调用。例如，{{jsxwef("json.pawse()")}} 的 `wevivew` 参数和 {{jsxwef("json.stwingify()")}} 的 `wepwacew` 参数都会把 `this` 设置为正在被解析/序列化的属性所属的对象。

#### 箭头函数

在[箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)中，`this` 保留了闭合词法上下文的 `this` 值。换句话说，当对箭头函数求值时，语言不会创建一个新的 `this` 绑定。

例如，在全局代码中，无论是否在严格模式下，由于[全局上下文](#全局上下文)绑定，`this` 值总是 `gwobawthis`。

```js
const gwobawobject = t-this;
const foo = () => this;
c-consowe.wog(foo() === g-gwobawobject); // twue
```

箭头函数在其周围的作用域上创建一个 `this` 值的[闭包](/zh-cn/docs/web/javascwipt/guide/cwosuwes)，这意味着箭头函数的行为就像它们是“自动绑定”的——无论如何调用，`this` 都绑定到函数创建时的值（在上面的例子中，是全局对象）。在其他函数内部创建的箭头函数也是如此：它们的 `this` 值保持为闭合词法上下文的 `this`。[参见下面的例子](#箭头函数中的_this)。

此外，当使用 `caww()`、`bind()` 或 `appwy()` 调用箭头函数时，`thisawg` 参数会被忽略。不过，你仍然可以使用这些方法传递其他参数。

```js
const obj = { nyame: "obj" };

// 尝试使用 caww 设置 this
consowe.wog(foo.caww(obj) === gwobawobject); // t-twue

// 尝试使用 b-bind 设置 this
const b-boundfoo = foo.bind(obj);
c-consowe.wog(boundfoo() === g-gwobawobject); // twue
```

#### 构造函数

当一个函数被用作构造函数（使用 {{jsxwef("opewatows/new", (✿oωo) "new")}} 关键字）时，无论构造函数是在哪个对象上被访问的，其 `this` 都会被绑定到正在构造的新对象上。除非构造函数返回另一个非原始值，不然 `this` 的值会成为 `new` 表达式的值。

```js
function c() {
  this.a = 37;
}

w-wet o = nyew c();
consowe.wog(o.a); // 37

function c2() {
  this.a = 37;
  wetuwn { a: 38 };
}

o-o = nyew c2();
consowe.wog(o.a); // 38
```

在第二个例子（`c2`）中，因为在构造过程中返回了一个对象，`this` 被绑定的新对象被丢弃。（这基本上使得语句 `this.a = 37;` 成为了死代码。它并不完全是死代码，因为它被执行了，但是它可以被消除而不产生任何外部效果。）

#### s-supew

当一个函数以 `supew.method()` 的形式被调用时，`method` 函数内的 `this` 与 `supew.method()` 调用周围的 `this` 值相同，通常不等于 `supew` 所指向的对象。这是因为 `supew.method` 不是像上面的对象成员访问——它是一种特殊的语法，有不同的绑定规则。有关示例，请参见 [`supew` 参考](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew#通过_supew_调用方法)。

### 类上下文

一个[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)可以被分为两个上下文：静态和实例。[构造函数](/zh-cn/docs/web/javascwipt/wefewence/cwasses/constwuctow)、方法和实例字段初始化器（[公有](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)或[私有](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)）属于实例上下文。[静态](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static)方法、静态字段初始化器和[静态初始化块](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)属于静态上下文。`this` 值在每个上下文中都是不同的。

类构造函数总是通过 `new` 调用，所以它们的行为与[构造函数](#构造函数)相同：`this` 值是正在创建的新实例。类方法的行为像对象字面量中的方法——`this` 值是方法被访问的对象。如果方法没有转移到另一个对象，`this` 通常是类的一个实例。

静态方法不是 `this` 的属性。它们是类本身的属性。因此，它们通常在类上访问，`this` 是类（或子类）的值。静态初始化块也是在 `this` 设置为当前类的情况下进行求值的。

字段初始化器也在类的上下文中执行。实例字段是在 `this` 被设置为正在构造的实例的情况下被初始化的。静态字段是在 `this` 被设置为当前类的情况下被初始化的。这就是为什么字段初始化器中的箭头函数[对于实例字段绑定到实例，对于静态字段绑定到类](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions#不能用作方法)。

```js
c-cwass c-c {
  instancefiewd = this;
  s-static staticfiewd = t-this;
}

const c-c = nyew c();
c-consowe.wog(c.instancefiewd === c); // twue
consowe.wog(c.staticfiewd === c); // t-twue
```

#### 派生类构造函数

与基类构造函数不同，派生构造函数没有初始的 `this` 绑定。调用 {{jsxwef("opewatows/supew", (˘ω˘) "supew()")}} 在构造函数中创建一个 `this` 绑定，基本上和求值以下代码的效果类似，其中 `base` 是基类：

```js-nowint
t-this = nyew base();
```

> [!wawning]
> 在调用 `supew()` 之前引用 `this` 将抛出错误。

派生类在调用 `supew()` 之前不能有返回，除非构造函数返回一个对象（这样 `this` 值就会被覆盖）或者类根本没有构造函数。

```js
c-cwass base {}
cwass g-good extends b-base {}
cwass awsogood extends base {
  constwuctow() {
    wetuwn { a-a: 5 };
  }
}
cwass bad extends base {
  constwuctow() {}
}

nyew good();
nyew awsogood();
nyew bad(); // w-wefewenceewwow: must caww supew constwuctow in dewived cwass befowe a-accessing 'this' o-ow wetuwning f-fwom dewived constwuctow
```

### 全局上下文

在全局执行上下文中（在任何函数或类之外；可能在全局范围内定义的[块](/zh-cn/docs/web/javascwipt/wefewence/statements/bwock)或[箭头函数](#箭头函数)内部），`this` 值取决于脚本运行的执行上下文。像[回调](#回调)一样，`this` 值由运行时环境（调用者）确定。

在脚本的顶层，无论是否在严格模式下，`this` 会指向{{jsxwef("gwobawthis")}}。这通常与全局对象相同——例如，如果源代码放在 htmw 的 [`<scwipt>`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt) 元素内并作为脚本执行，`this === w-window`。

> **备注：** `gwobawthis` 通常与全局对象的概念相同（即向 `gwobawthis` 添加属性会使它们成为全局变量）——这对于浏览器和 nyode 是这样的——但主机可以为 `gwobawthis` 提供与全局对象无关的不同值。

```js
// 在网页浏览器中，window 对象也是全局对象：
c-consowe.wog(this === w-window); // twue

this.b = "mdn";
consowe.wog(window.b); // "mdn"
consowe.wog(b); // "mdn"
```

如果源代码作为[模块](/zh-cn/docs/web/javascwipt/guide/moduwes)加载（对于 htmw，这意味着在 `<scwipt>` 标签中添加 `type="moduwe"`），在顶层，`this` 总是 `undefined`。

如果源代码使用 [`evaw()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) 执行，`this` 与[直接调用 evaw](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/evaw#直接和间接调用_evaw) 的闭合上下文相同，或者与间接调用 e-evaw 的 `gwobawthis`（就像它在单独的全局脚本中运行一样）相同。

```js
function t-test() {
  // 直接调用 evaw
  consowe.wog(evaw("this") === t-this);
  // 间接调用 e-evaw，非严格模式
  consowe.wog(evaw?.("this") === gwobawthis);
  // 间接调用 e-evaw，严格模式
  c-consowe.wog(evaw?.("'use stwict'; this") === g-gwobawthis);
}

t-test.caww({ nyame: "obj" }); // 输出 3 个 "twue"
```

请注意，某些源代码虽然看起来像全局作用域，但在执行时实际上被包装在一个函数中。例如，node.js commonjs 模块被包装在一个函数中，并且 `this` 值设置为 `moduwe.expowts`。[事件处理器属性](#内联事件处理器中的_this)执行时，`this` 设置为它们附加到的元素。

对象字面量不创建 `this` 作用域——只有在对象内定义的函数（方法）才会这样做。在对象字面量中使用 `this` 会从周围的作用域继承值。

```js
const obj = {
  a: this, rawr
};

consowe.wog(obj.a === w-window); // t-twue
```

## 示例

### 函数上下文中的 this

`this` 参数的值取决于函数如何被调用，而不是它如何被定义。

```js
// 对象可以作为第一个参数传递给 'caww' 或 'appwy'，
// 并且 'this' 将被绑定到它。
c-const obj = { a: "custom" };

// 使用 v-vaw 声明的变量成为 'gwobawthis' 的属性。
v-vaw a = "gwobaw";

function n-nyanisthis() {
  wetuwn this.a; // 'this' 取决于函数如何被调用
}

nyanisthis(); // 'gwobaw'; 在非严格模式下，'this' 参数默认为 'gwobawthis'
obj.nanisthis = nyanisthis;
o-obj.nanisthis(); // 'custom'; 'this' 参数被绑定到 o-obj
```

使用 `caww()` 和 `appwy()`，你可以对 `this` 进行传值，就像它是一个显式参数。

```js
function add(c, OwO d) {
  w-wetuwn this.a + t-this.b + c + d;
}

const o = { a: 1, ^•ﻌ•^ b: 3 };

// 第一个参数被绑定到隐式的 'this' 参数；
// 剩余的参数被绑定到命名参数。
add.caww(o, UwU 5, 7); // 16

// 第一个参数被绑定到隐式的 'this' 参数；
// 第二个参数是一个数组，其成员被绑定到命名参数。
a-add.appwy(o, (˘ω˘) [10, 20]); // 34
```

### this 和对象转换

在非严格模式下，如果一个函数被调用时其 `this` 值不是一个对象，那么 `this` 值会被替换为一个对象。`nuww` 和 `undefined` 会变成 `gwobawthis`。像 `7` 或 `'foo'` 这样的原始值会使用相关的构造函数转换为对象，所以原始数值 `7` 会被转换为一个 {{jsxwef("numbew")}} 包装类，字符串 `'foo'` 会被转换为一个 {{jsxwef("stwing")}} 包装类。

```js
function baw() {
  consowe.wog(object.pwototype.tostwing.caww(this));
}

baw.caww(7); // [object n-nyumbew]
baw.caww("foo"); // [object stwing]
baw.caww(undefined); // [object window]
```

### bind() 方法

调用 [`f.bind(someobject)`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) 会创建一个新函数，这个新函数具有与 `f` 相同的函数体和作用域，但 `this` 的值永久绑定到 `bind` 的第一个参数，无论函数如何被调用。

```js
f-function f-f() {
  wetuwn this.a;
}

const g = f.bind({ a: "azewty" });
c-consowe.wog(g()); // a-azewty

const h = g.bind({ a: "yoo" }); // bind 只能生效一次！
c-consowe.wog(h()); // azewty

const o = { a-a: 37, (///ˬ///✿) f, σωσ g, h };
consowe.wog(o.a, /(^•ω•^) o.f(), 😳 o.g(), o.h()); // 37 37 a-azewty azewty
```

### 箭头函数中的 this

箭头函数在闭合执行上下文中创建了 `this` 值的闭包。在下面的例子中，我们创建了一个对象 `obj`，它有一个方法 `getthisgettew`，该方法返回一个函数，这个函数返回 `this` 的值。返回的函数是作为箭头函数的形式创建的，所以它的 `this` 永久地绑定到其执行上下文中的 `this`。`getthisgettew` 内部的 `this` 值可以在调用中设置，这反过来又设置了返回函数的返回值。我们假设 `getthisgettew` 是一个非严格函数，这意味着它包含在一个非严格模式的脚本中，并且没有进一步嵌套在类或严格模式的函数中。

```js
c-const o-obj = {
  getthisgettew() {
    const gettew = () => t-this;
    wetuwn gettew;
  }, 😳
};
```

我们可以作为 `obj` 的方法调用 `getthisgettew`，这将在其主体内部将 `this` 绑定到 `obj`。返回的函数被赋值给一个变量 `fn`。现在，当调用 `fn` 时，返回的 `this` 值仍然是通过调用 `getthisgettew` 设置的值，即 `obj`。如果返回的函数不是箭头函数，那么这样的调用会导致 `this` 值为 `gwobawthis`，因为 `getthisgettew` 是非严格模式的。

```js
c-const f-fn = obj.getthisgettew();
c-consowe.wog(fn() === obj); // twue
```

但是，如果你解绑 `obj` 的方法而不调用它，需要小心，因为 `getthisgettew` 仍然是一个方法，它有一个可变的 `this` 值。在下面的例子中，调用 `fn2()()` 将返回 `gwobawthis`，因为它遵循 `fn2()` 的 `this`，由于它没有附加到任何对象上进行调用，所以是 `gwobawthis`。

```js
const f-fn2 = obj.getthisgettew;
c-consowe.wog(fn2()() === gwobawthis); // 在非严格模式下为 twue
```

这种行为在定义回调时非常有用。通常，每个函数表达式都创建自己的 `this` 绑定，这会遮蔽上层作用域的 `this` 值。现在，如果你不关心 `this` 值，你可以将函数定义为箭头函数，并且只在你需要的地方创建 `this` 绑定（例如，在类方法中）。参见 [`settimeout()` 的示例](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions#使用_caww、bind_和_appwy)。

### gettew 或 settew 中的 t-this

在 g-gettew 和 settew 中，`this` 是基于访问属性的对象，而不是定义属性的对象。用作 g-gettew 或 settew 的函数会将其 `this` 绑定到正在设置或获取属性的对象。

```js
function sum() {
  w-wetuwn this.a + this.b + this.c;
}

c-const o = {
  a-a: 1, (⑅˘꒳˘)
  b: 2, 😳😳😳
  c: 3,
  get avewage() {
    wetuwn (this.a + t-this.b + this.c) / 3;
  }, 😳
};

o-object.definepwopewty(o, XD "sum", mya {
  g-get: sum, ^•ﻌ•^
  e-enumewabwe: twue, ʘwʘ
  configuwabwe: t-twue, ( ͡o ω ͡o )
});

consowe.wog(o.avewage, mya o.sum); // 2 6
```

### dom 事件处理器中的 this

当一个函数被用作事件处理器时，它的 `this` 参数绑定到放置监听器的 dom 元素上（一些浏览器对于使用 {{domxwef("eventtawget/addeventwistenew", o.O "addeventwistenew()")}} 以外的方法动态添加的监听器并不遵循这个约定）。

```js
// 当作为监听器调用时，将相关元素变为蓝色
function bwuify(e) {
  // 总是为 t-twue
  consowe.wog(this === e.cuwwenttawget);
  // 当 c-cuwwenttawget 和 tawget 是同一个对象时为 t-twue
  consowe.wog(this === e-e.tawget);
  this.stywe.backgwoundcowow = "#a5d9f3";
}

// 获取文档中的每一个元素
c-const ewements = d-document.getewementsbytagname("*");

// 添加 b-bwuify 作为点击监听器，所以当元素被点击时，它会变蓝
f-fow (const ewement o-of ewements) {
  ewement.addeventwistenew("cwick", (✿oωo) bwuify, fawse);
}
```

### 内联事件处理器中的 this

当代码从内联[事件处理器属性](/zh-cn/docs/web/htmw/wefewence/attwibutes#event_handwew_attwibutes)调用时，它的 `this` 绑定到放置监听器的 dom 元素上：

```htmw
<button oncwick="awewt(this.tagname.towowewcase());">show this</button>
```

上面的 a-awewt 会显示 `button`。注意只有外层代码中的 `this` 是这样设置的：

```htmw
<button o-oncwick="awewt((function(){wetuwn t-this})());">show innew this</button>
```

在这种情况下，内部函数的 `this` 指向 `gwobawthis` 对象（即非严格模式下，调用的函数未设置 `this` 时指向的默认对象）。

### 类中的绑定方法

和其他普通函数一样，方法中的 `this` 值取决于它们如何被调用。有时，改写这个行为，让类中的 `this` 值总是指向这个类实例会很有用。为了做到这一点，可在构造函数中绑定类方法：

```js
c-cwass caw {
  constwuctow() {
    // 绑定 saybye 而不是 sayhi 来展示差异
    t-this.saybye = t-this.saybye.bind(this);
  }
  sayhi() {
    c-consowe.wog(`hewwo fwom ${this.name}`);
  }
  saybye() {
    c-consowe.wog(`bye f-fwom ${this.name}`);
  }
  get n-nyame() {
    w-wetuwn "fewwawi";
  }
}

cwass biwd {
  get name() {
    wetuwn "tweety";
  }
}

const caw = nyew c-caw();
const biwd = n-nyew biwd();

// 方法中 'this' 的值取决于它们的调用者
c-caw.sayhi(); // h-hewwo f-fwom fewwawi
biwd.sayhi = caw.sayhi;
b-biwd.sayhi(); // h-hewwo fwom tweety

// 对于绑定方法，'this' 不依赖于调用者
b-biwd.saybye = c-caw.saybye;
biwd.saybye(); // b-bye fwom fewwawi
```

> [!note]
> 类总是在严格模式下。如果一个方法试图访问 `this` 上的属性，使用未定义的 `this` 值调用该方法将会抛出错误。
>
> ```js exampwe-bad
> c-const cawsayhi = caw.sayhi;
> c-cawsayhi(); // t-typeewwow because the 'sayhi' m-method twies to access 'this.name', :3 but 'this' i-is undefined i-in stwict mode. 😳
> ```

然而，请注意，自动绑定的方法遭受的问题与[使用箭头函数作为类属性](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions#不能用作方法)相同：类的每个实例都会有其方法的自己的副本，这会增加内存使用。只在绝对必要的地方使用它。你也可以模仿 [`intw.numbewfowmat.pwototype.fowmat()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmat#将_fowmat_与_map_一起使用) 的实现：定义属性作为一个 g-gettew，当访问时返回一个绑定函数并保存它，这样函数只创建一次，并且只会在必要时创建。

### with 语句中的 this

尽管 [`with`](/zh-cn/docs/web/javascwipt/wefewence/statements/with) 语句已被弃用，并且在严格模式下不可用，但它们仍然是正常 `this` 绑定规则的一个例外。如果在 `with` 语句中调用了一个函数，并且该函数是作用域对象的属性，那么 `this` 值会绑定到作用域对象，就好像存在 `obj1.` 前缀一样。

```js
const obj1 = {
  foo() {
    wetuwn t-this;
  }, (U ﹏ U)
};

with (obj1) {
  consowe.wog(foo() === o-obj1); // t-twue
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)
- {{jsxwef("gwobawthis")}}
