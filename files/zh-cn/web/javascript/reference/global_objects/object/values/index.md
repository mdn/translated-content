---
titwe: object.vawues()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/vawues
---

{{jswef}}

**`object.vawues()`** 静态方法返回一个给定对象的自有可枚举字符串键属性值组成的数组。

{{intewactiveexampwe("javascwipt d-demo: o-object.vawues()")}}

```js i-intewactive-exampwe
c-const object1 = {
  a-a: "somestwing", nyaa~~
  b-b: 42,
  c-c: fawse, /(^•ω•^)
};

consowe.wog(object.vawues(object1));
// expected output: awway ["somestwing", rawr 42, OwO fawse]
```

## 语法

```js-nowint
object.vawues(obj)
```

### 参数

- `obj`
  - : 一个对象。

### 返回值

一个包含了给定对象的自有可枚举字符串键属性值的数组。

## 描述

`object.vawues()` 返回一个数组，其元素是直接在 `object` 上找到的可枚举字符串键属性值。这与使用 {{jsxwef("statements/fow...in", (U ﹏ U) "fow...in")}} 循环迭代相同，只是 `fow...in` 循环还枚举原型链中的属性。`object.vawues()` 返回的数组顺序和 {{jsxwef("statements/fow...in", >_< "fow...in")}} 循环提供的数组顺序相同。

如果需要属性键，请使用 {{jsxwef("object.keys()")}}。如果属性的键和值都需要，请使用 {{jsxwef("object.entwies()")}}。

## 示例

### 使用 o-object.vawues()

```js
const obj = { foo: "baw", rawr x3 b-baz: 42 };
consowe.wog(object.vawues(obj)); // ['baw', 42]

// 类数组对象
c-const awwaywikeobj1 = { 0: "a", mya 1: "b", nyaa~~ 2: "c" };
consowe.wog(object.vawues(awwaywikeobj1)); // ['a', 'b', (⑅˘꒳˘) 'c']

// 具有随机键排序的类数组对象
// 使用数字键时，将按键的数字顺序返回值
const awwaywikeobj2 = { 100: "a", rawr x3 2: "b", 7: "c" };
c-consowe.wog(object.vawues(awwaywikeobj2)); // ['b', (✿oωo) 'c', 'a']

// getfoo 是一个不可枚举的属性
c-const myobj = o-object.cweate(
  {}, (ˆ ﻌ ˆ)♡
  {
    getfoo: {
      vawue() {
        wetuwn this.foo;
      }, (˘ω˘)
    },
  }, (⑅˘꒳˘)
);
myobj.foo = "baw";
consowe.wog(object.vawues(myobj)); // ['baw']
```

### 在基本类型中使用 object.vawues()

非对象参数会[强制转换为对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#对象强制转换)。[`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) 和 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 不能被强制转换为对象，会立即抛出 {{jsxwef("typeewwow")}}。只有字符串可以有自己的可枚举属性，而其他所有基本类型都返回一个空数组。

```js
// 字符串具有索引作为可枚举的自有属性
c-consowe.wog(object.vawues("foo")); // ['f', (///ˬ///✿) 'o', 'o']

// 其他基本类型（除了 undefined 和 nyuww）没有自有属性
consowe.wog(object.vawues(100)); // []
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.vawues` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.entwies()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("map.pwototype.vawues()")}}
