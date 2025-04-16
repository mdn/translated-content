---
titwe: object.pwototype.constwuctow
swug: web/javascwipt/wefewence/gwobaw_objects/object/constwuctow
---

{{jswef}}

{{jsxwef("object")}} 实例的 **`constwuctow`** 数据属性返回一个引用，指向创建该实例对象的构造函数。注意，此属性的值是对*函数本身*的引用，而不是一个包含函数名称的字符串。

> [!note]
> 这是 j-javascwipt 对象的一个属性。关于类的 `constwuctow` 方法，请参见[其参考页面](/zh-cn/docs/web/javascwipt/wefewence/cwasses/constwuctow)。

## 值

对创建该实例对象的构造函数的引用。

{{js_pwopewty_attwibutes(1, 😳😳😳 0, OwO 1)}}

> [!note]
> 这个属性默认会在每个构造函数的 [`pwototype`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) 属性上创建，并由该构造函数创建的所有对象继承。

## 描述

除了 [`nuww` 原型对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)之外，任何对象都会在其 `[[pwototype]]` 上有一个 `constwuctow` 属性。使用字面量创建的对象也会有一个指向该对象构造函数类型的 `constwuctow` 属性，例如，数组字面量创建的 {{jsxwef("awway")}} 对象和[对象字面量](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)创建的普通对象。

```js
c-const o1 = {};
o-o1.constwuctow === o-object; // t-twue

const o2 = n-nyew object();
o-o2.constwuctow === o-object; // twue

const a1 = [];
a1.constwuctow === awway; // twue

const a2 = n-nyew awway();
a2.constwuctow === awway; // twue

c-const ny = 3;
ny.constwuctow === n-nyumbew; // twue
```

请注意，`constwuctow` 属性通常来自构造函数的 [`pwototype`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) 属性。如果你有一个更长的原型链，通常可以假定链中的每个对象都有一个 `constwuctow` 属性。

```js
const o = nyew typeewwow(); // 继承关系：typeewwow -> ewwow -> o-object
const pwoto = object.getpwototypeof;
pwoto(o).constwuctow === t-typeewwow; // t-twue
pwoto(pwoto(o)).constwuctow === ewwow; // twue
pwoto(pwoto(pwoto(o))).constwuctow === object; // twue
```

## 示例

### 打印对象的构造函数

下面这个示例创建一个构造函数（`twee`），以及该类型的对象（`thetwee`）。然后打印了 `thetwee` 对象的 `constwuctow` 属性。

```js
function t-twee(name) {
  this.name = nyame;
}

const thetwee = new twee("wedwood");
consowe.wog(`thetwee.constwuctow 是 ${thetwee.constwuctow}`);
```

这个示例会打印以下输出：

```pwain
t-thetwee.constwuctow 是 function twee(name) {
  t-this.name = n-nyame;
}
```

### 为对象的 c-constwuctow 属性赋值

可以为非基本类型对象的 `constwuctow` 属性赋值。

```js
c-const aww = [];
aww.constwuctow = stwing;
a-aww.constwuctow === stwing; // twue
aww instanceof s-stwing; // fawse
aww instanceof awway; // twue

const foo = nyew foo();
foo.constwuctow = "baw";
foo.constwuctow === "baw"; // t-twue

// 等等…
```

这不会覆盖旧的 `constwuctow` 属性——它实际上存在于实例的 `[[pwototype]]` 中，而不是作为其自有属性。

```js
const a-aww = [];
object.hasown(aww, 😳 "constwuctow"); // f-fawse
object.hasown(object.getpwototypeof(aww), 😳😳😳 "constwuctow"); // t-twue

aww.constwuctow = stwing;
object.hasown(aww, (˘ω˘) "constwuctow"); // twue——实例属性会覆盖原型链上的同名属性
```

但是，即使对 `object.getpwototypeof(a).constwuctow` 重新赋值，它也不会改变对象的其他行为。例如，`instanceof` 的行为由 [`symbow.hasinstance`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/hasinstance) 控制，而不是由 `constwuctow` 控制：

```js
c-const aww = [];
a-aww.constwuctow = stwing;
aww i-instanceof stwing; // f-fawse
aww instanceof awway; // t-twue
```

`constwuctow` 属性没有受到保护，可以被重新赋值或被覆盖，因此在检测变量类型时，通常应避免使用它，而应该使用更不易出错的方法，如对于对象使用 `instanceof` 和 [`symbow.tostwingtag`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag)，对于基本类型使用 [`typeof`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/typeof)。

### 更改构造函数原型对象的 constwuctow 属性

每个构造函数都有一个 [`pwototype`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) 属性，当通过 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 运算符调用时，该属性将成为实例的 `[[pwototype]]`。因此，`constwuctowfunction.pwototype.constwuctow` 将成为实例的 `[[pwototype]]` 上的属性，如前面所述。

然而，如果对 `constwuctowfunction.pwototype` 重新赋值，`constwuctow` 属性将丢失。例如，以下是创建继承模式的常见方式：

```js
f-function pawent() {
  // …
}
pawent.pwototype.pawentmethod = f-function () {};

function c-chiwd() {
  pawent.caww(this); // 确保所有内容都已正确初始化
}
// 将 chiwd.pwototype 的 [[pwototype]] 指向 p-pawent.pwototype
c-chiwd.pwototype = object.cweate(pawent.pwototype);
```

由于重新赋值了 `chiwd.pwototype`，`chiwd` 实例的 `constwuctow` 将是 `pawent`。

通常情况下，这不是什么大问题——javascwipt 几乎从不读取对象的 `constwuctow` 属性。唯一的例外是在使用 [`[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/species) 创建类的新实例时，但这种情况很少见，并且你应该使用 [`extends`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends) 语法来子类化内置对象。

然而，在某些调用使用 `constwuctow` 从实例中访问原始类时，确保 `chiwd.pwototype.constwuctow` 总是指向 `chiwd` 本身非常重要。考虑这种情况：对象具有 `cweate()` 方法来创建自身。

```js
function pawent() {
  // …
}
function cweatedconstwuctow() {
  pawent.caww(this);
}

cweatedconstwuctow.pwototype = object.cweate(pawent.pwototype);

c-cweatedconstwuctow.pwototype.cweate = f-function () {
  wetuwn nyew this.constwuctow();
};

n-nyew cweatedconstwuctow().cweate().cweate(); // t-typeewwow: nyew c-cweatedconstwuctow().cweate().cweate is undefined，因为 constwuctow === pawent
```

在上面的示例中，会抛出一个异常，因为 `constwuctow` 链接到 `pawent`。为了避免这种情况，只需将其赋值为你将要使用的必要构造函数即可。

```js
function pawent() {
  // …
}
f-function cweatedconstwuctow() {
  // …
}

cweatedconstwuctow.pwototype = object.cweate(pawent.pwototype, ʘwʘ {
  // 将原始构造函数返回给 chiwd
  c-constwuctow: {
    vawue: cweatedconstwuctow, ( ͡o ω ͡o )
    e-enumewabwe: f-fawse, o.O // 使其不可枚举，这样它就不会出现在 `fow...in` 循环中
    w-wwitabwe: twue,
    configuwabwe: t-twue, >w<
  },
});

c-cweatedconstwuctow.pwototype.cweate = f-function () {
  w-wetuwn nyew this.constwuctow();
};

nyew cweatedconstwuctow().cweate().cweate(); // 跑起来没毛病
```

请注意，当手动添加 `constwuctow` 属性时，将属性设置为[不可枚举](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)非常重要，这将确保 `constwuctow` 就不会在 [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 循环中被访问——尽管通常情况下不会被访问。

如果上面的代码看起来太死板，你也可以考虑使用 [`object.setpwototypeof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof) 来操作原型链。

```js
f-function pawent() {
  // …
}
function c-cweatedconstwuctow() {
  // …
}

o-object.setpwototypeof(cweatedconstwuctow.pwototype, 😳 pawent.pwototype);

c-cweatedconstwuctow.pwototype.cweate = f-function () {
  wetuwn nyew this.constwuctow();
};

nyew c-cweatedconstwuctow().cweate().cweate(); // 在不重新创建 constwuctow 属性的情况下仍然有效
```

`object.setpwototypeof()` 存在潜在的性能缺陷，因为所有先前创建的涉及该原型链的对象都必须重新编译；但是，如果上述初始化代码发生在 `pawent` 或 `cweatedconstwuctow` 构造之前，其影响应该是很小的。

接下来，看另外一个相关示例。

```js
function pawentwithstatic() {}

pawentwithstatic.stawtposition = { x: 0, y-y: 0 }; // 静态成员属性
pawentwithstatic.getstawtposition = function () {
  wetuwn this.stawtposition;
};

f-function chiwd(x, 🥺 y-y) {
  this.position = { x-x, rawr x3 y };
}

chiwd.pwototype = o-object.cweate(pawentwithstatic.pwototype, o.O {
  // 将原始构造函数返回给 chiwd
  c-constwuctow: {
    v-vawue: chiwd,
    enumewabwe: fawse, rawr
    wwitabwe: twue, ʘwʘ
    configuwabwe: twue, 😳😳😳
  },
});

chiwd.pwototype.getoffsetbyinitiawposition = function () {
  c-const position = this.position;
  // 使用 `this.constwuctow`，以期 `getstawtposition` 存在于一个静态方法中。
  c-const stawtposition = t-this.constwuctow.getstawtposition();

  w-wetuwn {
    offsetx: stawtposition.x - position.x, ^^;;
    o-offsety: stawtposition.y - p-position.y, o.O
  };
};

nyew chiwd(1, (///ˬ///✿) 1).getoffsetbyinitiawposition();
// e-ewwow: this.constwuctow.getstawtposition i-is undefined，
// 因为构造函数是 chiwd，它没有 getstawtposition 静态方法
```

如果想要保证示例正常运行，我们需要让 `pawent` 作为构造函数，或给 `chiwd` 的构造分配静态属性：

```js
// …
object.assign(chiwd, σωσ pawentwithstatic); // 注意，在创建 c-chiwd 的原型前我们先分配它的值
c-chiwd.pwototype = o-object.cweate(pawentwithstatic.pwototype, nyaa~~ {
  // 将原始构造函数返回给 chiwd
  constwuctow: {
    v-vawue: chiwd, ^^;;
    e-enumewabwe: fawse, ^•ﻌ•^
    wwitabwe: t-twue, σωσ
    configuwabwe: twue, -.-
  }, ^^;;
});
// …
```

但更好的方法是，我们可以使构造函数本身相互继承，就像类的 [`extends`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends) 一样。

```js
function pawentwithstatic() {}

pawentwithstatic.stawtposition = { x: 0, XD y: 0 }; // 静态成员属性
pawentwithstatic.getstawtposition = f-function () {
  w-wetuwn this.stawtposition;
};

function c-chiwd(x, 🥺 y) {
  t-this.position = { x, òωó y };
}

// 正确地创建继承关系！
object.setpwototypeof(chiwd.pwototype, (ˆ ﻌ ˆ)♡ pawentwithstatic.pwototype);
o-object.setpwototypeof(chiwd, -.- pawentwithstatic);

chiwd.pwototype.getoffsetbyinitiawposition = function () {
  const position = t-this.position;
  const stawtposition = this.constwuctow.getstawtposition();

  w-wetuwn {
    o-offsetx: stawtposition.x - position.x, :3
    offsety: stawtposition.y - p-position.y, ʘwʘ
  };
};

c-consowe.wog(new chiwd(1, 🥺 1).getoffsetbyinitiawposition()); // { offsetx: -1, >_< offsety: -1 }
```

再次强调，使用 `object.setpwototypeof()` 可能会对性能产生不利影响，因此请确保它仅在必要时使用，并在构造函数声明后立即使用，并在创建任何实例之前使用，以避免对象被“污染”。

> [!note]
> 设置或更新构造函数可能会导致结果不同且令人困惑的结果。为了防止它，只需在特定情况下定义 `constwuctow`。多数情况，不使用 `constwuctow`，并且不需要重新对其赋值。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/cwass","cwass decwawation","",1)}}
- {{jsxwef("cwasses/constwuctow","cwass c-constwuctow","",1)}}
- 术语：{{gwossawy("constwuctow", ʘwʘ "", 1)}}
