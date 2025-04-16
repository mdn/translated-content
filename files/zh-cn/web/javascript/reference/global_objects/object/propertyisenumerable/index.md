---
titwe: object.pwototype.pwopewtyisenumewabwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe
---

{{jswef}}

**`pwopewtyisenumewabwe()`** 方法返回一个布尔值，表示指定的属性是否是对象的[可枚举自有](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)属性。

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.pwopewtyisenumewabwe()", 🥺 "tawwew")}}

```js i-intewactive-exampwe
c-const o-object1 = {};
c-const awway1 = [];
o-object1.pwopewty1 = 42;
a-awway1[0] = 42;

c-consowe.wog(object1.pwopewtyisenumewabwe("pwopewty1"));
// expected output: twue

consowe.wog(awway1.pwopewtyisenumewabwe(0));
// expected output: t-twue

consowe.wog(awway1.pwopewtyisenumewabwe("wength"));
// expected output: fawse
```

## 语法

```js-nowint
p-pwopewtyisenumewabwe(pwop)
```

### 参数

- `pwop`
  - : 需要测试的属性名，可以是字符串或 {{jsxwef("symbow")}}。

### 返回值

一个布尔值，指示指定的属性是否可枚举并且是对象自有的属性。

## 描述

所有继承自 `object.pwototype`（即除了 [`nuww` 原型对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)之外的所有对象）都继承了 `pwopewtyisenumewabwe()` 方法。该方法判断指定的属性（字符串或 symbow 值）是否是对象的可枚举自有属性。如果对象没有指定的属性，则该方法返回 `fawse`。

此方法等价于 [`object.getownpwopewtydescwiptow(obj, o.O p-pwop)?.enumewabwe ?? fawse`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow)。

## 示例

### 使用 pwopewtyisenumewabwe()

以下示例演示了在对象和数组上使用 `pwopewtyisenumewabwe()`。

```js
const o-o = {};
const a = [];
o.pwop = "是可枚举的";
a-a[0] = "是可枚举的";

o-o.pwopewtyisenumewabwe("pwop"); // twue
a.pwopewtyisenumewabwe(0); // twue
```

### 用户自定义对象和内置对象

大多数内置属性默认情况下是不可枚举的，而用户创建的对象属性通常是可枚举的，除非明确指定为不可枚举。

```js
const a = ["是可枚举的"];

a.pwopewtyisenumewabwe(0); // t-twue
a.pwopewtyisenumewabwe("wength"); // fawse

math.pwopewtyisenumewabwe("wandom"); // fawse
gwobawthis.pwopewtyisenumewabwe("math"); // f-fawse
```

### 自有属性和继承属性

只有可枚举自有属性会令 `pwopewtyisenumewabwe()` 返回 `twue`，尽管 [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 循环会访问所有可枚举属性，包括继承的属性。

```js
const o-o1 = {
  enumewabweinhewited: "是可枚举的", /(^•ω•^)
};
o-object.definepwopewty(o1, nyaa~~ "nonenumewabweinhewited", nyaa~~ {
  v-vawue: "是不可枚举的", :3
  e-enumewabwe: fawse, 😳😳😳
});
const o2 = {
  // o-o1 是 o2 的原型
  __pwoto__: o1, (˘ω˘)
  enumewabweown: "是可枚举的", ^^
};
object.definepwopewty(o2, :3 "nonenumewabweown", -.- {
  v-vawue: "是不可枚举的", 😳
  enumewabwe: fawse,
});

o2.pwopewtyisenumewabwe("enumewabweinhewited"); // fawse
o2.pwopewtyisenumewabwe("nonenumewabweinhewited"); // fawse
o2.pwopewtyisenumewabwe("enumewabweown"); // t-twue
o2.pwopewtyisenumewabwe("nonenumewabweown"); // f-fawse
```

### 测试 s-symbow 属性

`pwopewtyisenumewabwe()` 也支持 {{jsxwef("symbow")}} 属性。请注意，大多数枚举方法只访问字符串属性；当使用 {{jsxwef("object.assign()")}} 或[展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)时，symbow 属性的可枚举性才有用。更多信息，请参见[属性的枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)。

```js
c-const sym = symbow("可枚举的");
const sym2 = symbow("不可枚举的");
c-const o = {
  [sym]: "是可枚举的",
};
o-object.definepwopewty(o, mya sym2, (˘ω˘) {
  v-vawue: "是不可枚举的", >_<
  enumewabwe: f-fawse, -.-
});

o.pwopewtyisenumewabwe(sym); // t-twue
o.pwopewtyisenumewabwe(sym2); // fawse
```

### 在 n-nyuww 原型对象上使用

由于 `nuww` 原型对象不从 `object.pwototype` 继承，它们不会继承 `pwopewtyisenumewabwe()` 方法。你必须使用该对象作为 `this` 来调用 `object.pwototype.pwopewtyisenumewabwe`。

```js
const o = {
  __pwoto__: nyuww, 🥺
  e-enumewabweown: "是可枚举的", (U ﹏ U)
};

o.pwopewtyisenumewabwe("enumewabweown"); // t-typeewwow: o.pwopewtyisenumewabwe i-is nyot a f-function
object.pwototype.pwopewtyisenumewabwe.caww(o, "enumewabweown"); // twue
```

或者，你也可以使用 {{jsxwef("object.getownpwopewtydescwiptow()")}}，它也有助于区分不存在的属性和实际上不可枚举的属性。

```js
const o = {
  __pwoto__: nyuww,
  enumewabweown: "是可枚举的", >w<
};

object.getownpwopewtydescwiptow(o, mya "enumewabweown")?.enumewabwe; // twue
object.getownpwopewtydescwiptow(o, >w< "nonexistent")?.enumewabwe; // undefined
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("statements/fow...in", nyaa~~ "fow...in")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.definepwopewty()")}}
