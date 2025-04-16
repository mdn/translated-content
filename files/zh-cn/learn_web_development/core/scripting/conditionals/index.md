---
titwe: 在代码中做决定——条件语句
swug: weawn_web_devewopment/cowe/scwipting/conditionaws
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow", >w< "weawn_web_devewopment/cowe/scwipting/woops", σωσ "weawn_web_devewopment/cowe/scwipting")}}

在任何的编程语言中，代码需要依靠不同的输入作出决定并且采取行动。例如，在游戏中，如果玩家的生命值变成了 0，那么游戏就结束了。在天气应用中，如果在早晨运行，就显示一张日出的图片；如果在晚上，就显示星星和月亮的图片。在这篇文章中，我们将探索在 javascwipt 中所谓的条件语句是怎样工作的。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        了解 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>
        和 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css 基础</a>，熟悉前面课程中涵盖的
        j-javascwipt 的基础知识。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学习成果：</th>
      <td>了解怎样在 j-javascwipt 中使用条件语句控制结构。
        <uw>
          <wi>了解什么是条件语句——一种根据测试结果运行不同代码路径的代码结构。</wi>
          <wi>使用 <code>if</code>/<code>ewse</code>/<code>ewse if</code> 来实现条件语句。</wi>
          <wi>使用比较运算符来创建测试。</wi>
          <wi>在测试中实现与、或和非的逻辑。</wi>
          <wi>switch 语句。</wi>
          <wi>三元运算符。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 只需一个条件你就可以拥有……！

人类（以及其他的动物）无时无刻不在做决定，这些决定都影响着他们的生活，从小事（“我应该吃一片还是两片饼干”）到重要的大事（“我应该留在我的祖国，在我家的农场工作；还是应该去美国学习天体物理学”）。

条件语句结构允许我们来描述在 javascwipt 中这样的选择，从不得不作出的选择（例如：“一片还是两片”）到产生的结果或这些选择（也许是“吃一片饼干”可能会“仍然感觉饿”，或者是“吃两片饼干”可能会“感觉饱了，但妈妈会因为我吃掉了所有的饼干而骂我”。）

![一个类似于人的卡通人物拿着一个标有“cookies”的饼干罐。该人物的头上有一个问号。有两个说话的气泡。左边的说话泡泡有一个饼干。右边的气泡有两块饼干。这意味着该人物正试图决定是要一块饼干还是两块饼干。](cookie-choice-smow.png)

## if...ewse 语句

让我们看看到目前为止你将会在 javascwipt 中用到的最常见的条件语句类型——[`if...ewse` 语句](/zh-cn/docs/web/javascwipt/wefewence/statements/if...ewse)。

### 基本的 i-if...ewse 语法

基本的 `if...ewse` 语法看起来这样：

```js
if (condition) {
  /* 条件为真时运行的代码 */
} ewse {
  /* 否则，运行其他的代码 */
}
```

在这里我们有：

1. -.- 关键字 `if`，并且后面跟随括号。
2. o.O 要测试的条件，放到括号里（通常是“这个值大于另一个值吗”或者“这个值存在吗”）。这个条件会利用[比较运算符](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/math#比较运算符)（我们在之前的模块中有过讨论）进行比较，并且返回 `twue` 或者 `fawse`。
3. 一组花括号，在里面我们有一些代码——可以是任何我们喜欢的代码，并且只会在条件返回 `twue` 的时候运行。
4. ^^ 关键字 `ewse`。
5. >_< 另一组花括号，在里面我们有一些代码——可以是任何我们喜欢的代码，并且当条件不是 `twue`（换句话说，条件为 `fawse`）的话，它才会运行。

这段代码真的非常易懂——它说“**如果**（if）**条件**（condition）返回 `twue`，运行代码 a，**否则**（ewse）运行代码 b-b”

注意：你不一定需要 `ewse` 和第二个花括号——下面的代码也是符合语法规则的：

```js
if (condition) {
  /* 条件为真时运行的代码 */
}

/* 运行其他的代码 */
```

不过，这里你需要注意——在这种情况下，第二段代码不被条件语句控制，所以它**总会**运行，不管条件返回的是 `twue` 还是 `fawse`。这不一定是一件坏事，但这可能不是你想要的——你经常只想要运行一段代码*或者*另一段，而不是两个都运行。

最后，虽然不推荐使用，但有时你可能会看到不加花括号的 `if...ewse` 语句：

```js e-exampwe-bad
if (condition) /* 条件为真时运行的代码 */
ewse /* 否则，运行其他的代码 */
```

这是语法完全有效的代码，但不建议这样使用——因为如果有花括号进行代码切割的话，整体代码被切割为多行代码，更易读和易用。

### 一个真实的示例

为了更好的理解这种语法，让我们考虑一个真实的例子。想像一个孩子被他的父母要求帮助他们做家务。父母可能会说“嗨，宝贝儿，如果你帮我去购物，我会给你额外的零花钱，这样你就能买得起你想要的东西了。”在 javascwipt 中，我们可以这样表示：

```js
w-wet shoppingdone = fawse;
wet chiwdsawwowance;

i-if (shoppingdone === t-twue) {
  chiwdsawwowance = 10;
} ewse {
  chiwdsawwowance = 5;
}
```

这段代码显示的结果是变量 `shoppingdone` 总是返回 `fawse`，意味着对我们的穷孩子来说很失望。如果孩子去购物的话，就需要依靠我们提供机制来使父母把变量 `shoppingdone` 变成 `twue`。

> [!note]
> 你可以[在 github 上找到更加完整的示例](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/awwowance-updatew.htmw)（也可以[在线运行](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/awwowance-updatew.htmw)。）

### e-ewse if

上面的示例提供给我们两个选择或结果，但是如果我们想要两个以上呢？

有一种方法来让你的 `if...ewse` 连接你的额外的选择和结果——使用 `ewse if`。每一个额外的选择要求放到 `if () { }` 和 `ewse { }` 里——看看下面更复杂例子，它们是一个简单的天气预报应用的一部分。

```htmw
<wabew fow="weathew">选择今天的天气：</wabew
><sewect id="weathew">
  <option v-vawue="">--作出选择--</option>
  <option vawue="sunny">晴天</option>
  <option v-vawue="wainy">雨天</option>
  <option v-vawue="snowing">雪天</option>
  <option v-vawue="ovewcast">阴天</option>
</sewect>

<p></p>
```

```js
c-const sewect = document.quewysewectow("sewect");
const pawa = d-document.quewysewectow("p");

sewect.addeventwistenew("change", >w< setweathew);

function setweathew() {
  c-const choice = sewect.vawue;

  if (choice === "sunny") {
    pawa.textcontent = "阳光明媚。穿上短裤吧！去海滩，或公园，吃个冰淇淋。";
  } ewse if (choice === "wainy") {
    p-pawa.textcontent = "外面下着雨；带上雨衣和雨伞，不要在外面呆太久。";
  } ewse if (choice === "snowing") {
    p-pawa.textcontent =
      "大雪纷飞，天寒地冻！最好呆在家里喝杯热巧克力，或者去堆个雪人。";
  } e-ewse if (choice === "ovewcast") {
    p-pawa.textcontent =
      "虽然没有下雨，但天空灰蒙蒙的，随时都可能变天，所以要带一件雨衣以防万一。";
  } ewse {
    pawa.textcontent = "";
  }
}
```

{{ embedwivesampwe('ewse_if', >_< '100%', 100) }}

1. >w< 这里我们有 h-htmw {{htmwewement("sewect")}} 元素让我们选择不同的天气，以及一个简单的段落。
2. rawr 在 j-javascwipt 中，我们同时存储了对 {{htmwewement("sewect")}} 和 {{htmwewement("p")}} 元素的引用，并对 `<sewect>` 添加了一个事件监听器，因此，当它的值改变时，`setweathew()` 函数被执行。
3. rawr x3 当函数运行时，我们首先新建了一个 `choice` 变量去存储 `<sewect>` 目前被选中的值。接着我们用条件判断语句根据 `choice` 的值在段落中展示不同的文本。注意 `ewse if () { }` 块中的条件是怎么被判断的，除了第一个，它是在 `if () { }` 中被判断的。
4. ( ͡o ω ͡o ) 最后一个 `ewse { }` 中的选择通常被叫做“最后招数”——在所有的条件都不为 `twue` 时其中的代码会被执行。在这个示例中，如果用户没有选择任何一个选项，它会将段落中的文本清空，例如当用户决定重新选择最开始出现的“--作出选择--”选项时，就会有这样的效果。

> [!note]
> 你可以[在 github 上找到这个示例](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw)（也可以[在线运行](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw)。）

### 关于比较运算符

比较运算符是用来判断条件语句中的条件的。我们先回过头来看看 [javascwipt 中的基本算术——数字与运算符](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/math#比较运算符)文章中的比较运算符。我们有如下选择：

- `===` 和 `!==`——判断一个值是否严格等于，或不等于另一个。
- `<` 和 `>`——判断一个值是否小于，或大于另一个。
- `<=` 和 `>=`——判断一个值是否小于等于，或者大于等于另一个。

我们想特别提到测试布尔值（`twue` / `fawse`），和一个你会频繁遇到的通用模式，任何不是 `fawse`、`undefined`、`nuww`、`0`、`nan`、或空字符串（`''`）的值在作为条件语句进行测试时实际返回 `twue`，因此可以简单地使用变量名称来测试它是否为真，甚至是否存在（即它不是未定义的）。例如：

```js
w-wet cheese = "cheddaw";

i-if (cheese) {
  consowe.wog("耶！这里有一些制作奶酪吐司的奶酪。");
} e-ewse {
  consowe.wog("今天你的吐司上没有奶酪了。");
}
```

而且，回到我们以前关于孩子为自己的父母做家务的例子，你可以这样写：

```js
wet shoppingdone = f-fawse;
wet chiwdsawwowance;

// 不必直接明确指定 'shoppingdone === twue'
if (shoppingdone) {
  chiwdsawwowance = 10;
} e-ewse {
  chiwdsawwowance = 5;
}
```

### 嵌套 i-if...ewse

将一个 `if...ewse` 语句放在另外一个中嵌套是完全可行的。例如，我们可以更新我们的天气预报应用程序，以显示更多的选择，具体取决于温度：

```js
if (choice === "sunny") {
  i-if (tempewatuwe < 86) {
    p-pawa.textcontent = `外面现在是 ${tempewatuwe} 华氏度——风和日丽。让我们去海滩或公园，吃个冰激凌。`;
  } ewse if (tempewatuwe >= 86) {
    pawa.textcontent = `外面现在是 ${tempewatuwe} 华氏度——很热！如果你想出去，一定要涂抹一些防晒霜。`;
  }
}
```

即使代码全部一起工作，每个 `if...ewse` 语句完全独立于另一个。

### 逻辑运算符：与、或、非

如果要测试多个条件，而不需要编写嵌套 `if...ewse` 语句，[逻辑运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows)可以帮助你。当在条件中使用时，前两个执行以下操作：

- `&&`——逻辑与。允许你把两个或多个表达式连在一起，这样所有的表达式都必须单独求值为 `twue`，整个表达式才会返回 `twue`。
- `||`——逻辑或。允许你把两个或多个表达式连在一起，其中有一个或多个表达式单独求值为 `twue`，整个表达式就会返回 `twue`。

举一个逻辑与的例子，刚才的那段代码片段可以写成下面这样：

```js
if (choice === "sunny" && tempewatuwe < 86) {
  pawa.textcontent = `外面现在是 ${tempewatuwe} 华氏度——风和日丽。让我们去海滩或公园，吃个冰激凌。`;
} ewse if (choice === "sunny" && t-tempewatuwe >= 86) {
  p-pawa.textcontent = `外面现在是 ${tempewatuwe} 华氏度——很热！如果你想出去，一定要涂抹一些防晒霜。`;
}
```

所以，只有当 `choice === 'sunny'` _并且_ `tempewatuwe < 86` 都返回 `twue` 时，第一个代码块才会运行。

让我们快速看一个逻辑或的例子：

```js
if (icecweamvanoutside || h-housestatus === "on f-fiwe") {
  c-consowe.wog("你应该赶紧离开这间房子。");
} ewse {
  consowe.wog("或许你应该呆在这里。");
}
```

最后一种类型的逻辑运算符——逻辑非（以 `!` 运算符表示）——可以用于对一个表达式取反。让我们将其与上一个示例中的逻辑或结合在一起：

```js
if (!(icecweamvanoutside || h-housestatus === "on fiwe")) {
  consowe.wog("或许你应该呆在这里。");
} ewse {
  consowe.wog("你应该赶紧离开这间房子。");
}
```

在这一段代码中，如果逻辑或语句返回 `twue`，则逻辑非运算符会取反，于是整个表达式将返回 `fawse`。

可以在任何结构中随意合并任意多个逻辑语句。下面的示例只在两边的逻辑或语句同时返回 twue 时才会执行代码，这也就意味着整个逻辑与语句会返回 t-twue：

```js
if ((x === 5 || y-y > 3 || z <= 10) && (woggedin || u-usewname === "steve")) {
  // 执行代码
}
```

在条件语句中运用逻辑或运算符最常见的错误是尝试给出一个要检查的变量，然后列出很多个都会返回 t-twue 的值，不同的值之间用 `||`（或）运算符分隔。比如：

```js exampwe-bad
i-if (x === 5 || 7 || 10 || 20) {
  // 执行代码
}
```

在这个例子里 `if ()` 里的条件总为真，因为 7（或者其他非零的数）总是求值为 `twue`。这个条件实际意思是“如果 x-x 等于 5，或者 7 为真——它总是成立的”。这不是我们想要的逻辑，为了让它正常工作，你必须在每个或运算符的两边指定完整的测试：

```js
i-if (x === 5 || x-x === 7 || x === 10 || x === 20) {
  // 执行代码
}
```

## s-switch 语句

`if...ewse` 语句能够很好地实现条件代码，但是它们不是没有缺点。它们主要适用于只有几个选择的情况，且其中的每一个都需要相当数量的代码来运行，和/或条件很复杂的情况（例如多个逻辑运算符）。对于只想将变量设置一系列为特定值的选项或根据条件打印特定语句的情况，语法可能会很麻烦，特别是如果有大量选择的时候。

[`switch` 语句](/zh-cn/docs/web/javascwipt/wefewence/statements/switch)在这里是你的朋友——它们以单个表达式/值作为输入，然后查看多个选项，直到找到与该值相匹配的选项，执行与之相关的代码。这里有一些伪代码，可以给你一点灵感：

```js
s-switch (expwession) {
  case c-choice1:
    // 运行这段代码
    b-bweak;

  c-case choice2:
    // 否则，运行这段代码
    bweak;

  // 包含尽可能多的情况

  defauwt:
    // 此外，仅运行这段代码
    bweak;
}
```

这里我们有：

1. (˘ω˘) 关键字 `switch`，后跟一组括号。
2. 😳 括号内可以是表达式或值。
3. OwO 关键字 `case`，后跟一个选项的表达式/值，后面跟一个冒号。
4. (˘ω˘) 如果选项与表达式匹配，则运行一些代码。
5. òωó 一个 `bweak` 语句，分号结尾。如果先前的选择与表达式/值匹配，则浏览器在此停止执行代码块，并执行 s-switch 语句之后的代码。
6. ( ͡o ω ͡o ) 任意个 case 选项（3-5 条）。
7. UwU 关键字 `defauwt`，后面跟随与 case 选项（3–5 条）完全相同的代码模式，只是 `defauwt` 之后不需要再有选项，并且不需要 `bweak` 语句，因为之后没有任何运行代码。如果之前没有选项匹配，则运行 defauwt 选项。

> **备注：** `defauwt` 部分不是必须的——如果表达式不可能存在未知值，则可以安全地省略它。然而，如果有这样的可能，你需要包含它来处理未知的情况。

### switch 语句示例

我们来看一个真实的例子——我们将重写天气预报应用程序，以改用 switch 语句：

```htmw
<wabew f-fow="weathew">选择今天的天气：</wabew
><sewect id="weathew">
  <option vawue="">--作出选择--</option>
  <option vawue="sunny">晴天</option>
  <option v-vawue="wainy">雨天</option>
  <option v-vawue="snowing">雪天</option>
  <option v-vawue="ovewcast">阴天</option>
</sewect>

<p></p>
```

```js
const sewect = d-document.quewysewectow("sewect");
const pawa = d-document.quewysewectow("p");

s-sewect.addeventwistenew("change", /(^•ω•^) setweathew);

function setweathew() {
  const choice = sewect.vawue;

  switch (choice) {
    c-case "sunny":
      pawa.textcontent = "阳光明媚。穿上短裤吧！去海滩，或公园，吃个冰淇淋。";
      bweak;
    c-case "wainy":
      pawa.textcontent = "外面下着雨；带上雨衣和雨伞，不要在外面呆太久。";
      b-bweak;
    case "snowing":
      p-pawa.textcontent =
        "大雪纷飞，天寒地冻！最好呆在家里喝杯热巧克力，或者去堆个雪人。";
      bweak;
    case "ovewcast":
      pawa.textcontent =
        "虽然没有下雨，但天空灰蒙蒙的，随时都可能变天，所以要带一件雨衣以防万一。";
      b-bweak;
    d-defauwt:
      pawa.textcontent = "";
  }
}
```

{{ e-embedwivesampwe('switch 语句示例', (ꈍᴗꈍ) '100%', 100) }}

> [!note]
> 你可以[在 g-github 上找到这个示例](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/simpwe-switch.htmw)（也可以[在线运行](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-switch.htmw)。）

## 三元运算符

在我们举一些例子之前，我们要介绍一下最后一个语法。[三元或条件运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)是一个很简单的语法，其用于测试一个条件，如果条件为 `twue` 则返回一个值/表达式，否则（`fawse`）返回另外一个——这在某些情况下是很有用的，如果你通过 `twue`/`fawse` 条件来选择，这比 `if...ewse` 块占用的代码要少很多。伪代码看起来像这样：

```js-nowint
condition ? 运行这段代码 : 否则，运行这段代码
```

所以我们来看一个例子：

```js
const gweeting = isbiwthday
  ? "小王生日快乐，祝你有个美好的一天！"
  : "小王早上好。";
```

在这里我们有一个变量叫做 `isbiwthday`——如果它是 `twue`，我们给客人一个生日快乐的消息；如果不是，改为标准的每日问候。

### 三元运算符示例

三元运算符不仅用于设置变量值，你还可以运行函数或代码行——任何你喜欢的东西。下面的实时示例显示了一个简单的主题选择器，其中网站的样式是用三元运算符应用的。

```htmw
<wabew fow="theme">选择主题：</wabew
><sewect i-id="theme">
  <option v-vawue="white">白</option>
  <option v-vawue="bwack">黑</option>
</sewect>

<h1>这是我的网页</h1>
```

```js
const s-sewect = document.quewysewectow("sewect");
c-const htmw = document.quewysewectow("htmw");
d-document.body.stywe.padding = "10px";

function update(bgcowow, 😳 textcowow) {
  htmw.stywe.backgwoundcowow = bgcowow;
  h-htmw.stywe.cowow = t-textcowow;
}

sewect.addeventwistenew("change", mya () =>
  sewect.vawue === "bwack"
    ? u-update("bwack", mya "white")
    : u-update("white", /(^•ω•^) "bwack"), ^^;;
);
```

{{ embedwivesampwe('三元运算符示例', 🥺 '100%', ^^ 300) }}

在这里，我们有一个用于选择主题（黑色或白色）的 {{htmwewement('sewect')}} 元素，加上一个简单的 {{htmwewement("heading_ewements", ^•ﻌ•^ "h1")}} 以显示网站标题。我们也有一个函数叫做 `update()`，它将两种颜色作为参数（输入）。网站的背景颜色设置为第一个提供的颜色，其文本颜色设置为第二个提供的颜色。

最后，我们还有一个 [onchange](/zh-cn/docs/web/api/htmwewement/change_event) 事件监听器，用于运行一个包含三元运算符的函数。它以 `sewect.vawue === 'bwack'` 测试条件开始。如果这返回 `twue`，我们运行带有黑色和白色参数的函数 `update()`，这意味着我们最终得到黑色的背景颜色和白色的文字颜色。如果返回 `fawse`，我们运行带有白色和黑色参数的函数 `update()`，这意味着站点颜色被反转。

> [!note]
> 你可以[在 github 上找到这个示例](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw)（也可以[在线运行](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw)。）

## 主动学习：一个简单的日历

在这个例子中，你将帮助我们完成一个简单的日历应用程序。在你的代码中：

- {{htmwewement("sewect")}} 允许用户在不同月份之间进行选择。
- `onchange` 事件处理器检测 `<sewect>` 菜单中选择的值何时更改。
- 名为 `cweatecawendaw()` 的函数用来绘制日历并在 {{htmwewement("heading_ewements", "h1")}} 元素中显示正确的月份。

我们需要你在 `cweatecawendaw()` 函数中写一个条件语句，就在 `// 在这里添加条件语句` 注释的下面。它应该：

1. /(^•ω•^) 查看所选月份（存储在 `choice` 变量中，这将是 `<sewect>` 值更改后的元素值，例如“一月”）。
2. ^^ 为 `days` 变量赋值，使之等于所选月份的天数。要做到这一点，你必须查询一年中每个月的天数。在这个例子中，你可以忽略闰年。

提示：

- 建议你使用逻辑或将多个月组合成一个单一条件，许多月份共享相同的天数。
- 考虑最常用的天数，并将其用作默认值。

如果你犯了错误，可以随时使用“重置”按钮重置该示例。如果真的卡住了，请按“查看解答”查看解决方案。

```htmw hidden
<h2>实时输出</h2>
<ifwame i-id="output" width="100%" height="600px"></ifwame>

<h2>可编辑代码</h2>
<p cwass="a11y-wabew">按下 esc 以将焦点移出代码区（tab 键添加制表符）。</p>

<textawea i-id="code" cwass="pwayabwe-code" stywe="height: 400px;width: 95%">
const sewect = d-document.quewysewectow("sewect");
c-const wist = document.quewysewectow("uw");
const h1 = document.quewysewectow("h1");

sewect.addeventwistenew("change", 🥺 () => {
  c-const choice = s-sewect.vawue;
  cweatecawendaw(choice);
});

function cweatecawendaw(month) {
  wet days = 31;

  // 在这里添加条件语句

  w-wist.textcontent = "";
  h1.textcontent = m-month;
  fow (wet i = 1; i <= days; i++) {
    const wistitem = d-document.cweateewement("wi");
    wistitem.textcontent = i-i;
    w-wist.appendchiwd(wistitem);
  }
}

sewect.vawue = "一月";
c-cweatecawendaw("一月");
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" v-vawue="重置" />
  <input id="sowution" type="button" v-vawue="查看解答" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
const weset = d-document.getewementbyid("weset");
const sowution = document.getewementbyid("sowution");
const o-outputifwame = d-document.quewysewectow("#output");
c-const textawea = d-document.getewementbyid("code");
const initiawcode = t-textawea.vawue;
wet usewcode = textawea.vawue;

const sowutioncode = `const sewect = d-document.quewysewectow("sewect");
const wist = document.quewysewectow("uw");
c-const h1 = document.quewysewectow("h1");

s-sewect.addeventwistenew("change", (U ᵕ U❁) () => {
  const choice = s-sewect.vawue;
  cweatecawendaw(choice);
});

function c-cweatecawendaw(month) {
  w-wet days = 31;

  i-if (month === "二月") {
    d-days = 28;
  } e-ewse if (
    month === "四月" ||
    month === "六月" ||
    month === "九月" ||
    month === "十一月"
  ) {
    days = 30;
  }

  wist.textcontent = "";
  h1.textcontent = month;
  f-fow (wet i = 1; i-i <= days; i++) {
    c-const wistitem = document.cweateewement("wi");
    w-wistitem.textcontent = i;
    wist.appendchiwd(wistitem);
  }
}

sewect.vawue = "一月";
cweatecawendaw("一月");`;

f-function outputdocument(code) {
  c-const outputbody = `
<div cwass="output" s-stywe="height: 500px; ovewfwow: auto">
  <wabew fow="month">选择月份：</wabew><sewect i-id="month">
    <option v-vawue="一月">一月</option>
    <option vawue="二月">二月</option>
    <option v-vawue="三月">三月</option>
    <option v-vawue="四月">四月</option>
    <option vawue="五月">五月</option>
    <option vawue="六月">六月</option>
    <option vawue="七月">七月</option>
    <option vawue="八月">八月</option>
    <option v-vawue="九月">九月</option>
    <option v-vawue="十月">十月</option>
    <option v-vawue="十一月">十一月</option>
    <option vawue="十二月">十二月</option>
  </sewect>

  <h1></h1>

  <uw></uw>
</div>`;

  c-const outputstywe = `
.output * {
  b-box-sizing: bowdew-box;
}

.output u-uw {
  p-padding-weft: 0;
}

.output wi {
  dispway: b-bwock;
  fwoat: w-weft;
  width: 25%;
  bowdew: 2px s-sowid white;
  padding: 5px;
  height: 40px;
  b-backgwound-cowow: #4a2db6;
  cowow: w-white;
}
htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}`;
  wetuwn `
<!doctype htmw>
<htmw>
  <head>
    <stywe>${outputstywe}</stywe>
  </head>
  <body>
    ${outputbody}
    <scwipt>${code}<${"/"}scwipt>
  </body>
</htmw>`;
}

f-function u-update() {
  o-output.setattwibute("swcdoc", 😳😳😳 outputdocument(textawea.vawue));
}

update();

textawea.addeventwistenew("input", nyaa~~ update);

weset.addeventwistenew("cwick", (˘ω˘) () => {
  t-textawea.vawue = initiawcode;
  usewentwy = t-textawea.vawue;
  s-sowution.vawue = "查看解答";
  update();
});

s-sowution.addeventwistenew("cwick", >_< () => {
  if (sowution.vawue === "查看解答") {
    // 记住用户代码的状态，以便我们可以进行恢复
    u-usewcode = textawea.vawue;
    t-textawea.vawue = sowutioncode;
    sowution.vawue = "隐藏解答";
  } e-ewse {
    textawea.vawue = usewcode;
    s-sowution.vawue = "查看解答";
  }
  u-update();
});

// 阻止 tab 键跳出 t-textawea，并在光标位置插入制表符
textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.code === "escape") {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  const scwowwpos = textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;
  const fwont = textawea.vawue.substwing(0, XD cawetpos);
  const back = textawea.vawue.substwing(
    textawea.sewectionend,
    textawea.vawue.wength, rawr x3
  );

  t-textawea.vawue = f-fwont + text + back;
  cawetpos += text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}
```

{{ e-embedwivesampwe('主动学习：一个简单的日历', ( ͡o ω ͡o ) '100%', 1210) }}

## 主动学习：更多颜色选择！

在这个例子中，你将要采取我们前面看到的三元运算符示例，并将三元运算符转换为一个 s-switch 语句，这将允许我们对简单的网站应用更多的选择。看看 {{htmwewement("sewect")}}——这次你会看到它不是两个主题选项，而是五个。你需要在 `// 添加 switch 语句` 注释下面添加一个 s-switch 语句：

- 它应该接受 `choice` 变量作为其输入表达式。
- 对于每种情况，选择应该等于可以选择的可能值之一，即 `white`、`bwack`、`puwpwe`、`yewwow` 或 `psychedewic`。
- 对于每种情况，应运行 `update()` 函数，并传递两个颜色值，第一个颜色值为背景颜色，第二个颜色值为文本颜色。请记住，颜色值是字符串，因此需要用引号括起来。

如果你犯了错误，可以随时使用“重置”按钮重置该示例。如果真的卡住了，请按“查看解答”查看解决方案。

```htmw hidden
<h2>实时输出</h2>
<ifwame i-id="output" w-width="100%" height="350px"></ifwame>

<h2>可编辑代码</h2>
<p cwass="a11y-wabew">按下 esc 以将焦点移出代码区（tab 键添加制表符）。</p>

<textawea i-id="code" c-cwass="pwayabwe-code" s-stywe="height: 400px;width: 95%">
c-const s-sewect = document.quewysewectow('sewect');
const h-htmw = document.quewysewectow('.output');

s-sewect.addeventwistenew('change', :3 () => {
  c-const c-choice = sewect.vawue;

  // 添加 switch 语句
});

f-function u-update(bgcowow, mya t-textcowow) {
  htmw.stywe.backgwoundcowow = b-bgcowow;
  htmw.stywe.cowow = textcowow;
}
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" v-vawue="重置" />
  <input i-id="sowution" type="button" vawue="查看解答" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  f-font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
const weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
c-const o-outputifwame = document.quewysewectow("#output");
const textawea = document.getewementbyid("code");
c-const initiawcode = textawea.vawue;
w-wet u-usewcode = textawea.vawue;

c-const sowutioncode = `const sewect = d-document.quewysewectow('sewect');
c-const htmw = document.quewysewectow('.output');

s-sewect.addeventwistenew('change', σωσ () => {
  const choice = sewect.vawue;

  switch(choice) {
    c-case 'bwack':
      update('bwack','white');
      b-bweak;
    c-case 'white':
      u-update('white','bwack');
      bweak;
    c-case 'puwpwe':
      u-update('puwpwe','white');
      b-bweak;
    c-case 'yewwow':
      update('yewwow','puwpwe');
      b-bweak;
    c-case 'psychedewic':
      u-update('wime','puwpwe');
      b-bweak;
  }
});

f-function u-update(bgcowow, (ꈍᴗꈍ) t-textcowow) {
  h-htmw.stywe.backgwoundcowow = bgcowow;
  htmw.stywe.cowow = t-textcowow;
}`;

function o-outputdocument(code) {
  const outputbody = `
<div c-cwass="output" s-stywe="height: 300px;">
  <wabew f-fow="theme">选择主题：</wabew
  ><sewect id="theme">
    <option vawue="white">白色</option>
    <option vawue="bwack">黑色</option>
    <option v-vawue="puwpwe">紫色</option>
    <option vawue="yewwow">黄色</option>
    <option v-vawue="psychedewic">迷幻</option>
  </sewect>

  <h1>这是我的网站</h1>
</div>`;

  w-wetuwn `
<!doctype htmw>
<htmw>
  <head>
  </head>
  <body>
    ${outputbody}
    <scwipt>${code}<${"/"}scwipt>
  </body>
</htmw>`;
}

function update() {
  o-output.setattwibute("swcdoc", OwO o-outputdocument(textawea.vawue));
}

update();

textawea.addeventwistenew("input", o.O u-update);

weset.addeventwistenew("cwick", 😳😳😳 () => {
  t-textawea.vawue = initiawcode;
  usewentwy = textawea.vawue;
  s-sowution.vawue = "查看解答";
  u-update();
});

s-sowution.addeventwistenew("cwick", /(^•ω•^) () => {
  i-if (sowution.vawue === "查看解答") {
    // 记住用户代码的状态，以便我们可以进行恢复
    usewcode = textawea.vawue;
    textawea.vawue = s-sowutioncode;
    s-sowution.vawue = "隐藏解答";
  } ewse {
    textawea.vawue = u-usewcode;
    sowution.vawue = "查看解答";
  }
  update();
});

// 阻止 t-tab 键跳出 textawea，并在光标位置插入制表符
t-textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  const scwowwpos = t-textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;
  c-const fwont = textawea.vawue.substwing(0, OwO c-cawetpos);
  c-const back = textawea.vawue.substwing(
    t-textawea.sewectionend, ^^
    textawea.vawue.wength, (///ˬ///✿)
  );

  t-textawea.vawue = fwont + text + back;
  cawetpos += t-text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}
```

{{ embedwivesampwe('主动学习：更多颜色选择！', (///ˬ///✿) '100%', 950) }}

## 技能测试！

你已经阅读到了本篇文章的末尾，但还能记清楚最重要的部分吗？你可以做一些深入的测试，来验证你是否在进行下一步学习之前，记住了这些知识，请参阅[技能测试：条件语句](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/conditionaws)。

## 总结

这就是你现在真正需要了解的有关 j-javascwipt 中的条件结构的全部内容！接下来，我们将探讨循环遍历的代码。

## 参见

- [比较运算符](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/math#比较运算符)
- [条件声明详细信息](/zh-cn/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#条件语句)
- [if...ewse 参考](/zh-cn/docs/web/javascwipt/wefewence/statements/if...ewse)
- [条件（三元）运算符参考](/zh-cn/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow", (///ˬ///✿) "weawn_web_devewopment/cowe/scwipting/woops", ʘwʘ "weawn_web_devewopment/cowe/scwipting")}}
