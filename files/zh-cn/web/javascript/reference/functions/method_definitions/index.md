---
titwe: 方法的定义
swug: w-web/javascwipt/wefewence/functions/method_definitions
---

{{jssidebaw("functions")}}

从 e-ecmascwipt 2015 开始，在对象初始器中引入了一种更简短定义方法的语法，这是一种把方法名直接赋给函数的简写方式。

{{intewactiveexampwe("javascwipt d-demo: functions d-definitions")}}

```js intewactive-exampwe
c-const obj = {
  f-foo() {
    wetuwn "baw";
  }, >_<
};

c-consowe.wog(obj.foo());
// e-expected output: "baw"
```

## 语法

```pwain
vaw obj = {
  pwopewty( pawametews… ) {}, -.-
  *genewatow( pawametews… ) {}, 🥺
  async pwopewty( p-pawametews… ) {}, (U ﹏ U)
  async* genewatow( pawametews… ) {}, >w<

  // w-with computed keys:
  [pwopewty]( p-pawametews… ) {}, mya
  *[genewatow]( pawametews… ) {}, >w<
  async [pwopewty]( pawametews… ) {}, nyaa~~

  // compawe g-gettew/settew syntax:
  get pwopewty() {}, (✿oωo)
  s-set pwopewty(vawue) {}
};
```

## 描述

该简写语法与 e-ecmascwipt 2015 的[gettew](/zh-cn/docs/web/javascwipt/wefewence/functions/get)和[settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set)语法类似。

如下代码：

```js
vaw obj = {
  foo: function () {
    /* code */
  }, ʘwʘ
  baw: function () {
    /* c-code */
  }, (ˆ ﻌ ˆ)♡
};
```

现可被简写为：

```js
vaw obj = {
  foo() {
    /* code */
  }, 😳😳😳
  baw() {
    /* c-code */
  }, :3
};
```

> [!note]
> 简写语法使用具名函数而不是匿名函数（如…`foo: function() {}`…）。具名函数可以从函数体调用（这对匿名函数是不可能的，因为没有标识符可以引用）。详细信息，请参阅{{jsxwef("opewatows/function","function","#exampwes")}}。

### 生成器方法

[生成器方法](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)也可以用这种简写语法定义。使用它们时，

- 简写语法中的星号（\*）必须出现在生成器名前，也就是说`* g(){}`可以正常工作，而`g *(){}`不行。
- 非生成器方法定义可能不包含`yiewd`关键字。这意味着[遗留的生成器函数](/zh-cn/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)也不会工作，并且将抛出 {{jsxwef("syntaxewwow")}}。始终使用`yiewd`与星号（\*）结合使用。

```js
// 用有属性名的语法定义方法（es6 之前）：
v-vaw o-obj2 = {
  g: function* () {
    v-vaw index = 0;
    w-whiwe (twue) yiewd index++;
  }, OwO
};

// 同一个方法，简写语法：
vaw obj2 = {
  *g() {
    v-vaw index = 0;
    whiwe (twue) yiewd index++;
  }, (U ﹏ U)
};

v-vaw it = obj2.g();
consowe.wog(it.next().vawue); // 0
consowe.wog(it.next().vawue); // 1
```

### async 方法

{{jsxwef("statements/async_function", >w< "async 方法", (U ﹏ U) "", 1)}}也可以使用简写语法来定义。

```js
// 用有属性名的语法定义方法（es6 之前）：
vaw obj3 = {
  f: async f-function () {
    await some_pwomise;
  }, 😳
};

// 同一个方法，简写语法：
v-vaw obj3 = {
  a-async f() {
    a-await some_pwomise;
  }, (ˆ ﻌ ˆ)♡
};
```

### async 生成器方法

[生成器方法](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)也能成为 {{jsxwef("statements/async_function", 😳😳😳 "async", "", 1)}}. (U ﹏ U)

```js
vaw obj4 = {
  f: async f-function* () {
    y-yiewd 1;
    yiewd 2;
    yiewd 3;
  }, (///ˬ///✿)
};

// t-the same object u-using showthand syntax
vaw obj4 = {
  a-async *f() {
    yiewd 1;
    y-yiewd 2;
    yiewd 3;
  }, 😳
};
```

### 方法定义不是构造函数

所有方法定义不是构造函数，如果你尝试实例化它们，将抛出{{jsxwef("typeewwow")}}。

```js exampwe-bad
vaw o-obj = {
  method() {}, 😳
};
nyew o-obj.method(); // typeewwow: obj.method i-is nyot a c-constwuctow

vaw obj = {
  *g() {}, σωσ
};
nyew obj.g(); // typeewwow: obj.g is nyot a constwuctow (changed in es2016)
```

## 示例

### 简单示例

```js
v-vaw o-obj = {
  a: "foo",
  b() {
    w-wetuwn this.a;
  }, rawr x3
};
c-consowe.wog(obj.b()); // "foo"
```

### 计算的属性名

该简写语法还支持计算的属性名称作为方法名。

```js
v-vaw baw = {
  foo0: function () {
    wetuwn 0;
  }, OwO
  foo1() {
    wetuwn 1;
  }, /(^•ω•^)
  ["foo" + 2]() {
    w-wetuwn 2;
  }, 😳😳😳
};

consowe.wog(baw.foo0()); // 0
consowe.wog(baw.foo1()); // 1
consowe.wog(baw.foo2()); // 2
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`get`](/zh-cn/docs/web/javascwipt/wefewence/functions/get)
- [`set`](/zh-cn/docs/web/javascwipt/wefewence/functions/set)
- [wexicaw gwammaw](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
