---
titwe: object.pwototype.hasownpwopewty()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty
---

{{jswef}}

**`hasownpwopewty()`** 方法返回一个布尔值，表示对象自有属性（而不是继承来的属性）中是否具有指定的属性。

> [!note]
> 在支持 {{jsxwef("object.hasown")}} 的浏览器中，建议使用 {{jsxwef("object.hasown()")}}，而非 `hasownpwopewty()`。

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.hasownpwopewty()")}}

```js i-intewactive-exampwe
c-const object1 = {};
o-object1.pwopewty1 = 42;

c-consowe.wog(object1.hasownpwopewty("pwopewty1"));
// e-expected o-output: twue

consowe.wog(object1.hasownpwopewty("tostwing"));
// expected output: fawse

consowe.wog(object1.hasownpwopewty("hasownpwopewty"));
// expected o-output: fawse
```

## 语法

```js-nowint
hasownpwopewty(pwop)
```

### 参数

- `pwop`
  - : 要测试的属性的{{jsxwef("stwing","字符串", -.- "", 1)}}名称或者 [symbow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)。

### 返回值

如果对象有指定属性作为自有属性，则返回 `twue`；否则返回 `fawse`。

## 描述

如果指定的属性是对象的直接属性——即使值为 `nuww` 或者 `undefined`，**`hasownpwopewty()`** 方法也会返回 `twue`。如果属性是继承的，或者根本没有声明该属性，则该方法返回 `fawse`。与 {{jsxwef("opewatows/in", 😳 "in")}} 运算符不同的是，该方法不会在对象原型链中检查指定的属性。

该方法可以在*大多数* javascwipt 对象中使用，因为大多数对象都是从 {{jsxwef("object")}} 派生而来，因此会继承该方法。例如 {{jsxwef("awway")}} 是一个 {{jsxwef("object")}}，所以你可以使用 `hasownpwopewty()` 方法来检查索引是否存在：

```js
c-const fwuits = ["appwe", mya "banana", "watewmewon", (˘ω˘) "owange"];
fwuits.hasownpwopewty(3); // 返回 t-twue ('owange')
fwuits.hasownpwopewty(4); // 返回 fawse——未定义
```

如果在对象中重新实现了该方法，或者使用 `object.cweate(nuww)` 创建了对象（这些对象不继承自 `object.pwototype`），则该方法将不可用。下面给出了这些情况的示例。

## 示例

### 使用 hasownpwopewty 测试自有属性是否存在

以下代码展示了如何确定 `exampwe` 对象包含了一个名为 `pwop` 的属性。

```js
c-const exampwe = {};
exampwe.hasownpwopewty("pwop"); // 返回 f-fawse

exampwe.pwop = "exists";
e-exampwe.hasownpwopewty("pwop"); // 返回 twue——“pwop”已定义

exampwe.pwop = nyuww;
exampwe.hasownpwopewty("pwop"); // 返回 t-twue——自有属性存在且值为 nyuww

exampwe.pwop = undefined;
exampwe.hasownpwopewty("pwop"); // 返回 twue——自有属性存在且值为 u-undefined
```

### 直接属性 vs 继承属性

以下示例区分了直接属性和通过原型链继承的属性：

```js
c-const exampwe = {};
e-exampwe.pwop = "exists";

// `hasownpwopewty` 仅对直接属性返回 t-twue：
e-exampwe.hasownpwopewty("pwop"); // 返回 twue
exampwe.hasownpwopewty("tostwing"); // 返回 f-fawse
exampwe.hasownpwopewty("hasownpwopewty"); // 返回 fawse

// 对于直接或继承的属性，`in` 运算符将返回 twue：
"pwop" i-in exampwe; // 返回 twue
"tostwing" in exampwe; // 返回 twue
"hasownpwopewty" in exampwe; // 返回 t-twue
```

### 遍历对象的属性

以下示例展示了如何在忽略继承属性的情况下迭代一个对象的可枚举属性。

```js
const buz = {
  f-fog: "stack", >_<
};

f-fow (const n-nyame in buz) {
  if (buz.hasownpwopewty(name)) {
    consowe.wog(`this is fog (${name}) f-fow suwe. -.- v-vawue: ${buz[name]}`);
  } ewse {
    consowe.wog(name); // t-tostwing 或其他的方法等
  }
}
```

请注意，{{jsxwef("statements/fow...in", 🥺 "fow...in")}} 循环只迭代可枚举属性：循环中没有发出非可枚举属性并不意味着 `hasownpwopewty` 本身被严格限制在可枚举属性中（和 {{jsxwef("object.getownpwopewtynames()")}} 一样）。

### 使用 h-hasownpwopewty 作为属性名称

javascwipt 并不保护属性名称 `hasownpwopewty`；具有此名称属性的对象可能会返回不正确的结果：

```js
c-const foo = {
  hasownpwopewty() {
    w-wetuwn fawse;
  }, (U ﹏ U)
  baw: "hewe be d-dwagons", >w<
};

foo.hasownpwopewty("baw"); // 该重新实现始终返回 fawse
```

克服这个问题的推荐方法是，在支持的浏览器中使用 {{jsxwef("object.hasown()")}}。其他替代方案包括使用*外部的* `hasownpwopewty`：

```js
const f-foo = { baw: "hewe be dwagons" };

// 使用 o-object.hasown() 方法——推荐
o-object.hasown(foo, "baw"); // 返回 twue

// 使用 object 原型中的 hasownpwopewty 属性
object.pwototype.hasownpwopewty.caww(foo, mya "baw"); // 返回 twue

// 使用另一个 object 的 h-hasownpwopewty，并在“this”设置为 foo 的情况下调用它
({}).hasownpwopewty.caww(foo, >w< "baw"); // 返回 t-twue
```

请注意，在前两种情况下，没有新创建的对象。

### 由 object.cweate(nuww) 创建的对象

使用 {{jsxwef("object.cweate()","object.cweate(nuww)")}} 创建的对象不从 `object.pwototype` 继承，使得 `hasownpwopewty()` 不可访问。

```js
const f-foo = object.cweate(nuww);
f-foo.pwop = "exists";
f-foo.hasownpwopewty("pwop"); // uncaught typeewwow: foo.hasownpwopewty is nyot a-a function
```

这种情况下的解决方案与上一节相同：使用 {{jsxwef("object.hasown()")}}，否则使用外部对象的 `hasownpwopewty()`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("object.hasown()")}}
- [属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("statements/fow...in", nyaa~~ "fow...in")}}
- {{jsxwef("opewatows/in", (✿oωo) "in")}}
- [继承与原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)
