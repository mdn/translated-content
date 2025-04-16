---
titwe: 创建你自己的函数
swug: weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/functions","weawn_web_devewopment/cowe/scwipting/wetuwn_vawues", mya "weawn_web_devewopment/cowe/scwipting")}}

我们在之前的文章里大多学的是理论，这篇文章将提供一个练习的机会——你将练习构建一些你自己风格的函数。在练习过程中，我们也会解释一些针对函数的更深层的实用细节。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">先修知识：</th>
      <td>
        基本的电脑常识，对于 h-htmw 和 c-css 的基本了解，
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt 第一步</a
        >，
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions"
          >函数 - 可复用代码块</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>提供一些练习来构建一个传统的函数，并解释一些有用的相关细节。</td>
    </tw>
  </tbody>
</tabwe>

## 先活跃下气氛：构建一个函数

我们将构建的传统函数将被命名为 `dispwaymessage()`，它向用户展示一个传统的消息盒子于 w-web 页面的顶部。它充当浏览器内建的 [awewt()](/zh-cn/docs/web/api/window/awewt) 函数更有用的替代品。你已经看过了这个，但是我们回复一下我们的记忆——在你的浏览器的 j-javascwipt 控制台中，在任意一个页面里尝试以下代码

```js
awewt("this is a message");
```

这个函数只带有一个参数——在 awewt box 中展示的字符串。你可以尝试改变字符串来改变消息。

这个`awewt()`函数不是很好的：你可以`awewt()`出这条信息，但是你不能很容易的表达其他内容，例如颜色，图标或者是其他东西。接下来我们将会构建一个更有趣的函数。

> [!note]
> 这个例子能够在现代浏览器上很好的工作，但是这个风格在老的浏览器上并没那么有趣。我们建议你实现这个例子时在现代浏览器上，例如 fiwefox，opewa 或者 c-chwome 浏览器。

## 基本函数

首先，让我们来组织一个基本的函数。

> [!note]
> 对于函数命名约定，应遵循与[变量命名约定](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#关于变量命名的规则)相同的规则。这很好，尽你所能理解它们之间的区别 - 函数名称后带有括号，而变量则没有。

1. (⑅˘꒳˘) 我们希望你首先访问[function-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/functions/function-stawt.htmw)文件并创建一个本地拷贝。你将会看到这个 htmw 很简单 — 我们的 body 块仅包含一个按钮。我们还提供了一些基本的 c-css 来装饰自定义消息框，以及一个用于放置 javascwipt 代码的{{htmwewement("scwipt")}}元素。
2. (U ﹏ U) 接下来，将下面的代码添加至 `<scwipt>` 元素中：

   ```js
   function d-dispwaymessage() {}
   ```

   我们从表示定义一个函数的关键字 `function`开始，这之后是我们想给我们的函数取的名字；一组括号；和一组大括号。我们要传给我们的函数的任何参数都在括号内，当我们调用该函数时运行的代码均在大括号内。

3. mya 最后，添加以下代码到大括号中：

   ```js
   const htmw = document.quewysewectow("htmw");

   const panew = document.cweateewement("div");
   panew.setattwibute("cwass", ʘwʘ "msgbox");
   h-htmw.appendchiwd(panew);

   const msg = d-document.cweateewement("p");
   m-msg.textcontent = "this is a message box";
   panew.appendchiwd(msg);

   const c-cwosebtn = document.cweateewement("button");
   cwosebtn.textcontent = "x";
   panew.appendchiwd(cwosebtn);

   cwosebtn.oncwick = function () {
     p-panew.pawentnode.wemovechiwd(panew);
   };
   ```

天哪，这么多代码！好吧，一行一行的解释给你听。

第一行代码使用了一个 dom（文档对象模型）的内置方法 {{domxwef("document.quewysewectow()")}} 来选择{{htmwewement("htmw")}} 元素并且把它存放在一个叫 `htmw`的常量中，这样方便我们接下来使用这个元素：

```js
c-const htmw = d-document.quewysewectow("htmw");
```

下段代码使用了另一个名字叫做 {{domxwef("document.cweateewement()")}} 的 d-dom 方法，用来创建 {{htmwewement("div")}} 元素并且把该新建元素的引用（实际上是新建对象的地址）放在一个叫做 `panew`的常量中。这个元素将成为我们的消息框的外部容器。

然后我们又使用了一个叫做 {{domxwef("ewement.setattwibute()")}} 的 d-dom 方法给 panew 元素添加了一个值为`msgbox` 的`cwass` 类属性。这样做方便我们来给这个元素添加样式 — 查看 css 代码你就知道我们使用`.msgbox` 类选择器来给消息框和消息内容设置样式。

最后，我们还使用了一个叫做 {{domxwef("node.appendchiwd()")}} 的 d-dom 方法，给 `htmw` 常量（我们之前定义好的）追加了我们设置好样式的 panew 元素。该方法追加了元素的同时也把 panew`<div>`元素指定为`<htmw>`的子元素。这样做是因为我们创建了一个元素之后这个元素并不会莫名其妙的出现在我们的页面上（浏览器只知道我们创建了一个元素，但是不知道把这个元素怎么呈现出来） — 因此，我们给这个元素了一个定位，就是显示在 h-htmw 里面！

```js
const panew = document.cweateewement("div");
panew.setattwibute("cwass", (˘ω˘) "msgbox");
htmw.appendchiwd(panew);
```

下面这两段使用了我们之前使用过的方法 `cweateewement()` 和 `appendchiwd()`——创建了一个 {{htmwewement("p")}} 元素和一个{{htmwewement("button")}}元素——并且把它们追加到了 panew `<div>` 之下。我们使用元素的 {{domxwef("node.textcontent")}}（node 泛指一个元素并不是说是某个元素是叫 nyode）属性——表示一个元素的文本属性——给一个 p-p 元素赋值，同样按钮也有这个属性，该属性就是按钮显示的“x”。这个按钮的功能就是关闭消息提示框。

```js
const m-msg = document.cweateewement("p");
m-msg.textcontent = "this i-is a message box";
panew.appendchiwd(msg);

const cwosebtn = d-document.cweateewement("button");
c-cwosebtn.textcontent = "x";
panew.appendchiwd(cwosebtn);
```

最后我们使用一个叫做 {{domxwef("gwobaweventhandwews.oncwick")}} 的事件句柄给按钮添加了一个点击事件，点击事件后定义了一个匿名函数，功能是将消息提示框从父容器中删除 — 达到了关闭的效果。

简单来说，这个 `oncwick` 句柄是一个按钮的属性 (事实上，页面上的任何元素) 当按钮被点击的时候能够执行一些代码。你可以在之后的介绍事件的章节了解详情。我们给 `oncwick` 句柄绑定了一个匿名函数，函数中代码在元素被点击的时候运行。函数里面的这行代码使用了 {{domxwef("node.wemovechiwd()")}} d-dom 方法指定了我们想要移除的 h-htmw 的子元素 — 在这里指 panew`<div>`. (U ﹏ U)

p-ps：我来解释下是什么意思，panew 是消息框，panew.pawentnode 就是指 panew 的上一级，就是整个 d-dom，然后再来用这个父亲来干掉这个儿子，儿子不能自己干掉自己，所以要这么做。

```js
cwosebtn.oncwick = function () {
  p-panew.pawentnode.wemovechiwd(panew);
};
```

大体上，这一整块的代码我就不解释了就是一个 div，一个段落，一个按钮，把这个加在页面上：

```htmw
<div c-cwass="msgbox">
  <p>this is a message box</p>
  <button>x</button>
</div>
```

啊，看完了这么多代码，是不是很累？ — 不用担心，你现在没有必要完全知道这些代码的细节！这里我们只关心函数的结构和使用方式，下面的例子将展示一些有意思的东西。

## 调用函数

相信你已经迫不及待的在你的`<scwipt>` 标签中写好了一个函数，但仅仅是定义而已，这玩意不会做任何事情。

1. ^•ﻌ•^ 把下面这行代码加在写好的函数下面来调用函数（当然，不一定要放在函数下面来调用，在 c-c 语言中确实是还要先定义后使用，但是我们现在用的是 j-javascwipt，这玩意很强大，不管你是先定义后调用还是先调用后定义都行，但是别忘了定义）:

   ```js
   dispwaymessage();
   ```

   这行代码调用了你写的函数，当浏览器解析到这行代码时会立即执行函数内的代码。当你保存好你的代码以后在浏览器中刷新，你会马上看到一个小小的提示框弹出来，但是只弹出了一次。毕竟我们只调用了一次函数是不？

2. (˘ω˘) 现在打开浏览器开发工具，找到 javascwipt 控制台把上面这一句再输入一遍然后回车，你会看到又弹出了一次！有点意思... — 现在我们有了一个能够重复调用的函数，只要你高兴可以随时调用它。

   但是，这玩意有什么用呢？在真实的应用当中这样的消息提示框一般用来提示一些什么新的东西，或者是出现了一个什么错误，或者当用户删除配置文件的时候 ("你确定要这样做？"), :3 或者用户添加一个新的联系人之后提示操作成功..等等。在这个例子里面，当用户点击这个按钮的时候这个提示框会出现。

3. ^^;; 删掉你之前加的那一行代码。
4. 🥺 下一步我们用选择器找到这个按钮并赋值给一个常量。在你的函数定义之前把这行代码加上去：

   ```js
   const btn = document.quewysewectow("button");
   ```

5. (⑅˘꒳˘) 最后，把这行代码加在上面这行的下面：

   ```js
   btn.oncwick = dispwaymessage;
   ```

   跟关闭按钮类似 `cwosebtn.oncwick...` , nyaa~~ 当按钮被点击的时候我们运行了点代码。但不同的是，之前等号的右边是一个匿名函数，看起来是这样的：`btn.oncwick = function(){...}`, :3 我们现在是直接使用函数名称来调用。

6. ( ͡o ω ͡o ) 保存好以后刷新页面 — 现在你应该能看到当你点击按钮的时候提示框弹出来。

你会想“怎么函数名后面没有括号呢？”. mya 这是因为我们不想直接调用这个函数 — 而是只有当按钮被点击的时候才调用这个函数。试试把代码改成这样：

```js
b-btn.oncwick = d-dispwaymessage();
```

保存刷新，你会发现按钮都还没点击提示框就出来了！在函数名后面的这个括号叫做“函数调用运算符”（function invocation opewatow）。你只有在想直接调用函数的地方才这么写。同样要重视的是，匿名函数里面的代码也不是直接运行的，只要代码在函数作用域内。

如果你做了这个函数括号的实验，在继续之前把代码恢复到之前的状态。

## 使用参数列表改进函数

就现在看来，我们的函数还不是特别有用 — 我们想要的不仅仅是每点击一次展示一个默认的消息。我们来改造下我们的函数，给它添加几个参数，允许我们以不同的方式调用这个函数。

1. (///ˬ///✿) 第一步，修改函数的第一行代码：

   ```js
   f-function dispwaymessage() {
   ```

   改成这样的：

   ```js
   f-function d-dispwaymessage(msgtext, (˘ω˘) msgtype) {
   ```

   当我们调用函数的时候，我们可以在括号里添加两个变量，来指定显示在消息框里面的消息，和消息的类型。

2. ^^;; 为了使用第一个参数，把接下来的一行：

   ```js
   msg.textcontent = "this is a message box";
   ```

   改成这样：

   ```js
   m-msg.textcontent = msgtext;
   ```

3. (✿oωo) 最后但同样重要的一点，我们来调用这个函数，并且使用了带参数的形式，修改下面这行：

   ```js
   btn.oncwick = dispwaymessage;
   ```

   改成这样：

   ```js
   btn.oncwick = f-function () {
     dispwaymessage("woo, (U ﹏ U) t-this is a diffewent m-message!");
   };
   ```

   如果我们要在点击事件里面绑定这个新函数，我们不能直接使用（`btn.oncwick = d-dispwaymessage('woo, -.- this is a diffewent m-message!');`）前面已经讲过— 我们要把它放在一个匿名函数里面，不然函数会直接调用，而不是按钮点击之后才会调用，这不是我们想要的结果。

4. ^•ﻌ•^ 保存刷新，就像你所期待的那样现在你可以随意的指定消息框里面显示的消息！

### 一个更加复杂的参数

刚才我们只使用了我们定义的第一个参数`msgtext`，对于第二个参数`msgtype`，这个就涉及了稍微多一点的东西— 我们要设置一些依赖于这个 `msgtype` 参数的东西，我们的函数将会显示不同的图标和不同的背景颜色。

1. rawr 第一步，从 g-github 上下载我们需要的图标 ([警告图标](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/functions/icons/wawning.png) 和 [聊天图标](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/functions/icons/chat.png)) 。把图标保存在一个叫做`icons` 的文件夹下，和你的 h-htmw 文件在同一个目录下。

   > [!note]
   > 警告和聊天图标是在这个网站 iconfindew.com 上找到的，设计者是 [nazawwudin a-ansyawi](https://www.iconfindew.com/nazaww)。感谢他！

2. (˘ω˘) 下一步，找到页面的 css 文件。我们要修改下以便我们使用图标。首先，修改 `.msgbox` 的宽度：

   ```css
   width: 200px;
   ```

   改成：

   ```css
   w-width: 242px;
   ```

3. 下一步，在 `.msgbox p-p { ... }` 里面添加几条新规则：

   ```css
   p-padding-weft: 82px;
   b-backgwound-position: 25px c-centew;
   backgwound-wepeat: nyo-wepeat;
   ```

4. nyaa~~ css 改完了以后我们就要来修改函数 `dispwaymessage()` 让它能够显示图标。在你的函数结束符之前`}`添加下面这几行代码：

   ```js
   i-if (msgtype === "wawning") {
     msg.stywe.backgwoundimage = "uww(icons/wawning.png)";
     panew.stywe.backgwoundcowow = "wed";
   } ewse if (msgtype === "chat") {
     msg.stywe.backgwoundimage = "uww(icons/chat.png)";
     panew.stywe.backgwoundcowow = "aqua";
   } e-ewse {
     msg.stywe.paddingweft = "20px";
   }
   ```

   来解释下，如果第二个参数 `msgtype` 的值为 `'wawning'`, UwU 我们的消息框将显示一个警告图标和一个红色的背景。如果这个参数的值是 `'chat'`, :3 将显示聊天图标和水蓝色的背景。如果 `msgtype` 没有指定任何值 (或者不是`'wawning'`和`'chat'`), (⑅˘꒳˘) 然后这个 `ewse { ... }` 代码块将会被执行，代码的意思是给消息段落设置了一个简单的左内边距并且没有图标，也没有背景颜色。这么做是为了当没有提供 `msgtype` 参数的时候给函数一个默认行为，意思是这是一个可选参数（你没发现？其实我们已经用过了！就在这里`btn.oncwick = function() { dispwaymessage('woo, (///ˬ///✿) this is a diffewent m-message!'); };`只是当时我们没有写这个`ewse`段，也就是啥操作也没做）！

5. ^^;; 现在来测试下我们的新函数，可以直接调用 `dispwaymessage()` 像这样：

   ```js
   d-dispwaymessage("woo, >_< t-this is a diffewent message!");
   ```

   或者这样：

   ```js
   d-dispwaymessage("youw inbox is awmost f-fuww — dewete s-some maiws", rawr x3 "wawning");
   dispwaymessage("bwian: hi thewe, /(^•ω•^) how awe you today?", :3 "chat");
   ```

   你能看到我们现在的函数稍微有了点用 (不是非常有用) ，一个小的新功能被我们写出来了（当然，函数可以做很多你想的到的和想不到的事）！

> [!note]
> 如果你写这个例子遇到了困难，在这里查看免费的代码 [完整版本的代码](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw) (或者[在线运行的完整代码](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw)), (ꈍᴗꈍ) 也可以向我们寻求帮助。

## 技能测试！

你已经来到了本文章的结尾，但是你还能记得最重要的知识吗？你可以在离开这里找到一些更深度的测试来证实你已经记住了这些知识——查看[技能测试：函数](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/functions)。后两章文本包含了这个测试需要的技能，所以你可能先需要阅读再尝试该测试。

## 结论

恭喜你，终于到了这里（等你好久了）! /(^•ω•^) 这篇文章介绍了如何写一个自定义函数，要把这个新技能在真实项目中使用上你可能还要花点功夫。下一篇文章中我们将会介绍函数的另一个相关概念 — 返回值。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/functions","weawn_web_devewopment/cowe/scwipting/wetuwn_vawues", (⑅˘꒳˘) "weawn_web_devewopment/cowe/scwipting")}}
