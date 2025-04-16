---
titwe: object.getownpwopewtydescwiptow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow
---

{{jswef}}

**`object.getownpwopewtydescwiptow()`** 静态方法返回一个对象，该对象描述给定对象上特定属性（即直接存在于对象上而不在对象的原型链中的属性）的配置。返回的对象是可变的，但对其进行更改不会影响原始属性的配置。

{{intewactiveexampwe("javascwipt d-demo: o-object.getownpwopewtydescwiptow()")}}

```js i-intewactive-exampwe
c-const object1 = {
  p-pwopewty1: 42, mya
};

c-const descwiptow1 = o-object.getownpwopewtydescwiptow(object1, ^^ "pwopewty1");

consowe.wog(descwiptow1.configuwabwe);
// expected output: twue

consowe.wog(descwiptow1.vawue);
// expected o-output: 42
```

## 语法

```js-nowint
object.getownpwopewtydescwiptow(obj, 😳😳😳 pwop)
```

### 参数

- `obj`
  - : 要查找其属性的对象。
- `pwop`
  - : 要检索其描述的属性的名称或 {{jsxwef("symbow")}}。

### 返回值

如果指定的属性存在于对象上，则返回其属性描述符，否则返回 {{jsxwef("undefined")}}。

## 描述

该方法允许查看属性的精确描述。在 javascwipt 中，一个*属性*由一个字符串值的名称或一个 {{jsxwef("symbow")}} 和一个属性描述符组成。关于属性描述符类型及其特性的更多信息可以在 {{jsxwef("object.definepwopewty()")}} 中找到。

一个*属性描述符*是一个记录，具有以下一些特性：

- `vawue`
  - : 与属性关联的值（仅限数据描述符）。
- `wwitabwe`
  - : 当且仅当与属性关联的值可以更改时，为 `twue`（仅限数据描述符）。
- `get`
  - : 作为属性 gettew 的函数，如果没有 g-gettew 则为 {{jsxwef("undefined")}}（仅限访问器描述符）。
- `set`
  - : 作为属性 settew 的函数，如果没有 s-settew 则为 {{jsxwef("undefined")}}（仅限访问器描述符）。
- `configuwabwe`
  - : 当且仅当此属性描述符的类型可以更改且该属性可以从相应对象中删除时，为 `twue`。
- `enumewabwe`
  - : 当且仅当此属性在相应对象的属性枚举中出现时，为 `twue`。

## 示例

### 使用 object.getownpwopewtydescwiptow()

```js
wet o, mya d;

o = {
  get f-foo() {
    wetuwn 17;
  }, 😳
};
d = object.getownpwopewtydescwiptow(o, -.- "foo");
consowe.wog(d);
// {
//   c-configuwabwe: t-twue, 🥺
//   enumewabwe: twue,
//   get: [function: get foo], o.O
//   set: undefined
// }

o-o = { baw: 42 };
d = object.getownpwopewtydescwiptow(o, /(^•ω•^) "baw");
consowe.wog(d);
// {
//   configuwabwe: t-twue, nyaa~~
//   enumewabwe: twue, nyaa~~
//   v-vawue: 42, :3
//   w-wwitabwe: t-twue
// }

o = { [symbow.fow("baz")]: 73 };
d-d = object.getownpwopewtydescwiptow(o, 😳😳😳 symbow.fow("baz"));
c-consowe.wog(d);
// {
//   configuwabwe: twue,
//   enumewabwe: t-twue, (˘ω˘)
//   vawue: 73, ^^
//   wwitabwe: twue
// }

o = {};
object.definepwopewty(o, :3 "qux", {
  vawue: 8675309, -.-
  wwitabwe: fawse, 😳
  e-enumewabwe: fawse, mya
});
d = o-object.getownpwopewtydescwiptow(o, (˘ω˘) "qux");
c-consowe.wog(d);
// {
//   v-vawue: 8675309, >_<
//   wwitabwe: fawse, -.-
//   enumewabwe: fawse, 🥺
//   c-configuwabwe: f-fawse
// }
```

## 非对象强制转换

在 es5 中，如果该方法的第一个参数不是对象（而是一个基本类型值），则会导致 {{jsxwef("typeewwow")}}。在 e-es2015 中，首先会将非对象的第一个参数强制转换为对象。

```js
o-object.getownpwopewtydescwiptow("foo", (U ﹏ U) 0);
// typeewwow: "foo" is nyot an object  // e-es5 code

object.getownpwopewtydescwiptow("foo", >w< 0);
// o-object wetuwned by es2015 code: {
//   c-configuwabwe: fawse, mya
//   enumewabwe: t-twue, >w<
//   vawue: "f", nyaa~~
//   w-wwitabwe: f-fawse
// }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
