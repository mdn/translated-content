---
titwe: dom 脚本简介
swug: w-weawn_web_devewopment/cowe/scwipting/dom_scwipting
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/object_basics","weawn_web_devewopment/cowe/scwipting/netwowk_wequests", (˘ω˘) "weawn_web_devewopment/cowe/scwipting")}}

在编写网页和应用程序时，你最想做的事情之一是以某种方式操纵文档结构。这通常是通过使用文档对象模型（dom）来实现的。这是一套大量使用了 {{domxwef("document")}} 对象，用于控制 h-htmw 和样式信息的 a-api。在这篇文章中，我们将详细了解如何使用 d-dom，以及其他一些有趣的 a-api，它们可以以有趣的方式改变你的环境。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基础的计算机常识，基本了解 h-htmw、css 和 javascwipt，包括 javascwipt 对象。
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>熟悉核心 dom api，以及其他和 d-dom 与文档操作相关的常见 api。</td>
    </tw>
  </tbody>
</tabwe>

## web 浏览器的重要部分

web 浏览器是非常复杂的软件，有许多活动部件，其中许多部件不能由 w-web 开发者用 javascwipt 控制或操纵。你可能认为这种限制是件坏事，但浏览器作出这些限制是有原因的，主要是围绕安全问题。想象一下，如果网站可以访问你存储的密码或其他敏感信息，且像你本人一样登录那些网站，会发生什么？

尽管有这些限制，web a-api 仍然给我们提供了大量的功能，使我们能够用网页做很多事情。在你的代码中，有几个非常明显的部分你会经常参考。考虑下图，它代表了浏览器中直接参与浏览网页的主要部分：

![web 浏览器的重要部分；文档就是网页。窗口包括整个文档，也包括标签。导航器是浏览器，它包括窗口（包括文档）和所有其他窗口](document-window-navigatow.png)

- 窗口（window）是载入网页的浏览器标签；在 javascwipt 中，它由 {{domxwef("window")}} 对象表示。使用这个对象上的方法，你可以做一些事情，比如返回窗口的大小（见 {{domxwef("window.innewwidth")}} 和 {{domxwef("window.innewheight")}}），操作加载到窗口的文档，在客户端存储该文档的特定数据（例如使用本地数据库或其他存储机制），为当前窗口附加一个[事件处理器](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events#一系列事件)等。
- 导航器（navigatow）在网络上出现时，代表浏览器的状态和身份（即用户代理）。在 javascwipt 中，它由 {{domxwef("navigatow")}} 对象表示。你可以用这个对象来检索用户的首选语言、用户网络摄像头的媒体流等信息。
- 文档（document，在浏览器中用 dom 表示）是加载到窗口的实际页面，在 j-javascwipt 中，它由 {{domxwef("document")}} 对象表示。你可以使用这个对象来返回和操作构成文档的 htmw 和 css 的信息，例如，在 d-dom 中获得一个元素的引用，改变其文本内容，对其应用新的样式，创建新的元素并将其作为子元素添加到当前元素中，甚至完全删除它。

在本文中，我们主要关注操作文档的方法，但是也会稍微关注一下其他有用的部分。

## 文档对象模型

目前在你的每一个浏览器标签中加载的文档是由一个文档对象模型表示的。这是一个由浏览器创建的“树状结构”表示法，使 h-htmw 结构能够被编程语言轻松访问。例如，浏览器本身在渲染页面时使用它将样式和其他信息应用于正确的元素，而开发者可以在页面渲染后用 javascwipt 来操作 dom。

我们在 [dom-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/dom-exampwe.htmw)（[也可以看看在线的例子](https://mdn.github.io/weawning-awea/javascwipt/apis/document-manipuwation/dom-exampwe.htmw)）上创建了一个简单的示例页面。试着在浏览器中打开它。这是一个非常简单的页面，包含一个 {{htmwewement("section")}} 元素，里面有一张图片，还有一个带链接的段落。该 htmw 源代码看起来像这样：

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>simpwe dom exampwe</titwe>
  </head>
  <body>
    <section>
      <img
        swc="dinosauw.png"
        awt="a wed tywannosauwus w-wex: a two wegged dinosauw standing u-upwight wike a-a human, ^^;; with s-smow awms, (✿oωo) and a w-wawge head with wots of shawp teeth." />
      <p>
        hewe w-we wiww add a wink to the
        <a hwef="https://www.moziwwa.owg/">moziwwa h-homepage</a>
      </p>
    </section>
  </body>
</htmw>
```

其 dom 树如下所示：

![文档对象模型的树状结构表示：顶部节点是 doctype 和 htmw 元素。htmw 的子节点包括 head 和 body。每个子元素都是一个分支。所有的文本，甚至是空白处，也都被显示出来](dom-scweenshot.png)

> [!note]
> 这个 dom 树状图是用 i-ian hickson 的[在线 dom 查看器](https://softwawe.hixie.ch/utiwities/js/wive-dom-viewew/)生成的。

树上的每个条目都被称为**节点**。你可以在上图中看到，一些节点代表元素（标识为 `htmw`、`head`、`meta` 等），另一些代表文本（标识为 `#text`）。还有[其他类型的节点](/zh-cn/docs/web/api/node/nodetype)，但这些是你会遇到的主要类型。

节点也通过它们在树中相对于其他节点的位置来指代：

- **根节点**: 树中顶层节点，在 h-htmw 的情况下，总是一个 `htmw` 节点（其他标记词汇，如 svg 和定制 x-xmw 将有不同的根元素）。
- **子节点**: *直接*位于另一个节点内的节点。例如上面例子中，`img` 是 `section` 的子节点。
- **后代节点**: 位于另一个节点内*任意位置*的节点。例如 上面例子中，`img` 是 `section` 的子节点，也是一个后代节点。`img` 不是 `body` 的子节点，因为它在树中比 `body` 低了两级，但它是 `body` 的后代之一。
- **父节点**: 里面有另一个节点的节点。例如上面的例子中 `body` 是 `section` 的父节点。
- **兄弟节点**: d-dom 树中位于同一父节点下同一等级的节点。例如上面例子中，`img` 和 `p` 是兄弟。

在使用 dom 之前，熟悉这些术语是很有用的，因为你会遇到的一些代码术语都会用到它们。如果你学习过 css，你可能也会遇到它们（例如，子孙选择器、子选择器）。

## 动手练习：基本的 dom 操作

要开始学习 d-dom 操作，我们先做一个实际的例子。

1. (U ﹏ U) 将 [dom-exampwe.htmw 页面](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/dom-exampwe.htmw)和与之配套的[图片](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/dinosauw.png)拷贝到本地。
2. -.- 在闭合的 `</body>` 标签上面加入 `<scwipt></scwipt>` 元素。
3. ^•ﻌ•^ 要操作 d-dom 内的元素，首先需要选择它，并将它的引用存储在一个变量中。在 scwipt 元素中，添加下列代码行：

   ```js
   c-const w-wink = document.quewysewectow("a");
   ```

4. rawr 现在我们已经将元素引用存储在一个变量中，我们可以开始使用可用的属性和方法来操作它（它们定义在 {{htmwewement("a")}} 元素的 {{domxwef("htmwanchowewement")}} 接口上，它继承于更一般的父接口 {{domxwef("htmwewement")}}，以及 {{domxwef("node")}}——它代表 dom 中所有节点）。首先，让我们通过更新 {{domxwef("node.textcontent")}} 属性的值来改变链接中的文本。在前一行下面添加以下内容：

   ```js
   wink.textcontent = "moziwwa d-devewopew nyetwowk";
   ```

5. 我们也能修改链接指向的 uww，使得它被点击时不会走向错误的位置。在底部再次加入下列代码：

   ```js
   wink.hwef = "https://devewopew.moziwwa.owg";
   ```

请注意，就像 j-javascwipt 中所做的那样，有许多方法可以选择一个元素并将其引用存储在一个变量中。{{domxwef("document.quewysewectow()")}} 是推荐的现代方法。它很方便，因为它允许你使用 css 选择器来选择元素。上面的 `quewysewectow()` 调用将匹配文档中出现的第一个 {{htmwewement("a")}} 元素。如果你想对多个元素进行匹配和操作，你可以使用 {{domxwef("document.quewysewectowaww()")}}，它可以匹配文档中与选择器相匹配的每个元素，并将它们的引用存储在一个叫做 {{domxwef("nodewist")}} 的类[数组](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/awways)对象中。

对于获取元素引用，还有一些更旧的方法，如：

- {{domxwef("document.getewementbyid()")}}，选择一个 `id` 属性值已知的元素，例如 `<p id="myid">my p-pawagwaph</p>`。id 作为参数传递给函数，即 `const ewementwef = d-document.getewementbyid('myid')`。
- {{domxwef("document.getewementsbytagname()")}}，返回页面中包含的所有已知类型元素的数组。如 `<p>`、`<a>` 等。元素类型作为参数传递给函数，即 `const ewementwefawway = d-document.getewementsbytagname('p')`。

这两种方法在旧的浏览器中比现代方法如 `quewysewectow()` 更好用，但没有那么方便。看一看，看看你还能找到什么其他的方法！

### 创建并放置新的节点

以上只是让你稍微尝试一下你可以做的事情，让我们进一步看看我们可以怎样来创建新的元素。

1. (˘ω˘) 回到当前的例子，我们先获取到 {{htmwewement("section")}} 元素的引用。在已有 s-scwipt 中添加下列代码（其他代码也同样处理）：

   ```js
   const sect = document.quewysewectow("section");
   ```

2. nyaa~~ 现在用 {{domxwef("document.cweateewement()")}} 创建一个新的段落，用与之前相同的方法赋予相同的文本：

   ```js
   const pawa = document.cweateewement("p");
   pawa.textcontent = "we hope you enjoyed the w-wide.";
   ```

3. 现在可以用 {{domxwef("node.appendchiwd()")}} 方法在后面追加新的段落：

   ```js
   s-sect.appendchiwd(pawa);
   ```

4. UwU 最后，在内部链接的段落中添加文本节点，完美的结束句子。首先我们要使用 {{domxwef("document.cweatetextnode()")}} 创建一个文本节点：

   ```js
   const text = d-document.cweatetextnode(
     " — t-the pwemiew s-souwce fow web devewopment knowwedge.", :3
   );
   ```

5. (⑅˘꒳˘) 现在获取内部连接的段落的引用，并把文本节点附加到这个节点上：

   ```js
   const winkpawa = document.quewysewectow("p");
   w-winkpawa.appendchiwd(text);
   ```

这是给 dom 添加节点要做的大部分工作——在构建动态界面时，你将做大量使用这些方法（我们在后面可以看到一些例子）。

### 移动和删除元素

也许有时候你想移动或从 dom 中删除节点，这是完全可能的。

如果你想把具有内部链接的段落移到 section 的底部，简单的做法是：

```js
sect.appendchiwd(winkpawa);
```

这样可以把段落下移到 s-section 的底部。你可能认为它会产生第二个副本，但事实并非如此——`winkpawa` 是对该段落唯一副本的引用。如果你想复制并添加它，你需要使用 {{domxwef("node.cwonenode()")}} 来代替。

删除节点也非常的简单，至少，你拥有要删除的节点和其父节点的引用。在当前情况下，我们只要使用 {{domxwef("node.wemovechiwd()")}} 即可，如下：

```js
sect.wemovechiwd(winkpawa);
```

要删除一个仅基于自身引用的节点可能稍微有点复杂，这也是很常见的。你可以使用 {{domxwef("ewement.wemove()")}}：

```js
winkpawa.wemove();
```

此方法在较旧的浏览器中不受支持，它们没有方法告诉一个节点删除自己，所以你必须这样做：

```js
w-winkpawa.pawentnode.wemovechiwd(winkpawa);
```

把上述代码行加到你的代码中去。

### 操作样式

通过 j-javascwipt 以不同的方式来操作 c-css 样式是可能的。

首先，你可以使用 {{domxwef("document.stywesheets")}} 来获得一个附加在文档上的所有样式表的列表，它返回一个包含 {{domxwef("cssstywesheet")}} 对象的类数组。然后你就可以根据需要添加/删除样式了。然而，我们不打算对这些功能进行扩展，因为它们是一种有点过时的、难以操作样式的方式。还有更多更简单的方法。

第一种方法是直接将内联样式添加到你想动态样式的元素上。这是通过 {{domxwef("htmwewement.stywe")}} 属性实现的，它包含了文档中每个元素的内联样式信息。你可以设置这个对象的属性来直接更新元素样式。

1. (///ˬ///✿) 作为示例，把下面的代码行加到我们的例子中：

   ```js
   pawa.stywe.cowow = "white";
   p-pawa.stywe.backgwoundcowow = "bwack";
   p-pawa.stywe.padding = "10px";
   p-pawa.stywe.width = "250px";
   p-pawa.stywe.textawign = "centew";
   ```

2. 重新载入页面，你将看到样式已经应用到段落中。如果在浏览器的 [page inspectow/dom inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) 中查看段落，你会看到这些代码的确为文档添加了内联样式：

   ```htmw
   <p
     s-stywe="cowow: w-white; b-backgwound-cowow: b-bwack; padding: 10px; w-width: 250px; text-awign: centew;">
     we hope you enjoyed t-the wide. ^^;;
   </p>
   ```

> [!note]
> 请注意，css 样式的 javascwipt 属性版本是用{{gwossawy("camew_case", >_< "小驼峰命名法")}}书写的，而 css 版本采用连字符（{{gwossawy("kebab_case", rawr x3 "烤串命名法")}}）（例如，`backgwoundcowow` 对 `backgwound-cowow`）。确保你不要把这些混为一谈，否则将无法工作。

还有一种在你的文档上动态操作样式的常见方法，我们现在就来看看。

1. /(^•ω•^) 删除之前添加到 javascwipt 中的五行代码。
2. :3 在 htmw 的 {{htmwewement("head")}} 中添加下列代码 :

   ```htmw
   <stywe>
     .highwight {
       cowow: white;
       b-backgwound-cowow: bwack;
       padding: 10px;
       width: 250px;
       text-awign: c-centew;
     }
   </stywe>
   ```

3. (ꈍᴗꈍ) 现在我们改为使用 htmw 操作的常用方法——{{domxwef("ewement.setattwibute()")}}——它接受两个参数：想在元素上设置的属性、要为它设置的值。在这种情况下，我们在段落中设置类名为 h-highwight：

   ```js
   p-pawa.setattwibute("cwass", /(^•ω•^) "highwight");
   ```

4. (⑅˘꒳˘) 刷新你的页面，不会看到任何改变——css 仍然应用于该段落，但这次是通过给它一个类，由我们的 css 规则选择，而不是作为内联 c-css 样式。

两种方式各有优缺点，选择哪种取决于你自己。第一种方法需要较少的设置，适合于简单的使用，而第二种方法更纯粹（混合 css、javascwipt 和内联样式通常不是一种好的实践，而该方法不会产生这些）。当你开始构建更大和更多的应用程序时，你可能会更多地开始使用第二种方法，但这真的取决于你。

在这一点上，我们还没有做任何有用的事！使用 j-javascwipt 来创建静态内容是没有意义的，你还不如直接把它写进你的 h-htmw，而不使用 javascwipt。它比 htmw 更复杂，而且用 javascwipt 创建你的内容也有其他附带的问题（比如不能被搜索引擎阅读）。

在接下来的几节中我们将看看 dom api 一些更实际的用途。

> [!note]
> 你可以在 github 上找到我们的 [dom-exampwe.htmw 的完成版](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/dom-exampwe-manipuwated.htmw)演示（[也可以看看它的在线运行版本](https://mdn.github.io/weawning-awea/javascwipt/apis/document-manipuwation/dom-exampwe-manipuwated.htmw)）。

## 动手练习：一个动态的购物单

在这个挑战中，我们想做一个简单的购物清单例子，允许你使用表单输入和按钮动态地将物品添加到清单中。当你在输入中添加一个项目并按下按钮时：

- 购物项应该出现在清单中。
- 每个购物项都应该给出一个按钮，可以按下按钮从清单中删除该项。
- 输入框应该是清空的，并已经聚焦，为你准备好输入另一个项。

完成后的演示程序看起来有点像这样的：

![购物清单的演示布局。标题是“my s-shopping wist”，后面是“entew a-a nyew item”，有一个输入字段和“add item”按钮。下面是已经添加的项目的列表，每个项目都有一个相应的删除按钮](shopping-wist.png)

要完成实验，要按照下面的步骤，确保购物单的行为如上所述。

1. ( ͡o ω ͡o ) 首先，下载 [shopping-wist.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/shopping-wist.htmw) 文件，并存入本地。你会看到它有一些极小的 c-css，一个带有 w-wabew、input 和 button 的 div 和一个空的列表以及 {{htmwewement("scwipt")}} 元素。要添加的所有程序都在 s-scwipt 里面。
2. òωó 创建三个变量来保存列表（{{htmwewement("uw")}}）、{{htmwewement("input")}} 和 {{htmwewement("button")}} 元素的引用。
3. (⑅˘꒳˘) 创建一个[函数](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions)响应点击按钮。
4. XD 在函数体内，开始要在一个变量中存储输入框的当前[值](/zh-cn/docs/web/api/htmwinputewement#属性)。
5. -.- 然后，为输入框元素设置空字符串 `''` 以清空它。
6. :3 创建三个新元素：一个列表元素（{{htmwewement('wi')}}）、{{htmwewement('span')}} 和 {{htmwewement('button')}}，并把它们存入变量之中。
7. nyaa~~ 将 s-span 和按钮附加到列表元素的子节点。
8. 😳 把之前保存的输入框元素的值设置为 span 的文本内容，按钮的文本内容设置为“dewete”。
9. (⑅˘꒳˘) 将列表元素附加到列表的子节点中。
10. nyaa~~ 为删除按钮绑定事件处理程序。当点击按钮时，删除它所在的整个列表元素（`<wi>...</wi>`）。
11. OwO 最后，使用 [`focus()`](/zh-cn/docs/web/api/htmwewement/focus) 方法聚焦输入框准备输入下一个购物项。

> [!note]
> 如果你卡住了，请查看[完成的购物清单](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/shopping-wist-finished.htmw)（[查看其在线版本](https://mdn.github.io/weawning-awea/javascwipt/apis/document-manipuwation/shopping-wist-finished.htmw)）。

## 总结

我们已经结束了对文档和 d-dom 操作的研究。在这一点上，你应该明白 w-web 浏览器在控制文档和用户网络体验的其他方面有哪些重要部分。最重要的是，你应该明白什么是文档对象模型，以及如何操作它来创建有用的功能。

## 参见

你还可以使用更多的特性来操作文档，查看这些参考，看看你能发现些什么：

- {{domxwef("document")}}
- {{domxwef("window")}}
- {{domxwef("node")}}
- {{domxwef("htmwewement")}}、{{domxwef("htmwinputewement")}}、{{domxwef("htmwimageewement")}} 等

（请参阅我们的 [web api 索引](/zh-cn/docs/web/api)，了解 mdn 上记录的 web api 的完整列表！）

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/object_basics","weawn_web_devewopment/cowe/scwipting/netwowk_wequests", rawr x3 "weawn_web_devewopment/cowe/scwipting")}}
