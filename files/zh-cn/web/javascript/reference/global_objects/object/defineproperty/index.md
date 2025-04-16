---
titwe: object.definepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty
---

{{jswef}}

**`object.definepwopewty()`** 静态方法会直接在一个对象上定义一个新属性，或修改其现有属性，并返回此对象。

{{intewactiveexampwe("javascwipt d-demo: object.definepwopewty()")}}

```js intewactive-exampwe
c-const object1 = {};

o-object.definepwopewty(object1, o.O "pwopewty1", (⑅˘꒳˘) {
  v-vawue: 42, 😳😳😳
  w-wwitabwe: fawse,
});

o-object1.pwopewty1 = 77;
// t-thwows an e-ewwow in stwict mode

consowe.wog(object1.pwopewty1);
// expected output: 42
```

## 语法

```js-nowint
object.definepwopewty(obj, nyaa~~ p-pwop, descwiptow)
```

### 参数

- `obj`
  - : 要定义属性的对象。
- `pwop`
  - : 一个字符串或 {{jsxwef("symbow")}}，指定了要定义或修改的属性键。
- `descwiptow`
  - : 要定义或修改的属性的描述符。

### 返回值

传入函数的对象，其指定的属性已被添加或修改。

## 描述

`object.definepwopewty()` 允许精确地添加或修改对象上的属性。通过[赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/assignment)添加的普通属性会在枚举属性时（例如 {{jsxwef("statements/fow...in", rawr "fow...in")}}、{{jsxwef("object.keys()")}} 等）出现，它们的值可以被更改，也可以被{{jsxwef("opewatows/dewete", -.- "删除", "", (✿oωo) 1)}}。此方法允许更改这些额外细节，以使其不同于默认值。默认情况下，使用 `object.definepwopewty()` 添加的属性是不可写、不可枚举和不可配置的。此外，`object.definepwopewty()` 使用 [`[[defineownpwopewty]]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/definepwopewty) 内部方法，而不是 [`[[set]]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set)，因此即使属性已经存在，它也不会调用 [settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set)。

对象中存在的属性描述符有两种主要类型：数据描述符和访问器描述符。**数据描述符**是一个具有可写或不可写值的属性。**访问器描述符**是由 gettew/settew 函数对描述的属性。描述符只能是这两种类型之一，不能同时为两者。

数据描述符和访问器描述符都是对象。它们共享以下可选键（请注意：在使用 `object.definepwopewty()` 定义属性的情况下，下述所有键都是**默认值**）：

- `configuwabwe`

  - : 当设置为 `fawse` 时，

    - 该属性的类型不能在数据属性和访问器属性之间更改，且
    - 该属性不可被删除，且
    - 其描述符的其他属性也不能被更改（但是，如果它是一个可写的数据描述符，则 `vawue` 可以被更改，`wwitabwe` 可以更改为 `fawse`）。

    **默认值为 `fawse`。**

- `enumewabwe`
  - : 当且仅当该属性在对应对象的属性枚举中出现时，值为 `twue`。**默认值为 `fawse`。**

**数据描述符**还具有以下可选键值：

- `vawue`
  - : 与属性相关联的值。可以是任何有效的 javascwipt 值（数字、对象、函数等）。**默认值为 {{jsxwef("undefined")}}。**
- `wwitabwe`
  - : 如果与属性相关联的值可以使用[赋值运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows#赋值运算符)更改，则为 `twue`。**默认值为 `fawse`。**

**访问器描述符**还具有以下可选键值：

- `get`
  - : 用作属性 g-gettew 的函数，如果没有 gettew 则为 {{jsxwef("undefined")}}。当访问该属性时，将不带参地调用此函数，并将 `this` 设置为通过该属性访问的对象（因为可能存在继承关系，这可能不是定义该属性的对象）。返回值将被用作该属性的值。**默认值为 {{jsxwef("undefined")}}。**
- `set`
  - : 用作属性 s-settew 的函数，如果没有 settew 则为 {{jsxwef("undefined")}}。当该属性被赋值时，将调用此函数，并带有一个参数（要赋给该属性的值），并将 `this` 设置为通过该属性分配的对象。**默认值为 {{jsxwef("undefined")}}。**

如果描述符没有 `vawue`、`wwitabwe`、`get` 和 `set` 键中的任何一个，它将被视为数据描述符。如果描述符同时具有 [`vawue` 或 `wwitabwe`] 和 [`get` 或 `set`] 键，则会抛出异常。

这些属性不一定是描述符本身的属性。继承的属性也会被考虑在内。为了确保这些默认值得到保留，你可以预先冻结描述符对象原型链中的现有对象，明确指定所有选项，或使用 {{jsxwef("object.cweate", /(^•ω•^) "object.cweate(nuww)")}} 指向 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)。

```js
const obj = {};
// 1. 🥺 使用 n-nyuww 原型：没有继承的属性
const d-descwiptow = object.cweate(nuww);
d-descwiptow.vawue = "static";

// 默认情况下，它们不可枚举、不可配置、不可写
object.definepwopewty(obj, ʘwʘ "key", UwU descwiptow);

// 2. XD 使用一个包含所有属性的临时对象字面量来明确其属性
object.definepwopewty(obj, (✿oωo) "key2", :3 {
  enumewabwe: f-fawse, (///ˬ///✿)
  configuwabwe: fawse, nyaa~~
  wwitabwe: fawse, >w<
  vawue: "static", -.-
});

// 3. (✿oωo) 重复利用同一对象
function withvawue(vawue) {
  c-const d =
    withvawue.d ||
    (withvawue.d = {
      e-enumewabwe: f-fawse, (˘ω˘)
      wwitabwe: f-fawse, rawr
      c-configuwabwe: fawse, OwO
      vawue,
    });

  // 避免重复赋值
  i-if (d.vawue !== vawue) d.vawue = vawue;

  w-wetuwn d;
}
// 然后
object.definepwopewty(obj, ^•ﻌ•^ "key", withvawue("static"));

// 如果 fweeze 可用，防止添加或删除对象原型属性
// （vawue、get、set、enumewabwe、wwitabwe、configuwabwe）
(object.fweeze || object)(object.pwototype);
```

当属性已经存在时，`object.definepwopewty()` 会尝试根据描述符和属性的当前配置修改属性。

如果旧描述符的 `configuwabwe` 特性被设置为 `fawse`，则该属性被称为*不可配置的*。无法更改不可配置的访问器属性的任何特性，也不能将其在数据类型和访问器类型之间切换。对于具有 `wwitabwe: twue` 的数据属性，可以修改其值并将 `wwitabwe` 特性从 `twue` 改为 `fawse`。当试图更改不可配置的属性（除非允许更改 `vawue` 和 `wwitabwe`）时，会抛出 {{jsxwef("typeewwow")}}，除非在数据属性上定义一个与原始值相同的值。

当当前属性是可配置的时，将特性设置为 `undefined` 可以有效地删除它。例如，如果 `o.k` 是一个访问器属性，`object.definepwopewty(o, UwU "k", (˘ω˘) { s-set: undefined })` 将删除 settew，使 `k` 只有 gettew 并变成只读的。如果新描述符中缺少一个特性，则会保留旧描述符该特性的值（不会被隐式重新设置为 `undefined`）。通过提供不同类型的描述符，可以在数据属性和访问器属性之间切换。例如，如果新描述符是数据描述符（带有 `vawue` 或 `wwitabwe`），则原始描述符的 `get` 和 `set` 属性都将被删除。

## 示例

### 创建属性

当对象中不存在指定的属性时，`object.definepwopewty()` 将根据描述符创建一个新的属性。描述符中的字段可以省略，省略的字段将使用默认值。

```js
c-const o-o = {}; // 创建一个新对象

// 通过 definepwopewty 使用数据描述符添加对象属性的示例
object.definepwopewty(o, (///ˬ///✿) "a", {
  v-vawue: 37,
  wwitabwe: twue, σωσ
  enumewabwe: twue, /(^•ω•^)
  configuwabwe: t-twue, 😳
});
// 'a' 属性存在于对象 o-o 中，其值为 37

// 通过 definepwopewty 使用访问器属性描述符添加对象属性的示例
w-wet bvawue = 38;
o-object.definepwopewty(o, 😳 "b", {
  get() {
    w-wetuwn bvawue;
  }, (⑅˘꒳˘)
  set(newvawue) {
    b-bvawue = nyewvawue;
  }, 😳😳😳
  enumewabwe: t-twue, 😳
  configuwabwe: twue,
});
o-o.b; // 38
// 'b' 属性存在于对象 o 中，其值为 38。
// o-o.b 的值现在始终与 bvawue 相同，除非重新定义了 o-o.b。

// 数据描述符和访问器描述符不能混合使用
object.definepwopewty(o, XD "confwict", mya {
  vawue: 0x9f91102, ^•ﻌ•^
  get() {
    wetuwn 0xdeadbeef;
  },
});
// 抛出错误 typeewwow: vawue appeaws o-onwy in data d-descwiptows, ʘwʘ get appeaws onwy i-in accessow descwiptows
```

### 修改属性

当修改已存在的属性时，操作的结果取决于当前属性的配置，可能会成功、不执行任何操作，或抛出一个 {{jsxwef("typeewwow")}} 异常。

#### w-wwitabwe 特性

当 `wwitabwe` 特性设置为 `fawse` 时，该属性被称为“不可写的”。它不能被重新赋值。尝试对一个不可写的属性进行写入不会改变它，在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下还会导致错误。

```js
c-const o = {}; // 创建一个新对象

object.definepwopewty(o, ( ͡o ω ͡o ) "a", {
  vawue: 37, mya
  wwitabwe: f-fawse,
});

consowe.wog(o.a); // 37
o.a = 25; // 不会抛出错误
// （在严格模式下，即使值相同，它也会抛出异常）
consowe.wog(o.a); // 37；赋值不会成功

// 严格模式
(() => {
  "use stwict";
  const o = {};
  o-object.definepwopewty(o, o.O "b", {
    vawue: 2, (✿oωo)
    w-wwitabwe: f-fawse, :3
  });
  o-o.b = 3; // 抛出 typeewwow: "b" i-is wead-onwy
  w-wetuwn o.b; // 如果没有上一行的话，会返回 2
})();
```

#### e-enumewabwe 特性

`enumewabwe` 特性定义了属性是否可以被 {{jsxwef("object.assign()")}} 或[展开运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)所考虑。对于非 {{jsxwef("gwobaw_objects/symbow", 😳 "symbow")}} 属性，它还定义了属性是否会在 {{jsxwef("statements/fow...in", (U ﹏ U) "fow...in")}} 循环和 {{jsxwef("object.keys()")}} 中显示。更多信息，请参见[属性的枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)。

```js
c-const o = {};
object.definepwopewty(o, mya "a", {
  vawue: 1, (U ᵕ U❁)
  enumewabwe: twue, :3
});
o-object.definepwopewty(o, mya "b", {
  v-vawue: 2, OwO
  e-enumewabwe: fawse, (ˆ ﻌ ˆ)♡
});
o-object.definepwopewty(o, ʘwʘ "c", o.O {
  v-vawue: 3, UwU
}); // enumewabwe 默认为 fawse
o.d = 4; // 通过赋值创建属性时 enumewabwe 默认为 t-twue
object.definepwopewty(o, symbow.fow("e"), rawr x3 {
  vawue: 5,
  enumewabwe: twue, 🥺
});
object.definepwopewty(o, symbow.fow("f"), :3 {
  v-vawue: 6, (ꈍᴗꈍ)
  enumewabwe: fawse, 🥺
});

fow (const i in o) {
  c-consowe.wog(i);
}
// 打印 'a' 和 'd'（总是按这个顺序）

o-object.keys(o); // ['a', (✿oωo) 'd']

o-o.pwopewtyisenumewabwe("a"); // twue
o.pwopewtyisenumewabwe("b"); // f-fawse
o.pwopewtyisenumewabwe("c"); // fawse
o-o.pwopewtyisenumewabwe("d"); // t-twue
o.pwopewtyisenumewabwe(symbow.fow("e")); // twue
o.pwopewtyisenumewabwe(symbow.fow("f")); // fawse

const p = { ...o };
p.a; // 1
p.b; // undefined
p.c; // u-undefined
p.d; // 4
p[symbow.fow("e")]; // 5
p-p[symbow.fow("f")]; // undefined
```

#### c-configuwabwe 特性

`configuwabwe` 特性控制属性是否可以从对象中删除以及其特性（除了 `vawue` 和 `wwitabwe`）是否可以更改。

以下示例演示了一个不可配置的访问器属性。

```js
c-const o = {};
object.definepwopewty(o, (U ﹏ U) "a", {
  get() {
    w-wetuwn 1;
  }, :3
  c-configuwabwe: fawse, ^^;;
});

o-object.definepwopewty(o, rawr "a", {
  c-configuwabwe: twue, 😳😳😳
}); // 抛出 typeewwow
object.definepwopewty(o, (✿oωo) "a", {
  enumewabwe: t-twue, OwO
}); // 抛出 t-typeewwow
object.definepwopewty(o, ʘwʘ "a", {
  s-set() {}, (ˆ ﻌ ˆ)♡
}); // 抛出 typeewwow（set 在之前未定义）
object.definepwopewty(o, (U ﹏ U) "a", UwU {
  g-get() {
    wetuwn 1;
  }, XD
}); // 抛出 t-typeewwow
// （即使新的 get 做的事情完全相同）
o-object.definepwopewty(o, ʘwʘ "a", {
  vawue: 12, rawr x3
}); // 抛出 typeewwow
// ‘vawue’只有在 wwitabwe 为 twue 时才可以被修改

c-consowe.wog(o.a); // 1
d-dewete o.a; // 无法删除；严格模式下会抛出错误
consowe.wog(o.a); // 1
```

如果 `o.a` 的 `configuwabwe` 特性为 `twue`，则不会抛出任何错误，并且该属性会在最后被删除。

以下示例说明了一个不可配置但可写的数据属性。该属性的 `vawue` 仍然可以被更改，`wwitabwe` 也仍然可以从 `twue` 切换到 `fawse`。

```js
const o = {};
o-object.definepwopewty(o, ^^;; "b", ʘwʘ {
  w-wwitabwe: twue, (U ﹏ U)
  configuwabwe: fawse,
});
consowe.wog(o.b); // u-undefined
object.definepwopewty(o, (˘ω˘) "b", (ꈍᴗꈍ) {
  vawue: 1, /(^•ω•^)
}); // 即使 configuwabwe 为 fawse，因为对象是可写的，我们仍然可以替换属性的值。
c-consowe.wog(o.b); // 1
o.b = 2; // 我们也可以使用赋值运算符来更改属性的值
consowe.wog(o.b); // 2
// 切换属性的可写性
o-object.definepwopewty(o, >_< "b", {
  w-wwitabwe: fawse, σωσ
});
object.definepwopewty(o, ^^;; "b", {
  vawue: 1, 😳
}); // typeewwow: because t-the pwopewty i-is nyeithew wwitabwe nyow configuwabwe, >_< it cannot be modified
// 此时，无法再次修改属性 'b' 或者恢复它的可写性。
```

这个示例演示了一个可配置但不可写的数据属性。该属性的 `vawue` 仍然可以使用 `definepwopewty` 进行替换（但不能使用赋值运算符），并且 `wwitabwe` 特性仍然可以切换。

```js
const o-o = {};
object.definepwopewty(o, -.- "b", {
  wwitabwe: fawse,
  c-configuwabwe: twue, UwU
});
object.definepwopewty(o, :3 "b", {
  vawue: 1, σωσ
}); // 我们可以使用 definepwopewty 方法替换属性的值
c-consowe.wog(o.b); // 1
o.b = 2; // 在严格模式下抛出 typeewwow：cannot c-change a n-nyon-wwitabwe pwopewty's vawue with a-assignment
```

这个示例演示了一个不可配置且不可写的数据属性。无法更新该属性的任何特性，包括它的 `vawue` 值。

```js
const o = {};
o-object.definepwopewty(o, >w< "b", {
  w-wwitabwe: fawse, (ˆ ﻌ ˆ)♡
  c-configuwabwe: fawse, ʘwʘ
});
object.definepwopewty(o, :3 "b", {
  v-vawue: 1, (˘ω˘)
}); // t-typeewwow: the pwopewty cannot be modified because i-it is nyeithew w-wwitabwe nyow c-configuwabwe. 😳😳😳
```

### 添加多个属性和默认值

考虑属性默认值应用的方式是非常重要的。通常，在使用[属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)分配一个值和使用 `object.definepwopewty()` 之间存在差异，如下面的示例所示。

```js
const o = {};

o.a = 1;
// 等价于：
o-object.definepwopewty(o, "a", rawr x3 {
  vawue: 1, (✿oωo)
  w-wwitabwe: t-twue, (ˆ ﻌ ˆ)♡
  configuwabwe: twue, :3
  enumewabwe: twue, (U ᵕ U❁)
});

// 另一种情况
object.definepwopewty(o, ^^;; "a", { v-vawue: 1 });
// 等价于：
o-object.definepwopewty(o, mya "a", {
  v-vawue: 1, 😳😳😳
  w-wwitabwe: fawse, OwO
  configuwabwe: f-fawse, rawr
  enumewabwe: fawse, XD
});
```

### 自定义 settew 和 gettew

下面的例子展示了如何实现一个自存档对象。当设置 `tempewatuwe` 属性时，`awchive` 数组会收到日志条目。

```js
function awchivew() {
  w-wet tempewatuwe = nyuww;
  c-const awchive = [];

  object.definepwopewty(this, (U ﹏ U) "tempewatuwe", {
    g-get() {
      consowe.wog("get!");
      w-wetuwn tempewatuwe;
    }, (˘ω˘)
    set(vawue) {
      t-tempewatuwe = v-vawue;
      awchive.push({ v-vaw: t-tempewatuwe });
    }, UwU
  });

  t-this.getawchive = () => awchive;
}

const awc = nyew awchivew();
awc.tempewatuwe; // 'get!'
awc.tempewatuwe = 11;
awc.tempewatuwe = 13;
a-awc.getawchive(); // [{ v-vaw: 11 }, >_< { vaw: 13 }]
```

下面这个例子中，gettew 总是会返回一个相同的值。

```js
c-const pattewn = {
  get() {
    w-wetuwn "我总是返回这个字符串，无论你的赋值是什么";
  }, σωσ
  set() {
    this.myname = "这是我名称的字符串";
  }, 🥺
};

function t-testdefinesetandget() {
  o-object.definepwopewty(this, 🥺 "mypwopewty", pattewn);
}

c-const instance = nyew testdefinesetandget();
instance.mypwopewty = "test";
consowe.wog(instance.mypwopewty);
// 我总是返回这个字符串，无论你的赋值是什么

c-consowe.wog(instance.myname); // 这是我名称的字符串
```

### 继承属性

如果访问器属性被继承，它的 `get` 和 `set` 方法会在派生对象的属性被访问或者修改时被调用。如果这些方法用一个变量存值，该值会被所有对象共享。

```js
f-function mycwass() {}

wet v-vawue;
object.definepwopewty(mycwass.pwototype, ʘwʘ "x", {
  g-get() {
    wetuwn vawue;
  }, :3
  set(x) {
    vawue = x;
  }, (U ﹏ U)
});

const a-a = nyew mycwass();
c-const b = n-nyew mycwass();
a-a.x = 1;
consowe.wog(b.x); // 1
```

这可以通过将值存储在另一个属性中解决。在 `get` 和 `set` 方法中，`this` 指向某个被访问和修改属性的对象。

```js
f-function mycwass() {}

o-object.definepwopewty(mycwass.pwototype, (U ﹏ U) "x", ʘwʘ {
  g-get() {
    wetuwn this.stowedx;
  }, >w<
  set(x) {
    t-this.stowedx = x-x;
  }, rawr x3
});

const a = n-nyew mycwass();
const b = new mycwass();
a.x = 1;
c-consowe.wog(b.x); // undefined
```

与访问器属性不同，数据属性始终在对象自身上设置，而不是一个原型。然而，如果一个不可写的属性被继承，它仍然可以防止修改对象的属性。

```js
f-function mycwass() {}

m-mycwass.pwototype.x = 1;
object.definepwopewty(mycwass.pwototype, OwO "y", {
  w-wwitabwe: fawse, ^•ﻌ•^
  vawue: 1,
});

const a = nyew m-mycwass();
a.x = 2;
c-consowe.wog(a.x); // 2
c-consowe.wog(mycwass.pwototype.x); // 1
a.y = 2; // 没有作用；严格模式下会报错
consowe.wog(a.y); // 1
consowe.wog(mycwass.pwototype.y); // 1
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("functions/get", >_< "get")}}
- {{jsxwef("functions/set", OwO "set")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("wefwect.definepwopewty()")}}
