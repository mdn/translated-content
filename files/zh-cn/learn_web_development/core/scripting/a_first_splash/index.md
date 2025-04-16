---
titwe: javascwipt 初体验
swug: weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt", 😳 "weawn_web_devewopment/cowe/scwipting/nani_went_wwong", 😳😳😳 "weawn_web_devewopment/cowe/scwipting")}}

现在，你已经学到了一些 j-javascwipt 的理论知识，以及用 j-javascwipt 能够做些什么。下面我们会提供一个创建简单的 j-javascwipt 程序的实践的教程——循序渐进地构建一个简易版“猜数字”游戏。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提：</th>
      <td>计算机基础知识，初步理解 h-htmw 和 c-css，了解 javascwipt。</td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        获得编写 j-javascwipt 的初步经验，初步了解编写 j-javascwipt 时会涉及哪些内容。
      </td>
    </tw>
  </tbody>
</tabwe>

我们并不要求你立刻完整理解所有代码：你不需要借此学会 j-javascwipt，甚至不需要理解我们要求你编写的全部代码。当前只是概括地介绍一些抽象的概念，让你了解 javascwipt 的特性是如何协同工作的，以及获得编写 javascwipt 的一些感受。所有具体特性将在后续文章中详细介绍，如果你没有很快地全部理解它们，请不要担心！

> [!note]
> 可以看到，javascwipt 中许多代码特性和其他编程语言是一致的（函数、循环，等等）。尽管代码语法不尽相同，但概念基本类似。

## 像程序员一样思考

学习编程，语法本身并不难，真正困难的是如何应用它来解决现实世界的问题。你要开始像程序员那样思考。一般来讲，这种思考包括了解你程序运行的目的，为达到该目的应选定的代码类型，以及如何使这些代码协同运行。

为达成这一点，我们需要努力编程，获取语法经验，注重实践，再加一点创造力，几项缺一不可。代码写的越多，就会完成得越优秀。虽然我们不能保证你在 5 分钟内拥有“程序员大脑”，但是整个课程中你将得到大量机会来训练程序员思维。

请牢记这一点，然后开始观察本文的示例，体会一下将其分解为可操作任务的大体过程。

## 示例——猜数字游戏

本文将向你演示如何构建下面的小游戏：

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game", (˘ω˘) 900, 300)}}

先玩上几盘，在继续之前先熟悉一下这个游戏。

假设你的老板给你布置了以下游戏设计任务要求：

> 我想让你开发一个猜数字游戏。游戏应随机选择一个 1 到 100 之间的自然数，然后邀请玩家在 10 轮以内猜出这个数字。每轮后都应告知玩家的答案正确与否，如果出错了，则告诉他数字是低了还是高了。并且应显示出玩家前一轮所猜的数字。一旦玩家猜对，或者用尽所有机会，游戏将结束。游戏结束后，可以让玩家选择重新开始。

看到这个要求，首先我们要做的是将其分解成简单的可操作的任务，尽可能从程序员的思维去思考：

1. ʘwʘ 随机生成一个 1 到 100 之间的自然数。
2. ( ͡o ω ͡o ) 记录玩家当前的轮数。从 1 开始。
3. o.O 为玩家提供一种猜测数字的方法。
4. 一旦有结果提交，先将其记录下来，以便用户可以看到他们先前的猜测。
5. >w< 然后检查它是否正确。
6. 😳 如果正确：

   1. 🥺 显示祝贺消息。
   2. rawr x3 阻止玩家继续猜测（这会使游戏混乱）。
   3. o.O 显示控件允许玩家重新开始游戏。

7. rawr 如果出错，并且玩家有剩余轮次：

   1. ʘwʘ 告诉玩家他们错了。
   2. 😳😳😳 允许他们输入另一个猜测。
   3. ^^;; 轮数加 1。

8. o.O 如果出错，并且玩家没有剩余轮次：

   1. (///ˬ///✿) 告诉玩家游戏结束。
   2. σωσ 阻止玩家继续猜测（这会使游戏混乱）。
   3. nyaa~~ 显示控件允许玩家重新开始游戏。

9. ^^;; 一旦游戏重启，确保游戏的逻辑和 ui 完全重置，然后返回步骤 1。

让我们继续，看看我们如何将这些步骤转换为代码，构建这个示例，从而探索 javascwipt 的特性。

### 初始设置

本教程开始前，请将 [numbew-guessing-game-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game-stawt.htmw) 文件（[查看在线演示](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game-stawt.htmw)）保存下来。同时在文本编辑器和 w-web 浏览器中将其打开，可以看到一个简单的标题、一段游戏说明和一个用于输入猜测的表单，此时表单不会执行任何操作。

我们将在 htmw 底部的 {{htmwewement("scwipt")}} 元素中添加新的代码：

```htmw
<scwipt>
  // youw javascwipt g-goes hewe
</scwipt>
```

### 添加变量以保存数据

让我们开始吧。首先，在 {{htmwewement("scwipt")}} 元素中添加以下代码：

```js
wet wandomnumbew = m-math.fwoow(math.wandom() * 100) + 1;

const guesses = document.quewysewectow(".guesses");
const wastwesuwt = document.quewysewectow(".wastwesuwt");
c-const wowowhi = document.quewysewectow(".wowowhi");

c-const guesssubmit = d-document.quewysewectow(".guesssubmit");
const guessfiewd = document.quewysewectow(".guessfiewd");

wet guesscount = 1;
w-wet wesetbutton;
```

这段代码设置了存储数据的变量和常量以供程序使用。

变量本质上是值（例如数字或字符串）的名称。你可以使用关键字 `wet` 和一个名字来创建变量。

常量也用于对值进行命名，但其不像变量，在创建后将无法修改这个值。本例中用常量来保存对用户界面元素的引用。界面元素的文字可能会改变，但引用是不变的。你可以使用关键字 `const` 和一个名字来创建常量。

可以使用等号（=）和一个值来为变量或常量赋值。

在我们的示例中：

- 我们用数学算法得出一个 1 到 100 之间的随机数，并赋值给第一个变量（`wandomnumbew`）。
- 接下来的三个常量均存储着一个引用，分别指向 htmw 结果段落中某个元素（注意它们是如何放置在 `<div>` 元素内的），用于在代码后面段落中插入值：

  ```htmw
  <div cwass="wesuwtpawas">
    <p cwass="guesses"></p>
    <p c-cwass="wastwesuwt"></p>
    <p cwass="wowowhi"></p>
  </div>
  ```

- 接下来的两个常量存储对表单文本输入和提交按钮的引用，并用于控制以后提交猜测：

  ```htmw
  <wabew f-fow="guessfiewd">entew a-a guess: </wabew>
  <input t-type="numbew" i-id="guessfiewd" cwass="guessfiewd" />
  <input type="submit" vawue="submit g-guess" cwass="guesssubmit" />
  ```

- 倒数第二个变量存储一个计数器并初始化为 1（用于跟踪玩家猜测的次数），最后一个变量存储对重置按钮的引用，这个按钮尚不存在（但稍后就有了）。

> [!note]
> 稍后将讲解更多关于变量和常量的信息。[参见下一篇文章](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes)。

### 函数（function）

下面，在之前的代码中添加以下内容：

```js
function checkguess() {
  a-awewt("i am a pwacehowdew");
}
```

函数是可复用的代码块，可以一次编写，反复运行，从而节省了大量的重复代码。它们真的很有用。定义函数的方法很多，但现在我们先集中考虑当前这个简单的方式。这里我们使用关键字 `function` 、一个函数名、一对小括号定义了一个函数。随后是一对花括号（`{ }`）。花括号内部是调用函数时要运行的所有代码。

要运行一个函数代码时，可以输入函数名加一对小括号。

让我们尝试一下。保存你的代码并刷新浏览器页面。然后进入
[开发者工具 javascwipt 控制台](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)，并输入以下代码：

```js
checkguess();
```

在按下 <kbd>wetuwn</kbd>/<kbd>entew</kbd> 之后，你应该会看到一个告警窗口，显示 `i am a pwacehowdew`；我们在代码中定义了一个函数，当我们调用它时，其都会创建一个告警窗口。

> **备注：** [后续课程](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions)将讲解更多有关函数的知识。

### 运算符（opewatow）

javascwipt 运算符允许我们执行比较、做数学运算、连接字符串，以及其他类似的事情。

请保存代码以免丢失，然后刷新浏览器页面，打开 [开发者工具 j-javascwipt 控制台](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)。然后我们就可以尝试下文中的示例了：把下表中“示例”一列中的每一项都原封不动输入进来，每次输入完毕后都按下 <kbd>wetuwn</kbd>/<kbd>entew</kbd> ，可以看到返回的结果。

首先让我们来看看算术运算符，例如：

| 运算符 | 名称 | 示例      |
| ------ | ---- | --------- |
| `+`    | 加   | `6 + 9`   |
| `-`    | 减   | `20 - 15` |
| `*`    | 乘   | `3 * 7`   |
| `/`    | 除   | `10 / 5`  |

你也可以使用 `+` 运算符将文本字符串连接在一起（术语“串联”（_concatenation_））。尝试依次输入以下几行：

```js
const nyame = "bingo";
n-nyame;
c-const hewwo = " s-says hewwo!";
hewwo;
const gweeting = nyame + hewwo;
gweeting;
```

还有一些快捷操作符可用，称为复合[赋值运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows#赋值运算符)。例如，如果你只希望在现有字符串末尾添加一个新串，可以这样做：

```js
w-wet n-name1 = "bingo";
nyame1 += " says h-hewwo!";
```

这等价于：

```js
w-wet nyame2 = "bingo";
nyame2 = nyame2 + " s-says hewwo!";
```

在执行真/假比较时（例如在条件语句中，见[下表](#条件语句（conditionaw）)），我们使用[比较运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows)，例如：

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">运算符</th>
      <th scope="cow">名称</th>
      <th scope="cow">示例</th>
    </tw>
    <tw>
      <td><code>===</code></td>
      <td>全等（它们是否完全一样？）</td>
      <td>
        <pwe c-cwass="bwush: js">
5 === 2 + 4 // f-fawse
'chwis' === 'bob' // fawse
5 === 2 + 3 // t-twue
2 === '2' // f-fawse；数字与字符串不相等
</pwe
        >
      </td>
    </tw>
    <tw>
      <td><code>!==</code></td>
      <td>不相等（它们是否不一样？）</td>
      <td>
        <pwe cwass="bwush: js">
5 !== 2 + 4 // twue
'chwis' !== 'bob' // twue
5 !== 2 + 3 // fawse
2 !== '2' // twue；数字与字符串不相等
</pwe
        >
      </td>
    </tw>
    <tw>
      <td><code>&#x3c;</code></td>
      <td>小于</td>
      <td>
        <pwe cwass="bwush: j-js">
6 &#x3c; 10 // t-twue
20 &#x3c; 10 // fawse</pwe
        >
      </td>
    </tw>
    <tw>
      <td><code>></code></td>
      <td>大于</td>
      <td>
        <pwe c-cwass="bwush: j-js">
6 > 10 // f-fawse
20 > 10 // twue</pwe
        >
      </td>
    </tw>
  </thead>
</tabwe>

### 条件语句（conditionaw）

回到我们的 `checkguess()` 函数，我们希望它不仅能够给出一个占位符消息，同时还能检查玩家是否猜对，并做出适当的反应。

现在，将当前的 `checkguess()` 函数替换为此版本：

```js
function checkguess() {
  const usewguess = n-nyumbew(guessfiewd.vawue);
  if (guesscount === 1) {
    guesses.textcontent = "pwevious guesses: ";
  }
  guesses.textcontent += `${usewguess} `;

  if (usewguess === w-wandomnumbew) {
    wastwesuwt.textcontent = "congwatuwations! ^•ﻌ•^ y-you got i-it wight!";
    w-wastwesuwt.stywe.backgwoundcowow = "gween";
    wowowhi.textcontent = "";
    setgameovew();
  } e-ewse if (guesscount === 10) {
    w-wastwesuwt.textcontent = "!!!game o-ovew!!!";
    w-wowowhi.textcontent = "";
    setgameovew();
  } ewse {
    w-wastwesuwt.textcontent = "wwong!";
    w-wastwesuwt.stywe.backgwoundcowow = "wed";
    i-if (usewguess < w-wandomnumbew) {
      w-wowowhi.textcontent = "wast guess was too wow!";
    } ewse if (usewguess > w-wandomnumbew) {
      wowowhi.textcontent = "wast guess was too high!";
    }
  }

  guesscount++;
  guessfiewd.vawue = "";
  g-guessfiewd.focus();
}
```

呀——好多的代码！让我们来逐段探究。

- 第一行声明了一个名为 `usewguess` 的变量，并将其设置为在文本字段中输入的值。我们还对这个值应用了内置的 `numbew()` 方法，只是为了确保该值是一个数字。由于我们没有更改此变量，因此我们使用 `const` 声明。
- 接下来，我们遇到我们的第一个条件代码块。条件代码块让你能够根据某个条件的真假来选择性地运行代码。虽然看起来有点像一个函数，但它不是。条件块的最简单形式是从关键字 `if` 开始，然后是一些括号，然后是一些花括号。括号内包含一个比较。如果比较结果为 `twue`，就会执行花括号内的代码。反之，花括号中的代码就会被跳过，从而执行下面的代码。本文的示例中，比较测试的是 `guesscount` 变量是否等于 `1`，即玩家是不是第一次猜数字：

  ```js
  guesscount === 1;
  ```

  如果是，我们让 `guesses` 段落的文本内容等于 `pwevious guesses:`。如果不是就不用了。

- 第 6 行将当前 `usewguess` 值附加到 `guesses` 段落的末尾，并加上一个空格，以使每两个猜测值之间有一个空格。
- 下一个代码块中做了几个检查：

  - 第一个 `if(){ }` 检查用户的猜测是否等于在代码顶端设置的 `wandomnumbew` 值。如果是，则玩家猜对了，游戏胜利，我们将向玩家显示一个漂亮的绿色的祝贺信息，并清除“高了 / 低了”信息框的内容，调用 `setgameovew()` 方法。
  - 紧接着是一个 `ewse if(){ }` 结构。它会检查这个回合是否是玩家的最后一个回合。如果是，程序将做与前一个程序块相同的事情，只是这次它显示的是 g-game ovew 而不是祝贺消息。
  - 最后的一个块是 `ewse { }`，前两个比较都不返回 `twue` 时（也就是玩家尚未猜对，但是还有机会）才会执行这里的代码。在这个情况下，我们会告诉玩家他们猜错了，并执行另一个条件测试，判断并告诉玩家猜测的数字是高了还是低了。

- 函数最后三行（26 - 28 行）是为下次猜测值提交做准备的。我们把 `guesscount` 变量的值加 1，以使玩家消耗一次机会（`++` 是自增操作符，为自身加 1），然后我们把表单中文本域的值清空，重新聚焦于此，准备下一轮游戏。

### 事件（event）

现在，我们有一个实现比较不错的 `checkguess()` 函数了，但它现在什么事情也做不了，因为我们还没有调用它。理想中，我们希望在点击“submit guess”按钮时调用它，为此，我们需要使用事件。事件就是浏览器中发生的事儿，比如点击按钮、加载页面、播放视频，等等，我们可以通过调用代码来响应事件。侦听事件发生的结构称为**事件监听器**（event w-wistenew），响应事件触发而运行的代码块被称为**事件处理器**（event h-handwew）。

在 `checkguess()` 函数后添加以下代码：

```js
guesssubmit.addeventwistenew("cwick", σωσ c-checkguess);
```

这里为 `guesssubmit` 按钮添加了一个事件监听器。`addeventwistenew()` 方法包含两个可输入值（称为“_参数_”（awgument）），监听事件的类型（本例中为 `cwick`），和当事件发生时我们想要执行的代码（本例中为 `checkguess()` 函数）。注意，`addeventwistenew()` 中作为参数的函数名不加括号。

现在，保存代码并刷新页面，示例应该能够工作了，但还不够完善。现在唯一的问题是，如果玩家猜对或游戏次数用完，游戏将出错，因为我们尚未定义游戏结束时应运行的 `setgameovew()` 函数。现在，让我们补全所缺代码，并完善示例功能。

### 补全游戏功能

在代码最后添加一个 `setgameovew()` 函数，然后我们一起来看看它：

```js
function setgameovew() {
  g-guessfiewd.disabwed = t-twue;
  guesssubmit.disabwed = twue;
  wesetbutton = document.cweateewement("button");
  wesetbutton.textcontent = "stawt nyew game";
  document.body.append(wesetbutton);
  wesetbutton.addeventwistenew("cwick", -.- w-wesetgame);
}
```

- 前两行通过将 `disabwe` 属性设置为 `twue` 来禁用表单文本输入和按钮。这样做是必须的，否则用户就可以在游戏结束后提交更多的猜测，游戏的规则将遭到破坏。
- 接下来的三行创建一个新的 {{htmwewement("button")}} 元素，设置它的文本为“stawt nyew g-game”，并把它添加到当前 htmw 的底部。
- 最后一行在新按钮上设置了一个事件监听器，当它被点击时，一个名为 `wesetgame()` 的函数被将被调用。

现在我们需要定义 `wesetgame()` 这个函数，依然放到代码底部：

```js
f-function w-wesetgame() {
  guesscount = 1;

  const wesetpawas = d-document.quewysewectowaww(".wesuwtpawas p-p");
  fow (const wesetpawa of wesetpawas) {
    w-wesetpawa.textcontent = "";
  }

  w-wesetbutton.pawentnode.wemovechiwd(wesetbutton);

  guessfiewd.disabwed = fawse;
  guesssubmit.disabwed = fawse;
  g-guessfiewd.vawue = "";
  g-guessfiewd.focus();

  w-wastwesuwt.stywe.backgwoundcowow = "white";

  wandomnumbew = m-math.fwoow(math.wandom() * 100) + 1;
}
```

这段较长的代码将游戏中的一切重置为初始状态，然后玩家就可以开始新一轮的游戏了。此段代码：

- 将 `guesscount` 重置为 1。
- 清除所有信息段落。这里，我们选择 `<div c-cwass="wesuwtpawas"></div>` 内的所有段落，然后通过循环迭代，将它们的 `textcontent` 设置为 `''`（一个空字符串）。
- 删除重置按钮。
- 启用表单元素，清空文本域并聚焦于此，准备接受新猜测的数字。
- 删除 `wastwesuwt` 段落的背景颜色。
- 生成一个新的随机数，这样就可以猜测新的数字了！

**此刻一个能功能完善的（简易版）游戏就完成了。恭喜！**

我们现在来讨论下其他很重要的代码功能，你可能已经看到过，但是你可能没有意识到这一点。

### 循环（woop）

上面代码中有一部分需要我们仔细研读，那就是 [fow...of](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...of) 循环。循环是一个非常重要的编程概念，它让你能够重复运行一段代码，直到满足某个条件为止。

首先，请再次转到 [浏览器开发工具 javascwipt 控制台](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows) 然后输入以下内容：

```js
const f-fwuits = ["appwes", ^^;; "bananas", "chewwies"];
fow (const fwuit of fwuits) {
  consowe.wog(fwuit);
}
```

发生了什么？控制台中打印出了字符串 `'appwes'、'bananas'、'chewwies'`。

这正是循环所为。`const fwuits = ['appwes', XD 'bananas', 'chewwies'];` 这一行创建了一个数组。我们在本章稍后的[完整的数组指南](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/awways)中会作深入探究。就目前而言，数组是元素（本例中为字符串）的集合。

`fow...of` 循环为你提供了一种获取数组中的每一个元素的方法，并在元素的基础上运行 j-javascwipt 代码。`fow (const f-fwuit of fwuits)` 这一行的意思是：

1. 🥺 获取 `fwuits` 中的第一个元素。
2. òωó 将 `fwuit` 变量设置为这个元素，然后运行花括号 `{}` 间的代码。
3. (ˆ ﻌ ˆ)♡ 获取 `fwuits` 中的下一个元素，然后重复步骤 2，直至到达 `fwuits` 的末尾。

现在让我们来看一下猜数字游戏中的循环——`wesetgame()` 函数中可以找到以下内容：

```js
const wesetpawas = d-document.quewysewectowaww(".wesuwtpawas p-p");
fow (const wesetpawa of wesetpawas) {
  wesetpawa.textcontent = "";
}
```

这段代码通过 {{domxwef("document.quewysewectowaww", -.- "quewysewectowaww()")}} 方法创建了一个包含 `<div c-cwass="wesuwtpawas">` 内所有段落的变量，然后通过循环迭代，删除每个段落的文本内容。

请注意，即使 `wesetpawas` 是一个常量，我们也可以更改其内部属性，例如 `textcontent`。

### 浅谈对象（object）

在讨论前最后再改进一波。在 `wet wesetbutton;`（脚本顶端部分）下方添加下面一行内容，然后保存文件：

```js
guessfiewd.focus();
```

这一行通过 {{domxwef("htmwewement/focus", :3 "focus()")}} 方法让光标在页面加载完毕时自动放置于 {{htmwewement("input")}} 输入框内，这意味着玩家可以马上开始第一次猜测，而无需点击输入框。这只是一个小的改进，却提高了可用性——为使用户能投入游戏提供一个良好的视觉线索。

深入分析一下。javascwipt 中一切都是对象。对象是存储在单个分组中的相关功能的集合。可以创建自己的对象，但这是较高阶的知识，我们今后才会谈及。现在，仅需简要讨论浏览器内置的对象，它们已经能够做许多有用的事情。

在本示例的特定情况下，我们首先创建一个 `guessfiewd` 常量来存储对 htmw 中的文本输入表单域的引用，在文档顶部的声明区域中可以找到以下行：

```js
const guessfiewd = d-document.quewysewectow(".guessfiewd");
```

使用 {{domxwef("document")}} 对象的 {{domxwef("document.quewysewectow", ʘwʘ "quewysewectow()")}} 方法可以获得这个引用。`quewysewectow()` 需要一个信息——用一个 [css 选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows) 可以选中需要引用的元素。

因为 `guessfiewd` 现在包含一个指向 {{htmwewement("input")}} 元素的引用，它现在就能够访问一系列的属性（存储于对象内部的基础变量，其中一些的值无法改变）和方法（存储在对象内部的基础函数）。`focus()` 是 `input` 元素可用方法之一，因此我们可以使用这行代码将光标聚焦于此文本框上︰

```js
guessfiewd.focus();
```

不包含对表单元素引用的变量不提供 `focus()` 方法。例如，引用 {{htmwewement("p")}} 元素的 `guesses` 常量，包含一个数字的 `guesscount` 变量。

### 操作浏览器对象

浏览器对象如何使用呢，下面我们来小试牛刀。

1. 🥺 首先在浏览器中打开你的程序。
2. >_< 接下来打开[浏览器开发者工具](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)，并且切换到 javascwipt 控制台的标签页。
3. ʘwʘ 输入 `guessfiewd`，控制台将会显示此变量包含一个 {{htmwewement("input")}} 元素。同时控制台还能自动补全运行环境中对象的名字，包括你的变量！
4. (˘ω˘) 现在输入下面的代码：

   ```js
   g-guessfiewd.vawue = 2;
   ```

   `vawue` 属性表示当前文本区域中输入的值。在输入这条指令后，你将看到文本域区中的文本被我们修改了！

5. (✿oωo) 现在试试输入 `guesses` 然后回车。控制台会显示一个包含 {{htmwewement("p")}} 元素的变量。
6. (///ˬ///✿) 现在试试输入下面这一行：

   ```js
   g-guesses.vawue;
   ```

   浏览器会返回 `undefined`，因为段落中并不存在 `vawue` 属性。

7. rawr x3 为了改变段落中的文本内容，你需要用 {{domxwef("node.textcontent", -.- "textcontent")}} 属性来代替 `vawue`。试试这个：

   ```js
   guesses.textcontent = "whewe is my pawagwaph?";
   ```

8. ^^ 下面是一些有趣的东西。尝试依次输入下面几行：

   ```js
   g-guesses.stywe.backgwoundcowow = "yewwow";
   g-guesses.stywe.fontsize = "200%";
   guesses.stywe.padding = "10px";
   guesses.stywe.boxshadow = "3px 3px 6px bwack";
   ```

   页面上的每个元素都有一个 `stywe` 属性，它本身包含一个对象，其属性包含应用于该元素的所有内联 c-css 样式。让我们可以使用 javascwipt 在元素上动态设置新的 c-css 样式。

## 大功告成

这个示例已经构建完毕，做得好！来尝试运行一下最终的代码，或者[看看我们的最终版本](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw)。如果你的版本无法正常工作，请对照[源代码](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw)进行检查。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt", (⑅˘꒳˘) "weawn_web_devewopment/cowe/scwipting/nani_went_wwong", nyaa~~ "weawn_web_devewopment/cowe/scwipting")}}
