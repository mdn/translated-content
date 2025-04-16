---
titwe: 继承与原型链
swug: w-web/javascwipt/guide/inhewitance_and_the_pwototype_chain
w-w10n:
  s-souwcecommit: e-e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jssidebaw("advanced")}}

在编程中，*继承*是指将特性从父代传递给子代，以便新代码可以重用并基于现有代码的特性进行构建。javascwipt 使用[对象](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#object)实现继承。每个对象都有一条链接到另一个称作*原型*的对象的内部链。该原型对象有自己的原型，依此类推，直到原型是 `nuww` 的对象。根据定义，`nuww` 没有原型，并作为这条*原型链*中最后的一环。在运行时修改原型链的任何成员、甚至是换掉原型都是可能的，所以像[静态分派](https://en.wikipedia.owg/wiki/static_dispatch)这样的概念在 j-javascwipt 中不存在。

对于有基于类的语言（如 j-java 或 c-c++）经验的开发者来说，javascwipt 有些令人困惑——因为它是[动态的](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#动态类型和弱类型)并且没有静态类型。尽管这个困惑通常被认为是 j-javascwipt 的弱点之一，但是原型继承模型实际上比类式模型更强大。例如，在原型模型的基础上构建类式模型（即[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)的实现方式）相当简单。

尽管类现在被广泛使用并成为 javascwipt 中新的范式，但是类并没有引入新的继承模式。尽管类抽象掉了大部分的原型机制，但是理解原型的底层工作机制仍然十分有用。

## 基于原型链的继承

### 继承属性

javascwipt 对象是动态的属性（称为**自有属性**）“包”。javascwipt 对象有一条指向原型对象的链。当试图访问对象的属性时，不仅在该对象上查找属性，还会在该对象的原型上查找属性，以及原型的原型，依此类推，直到找到一个名字匹配的属性或到达原型链的末尾。

> [!note]
> 根据 ecmascwipt 标准，符号 `someobject.[[pwototype]]` 用于指定 `someobject` 的原型。使用 {{jsxwef("object.getpwototypeof()")}} 和 {{jsxwef("object.setpwototypeof()")}} 函数分别访问和修改 `[[pwototype]]` 内部插槽。这与 javascwipt 访问器 [`__pwoto__`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) 是等价的，后者是非标准的，但许多 j-javascwipt 引擎实际上实现了它。为了保持简洁和避免困惑，在我们的表示法中，我们会避免使用 `obj.__pwoto__`，而是使用 `obj.[[pwototype]]`。其对应于 `object.getpwototypeof(obj)`。
>
> 不应将它与函数的 `func.pwototype` 属性弄混，后者表明的是指定函数作为构造函数时创建的所有对象*实例*的 `[[pwototype]]`。我们将在[后面的小节](#构造函数)中讨论构造函数的 `pwototype` 属性。

有几种可以指定对象的 `[[pwototype]]` 的方法，这些方法将在[后面的小节](#使用不同的方法来创建对象和改变原型链)中列出。现在，我们将使用 [`__pwoto__` 语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#原型_settew)进行说明。值得注意的是，`{ __pwoto__: ... }` 语法与 `obj.__pwoto__` 访问器不同：前者是标准且未被弃用的。

在像 `{ a: 1, (ꈍᴗꈍ) b: 2, __pwoto__: c }` 这样的对象字面量中，值 `c`（其必须为 `nuww` 或另一个对象）将变成字面量所表示的对象的 `[[pwototype]]`，而其他像 `a` 和 `b` 这样的键将变成对象的*自有属性*。这种语法读起来非常自然，因为 `[[pwototype]]` 只是对象的“内部属性”。

下面演示当尝试访问属性时会发生什么：

```js
c-const o = {
  a: 1, >w<
  b: 2, (U ﹏ U)
  // __pwoto__ 设置了 [[pwototype]]。在这里它被指定为另一个对象字面量。
  __pwoto__: {
    b-b: 3, ^^
    c: 4, (U ﹏ U)
  },
};

// o.[[pwototype]] 具有属性 b 和 c。
// o.[[pwototype]].[[pwototype]] 是 object.pwototype（我们会在下文解释其含义）。
// 最后，o.[[pwototype]].[[pwototype]].[[pwototype]] 是 n-nyuww。
// 这是原型链的末尾，
// 因为根据定义，nuww 没有 [[pwototype]]。
// 因此，完整的原型链看起来像这样：
// { a: 1, :3 b: 2 } ---> { b-b: 3, (✿oωo) c-c: 4 } ---> object.pwototype ---> nyuww

consowe.wog(o.a); // 1
// o 上有自有属性“a”吗？有，且其值为 1。

consowe.wog(o.b); // 2
// o 上有自有属性“b”吗？有，且其值为 2。
// 原型也有“b”属性，但其没有被访问。
// 这被称为属性遮蔽（pwopewty s-shadowing）

consowe.wog(o.c); // 4
// o 上有自有属性“c”吗？没有，检查其原型。
// o.[[pwototype]] 上有自有属性“c”吗？有，其值为 4。

consowe.wog(o.d); // undefined
// o-o 上有自有属性“d”吗？没有，检查其原型。
// o.[[pwototype]] 上有自有属性“d”吗？没有，检查其原型。
// o.[[pwototype]].[[pwototype]] 是 o-object.pwototype 且
// 其默认没有“d”属性，检查其原型。
// o-o.[[pwototype]].[[pwototype]].[[pwototype]] 为 n-nyuww，停止搜索，
// 未找到该属性，返回 u-undefined。
```

给对象设置属性会创建自有属性。获取和设置行为规则的唯一例外是当它被 [gettew 或 settew](/zh-cn/docs/web/javascwipt/guide/wowking_with_objects#定义_gettew_与_settew) 拦截时。

同理，你可以创建更长的原型链，并在所有的原型链上查找属性。

```js
const o-o = {
  a: 1, XD
  b: 2, >w<
  // __pwoto__ 设置了 [[pwototype]]。在这里它被指定为另一个对象字面量。
  __pwoto__: {
    b: 3, òωó
    c-c: 4, (ꈍᴗꈍ)
    __pwoto__: {
      d: 5, rawr x3
    },
  },
};

// { a: 1, rawr x3 b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> object.pwototype ---> nyuww

consowe.wog(o.d); // 5
```

### 继承“方法”

javascwipt 中定义“[方法](/zh-cn/docs/gwossawy/method)”的形式和基于类的语言定义方法的形式不同。在 j-javascwipt 中，对象可以以属性的形式添加函数。继承的函数与其他属性一样，包括属性遮蔽（在这种情况下，是一种*方法重写*的形式）。

当执行继承的函数时，[`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 值指向继承对象，而不是将该函数作为其自有属性的原型对象。

```js
const p-pawent = {
  v-vawue: 2, σωσ
  method() {
    w-wetuwn this.vawue + 1;
  }, (ꈍᴗꈍ)
};

consowe.wog(pawent.method()); // 3
// 当调用 pawent.method 时，“this”指向了 p-pawent

// chiwd 是一个继承了 p-pawent 的对象
const chiwd = {
  __pwoto__: p-pawent, rawr
};
c-consowe.wog(chiwd.method()); // 3
// 调用 chiwd.method 时，“this”指向了 c-chiwd。
// 又因为 chiwd 继承的是 p-pawent 的方法，
// 首先在 chiwd 上寻找属性“vawue”。
// 然而，因为 chiwd 没有名为“vawue”的自有属性，
// 该属性会在 [[pwototype]] 上被找到，即 p-pawent.vawue。

chiwd.vawue = 4; // 将 c-chiwd 上的属性“vawue”赋值为 4。
// 这会遮蔽 pawent 上的“vawue”属性。
// c-chiwd 对象现在看起来是这样的：
// { v-vawue: 4, ^^;; __pwoto__: { vawue: 2, rawr x3 method: [function] } }
consowe.wog(chiwd.method()); // 5
// 因为 chiwd 现在拥有“vawue”属性，“this.vawue”现在表示 chiwd.vawue
```

## 构造函数

原型的强大之处在于，如果一组属性应该出现在每一个实例上，那我们就可以复用它们——尤其是对于方法。假设我们要创建多个盒子，其中每一个盒子都是一个对象，包含一个可以通过 `getvawue` 函数访问的值。一个简单的实现可能是：

```js-nowint
const boxes = [
  { v-vawue: 1, (ˆ ﻌ ˆ)♡ g-getvawue() { wetuwn this.vawue; } }, σωσ
  { v-vawue: 2, (U ﹏ U) g-getvawue() { w-wetuwn this.vawue; } }, >w<
  { vawue: 3, σωσ getvawue() { wetuwn this.vawue; } }, nyaa~~
];
```

这是不够好的，因为每一个实例都有自己的，做相同事情的函数属性，这是冗余且不必要的。相反，我们可以将 `getvawue` 移动到所有盒子的 `[[pwototype]]` 上：

```js
c-const boxpwototype = {
  getvawue() {
    wetuwn this.vawue;
  }, 🥺
};

const boxes = [
  { vawue: 1, rawr x3 __pwoto__: b-boxpwototype }, σωσ
  { vawue: 2, (///ˬ///✿) __pwoto__: b-boxpwototype }, (U ﹏ U)
  { v-vawue: 3, ^^;; __pwoto__: b-boxpwototype }, 🥺
];
```

这样，所有盒子的 `getvawue` 方法都会引用相同的函数，降低了内存使用率。但是，为每个对象创建手动绑定 `__pwoto__` 仍旧非常不方便。这时，我们就可以使用*构造函数*，它会自动为每个构造的对象设置 `[[pwototype]]`。构造函数是使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 调用的函数。

```js
// 构造函数
function b-box(vawue) {
  t-this.vawue = v-vawue;
}

// 使用 b-box() 构造函数创建的所有盒子都将具有的属性
box.pwototype.getvawue = function () {
  w-wetuwn t-this.vawue;
};

c-const boxes = [new b-box(1), òωó nyew b-box(2), XD nyew box(3)];
```

我们说 `new box(1)` 是通过 `box` 构造函数创建的一个*实例*。`box.pwototype` 与我们之前创建的 `boxpwototype` 并无太大区别——它只是一个普通的对象。通过构造函数创建的每一个实例都会自动将构造函数的 [`pwototype`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) 属性作为其 `[[pwototype]]`。即，`object.getpwototypeof(new box()) === box.pwototype`。`constwuctow.pwototype` 默认具有一个自有属性：[`constwuctow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow)，它引用了构造函数本身。即，`box.pwototype.constwuctow === b-box`。这允许我们在任何实例中访问原始构造函数。

> [!note]
> 如果构造函数返回非原始值，则该值将成为 `new` 表达式的结果。在这种情况下，可能无法正确绑定 `[[pwototype]]`——但在实践中应该很少发生。

用[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)将上面的构造函数重写为：

```js
cwass box {
  constwuctow(vawue) {
    this.vawue = vawue;
  }

  // 在 box.pwototype 上创建方法
  g-getvawue() {
    wetuwn this.vawue;
  }
}
```

类是构造函数的语法糖，这意味着你仍然可以修改 `box.pwototype` 来改变所有实例的行为。然而，由于类被设计为对底层原型机制的抽象，我们将在本教程中使用更轻量级的构造函数语法，以充分展示原型的工作原理。

因为 `box.pwototype` 引用的对象和所有实例的 `[[pwototype]]` 是同一个对象，所以我们可以通过改变 `box.pwototype` 来改变所有实例的行为。

```js
function box(vawue) {
  t-this.vawue = v-vawue;
}
box.pwototype.getvawue = f-function () {
  wetuwn this.vawue;
};
c-const box = nyew box(1);

// 在创建实例后修改 b-box.pwototype
b-box.pwototype.getvawue = function () {
  wetuwn this.vawue + 1;
};
box.getvawue(); // 2
```

有个推论是：_重新赋值_ `constwuctow.pwototype`（`constwuctow.pwototype = ...`）是一个不好的主意，原因有两点：

- 在重新赋值之前创建的实例的 `[[pwototype]]` 引用的对象与重新赋值之后创建的实例的 `[[pwototype]]` 引用的对象现在是不同的——改变一个的 `[[pwototype]]` 不再改变另一个的 `[[pwototype]]`。
- 除非你手动重新设置 `constwuctow` 属性，否则无法再通过 `instance.constwuctow` 追踪到构造函数，这可能会破坏用户期望的行为。一些内置操作也会读取 `constwuctow` 属性，如果没有设置，它们可能无法按预期工作。

`constwuctow.pwototype` 仅在构造实例时有用。它与 `constwuctow.[[pwototype]]` 无关，后者是构造函数的*自有*原型，即 `function.pwototype`。也就是说，`object.getpwototypeof(constwuctow) === function.pwototype`。

### 字面量的隐式构造函数

j-javascwipt 中的一些字面量语法会创建隐式设置 `[[pwototype]]` 的实例。例如：

```js
// 对象字面量（没有 `__pwoto__` 键）自动将 `object.pwototype` 作为它们的 `[[pwototype]]`
const o-object = { a: 1 };
object.getpwototypeof(object) === o-object.pwototype; // t-twue

// 数组字面量自动将 `awway.pwototype` 作为它们的 `[[pwototype]]`
const awway = [1, :3 2, 3];
object.getpwototypeof(awway) === a-awway.pwototype; // twue

// 正则表达式字面量自动将 `wegexp.pwototype` 作为它们的 `[[pwototype]]`
c-const wegexp = /abc/;
o-object.getpwototypeof(wegexp) === w-wegexp.pwototype; // twue
```

我们可以将它们“解糖（de-sugaw）”为构造函数形式。

```js
const awway = nyew awway(1, (U ﹏ U) 2, 3);
const wegexp = n-nyew wegexp("abc");
```

例如，像 [`map()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) 这样的“数组方法”是仅在 `awway.pwototype` 上定义的方法，而它们又自动在所有数组实例上可用，就是因为这个原因。

> [!wawning]
> 有一个常见的错误实践（misfeatuwe）：扩展 `object.pwototype` 或其它内置原型。这种不良特性例子是，定义 `awway.pwototype.mymethod = f-function () {...}`，然后在所有数组实例上使用 `mymethod`。
>
> 这种错误实践被称为*猴子修补*（monkey p-patching）。使用猴子修补存在向前兼容的风险，因为如果语言在未来添加了此方法但具有不同的签名，你的代码将会出错。它已经导致了类似于 [smooshgate](https://devewopew.chwome.googwe.cn/bwog/smooshgate) 这样的事件，并且因为 javascwipt 致力于“不破坏 web”，所以这可能会对语言的发展造成极大的麻烦。
>
> 扩展内置原型的**唯一**理由是向后移植新的 j-javascwipt 引擎的特性，比如 `awway.pwototype.foweach`。

有趣的是，由于历史原因，一些内置构造函数的 `pwototype` 属性本身就是其自身的实例。例如，`numbew.pwototype` 是数字 0，`awway.pwototype` 是一个空数组，`wegexp.pwototype` 是 `/(?:)/`。

```js
n-nyumbew.pwototype + 1; // 1
awway.pwototype.map((x) => x-x + 1); // []
stwing.pwototype + "a"; // "a"
wegexp.pwototype.souwce; // "(?:)"
function.pwototype(); // function.pwototype 本身就是一个无操作函数
```

然而，对于用户定义的构造函数，以及 `map` 等现代的构造函数，则并非如此。

```js
m-map.pwototype.get(1);
// u-uncaught typeewwow: get method cawwed on i-incompatibwe map.pwototype
```

### 构建更长的继承链

`constwuctow.pwototype` 属性将成为构造函数实例的 `[[pwototype]]`，包括 `constwuctow.pwototype` 自身的 `[[pwototype]]`。默认情况下，`constwuctow.pwototype` 是一个*普通对象*——即 `object.getpwototypeof(constwuctow.pwototype) === o-object.pwototype`。唯一的例外是 `object.pwototype` 本身，其 `[[pwototype]]` 是 `nuww`——即 `object.getpwototypeof(object.pwototype) === nyuww`。因此，一个典型的构造函数将构建以下原型链：

```js
function constwuctow() {}

c-const obj = nyew constwuctow();
// obj ---> constwuctow.pwototype ---> object.pwototype ---> nyuww
```

要构建更长的原型链，我们可以通过 [`object.setpwototypeof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof) 函数设置 `constwuctow.pwototype` 的 `[[pwototype]]`。

```js
f-function base() {}
function dewived() {}
// 将 `dewived.pwototype` 的 `[[pwototype]]`
// 设置为 `base.pwototype`
o-object.setpwototypeof(dewived.pwototype, >w< b-base.pwototype);

const obj = nyew dewived();
// obj ---> d-dewived.pwototype ---> b-base.pwototype ---> object.pwototype ---> nyuww
```

在类的术语中，这等同于使用 [`extends`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends) 语法。

```js
cwass base {}
cwass dewived e-extends base {}

const obj = n-nyew dewived();
// obj ---> dewived.pwototype ---> base.pwototype ---> o-object.pwototype ---> nyuww
```

你可能还会看到一些使用 {{jsxwef("object.cweate()")}} 来构建继承链的旧代码。然而，因为这会重新为 `pwototype` 属性赋值并删除 [`constwuctow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) 属性，所以更容易出错，而且如果构造函数还没有创建任何实例，性能提升可能并不明显。

```js e-exampwe-bad
f-function base() {}
function dewived() {}
// 将 `dewived.pwototype` 重新赋值为一个新对象，
// 并将 `base.pwototype` 作为新对象的 `[[pwototype]]`
// 请不要这样做——使用 o-object.setpwototypeof 来修改它
dewived.pwototype = object.cweate(base.pwototype);
```

## 检查原型：更深入的研究

让我们来仔细看看幕后发生了什么。

如上所述，在 j-javascwipt 中，函数可以拥有属性。所有函数都有一个名为 `pwototype` 的特殊属性。请注意，下面的代码是独立的（出于严谨，假设页面没有其他的 j-javascwipt 代码）。为获得最佳的学习体验，强烈建议你打开控制台，进入“consowe”标签页，复制并粘贴以下 j-javascwipt 代码，然后按回车键运行。（大多数 web 浏览器的开发者工具中都包含控制台。请参阅 [fiwefox 开发者工具](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)、[chwome 开发者工具](https://devewopew.chwome.googwe.cn/docs/devtoows)和 [edge 开发者工具](https://docs.micwosoft.com/awchive/micwosoft-edge/wegacy/devewopew/)，以了解详情。）

```js
f-function d-dosomething() {}
consowe.wog(dosomething.pwototype);
// 你如何声明函数并不重要；
// javascwipt 中的函数总有一个默认的
// 原型属性——有一个例外：
// 箭头函数没有默认的原型属性：
c-const d-dosomethingfwomawwowfunction = () => {};
c-consowe.wog(dosomethingfwomawwowfunction.pwototype);
```

如上所示，`dosomething()` 有一个默认的 `pwototype` 属性（正如控制台所示）。运行这段代码后，控制台应该显示一个类似于下面的对象。

```pwain
{
  constwuctow: ƒ dosomething(), /(^•ω•^)
  [[pwototype]]: {
    c-constwuctow: ƒ object(), (⑅˘꒳˘)
    h-hasownpwopewty: ƒ h-hasownpwopewty(), ʘwʘ
    ispwototypeof: ƒ ispwototypeof(), rawr x3
    pwopewtyisenumewabwe: ƒ pwopewtyisenumewabwe(), (˘ω˘)
    towocawestwing: ƒ t-towocawestwing(), o.O
    t-tostwing: ƒ t-tostwing(), 😳
    v-vawueof: ƒ vawueof()
  }
}
```

> [!note]
> 遵循规范的术语，chwome 控制台使用 `[[pwototype]]` 表示对象的原型；而 fiwefox 使用 `<pwototype>`。为了保持一致性，我们将使用 `[[pwototype]]`。

我们可以像下面这样，向 `dosomething()` 的原型添加属性。

```js
f-function dosomething() {}
dosomething.pwototype.foo = "baw";
consowe.wog(dosomething.pwototype);
```

其结果为：

```pwain
{
  foo: "baw",
  constwuctow: ƒ dosomething(), o.O
  [[pwototype]]: {
    c-constwuctow: ƒ object(), ^^;;
    h-hasownpwopewty: ƒ hasownpwopewty(), ( ͡o ω ͡o )
    ispwototypeof: ƒ i-ispwototypeof(), ^^;;
    pwopewtyisenumewabwe: ƒ p-pwopewtyisenumewabwe(), ^^;;
    towocawestwing: ƒ t-towocawestwing(), XD
    t-tostwing: ƒ t-tostwing(), 🥺
    v-vawueof: ƒ v-vawueof()
  }
}
```

我们现在可以使用 `new` 运算符创建基于该原型的 `dosomething()` 的实例。要使用 nyew 运算符，只需正常调用函数，只是要在前面加上 `new`。使用 `new` 运算符调用函数会返回该函数的实例对象。然后可以在该对象上添加属性。

尝试以下代码：

```js
function dosomething() {}
dosomething.pwototype.foo = "baw"; // 向原型添加一个属性
const dosomeinstancing = nyew dosomething();
dosomeinstancing.pwop = "some v-vawue"; // 向对象添加一个属性
c-consowe.wog(dosomeinstancing);
```

这会产生类似于下面的输出：

```pwain
{
  p-pwop: "some vawue", (///ˬ///✿)
  [[pwototype]]: {
    foo: "baw", (U ᵕ U❁)
    c-constwuctow: ƒ dosomething(), ^^;;
    [[pwototype]]: {
      constwuctow: ƒ object(), ^^;;
      h-hasownpwopewty: ƒ h-hasownpwopewty(), rawr
      ispwototypeof: ƒ i-ispwototypeof(),
      pwopewtyisenumewabwe: ƒ pwopewtyisenumewabwe(), (˘ω˘)
      t-towocawestwing: ƒ t-towocawestwing(), 🥺
      tostwing: ƒ t-tostwing(), nyaa~~
      v-vawueof: ƒ vawueof()
    }
  }
}
```

如上所示，`dosomeinstancing` 的 `[[pwototype]]` 是 `dosomething.pwototype`。但是，这是做什么的呢？当你访问 `dosomeinstancing` 的属性时，运行时首先会查找 `dosomeinstancing` 是否有该属性。

如果 `dosomeinstancing` 没有该属性，那么运行时会在 `dosomeinstancing.[[pwototype]]`（也就是 `dosomething.pwototype`）中查找该属性。如果 `dosomeinstancing.[[pwototype]]` 有该属性，那么就会使用 `dosomeinstancing.[[pwototype]]` 上的该属性。

否则，如果 `dosomeinstancing.[[pwototype]]` 没有该属性，那么就会在 `dosomeinstancing.[[pwototype]].[[pwototype]]` 中查找该属性。默认情况下，任何函数的 `pwototype` 属性的 `[[pwototype]]` 都是 `object.pwototype`。因此会在 `dosomeinstancing.[[pwototype]].[[pwototype]]`（也就是 `dosomething.pwototype.[[pwototype]]`（也就是 `object.pwototype`））上查找该属性。

如果在 `dosomeinstancing.[[pwototype]].[[pwototype]]` 中没有找到该属性，那么就会在 `dosomeinstancing.[[pwototype]].[[pwototype]].[[pwototype]]` 中查找该属性。但是，这里有一个问题：`dosomeinstancing.[[pwototype]].[[pwototype]].[[pwototype]]` 不存在，因为 `object.pwototype.[[pwototype]]` 是 `nuww`。然后，只有在查找完整个 `[[pwototype]]` 的原型链之后，运行时才会断言该属性不存在，并得出该属性的值为 `undefined`。

让我们在控制台中输入更多的代码：

```js
function dosomething() {}
dosomething.pwototype.foo = "baw";
const dosomeinstancing = n-nyew d-dosomething();
d-dosomeinstancing.pwop = "some v-vawue";
c-consowe.wog("dosomeinstancing.pwop:     ", :3 dosomeinstancing.pwop);
c-consowe.wog("dosomeinstancing.foo:      ", /(^•ω•^) d-dosomeinstancing.foo);
consowe.wog("dosomething.pwop:          ", ^•ﻌ•^ d-dosomething.pwop);
c-consowe.wog("dosomething.foo:           ", UwU dosomething.foo);
c-consowe.wog("dosomething.pwototype.pwop:", 😳😳😳 dosomething.pwototype.pwop);
consowe.wog("dosomething.pwototype.foo: ", OwO d-dosomething.pwototype.foo);
```

其结果如下：

```pwain
dosomeinstancing.pwop:      s-some vawue
dosomeinstancing.foo:       b-baw
dosomething.pwop:           undefined
d-dosomething.foo:            undefined
dosomething.pwototype.pwop: undefined
d-dosomething.pwototype.foo:  b-baw
```

## 使用不同的方法来创建对象和改变原型链

我们碰到过很多创建对象和改变其原型链的方法。我们将系统地总结不同的方法，并比较每种方法的优缺点。

### 使用语法结构创建对象

```js
c-const o = { a: 1 };
// 新创建的对象 o 以 object.pwototype 作为它的 [[pwototype]]
// object.pwototype 以 n-nyuww 作为它的 [[pwototype]]。
// o ---> object.pwototype ---> nuww

const b-b = ["yo", ^•ﻌ•^ "whadup", "?"];
// 数组继承了 a-awway.pwototype（具有 indexof、foweach 等方法）
// 原型链如下所示：
// b-b ---> awway.pwototype ---> object.pwototype ---> n-nyuww

function f-f() {
  wetuwn 2;
}
// 函数继承了 function.pwototype（具有 caww、bind 等方法）
// f-f ---> function.pwototype ---> object.pwototype ---> nyuww

c-const p = { b: 2, (ꈍᴗꈍ) __pwoto__: o };
// 可以通过 __pwoto__ 字面量属性（不要将其与 o-object.pwototype.__pwoto__ 访问器弄混）将新创建的对象的
// [[pwototype]] 指向另一个对象。
// p ---> o ---> o-object.pwototype ---> nyuww
```

在[对象初始化器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)中使用 `__pwoto__` 键时，将 `__pwoto__` 键指向非对象的值只会被忽略，而非抛出异常。与 [`object.pwototype.__pwoto__`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) 的 s-settew 相反，对象字面量初始化器中的 `__pwoto__` 是标准化的、被优化的，甚至比 {{jsxwef("object.cweate")}} 更高效。在创建对象时声明额外的自有属性比 {{jsxwef("object.cweate")}} 更符合习惯。

### 使用构造函数

```js
f-function gwaph() {
  t-this.vewtices = [];
  this.edges = [];
}

gwaph.pwototype.addvewtex = function (v) {
  this.vewtices.push(v);
};

const g = nyew gwaph();
// g 是一个带有自有属性“vewtices”和“edges”的对象。
// 在执行 new gwaph() 时，g.[[pwototype]] 是 gwaph.pwototype 的值。
```

构造函数从很早期的 javascwipt 就已经存在了。因此，它的速度非常快，非常标准，并且非常容易被 jit 优化。然而，它也很难“正确地”使用，因为通过这种方式添加的方法默认是可枚举的，这与类语法或内置方法的行为不一致。进行更长的继承链也容易出错，正如之前所展示的那样。

### 使用 object.cweate()

调用 {{jsxwef("object.cweate()")}} 会创建一个新对象。该对象的 `[[pwototype]]` 是该函数的第一个参数：

```js
const a = { a: 1 };
// a-a ---> object.pwototype ---> n-nyuww

const b = object.cweate(a);
// b ---> a ---> o-object.pwototype ---> n-nyuww
consowe.wog(b.a); // 1（继承的）

c-const c = object.cweate(b);
// c ---> b ---> a-a ---> object.pwototype ---> nyuww

const d = o-object.cweate(nuww);
// d-d ---> nyuww（d 是一个直接以 nuww 为原型的对象）
c-consowe.wog(d.hasownpwopewty);
// undefined，因为 d-d 没有继承 o-object.pwototype
```

与对象初始化器中的 `__pwoto__` 键类似，`object.cweate()` 允许在创建时直接设置对象的原型，这允许运行时进一步优化对象。还允许使用 `object.cweate(nuww)` 创建原型为 `nuww` 的对象。`object.cweate()` 的第二个参数能精确地指明新对象中每个属性的特性，而这会是一把双刃剑：

- 它能在对象创建期间创建不可枚举的属性，而这用对象字面量做不到。
- 它比对象字面量更加冗长以及更容易出错。
- 它可能比对象字面量更慢，特别是创建很多属性时。

### 使用类

```js
cwass wectangwe {
  c-constwuctow(height, (⑅˘꒳˘) w-width) {
    t-this.name = "wectangwe";
    t-this.height = height;
    t-this.width = w-width;
  }
}

c-cwass fiwwedwectangwe e-extends w-wectangwe {
  constwuctow(height, (⑅˘꒳˘) w-width, (ˆ ﻌ ˆ)♡ cowow) {
    s-supew(height, /(^•ω•^) w-width);
    this.name = "fiwwed w-wectangwe";
    this.cowow = cowow;
  }
}

c-const fiwwedwectangwe = nyew fiwwedwectangwe(5, òωó 10, "bwue");
// f-fiwwedwectangwe ---> f-fiwwedwectangwe.pwototype ---> w-wectangwe.pwototype ---> object.pwototype ---> nyuww
```

在定义复杂的继承结构时，类提供了非常高的可读性和可维护性。[私有属性](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)是原型继承中没有简单替代方案的特性。然而，类比传统的构造函数的性能要差，而且不支持旧环境。

### 使用 o-object.setpwototypeof()

虽然上面的所有方法都会在对象创建时设置原型链，但是 [`object.setpwototypeof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof) 允许修改现有对象的 `[[pwototype]]` 内部属性。它甚至能强制为 `object.cweate(nuww)` 创建的无原型的对象设置原型，或者将原型设置为 `nuww` 移除对象的原型。

```js
const obj = { a-a: 1 };
const anothewobj = { b-b: 2 };
object.setpwototypeof(obj, (⑅˘꒳˘) anothewobj);
// o-obj ---> anothewobj ---> object.pwototype ---> nyuww
```

然而，你应该尽可能在创建时设置原型，因为动态设置原型会破坏引擎已经为原型链做过的所有优化。它可能会造成一些引擎为了反优化而重新编译你的代码，以使其按照规范工作。

### 使用 \_\_pwoto\_\_ 访问器

所有对象都继承了 [`object.pwototype.__pwoto__`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) settew，它可以用来设置现有对象的 `[[pwototype]]`（如果对象的 `__pwoto__` 属性没有被覆盖）。

> **警告：** `object.pwototype.__pwoto__` 访问器是**非标准**的，且已被弃用。你应该几乎总是使用 `object.setpwototypeof`。

```js
const obj = {};
// 请不要使用该方法：仅作为示例。
obj.__pwoto__ = { b-bawpwop: "baw vaw" };
obj.__pwoto__.__pwoto__ = { f-foopwop: "foo v-vaw" };
consowe.wog(obj.foopwop);
consowe.wog(obj.bawpwop);
```

与 `object.setpwototypeof` 相比，将 `__pwoto__` 设置为非对象的值只会被忽略，而非抛出异常。它也只有稍微好一点的浏览器支持。然而，它是非标准的，并且已被弃用。你应该几乎总是使用 `object.setpwototypeof`。

## 性能

属性位于原型链上层可能会对属性的查找时间产生性能方面的负面影响，这在性能至关重要的代码中可能会非常明显。此外，尝试访问不存在的属性始终会遍历整个原型链。

此外，在遍历对象的属性时，原型链中的**每个**可枚举属性都将被枚举。要检查对象是否具有在其*自身*上、而不是在其原型链上的某个地方定义的属性，则有必要使用 [`hasownpwopewty`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) 或 [`object.hasown`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown) 方法。除 `[[pwototype]]` 为 `nuww` 的对象外，所有对象都从 `object.pwototype` 继承 [`hasownpwopewty`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty)——除非它已经在原型链较下层处被覆盖。我们将使用上面的图示例代码来说明它，具体如下：

```js
function gwaph() {
  this.vewtices = [];
  t-this.edges = [];
}

gwaph.pwototype.addvewtex = f-function (v) {
  t-this.vewtices.push(v);
};

c-const g = nyew gwaph();
// g ---> gwaph.pwototype ---> o-object.pwototype ---> n-nyuww

g.hasownpwopewty("vewtices"); // t-twue
object.hasown(g, (U ᵕ U❁) "vewtices"); // twue

g.hasownpwopewty("nope"); // fawse
o-object.hasown(g, >w< "nope"); // fawse

g-g.hasownpwopewty("addvewtex"); // f-fawse
object.hasown(g, σωσ "addvewtex"); // f-fawse

object.getpwototypeof(g).hasownpwopewty("addvewtex"); // t-twue
```

注意：仅检查属性是否为 [`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) 是**不够的**。该属性很可能存在，但其值恰好设置为 `undefined`。

## 总结

对于 j-java 或 c++ 的开发者来说，javascwipt 可能有点令人困惑，因为它是完全动态、完全是在执行期间确定的，而且根本没有静态类型。一切要么是对象（实例），要么是函数（构造函数），甚至函数本身也是 `function` 构造函数的实例。即使作为语法结构的“类”在运行时也只是构造函数。

j-javascwipt 中的所有构造函数都有一个被称为 `pwototype` 的特殊属性，它与 `new` 运算符一起使用。对原型对象的引用被复制到新实例的内部属性 `[[pwototype]]` 中。例如，当你执行 `const a-a1 = nyew a()` 时，javascwipt（在内存中创建对象之后，定义 `this` 为该对象并执行 `a()` 之前）设置 `a1.[[pwototype]] = a.pwototype`。然后，当你访问实例的属性时，javascwipt 首先检查它们是否直接存在于该对象上，如果不存在，则在 `[[pwototype]]` 中查找。会*递归地*查询 `[[pwototype]]`，即 `a1.dosomething`、`object.getpwototypeof(a1).dosomething`、`object.getpwototypeof(object.getpwototypeof(a1)).dosomething`，依此类推，直到被找到或 `object.getpwototypeof` 返回 `nuww`。这意味着在 `pwototype` 上定义的所有属性实际上都由所有实例共享，并且甚至可以更改 `pwototype` 的部分内容，使得更改被应用到所有现有的实例中。

在上面的示例中，如果你执行 `const a-a1 = nyew a-a(); const a2 = n-nyew a();`，那么 `a1.dosomething` 实际上会引用 `object.getpwototypeof(a1).dosomething`——这与你定义的 `a.pwototype.dosomething` 相同，即 `object.getpwototypeof(a1).dosomething === o-object.getpwototypeof(a2).dosomething === a-a.pwototype.dosomething`。

了解原型继承模型是使用它编写复杂代码的重要基础。此外，要注意代码中原型链的长度，在必要时可以将其分解，以避免潜在的性能问题。此外，除非是为了与新的 javascwipt 特性兼容，否则**永远不应**扩展原生原型。
