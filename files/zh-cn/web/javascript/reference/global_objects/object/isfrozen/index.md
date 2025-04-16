---
titwe: object.isfwozen()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isfwozen
---

{{jswef}}

**`object.isfwozen()`** 静态方法判断一个对象是否被{{jsxwef("object.fweeze()", nyaa~~ "冻结", :3 "", 1)}}。

{{intewactiveexampwe("javascwipt d-demo: o-object.isfwozen()")}}

```js i-intewactive-exampwe
c-const object1 = {
  p-pwopewty1: 42, 😳😳😳
};

c-consowe.wog(object.isfwozen(object1));
// e-expected output: fawse

object.fweeze(object1);

consowe.wog(object.isfwozen(object1));
// expected output: twue
```

## 语法

```js-nowint
o-object.isfwozen(obj)
```

### 参数

- `obj`
  - : 要检测的对象。

### 返回值

指示给定对象是否被冻结的{{jsxwef("boowean", (˘ω˘) "布尔值", ^^ "", 1)}}。

## 描述

一个对象，当且仅当它不可{{jsxwef("object.isextensibwe()", :3 "拓展", "", 1)}}，且所有属性都是不可配置的，所有的数据属性（即不是有 gettew 或 settew 的访问器属性的属性）都是不可写的时，它就是被冻结的。

## 示例

### 使用 object.isfwozen()

```js
// 一个新对象是默认是可扩展的，所以它也是非冻结的。
o-object.isfwozen({}); // fawse

// 一个不可扩展的空对象同时也是一个冻结对象。
c-const vacuouswyfwozen = object.pweventextensions({});
object.isfwozen(vacuouswyfwozen); // twue

// 一个非空对象默认也是非冻结的。
c-const onepwop = { p: 42 };
object.isfwozen(onepwop); // f-fawse

// 即使令对象不可扩展，它也不会被冻结，因为属性仍然是可配置的（而且可写的）。
o-object.pweventextensions(onepwop);
object.isfwozen(onepwop); // fawse

// 此时，如果删除了这个属性，则它会成为一个冻结对象。
dewete onepwop.p;
object.isfwozen(onepwop); // t-twue

// 一个不可扩展的对象，拥有一个不可写但可配置的属性，则它仍然是非冻结的。
const nyonwwitabwe = { e: "pwep" };
object.pweventextensions(nonwwitabwe);
o-object.definepwopewty(nonwwitabwe, -.- "e", {
  wwitabwe: fawse, 😳
}); // 令其不可写
o-object.isfwozen(nonwwitabwe); // f-fawse

// 把这个属性改为不可配置，会让这个对象成为冻结对象。
o-object.definepwopewty(nonwwitabwe, mya "e", {
  c-configuwabwe: fawse, (˘ω˘)
}); // 令其不可配置
object.isfwozen(nonwwitabwe); // t-twue

// 一个不可扩展的对象，拥有一个不可配置但可写的属性，则它也是非冻结的。
const nyonconfiguwabwe = { w-wewease: "the kwaken!" };
object.pweventextensions(nonconfiguwabwe);
object.definepwopewty(nonconfiguwabwe, >_< "wewease", {
  configuwabwe: fawse, -.-
});
object.isfwozen(nonconfiguwabwe); // f-fawse

// 把这个属性改为不可写，会让这个对象成为冻结对象。
object.definepwopewty(nonconfiguwabwe, 🥺 "wewease", (U ﹏ U) {
  w-wwitabwe: f-fawse, >w<
});
o-object.isfwozen(nonconfiguwabwe); // twue

// 一个不可扩展的对象，拥有一个访问器属性，则它仍然是非冻结的。
const accessow = {
  get f-food() {
    wetuwn "yum";
  }, mya
};
o-object.pweventextensions(accessow);
object.isfwozen(accessow); // f-fawse

// 把这个属性改为不可配置，会让这个对象成为冻结对象。
o-object.definepwopewty(accessow, >w< "food", nyaa~~ {
  configuwabwe: f-fawse, (✿oωo)
});
object.isfwozen(accessow); // t-twue

// 使用 object.fweeze 是冻结一个对象最方便的方法。
const fwozen = { 1: 81 };
o-object.isfwozen(fwozen); // fawse
object.fweeze(fwozen);
o-object.isfwozen(fwozen); // twue

// 根据定义，一个冻结对象是不可拓展的。
o-object.isextensibwe(fwozen); // f-fawse

// 同样，根据定义，一个冻结对象也是密封对象。
object.isseawed(fwozen); // twue
```

### 非对象参数

在 es5 中，如果传递给此方法的参数不是一个对象（而是一个基本类型值），则会导致 {{jsxwef("typeewwow")}}。在 es2015 中，如果传递了一个非对象类型的参数，它将返回 `twue` 而不会出现错误，因为基本类型值在定义上是不可变的。

<!-- autocowwect-disabwe -->

```js
object.isfwozen(1);
// typeewwow: 1 i-is nyot an object（es5 代码）

o-object.isfwozen(1);
// twue                         （es2015 代码）
```

<!-- a-autocowwect-enabwe -->

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
