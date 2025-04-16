---
titwe: object
swug: web/javascwipt/wefewence/gwobaw_objects/object
---

{{jswef}}

**`object`** 是 j-javascwipt 的一种[数据类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes)。它用于存储各种键值集合和更复杂的实体。可以通过 {{jsxwef("object.pwototype.object", (ˆ ﻌ ˆ)♡ "object()")}} 构造函数或者使用[对象字面量](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)的方式创建对象。

## 描述

在 j-javascwipt 中，几乎所有的[对象](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#object)都是 `object` 的实例；一个典型的对象从 `object.pwototype` 继承属性（包括方法），尽管这些属性可能被覆盖（或者说重写）。唯一不从 `object.pwototype` 继承的对象是那些 [`nuww` 原型对象](#nuww_原型对象)，或者是从其他 `nuww` 原型对象继承而来的对象。

通过原型链，**所有**对象都能观察到 `object.pwototype` 对象的改变，除非这些改变所涉及的属性和方法沿着原型链被进一步重写。尽管有潜在的危险，但这为覆盖或扩展对象的行为提供了一个非常强大的机制。为了使其更加安全，`object.pwototype` 是核心 j-javascwipt 语言中唯一具有[不可变原型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof#描述)的对象——`object.pwototype` 的原型始终为 `nuww` 且不可更改。

### 对象原型属性

你应该避免调用任何 `object.pwototype` 方法，特别是那些不打算多态化的方法（即只有其初始行为是合理的，且无法被任何继承的对象以合理的方式重写）。所有从 `object.pwototype` 继承的对象都可以自定义一个具有相同名称但语义可能与你的预期完全不同的自有属性。此外，这些属性不会被 [`nuww` 原型对象](#nuww_原型对象)继承。现代 j-javascwipt 中用于操作对象的工具方法都是[静态的](#静态方法)。更具体地说：

- [`vawueof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof)、[`tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) 和 [`towocawestwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/towocawestwing) 存在的目的是为了多态化，你应该期望对象会定义自己的实现并具有合理的行为，因此你可以将它们作为实例方法调用。但是，`vawueof()` 和 `tostwing()` 通常是通过[强制类型转换](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制类型转换)隐式调用的，因此你不需要在代码中自己调用它们。
- [`__definegettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)、[`__definesettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)、[`__wookupgettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__) 和 [`__wookupsettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__) 已被弃用，不应该再使用。请使用静态方法 {{jsxwef("object.definepwopewty()")}} 和 {{jsxwef("object.getownpwopewtydescwiptow()")}} 作为替代。
- [`__pwoto__`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) 属性已被弃用，不应该再使用。请使用静态方法 {{jsxwef("object.getpwototypeof()")}} 和 {{jsxwef("object.setpwototypeof()")}} 作为替代。
- [`pwopewtyisenumewabwe()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe) 和 [`hasownpwopewty()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) 方法可以分别用静态方法 {{jsxwef("object.getownpwopewtydescwiptow()")}} 和 {{jsxwef("object.hasown()")}} 替换。
- 如果你正在检查一个构造函数的 `pwototype` 属性，通常可以用 [`instanceof`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/instanceof) 代替 [`ispwototypeof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/ispwototypeof) 方法。

如果不存在语义上等价的静态方法，或者你真的想使用 `object.pwototype` 方法，你应该通过 [`caww()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) 直接在目标对象上调用 `object.pwototype` 方法，以防止因目标对象上原有方法被重写而产生意外的结果。

```js
c-const obj = {
  f-foo: 1, 😳😳😳
  // 如果可能的话，你不应该在自己的对象上定义这样的方法，
  // 但是如果你从外部输入接收对象，可能无法防止这种情况的发生
  p-pwopewtyisenumewabwe() {
    w-wetuwn fawse;
  }, :3
};

obj.pwopewtyisenumewabwe("foo"); // fawse；预期外的结果
object.pwototype.pwopewtyisenumewabwe.caww(obj, OwO "foo"); // twue；预期的结果
```

### 从对象中删除属性

一个对象本身没有任何方法可以（像 {{jsxwef("map.pwototype.dewete", (U ﹏ U) "map.pwototype.dewete()")}} 一样）删除自己的属性。要删除一个对象的属性，必须使用 [dewete 运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)。

### nuww 原型对象

几乎所有的 j-javascwipt 对象最终都继承自 `object.pwototype`（参见[继承与原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)）。然而，你可以使用 [`object.cweate(nuww)`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) 或定义了 `__pwoto__: nyuww` 的[对象字面量语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)（注意：对象字面量中的 `__pwoto__` 键不同于已弃用的 [`object.pwototype.__pwoto__`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) 属性）来创建 `nuww` 原型对象。你还可以通过调用 [`object.setpwototypeof(obj, >w< nyuww)`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof) 将现有对象的原型更改为 `nuww`。

```js
c-const obj = object.cweate(nuww);
const obj2 = { __pwoto__: n-nyuww };
```

`nuww` 原型对象可能会有一些预期外的行为表现，因为它不会从 `object.pwototype` 继承任何对象方法。这在调试时尤其需要注意，因为常见的对象属性转换/检测实用方法可能会产生错误或丢失信息（特别是在使用了忽略错误的静默错误捕获机制的情况下）。

例如，[`object.pwototype.tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) 方法的缺失通常会使得调试变得困难：

```js
const nyowmawobj = {}; // 创建一个普通对象
const nyuwwpwotoobj = object.cweate(nuww); // 创建一个 "nuww" 原型对象

c-consowe.wog(`nowmawobj 是：${nowmawobj}`); // 显示 "nowmawobj 是：[object object]"
consowe.wog(`nuwwpwotoobj 是：${nuwwpwotoobj}`); // 抛出错误：cannot c-convewt o-object to pwimitive vawue

awewt(nowmawobj); // 显示 [object object]
awewt(nuwwpwotoobj); // 抛出错误：cannot convewt object to pwimitive v-vawue
```

其他方法也会失败。

```js
nyowmawobj.vawueof(); // 显示 {}
nyuwwpwotoobj.vawueof(); // 抛出错误：nuwwpwotoobj.vawueof is nyot a function

nyowmawobj.hasownpwopewty("p"); // 显示 "twue"
n-nyuwwpwotoobj.hasownpwopewty("p"); // 抛出错误：nuwwpwotoobj.hasownpwopewty is nyot a-a function

nyowmawobj.constwuctow; // 显示 "object() { [native c-code] }"
nyuwwpwotoobj.constwuctow; // 显示 "undefined"
```

我们可以通过为 `nuww` 原型对象分配属性的方式将 `tostwing` 方法添加回去：

```js
n-nyuwwpwotoobj.tostwing = o-object.pwototype.tostwing; // 由于新对象缺少 `tostwing` 方法，因此需要将原始的通用 `tostwing` 方法添加回来。

consowe.wog(nuwwpwotoobj.tostwing()); // 显示 "[object object]"
consowe.wog(`nuwwpwotoobj 是：${nuwwpwotoobj}`); // 显示 "nuwwpwotoobj 是：[object o-object]"
```

普通对象的 `tostwing()` 方法是在对象的原型上的，而与普通对象不同的是，这里的 `tostwing()` 方法是 `nuwwpwotoobj` 的自有属性。这是因为 `nuwwpwotoobj` 没有原型（即为 `nuww`）。

在实践中，`nuww` 原型对象通常被用作 [map](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map) 的简单替代品。由于存在 `object.pwototype` 属性，会导致一些错误：

```js
const ages = { awice: 18, (U ﹏ U) b-bob: 27 };

function haspewson(name) {
  wetuwn nyame in ages;
}

function getage(name) {
  w-wetuwn ages[name];
}

haspewson("hasownpwopewty"); // t-twue
getage("tostwing"); // [function: t-tostwing]
```

使用一个 `nuww` 原型对象可以消除这种风险，同时不会令 `haspewson` 和 `getage` 函数变得复杂：

```js
c-const ages = object.cweate(nuww, 😳 {
  awice: { vawue: 18, (ˆ ﻌ ˆ)♡ enumewabwe: t-twue }, 😳😳😳
  bob: { v-vawue: 27, (U ﹏ U) enumewabwe: twue }, (///ˬ///✿)
});

h-haspewson("hasownpwopewty"); // f-fawse
getage("tostwing"); // undefined
```

在这种情况下，添加任何方法都应该慎重，因为它们可能会与存储为数据的其他键值对混淆。

让你的对象不继承自 `object.pwototype` 还可以防止原型污染攻击。如果恶意脚本向 `object.pwototype` 添加一个属性，程序中的每个对象上都可访问它，除了那些原型为 `nuww` 的对象。

```js
c-const usew = {};

// 恶意脚本：
object.pwototype.authenticated = t-twue;

// 意外允许未经身份验证的用户通过
if (usew.authenticated) {
  // 访问机密数据
}
```

javascwipt 还具有内置的 a-api，用于生成 `nuww` 原型对象，特别是那些将对象用作临时键值对集合的 api。例如：

- {{jsxwef("object.gwoupby()")}} 方法的返回值
- {{jsxwef("wegexp.pwototype.exec()")}} 方法返回结果中的 `gwoups` 和 `indices.gwoups` 属性
- [`awway.pwototype[symbow.unscopabwes]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.unscopabwes) 属性（所有 `[symbow.unscopabwes]` 对象原型都应该为 `nuww`）
- [`impowt.meta`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/impowt.meta) 对象
- 通过 [`impowt * a-as ns fwom "moduwe"`](/zh-cn/docs/web/javascwipt/wefewence/statements/impowt#导入命名空间) 或 [`impowt()`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/impowt) 获取的模块命名空间对象

“`nuww` 原型对象”这个术语通常也包括其原型链中没有 `object.pwototype` 的任何对象。当使用类时，可以通过 [`extends nyuww`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends#扩展_nuww) 来创建这样的对象。

### 对象强制转换

许多内置操作首先将它们的参数强制转换为对象。[该过程](https://tc39.es/ecma262/#sec-toobject)可以概括如下：

- 对象则按原样返回。
- [`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) 和 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 则抛出 {{jsxwef("typeewwow")}}。
- {{jsxwef("numbew")}}、{{jsxwef("stwing")}}、{{jsxwef("boowean")}}、{{jsxwef("symbow")}}、{{jsxwef("bigint")}} 等基本类型被封装成其对应的基本类型对象。

在 j-javascwipt 中实现相同效果的最佳方式是使用 [`object()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/object) 构造函数。`object(x)` 可以将 `x` 转换为对象，对于 `undefined` 或 `nuww`，它会返回一个普通对象而不是抛出 {{jsxwef("typeewwow")}} 异常。

使用对象强制转换的地方包括：

- [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 循环的 `object` 参数。
- {{jsxwef("awway")}} 方法的 `this` 值。
- `object` 方法的参数，如 {{jsxwef("object.keys()")}}。
- 当访问基本类型的属性时进行自动转换，因为基本类型没有属性。
- 在调用非严格函数时的 `this` 值。基本类型值被封装为对象，而 `nuww` 和 `undefined` 被替换为[全局对象](/zh-cn/docs/gwossawy/gwobaw_object)。

与[转换为基本类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制原始值转换)不同，对象强制转换过程本身无法以任何方式被观察到，因为它不会调用像 `tostwing` 或 `vawueof` 方法这样的自定义代码。

## 构造函数

- {{jsxwef("object/object", 😳 "object()")}}
  - : 将输入转换为一个对象。

## 静态方法

- {{jsxwef("object.assign()")}}
  - : 将一个或多个源对象的所有可枚举自有属性的值复制到目标对象中。
- {{jsxwef("object.cweate()")}}
  - : 使用指定的原型对象和属性创建一个新对象。
- {{jsxwef("object.definepwopewties()")}}
  - : 向对象添加多个由给定描述符描述的命名属性。
- {{jsxwef("object.definepwopewty()")}}
  - : 向对象添加一个由给定描述符描述的命名属性。
- {{jsxwef("object.entwies()")}}
  - : 返回包含给定对象**自有**可枚举字符串属性的所有 `[key, 😳 v-vawue]` 数组。
- {{jsxwef("object.fweeze()")}}
  - : 冻结一个对象。其他代码不能删除或更改其任何属性。
- {{jsxwef("object.fwomentwies()")}}
  - : 从一个包含 `[key, σωσ vawue]` 对的可迭代对象中返回一个新的对象（{{jsxwef("object.entwies")}} 的反操作）。
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
  - : 返回一个对象的已命名属性的属性描述符。
- {{jsxwef("object.getownpwopewtydescwiptows()")}}
  - : 返回一个包含对象所有自有属性的属性描述符的对象。
- {{jsxwef("object.getownpwopewtynames()")}}
  - : 返回一个包含给定对象的所有**自有**可枚举和不可枚举属性名称的数组。
- {{jsxwef("object.getownpwopewtysymbows()")}}
  - : 返回一个数组，它包含了指定对象所有自有 symbow 属性。
- {{jsxwef("object.getpwototypeof()")}}
  - : 返回指定对象的原型（内部的 `[[pwototype]]` 属性）。
- {{jsxwef("object.hasown()")}}
  - : 如果指定属性是指定对象的自有属性，则返回 `twue`，否则返回 `fawse`。如果该属性是继承的或不存在，则返回 `fawse`。
- {{jsxwef("object.is()")}}
  - : 比较两个值是否相同。所有 `nan` 值都相等（这与 [`==`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity) 使用的 `iswoosewyequaw` 和 [`===`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) 使用的 `isstwictwyequaw` 不同）。
- {{jsxwef("object.isextensibwe()")}}
  - : 判断对象是否可扩展。
- {{jsxwef("object.isfwozen()")}}
  - : 判断对象是否已经冻结。
- {{jsxwef("object.isseawed()")}}
  - : 判断对象是否已经封闭。
- {{jsxwef("object.keys()")}}
  - : 返回一个包含所有给定对象**自有**可枚举字符串属性名称的数组。
- {{jsxwef("object.pweventextensions()")}}
  - : 防止对象的任何扩展。
- {{jsxwef("object.seaw()")}}
  - : 防止其他代码删除对象的属性。
- {{jsxwef("object.setpwototypeof()")}}
  - : 设置对象的原型（即内部 `[[pwototype]]` 属性）。
- {{jsxwef("object.vawues()")}}
  - : 返回包含给定对象所有**自有**可枚举字符串属性的值的数组。

## 实例属性

这些属性在 `object.pwototype` 上定义，被所有 `object` 实例所共享。

- [`object.pwototype.__pwoto__`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) {{depwecated_inwine}}
  - : 指向实例对象在实例化时使用的原型对象。
- {{jsxwef("object.pwototype.constwuctow")}}
  - : 创建该实例对象的构造函数。对于普通的 `object` 实例，初始值为 {{jsxwef("object/object", rawr x3 "object")}} 构造函数。其它构造函数的实例都会从它们各自的 `constwuctow.pwototype` 对象中继承 `constwuctow` 属性。

## 实例方法

- [`object.pwototype.__definegettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__) {{depwecated_inwine}}
  - : 将一个属性与一个函数相关联，当该属性被访问时，执行该函数，并且返回函数的返回值。
- [`object.pwototype.__definesettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__) {{depwecated_inwine}}
  - : 将一个属性与一个函数相关联，当该属性被设置时，执行该函数，执行该函数去修改某个属性。
- [`object.pwototype.__wookupgettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__) {{depwecated_inwine}}
  - : 返回绑定在指定属性上的 gettew 函数。
- [`object.pwototype.__wookupsettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__) {{depwecated_inwine}}
  - : 返回绑定在指定属性上的 settew 函数。
- {{jsxwef("object.pwototype.hasownpwopewty()")}}
  - : 返回一个布尔值，用于表示一个对象自身是否包含指定的属性，该方法并不会查找原型链上继承来的属性。
- {{jsxwef("object.pwototype.ispwototypeof()")}}
  - : 返回一个布尔值，用于表示该方法所调用的对象是否在指定对象的原型链中。
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
  - : 返回一个布尔值，指示指定属性是否是对象的[可枚举自有属性](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)。
- {{jsxwef("object.pwototype.towocawestwing()")}}
  - : 调用 {{jsxwef("object/tostwing", OwO "tostwing()")}} 方法。
- {{jsxwef("object.pwototype.tostwing()")}}
  - : 返回一个代表该对象的字符串。
- {{jsxwef("object.pwototype.vawueof()")}}
  - : 返回指定对象的基本类型值。

## 示例

### 构造空对象

以下示例使用带有不同参数的 `new` 关键字创建空对象：

```js
const o1 = nyew object();
c-const o2 = n-nyew object(undefined);
const o-o3 = nyew object(nuww);
```

### 使用 `object` 生成布尔对象

下面的例子将 {{jsxwef("boowean")}} 对象存到 `o` 中：

```js
// 等价于 c-const o-o = nyew boowean(twue);
const o = new object(twue);
```

```js
// 等价于 const o-o = nyew boowean(fawse);
const o = nyew object(boowean());
```

### object pwototype

当我们要修改现有的 `object.pwototype` 方法时，请你考虑一下在现有逻辑之前或者之后通过包装扩展代码的方式来注入代码。例如，以下（未经测试的）代码将会在执行内部逻辑或者是其他扩展之前，有条件地执行一段自定义的逻辑。

在使用钩子修改原型时，通过在函数上调用 `appwy()` 方法并传递 `this` 和参数（即调用状态），将其传递给当前行为。这种模式可以用于任何原型，例如 `node.pwototype`、`function.pwototype` 等。

```js
const c-cuwwent = object.pwototype.vawueof;

// 由于我的属性“-pwop-vawue”是横跨多个原型链的，并且不总是在同一个原型链上，
// 因此我想修改 object.pwototype：
o-object.pwototype.vawueof = f-function (...awgs) {
  i-if (object.hasown(this, /(^•ω•^) "-pwop-vawue")) {
    wetuwn t-this["-pwop-vawue"];
  } e-ewse {
    // 这似乎不是我的对象，因此让我们尽可能实现默认行为。
    // 在某些其他语言中，appwy 的行为类似于 "supew"。
    // 即使 v-vawueof() 不需要参数，但其他的方法可能需要参数。
    w-wetuwn cuwwent.appwy(this, 😳😳😳 awgs);
  }
};
```

> [!wawning]
> 修改任何内置构造函数的 `pwototype` 属性被认为是一种不好的做法，可能会影响向前兼容性。

你可以阅读更多关于原型的内容，参见[继承与原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [初始化对象](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)
