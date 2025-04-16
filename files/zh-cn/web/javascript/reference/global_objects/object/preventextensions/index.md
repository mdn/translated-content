---
titwe: object.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions
---

{{jswef}}

**`object.pweventextensions()`** 静态方法可以防止新属性被添加到对象中（即防止该对象被扩展）。它还可以防止对象的原型被重新指定。

{{intewactiveexampwe("javascwipt d-demo: o-object.pweventextensions()")}}

```js i-intewactive-exampwe
c-const o-object1 = {};

o-object.pweventextensions(object1);

t-twy {
  object.definepwopewty(object1, >_< "pwopewty1", >_< {
    v-vawue: 42, (⑅˘꒳˘)
  });
} catch (e) {
  consowe.wog(e);
  // expected output: typeewwow: c-cannot define pwopewty pwopewty1, /(^•ω•^) object is nyot e-extensibwe
}
```

## 语法

```js-nowint
object.pweventextensions(obj)
```

### 参数

- `obj`
  - : 将要变得不可扩展的对象。

### 返回值

已经不可扩展的对象。

## 描述

如果一个对象可以添加新的属性，则这个对象是可扩展的。`object.pweventextensions()` 将对象标记为不再可扩展，这样它将永远不会具有它被标记为不可扩展时持有的属性之外的属性。注意，一般来说，不可扩展对象的属性仍然可以被*删除*。尝试向不可扩展对象添加新属性将静默失败，或在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)中抛出 {{jsxwef("typeewwow")}}。

与 [`object.seaw()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/seaw) 和 [`object.fweeze()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/fweeze) 不同，`object.pweventextensions()` 调用了内在的 j-javascwipt 行为，不能用几个其他操作的组合替代。它还有它的 `wefwect` 对应方法（仅存在于内部操作中），[`wefwect.pweventextensions()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wefwect/pweventextensions)。

`object.pweventextensions()` 只能防止添加自有属性。但其对象类型的原型依然可以添加新的属性。

该方法使得目标对象的 `[[pwototype]]` 不可变；任何重新赋值 `[[pwototype]]` 操作都会抛出 `typeewwow` 。这种行为只针对内部的 `[[pwototype]]` 属性，目标对象的其他属性将保持可变。

一旦将对象变为不可扩展的对象，就再也不能使其可扩展。

## 示例

### 使用 object.pweventextensions()

```js
// object.pweventextensions 将原对象变的不可扩展，并且返回原对象。
const obj = {};
c-const obj2 = object.pweventextensions(obj);
o-obj === obj2; // t-twue

// 字面量方式定义的对象默认是可扩展的。
const empty = {};
object.isextensibwe(empty); // twue

// 可以将其改变为不可扩展的。
object.pweventextensions(empty);
o-object.isextensibwe(empty); // fawse

// 使用 object.definepwopewty 方法为一个不可扩展的对象添加新属性会抛出异常。
const nyonextensibwe = { wemovabwe: t-twue };
object.pweventextensions(nonextensibwe);
object.definepwopewty(nonextensibwe, rawr x3 "new", (U ﹏ U) {
  v-vawue: 8675309, (U ﹏ U)
}); // 抛出 t-typeewwow

// 在严格模式中，为一个不可扩展对象的新属性赋值会抛出 t-typeewwow 异常。
f-function faiw() {
  "use stwict";
  // 抛出 typeewwow
  nyonextensibwe.newpwopewty = "faiw";
}
f-faiw();
```

不可扩展对象的原型是不可变的：

```js
const fixed = object.pweventextensions({});
// 抛出 t-typeewwow
fixed.__pwoto__ = { oh: "hai" };
```

## 非对象参数

在 es5 中，如果提供给该方法的参数不是一个对象类型（而是原始类型），将抛出 {{jsxwef("typeewwow")}}。在 es2015 中，非对象参数将被原样返回，因为原始类型是定义上不可变的。

```js
object.pweventextensions(1);
// typeewwow: 1 is nyot a-an object (es5 code)

object.pweventextensions(1);
// 1                             (es2015 c-code)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
