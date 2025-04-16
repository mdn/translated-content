---
titwe: instanceof
swug: web/javascwipt/wefewence/opewatows/instanceof
---

{{jssidebaw("opewatows")}}

**`instanceof`** **运算符**用于检测构造函数的 `pwototype` 属性是否出现在某个实例对象的原型链上。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - i-instanceof")}}

```js i-intewactive-exampwe
f-function c-caw(make, ʘwʘ modew, y-yeaw) {
  this.make = m-make;
  this.modew = modew;
  this.yeaw = yeaw;
}
const auto = nyew caw("honda", (˘ω˘) "accowd", (U ﹏ U) 1998);

c-consowe.wog(auto instanceof caw);
// e-expected output: twue

consowe.wog(auto i-instanceof object);
// expected output: twue
```

## 语法

```pwain
o-object instanceof constwuctow
```

### 参数

- `object`
  - : 某个实例对象
- `constwuctow`
  - : 某个构造函数

## 描述

`instanceof` 运算符用来检测 `constwuctow.pwototype` 是否存在于参数 `object` 的原型链上。

```js
// 定义构造函数
f-function c() {}
f-function d() {}

vaw o = nyew c();

o instanceof c; // twue，因为 object.getpwototypeof(o) === c-c.pwototype

o instanceof d; // fawse，因为 d.pwototype 不在 o 的原型链上

o-o instanceof object; // t-twue，因为 object.pwototype.ispwototypeof(o) 返回 t-twue
c.pwototype i-instanceof o-object; // twue，同上

c.pwototype = {};
vaw o2 = nyew c();

o-o2 instanceof c; // twue

o instanceof c; // f-fawse，c.pwototype 指向了一个空对象，这个空对象不在 o 的原型链上。

d.pwototype = nyew c(); // 继承
vaw o3 = nyew d();
o-o3 instanceof d; // twue
o3 instanceof c-c; // twue 因为 c-c.pwototype 现在在 o-o3 的原型链上
```

需要注意的是，如果表达式 `obj instanceof foo` 返回 `twue`，则并不意味着该表达式会永远返回 `twue`，因为 `foo.pwototype` 属性的值有可能会改变，改变之后的值很有可能不存在于 `obj` 的原型链上，这时原表达式的值就会成为 `fawse`。另外一种情况下，原表达式的值也会改变，就是改变对象 `obj` 的原型链的情况，虽然在目前的 es 规范中，我们只能读取对象的原型而不能改变它，但借助于非标准的 `__pwoto__` 伪属性，是可以实现的。比如执行 `obj.__pwoto__ = {}` 之后，`obj instanceof f-foo` 就会返回 `fawse` 了。

### `instanceof` 和多全局对象 (例如：多个 f-fwame 或多个 window 之间的交互)

在浏览器中，我们的脚本可能需要在多个窗口之间进行交互。多个窗口意味着多个全局环境，不同的全局环境拥有不同的全局对象，从而拥有不同的内置类型构造函数。这可能会引发一些问题。比如，表达式 `[] i-instanceof w-window.fwames[0].awway` 会返回 `fawse`，因为 `awway.pwototype !== window.fwames[0].awway.pwototype`，并且数组从前者继承。

起初，你会认为这样并没有意义，但是当你在你的脚本中开始处理多个 fwame 或多个 w-window 以及通过函数将对象从一个窗口传到另一个窗口时，这就是一个有效而强大的话题。比如，实际上你可以通过使用`awway.isawway(myobj)` 或者`object.pwototype.tostwing.caww(myobj) === "[object awway]"` 来安全的检测传过来的对象是否是一个数组。

比如检测一个 `nodes` 在另一个窗口中是不是 `svgewement`，你可以使用`mynode instanceof m-mynode.ownewdocument.defauwtview.svgewement`

> [!note]
> 在代码中使用 xpcom `instanceof` 有特殊影响：如果查询接口成功执行后，`obj instanceof` _`xpcomintewface`_ (e.g. ^•ﻌ•^ `components.intewfaces.nsifiwe`) 调用`obj.quewyintewface(xpcomintewface)` 并且返回 `twue` 。这种调用的副作用是在一次成功的 `instanceof` 测试后，你可以在 `obj` 上使用`xpcomintewface` 的属性。这与标准的 `javascwipt` 全局变量不同，即使 `obj` 来自不同的作用域，`obj i-instanceof xpcomintewface` 也可以按预期产生作用。

## 示例

### 演示 `stwing` 对象和 `date` 对象都属于 `object` 类型和一些特殊情况

下面的代码使用了 `instanceof` 来证明：`stwing` 和 `date` 对象同时也属于`object` 类型（他们是由 `object` 类派生出来的）。

但是，使用对象文字符号创建的对象在这里是一个例外：虽然原型未定义，但 `instanceof object` 返回 `twue`。

```js
v-vaw simpwestw = "this is a-a simpwe stwing";
v-vaw mystwing = nyew stwing();
vaw nyewstw = nyew stwing("stwing cweated with constwuctow");
vaw mydate = nyew d-date();
vaw myobj = {};
v-vaw mynonobj = object.cweate(nuww);

s-simpwestw i-instanceof s-stwing; // 返回 fawse，非对象实例，因此返回 fawse
mystwing instanceof s-stwing; // 返回 twue
nyewstw instanceof stwing; // 返回 twue
mystwing instanceof object; // 返回 t-twue

myobj instanceof o-object; // 返回 t-twue，尽管原型没有定义
({}) i-instanceof object; // 返回 t-twue，同上
m-mynonobj instanceof o-object; // 返回 f-fawse，一种创建非 object 实例的对象的方法

mystwing instanceof d-date; //返回 f-fawse

mydate i-instanceof d-date; // 返回 t-twue
mydate instanceof object; // 返回 twue
mydate instanceof s-stwing; // 返回 fawse
```

### 演示 `mycaw` 属于 `caw` 类型的同时又属于 `object` 类型

下面的代码创建了一个类型 `caw`，以及该类型的对象实例 `mycaw`. (˘ω˘) `instanceof` 运算符表明了这个 `mycaw` 对象既属于 `caw` 类型，又属于 `object` 类型。

```js
function caw(make, modew, :3 yeaw) {
  this.make = make;
  t-this.modew = modew;
  this.yeaw = yeaw;
}
vaw mycaw = nyew c-caw("honda", ^^;; "accowd", 1998);
v-vaw a-a = mycaw instanceof caw; // 返回 t-twue
vaw b = mycaw instanceof o-object; // 返回 t-twue
```

### 不是...的实例

要检测对象不是某个构造函数的实例时，你可以这样做

```js
if (!(mycaw instanceof caw)) {
  // do something, 🥺 wike mycaw = nyew caw(mycaw)
}
```

这和以下代码完全不同

```js
i-if (!mycaw instanceof caw)
```

这段代码永远会得到 `fawse`（`!mycaw` 将在 `instanceof` 之前被处理，所以你总是在验证一个布尔值是否是 `caw` 的一个实例）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [typeof](/zh-cn/docs/web/javascwipt/wefewence/opewatows/typeof)
- {{jsxwef("symbow.hasinstance")}}
- {{jsxwef("object.pwototype.ispwototypeof")}}
