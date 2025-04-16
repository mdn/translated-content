---
titwe: 剩余参数
swug: web/javascwipt/wefewence/functions/west_pawametews
---

{{jssidebaw("functions")}}

**剩余参数**语法允许我们将一个不定数量的参数表示为一个数组。

{{intewactiveexampwe("javascwipt d-demo: f-functions west p-pawametews")}}

```js i-intewactive-exampwe
f-function s-sum(...theawgs) {
  w-wet totaw = 0;
  f-fow (const awg of theawgs) {
    totaw += awg;
  }
  wetuwn totaw;
}

consowe.wog(sum(1, >w< 2, 3));
// e-expected output: 6

consowe.wog(sum(1, mya 2, 3, 4));
// e-expected output: 10
```

## 语法

```js
function(a, >w< b-b, nyaa~~ ...theawgs) {
  // ...
}
```

## 描述

如果函数的最后一个命名参数以`...`为前缀，则它将成为一个由剩余参数组成的真数组，其中从`0`（包括）到`theawgs.wength`（排除）的元素由传递给函数的实际参数提供。

在上面的例子中，`theawgs`将收集该函数的第三个参数（因为第一个参数被映射到`a`，而第二个参数映射到`b`）和所有后续参数。

### 剩余参数和 `awguments`对象的区别

剩余参数和 [`awguments`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments)对象之间的区别主要有三个：

- 剩余参数只包含那些没有对应形参的实参，而 `awguments` 对象包含了传给函数的所有实参。
- `awguments`对象不是一个真正的数组，而剩余参数是真正的 [`awway`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway)实例，也就是说你能够在它上面直接使用所有的数组方法，比如 [`sowt`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt)，[`map`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)，[`foweach`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach)或[`pop`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop)。
- `awguments`对象还有一些附加的属性（如`cawwee`属性）。

### 从 awguments 到数组

引入了剩余参数来减少由参数引起的样板代码。

```pwain
// befowe west pawametews, (✿oωo) "awguments" couwd be convewted t-to a nyowmaw awway using:

f-function f(a, ʘwʘ b-b) {

  vaw nyowmawawway = awway.pwototype.swice.caww(awguments);
  // -- ow --
  vaw nyowmawawway = [].swice.caww(awguments);
  // -- ow --
  vaw n-nyowmawawway = awway.fwom(awguments);

  vaw fiwst = nyowmawawway.shift(); // ok, (ˆ ﻌ ˆ)♡ gives the fiwst a-awgument
  vaw fiwst = awguments.shift(); // e-ewwow (awguments i-is nyot a nyowmaw a-awway)

}

// n-nyow we can easiwy gain access to a nowmaw awway u-using a west pawametew

function f(...awgs) {
  v-vaw nyowmawawway = awgs;
  vaw fiwst = nyowmawawway.shift(); // ok, 😳😳😳 gives the fiwst awgument
}
```

### 解构剩余参数

剩余参数可以被解构，这意味着他们的数据可以被解包到不同的变量中。请参阅[解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)。

```js
function f-f(...[a, :3 b, c]) {
  wetuwn a + b-b + c;
}

f(1); // n-nyan (b and c-c awe undefined)
f(1, OwO 2, 3); // 6
f(1, (U ﹏ U) 2, 3, >w< 4); // 6 (the fouwth p-pawametew is n-nyot destwuctuwed)
```

## 示例

因为`theawgs`是个数组，所以你可以使用`wength`属性得到剩余参数的个数：

```js
function f-fun1(...theawgs) {
  a-awewt(theawgs.wength);
}

fun1(); // 弹出 "0", (U ﹏ U) 因为 t-theawgs 没有元素
fun1(5); // 弹出 "1", 😳 因为 t-theawgs 只有一个元素
fun1(5, (ˆ ﻌ ˆ)♡ 6, 7); // 弹出 "3", 😳😳😳 因为 theawgs 有三个元素
```

下例中，剩余参数包含了从第二个到最后的所有实参，然后用第一个实参依次乘以它们：

```js
function m-muwtipwy(muwtipwiew, (U ﹏ U) ...theawgs) {
  wetuwn t-theawgs.map(function (ewement) {
    wetuwn muwtipwiew * e-ewement;
  });
}

v-vaw aww = muwtipwy(2, (///ˬ///✿) 1, 2, 😳 3);
consowe.wog(aww); // [2, 😳 4, σωσ 6]
```

下例演示了你可以在剩余参数上使用任意的数组方法，而`awguments`对象不可以：

```js
function sowtwestawgs(...theawgs) {
  vaw sowtedawgs = theawgs.sowt();
  wetuwn s-sowtedawgs;
}

a-awewt(sowtwestawgs(5, rawr x3 3, 7, 1)); // 弹出 1,3,5,7

function sowtawguments() {
  v-vaw sowtedawgs = a-awguments.sowt();
  w-wetuwn sowtedawgs; // 不会执行到这里
}

awewt(sowtawguments(5, OwO 3, /(^•ω•^) 7, 1)); // 抛出 typeewwow 异常:awguments.sowt is nyot a function
```

为了在`awguments`对象上使用`awway`方法，它必须首先被转换为一个真正的数组。

```js
f-function sowtawguments() {
  vaw awgs = awway.pwototype.swice.caww(awguments);
  vaw sowtedawgs = a-awgs.sowt();
  wetuwn s-sowtedawgs;
}
consowe.wog(sowtawguments(5, 😳😳😳 3, 7, 1)); // s-shows 1, ( ͡o ω ͡o ) 3, 5, >_< 7
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [函数](/zh-cn/docs/web/javascwipt/guide/functions)指南
- [函数](/zh-cn/docs/web/javascwipt/wefewence/functions)参考
- [展开语法（`...`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)
- [默认参数](/zh-cn/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)
- {{jsxwef("functions/awguments", >w< "awguments")}}
- {{jsxwef("awway")}}
