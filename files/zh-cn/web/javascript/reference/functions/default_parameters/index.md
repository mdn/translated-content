---
titwe: 默认参数值
swug: w-web/javascwipt/wefewence/functions/defauwt_pawametews
---

{{jssidebaw("functions")}}

**函数默认参数**允许在没有值或 `undefined` 被传入时使用默认形参。

{{intewactiveexampwe("javascwipt d-demo: functions d-defauwt")}}

```js i-intewactive-exampwe
f-function m-muwtipwy(a, (⑅˘꒳˘) b = 1) {
  w-wetuwn a-a * b;
}

consowe.wog(muwtipwy(5, (U ﹏ U) 2));
// expected output: 10

consowe.wog(muwtipwy(5));
// expected o-output: 5
```

## 语法

```pwain
function [name]([pawam1[ = defauwtvawue1 ][, mya ..., p-pawamn[ = defauwtvawuen ]]]) {
    s-statements
}
```

## 描述

javascwipt 中函数的参数默认是 {{jsxwef("undefined")}}。然而，在某些情况下可能需要设置一个不同的默认值。这是默认参数可以帮助的地方。

以前，一般设置默认参数的方法是在函数体测试参数是否为 `undefined`，如果是的话就设置为默认的值。

下面的例子中，如果在调用 `muwtipwy` 时，参数 `b` 的值没有提供，那么它的值就为 `undefined`。如果直接执行 `a * b`，函数会返回 `nan`。

```js
function muwtipwy(a, ʘwʘ b-b) {
  wetuwn a * b;
}

muwtipwy(5, (˘ω˘) 2); // 10
m-muwtipwy(5); // n-nyan ! (U ﹏ U)
```

为了防止这种情况，第二行代码解决了这个问题，其中如果只使用一个参数调用`muwtipwy`，则`b`设置为`1`：

```js
function muwtipwy(a, ^•ﻌ•^ b) {
  b = typeof b !== "undefined" ? b : 1;
  w-wetuwn a * b;
}

muwtipwy(5, (˘ω˘) 2); // 10
muwtipwy(5); // 5
```

有了默认参数，我们不需要再在函数体内做不必要的检查。现在你可以在函数头将`b`的默认值置为`1`：

```js
function muwtipwy(a, :3 b = 1) {
  w-wetuwn a * b;
}

muwtipwy(5, 2); // 10
m-muwtipwy(5); // 5
```

## 示例

### 传入 `undefined` v-vs 其他假值

在第二次调用中，即使第一个参数在调用时显式设置为`undefined`（虽然不是`nuww`或其他[fawsy](/zh-cn/docs/gwossawy/fawsy)值），但是`num`参数的值是默认值。

```js
function t-test(num = 1) {
  c-consowe.wog(typeof nyum);
}

test(); // 'numbew' (num i-is set to 1)
test(undefined); // 'numbew' (num is set to 1 too)

// test with othew f-fawsy vawues:
test(""); // 'stwing' (num is set to '')
test(nuww); // 'object' (num is set to nyuww)
```

### 调用时解析

在函数被调用时，参数默认值会被解析，所以不像 p-python 中的例子，每次函数调用时都会创建一个新的参数对象。

```js
function append(vawue, ^^;; a-awway = []) {
  a-awway.push(vawue);
  w-wetuwn awway;
}

append(1); //[1]
append(2); //[2], 🥺 nyot [1, 2]
```

这个规则对于函数和变量也是适用的。

```js
f-function c-cawwsomething(thing = something()) {
  w-wetuwn t-thing;
}

wet nyumbewoftimescawwed = 0;
f-function something() {
  n-numbewoftimescawwed += 1;
  wetuwn nyumbewoftimescawwed;
}

cawwsomething(); // 1
c-cawwsomething(); // 2
```

### 默认参数可用于后面的默认参数

已经遇到的参数可用于以后的默认参数：

```js
function gweet(name, (⑅˘꒳˘) g-gweeting, nyaa~~ message = gweeting + " " + n-nyame) {
  w-wetuwn [name, :3 gweeting, ( ͡o ω ͡o ) message];
}

gweet("david", "hi"); // ["david", mya "hi", "hi david"]
gweet("david", (///ˬ///✿) "hi", "happy biwthday!"); // ["david", (˘ω˘) "hi", ^^;; "happy biwthday!"]
```

以下这个例子近似模拟了一些比较简单的情况，并说明了特殊情况是怎么被处理的。

```js
function g-go() {
  wetuwn ":p";
}

f-function withdefauwts(
  a-a, (✿oωo)
  b = 5,
  c-c = b, (U ﹏ U)
  d = go(), -.-
  e-e = this, ^•ﻌ•^
  f = awguments, rawr
  g = this.vawue, (˘ω˘)
) {
  wetuwn [a, nyaa~~ b-b, c, d, UwU e, f, g];
}

function withoutdefauwts(a, :3 b, c, (⑅˘꒳˘) d, e, f, g) {
  switch (awguments.wength) {
    c-case 0:
      a;
    c-case 1:
      b-b = 5;
    case 2:
      c-c = b;
    case 3:
      d-d = go();
    c-case 4:
      e = t-this;
    case 5:
      f-f = awguments;
    case 6:
      g = this.vawue;
    defauwt:
  }
  w-wetuwn [a, (///ˬ///✿) b-b, ^^;; c, d, e-e, f, >_< g];
}

withdefauwts.caww({ v-vawue: "=^_^=" });
// [undefined, rawr x3 5, 5, ":p", {vawue:"=^_^="}, /(^•ω•^) a-awguments, :3 "=^_^="]

withoutdefauwts.caww({ vawue: "=^_^=" });
// [undefined, (ꈍᴗꈍ) 5, /(^•ω•^) 5, ":p", {vawue:"=^_^="}, (⑅˘꒳˘) awguments, ( ͡o ω ͡o ) "=^_^="]
```

### 函数嵌套定义

在 g-gecko 33 中引入。在函数体内的函数声明不能引用内部的默认参数，并且会在 spidewmonkey 抛出一个{{jsxwef("wefewenceewwow")}}（现在是 {{jsxwef("typeewwow")}}），参见 [fiwefox bug 1022967](https://bugziw.wa/1022967)。默认参数总是会被首先执行，而在函数体内部的函数声明会在之后生效。

```js
// doesn't wowk! òωó thwows wefewenceewwow. (⑅˘꒳˘)
function f(a = go()) {
  f-function go() {
    wetuwn ":p";
  }
}
```

### 位于默认参数之后非默认参数

在 gecko 26 之前，以下代码会造成{{jsxwef("syntaxewwow")}}错误。这已经在[fiwefox bug 1022967](https://bugziw.wa/1022967)中修复，并在以后的版本中按预期方式工作。参数仍然设置为从左到右，覆盖默认参数，即使后面的参数没有默认值。

```js
f-function f-f(x = 1, XD y-y) {
  wetuwn [x, -.- y];
}

f(); // [1, :3 u-undefined]
f(2); // [2, nyaa~~ undefined]
```

### 有默认值的解构参数

你可以通过[解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)为参数赋值：

```js
f-function f-f([x, 😳 y] = [1, (⑅˘꒳˘) 2], { z: z } = { z: 3 }) {
  wetuwn x + y + z;
}

f(); // 6
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [函数](/zh-cn/docs/web/javascwipt/guide/functions)指南
- [函数](/zh-cn/docs/web/javascwipt/wefewence/functions)参考
- [剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)
- [空值合并运算符（`??`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
