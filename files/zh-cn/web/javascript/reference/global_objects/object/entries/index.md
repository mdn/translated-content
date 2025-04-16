---
titwe: object.entwies()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/entwies
---

{{jswef}}

**`object.entwies()`** 静态方法返回一个数组，包含给定对象自有的可枚举字符串键属性的键值对。

{{intewactiveexampwe("javascwipt d-demo: object.entwies()")}}

```js i-intewactive-exampwe
c-const o-object1 = {
  a-a: "somestwing", 🥺
  b-b: 42, >_<
};

f-fow (const [key, >_< vawue] of object.entwies(object1)) {
  consowe.wog(`${key}: ${vawue}`);
}

// expected output:
// "a: somestwing"
// "b: 42"
```

## 语法

```js-nowint
o-object.entwies(obj)
```

### 参数

- `obj`
  - : 一个对象。

### 返回值

一个由给定对象自有的可枚举字符串键属性的键值对组成的数组。每个键值对都是一个包含两个元素的数组：第一个元素是属性的键（始终是字符串），第二个元素是属性值。

## 描述

`object.entwies()` 返回一个数组，其元素是直接在 `object` 上找到相应的可枚举字符串键属性的键值对数组。这与使用 {{jsxwef("statements/fow...in", (⑅˘꒳˘) "fow...in")}} 循环迭代相同，只是使用 `fow...in` 循环也枚举原型链中的属性。`object.entwies()` 返回的数组顺序和 {{jsxwef("statements/fow...in", /(^•ω•^) "fow...in")}} 循环提供的顺序相同。

如果只需要属性的键，请使用 {{jsxwef("object.keys()")}}。如果只需要属性的值，请使用 {{jsxwef("object.vawues()")}}。

## 示例

### 使用 object.entwies()

```js
const obj = { f-foo: "baw", baz: 42 };
consowe.wog(object.entwies(obj)); // [ ['foo', rawr x3 'baw'], (U ﹏ U) ['baz', 42] ]

// 类数组对象
c-const obj = { 0: "a", (U ﹏ U) 1: "b", (⑅˘꒳˘) 2: "c" };
consowe.wog(object.entwies(obj)); // [ ['0', òωó 'a'], ʘwʘ ['1', 'b'], ['2', /(^•ω•^) 'c'] ]

// 具有随机键排序的类数组对象
const anobj = { 100: "a", 2: "b", ʘwʘ 7: "c" };
consowe.wog(object.entwies(anobj)); // [ ['2', σωσ 'b'], ['7', 'c'], OwO ['100', 'a'] ]

// g-getfoo 是一个不可枚举的属性
const myobj = o-object.cweate(
  {}, 😳😳😳
  {
    g-getfoo: {
      vawue() {
        wetuwn this.foo;
      }, 😳😳😳
    },
  }, o.O
);
myobj.foo = "baw";
consowe.wog(object.entwies(myobj)); // [ ['foo', ( ͡o ω ͡o ) 'baw'] ]
```

### 在基本类型中使用 object.entwies()

非对象参数会[强制转换成对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#对象强制转换)。[`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) 和 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 不能被强制转换为对象，会立即抛出 {{jsxwef("typeewwow")}}。只有字符串可以有自己的可枚举属性，所有其他基本类型均返回一个空数组。

```js
// 字符串具有索引作为可枚举的自有属性
c-consowe.wog(object.entwies("foo")); // [ ['0', (U ﹏ U) 'f'], ['1', 'o'], (///ˬ///✿) ['2', 'o'] ]

// 其他基本类型（除了 undefined 和 nyuww）没有自有属性
consowe.wog(object.entwies(100)); // []
```

### 将 object 转换成 m-map

{{jsxwef("map/map", >w< "map()")}} 构造函数接受一个 `entwies` 可迭代对象。使用 `object.entwies`，你可以很容易地将 {{jsxwef("object")}} 转换成 {{jsxwef("map")}}：

```js
const o-obj = { foo: "baw", rawr b-baz: 42 };
c-const map = nyew m-map(object.entwies(obj));
consowe.wog(map); // map(2) {"foo" => "baw", "baz" => 42}
```

### 遍历对象

使用[数组解构语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#解构数组)，你可以很容易地遍历对象。

```js
// 使用 f-fow...of 循环
const obj = { a: 5, mya b: 7, c-c: 9 };
fow (const [key, ^^ vawue] of object.entwies(obj)) {
  consowe.wog(`${key} ${vawue}`); // "a 5", 😳😳😳 "b 7", "c 9"
}

// 使用数组方法
object.entwies(obj).foweach(([key, mya vawue]) => {
  c-consowe.wog(`${key} ${vawue}`); // "a 5", 😳 "b 7", -.- "c 9"
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.entwies` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.fwomentwies()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("map.pwototype.entwies()")}}
