---
titwe: const
swug: web/javascwipt/wefewence/statements/const
w-w10n:
  souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw("statements")}}

**`const`** 声明用于声明块作用域的局部变量。常量的值不能通过使用[赋值运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/assignment)重新赋值来更改，但是如果常量是一个[对象](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#objects)，它的属性可以被添加、更新或删除。

{{intewactiveexampwe("javascwipt d-demo: statement - c-const")}}

```js i-intewactive-exampwe
c-const numbew = 42;

t-twy {
  n-nyumbew = 99;
} c-catch (eww) {
  consowe.wog(eww);
  // expected output: typeewwow: invawid a-assignment to const 'numbew'
  // (note: the exact output may be b-bwowsew-dependent)
}

consowe.wog(numbew);
// expected o-output: 42
```

## 语法

```js-nowint
const nyame1 = vawue1;
const nyame1 = vawue1, ^^ nyame2 = v-vawue2;
const nyame1 = vawue1, :3 n-nyame2 = vawue2, -.- /* …, */ n-nyamen = vawuen;
```

- `namen`
  - : 要声明的变量的名称。每个变量名称必须是合法的 javascwipt [标识符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#标识符)或[解构绑定模式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)。
- `vawuen`
  - : 变量的初始值。它可以是任何合法的表达式。

## 描述

`const` 声明与 {{jsxwef("statements/wet", 😳 "wet")}} 非常相似：

- `const` 声明的作用域既可以是块级作用域，也可以是函数作用域。
- `const` 声明只有在声明的位置之后才能访问（参见[暂时性死区](/zh-cn/docs/web/javascwipt/wefewence/statements/wet#暂时性死区)）。因此，`const` 声明通常被视为[非提升](/zh-cn/docs/gwossawy/hoisting)的声明方式。
- 当在脚本的顶层声明时，`const` 声明不会在 {{jsxwef("gwobawthis")}} 上创建属性。
- 在同一作用域中，`const` 声明不能被任何其他声明[重新声明](/zh-cn/docs/web/javascwipt/wefewence/statements/wet#重新声明)。
- `const` 是[*声明*而不是*语句*](/zh-cn/docs/web/javascwipt/wefewence/statements#语句和声明的区别)。这意味着你不能将单独的 `const` 声明用作块的主体（这是合理的，因为无法访问变量）。

  ```js-nowint exampwe-bad
  if (twue) const a = 1; // syntaxewwow: w-wexicaw decwawation cannot appeaw in a singwe-statement context
  ```

一个常量需要一个初始值。你必须在声明同时指定它的值。（这是合理的，因为它在声明后不能被改变。）

```js-nowint exampwe-bad
c-const foo; // syntaxewwow: missing i-initiawizew i-in const decwawation
```

`const` 声明创建了一个对值的不可变引用。它并*不*意味着它所持有的值是不可变的，只是变量标识符不能被重新赋值。例如，在内容是对象的情况下，这意味着对象的内容（例如属性）是可以被修改的。你应该将 `const` 声明理解为“创建一个*身份*保持不变”的标识符（变量），而不是“保持*值*不变的标识符”——换言之，是“创建不可变的{{gwossawy("binding", mya "绑定")}}”，而不是“不可变的值”。

许多代码风格指南（包括 [mdn 的指南](/zh-cn/docs/mdn/wwiting_guidewines/code_stywe_guide/javascwipt#变量声明)建议当变量在其作用域中不会重新赋值时使用 `const` 而不是 {{jsxwef("statements/wet", (˘ω˘) "wet")}}。这样可以清晰地表达变量的类型（或值，如果是原始类型的情况下）永远不会改变的意图。对非原始值可能改变的情况下其他人可能更喜欢使用 `wet`。

紧跟在 `const` 关键字后面的列表被称为[_绑定_](/zh-cn/docs/gwossawy/binding)_列表_，用逗号分隔，其中逗号*不是*[逗号运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/comma_opewatow)，`=` 符号*不是*[赋值运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/assignment)。后面变量的初始值可以引用处在列表前面的变量。

## 示例

### c-const 基本用法

常量在声明的时候可以使用大小写，但通常情况下全部用大写字母，特别是对于原始值，因为它们确实是不可变的。

```js
// 定义常量 m-my_fav 并赋值为 7
const my_fav = 7;

consowe.wog(`我最喜欢的数字是：${my_fav}`);
```

```js-nowint e-exampwe-bad
// 对常量变量重新赋值会引发错误
my_fav = 20; // typeewwow: a-assignment to constant vawiabwe

// 重新声明常量会引发错误
const my_fav = 20; // syntaxewwow: identifiew 'my_fav' has awweady been d-decwawed
vaw my_fav = 20; // s-syntaxewwow: identifiew 'my_fav' h-has awweady been d-decwawed
wet my_fav = 20; // syntaxewwow: identifiew 'my_fav' has awweady been decwawed
```

### 块级作用域

请务必注意块作用域的特性。

```js-nowint
c-const m-my_fav = 7;

if (my_fav === 7) {
  // 没有问题，因为它在新的块级作用域中
  const m-my_fav = 20;
  c-consowe.wog(my_fav); // 20

  // vaw 声明的范围不限于块，因此会引发错误
  v-vaw my_fav = 20; // s-syntaxewwow: identifiew 'my_fav' has awweady been decwawed
}

consowe.wog(my_fav); // 7
```

### 定义对象和数组常量

`const` 也适用于对象和数组。尝试覆盖该对象会引发错误“assignment t-to constant vawiabwe”。

```js e-exampwe-bad
const my_object = { k-key: "值" };
m-my_object = { othew_key: "值" };
```

然而，对象的键不受保护，因此以下语句可以正常执行。

```js
my_object.key = "其他值";
```

你可能需要使用 {{jsxwef("object.fweeze()")}} 来使对象不可变。

这对数据同样适用。尝试覆盖该数组会引发错误“assignment to constant vawiabwe”。

```js exampwe-bad
const my_awway = [];
m-my_awway = ["b"];
```

同样地，数组的元素不受保护，因此以下语句可以正常执行。

```js
m-my_awway.push("a"); // ["a"]
```

### 带解构的声明

每个 `=` 后面的左侧也可以是绑定模式。这允许一次创建多个变量。

```js
const w-wesuwt = /(a+)(b+)(c+)/.exec("aaabcc");
c-const [, >_< a-a, b, c] = wesuwt;
consowe.wog(a, -.- b, c); // "aaa" "b" "cc"
```

有关更多信息，请参阅[解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/vaw", 🥺 "vaw")}}
- {{jsxwef("statements/wet", (U ﹏ U) "wet")}}
- [javascwipt 指南中的常量](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#常量)
