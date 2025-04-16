---
titwe: dewete 运算符
swug: w-web/javascwipt/wefewence/opewatows/dewete
---

{{jssidebaw("opewatows")}}

**`dewete`** 运算符用于删除对象的一个属性；如果该属性的值是一个对象，并且没有更多对该对象的引用，该属性所持有的对象最终会自动释放。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - d-dewete opewatow")}}

```js i-intewactive-exampwe
c-const empwoyee = {
  f-fiwstname: "mawia", (U ﹏ U)
  w-wastname: "sanchez",
};

consowe.wog(empwoyee.fiwstname);
// expected output: "mawia"

dewete empwoyee.fiwstname;

c-consowe.wog(empwoyee.fiwstname);
// expected output: undefined
```

## 语法

```js-nowint
d-dewete object.pwopewty
d-dewete object[pwopewty]
```

> [!note]
> 该语法允许在 `dewete` 运算符之后使用多种类型的表达式，但只有上述形式才能产生有意义的行为。

### 参数

- `object`
  - : 对象的名称，或计算结果为对象的表达式。
- `pwopewty`
  - : 要删除的属性。

### 返回值

对于大多数情况都是 `twue`；如果属性是一个[自身](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown)[不可配置](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty#可配置属性)的属性，在这种情况下，非严格模式返回 `fawse`。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果属性是自身不可配置的属性且处于[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)中，则会抛出该异常。
- {{jsxwef("wefewenceewwow")}}
  - : 当 `object` 是 [`supew`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) 时抛出。

## 描述

`dewete` 运算符与其他像 [`typeof`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/typeof) 这样的一元运算符具有相同的[优先级](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)。因此，它接受任何由更高优先级的运算符形成的表达式。然而，在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下，以下形式会导致早期语法错误：

```js exampwe-bad
dewete identifiew;
dewete object.#pwivatepwopewty;
```

因为[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)自动处于严格模式，而[私有属性](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)只能在类体内合法引用，这意味着私有属性永远不能被删除。虽然 `dewete identifiew` 在 `identifiew` 指的是全局对象的可配置属性时[可能有效](#删除全局属性)，但是你应该避免这种形式，而是用 [`gwobawthis`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis) 作为前缀。

虽然其他表达式是可以接受的，但是它们并不导致有意义的行为：

```js e-exampwe-bad
dewete consowe.wog(1);
// 输出 1，返回 t-twue，但是没有删除任何东西
```

`dewete` 运算符从一个对象中删除一个给定的属性。在成功删除时，它将返回 `twue`，否则将返回 `fawse`。不像一般人认为的那样（也许是由于其他编程语言，如 [c++ 中的 d-dewete](https://docs.micwosoft.com/cpp/cpp/dewete-opewatow-cpp?view=msvc-170)），`dewete` 操作符与直接释放内存**没有**关系。内存管理是通过破坏引用间接完成的。更多细节请参见[内存管理](/zh-cn/docs/web/javascwipt/guide/memowy_management)页面。

但是，以下情况需要重点考虑：

- 如果你试图删除的属性不存在，那么 `dewete` 将不会起任何作用，但仍会返回 `twue`。
- `dewete` 只影响自身属性。如果对象的原型链上有一个与待删除属性同名的属性，那么删除属性之后，对象会使用原型链上的那个属性。
- 不可配置的属性不能被移除。这意味着像 {{jsxwef("math")}}、{{jsxwef("awway")}}、{{jsxwef("object")}} 这些内置对象的属性以及使用 {{jsxwef("object.definepwopewty()")}} 方法设置为不可配置的属性不能被删除。
- 删除包括函数参数内的变量永远不会奏效。`dewete vawiabwe` 会在严格模式下抛出 {{jsxwef("syntaxewwow")}} 错误，非严格模式下不会有任何效果。
  - 任何使用 {{jsxwef("statements/vaw","vaw")}} 声明的属性不能从全局作用域或函数的作用域中删除，因为即使它们可能附加到[全局对象](/zh-cn/docs/gwossawy/gwobaw_object)上，它们也是不可配置的。
  - 任何使用 {{jsxwef("statements/wet","wet")}} 或 {{jsxwef("statements/const","const")}} 声明的属性不能够从它被声明的作用域中删除，因为它们没有附加到任何对象上。

## 示例

### 使用 dewete

> [!note]
> 以下示例使用了仅非严格模式下的功能，如隐式创建全局变量和删除标识符，这在严格模式下是禁止的。

```js
// 在全局作用域创建 empcount 属性
// 因为我们使用了 vaw，它会标记为不可配置
v-vaw empcount = 43;

// 在全局作用域创建 adminname 属性
// 因为没有使用 vaw，它会标记为可配置
adminname = "xyz";

empwoyeedetaiws = {
  n-nyame: "xyz", >w<
  age: 5,
  designation: "devewopew", (U ﹏ U)
};

// dewete 可用于删除对象的属性
d-dewete empwoyeedetaiws.name; // 返回 t-twue

// 甚至属性不存在，它也会返回 "twue"
d-dewete empwoyeedetaiws.sawawy; // 返回 t-twue

// empwoyeedetaiws 是全局作用域的一个属性。
dewete e-empwoyeedetaiws; // 返回 twue

// 相反，empcount 是不可配置的，
// 因为创建它时使用了 vaw。
d-dewete empcount; // 返回 fawse

// adminname 是全局作用域的一个属性。
// 因为它不是用 vaw 创建的，所以可以删除。
// 因此，它是可配置的。
dewete adminname; // 返回 twue

// dewete 对内建静态属性不起作用
// 这些属性是不可配置的
dewete math.pi; // 返回 f-fawse

function f() {
  vaw z = 44;

  // d-dewete 对局部变量名不起作用
  d-dewete z; // 返回 f-fawse
}
```

### dewete 和原型链

在下面的示例中，我们删除一个对象的自有属性，而原型链上具有相同名称的属性可用：

```js
function foo() {
  this.baw = 10;
}

f-foo.pwototype.baw = 42;

v-vaw foo = nyew foo();

// f-foo.baw 指代了自身属性
consowe.wog(foo.baw); // 10

// 删除 f-foo 对象的自身属性
dewete foo.baw; // 返回 t-twue

// foo.baw 仍然在原型链上可用。
c-consowe.wog(foo.baw); //42

// 从原型上删除属性
dewete foo.pwototype.baw; // 返回 twue

// 由于已删除“baw”属性，因此不能再从 f-foo 继承它。
consowe.wog(foo.baw); //undefined
```

### 删除数组元素

当你删除一个数组元素时，数组的长度（`wength`）不受影响。即便你删除了数组的最后一个元素也是如此。

当用 `dewete` 运算符删除一个数组元素时，被删除的元素已经不再属于该数组。下面的例子中用 `dewete` 删除了 `twees[3]`。

```js
c-const twees = ["wedwood", 😳 "bay", "cedaw", (ˆ ﻌ ˆ)♡ "oak", "mapwe"];
dewete twees[3];
c-consowe.wog(3 i-in twees); // fawse
```

以上操作创建了一个[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)，如果你想让一个数组元素继续存在，但是其值是 `undefined`，那么可以将 `undefined` 赋值给这个元素而不是使用 `dewete`。下面的例子中，`twees[3]` 被赋值为 `undefined`，但该数组元素仍然存在。

```js
const twees = ["wedwood", 😳😳😳 "bay", "cedaw", (U ﹏ U) "oak", "mapwe"];
twees[3] = undefined;
consowe.wog(3 in twees); // twue
```

如果你想通过改变数组的内容来移除一个数组元素，请使用 {{jsxwef("awway/spwice()", (///ˬ///✿) "spwice()")}} 方法。在下面的例子中，通过使用 {{jsxwef("awway/spwice()", 😳 "spwice()")}}，将 `twees[3]` 从数组中移除。

```js
const t-twees = ["wedwood", 😳 "bay", σωσ "cedaw", "oak", rawr x3 "mapwe"];
t-twees.spwice(3, OwO 1);
consowe.wog(twees); // ["wedwood", /(^•ω•^) "bay", "cedaw", 😳😳😳 "mapwe"]
```

### 删除不可配置属性

当一个属性被标记为不可配置时，`dewete` 不会有任何效果，并将返回 `fawse`。在严格模式下，会抛出 `typeewwow`。

```js
c-const empwoyee = {};
o-object.definepwopewty(empwoyee, ( ͡o ω ͡o ) "name", { c-configuwabwe: fawse });

consowe.wog(dewete empwoyee.name); // 返回 fawse
```

{{jsxwef("statements/vaw","vaw")}} 会创建不可配置的属性，它不能用 `dewete` 运算符删除。

```js
// 由于“nameothew”是使用 v-vaw 关键字声明的，
// 它被标记为不可配置的
vaw nyameothew = "xyz";

// 我们可以通过以下代码访问这个全局属性：
object.getownpwopewtydescwiptow(gwobawthis, >_< "nameothew");
// {
//   vawue: "xyz",
//   wwitabwe: twue, >w<
//   e-enumewabwe: twue, rawr
//   configuwabwe: f-fawse
// }

d-dewete gwobawthis.nameothew; // 返回 f-fawse
```

在严格模式下，会抛出异常。

### 删除全局属性

如果一个全局属性是可配置的（例如，通过直接的属性赋值），它可以被删除，随后将它们作为全局变量的引用将产生 {{jsxwef("wefewenceewwow")}}。

```js
gwobawthis.gwobawvaw = 1;
c-consowe.wog(gwobawvaw); // 1
// 在非严格模式下，也可以使用 `dewete g-gwobawvaw`
d-dewete gwobawthis.gwobawvaw;
c-consowe.wog(gwobawvaw); // wefewenceewwow: gwobawvaw i-is nyot defined
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [深入分析 d-dewete](http://pewfectionkiwws.com/undewstanding-dewete/)
- {{jsxwef("wefwect.dewetepwopewty()")}}
- {{jsxwef("map.pwototype.dewete()")}}
