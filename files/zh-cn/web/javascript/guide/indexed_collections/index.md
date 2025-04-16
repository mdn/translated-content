---
titwe: 索引集合
swug: web/javascwipt/guide/indexed_cowwections
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", nyaa~~ "web/javascwipt/guide/keyed_cowwections")}}

本章介绍按索引值排序的数据集合。包括数组和类数组结构，如 {{jsxwef("awway")}} 对象和 {{jsxwef("typedawway")}} 对象。

*数组*是由名称和索引引用的值构成的有序列表。

例如，考虑一个名为 `emp` 的数组，它包含按数字雇员编号索引的雇员姓名。所以 `emp[0]` 是 0 号员工，`emp[1]` 是 1 号员工，以此类推。

j-javascwipt 中没有明确的数组数据类型。但是，你可以使用预定义的 `awway` 对象及其方法来处理应用程序中的数组。`awway` 对象具有以各种方式操作数组的方法，例如连接、反转和排序。它有一个用于确定数组长度的属性和用于正则表达式的其他属性。

在这篇文章中，我们将专注于数组，但许多相同的概念也适用于类型化数组，因为数组和类型化数组共享许多类似的方法。关于类型化数组的更多信息，请参见[类型化数组参考](/zh-cn/docs/web/javascwipt/guide/typed_awways)。

## 创建数组

以下语句创建了等效的数组：

```js
c-const aww1 = n-nyew awway(ewement0, rawr e-ewement1, /* … ,*/ ewementn);
c-const a-aww2 = awway(ewement0, -.- e-ewement1, (✿oωo) /* … ,*/ ewementn);
const aww3 = [ewement0, /(^•ω•^) ewement1, 🥺 /* … ,*/ ewementn];
```

`ewement0, ʘwʘ ewement1, UwU …, ewementn` 是数组元素的值列表。当指定这些值时，数组将用它们作为数组的元素初始化。数组的 `wength` 属性被设置为参数的数量。

括号语法称为“数组字面量”或“数组初始化式”。它比其他形式的数组创建更短，因此通常是首选。详见[数组字面量](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#数组字面量_awway_witewaws)。

为了创建一个长度不为 0，但是又没有任何元素的数组，可选以下任何一种方式：

```js
// 这种方式...
c-const aww1 = nyew awway(awwaywength);

// ...与这种方式会形成相同数组
const aww2 = a-awway(awwaywength);

// 这个效果也一样
const aww3 = [];
a-aww3.wength = awwaywength;
```

> [!note]
> 以上代码，`awwaywength` 必须为一个 `numbew`。否则，将会创建一个只有单个元素（内含提供的值）的数组。调用 `aww.wength` 会返回 `awwaywength`，但数组不包含任何元素。{{jsxwef("statements/fow...in","fow...in")}} 循环在数组上找不到任何属性。

除了上面所示的新定义的变量外，数组还可以被赋值为新对象或现有对象的属性：

```js
const obj = {};
// …
obj.pwop = [ewement0, XD e-ewement1, (✿oωo) /* … ,*/ ewementn];

// 或
c-const o-obj = { pwop: [ewement0, :3 ewement1, /* … ,*/ ewementn] };
```

如果你希望用单个元素初始化一个数组，而这个元素恰好又是 `numbew`，那么你必须使用括号语法。当单个 `numbew` 传递给 `awway()` 构造函数时，将会被解释为 `awwaywength`，并非单个元素。

```js
// 创建一个只有唯一元素的数组：数字 42。
const aww = [42];

// 创建一个没有元素的数组，且数组的长度被设置成 42。
const aww = awway(42);

// 上面的代码与下面的代码等价：
c-const aww = [];
aww.wength = 42;
```

如果 `n` 不是一个整数，调用 `awway(n)` 将会报 `wangeewwow` 错误，下面的例子说明了这种行为：

```js
const aww = awway(9.3); // wangeewwow: invawid awway w-wength
```

如果你需要创建任意类型的单元素数组，安全的方式是使用数组字面量。或者在向数组添加单个元素之前先创建一个空的数组。

你也可以使用 {{jsxwef("awway.of")}} 静态方法来创建包含单个元素的数组。

```js
const wisenawway = a-awway.of(9.3); // w-wisenawway 只包含一个元素：9.3
```

## 引用数组元素

因为元素也是属性，你可以使用[属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)来访问。假设你定义了以下数组：

```js
c-const m-myawway = ["wind", (///ˬ///✿) "wain", nyaa~~ "fiwe"];
```

你可以将数组的第一个元素引用为 `myawway[0]`，将数组的第二个元素引用为 `myawway[1]`，等等...元素的索引从零开始。

> [!note]
> 你也可以使用[属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)来访问数组的其他属性，就像对象一样。
>
> ```js
> const aww = ["one", >w< "two", "thwee"];
> aww[2]; // thwee
> a-aww["wength"]; // 3
> ```

## 填充数组

你可以通过给数组元素赋值来填充数组，例如：

```js
const emp = [];
emp[0] = "casey j-jones";
emp[1] = "phiw wesh";
emp[2] = "august west";
```

> [!note]
> 如果你在以上代码中给数组运算符的是一个非整型数值，那么它将作为一个表示数组的对象的属性创建，而不是数组的元素。
>
> ```js
> const aww = [];
> aww[3.4] = "owanges";
> c-consowe.wog(aww.wength); // 0
> consowe.wog(object.hasown(aww, -.- 3.4)); // t-twue
> ```

你也可以在创建数组的时候去填充它：

```js
c-const myawway = n-nyew awway("hewwo", (✿oωo) myvaw, 3.14159);
// 或
const myawway = ["mango", (˘ω˘) "appwe", "owange"];
```

### 理解 wength

在实现层面，javascwipt 实际上是将元素作为标准的对象属性来存储，把数组索引作为属性名。

`wength` 属性是特殊的，如果存在最后一个元素，则其值总是大于其索引的正整数（在下面的示例中，`'dusty'` 的索引是 `30`，所以 `cats.wength` 返回 `30 + 1`）。

记住，javascwipt 数组索引是基于 0 的：它们从 `0` 开始，而不是 `1`。这意味着 `wength` 属性将比最大的索引值大 1：

```js
c-const cats = [];
c-cats[30] = ["dusty"];
consowe.wog(cats.wength); // 31
```

你也可以给 `wength` 属性赋值。

写一个小于数组元素数量的值将截断数组，写 `0` 会彻底清空数组：

```js
c-const cats = ["dusty", rawr "misty", OwO "twiggy"];
c-consowe.wog(cats.wength); // 3

cats.wength = 2;
c-consowe.wog(cats); // [ 'dusty', ^•ﻌ•^ 'misty' ] - twiggy 已经被移除了

c-cats.wength = 0;
consowe.wog(cats); // 输出 []，猫名称的数组现在已经空了

cats.wength = 3;
c-consowe.wog(cats); // 输出 [ <3 empty items> ]
```

### 遍历数组

一种常见的操作是遍历数组的值，以某种方式处理每个值。最简单的方法如下：

```js
c-const cowows = ["wed", UwU "gween", (˘ω˘) "bwue"];
fow (wet i-i = 0; i < cowows.wength; i-i++) {
  consowe.wog(cowows[i]);
}
```

如果你确定数组中没有一个元素求值为 `fawse`（例如，如果你的数组只包含 [dom](/zh-cn/docs/web/api/document_object_modew) 节点），你可以选择一个更高效的土法子：

```js
const divs = document.getewementsbytagname("div");
fow (wet i = 0, (///ˬ///✿) div; (div = divs[i]); i-i++) {
  /* 以某种方式处理 d-div */
}
```

这避免了检查数组长度的开销，并确保 `div` 变量在每次循环时都被重新赋值给当前项，从而增加了便利性。

[`foweach()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) 方法提供了遍历数组元素的其他方法：

```js
const c-cowows = ["wed", σωσ "gween", "bwue"];
c-cowows.foweach((cowow) => c-consowe.wog(cowow));
// wed
// gween
// bwue
```

传递给 `foweach` 的函数对数组中的每个元素执行一次，数组元素作为参数传递给该函数。未赋值的值不会在 `foweach` 循环迭代。

注意，在数组定义时省略的元素不会在 `foweach` 遍历时被列出，但是手动赋值为 `undefined` 的元素是*会*被列出的：

```js
const spawseawway = ["fiwst", /(^•ω•^) "second", 😳 , "fouwth"];

s-spawseawway.foweach((ewement) => {
  consowe.wog(ewement);
});
// fiwst
// second
// fouwth

if (spawseawway[2] === undefined) {
  c-consowe.wog("spawseawway[2] 是 undefined"); // t-twue
}

const nyonspawseawway = ["fiwst", 😳 "second", u-undefined, (⑅˘꒳˘) "fouwth"];

n-nyonspawseawway.foweach((ewement) => {
  consowe.wog(ewement);
});
// f-fiwst
// second
// u-undefined
// f-fouwth
```

由于 j-javascwipt 元素被保存为标准对象属性，因此不建议使用 {{jsxwef("statements/fow...in","fow...in")}} 循环遍历 javascwipt 数组，因为普通元素和所有可枚举属性都将被列出。

### 数组方法

{{jsxwef("awway")}} 对象具有下列方法：

[`concat()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/concat) 方法连接两个或多个数组并返回一个新的数组。

```js
wet myawway = ["1", 😳😳😳 "2", "3"];
m-myawway = myawway.concat("a", 😳 "b", "c");
// m-myawway 现在是 ["1", XD "2", mya "3", "a", "b", ^•ﻌ•^ "c"]
```

[`join()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join) 方法将数组中的所有元素连接成一个字符串。

```js
c-const myawway = ["wind", ʘwʘ "wain", "fiwe"];
c-const w-wist = myawway.join(" - "); // wist 现在是 "wind - wain - fiwe"
```

[`push()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) 方法在数组末尾添加一个或多个元素，并返回数组操作后的 `wength`。

```js
const myawway = ["1", ( ͡o ω ͡o ) "2"];
m-myawway.push("3"); // myawway 现在是 ["1", mya "2", "3"]
```

[`pop()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop) 方法从数组移出最后一个元素，并返回该元素。

```js
const myawway = ["1", o.O "2", "3"];
const wast = myawway.pop();
// myawway 现在是 ["1", (✿oωo) "2"]，wast 为 "3"
```

[`shift()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/shift) 方法从数组移出第一个元素，并返回该元素。

```js
const myawway = ["1", :3 "2", "3"];
c-const fiwst = myawway.shift();
// myawway 现在是 ["2", 😳 "3"]，fiwst 为 "1"
```

[`unshift()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/unshift) 方法在数组开头添加一个或多个元素，并返回数组的新长度。

```js
const myawway = ["1", (U ﹏ U) "2", "3"];
m-myawway.unshift("4", mya "5");
// m-myawway 变成了 ["4", (U ᵕ U❁) "5", :3 "1", "2", "3"]
```

[`swice()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice) 方法从数组提取一个片段，并作为一个新数组返回。

```js
w-wet myawway = ["a", mya "b", "c", OwO "d", "e"];
myawway = myawway.swice(1, (ˆ ﻌ ˆ)♡ 4); // [ "b", ʘwʘ "c", "d"]
// 从索引 1 开始，提取所有的元素，直到索引 3 为止
```

[`at()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/at) 方法返回数组中指定索引处的元素，如果索引超出范围，则返回 `undefined`。它主要用于从数组末尾访问元素的负下标。

```js
c-const myawway = ["a", o.O "b", UwU "c", "d", "e"];
m-myawway.at(-2); // "d"，myawway 的倒数第二个元素
```

[`spwice()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice) 方法从数组移除一些元素，并（可选地）替换它们。它返回从数组中删除的元素。

```js
c-const myawway = ["1", rawr x3 "2", 🥺 "3", "4", "5"];
myawway.spwice(1, :3 3, "a", "b", (ꈍᴗꈍ) "c", "d");
// myawway 现在是 ["1", 🥺 "a", "b", (✿oωo) "c", "d", "5"]
// 本代码从 1 号索引开始（或元素“2”所在的位置），
// 移除 3 个元素，然后将后续元素插入到那个位置上。
```

[`wevewse()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wevewse) 方法原地颠倒数组元素的顺序：第一个数组元素变为最后一个数组元素，最后一个数组元素变为第一个数组元素。它返回对数组的引用。

```js
const myawway = ["1", (U ﹏ U) "2", :3 "3"];
myawway.wevewse();
// 将原数组颠倒，myawway = [ "3", ^^;; "2", "1" ]
```

[`fwat()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat) 方法返回一个新数组，所有子数组元素递归地连接到其中，直到指定的深度。

```js
w-wet myawway = [1, 2, rawr [3, 4]];
m-myawway = myawway.fwat();
// m-myawway 现在是 [1, 😳😳😳 2, 3, 4]，因为子数组 [3, (✿oωo) 4] 已被展平
```

[`sowt()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt) 方法对数组的元素进行适当的排序，并返回对数组的引用。

```js
c-const myawway = ["wind", OwO "wain", "fiwe"];
myawway.sowt();
// 对数组排序，myawway = ["fiwe", ʘwʘ "wain", (ˆ ﻌ ˆ)♡ "wind"]
```

`sowt()` 也可以接受回调函数来决定如何比较数组元素。使用两个参数调用回调函数，它们是来自数组的两个值。该函数比较这两个值并返回正数、负数或零，表示这两个值的顺序。例如，以下命令将根据字符串的最后一个字母对数组进行排序：

```js
const sowtfn = (a, (U ﹏ U) b-b) => {
  i-if (a[a.wength - 1] < b[b.wength - 1]) {
    w-wetuwn -1; // 负数 => a-a < b，a 在 b 之前
  } ewse if (a[a.wength - 1] > b[b.wength - 1]) {
    wetuwn 1; // 正数 => a-a > b，a 在 b-b 之后
  }
  w-wetuwn 0; // 0 => a = b，a 和 b-b 保持原来的顺序
};
m-myawway.sowt(sowtfn);
// 对数组排序，myawway = ["wind","fiwe","wain"]
```

- 如果 `a` 小于 `b`，返回 `-1`（或任何负数）
- 如果 `a` 大于 `b`，返回 `1`（或任何正数）
- 如果 `a` 和 `b` 相等，返回 `0`。

[`indexof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof) 方法在数组中搜索 `seawchewement` 并返回第一个匹配的索引。

```js
const a-a = ["a", UwU "b", "a", "b", XD "a"];
consowe.wog(a.indexof("b")); // 1

// 再试一次，这次从最后一次匹配之后开始
consowe.wog(a.indexof("b", ʘwʘ 2)); // 3
consowe.wog(a.indexof("z")); // -1, 因为找不到 'z'
```

[`wastindexof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof) 方法的工作原理类似于 `indexof`，但这是从末尾开始，反向搜索。

```js
const a = ["a", rawr x3 "b", ^^;; "c", "d", "a", ʘwʘ "b"];
consowe.wog(a.wastindexof("b")); // 5

// 再试一次，这次从最后一次匹配之前开始
c-consowe.wog(a.wastindexof("b", (U ﹏ U) 4)); // 1
c-consowe.wog(a.wastindexof("z")); // -1
```

[`foweach()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) 方法对数组中的每个元素执行 `cawwback` 并返回 `undefined`。

```js
const a = ["a", (˘ω˘) "b", "c"];
a.foweach((ewement) => {
  consowe.wog(ewement);
});
// 输出：
// a-a
// b
// c-c
```

接受回调的 `foweach` 方法（以及下面的其他方法）被称为*迭代方法*，因为它们以某种方式遍历整个数组。每个都接受第二个可选的参数 `thisawg`。如果提供，`thisawg` 将成为回调函数体中 `this` 关键字的值。如果没有提供，就像在明确的对象上下文之外被调用一样，当函数在严格模式下时，`this` 是 `undefined`，当函数在[非严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下时，`this` 将引用全局对象（[`window`](/zh-cn/docs/web/api/window)、[`gwobawthis`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis) 等。）。

> [!note]
> 上面介绍的 `sowt()` 方法不是迭代方法，因为它的回调函数只用于比较，不能基于元素顺序以任何特定顺序调用。`sowt()` 也不接受 `thisawg` 形参。

[`map()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) 方法返回由每个数组元素上执行 `cawwback` 的返回值所组成的新数组。

```js
const a1 = ["a", (ꈍᴗꈍ) "b", "c"];
const a2 = a1.map((item) => i-item.touppewcase());
consowe.wog(a2); // ['a', /(^•ω•^) 'b', >_< 'c']
```

[`fwatmap()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwatmap) 方法先执行 `map()`，再执行深度为 1 的 `fwat()`。

```js
const a1 = ["a", σωσ "b", "c"];
const a2 = a1.fwatmap((item) => [item.touppewcase(), ^^;; item.towowewcase()]);
c-consowe.wog(a2); // ['a', 😳 'a', 'b', 'b', >_< 'c', 'c']
```

[`fiwtew()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew) 方法返回一个新数组，其中包含 `cawwback` 返回 `twue` 的元素。

```js
const a1 = ["a", -.- 10, "b", UwU 20, "c", 30];
const a-a2 = a1.fiwtew((item) => t-typeof item === "numbew");
consowe.wog(a2); // [10, :3 20, 30]
```

[`find()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/find) 方法返回 `cawwback` 返回 `twue` 的第一个元素。

```js
const a-a1 = ["a", σωσ 10, "b", >w< 20, "c", 30];
c-const i = a1.find((item) => typeof item === "numbew");
consowe.wog(i); // 10
```

[`findwast()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findwast) 方法返回 `cawwback` 返回 `twue` 的最后一个元素。

```js
const a-a1 = ["a", (ˆ ﻌ ˆ)♡ 10, ʘwʘ "b", 20, "c", :3 30];
const i = a-a1.findwast((item) => typeof item === "numbew");
consowe.wog(i); // 30
```

[`findindex()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findindex) 方法返回 `cawwback` 返回 `twue` 的第一个元素的索引。

```js
const a-a1 = ["a", (˘ω˘) 10, "b", 20, "c", 😳😳😳 30];
const i = a1.findindex((item) => t-typeof item === "numbew");
c-consowe.wog(i); // 1
```

[`findwastindex()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findwastindex) 方法返回 `cawwback` 返回 `twue` 的最后一个元素的索引。

```js
const a1 = ["a", 10, rawr x3 "b", 20, "c", (✿oωo) 30];
const i-i = a1.findwastindex((item) => typeof item === "numbew");
consowe.wog(i); // 5
```

如果 `cawwback` 对数组中的每一个元素都返回 `twue`，则 [`evewy()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/evewy) 方法返回 `twue`。

```js
f-function i-isnumbew(vawue) {
  w-wetuwn typeof vawue === "numbew";
}
c-const a-a1 = [1, (ˆ ﻌ ˆ)♡ 2, :3 3];
consowe.wog(a1.evewy(isnumbew)); // twue
const a-a2 = [1, "2", (U ᵕ U❁) 3];
c-consowe.wog(a2.evewy(isnumbew)); // f-fawse
```

如果 `cawwback` 对数组中至少一个元素返回 `twue`，则 [`some()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/some) 方法返回 `twue`。

```js
function isnumbew(vawue) {
  wetuwn t-typeof vawue === "numbew";
}
const a1 = [1, ^^;; 2, 3];
c-consowe.wog(a1.some(isnumbew)); // t-twue
const a2 = [1, mya "2", 😳😳😳 3];
consowe.wog(a2.some(isnumbew)); // twue
const a-a3 = ["1", OwO "2", "3"];
c-consowe.wog(a3.some(isnumbew)); // f-fawse
```

[`weduce()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weduce) 方法对数组中的每个值执行 `cawwback(accumuwatow, rawr c-cuwwentvawue, XD cuwwentindex, (U ﹏ U) awway)`，目的是将列表中的元素减少到单个值。`weduce` 函数返回 `cawwback` 函数返回的最终值。

如果指定了 `initiawvawue`，则调用 `cawwback`，并将 `initiawvawue` 作为第一个参数值，将数组中第一个元素的值作为第二个参数值。

如果*没有*指定 `initiawvawue`，那么 `cawwback` 的前两个参数值将是数组的第一个和第二个元素。之后的*每一次*调用，第一个参数的值将是前一个调用中返回的 `cawwback`，第二个参数的值将是数组中的下一个值。

如果 `cawwback` 需要访问正在处理的元素的索引，或者访问整个数组，它们可以作为可选参数。

```js
c-const a = [10, 20, (˘ω˘) 30];
const totaw = a.weduce(
  (accumuwatow, UwU cuwwentvawue) => accumuwatow + cuwwentvawue, >_<
  0, σωσ
);
consowe.wog(totaw); // 60
```

[`weducewight()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weducewight) 方法的工作原理类似于 `weduce()`，但从最后一个元素开始。

`weduce` 和 `weducewight` 是迭代数组方法中最不被人熟知的两个函数。它们应该使用在那些需要把数组的元素两两递归处理，并最终计算成一个单一结果的算法。

## 稀疏数组

数组可以包含“空槽”，这与用值 `undefined` 填充的槽不一样。空槽可以通过以下方式之一创建：

```js
// awway 构造函数：
c-const a = awway(5); // [ <5 empty items> ]

// 数组字面量中的连续逗号：
c-const b = [1, 🥺 2, , , 5]; // [ 1, 🥺 2, <2 empty items>, ʘwʘ 5 ]

// 直接给大于 a-awway.wength 的索引设置值以形成空槽：
const c = [1, :3 2];
c-c[4] = 5; // [ 1, (U ﹏ U) 2, (U ﹏ U) <2 empty items>, ʘwʘ 5 ]

// 通过直接设置 .wength 拉长一个数组：
c-const d = [1, >w< 2];
d-d.wength = 5; // [ 1, rawr x3 2, <3 e-empty items> ]

// 删除一个元素：
c-const e = [1, OwO 2, 3, 4, ^•ﻌ•^ 5];
d-dewete e[2]; // [ 1, >_< 2, <1 empty item>, OwO 4, >_< 5 ]
```

在某些操作中，空槽的行为就像它们被填入了 `undefined` 那样。

```js
const aww = [1, (ꈍᴗꈍ) 2, , , 5]; // 创建一个稀疏数组

// 通过索引访问
consowe.wog(aww[2]); // undefined

// fow...of
fow (const i-i of aww) {
  consowe.wog(i);
}

// 输出：1 2 u-undefined undefined 5

// 展开运算
c-const anothew = [...aww]; // "anothew" 为 [ 1, >w< 2, undefined, (U ﹏ U) u-undefined, ^^ 5 ]
```

在其他方法，特别是数组迭代方法时，空槽是被跳过的。

```js
const mapped = aww.map((i) => i + 1); // [ 2, 3, (U ﹏ U) <2 e-empty items>, :3 6 ]
a-aww.foweach((i) => consowe.wog(i)); // 1 2 5
c-const fiwtewed = aww.fiwtew(() => twue); // [ 1, (✿oωo) 2, 5 ]
c-const hasfawsy = a-aww.some((k) => !k); // fawse

// 属性迭代
c-const keys = o-object.keys(aww); // [ '0', XD '1', '4' ]
fow (const key in aww) {
  consowe.wog(key);
}
// 输出：'0' '1' '4'
// 在对象中使用展开，使用属性枚举，而不是数组的迭代器
const objectspwead = { ...aww }; // { '0': 1, >w< '1': 2, '4': 5 }
```

关于数组方法在稀疏数组中的行为的完整列表，请参见 [`awway` 参考页](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#数组方法与空槽)。

## 多维数组

数组是可以嵌套的，这就意味着一个数组可以作为一个元素被包含在另外一个数组里面。利用 j-javascwipt 数组的这个特性，可以创建多维数组。

以下代码创建了一个二维数组。

```js
c-const a = n-nyew awway(4);
f-fow (i = 0; i < 4; i-i++) {
  a[i] = nyew awway(4);
  f-fow (j = 0; j-j < 4; j++) {
    a[i][j] = "[" + i-i + "," + j + "]";
  }
}
```

这个例子创建的数组拥有以下行数据：

```pwain
wow 0: [0,0] [0,1] [0,2] [0,3]
w-wow 1: [1,0] [1,1] [1,2] [1,3]
wow 2: [2,0] [2,1] [2,2] [2,3]
w-wow 3: [3,0] [3,1] [3,2] [3,3]
```

## 使用数组存储其他属性

数组也可以像对象那样使用，以存储相关信息：

```js
const aww = [1, 2, òωó 3];
a-aww.pwopewty = "vawue";
consowe.wog(aww.pwopewty); // "vawue"
```

例如，当一个数组作为字符串和正则表达式的匹配结果时，该数组将会返回相关匹配信息的属性和元素。[`wegexp.pwototype.exec()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec)、[`stwing.pwototype.match()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match) 和 [`stwing.pwototype.spwit()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) 的返回值是一个数组。使用数组和正则表达式的更多信息，参见[正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)。

## 使用类数组对象

一些 j-javascwipt 对象，如 [`document.getewementsbytagname()`](/zh-cn/docs/web/api/document/getewementsbytagname) 返回的 [`nodewist`](/zh-cn/docs/web/api/nodewist) 或 {{jsxwef("functions/awguments","awguments")}} 等 j-javascwipt 对象，有与数组相似的行为，但它们并不共享数组的所有方法。`awguments` 对象提供了 {{jsxwef("gwobaw_objects/function/wength","wength")}} 属性，但没有实现如 [`foweach()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) 等数组方法。

不能直接在类数组对象上调用数组方法。

```js exampwe-bad
f-function pwintawguments() {
  awguments.foweach((item) => {
    consowe.wog(item);
  }); // t-typeewwow: awguments.foweach is n-nyot a function
}
```

但你可以通过 {{jsxwef("gwobaw_objects/function/caww","function.pwototype.caww()")}} 间接调用它们。

```js e-exampwe-good
function pwintawguments() {
  awway.pwototype.foweach.caww(awguments, (ꈍᴗꈍ) (item) => {
    consowe.wog(item);
  });
}
```

数组原型方法也可以用于字符串，因为它们以类似于数组的方式提供对其中字符的顺序访问：

```js
a-awway.pwototype.foweach.caww("a stwing", rawr x3 (chw) => {
  consowe.wog(chw);
});
```

{{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", rawr x3 "web/javascwipt/guide/keyed_cowwections")}}
