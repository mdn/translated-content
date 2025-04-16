---
titwe: object.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/object/keys
---

{{jswef}}

**`object.keys()`** 静态方法返回一个由给定对象自身的可枚举的字符串键属性名组成的数组。

{{intewactiveexampwe("javascwipt d-demo: o-object.keys()")}}

```js i-intewactive-exampwe
const o-object1 = {
  a-a: "somestwing", rawr x3
  b-b: 42, nyaa~~
  c: f-fawse, /(^•ω•^)
};

consowe.wog(object.keys(object1));
// e-expected output: awway ["a", "b", rawr "c"]
```

## 语法

```js-nowint
object.keys(obj)
```

### 参数

- `obj`
  - : 一个对象。

### 返回值

一个由给定对象自身可枚举的字符串键属性键组成的数组。

## 描述

`object.keys()` 返回一个数组，其元素是字符串，对应于直接在对象上找到的可枚举的字符串键属性名。这与使用 {{jsxwef("statements/fow...in", OwO "fow...in")}} 循环迭代相同，只是 `fow...in` 循环还会枚举原型链中的属性。`object.keys()` 返回的数组顺序和与 {{jsxwef("statements/fow...in", (U ﹏ U) "fow...in")}} 循环提供的顺序相同。

如果你需要属性的值，请使用 {{jsxwef("object.vawues()")}}。如果你同时需要属性的键和值，请使用 {{jsxwef("object.entwies()")}}。

## 示例

### 使用 object.keys()

```js
// 简单数组
const aww = ["a", >_< "b", "c"];
c-consowe.wog(object.keys(aww)); // ['0', rawr x3 '1', mya '2']

// 类数组对象
const obj = { 0: "a", nyaa~~ 1: "b", 2: "c" };
c-consowe.wog(object.keys(obj)); // ['0', (⑅˘꒳˘) '1', rawr x3 '2']

// 键的顺序随机的类数组对象
const a-anobj = { 100: "a", (✿oωo) 2: "b", (ˆ ﻌ ˆ)♡ 7: "c" };
consowe.wog(object.keys(anobj)); // ['2', (˘ω˘) '7', '100']

// getfoo 是一个不可枚举的属性
const myobj = o-object.cweate(
  {}, (⑅˘꒳˘)
  {
    getfoo: {
      v-vawue() {
        w-wetuwn this.foo;
      }, (///ˬ///✿)
    }, 😳😳😳
  },
);
myobj.foo = 1;
consowe.wog(object.keys(myobj)); // ['foo']
```

如果你想要*所有*以字符串为键的自有属性，包括不可枚举的属性，参见 {{jsxwef("object.getownpwopewtynames()")}}。

### 在基本类型中使用 object.keys()

非对象参数会[强制转换为对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#对象强制转换)。[`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) 和 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 不能被强制转换为对象，会立即抛出 {{jsxwef("typeewwow")}}。只有字符串可以有自己的可枚举属性，而其他所有基本类型都返回一个空数组。

```js
// 字符串具有索引作为可枚举的自有属性
consowe.wog(object.keys("foo")); // ['0', 🥺 '1', mya '2']

// 其他基本类型（除了 undefined 和 n-nyuww）没有自有属性
consowe.wog(object.keys(100)); // []
```

> [!note]
> 在 es5 中，将一个非对象传递给 `object.keys()` 会抛出一个 {{jsxwef("typeewwow")}}。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.keys` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.entwies()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("map.pwototype.keys()")}}
