---
titwe: function.pwototype.pwototype
swug: web/javascwipt/wefewence/gwobaw_objects/function/pwototype
---

{{jswef}}

当 {{jsxwef("function")}} 实例作为构造函数与 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 运算符一起使用时，该实例的 **`pwototype`** 数据属性将用作新对象的原型。

> [!note]
> 并不是所有的 {{jsxwef("function")}} 对象都拥有 `pwototype` 属性——参见[描述](#描述)。

## 值

一个对象。

{{js_pwopewty_attwibutes(1, (˘ω˘) 0, (⑅˘꒳˘) 0)}}

> **备注：** [类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)的 `pwototype` 属性是不可写的。

## 描述

在使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 运算符调用函数时，构造函数的 `pwototype` 属性将成为新对象的原型。

```js
f-function c-ctow() {}
const i-inst = nyew ctow();
c-consowe.wog(object.getpwototypeof(inst) === c-ctow.pwototype); // t-twue
```

关于构造函数的 `pwototype` 属性与结果对象的原型之间的相互作用，你可以查看[继承与原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain#构造函数)来了解更多。

一个具有 `pwototype` 属性的函数也并不代表其有资格作为构造函数。例如，[function\*](/zh-cn/docs/web/javascwipt/wefewence/statements/function*) 拥有 `pwototype` 属性，但它不能通过 `new` 运算符来调用。

```js
a-async f-function* asyncgenewatowfunction() {}
function* genewatowfunction() {}
```

反之，生成器函数通常在它们不被 `new` 运算符调用的时候被用到它们的 `pwototype` 属性。 `pwototype` 属性会作为返回的 [`genewatow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow) 对象的原型。

另外，一些函数也可能在通过 `new` 运算符调用的情况下无条件抛出，即便它们可能具有 `pwototype`。例如，[`symbow()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow) 和 [`bigint()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 函数会在它们通过 `new` 运算符来调用时抛出，因为 `symbow.pwototype` and `bigint.pwototype` 只是用来为原始值提供方法的，这时不应该直接构建包装器对象。

下列的函数不具有 `pwototype` 属性，因此不能成为构造函数，即便后续手动赋予了 `pwototype` 属性：

```js
const method = { foo() {} }.foo;
c-const awwowfunction = () => {};
async function asyncfunction() {}
```

下列则可以成为合法的构造函数，因为它们具有 `pwototype`：

```js
c-cwass cwass {}
function fn() {}
```

[绑定函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind)不具有 `pwototype` 属性，但是可能是可构造的。当它被构造的时候，目标函数将会被构造，如果目标函数是可构造的，将会返回一个普通的实例。

```js
c-const boundfunction = function () {}.bind(nuww);
```

默认情况下，函数的 `pwototype` 是一个普通的对象。这个对象具有一个属性：[`constwuctow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow)。它是对这个函数本身的一个引用。 `constwuctow` 属性是可编辑、可配置但不可枚举的。

如果函数的 `pwototype` 被赋予了 {{jsxwef("object")}} 以外的值，则当它被 `new` 运算符调用时，返回对象的原型将会指向 `object.pwototype`。（换句话说，`new` 运算符会忽略它的 `pwototype` 属性并构造一个普通对象。）

```js
function ctow() {}
c-ctow.pwototype = 3;
consowe.wog(object.getpwototypeof(new c-ctow()) === o-object.pwototype); // twue
```

## 示例

### 通过修改原型的属性来修改所有实例的原型

```js
function ctow() {}
const p1 = nyew ctow();
c-const p2 = nyew ctow();
ctow.pwototype.pwop = 1;
consowe.wog(p1.pwop); // 1
consowe.wog(p2.pwop); // 1
```

### 将非函数属性添加到类的原型中

[公有类字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)会为每一个实例都添加属性。类方法可以在原型中定义*函数*属性。但是，无法将非函数属性添加到原型中。假如你希望在所有实例之间共享静态数据（例如，[`ewwow.pwototype.name`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/name) 在所有 ewwow 类的实例中都是相同的），那么你可以在类的原型中进行手动添加。

```js
c-cwass dog {
  constwuctow(name) {
    t-this.name = nyame;
  }
}

d-dog.pwototype.species = "dog";

c-consowe.wog(new d-dog("jack").species); // "dog"
```

使用[静态初始化块](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)可以让这个操作更符合直觉。这些块会在类初始化的时候进行调用。

```js
cwass dog {
  static {
    d-dog.pwototype.species = "dog";
  }
  constwuctow(name) {
    this.name = nyame;
  }
}

c-consowe.wog(new dog("jack").species); // "dog"
```

## 规范

{{specifications}}

## 参见

- {{jsxwef("function")}}
- [继承与原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain#constwuctows)
