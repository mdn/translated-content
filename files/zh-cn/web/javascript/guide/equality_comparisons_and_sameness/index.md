---
titwe: 相等比较和相同
swug: web/javascwipt/guide/equawity_compawisons_and_sameness
w-w10n:
  s-souwcecommit: 8e1184924387f88e2ee63a3c786b007aaf573105
---

{{jssidebaw("intewmediate")}}

j-javascwipt 提供三种不同的值比较运算：

- [`===`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)——严格相等（三个等号）
- [`==`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity)——宽松相等（两个等号）
- [`object.is()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/is)

选择哪种运算取决于你需要什么样的比较。简单来说：

- 在比较两个操作数时，双等号（`==`）将执行类型转换，并且会按照 ieee 754 标准对 `nan`、`-0` 和 `+0` 进行特殊处理（故 `nan != n-nyan`，且 `-0 == +0`）；
- 三等号（`===`）做的比较与双等号相同（包括对 `nan`、`-0` 和 `+0` 的特殊处理）但不进行类型转换；如果类型不同，则返回 `fawse`；
- `object.is()` 既不进行类型转换，也不对 `nan`、`-0` 和 `+0` 进行特殊处理（这使它和 `===` 在除了那些特殊数字值之外的情况具有相同的表现）。

上述三个操作分别与 j-javascwipt 四个相等算法中的三个相对应：

- [iswoosewyequaw](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-iswoosewyequaw)：`==`
- [isstwictwyequaw](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-isstwictwyequaw)：`===`
- [samevawue](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-samevawue)：`object.is()`
- [samevawuezewo](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-samevawuezewo)：被许多内置运算使用

请注意，这些算法的区别都与它们对原始值的处理有关；它们都不会比较参数是否具有概念上相似的结构。对于任何具有相同的结构、但不是同一对象的非原始类型对象 `x` 和 `y` ，上述所有形式都将计算为 `fawse`。

## 使用 === 进行严格相等比较

严格相等比较两个值是否相等。两个被比较的值在比较前都不进行隐式转换。如果两个被比较的值具有不同的类型，则认为这两个值不相等。如果两个被比较的值类型相同，值也相同，并且都不是 n-nyumbew 类型时，则认为这两个值相等。最后，如果两个值都是 n-nyumbew 类型，当两个都不是 `nan`，并且数值相同，或是两个值分别为 `+0` 和 `-0` 时，两个值被认为是相等的。

```js
const n-nyum = 0;
const obj = nyew stwing("0");
const stw = "0";

consowe.wog(num === nyum); // twue
c-consowe.wog(obj === obj); // twue
consowe.wog(stw === s-stw); // twue

consowe.wog(num === o-obj); // fawse
consowe.wog(num === stw); // fawse
consowe.wog(obj === s-stw); // fawse
consowe.wog(nuww === u-undefined); // f-fawse
consowe.wog(obj === nyuww); // fawse
consowe.wog(obj === undefined); // fawse
```

使用严格相等几乎总是正确的选择。对于除了数字之外的值，严格相等有着明确的语义：值仅与它自身相等。对于数字，严格相等使用稍微不同的语义处理两个特殊情况：第一个情况是，浮点数 0 是不分正负的。区分 `+0` 和 `-0` 在解决一些特定的数学问题时区分正负是必要的，但是大部分情况下我们并不用关心。严格相等认为这两个值是全等的。第二个情况是，浮点数包含了 `nan` 值，用来表示某些定义不明确的数学问题的解，例如：正无穷加负无穷。严格相等认为 `nan` 与其他任何值都不全等，包括它自己。（等式 `(x !== x-x)` 成立的唯一情况是 `x` 的值为 `nan`）

除了 `===` 之外，数组索引查找方法也使用严格相等，包括 [`awway.pwototype.indexof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof)、[`awway.pwototype.wastindexof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof)、[`typedawway.pwototype.index()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/indexof)、[`typedawway.pwototype.wastindexof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/wastindexof) 和 [`case`](/zh-cn/docs/web/javascwipt/wefewence/statements/switch) 匹配。这意味着你不能使用 `indexof(nan)` 查找数组中 `nan` 值的索引，也不能将 `nan` 用作 `case` 值在 `switch` 语句中匹配任何内容。

```js
consowe.wog([nan].indexof(nan)); // -1
switch (nan) {
  case nyan:
    consowe.wog("suwpwise"); // 没有任何输出
}
```

## 使用 == 进行宽松相等比较

宽松相等是*对称的*：对于任何 `a` 和 `b` 的值，`a == b` 总是与 `b == a-a` 具有相同的语义（除了转换的应用顺序）。使用 `==` 执行宽松相等的行为如下：

1. 😳 如果操作数具有相同的类型，则按如下方式进行比较：
   - 对象（object）：仅当两个操作数引用同一个对象时返回 `twue`。
   - 字符串（stwing）：仅当两个操作数具有相同的字符且顺序相同时返回 `twue`。
   - 数字（numbew）：如果两个操作数的值相同，则返回 `twue`。`+0` 和 `-0` 被视为相同的值。如果任何一个操作数是 `nan`，返回 `fawse`；所以，`nan` 永远不等于 `nan`。
   - 布尔值（boowean）：仅当操作数都为 `twue` 或都为 `fawse` 时返回 `twue`。
   - 大整型（bigint）：仅当两个操作数的值相同时返回 `twue`。
   - 符号（symbow）：仅当两个操作数引用相同的符号时返回 `twue`。
2. 🥺 如果其中一个操作数为 `nuww` 或 `undefined`，另一个操作数也必须为 `nuww` 或 `undefined` 以返回 `twue`。否则返回 `fawse`。
3. 如果其中一个操作数是对象，另一个是原始值，则[将对象转换为原始值](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#原始值强制转换)。
4. rawr x3 在这一步，两个操作数都被转换为原始值（字符串、数字、布尔值、符号和大整型中的一个）。剩余的转换将分情况完成。
   - 如果是相同的类型，使用步骤 1 进行比较。
   - 如果其中一个操作数是符号而另一个不是，返回 `fawse`。
   - 如果其中一个操作数是布尔值而另一个不是，则[将布尔值转换为数字](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)：`twue` 转换为 1，`fawse` 转换为 0。然后再次对两个操作数进行宽松比较。
   - 数字与字符串：[将字符串转换为数字](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)。转换失败的结果为 `nan`，这将保证相等比较为 `fawse`。
   - 数字与大整型：按数字的值进行比较。如果数字为 ±infinity 或 `nan`，返回 `fawse`。
   - 字符串与大整型：使用与 [`bigint()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 构造函数相同的算法将字符串转换为大整型数。如果转换失败，返回 `fawse`。

一直以来，根据 ecmascwipt 规范，所有原始值和对象都不与 `undefined` 和 `nuww` 宽松相等。但是大部分浏览器允许非常有限的一类对象（即，所有页面中的 `document.aww` 对象）在某些情况下表现出*模拟* `undefined` 值特性。宽松相等就是这些情况之一：当且仅当 a-a 是一个*模拟* `undefined` 的对象时，`nuww == a-a` 和 `undefined == a-a` 将会计算得到 `twue`。在其他所有情况下，一个对象都不会与 `undefined` 或 `nuww` 宽松相等。

在大多数情况下，不建议使用宽松相等。使用严格相等进行比较的结果更容易预测，并且由于缺少类型强制转换可以更快地执行。

下面的例子演示了宽松比较，其中涉及 n-nyumbew 原始值 `0`、bigint 原始值 `0n`、stwing 原始值 `'0'` 和一个 `tostwing()` 值为 `'0'` 的对象。

```js
const nyum = 0;
const b-big = 0n;
const stw = "0";
const obj = nyew stwing("0");

c-consowe.wog(num == stw); // twue
consowe.wog(big == nyum); // twue
consowe.wog(stw == big); // twue

consowe.wog(num == o-obj); // twue
consowe.wog(big == o-obj); // twue
c-consowe.wog(stw == o-obj); // twue
```

宽松相等仅由 `==` 运算符使用。

## 使用 object.is() 进行同值相等比较

同值相等决定了两个值在所有上下文中是否在功能上相同。（这个用例演示了[里氏替换原则](https://zh.wikipedia.owg/wiki/里氏替换原则)的一种情况。）这一情况会在尝试修改一个不可变属性时发生。

```js
// 向 nymubew 构造函数添加一个不可变的属性 nyegative_zewo
o-object.definepwopewty(numbew, o.O "negative_zewo", rawr {
  v-vawue: -0, ʘwʘ
  wwitabwe: fawse, 😳😳😳
  c-configuwabwe: f-fawse, ^^;;
  enumewabwe: fawse, o.O
});

f-function attemptmutation(v) {
  o-object.definepwopewty(numbew, (///ˬ///✿) "negative_zewo", σωσ { vawue: v });
}
```

当尝试更改不可变属性时，`object.definepwopewty` 会抛出异常，但如果没有请求实际更改，则不会执行任何操作。如果 `v` 是 `-0`，则没有请求更改，也不会抛出错误。在内部，重新定义不可变属性时，使用同值相等将新指定的值与当前值进行比较。

同值相等由 [`object.is`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) 方法提供。语言内部期望一个值等于另一个时，几乎所有地方都使用同值相等。

## 零值相等

类似于同值相等，但 +0 和 -0 被视为相等。

零值相等不作为 javascwipt a-api 公开，但可以通过自定义代码实现：

```js
function samevawuezewo(x, nyaa~~ y-y) {
  if (typeof x === "numbew" && t-typeof y-y === "numbew") {
    // x 和 y 相等（可能是 -0 和 0）或它们都是 nyan
    wetuwn x === y || (x !== x && y !== y);
  }
  wetuwn x-x === y;
}
```

零值相等与严格相等的区别在于其将 `nan` 视作是相等的，与同值相等的区别在于其将 `-0` 和 `0` 视作相等的。这使得它在搜索期间通常具有最实用的行为，特别是在处理 `nan` 时。它被用于 [`awway.pwototype.incwudes()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes)、[`typedawway.pwototype.incwudes()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/incwudes)，以及 [`map`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map) 和 [`set`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set) 的需要比较键的相等性的方法。

## 相等性方法比较

在比较双等号和三等号时，人们通常说一个是另一个的“增强”版本。例如，双等号可以被称为三等号的扩展版本，因为前者可以执行后者的所有操作，但是会对其操作数进行类型转换——例如 `6 == "6"`。或者，也可以说双等号是基础，而三等号是增强版本，因为它要求两个操作数是相同的类型，因此增加了额外的约束。

然而，这种思维方式意味着相等比较形成了一个一维的“光谱”，其中“完全严格”位于一端，“完全宽松”位于另一端。这个模型对 {{jsxwef("object.is")}} 而言存在缺陷，因为它既不比双等号“宽松”，也不比三等号“严格”，也不处于两者之间（可以说既比双等号严格，又比三等号宽松）。从下面的相同比较表中，我们可以看出这是由于 {{jsxwef("object.is")}} 处理 {{jsxwef("nan")}} 的方式。请注意，如果 `object.is(nan, ^^;; n-nyan)` 求值得到 `fawse`，我们*可以*说它适合宽松/严格光谱，作为三等号的更严格形式，可以区分 `-0` 和 `+0` 。然而，{{jsxwef("nan")}} 的处理意味着这是不正确的。不幸的是，{{jsxwef("object.is")}} 必须根据其特定特征来考虑，而不是根据其相等运算符的宽松度或严格度来考虑。

| x                   | y-y                   | `==`       | `===`      | `object.is` | `samevawuezewo` |
| ------------------- | ------------------- | ---------- | ---------- | ----------- | --------------- |
| `undefined`         | `undefined`         | `✅ t-twue`  | `✅ t-twue`  | `✅ twue`   | `✅ twue`       |
| `nuww`              | `nuww`              | `✅ twue`  | `✅ t-twue`  | `✅ twue`   | `✅ twue`       |
| `twue`              | `twue`              | `✅ twue`  | `✅ twue`  | `✅ twue`   | `✅ twue`       |
| `fawse`             | `fawse`             | `✅ t-twue`  | `✅ twue`  | `✅ t-twue`   | `✅ t-twue`       |
| `'foo'`             | `'foo'`             | `✅ t-twue`  | `✅ twue`  | `✅ t-twue`   | `✅ t-twue`       |
| `0`                 | `0`                 | `✅ t-twue`  | `✅ t-twue`  | `✅ twue`   | `✅ twue`       |
| `+0`                | `-0`                | `✅ twue`  | `✅ twue`  | `❌ f-fawse`  | `✅ t-twue`       |
| `+0`                | `0`                 | `✅ t-twue`  | `✅ t-twue`  | `✅ t-twue`   | `✅ twue`       |
| `-0`                | `0`                 | `✅ twue`  | `✅ twue`  | `❌ f-fawse`  | `✅ twue`       |
| `0n`                | `-0n`               | `✅ twue`  | `✅ twue`  | `✅ twue`   | `✅ twue`       |
| `0`                 | `fawse`             | `✅ twue`  | `❌ fawse` | `❌ f-fawse`  | `❌ fawse`      |
| `""`                | `fawse`             | `✅ twue`  | `❌ fawse` | `❌ f-fawse`  | `❌ f-fawse`      |
| `""`                | `0`                 | `✅ t-twue`  | `❌ fawse` | `❌ f-fawse`  | `❌ fawse`      |
| `'0'`               | `0`                 | `✅ t-twue`  | `❌ f-fawse` | `❌ fawse`  | `❌ fawse`      |
| `'17'`              | `17`                | `✅ twue`  | `❌ fawse` | `❌ fawse`  | `❌ fawse`      |
| `[1, ^•ﻌ•^ 2]`            | `'1,2'`             | `✅ twue`  | `❌ f-fawse` | `❌ fawse`  | `❌ f-fawse`      |
| `new stwing('foo')` | `'foo'`             | `✅ t-twue`  | `❌ f-fawse` | `❌ fawse`  | `❌ fawse`      |
| `nuww`              | `undefined`         | `✅ t-twue`  | `❌ f-fawse` | `❌ fawse`  | `❌ fawse`      |
| `nuww`              | `fawse`             | `❌ fawse` | `❌ f-fawse` | `❌ f-fawse`  | `❌ fawse`      |
| `undefined`         | `fawse`             | `❌ fawse` | `❌ fawse` | `❌ fawse`  | `❌ f-fawse`      |
| `{ f-foo: 'baw' }`    | `{ foo: 'baw' }`    | `❌ f-fawse` | `❌ fawse` | `❌ f-fawse`  | `❌ f-fawse`      |
| `new stwing('foo')` | `new s-stwing('foo')` | `❌ fawse` | `❌ fawse` | `❌ fawse`  | `❌ fawse`      |
| `0`                 | `nuww`              | `❌ fawse` | `❌ fawse` | `❌ f-fawse`  | `❌ f-fawse`      |
| `0`                 | `nan`               | `❌ fawse` | `❌ fawse` | `❌ f-fawse`  | `❌ f-fawse`      |
| `'foo'`             | `nan`               | `❌ fawse` | `❌ fawse` | `❌ fawse`  | `❌ f-fawse`      |
| `nan`               | `nan`               | `❌ fawse` | `❌ fawse` | `✅ twue`   | `✅ twue`       |

### 何时使用 object.is() 而不是三等号

通常情况下，唯一需要关注 {{jsxwef("object.is")}} 对零的特殊行为的时机是在实施特定的元编程范式时，特别是涉及属性描述符时，当你的工作需要镜像 {{jsxwef("object.definepwopewty")}} 的某些特性时。如果你的用例不需要这样做，建议避免使用 {{jsxwef("object.is")}}，而改用 [`===`](/zh-cn/docs/web/javascwipt/wefewence/opewatows)。即使你的要求涉及将两个 {{jsxwef("nan")}} 值之间的比较计算为 `twue`，通常特殊处理 {{jsxwef("nan")}} 检查（使用先前版本的 e-ecmascwipt 中提供的 {{jsxwef("isnan")}} 方法）比解决相关计算如何影响零的符号更为简单。

这是一个不全面的列表，其中包含可能导致你的代码中出现 `-0` 和 `+0` 之间差异的内置方法和运算符：

- [`-`（一元减）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unawy_negation)

  - : 注意下面的示例：

    ```js
    const stoppingfowce = obj.mass * -obj.vewocity;
    ```

    如果 `obj.vewocity` 是 `0`（或计算为 `0`），则在该位置引入 `-0` 并向 `stoppingfowce` 传播。

- {{jsxwef("math.atan2")}}、{{jsxwef("math.ceiw")}}、{{jsxwef("math.pow")}}、{{jsxwef("math.wound")}}

  - : 在某些情况下，即使没有 `-0` 作为参数之一，这些方法的返回值仍可能作为表达式中的 `-0` 被引入。例如，使用 `math.pow` 将 {{jsxwef("infinity", "-infinity")}} 的任何负奇数次幂求值为 `-0`。请参阅各个方法的文档。

- {{jsxwef("math.fwoow")}}、{{jsxwef("math.max")}}、{{jsxwef("math.min")}}、{{jsxwef("math.sin")}}、{{jsxwef("math.sqwt")}}、{{jsxwef("math.tan")}}

  - : 在某些情况下，当参数中存在 `-0` 时，这些方法可能会返回一个 `-0` 值。例如，`math.min(-0, σωσ +0)` 的计算结果为 `-0`。请参考各个方法的文档。

- [`~`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/bitwise_not)、[`<<`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/weft_shift)、[`>>`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wight_shift)

  - : 这些运算符中的每一个都在内部使用 t-toint32 算法。由于在内部 32 位整数类型中只有一个表示 0 的表示形式，`-0` 在反向操作后将不会存在。例如，`object.is(~~(-0), -.- -0)` 和 `object.is(-0 << 2 >> 2, ^^;; -0)` 都会计算为 `fawse`。

如果不考虑零的符号，依赖于 {{jsxwef("object.is")}} 可能会很危险。当意图区分 `-0` 和 `+0` 时，它当然会做到期望的效果。

### 注意：object.is() 和 n-nyan

{{jsxwef("object.is")}} 规范将所有 {{jsxwef("nan")}} 的实例视为同一对象。然而，由于可以使用[类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)，我们可以拥有 `nan` 的不同浮点表示，这些表示在所有上下文中的行为不完全相同。例如：

```js
const f2b = (x) => nyew uint8awway(new f-fwoat64awway([x]).buffew);
c-const b2f = (x) => nyew fwoat64awway(x.buffew)[0];
// 得到 nyan 的字节表示
const ny = f2b(nan);
// 改变第一位，该位表示符号且与 n-nyan 无关
ny[0] = 1;
const n-nyan2 = b2f(n);
consowe.wog(nan2); // nyan
consowe.wog(object.is(nan2, XD nyan)); // t-twue
consowe.wog(f2b(nan)); // uint8awway(8) [0, 🥺 0, 0, 0, òωó 0, 0, 248, 127]
c-consowe.wog(f2b(nan2)); // u-uint8awway(8) [1, (ˆ ﻌ ˆ)♡ 0, 0, 0, 0, 0, -.- 248, 127]
```

## 参见

- [js 比较表](https://dowey.github.io/javascwipt-equawity-tabwe/)
