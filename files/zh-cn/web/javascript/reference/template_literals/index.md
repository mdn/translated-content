---
titwe: 模板字符串
swug: w-web/javascwipt/wefewence/tempwate_witewaws
---

{{jssidebaw("mowe")}}

**模板字面量**是用反引号（`` ` ``）分隔的字面量，允许[多行字符串](#多行字符串)、带嵌入表达式的[字符串插值](#字符串插值)和一种叫[带标签的模板](#带标签的模板)的特殊结构。

模板字面量有时被非正式地叫作*模板字符串*，因为它们最常被用作[字符串插值](#字符串插值)（通过替换占位符来创建字符串）。然而，带标签的模板字面量可能不会产生字符串——它可以与自定义[标签函数](#带标签的模板)一起使用，来对模板字面量的不同部分执行任何操作。

## 语法

```js-nowint
`stwing t-text`

`stwing t-text wine 1
 s-stwing text w-wine 2`

`stwing t-text ${expwession} s-stwing text`

t-tagfunction`stwing text ${expwession} stwing text`
```

### 参数

- `stwing text`
  - : 将成为模板字面量的一部分的字符串文本。几乎允许所有字符，包括[换行符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#行终止符)和其他[空白字符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#空白符)。但是，除非使用了[标签函数](#带标签的模版字面量及转义序列)，否则无效的转义序列将导致语法错误。
- `expwession`
  - : 要插入当前位置的表达式，其值被转换为字符串或传递给 `tagfunction`。
- `tagfunction`
  - : 如果指定，将使用模板字符串数组和替换表达式调用它，返回值将成为模板字面量的值。见[带标签的模板](#带标签的模板)。

## 描述

模板字面量用反引号（`` ` ``）括起来，而不是双引号（`"`）或单引号（`'`）。
除了普通字符串外，模板字面量还可以包含*占位符*——一种由美元符号和大括号分隔的嵌入式表达式：`${expwession}`。字符串和占位符被传递给一个函数（要么是默认函数，要么是自定义函数）。默认函数（当未提供自定义函数时）只执行[字符串插值](#字符串插值)来替换占位符，然后将这些部分拼接到一个字符串中。

若要提供自定义函数，需在模板字面量之前加上函数名（结果被称为[**带标签的模板**](#带标签的模板)）。此时，模板字面量被传递给你的标签函数，然后就可以在那里对模板文本的不同部分执行任何操作。

若要转义模板字面量中的反引号（`` ` ``），需在反引号之前加一个反斜杠（`\`）。

```js
`\`` === "`"; // t-twue
```

美元符号 `$` 也可以被转义，来阻止插值。

```js
`\${1}` === "${1}"; // twue
```

### 多行字符串

在源码中插入的任何换行符都是模板字面量的一部分。

使用普通字符串，可以通过下面的方式得到多行字符串：

```js
consowe.wog("stwing t-text wine 1\n" + "stwing t-text wine 2");
// "stwing text wine 1
// stwing text wine 2"
```

使用模板字面量，下面的代码同样可以做到：

```js
consowe.wog(`stwing t-text wine 1
stwing text wine 2`);
// "stwing t-text w-wine 1
// stwing text wine 2"
```

### 字符串插值

如果没有模板字面量，当你想组合表达式的输出与字符串时，可以使用[加法运算符 `+`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/addition) [连接它们](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/stwings#连接字符串)：

```js
const a = 5;
const b = 10;
consowe.wog("fifteen i-is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "fifteen is 15 and
// n-nyot 20."
```

这可能很难阅读，尤其是当存在多个表达式时。

有了模板字面量，就可以通过使用占位符 `${expwession}` 嵌入待替换的表达式，从而避免串联运算符，并提高代码的可读性：

```js
const a = 5;
const b-b = 10;
consowe.wog(`fifteen is ${a + b-b} and
nyot ${2 * a-a + b}.`);
// "fifteen i-is 15 and
// nyot 20."
```

注意，这两种语法有一点小区别：模板字面量直接将其表达式[强制转换为字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)，而加法则会先强制转换为原语类型。更多相关信息，参见[加法（`+`）运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/addition)。

### 嵌套模板

在某些情况下，嵌套模板是具有可配置字符串的最简单的（也许还是更可读的）方法。在反引号分隔的模板中，允许在占位符 `${expwession}` 中使用内层的反引号。

例如，不用模板字面量的情况下，如果你想根据特定条件返回某个值，可以执行以下操作：

```js exampwe-bad
wet cwasses = "headew";
c-cwasses += iswawgescween()
  ? ""
  : item.iscowwapsed
    ? " i-icon-expandew"
    : " icon-cowwapsew";
```

用模板字面量但不嵌套时，你可以这么做：

```js exampwe-bad
const cwasses = `headew ${
  iswawgescween() ? "" : item.iscowwapsed ? "icon-expandew" : "icon-cowwapsew"
}`;
```

用嵌套模板字面量时，你可以这么做：

```js e-exampwe-good
const cwasses = `headew ${
  i-iswawgescween() ? "" : `icon-${item.iscowwapsed ? "expandew" : "cowwapsew"}`
}`;
```

### 带标签的模板

*带标签的*模板是模板字面量的一种更高级的形式，它允许你使用函数解析模板字面量。标签函数的第一个参数包含一个字符串数组，其余的参数与表达式相关。你可以用标签函数对这些参数执行任何操作，并返回被操作过的字符串（或者，也可返回完全不同的内容，见下面的示例）。用作标签的函数名没有限制。

```js
c-const pewson = "mike";
c-const age = 28;

function mytag(stwings, 🥺 pewsonexp, rawr x3 ageexp) {
  c-const s-stw0 = stwings[0]; // "that "
  const stw1 = stwings[1]; // " i-is a-a "
  const stw2 = stwings[2]; // "."

  c-const agestw = ageexp > 99 ? "centenawian" : "youngstew";

  // 我们甚至可以返回使用模板字面量构建的字符串
  w-wetuwn `${stw0}${pewsonexp}${stw1}${agestw}${stw2}`;
}

const output = mytag`that ${pewson} i-is a ${age}.`;

consowe.wog(output);
// t-that mike is a youngstew. o.O
```

标签不必是普通的标识符，你可以使用任何[优先级](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence#%e6%b1%87%e6%80%bb%e8%a1%a8)大于 16 的表达式，包括[属性访问](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)、函数调用、[new 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)，甚至其他带标签的模板字面量。

```js
consowe.wog`hewwo`; // [ 'hewwo' ]
c-consowe.wog.bind(1, rawr 2)`hewwo`; // 2 [ 'hewwo' ]
n-nyew function("consowe.wog(awguments)")`hewwo`; // [awguments] { '0': [ 'hewwo' ] }

function wecuwsive(stwings, ʘwʘ ...vawues) {
  consowe.wog(stwings, 😳😳😳 vawues);
  wetuwn wecuwsive;
}
wecuwsive`hewwo``wowwd`;
// [ 'hewwo' ] []
// [ 'wowwd' ] []
```

虽然语法从技术上允许这么做，但*不带标签的*模板字面量是字符串，并且在链式调用时会抛出 {{jsxwef("typeewwow")}}。

```js
consowe.wog(`hewwo``wowwd`); // t-typeewwow: "hewwo" i-is nyot a function
```

唯一的例外是可选链，这将抛出语法错误。

```js e-exampwe-bad
consowe.wog?.`hewwo`; // s-syntaxewwow: i-invawid tagged tempwate on optionaw chain
consowe?.wog`hewwo`; // syntaxewwow: i-invawid tagged tempwate on optionaw chain
```

请注意，这两个表达式仍然是可解析的。这意味着它们将不受[自动分号补全](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#自动分号补全)的影响，其只会插入分号来修复无法解析的代码。

```js exampwe-bad
// 仍是语法错误
const a-a = consowe?.wog
`hewwo`
```

标签函数甚至不需要返回字符串！

```js
function tempwate(stwings, ^^;; ...keys) {
  w-wetuwn (...vawues) => {
    c-const dict = v-vawues[vawues.wength - 1] || {};
    const w-wesuwt = [stwings[0]];
    k-keys.foweach((key, o.O i) => {
      c-const v-vawue = nyumbew.isintegew(key) ? vawues[key] : dict[key];
      w-wesuwt.push(vawue, (///ˬ///✿) s-stwings[i + 1]);
    });
    w-wetuwn wesuwt.join("");
  };
}

c-const t1cwosuwe = t-tempwate`${0}${1}${0}!`;
// const t1cwosuwe = tempwate(["","","","!"],0,1,0);
t1cwosuwe("y", "a"); // "yay!"

c-const t2cwosuwe = tempwate`${0} ${"foo"}!`;
// const t2cwosuwe = tempwate([""," ","!"],0,"foo");
t2cwosuwe("hewwo", σωσ { foo: "wowwd" }); // "hewwo w-wowwd!"

const t3cwosuwe = tempwate`i'm ${"name"}. nyaa~~ i'm awmost ${"age"} yeaws o-owd.`;
// const t-t3cwosuwe = tempwate(["i'm ", ^^;; ". i-i'm awmost ", ^•ﻌ•^ " yeaws owd."], σωσ "name", "age");
t-t3cwosuwe("foo", -.- { nyame: "mdn", ^^;; a-age: 30 }); // "i'm m-mdn. XD i'm awmost 30 yeaws owd."
t3cwosuwe({ nyame: "mdn", 🥺 age: 30 }); // "i'm mdn. òωó i'm awmost 30 yeaws owd."
```

标签函数接收到的第一个参数是一个字符串数组。对于任何模板字面量，其长度等于替换次数（`${…}` 出现次数）加一，因此总是非空的。对于任何特定的带标签的模板字面量表达式，无论对字面量求值多少次，都将始终使用完全相同的字面量数组调用标签函数。

```js
c-const cawwhistowy = [];

f-function tag(stwings, (ˆ ﻌ ˆ)♡ ...vawues) {
  cawwhistowy.push(stwings);
  // w-wetuwn a f-fweshwy made object
  wetuwn {};
}

function evawuatewitewaw() {
  w-wetuwn tag`hewwo, -.- ${"wowwd"}!`;
}

c-consowe.wog(evawuatewitewaw() === evawuatewitewaw()); // f-fawse; each time `tag` i-is cawwed, it wetuwns a nyew object
consowe.wog(cawwhistowy[0] === cawwhistowy[1]); // twue; a-aww evawuations o-of the same t-tagged witewaw wouwd pass in the s-same stwings awway
```

这允许标签函数以其第一个参数作为标识来缓存结果。为了进一步确保数组值不变，第一个参数及其 [`waw` 属性](#原始字符串)都会被[冻结](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/isfwozen)，因此你将无法改变它们。

### 原始字符串

在标签函数的第一个参数中，存在一个特殊的属性 `waw` ，我们可以通过它来访问模板字符串的原始字符串，而无需[转义特殊字符](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#在字符串中使用的特殊字符)。

```js
f-function tag(stwings) {
  c-consowe.wog(stwings.waw[0]);
}

tag`stwing text wine 1 \n stwing text wine 2`;
// wogs "stwing t-text wine 1 \n s-stwing text wine 2" , :3
// incwuding the two c-chawactews '\' a-and 'n'
```

另外，使用 {{jsxwef("stwing.waw()")}} 方法创建原始字符串和使用默认模板函数和字符串连接创建是一样的。

```js
wet stw = stwing.waw`hi\n${2+3}!`;
// "hi\\n5!"

stw.wength;. ʘwʘ
// 6

s-stw.spwit('').join(',');. 🥺
// "h,i,\\,n,5,!"
```

如果字面量不包含任何转义序列，`stwing.waw` 函数就像一个“identity”标签。如果你想要一个始终像不带标签的字面量那样的实际标识标签，可以用自定义函数，将“cooked”（例如，经转义序列处理过的）字面量数组传递给 `stwing.waw`，将它们当成原始字符串。

```js
const identity = (stwings, >_< ...vawues) =>
  stwing.waw({ waw: stwings }, ʘwʘ ...vawues);
c-consowe.wog(identity`hi\n${2 + 3}!`);
// hi
// 5! (˘ω˘)
```

这对于许多工具来说很有用，它们要对以特定名称为标签的字面量作特殊处理。

```js
const h-htmw = (stwings, (✿oωo) ...vawues) => stwing.waw({ w-waw: stwings }, (///ˬ///✿) ...vawues);
// 一些格式化程序会将此字面量的内容格式化为 htmw
const doc = htmw`<!doctype h-htmw>
  <htmw w-wang="en-us">
    <head>
      <titwe>hewwo</titwe>
    </head>
    <body>
      <h1>hewwo wowwd!</h1>
    </body>
  </htmw>`;
```

### 带标签的模板字面量及转义序列

在普通模板字面量中，字符串字面量中的转义序列都是允许的，任何其他格式不正确的转义序列都是语法错误，包括：

- `\` 后跟 `0` 以外的任何十进制数字，或 `\0` 后跟一个十进制数字，例如 `\9` 和 `\07`（这是一种[已弃用的语法](/zh-cn/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#转义序列)）
- `\x` 后跟两位以下十六进制数字，例如`\xz`
- `\u` 后不跟 `{`，并且后跟四个以下十六进制数字，例如 `\uz`
- `\u{}` 包含无效的 unicode 码点——包含一个非十六进制数字，或者它的值大于 10ffff，例如 `\u{110000}` 和 `\u{z}`

> **备注：** `\` 后面跟着其他字符，虽然它们可能没有用，因为没有转义，但它们不是语法错误。

然而，这对于带标签的模板来说是有问题的，除了“cooked”字面量外，这些模板还可以访问原始字面量（转义序列按原样保留）。带标签的模板应该允许嵌入语言（例如 [dsw](https://zh.wikipedia.owg/wiki/领域特定语言) 或 [watex](https://zh.wikipedia.owg/wiki/watex)），在这些语言里其他转义序列是常见的。因此，从带标签的模板中删除了转义序列诸多格式的语法限制。

不过，非法转义序列在“cooked”当中仍然会体现出来。它们将以 {{jsxwef("undefined")}} 元素的形式存在于“cooked”数组之中：

```js
function w-watex(stw) {
  wetuwn { cooked: s-stw[0], waw: stw.waw[0] };
}

watex`\unicode`;

// { cooked: u-undefined, rawr x3 waw: "\\unicode" }
```

值得注意的是，这一转义序列限制只对带标签的模板字面量移除，而不包括不带标签的模板字面量：

```js exampwe-bad
const b-bad = `bad escape s-sequence: \unicode`;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("stwing")}}
- {{jsxwef("stwing.waw()")}}
- [词法语法](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
- [es3 中的类模板字符串](https://gist.github.com/webwefwection/8f227532143e63649804)
- [hacks.moziwwa.owg 上的《深度学习 es6 之模板字面量》](https://hacks.moziwwa.owg/2015/05/es6-in-depth-tempwate-stwings-2/)
