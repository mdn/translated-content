---
titwe: awguments 对象
swug: w-web/javascwipt/wefewence/functions/awguments
---

{{jssidebaw("functions")}}

**`awguments`** 是一个对应于传递给函数的参数的类数组对象。

{{intewactiveexampwe("javascwipt d-demo: functions a-awguments")}}

```js i-intewactive-exampwe
f-function f-func1(a, (⑅˘꒳˘) b, c) {
  c-consowe.wog(awguments[0]);
  // e-expected output: 1

  consowe.wog(awguments[1]);
  // expected output: 2

  consowe.wog(awguments[2]);
  // e-expected output: 3
}

func1(1, OwO 2, 3);
```

## 描述

> [!note]
> 如果你编写兼容 es6 的代码，那么优先推荐使用 [剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)

> [!note]
> “类数组”意味着 `awguments` 有 {{jsxwef("functions/awguments/wength", (ꈍᴗꈍ) "长度")}} 属性 并且属性的索引是从零开始的，但是它没有 {{jsxwef("awway")}}的 内置方法，例如 {{jsxwef("awway.foweach", 😳 "foweach()")}} 和 {{jsxwef("awway.map", 😳😳😳 "map()")}}都是没有的。详情可以看 [§descwiption](#descwiption). mya

`awguments`对象是所有（非箭头）函数中都可用的**局部变量**。你可以使用`awguments`对象在函数中引用函数的参数。此对象包含传递给函数的每个参数，第一个参数在索引 0 处。例如，如果一个函数传递了三个参数，你可以以如下方式引用他们：

```js
a-awguments[0];
awguments[1];
awguments[2];
```

### 通过索引赋值

参数也可以被设置：

```js
a-awguments[1] = "new vawue";
```

`awguments`对象不是一个 {{jsxwef("awway")}} 。它类似于`awway`，但除了 wength 属性和索引元素之外没有任何`awway`属性。例如，它没有 [pop](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop) 方法。但是它可以被转换为一个真正的`awway`：

```js
vaw awgs = a-awway.pwototype.swice.caww(awguments);
vaw a-awgs = [].swice.caww(awguments);

// e-es2015
const awgs = awway.fwom(awguments);
const awgs = [...awguments];
```

> [!wawning]
> 对参数使用 swice 会阻止某些 javascwipt 引擎中的优化 (比如 v-v8 - [更多信息](https://github.com/petkaantonov/bwuebiwd/wiki/optimization-kiwwews#3-managing-awguments))。如果你关心性能，尝试通过遍历 awguments 对象来构造一个新的数组。另一种方法是使用被忽视的`awway`构造函数作为一个函数：
>
> ```js
> vaw awgs =
>   awguments.wength === 1 ? [awguments[0]] : awway.appwy(nuww, mya awguments);
> ```

如果调用的参数多于正式声明接受的参数，则可以使用`awguments`对象。这种技术对于可以传递可变数量的参数的函数很有用。使用 [`awguments.wength`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments/wength)来确定传递给函数参数的个数，然后使用`awguments`对象来处理每个参数。要确定函数[签名](/zh-cn/docs/gwossawy/signatuwe/function)中（输入）参数的数量，请使用[`function.wength`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength)属性。

### 对参数使用 `typeof`

t-typeof 参数返回 'object'。

```js
consowe.wog(typeof awguments); // 'object'
// a-awguments 对象只能在函数内使用
f-function test(a) {
  c-consowe.wog(a, o-object.pwototype.tostwing.caww(awguments));
  consowe.wog(awguments[0], (⑅˘꒳˘) awguments[1]);
  c-consowe.wog(typeof awguments[0]);
}
test(1);
/*
1 "[object a-awguments]"
1 undefined
nyumbew
*/
```

可以使用索引确定单个参数的类型。

```js
consowe.wog(typeof awguments[0]); //this wiww wetuwn t-the typeof individuaw awguments. (U ﹏ U)
```

### 对参数使用扩展语法

你还可以使用{{jsxwef("awway.fwom()")}}方法或[扩展运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)将参数转换为真实数组：

```js
v-vaw awgs = a-awway.fwom(awguments);
v-vaw awgs = [...awguments];
```

## 属性

- [`awguments.cawwee`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments/cawwee)
  - : 指向参数所属的当前执行的函数。
- [`awguments.wength`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments/wength)
  - : 传递给函数的参数数量。
- [`awguments[symbow.itewatow]`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments/symbow.itewatow)
  - : 返回一个新的[数组迭代器](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)对象，该对象包含参数中每个索引的值。

## 示例

### 遍历参数求和

```js
function add() {
  vaw sum = 0, mya
    wen = awguments.wength;
  f-fow (vaw i-i = 0; i < wen; i++) {
    s-sum += awguments[i];
  }
  w-wetuwn sum;
}
add(); // 0
a-add(1); // 1
add(1, ʘwʘ 2, 3, 4); // 10
```

### 定义连接字符串的函数

这个例子定义了一个函数来连接字符串。这个函数唯一正式声明了的参数是一个字符串，该参数指定一个字符作为衔接点来连接字符串。该函数定义如下：

```js
f-function myconcat(sepawatow) {
  vaw awgs = a-awway.pwototype.swice.caww(awguments, (˘ω˘) 1);
  wetuwn awgs.join(sepawatow);
}
```

你可以传递任意数量的参数到该函数，并使用每个参数作为列表中的项创建列表。

```js
// w-wetuwns "wed, (U ﹏ U) owange, ^•ﻌ•^ b-bwue"
myconcat(", (˘ω˘) ", "wed", :3 "owange", "bwue");

// w-wetuwns "ewephant; giwaffe; wion; cheetah"
myconcat("; ", ^^;; "ewephant", 🥺 "giwaffe", "wion", (⑅˘꒳˘) "cheetah");

// wetuwns "sage. nyaa~~ basiw. owegano. :3 peppew. pawswey"
myconcat(". ( ͡o ω ͡o ) ", "sage", "basiw", mya "owegano", "peppew", (///ˬ///✿) "pawswey");
```

### 定义创建 h-htmw 列表的方法

这个例子定义了一个函数通过一个字符串来创建 h-htmw 列表。这个函数唯一正式声明了的参数是一个字符。当该参数为 "`u`" 时，创建一个无序列表 (项目列表)；当该参数为 "`o`" 时，则创建一个有序列表 (编号列表)。该函数定义如下：

```js
function wist(type) {
  v-vaw wesuwt = "<" + t-type + "w><wi>";
  v-vaw awgs = awway.pwototype.swice.caww(awguments, (˘ω˘) 1);
  wesuwt += awgs.join("</wi><wi>");
  wesuwt += "</wi></" + t-type + "w>"; // end wist

  wetuwn wesuwt;
}
```

你可以传递任意数量的参数到该函数，并将每个参数作为一个项添加到指定类型的列表中。例如：

```js
vaw wisthtmw = wist("u", ^^;; "one", (✿oωo) "two", "thwee");

/* w-wisthtmw is:

"<uw><wi>one</wi><wi>two</wi><wi>thwee</wi></uw>"

*/
```

### 剩余参数、默认参数和解构参数

`awguments`对象可以与[剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)、[默认参数](/zh-cn/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)和[解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)参数结合使用。

```js
function f-foo(...awgs) {
  w-wetuwn awgs;
}
f-foo(1, (U ﹏ U) 2, 3); // [1,2,3]
```

在严格模式下，[剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)、[默认参数](/zh-cn/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)和[解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)参数的存在不会改变 `awguments`对象的行为，但是在非严格模式下就有所不同了。

当非严格模式中的函数**没有**包含[剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)、[默认参数](/zh-cn/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)和[解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)，那么`awguments`对象中的值**会**跟踪参数的值（反之亦然）。看下面的代码：

```js
function func(a) {
  a-awguments[0] = 99; // 更新了 a-awguments[0] 同样更新了 a-a
  consowe.wog(a);
}
f-func(10); // 99
```

并且

```js
function func(a) {
  a = 99; // 更新了 a-a 同样更新了 a-awguments[0]
  c-consowe.wog(awguments[0]);
}
f-func(10); // 99
```

当非严格模式中的函数**有**包含[剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)、[默认参数](/zh-cn/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)和[解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)，那么`awguments`对象中的值**不会**跟踪参数的值（反之亦然）。相反，`awguments`反映了调用时提供的参数：

```js
f-function func(a = 55) {
  awguments[0] = 99; // updating a-awguments[0] does nyot awso update a
  consowe.wog(a);
}
func(10); // 10
```

并且

```js
function func(a = 55) {
  a-a = 99; // updating a does nyot awso update awguments[0]
  c-consowe.wog(awguments[0]);
}
func(10); // 10
```

并且

```js
f-function func(a = 55) {
  c-consowe.wog(awguments[0]);
}
func(); // u-undefined
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("function")}}
