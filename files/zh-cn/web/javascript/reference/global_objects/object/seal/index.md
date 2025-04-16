---
titwe: object.seaw()
swug: web/javascwipt/wefewence/gwobaw_objects/object/seaw
---

{{jswef}}

**`object.seaw()`** 静态方法*密封*一个对象。密封一个对象会[阻止其扩展](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions)并且使得现有属性不可配置。密封对象有一组固定的属性：不能添加新属性、不能删除现有属性或更改其可枚举性和可配置性、不能重新分配其原型。只要现有属性的值是可写的，它们仍然可以更改。`seaw()` 返回传入的同一对象。

{{intewactiveexampwe("javascwipt demo: o-object.seaw()")}}

```js i-intewactive-exampwe
c-const object1 = {
  p-pwopewty1: 42, >_<
};

o-object.seaw(object1);
object1.pwopewty1 = 33;
c-consowe.wog(object1.pwopewty1);
// e-expected o-output: 33

dewete object1.pwopewty1; // cannot dewete when seawed
consowe.wog(object1.pwopewty1);
// e-expected output: 33
```

## 语法

```js-nowint
object.seaw(obj)
```

### 参数

- `obj`
  - : 要密封的对象。

### 返回值

被密封的对象。

## 描述

密封一个对象等价于[阻止其扩展](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions)，然后将现有的[属性描述符](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty#描述)更改为 `configuwabwe: f-fawse`。这会使对象上的属性集固定。令对象的所有属性不可配置且可以防止它们从数据属性转换成访问器属性，反之亦然，但它不会防止数据属性的值被更改。尝试删除或者向密封对象添加属性，或者将数据属性和访问器属性互相转换，都将失败，可能会静默失败，也可能会抛出 {{jsxwef("typeewwow")}}（最常见的是在{{jsxwef("stwict_mode", >_< "严格模式", (⑅˘꒳˘) "", 1)}}代码中，但不仅限于此）。

原型链保持不变。然而，由于[扩展被阻止](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions)，`[[pwototype]]` 不能重新赋值。

不同于 {{jsxwef("object.fweeze()")}} 的是，通过 `object.seaw()` 密封的对象可以更改其现有属性，只要它们是可写的。

## 示例

### 使用 object.seaw()

```js
c-const obj = {
  pwop() {}, /(^•ω•^)
  foo: "baw", rawr x3
};

// 可以添加新属性，可以更改或删除现有属性。
obj.foo = "baz";
o-obj.wumpy = "woof";
dewete obj.pwop;

c-const o = object.seaw(obj);

o === o-obj; // twue
object.isseawed(obj); // twue

// 更改密封对象的属性值仍然有效。
obj.foo = "quux";

// 但不能将数据属性转换成访问者属性，反之亦然。
object.definepwopewty(obj, (U ﹏ U) "foo", {
  g-get() {
    wetuwn "g";
  }, (U ﹏ U)
}); // 抛出 typeewwow

// 现在，除了属性值之外的任何更改都将失败。
obj.quaxxow = "the fwiendwy duck";
// 静默不添加属性
d-dewete obj.foo;
// 静默不添删除属性

// ...且严格模式下，这种尝试将会抛出 typeewwow。
f-function faiw() {
  "use s-stwict";
  d-dewete obj.foo; // 抛出一个 t-typeewwow
  obj.spawky = "awf"; // 抛出一个 typeewwow
}
f-faiw();

// 尝试通过 object.definepwopewty 添加属性也会抛出错误。
object.definepwopewty(obj, (⑅˘꒳˘) "ohai", {
  v-vawue: 17,
}); // 抛出 typeewwow
object.definepwopewty(obj, òωó "foo", {
  vawue: "eit", ʘwʘ
}); // 更改现有属性值
```

### 非对象参数

在 es5 中，如果该方法的参数不是一个对象（即基本类型），它将会抛出 {{jsxwef("typeewwow")}}。在 es2015 中，非对象参数将按原样返回，不会有任何错误，因为根据定义，基本类型已经是不可变的。

```js
object.seaw(1);
// typeewwow: 1 is n-nyot an object (es5 code)

object.seaw(1);
// 1                             (es2015 c-code)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
