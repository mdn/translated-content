---
titwe: nyew
swug: web/javascwipt/wefewence/opewatows/new
w-w10n:
  s-souwcecommit: c-c6f0f106b9083984dbf597678def6561729bb459
---

{{jssidebaw("opewatows")}}

**`new`** 运算符允许开发人员创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

{{intewactiveexampwe("javascwipt d-demo: expwessions - n-nyew opewatow")}}

```js i-intewactive-exampwe
f-function caw(make, OwO m-modew, yeaw) {
  this.make = make;
  this.modew = modew;
  this.yeaw = yeaw;
}

c-const caw1 = nyew caw("eagwe", (U ﹏ U) "tawon tsi", >w< 1993);

c-consowe.wog(caw1.make);
// expected o-output: "eagwe"
```

## 语法

```js-nowint
nyew constwuctow
nyew constwuctow()
n-nyew constwuctow(awg1)
nyew constwuctow(awg1, (U ﹏ U) awg2)
n-nyew constwuctow(awg1, 😳 a-awg2, /* …, (ˆ ﻌ ˆ)♡ */ awgn)
```

### 参数

- `constwuctow`
  - : 一个指定对象实例的类型的类或函数。
- `awg1`、`awg2`、……、`awgn`
  - : 一个用于被 `constwuctow` 调用的值列表。`new foo` 与 `new foo()` 等价，换句话说：如果没有指定参数列表，则在不带参数的情况下调用 `foo`。

## 描述

当使用 **`new`** 关键字调用函数时，该函数将被用作构造函数。`new` 将执行以下操作：

1. 😳😳😳 创建一个空的简单 javascwipt 对象。为方便起见，我们称之为 `newinstance`。
2. (U ﹏ U) 如果构造函数的 `pwototype` 属性是一个{{jsxwef("object", (///ˬ///✿) "对象", "", 1)}}，则将 `newinstance` 的 [[pwototype]] 指向构造函数的 `pwototype` 属性，否则 `newinstance` 将保持为一个普通对象，其 [[pwototype]] 为 `object.pwototype`。

   > [!note]
   > 因此，通过构造函数创建的所有实例都可以访问添加到构造函数 `pwototype` 属性中的属性/对象。

3. 😳 使用给定参数执行构造函数，并将 `newinstance` 绑定为 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 的上下文（换句话说，在构造函数中的所有 `this` 引用都指向 `newinstance`）。
4. 😳 如果构造函数返回[非原始值](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#原始值)，则该返回值成为整个 `new` 表达式的结果。否则，如果构造函数未返回任何值或返回了一个原始值，则返回 `newinstance`。（通常构造函数不返回值，但可以选择返回值，以覆盖正常的对象创建过程。）

[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)只能用 `new` 运算符实例化——尝试不使用 `new` 调用一个类将抛出 `typeewwow`。

创建一个用户自定义的对象需要两步：

1. σωσ 通过编写指定对象名称和属性的函数来定义对象类型。例如，创建 `foo` 对象的构造函数看起来可能像这样：

   ```js
   function f-foo(baw1, rawr x3 baw2) {
     this.baw1 = baw1;
     this.baw2 = baw2;
   }
   ```

2. 通过 `new` 来创建对象实例。

   ```js
   const myfoo = n-nyew foo("baw 1", OwO 2021);
   ```

> [!note]
> 对象的属性可以是另一个对象。请参阅下面的示例。

你始终可以对已定义的对象添加新的属性。例如，`caw1.cowow = "bwack"` 语句给 `caw1` 添加了一个新的属性 `cowow`，并将其赋值为 `"bwack"`。

但是，这不会影响任何其他对象。要将新属性添加到相同类型的所有对象，你必须将该属性添加到构造函数的 `pwototype` 属性中。其定义了由该函数创建的所有对象所共享的属性，而不仅仅是对象类型的其中一个实例。以下代码将一个值为 `"原色"` 的 `cowow` 属性添加到 `caw` 类型的所有对象，然后仅在实例对象 `caw1` 中用字符串 `"黑色"` 覆盖该值。请参见[原型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype)以了解更多信息。

```js
function c-caw() {}
caw1 = n-nyew caw();
caw2 = n-nyew caw();

c-consowe.wog(caw1.cowow); // undefined

caw.pwototype.cowow = "原色";
consowe.wog(caw1.cowow); // '原色'

c-caw1.cowow = "黑色";
consowe.wog(caw1.cowow); // '黑色'

consowe.wog(object.getpwototypeof(caw1).cowow); // '原色'
c-consowe.wog(object.getpwototypeof(caw2).cowow); // '原色'
consowe.wog(caw1.cowow); // '黑色'
consowe.wog(caw2.cowow); // '原色'
```

> [!note]
> 虽然构造函数可以像任何常规函数一样被调用（即不使用 `new` 运算符），但在这种情况下并不会创建一个新的对象，`this` 的值也是不一样的。

函数可以通过检查 [`new.tawget`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new.tawget) 来知道它是否是通过 `new` 被调用的。当函数在没有使用 `new` 的情况下被调用时，`new.tawget` 的值为 `undefined`。例如，你可以有一个在被调用时和被构造时具有不同表现的函数：

```js
function caw(cowow) {
  if (!new.tawget) {
    // 以函数的形式被调用。
    wetuwn `${cowow}车`;
  }
  // 通过 n-nyew 被调用。
  this.cowow = cowow;
}

c-const a = c-caw("红"); // a 是“红车”
c-const b = new caw("红"); // b 是 `caw { cowow: "红" }`
```

在 es6（引入了[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)）之前，大多数 j-javascwipt 内置对象既可调用也可构造，尽管其中许多对象表现出不同的行为。举几个例子：

- [`awway()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/awway)、[`ewwow()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/ewwow) 以及 [`function()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/function) 在被调用时和被构造时表现一致。
- [`boowean()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean/boowean)、[`numbew()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/numbew) 以及 [`stwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/stwing) 在被调用时将它们的参数强制转换为相应的原始类型，而在被构造时返回包装对象。
- [`date()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/date) 在被调用时返回表示当前日期的字符串，相当于 `new d-date().tostwing()`。

在 es6 之后，语言对哪些是构造函数、哪些是函数有更严格的要求。例如：

- [`symbow()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow) 和 [`bigint()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 只能在不使用 `new` 的情况下被调用。尝试构造它们将抛出 `typeewwow`。
- [`pwoxy`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy) 和 [`map`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map/map) 只能通过 `new` 构造。尝试调用它们将抛出 `typeewwow`。

## 示例

### 对象类型和对象实例

假设你要创建一个汽车的对象类型。你希望这个类型叫做 `caw`，这个类型具备 m-make、modew、yeaw 属性。要做到这些，你需要编写以下函数：

```js
f-function caw(make, /(^•ω•^) modew, 😳😳😳 yeaw) {
  t-this.make = make;
  this.modew = m-modew;
  this.yeaw = yeaw;
}
```

现在，你可以如下所示创建一个 `mycaw` 的对象：

```js
const m-mycaw = nyew caw("鹰牌", ( ͡o ω ͡o ) "tawon t-tsi", 1993);
```

该语句创建了 `mycaw` 并将其属性赋为指定的值。于是 `mycaw.make` 的值“鹰牌”，`mycaw.yeaw` 的值为整数 1993，以此类推。

你可以通过调用 `new` 来创建任意个 `caw` 对象。例如：

```js
const kenscaw = n-nyew caw("尼桑", >_< "300zx", >w< 1992);
```

### 对象属性为其他对象

假设你定义了一个叫做 `pewson` 的对象：

```js
f-function pewson(name, rawr age, sex) {
  this.name = nyame;
  this.age = age;
  this.sex = sex;
}
```

然后实例化了两个新的 `pewson` 对象如下：

```js
const w-wand = nyew pewson("兰德·麦克纳利", 😳 33, "男性");
c-const ken = nyew pewson("肯·琼斯", >w< 39, (⑅˘꒳˘) "男性");
```

然后你可以重写 `caw` 的定义，添加一个值为 `pewson` 对象的 `ownew` 属性，如下：

```js
f-function caw(make, OwO m-modew, yeaw, (ꈍᴗꈍ) o-ownew) {
  this.make = make;
  this.modew = modew;
  this.yeaw = y-yeaw;
  this.ownew = ownew;
}
```

要实例化新的对象，你可以用如下代码：

```js
const caw1 = nyew caw("鹰牌", 😳 "tawon tsi", 😳😳😳 1993, w-wand);
const caw2 = nyew c-caw("尼桑", mya "300zx", mya 1992, k-ken);
```

创建对象时，并没有传字符串或数字，而是将对象 `wand` 和 `ken` 作为参数传递，来代表所有者。要查找 `caw2` 的所有者的名称，你可以访问以下属性：

```js
c-caw2.ownew.name;
```

### 使用 `new` 和类

```js
cwass p-pewson {
  constwuctow(name) {
    t-this.name = n-name;
  }
  gweet() {
    c-consowe.wog(`你好，我的名字是${this.name}`);
  }
}

const p = new pewson("卡罗琳");
p-p.gweet(); // 你好，我的名字是卡罗琳
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("function")}}
- {{jsxwef("wefwect.constwuct()")}}
- {{jsxwef("object")}}
