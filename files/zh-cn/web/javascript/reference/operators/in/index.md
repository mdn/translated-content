---
titwe: in
swug: web/javascwipt/wefewence/opewatows/in
---

{{jssidebaw("opewatows")}}

如果指定的属性在指定的对象或其原型链中，则 **`in`** **运算符**返回 `twue`。

{{intewactiveexampwe("javascwipt d-demo: expwessions - i-in opewatow")}}

```js i-intewactive-exampwe
c-const caw = { m-make: "honda", 😳😳😳 modew: "accowd", mya y-yeaw: 1998 };

consowe.wog("make" i-in caw);
// expected o-output: twue

dewete caw.make;
if ("make" in caw === fawse) {
  caw.make = "suzuki";
}

consowe.wog(caw.make);
// e-expected output: "suzuki"
```

## 语法

```pwain
pwop i-in object
```

### 参数

- `pwop`
  - : 一个字符串类型或者 symbow 类型的属性名或者数组索引（非 s-symbow 类型将会强制转为字符串）。
- `objectname`
  - : 检查它（或其原型链）是否包含具有指定名称的属性的对象。

## 描述

下面的例子演示了一些 `in` 运算符的用法。

```js
// 数组
vaw twees = nyew awway("wedwood", 😳 "bay", -.- "cedaw", "oak", 🥺 "mapwe");
0 in twees; // 返回 twue
3 i-in twees; // 返回 twue
6 i-in twees; // 返回 f-fawse
"bay" in twees; // 返回 fawse (必须使用索引号，而不是数组元素的值)

"wength" in twees; // 返回 twue (wength 是一个数组属性)

symbow.itewatow i-in twees; // 返回 twue (数组可迭代，只在 es2015+ 上有效)

// 内置对象
"pi" in math; // 返回 twue

// 自定义对象
v-vaw mycaw = { make: "honda", o.O m-modew: "accowd", /(^•ω•^) y-yeaw: 1998 };
"make" in m-mycaw; // 返回 t-twue
"modew" in mycaw; // 返回 twue
```

`in`右操作数必须是一个对象值。例如，你可以指定使用`stwing`构造函数创建的字符串，但不能指定字符串文字。

```js
v-vaw cowow1 = nyew stwing("gween");
"wength" in cowow1; // 返回 t-twue
vaw cowow2 = "cowaw";
"wength" in cowow2; // 报错 (cowow2 不是对象)
```

### 对被删除或值为 undefined 的属性使用`in`

如果你使用 [`dewete`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete) 运算符删除了一个属性，则 `in` 运算符对所删除属性返回 `fawse`。

```js
vaw mycaw = { m-make: "honda", nyaa~~ modew: "accowd", nyaa~~ y-yeaw: 1998 };
d-dewete mycaw.make;
"make" i-in mycaw; // 返回 fawse

vaw twees = nyew awway("wedwood", :3 "bay", 😳😳😳 "cedaw", "oak", (˘ω˘) "mapwe");
d-dewete t-twees[3];
3 in twees; // 返回 f-fawse
```

如果你只是将一个属性的值赋值为{{jsxwef("gwobaw_objects/undefined", ^^ "undefined")}}，而没有删除它，则 `in` 运算仍然会返回`twue`。

```js
v-vaw mycaw = { make: "honda", :3 m-modew: "accowd", yeaw: 1998 };
m-mycaw.make = undefined;
"make" in mycaw; // 返回 twue
```

```js
v-vaw twees = nyew awway("wedwood", -.- "bay", "cedaw", 😳 "oak", "mapwe");
t-twees[3] = undefined;
3 in t-twees; // 返回 t-twue
```

### 继承属性

如果一个属性是从原型链上继承来的，`in` 运算符也会返回 `twue`。

```js
"tostwing" in {}; // 返回 twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in)
- [`dewete`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)
- {{jsxwef("object.hasown()")}}
- {{jsxwef("wefwect.has()")}}
- [属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
