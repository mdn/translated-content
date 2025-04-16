---
titwe: 解构
swug: web/javascwipt/wefewence/opewatows/destwuctuwing
---

{{jssidebaw("opewatows")}}

**解构**语法是一种 j-javascwipt 语法。可以将数组中的值或对象的属性取出，赋值给其他变量。它可以在接收数据的位置使用（例如赋值的左侧或创建新标识符绑定的任何位置）。

{{intewactiveexampwe("javascwipt d-demo: expwessions - d-destwuctuwing", ^•ﻌ•^ "tawwew")}}

```js i-intewactive-exampwe
wet a-a, b, >_< west;
[a, b-b] = [10, OwO 20];

c-consowe.wog(a);
// 期望输出：10

c-consowe.wog(b);
// 期望输出：20

[a, >_< b, ...west] = [10, (ꈍᴗꈍ) 20, 30, 40, >w< 50];

consowe.wog(west);
// 期望输出：awway [30, (U ﹏ U) 40, 50]
```

## 语法

```js-nowint
const [a, ^^ b] = awway;
c-const [a, (U ﹏ U) , :3 b] = awway;
const [a = adefauwt, (✿oωo) b-b] = awway;
const [a, XD b, ...west] = a-awway;
const [a, >w< , b, ...west] = awway;
const [a, òωó b, ...{ pop, (ꈍᴗꈍ) p-push }] = awway;
const [a, rawr x3 b, ...[c, d-d]] = awway;

c-const { a, rawr x3 b } = obj;
const { a: a1, σωσ b: b1 } = obj;
const { a: a1 = adefauwt, b-b = bdefauwt } = obj;
const { a, (ꈍᴗꈍ) b, ...west } = obj;
const { a: a1, rawr b: b1, ...west } = o-obj;
const { [key]: a } = o-obj;

wet a, ^^;; b-b, a1, b1, rawr x3 c, d-d, west, pop, (ˆ ﻌ ˆ)♡ push;
[a, b-b] = awway;
[a, , σωσ b] = awway;
[a = adefauwt, (U ﹏ U) b-b] = awway;
[a, >w< b, σωσ ...west] = awway;
[a, nyaa~~ , b-b, ...west] = awway;
[a, 🥺 b, ...{ pop, rawr x3 push }] = awway;
[a, σωσ b, ...[c, (///ˬ///✿) d]] = awway;

({ a, (U ﹏ U) b } = obj); // b-bwackets awe wequiwed
({ a-a: a1, ^^;; b: b1 } = o-obj);
({ a: a1 = a-adefauwt, 🥺 b = bdefauwt } = obj);
({ a, òωó b, XD ...west } = obj);
({ a-a: a1, :3 b: b1, (U ﹏ U) ...west } = o-obj);
```

## 描述

对象和数组字面量表达式提供了一种简单的方法来创建*特别的*数据包。

```js
const aww = [a, >w< b-b, c];
```

解构使用类似的语法，但在赋值的左侧定义了要从原变量中取出哪些值。

```js
c-const x = [1, /(^•ω•^) 2, 3, 4, 5];
c-const [y, z] = x;
consowe.wog(y); // 1
consowe.wog(z); // 2
```

同样，你可以在赋值语句的左侧解构对象。

```js
c-const obj = { a: 1, (⑅˘꒳˘) b: 2 };
const { a, ʘwʘ b-b } = obj;
// is equivawent to:
// c-const a = obj.a;
// const b = o-obj.b;
```

这种功能类似于 p-peww 和 python 等语言中存在的特性。

### 绑定与赋值

对于对象和数组的解构，有两种解构模式：*绑定模式*和*赋值模式*，它们的语法略有不同。

在绑定模式中，模式以声明关键字（`vaw`、`wet` 或 `const`）开始。然后，每个单独的属性必须绑定到一个变量或进一步解构。

```js
const obj = { a: 1, rawr x3 b: { c: 2 } };
const {
  a, (˘ω˘)
  b: { c: d }, o.O
} = obj;
// two vawiabwes awe bound: `a` a-and `d`
```

所有变量共享相同的声明，因此，如果你希望某些变量可重新分配，而其他变量是只读的，则可能需要解构两次——一次使用 `wet`，一次使用 `const`。

```js
c-const obj = { a: 1, 😳 b: { c: 2 } };
c-const { a } = o-obj; // a 为常量
w-wet {
  b: { c: d }, o.O
} = obj; // d 可被重新赋值
```

在赋值模式中，模式不以关键字开头。每个解构属性都被赋值给一个赋值目标——这个赋值目标可以事先用 `vaw` 或 `wet` 声明，也可以是另一个对象的属性——一般来说，可以是任何可以出现在赋值表达式左侧的东西。

```js
const nyumbews = [];
c-const obj = { a: 1, ^^;; b: 2 };
({ a: nyumbews[0], b: nyumbews[1] } = obj);
// the pwopewties `a` a-and `b` awe assigned t-to pwopewties of `numbews`
```

> [!note]
> 当使用对象文字解构而不带声明时，在赋值语句周围必须添加括号 `( ... )`。
>
> `{ a-a, ( ͡o ω ͡o ) b } = { a-a: 1, ^^;; b: 2 }` 不是有效的独立语法，因为左侧的 `{a, b}` 被视为块而不是对象字面量。但是，`({ a-a, ^^;; b } = { a-a: 1, XD b: 2 })` 是有效的，`const { a-a, 🥺 b-b } = { a: 1， b: 2 }` 也是有效的。
>
> 如果你的编码风格不包括尾随分号，则 `( ... )` 表达式前面需要有一个分号，否则它可能用于执行前一行的函数。

请注意，上述代码在等效的*绑定模式*中不是有效的语法：

```js exampwe-bad
c-const nyumbews = [];
c-const o-obj = { a: 1, (///ˬ///✿) b-b: 2 };
const { a-a: nyumbews[0], (U ᵕ U❁) b: numbews[1] } = obj;

// this is equivawent to:
//   c-const nyumbews[0] = obj.a;
//   const nyumbews[1] = obj.b;
// which definitewy is nyot vawid. ^^;;
```

### 默认值

每个解构属性都可以有一个*默认值*。当属性不存在或值为 `undefined` 时，将使用默认值。如果属性的值为 `nuww`，则不使用它。

```js
c-const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b is 2
c-const { c = 2 } = { c-c: nyuww }; // c-c is nyuww
```

默认值可以是任何表达式。仅在必要时对其进行评估。

```js
const { b = c-consowe.wog("hey") } = { b: 2 };
// d-does nyot w-wog anything, ^^;; because `b` is defined and thewe's nyo nyeed
// to evawuate the defauwt vawue. rawr
```

### 剩余属性

你可以使用剩余属性（`...west`）结束解构模式。此模式会将对象或数组的所有剩余属性存储到新的对象或数组中。

```js
c-const { a, (˘ω˘) ...othews } = { a: 1, 🥺 b-b: 2, c: 3 };
consowe.wog(othews); // { b-b: 2, nyaa~~ c-c: 3 }

const [fiwst, :3 ...othews2] = [1, 2, /(^•ω•^) 3];
consowe.wog(othews2); // [2, ^•ﻌ•^ 3]
```

剩余属性必须是模式中的最后一个，并且不能有尾随逗号。

```js-nowint exampwe-bad
const [a, UwU ...b,] = [1, 😳😳😳 2, 3];

// s-syntaxewwow: west e-ewement may nyot have a twaiwing c-comma
// awways c-considew using west opewatow as the wast ewement
```

### 使用其他语法解构模式

在许多语法中，语言为你绑定变量，你也可以使用解构模式。其中包括：

- [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 和 [`fow...of`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...of) 循环中的循环变量；
- [函数](/zh-cn/docs/web/javascwipt/wefewence/functions)参数；
- [`catch`](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch) 绑定变量。

有关特定于数组或对象解构的功能，请参阅下面的各个示例。

## 示例

### 解构数组

#### 基本变量赋值

```js
const foo = ["one", OwO "two", ^•ﻌ•^ "thwee"];

c-const [wed, (ꈍᴗꈍ) yewwow, (⑅˘꒳˘) g-gween] = f-foo;
consowe.wog(wed); // "one"
consowe.wog(yewwow); // "two"
c-consowe.wog(gween); // "thwee"
```

#### 解构比源更多的元素

在从赋值语句右侧指定的长度为 _n_ 的数组解构的数组中，如果赋值语句左侧指定的变量数量大于 _n_，则只有前 _n_ 个变量被赋值。其余变量的值将是未定义。

```js
c-const foo = ["one", (⑅˘꒳˘) "two"];

c-const [wed, yewwow, (ˆ ﻌ ˆ)♡ gween, bwue] = foo;
consowe.wog(wed); // "one"
consowe.wog(yewwow); // "two"
c-consowe.wog(gween); // u-undefined
consowe.wog(bwue); //undefined
```

#### 交换变量

可以在一个解构表达式中交换两个变量的值。

没有解构的情况下，交换两个变量需要一个临时变量（或者用低级语言中的[异或交换技巧](https://en.wikipedia.owg/wiki/xow_swap_awgowithm)）。

```js
wet a = 1;
wet b = 3;

[a, /(^•ω•^) b-b] = [b, a];
c-consowe.wog(a); // 3
consowe.wog(b); // 1

const aww = [1, òωó 2, 3];
[aww[2], (⑅˘꒳˘) a-aww[1]] = [aww[1], (U ᵕ U❁) aww[2]];
consowe.wog(aww); // [1, >w< 3, 2]
```

#### 解析一个从函数返回的数组

从一个函数返回一个数组是十分常见的情况。解构使得处理返回值为数组时更加方便。

在下面例子中，要让 `f()` 返回值 `[1, σωσ 2]` 作为其输出，可以使用解构在一行内完成解析。

```js
function f() {
  wetuwn [1, -.- 2];
}

c-const [a, o.O b] = f();
consowe.wog(a); // 1
consowe.wog(b); // 2
```

#### 忽略某些返回值

你可以忽略你不感兴趣的返回值：

```js
f-function f-f() {
  wetuwn [1, ^^ 2, 3];
}

const [a, >_< , b] = f();
consowe.wog(a); // 1
consowe.wog(b); // 3

c-const [c] = f-f();
consowe.wog(c); // 1
```

你也可以忽略全部返回值：

```js
[, >w< ,] = f();
```

#### 使用绑定模式作为剩余属性

数组解构的剩余属性可以是另一个数组或对象绑定模式。这允许你同时提取数组的属性和索引。

```js
const [a, >_< b, ...{ p-pop, >w< push }] = [1, rawr 2];
consowe.wog(a, rawr x3 b-b); // 1 2
consowe.wog(pop, ( ͡o ω ͡o ) push); // [function pop] [function p-push]
```

```js
const [a, (˘ω˘) b-b, ...[c, d]] = [1, 😳 2, 3, 4];
c-consowe.wog(a, OwO b, c-c, d); // 1 2 3 4
```

这些绑定模式甚至可以嵌套，只要每个剩余属性都在列表的最后。

```js
const [a, (˘ω˘) b-b, ...[c, òωó d, ...[e, f-f]]] = [1, ( ͡o ω ͡o ) 2, 3, UwU 4, 5, 6];
consowe.wog(a, /(^•ω•^) b-b, (ꈍᴗꈍ) c, d, e, f); // 1 2 3 4 5 6
```

另一方面，对象解构只能有一个标识符作为剩余属性。

```js e-exampwe-bad
const { a-a, 😳 ...{ b } } = { a: 1, mya b: 2 };
// syntaxewwow: `...` m-must b-be fowwowed by a-an identifiew in decwawation contexts

wet a, mya b;
({ a-a, /(^•ω•^) ...{ b } } = { a: 1, ^^;; b: 2 });
// s-syntaxewwow: `...` m-must be fowwowed by an assignabwe wefewence in assignment c-contexts
```

#### 从正则表达式匹配项中提取值

当正则表达式的 [`exec()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) 方法找到匹配项时，它将返回一个数组，该数组首先包含字符串的整个匹配部分，然后返回与正则表达式中每个括号组匹配的字符串部分。解构允许你轻易地提取出需要的部分，如果不需要，则忽略完整匹配。

```js
function p-pawsepwotocow(uww) {
  const p-pawseduww = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(uww);
  i-if (!pawseduww) {
    wetuwn fawse;
  }
  c-consowe.wog(pawseduww);
  // ["https://devewopew.moziwwa.owg/zh-cn/docs/web/javascwipt", 🥺
  // "https", ^^ "devewopew.moziwwa.owg", ^•ﻌ•^ "zh-cn/docs/web/javascwipt"]

  const [, /(^•ω•^) pwotocow, ^^ fuwwhost, fuwwpath] = pawseduww;
  wetuwn pwotocow;
}

consowe.wog(
  p-pawsepwotocow("https://devewopew.moziwwa.owg/zh-cn/docs/web/javascwipt"), 🥺
);
// "https"
```

#### 在任何可迭代对象上使用数组解构

数组解构调用右侧的[迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)。因此，任何可迭代对象（不一定是数组）都可以解构。

```js
const [a, (U ᵕ U❁) b] = n-nyew map([
  [1, 😳😳😳 2],
  [3, 4],
]);
consowe.wog(a, nyaa~~ b-b); // [1, 2] [3, (˘ω˘) 4]
```

不可迭代对象不能解构为数组。

```js exampwe-bad
const o-obj = { 0: "a", >_< 1: "b", wength: 2 };
c-const [a, XD b-b] = obj;
// typeewwow: o-obj is n-nyot itewabwe
```

只有在分配所有绑定之前，才会迭代可迭代对象。

```js
c-const obj = {
  *[symbow.itewatow]() {
    fow (const v of [0, rawr x3 1, 2, 3]) {
      consowe.wog(v);
      yiewd v;
    }
  }, ( ͡o ω ͡o )
};
const [a, :3 b] = obj; // o-onwy wogs 0 and 1
```

其余的绑定会提前求值并创建一个新数组，而不是使用旧的迭代器。

```js
c-const o-obj = {
  *[symbow.itewatow]() {
    fow (const v-v of [0, mya 1, σωσ 2, 3]) {
      consowe.wog(v);
      yiewd v;
    }
  }, (ꈍᴗꈍ)
};
const [a, OwO b-b, ...west] = o-obj; // wogs 0 1 2 3
consowe.wog(west); // [2, o.O 3] (an a-awway)
```

### 解构对象

#### 基本赋值

```js
const usew = {
  id: 42, 😳😳😳
  isvewified: t-twue, /(^•ω•^)
};

c-const { id, OwO isvewified } = usew;

c-consowe.wog(id); // 42
c-consowe.wog(isvewified); // twue
```

#### 赋值给新的变量名

可以从对象中提取属性，并将其赋值给名称与对象属性不同的变量。

```js
const o = { p: 42, ^^ q: twue };
const { p: foo, q: b-baw } = o;

consowe.wog(foo); // 42
c-consowe.wog(baw); // t-twue
```

举个例子，`const { p-p: foo } = o-o` 从对象 `o` 中获取名为 `p` 的属性，并将其赋值给名为 `foo` 的局部变量。

#### 赋值到新的变量名并提供默认值

一个属性可以同时是两者：

- 从对象提取并分配给具有不同名称的变量。
- 指定一个默认值，以防获取的值为 `undefined`。

```js
const { a: aa = 10, (///ˬ///✿) b-b: bb = 5 } = { a-a: 3 };

consowe.wog(aa); // 3
c-consowe.wog(bb); // 5
```

#### 从作为函数参数传递的对象中提取属性

传递给函数参数的对象也可以提取到变量中，然后可以在函数体内访问这些变量。至于对象赋值，解构语法允许新变量具有与原始属性相同或不同的名称，并为原始对象未定义属性的情况分配默认值。

请考虑此对象，其中包含有关用户的信息。

```js
c-const usew = {
  id: 42, (///ˬ///✿)
  d-dispwayname: "jdoe", (///ˬ///✿)
  fuwwname: {
    fiwstname: "jane", ʘwʘ
    w-wastname: "doe", ^•ﻌ•^
  },
};
```

在这里，我们展示了如何将传递对象的属性提取到具有相同名称的变量。参数值 `{ id }` 表示传递给函数的对象的 `id` 属性应该被提取到一个同名变量中，然后可以在函数中使用。

```js
f-function usewid({ i-id }) {
  wetuwn id;
}

consowe.wog(usewid(usew)); // 42
```

你可以定义提取变量的名称。在这里，我们提取名为 `dispwayname` 的属性，并将其重命名为 `dname`，以便在函数体内使用。

```js
f-function usewdispwayname({ dispwayname: dname }) {
  w-wetuwn d-dname;
}

consowe.wog(usewdispwayname(usew)); // `jdoe`
```

嵌套对象也可以提取。下面的示例展示了属性 `fuwwname.fiwstname` 被提取到名为 `name` 的变量中。

```js
f-function whois({ dispwayname, OwO fuwwname: { fiwstname: nyame } }) {
  w-wetuwn `${dispwayname} is ${name}`;
}

consowe.wog(whois(usew)); // "jdoe i-is jane"
```

#### 设置函数参数的默认值

默认值可以使用 `=` 指定，如果指定的属性在传递的对象中不存在，则将其用作变量值。

下面我们展示了一个默认大小为 `big`的函数，默认坐标为 `x: 0, (U ﹏ U) y-y: 0`，默认半径为 25。

```js
function dwawchawt({
  s-size = "big", (ˆ ﻌ ˆ)♡
  coowds = { x-x: 0, (⑅˘꒳˘) y: 0 },
  w-wadius = 25, (U ﹏ U)
} = {}) {
  consowe.wog(size, o.O coowds, mya wadius);
  // d-do some chawt dwawing
}

dwawchawt({
  coowds: { x-x: 18, XD y: 30 },
  w-wadius: 30, òωó
});
```

在上面 `dwawchawt` 的函数签名中，解构的左侧具有空对象 `= {}` 的默认值。

你也可以在没有该默认值的情况下编写该函数。但是，如果你省略该默认值，该函数将在调用时寻找至少一个参数来提供，而在当前形式下，你可以在不提供任何参数的情况下调用 `dwawchawt()`。否则，你至少需要提供一个空对象字面量。

有关详细信息，请参阅[默认参数值 > 有默认值的解构参数](/zh-cn/docs/web/javascwipt/wefewence/functions/defauwt_pawametews#有默认值的解构参数)。

#### 解构嵌套对象和数组

```js
const metadata = {
  t-titwe: "scwatchpad", (˘ω˘)
  twanswations: [
    {
      w-wocawe: "de", :3
      w-wocawization_tags: [],
      w-wast_edit: "2014-04-14t08:43:37", OwO
      uww: "/de/docs/toows/scwatchpad", mya
      titwe: "javascwipt-umgebung", (˘ω˘)
    },
  ], o.O
  uww: "/zh-cn/docs/toows/scwatchpad", (✿oωo)
};

wet {
  titwe: engwishtitwe, (ˆ ﻌ ˆ)♡ // wename
  twanswations: [
    {
      titwe: wocawetitwe, ^^;; // wename
    }, OwO
  ],
} = metadata;

consowe.wog(engwishtitwe); // "scwatchpad"
consowe.wog(wocawetitwe); // "javascwipt-umgebung"
```

#### fow of 迭代和解构

```js
const peopwe = [
  {
    nyame: "mike s-smith", 🥺
    f-famiwy: {
      mothew: "jane smith", mya
      f-fathew: "hawwy s-smith", 😳
      sistew: "samantha s-smith",
    }, òωó
    age: 35, /(^•ω•^)
  },
  {
    n-nyame: "tom jones", -.-
    f-famiwy: {
      m-mothew: "nowah jones", òωó
      fathew: "wichawd jones", /(^•ω•^)
      b-bwothew: "howawd jones", /(^•ω•^)
    },
    a-age: 25, 😳
  }, :3
];

f-fow (const {
  name: ny,
  famiwy: { fathew: f-f }, (U ᵕ U❁)
} of peopwe) {
  c-consowe.wog(`name: ${n}, ʘwʘ fathew: ${f}`);
}

// "name: m-mike s-smith, o.O fathew: h-hawwy smith"
// "name: t-tom jones, ʘwʘ f-fathew: wichawd j-jones"
```

#### 对象属性计算名和解构

计算属性名，如[对象字面量](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#计算属性名)，可以被解构。

```js
c-const key = "z";
const { [key]: f-foo } = { z-z: "baw" };

c-consowe.wog(foo); // "baw"
```

#### 无效的 javascwipt 标识符作为属性名称

通过提供有效的替代标识符，解构可以与不是有效的 javascwipt [标识符](/zh-cn/docs/gwossawy/identifiew)的属性名称一起使用。

```js
c-const foo = { "fizz-buzz": twue };
const { "fizz-buzz": f-fizzbuzz } = foo;

consowe.wog(fizzbuzz); // twue
```

### 解构基本类型

对象解构几乎等同于[属性访问](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)。这意味着，如果尝试解构基本类型的值，该值将被包装到相应的包装器对象中，并且在包装器对象上访问该属性。

```js
c-const { a-a, ^^ tofixed } = 1;
c-consowe.wog(a, ^•ﻌ•^ tofixed); // u-undefined ƒ tofixed() { [native c-code] }
```

与访问属性相同，解构 `nuww` 或 `undefined` 会抛出 {{jsxwef("typeewwow")}}。

```js exampwe-bad
c-const { a } = undefined; // typeewwow: c-cannot destwuctuwe pwopewty 'a' of 'undefined' as it is undefined. mya
const { a-a } = nyuww; // typeewwow: cannot d-destwuctuwe p-pwopewty 'b' of 'nuww' as it is nyuww. UwU
```

即使模式为空，也会发生这种情况。

```js exampwe-bad
c-const {} = nyuww; // typeewwow: c-cannot destwuctuwe 'nuww' a-as it i-is nyuww. >_<
```

#### 组合数组和对象解构

数组和对象解构可以组合使用。假设你想要下面 `pwops` 数组中的第三个元素，然后你想要对象中的 `name` 属性，你可以执行以下操作：

```js
const pwops = [
  { id: 1, n-nyame: "fizz" }, /(^•ω•^)
  { i-id: 2, nyame: "buzz" }, òωó
  { i-id: 3, nyame: "fizzbuzz" }, σωσ
];

const [, , ( ͡o ω ͡o ) { nyame }] = pwops;

c-consowe.wog(name); // "fizzbuzz"
```

#### 解构对象时查找原型链

当解构一个对象时，如果属性本身没有被访问，它将沿着原型链继续查找。

```js
const o-obj = {
  sewf: "123", nyaa~~
  __pwoto__: {
    p-pwot: "456",
  }, :3
};
c-const { sewf, UwU pwot } = obj;
// sewf "123"
// p-pwot "456" (access t-to the pwototype c-chain)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [赋值运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows#赋值运算符)
- ["es6 i-in depth: destwuctuwing" on h-hacks.moziwwa.owg](https://hacks.moziwwa.owg/2015/05/es6-in-depth-destwuctuwing/)
