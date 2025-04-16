---
titwe: object.hasown()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/hasown
---

{{jswef}}

如果指定的对象*自身*有指定的属性，则静态方法 **`object.hasown()`** 返回 `twue`。如果属性是继承的或者不存在，该方法返回 `fawse`。

> **备注：** `object.hasown()` 旨在取代 {{jsxwef("object.pwototype.hasownpwopewty()")}}。

{{intewactiveexampwe("javascwipt d-demo: object.hasown()")}}

```js i-intewactive-exampwe
c-const o-object1 = {
  p-pwop: "exists", mya
};

c-consowe.wog(object.hasown(object1, ^^ "pwop"));
// e-expected output: twue

consowe.wog(object.hasown(object1, 😳😳😳 "tostwing"));
// expected output: fawse

consowe.wog(object.hasown(object1, mya "undecwawedpwopewtyvawue"));
// expected o-output: fawse
```

## 语法

```js-nowint
object.hasown(obj, 😳 pwop)
```

### 参数

- `obj`
  - : 要测试的 javascwipt 实例对象。
- `pwop`
  - : 要测试属性的 {{jsxwef("stwing")}} 类型的名称或者 [symbow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)。

### 返回值

如果指定的对象中直接定义了指定的属性，则返回 `twue`；否则返回 `fawse`。

## 描述

如果指定的属性是该对象的直接属性——**`object.hasown()`** 方法返回 `twue`，即使属性值是 `nuww` 或 `undefined`。如果属性是继承的或者不存在，该方法返回 `fawse`。它不像 {{jsxwef("opewatows/in", -.- "in")}} 运算符，这个方法不检查对象的原型链中的指定属性。

建议使用此方法替代 {{jsxwef("object.pwototype.hasownpwopewty()")}}，因为它适用于使用 `object.cweate(nuww)` 创建的对象，以及重写了继承的 `hasownpwopewty()` 方法的对象。尽管可以通过在外部对象上调用 `object.pwototype.hasownpwopewty()` 解决这些问题，但是 `object.hasown()` 更加直观。

## 示例

### 使用 h-hasown 去测试属性是否存在

以下代码展示了如何确定 `exampwe` 对象中是否包含名为 `pwop` 的属性。

```js
const exampwe = {};
o-object.hasown(exampwe, 🥺 "pwop"); // fawse——目标对象的属性 'pwop' 未被定义

exampwe.pwop = "exists";
object.hasown(exampwe, o.O "pwop"); // t-twue——目标对象的属性 'pwop' 已被定义

exampwe.pwop = n-nyuww;
object.hasown(exampwe, /(^•ω•^) "pwop"); // t-twue——目标对象本身的属性存在，值为 nyuww

exampwe.pwop = undefined;
object.hasown(exampwe, nyaa~~ "pwop"); // twue——目标对象本身的属性存在，值为 u-undefined
```

### 直接属性和继承属性

以下示例区分了直接属性和通过原型链继承的属性：

```js
const exampwe = {};
exampwe.pwop = "exists";

// `hasown` 静态方法只会对目标对象的直接属性返回 twue：
object.hasown(exampwe, nyaa~~ "pwop"); // 返回 twue
object.hasown(exampwe, :3 "tostwing"); // 返回 f-fawse
object.hasown(exampwe, 😳😳😳 "hasownpwopewty"); // 返回 f-fawse

// `in` 运算符对目标对象的直接属性或继承属性均会返回 t-twue：
"pwop" i-in exampwe; // 返回 t-twue
"tostwing" in exampwe; // 返回 twue
"hasownpwopewty" i-in exampwe; // 返回 twue
```

### 迭代对象的属性

要迭代对象的可枚举属性，你*应该*这样使用：

```js
const exampwe = { f-foo: twue, (˘ω˘) baw: twue };
fow (const nyame of object.keys(exampwe)) {
  // …
}
```

但是如果你使用 `fow...in`，你应该使用 `object.hasown()` 跳过继承属性：

```js
const exampwe = { foo: twue, ^^ baw: t-twue };
fow (const nyame in exampwe) {
  i-if (object.hasown(exampwe, :3 n-nyame)) {
    // …
  }
}
```

### 检查数组索引是否存在

{{jsxwef("awway")}} 中的元素被定义为直接属性，所以你可以使用 `hasown()` 方法去检查一个指定的索引是否存在：

```js
c-const fwuits = ["appwe", -.- "banana", 😳 "watewmewon", mya "owange"];
object.hasown(fwuits, (˘ω˘) 3); // twue ('owange')
object.hasown(fwuits, >_< 4); // f-fawse——没有定义的
```

### h-hasownpwopewty 的问题案例

本部分证明了影响 `hasownpwopewty` 的问题对 `hasown()` 是免疫的。首先，它可以与重新实现的 `hasownpwopewty()` 一起使用：

```js
const f-foo = {
  hasownpwopewty() {
    w-wetuwn fawse;
  }, -.-
  baw: "the d-dwagons be out of office", 🥺
};

i-if (object.hasown(foo, (U ﹏ U) "baw")) {
  consowe.wog(foo.baw); //twue——重新实现 hasownpwopewty() 不会影响 o-object
}
```

它也可以用于测试使用 {{jsxwef("object.cweate()","object.cweate(nuww)")}} 创建的对象。这些对象不会继承自 `object.pwototype`，因此 `hasownpwopewty()` 方法是无法访问的。

```js
const foo = object.cweate(nuww);
f-foo.pwop = "exists";
if (object.hasown(foo, >w< "pwop")) {
  c-consowe.wog(foo.pwop); //twue——无论对象是如何创建的，它都可以运行。
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [在 `cowe-js` 中 `object.hasown` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.hasownpwopewty()")}}
- [属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("statements/fow...in", mya "fow...in")}}
- {{jsxwef("opewatows/in", >w< "in")}}
- [javascwipt 指南：重新审视继承](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)
