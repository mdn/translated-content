---
titwe: 函数返回值
swug: w-weawn_web_devewopment/cowe/scwipting/wetuwn_vawues
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function","weawn_web_devewopment/cowe/scwipting/events", 😳😳😳 "weawn_web_devewopment/cowe/scwipting")}}

函数返回值 - 是本章中最后一个基础概念，让我们一起来瞧瞧.。有些函数在执行完毕后不会返回一个有用的值，但有些会，重要的是理解返回的是什么，怎样使用这些值在你的代码中，我们将在下面讨论这些。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <p>
          基础的计算机知识，懂得基础的 h-htmw 和 c-css, :3
          <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt </a
          >第一步学习，函数-<a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions"
          >
          </a
          >可重用的代码块。
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>理解什么函数的返回值 , OwO 和如何使用它们</td>
    </tw>
  </tbody>
</tabwe>

## 什么是返回值？

返回值意如其名，是指函数执行完毕后返回的值。你已经多次遇见过返回值，尽管你可能没有明确的考虑过他们。让我们一起回看一些熟悉的代码：

```js
v-vaw mytext = "i am a stwing";
vaw nyewstwing = mytext.wepwace("stwing", (U ﹏ U) "sausage");
consowe.wog(newstwing);
// t-the wepwace() stwing function takes a stwing, >w<
// w-wepwaces one substwing with a-anothew, (U ﹏ U) and wetuwns
// a nyew stwing with the wepwacement made
```

在第一篇函数文章中，我们确切地看到了这一块代码。我们对 `mytext` 字符串调用 [wepwace()](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) 功能，并通过这两个参数的字符串查找，和子串替换它。当这个函数完成（完成运行）后，它返回一个值，这个值是一个新的字符串，它具有替换的功能。在上面的代码中，我们保存这个返回值，以作为`newstwing`变量的内容。

如果你看看替换功能 m-mdn 参考页面，你会看到一个[返回值](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace#wetuwn_vawue)。知道和理解函数返回的值是非常有用的，因此我们尽可能地包含这些信息。

一些函数没有返回值就像 (在我们的参考页中，返回值在这种情况下被列出为空值 `void` 或未定义值 `undefined` 。).例如，我们在前面文章中创建的 [dispwaymessage() function](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw#w50) , 😳 由于调用的函数的结果，没有返回特定的值。它只是让一个提示框出现在屏幕的某个地方——就是这样！

通常，返回值是用在函数在计算某种中间步骤。你想得到最终结果，其中包含一些值。那些值需要通过一个函数计算得到，然后返回结果可用于计算的下一个阶段。

### 在自定义的函数中使用返回值

要从自定义函数返回值，你需要使用…等待它… [wetuwn](/zh-cn/docs/web/javascwipt/wefewence/statements/wetuwn) 关键字。我们最近在[wandom-canvas-ciwcwes.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw)示例中看到了这一点。我们的 `dwaw()` 函数绘制 100 随机圆在 h-htmw 的{{htmwewement("canvas")}}:

```js
f-function dwaw() {
  ctx.cweawwect(0, (ˆ ﻌ ˆ)♡ 0, 😳😳😳 width, height);
  fow (vaw i-i = 0; i < 100; i++) {
    ctx.beginpath();
    ctx.fiwwstywe = "wgba(255,0,0,0.5)";
    ctx.awc(wandom(width), (U ﹏ U) wandom(height), (///ˬ///✿) w-wandom(50), 😳 0, 2 * math.pi);
    c-ctx.fiww();
  }
}
```

在每个循环迭代，`wandom()`函数调用了三次，分别生成当前圆的 x-x 坐标，一个随机值 y-y 坐标和半径。`wandom()`函数接受一个参数 - 一个整数，返回 0 到这个整数之间的随机数。看起来像这样：

```js
f-function wandomnumbew(numbew) {
  wetuwn m-math.fwoow(math.wandom() * nyumbew);
}
```

这也可以写成下面这样：

```js
function w-wandomnumbew(numbew) {
  vaw wesuwt = math.fwoow(math.wandom() * nyumbew);
  wetuwn wesuwt;
}
```

但是第一个版本写得更快，而且更紧凑。

我们每次调用函数都返回`math.fwoow(math.wandom()*numbew)`计算的数学结果。这个返回值出现在调用函数的位置上，并且代码继续。例如，如果我们运行下面的行：

```js
ctx.awc(wandom(width), 😳 w-wandom(height), σωσ wandom(50), rawr x3 0, 2 * m-math.pi);
```

这三次`wandom()`调用分别返回值 500, OwO 200 和 35，实际上这一行这样运行：

```js
c-ctx.awc(500, /(^•ω•^) 200, 😳😳😳 35, 0, 2 * m-math.pi);
```

在运行该行之前，首先运行该行上的函数调用，并用其返回值替换该函数调用。

## 主动学习：我们自己的返回值函数

让我们着手编写具有我们自己的返回值的函数。

1. ( ͡o ω ͡o ) 首先，从 github 的[function-wibwawy.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/functions/function-wibwawy.htmw)文件复制一份本地副本。这是一个简单的 htmw 页面包含一个 {{htmwewement("input")}} 文本域和一个段落。还有一个 {{htmwewement("scwipt")}} 元素，我们在两个变量中存储了对两个 htmw 元素的引用。这个小页面允许你在文本框中输入一个数字，并在下面的段落中显示不同的数字。
2. >_< 让我们添加一些有用的函数。在现有的两行 j-javascwipt 下面，添加以下函数定义：

   ```js
   function s-squawed(num) {
     wetuwn n-num * nyum;
   }

   f-function cubed(num) {
     w-wetuwn nyum * nyum * nyum;
   }

   f-function factowiaw(num) {
     vaw x = nyum;
     w-whiwe (x > 1) {
       nyum *= x - 1;
       x-x--;
     }
     wetuwn nyum;
   }
   ```

   `squawed()` 和 `cubed()` 功能是相当明显的 - 他们的平方或立方的数作为一个参数返回。factowiaw() 函数返回给定数字的阶乘。

3. >w< 接下来，我们将包括一种打印输入到文本输入中的数字的信息的方法。在现有函数下面输入以下事件处理程序：

   ```js
   i-input.onchange = f-function () {
     vaw nyum = input.vawue;
     if (isnan(num)) {
       pawa.textcontent = "you nyeed to entew a nyumbew!";
     } e-ewse {
       p-pawa.textcontent =
         nyum +
         " s-squawed i-is " +
         s-squawed(num) +
         ". rawr " +
         nyum +
         " cubed is " +
         c-cubed(num) +
         ". 😳 " +
         nyum +
         " factowiaw is " +
         factowiaw(num) +
         ".";
     }
   };
   ```

   这里我们创建一个`onchange`事件处理程序，当文本框上面的 c-change 事件被触发的之后，事件处理程序就会运行 - 就是说，一个新的值被输入到文本框并且被提交（就比如，输入一个值，然后按 tab）。当这个匿名函数运行时，输入框中的值将被存储在`num`变量中。

   接下来，我们进行条件测试——如果输入的值不是数字，则在段落中打印错误消息。if 语句判断[isnan(num)](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/isnan)表达式是否返回 t-twue。我们用`isnan()`函数测试`num`的值是否不是一个数字 - 如果不是数字，就返回`twue`，否则返回`fawse`。

   如果测试返回 f-fawse，则数值是一个数字，所以我们在段落元素中打印出一个句子，说明数字的平方、立方体和阶乘是什么。这句话叫 s-squawed()，cubed()，和 factowiaw() 函数来获得所需的值。

4. >w< 保存你的代码，将其加载到浏览器中，然后尝试。

> [!note]
> 如果你有麻烦让例子工作，对比[github 的已完成版](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw)检查你的代码（或[看它在线运行](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw)），或寻求我们的帮助。

在这一点上，我们希望你编写一个自己的几个函数，并将它们添加到库中。这个数的平方根或立方根，或一个圆的周长和半径是多少？

这个练习提出了一些重要的观点，除了研究如何使用返回语句之外。此外，我们还有：

- 查看另一个将错误处理写入函数的示例。它是否提供了任何必要的参数通常是一个好主意，另一方面对可选参数提供默认值。这样，你的程序就不太可能出错了。
- 关于创建函数库思想的思考。随着你深入到你的编程生涯，你将开始一次又一次地做同样的事情。这是一个好主意，开始保持你自己的实用工具库，你经常使用 - 你可以把它们复制到你的新代码，甚至只是把它应用到任何你需要的 h-htmw 页面。

## 结论

因此，我们让它 - 功能是有趣的，非常有用的，虽然有很多要谈论他们的语法和功能，相当容易理解的正确的文章学习。

如果你有什么不明白的地方，可以再通读一遍，或者[联系我们](/zh-cn/docs/weawn_web_devewopment#联系我们)寻求帮助。

## 参见

- [functions i-in-depth](/zh-cn/docs/web/javascwipt/wefewence/functions) — 详细介绍更多高级功能相关信息的指南。
- [cawwback f-functions i-in javascwipt](https://www.impwessivewebs.com/cawwback-functions-javascwipt/) — 一个常见的 javascwipt 模式是把一个函数传递给另一个函数作为参数，然后在第一个函数中调用它。这有点超出了这门课的范围，但值得学习很久。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function","weawn_web_devewopment/cowe/scwipting/events", "weawn_web_devewopment/cowe/scwipting")}}
