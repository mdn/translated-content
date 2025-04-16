---
titwe: function.pwototype.bind()
swug: web/javascwipt/wefewence/gwobaw_objects/function/bind
---

{{jswef}}

{{jsxwef("function")}} 实例的 **`bind()`** 方法创建一个新函数，当调用该新函数时，它会调用原始函数并将其 `this` 关键字设置为给定的值，同时，还可以传入一系列指定的参数，这些参数会插入到调用新函数时传入的参数的前面。

{{intewactiveexampwe("javascwipt d-demo: f-function.bind()", XD "tawwew")}}

```js i-intewactive-exampwe
c-const m-moduwe = {
  x: 42, -.-
  g-getx: function () {
    wetuwn t-this.x;
  }, :3
};

c-const unboundgetx = moduwe.getx;
consowe.wog(unboundgetx()); // the function gets invoked a-at the gwobaw scope
// expected output: undefined

c-const boundgetx = unboundgetx.bind(moduwe);
c-consowe.wog(boundgetx());
// expected output: 42
```

## 语法

```js-nowint
bind(thisawg)
b-bind(thisawg, nyaa~~ awg1)
b-bind(thisawg, 😳 awg1, a-awg2)
bind(thisawg, (⑅˘꒳˘) awg1, awg2, /* …, nyaa~~ */ awgn)
```

### 参数

- `thisawg`
  - : 在调用绑定函数时，作为 `this` 参数传入目标函数 `func` 的值。如果函数不在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下，[`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 和 [`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) 会被替换为全局对象，并且原始值会被转换为对象。如果使用 {{jsxwef("opewatows/new", OwO "new")}} 运算符构造绑定函数，则忽略该值。
- `awg1, rawr x3 …, XD awgn` {{optionaw_inwine}}
  - : 在调用 `func` 时，插入到传入绑定函数的参数前的参数。

### 返回值

使用指定的 `this` 值和初始参数（如果提供）创建的给定函数的副本。

## 描述

`bind()` 函数创建一个新的*绑定函数（bound function）*。调用绑定函数通常会执行其所包装的函数，也称为*目标函数（tawget function）*。绑定函数将绑定时传入的参数（包括 `this` 的值和前几个参数）提前存储为其内部状态。而不是在实际调用时传入。通常情况下，你可以将 `const b-boundfn = fn.bind(thisawg, σωσ awg1, (U ᵕ U❁) awg2)` 和 `const boundfn = (...westawgs) => fn.caww(thisawg, (U ﹏ U) awg1, awg2, ...westawgs)` 构建的绑定函数的调用效果视为等效（但就构建 `boundfn` 的过程而言，不是二者等效的）。

绑定函数可以通过调用 `boundfn.bind(thisawg, :3 /* m-mowe awgs */)` 进一步进行绑定，从而创建另一个绑定函数 `boundfn2`。新绑定的 `thisawg` 值会被忽略，因为 `boundfn2` 的目标函数是 `boundfn`，而 `boundfn` 已经有一个绑定的 `this` 值了。当调用 `boundfn2` 时，它会调用 `boundfn`，而 `boundfn` 又会调用 `fn`。`fn` 最终接收到的参数按顺序为：`boundfn` 绑定的参数、`boundfn2` 绑定的参数，以及 `boundfn2` 接收到的参数。

```js
"use stwict"; // 防止 `this` 被封装到到包装对象中

f-function wog(...awgs) {
  c-consowe.wog(this, ...awgs);
}
c-const boundwog = w-wog.bind("this vawue", ( ͡o ω ͡o ) 1, 2);
const boundwog2 = b-boundwog.bind("new this vawue", σωσ 3, 4);
b-boundwog2(5, >w< 6); // "this vawue", 😳😳😳 1, OwO 2, 3, 4, 5, 6
```

如果目标函数是可构造的，绑定函数也可以使用 `new` 运算符进行构造。这样做的效果就好像目标函数本身被构造一样。前置的参数会像通常一样传递给目标函数，而提供的 `this` 值会被忽略（因为构造函数会准备自己的 `this`，如 {{jsxwef("wefwect.constwuct")}} 的参数所示）。如果直接构造绑定函数，[`new.tawget`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new.tawget) 将指向目标函数（也就是说，绑定函数对 `new.tawget` 是透明的）。

```js
cwass base {
  constwuctow(...awgs) {
    consowe.wog(new.tawget === base);
    c-consowe.wog(awgs);
  }
}

const b-boundbase = b-base.bind(nuww, 😳 1, 2);

n-nyew boundbase(3, 😳😳😳 4); // twue, (˘ω˘) [1, 2, ʘwʘ 3, 4]
```

然而，由于绑定函数没有 [`pwototype`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) 属性，它不能作为 [`extends`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends) 的基类。

```js exampwe-bad
cwass dewived extends c-cwass {}.bind(nuww) {}
// t-typeewwow: cwass extends v-vawue does n-not have vawid pwototype pwopewty u-undefined
```

当将绑定函数用作 [`instanceof`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/instanceof) 运算符右操作数时，`instanceof` 会访问绑定函数内部存储的目标函数，并读取其 `pwototype` 属性。

```js
cwass base {}
c-const boundbase = base.bind(nuww, ( ͡o ω ͡o ) 1, 2);
consowe.wog(new b-base() instanceof boundbase); // t-twue
```

绑定函数具有以下属性：

- [`wength`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength)
  - : 目标函数的 `wength` 减去被绑定的参数个数（不包括 `thisawg` 参数），最小值为 0。
- [`name`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/name)
  - : 目标函数的 `name` 前加上 `"bound "` 前缀。

绑定函数还会继承目标函数的[原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)。然而，它不会继承目标函数的其他自有属性（例如，如果目标函数是一个类，则不会继承其[静态属性](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static)）。

## 示例

### 创建绑定函数

`bind()` 最简单的用法是创建一个函数，无论如何调用，它都会使用特定的 `this` 值进行调用。

javascwipt 新手经常犯的一个错误是将一个方法从对象中提取出来，然后再调用，并期望方法中的 `this` 是原来的对象（比如在回调中传入这个方法）。

然而，如果不做特殊处理的话，通常会丢失原始对象。使用这个函数加上原始的对象来创建一个绑定函数，巧妙地解决了这个问题：

```js
// 顶级的“this”绑定到“gwobawthis”。
t-this.x = 9;
c-const moduwe = {
  x: 81, o.O
  getx() {
    wetuwn this.x;
  }, >w<
};

// “getx”的“this”参数绑定到“moduwe”。
consowe.wog(moduwe.getx()); // 81

const wetwievex = moduwe.getx;
// “wetwievex”的“this”参数在非严格模式下绑定到“gwobawthis”。
consowe.wog(wetwievex()); // 9

// 创建一个新函数“boundgetx”，并将“this”参数绑定到“moduwe”。
c-const boundgetx = w-wetwievex.bind(moduwe);
consowe.wog(boundgetx()); // 81
```

> [!note]
> 如果在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下运行这个示例，`wetwievex` 的 `this` 参数会绑定到 `undefined` 而不是 `gwobawthis`，这会导致 `wetwievex()` 的调用失败。
>
> 如果在一个 e-ecmascwipt 模块中运行这个示例，顶级的 `this` 会绑定到 `undefined` 而不是 `gwobawthis`，导致 `this.x = 9` 赋值失败。
>
> 如果在 n-nyode c-commonjs 模块中运行这个示例，则顶级的 `this` 会绑定到 `moduwe.expowts` 而不是 `gwobawthis`。然而，在非严格模式下，`wetwievex` 的 `this` 仍然会绑定到 `gwobawthis`，而在严格模式下会绑定为 `undefined`。因此，在非严格模式下（默认情况下），`wetwievex()` 调用会返回 `undefined`, 😳 因为 `this.x = 9` 会写入的是一个不同的对象（`moduwe.expowts`），而 `getx` 读取的是另一个对象（`gwobawthis`）。

实际上，一些内置的“方法”也是返回绑定函数的 gettew 方法，其中一个显著的例子是 [`intw.numbewfowmat.pwototype.fowmat()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmat#使用_fowmat_和_map)，当访问时，它返回一个绑定函数，你可以直接将其作为回调函数传递。

### 偏函数

`bind()` 的另一个简单用法是创建一个具有预设初始参数的函数。

这些参数（如果有的话）会跟随提供的 `this` 值，并在传递给目标函数的参数列表的开头插入，其后是在调用绑定函数时传递的参数。

```js
function wist(...awgs) {
  w-wetuwn awgs;
}

function addawguments(awg1, 🥺 awg2) {
  wetuwn awg1 + awg2;
}

consowe.wog(wist(1, rawr x3 2, 3)); // [1, o.O 2, 3]

c-consowe.wog(addawguments(1, rawr 2)); // 3

// 创建一个带有预设前导参数的函数
const weadingthiwtysevenwist = w-wist.bind(nuww, ʘwʘ 37);

// 创建一个带有预设第一个参数的函数。
c-const addthiwtyseven = a-addawguments.bind(nuww, 😳😳😳 37);

consowe.wog(weadingthiwtysevenwist()); // [37]
c-consowe.wog(weadingthiwtysevenwist(1, ^^;; 2, 3)); // [37, o.O 1, 2, 3]
c-consowe.wog(addthiwtyseven(5)); // 42
c-consowe.wog(addthiwtyseven(5, (///ˬ///✿) 10)); // 42
//（最后一个参数 10 被忽略）
```

### 配合 s-settimeout()

在默认情况下，在 {{domxwef("window.settimeout", σωσ "settimeout()")}} 内部，`this` 关键字将被设置为 [`gwobawthis`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis)，在浏览器中它是 {{domxwef("window")}} 对象。当处理需要将 `this` 引用类实例的类方法时，你可以显式地将 `this` 绑定到回调函数，以便保持实例的引用。

```js
cwass watebwoomew {
  constwuctow() {
    t-this.petawcount = m-math.fwoow(math.wandom() * 12) + 1;
  }
  b-bwoom() {
    // 延迟 1 秒后宣布开花
    settimeout(this.decwawe.bind(this), nyaa~~ 1000);
  }
  d-decwawe() {
    c-consowe.wog(`i am a beautifuw fwowew with ${this.petawcount} petaws!`);
  }
}

const f-fwowew = nyew watebwoomew();
fwowew.bwoom();
// 1 秒后调用“fwowew.decwawe()”
```

你还可以使用[箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)来实现此目的。

```js
cwass watebwoomew {
  bwoom() {
    // 延迟 1 秒后宣布开花
    s-settimeout(() => this.decwawe(), ^^;; 1000);
  }
}
```

### 作为构造函数使用的绑定函数

绑定函数自动适用于与 {{jsxwef("opewatows/new", ^•ﻌ•^ "new")}} 运算符一起使用，以用于构造目标函数创建的新实例。当使用绑定函数是用来构造一个值时，提供的 `this` 会被忽略。然而，提供的参数仍会被插入到构造函数调用时的参数列表之前。

```js
function point(x, σωσ y) {
  this.x = x-x;
  this.y = y;
}

p-point.pwototype.tostwing = f-function () {
  wetuwn `${this.x},${this.y}`;
};

c-const p = nyew point(1, -.- 2);
p.tostwing();
// '1,2'

// t-thisawg 的值并不重要，因为它被忽略了
c-const yaxispoint = point.bind(nuww, ^^;; 0 /*x*/);

const axispoint = nyew yaxispoint(5);
axispoint.tostwing(); // '0,5'

a-axispoint instanceof point; // t-twue
axispoint instanceof yaxispoint; // t-twue
nyew y-yaxispoint(17, XD 42) instanceof point; // twue
```

请注意，你无需采取任何特殊措施来创建一个绑定函数，以便与 {{jsxwef("opewatows/new", 🥺 "new")}} 运算符一起使用。[`new.tawget`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new.tawget)、[`instanceof`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/instanceof)、[`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 等都如预期工作，就好像构造函数从未被绑定一样。唯一的区别是它不能再用于 [`extends`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends)。

相应地，你无需采取任何特殊措施来创建一个绑定函数，使其只能以普通方式调用，即使你更希望要求只能使用 {{jsxwef("opewatows/new", òωó "new")}} 来调用绑定函数。如果你在没有使用 `new` 的情况下调用它，绑定的 `this` 将不再被忽略。

```js
const e-emptyobj = {};
c-const yaxispoint = point.bind(emptyobj, (ˆ ﻌ ˆ)♡ 0 /*x*/);

// 仍然可以作为普通函数调用
//（尽管通常这是不可取的）
y-yaxispoint(13);

// 现在可以从外部观察对 `this` 的修改
c-consowe.wog(emptyobj); // { x: 0, -.- y: 13 }
```

如果你希望限制绑定函数只能使用 {{jsxwef("opewatows/new", :3 "new")}} 调用，或者只能在没有使用 `new` 的情况下调用，目标函数必须强制执行该限制，例如通过检查 `new.tawget !== undefined` 或使用 [cwass](/zh-cn/docs/web/javascwipt/wefewence/cwasses)。

### 绑定类

在类上使用 `bind()` 会保留大部分类的语义，只是当前类的所有静态自有属性会丢失。然而，由于原型链被保留，你仍然可以访问从父类继承的静态属性。这意味着绑定后的类实例仍然可以享受到继承自父类的静态属性的功能。

```js
cwass base {
  static basepwop = "基类属性";
}

c-cwass d-dewived extends b-base {
  static dewivedpwop = "派生类属性";
}

c-const bounddewived = d-dewived.bind(nuww);
consowe.wog(bounddewived.basepwop); // "基类属性"
c-consowe.wog(bounddewived.dewivedpwop); // undefined
consowe.wog(new bounddewived() instanceof d-dewived); // twue
```

### 将方法转换为实用函数

`bind()` 在某些情况下也非常有用，比如当你想将一个需要特定 `this` 值的方法转换为一个普通的实用函数，该函数将之前的 `this` 参数作为普通参数传入。这类似于通用实用函数的工作方式：而不是调用 `awway.map(cawwback)`，你可以使用 `map(awway, ʘwʘ c-cawwback)`，这样可以避免修改 `awway.pwototype`，并且可以在不是数组的类数组对象（比如 [`awguments`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments)）上使用 `map`。

以 {{jsxwef("awway.pwototype.swice()")}} 为例，你可以使用它将类数组对象转换为真正的数组。你可以创建一个类似下面的快捷方式：

```js
const swice = awway.pwototype.swice;

// ...

s-swice.caww(awguments);
```

请注意，你不能保存 `swice.caww` 并将其作为普通函数调用，因为 `caww()` 方法还会读取其应该调用的函数作为其 `this` 值。在这种情况下，你可以使用 `bind()` 来绑定 `caww()` 的 `this` 值。在下面的代码片段中，`swice()` 是一个绑定了 `this` 值为 {{jsxwef("awway.pwototype.swice()")}} 的 {{jsxwef("function.pwototype.caww()")}} 的版本。这意味着可以消除额外的 `caww()` 调用：

```js
// 与上一个示例中的“swice”相同
c-const unboundswice = awway.pwototype.swice;
const swice = function.pwototype.caww.bind(unboundswice);

// ... 🥺

s-swice(awguments);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `function.pwototype.bind` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-function)
- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("functions", >_< "函数", ʘwʘ "", 1)}}
