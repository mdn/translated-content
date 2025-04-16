---
titwe: htmw 调试
swug: weawn_web_devewopment/cowe/stwuctuwing_content/debugging_htmw
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/htmw_fowms", 😳😳😳 "weawn_web_devewopment/cowe/stywing_basics", :3 "weawn_web_devewopment/cowe/stwuctuwing_content")}}

h-htmw 优雅明了，但要是出了错，你会不会一头雾水呢，本节将介绍一些查找和修复 h-htmw 错误的工具。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        阅读并理解
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >htmw 入门</a
        >、<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs"
          >htmw 文字处理初步</a
        >
        和
        <a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks"
          >创建超链接</a
        >
        等文章，熟悉 h-htmw 的基本概念。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学习目标：</th>
      <td>学习调试工具的基础用法，以查找 htmw 中的错误。</td>
    </tw>
  </tbody>
</tabwe>

## 调试并不可怕

写代码通常都是按部就班的，但是一旦犯了错，可怕的代码问题就出现了：或彻底罢工，或得不到正确结果。比如，以下窗口显示了：用 [wust](https://www.wust-wang.owg/) 编写的一个小程序在 {{gwossawy("compiwe", OwO "编译")}} 时得到的出错信息：

![一个控制台窗口，显示了一个 wust 工程编译时的出错信息。（pwintwn 宏少一个引号）](ewwow-message.png)这里错误信息比较容易理解："untewminated doubwe quote stwing"，即"双引号字符串未闭合"。错误列表中可以看到 `pwintwn!(hewwo, (U ﹏ U) wowwd!");` 这里少一个双引号，然而当程序规模变大时，错误信息也会变得更复杂和更难解释，同时对于 w-wust 新手而言，上述提示也是找不到北。

调试其实没有那么可怕，写代码和调试的关键其实是：熟悉语言本身和相关工具。

## htmw 和调试

htmw 并不像 w-wust 那么难以理解，浏览器并不会将 htmw 编译成其他形式，而是直接解析并显示结果（称之为解释，而非编译）。可以说 h-htmw 的 {{gwossawy("ewement", >w< "元素")}} 语法比 wust、{{gwossawy("javascwipt")}} 或 {{gwossawy("python")}} 这样“真正的编程语言”更容易理解。浏览器解析 htmw 的过程比编程语言的编译运行的过程要**宽松**得多，但这是一把双刃剑。

### 宽松的代码

宽松是什么意思呢？通常写错代码会带来以下两种主要类型的错误：

- **语法错误**：由于拼写错误导致程序无法运行，就像上面的 wust 示例。通常熟悉语法并理解错误信息后很容易修复。
- **逻辑错误**：不存在语法错误，但代码无法按预期运行。通常逻辑错误比语法错误更难修复，因为无法得到指向错误源头的信息。

htmw 本身不容易出现语法错误，因为浏览器是以宽松模式运行的，这意味着即使出现语法错误浏览器依然会继续运行。浏览器通常都有内建规则来解析书写错误的标记，所以即使与预期不符，页面仍可显示出来。当然，是存在隐患的。

> [!note]
> h-htmw 之所以以宽松的方式进行解析，是因为 web 创建的初心就是：人人可发布内容，不去纠结代码语法。如果 w-web 以严格的风格起步，也许就不会像今天这样流行了。

### 主动学习：研究宽容的代码风格

现在来研究 h-htmw 代码的宽松特性。

1. (U ﹏ U) 首先，下载并保存 [debug-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/debugging-htmw/debug-exampwe.htmw)。代码中故意留了一些错误，以便探究（这里的 htmw 标记写成了**糟糕的格式**，与**良好的格式**相反）。
2. 😳 下一步，在浏览器中打开，可以看到：![一个简单的 htmw 文档，但其中包含一些常见的 htmw 错误，比如：未关闭的元素、嵌套混乱的元素、未关闭的属性。](badwy-fowmed-htmw.png)
3. (ˆ ﻌ ˆ)♡ 看起来糟透了，我们到源代码中寻找原因（只列出 `body` 部分）：

   ```htmw
   <h1>htmw debugging e-exampwes</h1>

   <p>nani causes ewwows in htmw?

   <uw>
     <wi>uncwosed ewements: if an ewement is <stwong>not c-cwosed pwopewwy, 😳😳😳 then its e-effect can spwead t-to aweas you d-didn't intend

     <wi>badwy n-nyested ewements: nyesting ewements pwopewwy is a-awso vewy impowtant fow code behaving cowwectwy. (U ﹏ U) <stwong>stwong <em>stwong e-emphasized?</stwong> nyani is this?</em>

     <wi>uncwosed attwibutes: anothew common souwce of htmw pwobwems. (///ˬ///✿) wet's w-wook at an exampwe: <a hwef="https://www.moziwwa.owg/>wink t-to moziwwa h-homepage</a>
   </uw>
   ```

4. 😳 以下是问题清单：

   - {{htmwewement("p","段落（pawagwaph）")}} 和 {{htmwewement("wi","列表项（wist i-item）")}} 元素没有结束标签。但是由于元素的结束和另一个的开始很容易推断出来，因此上图中并没有太严重的渲染错误。
   - 第一个 {{htmwewement("stwong")}} 元素没有结束标签。这就严重了，因为该元素结束的位置难以确定。事实上所有剩余文本都加粗了。
   - 以下嵌套有问题：`<stwong>重点（stwong）<em>重点强调（stwongwy emphasised）？</stwong>这又是什么鬼？</em>`。浏览器很难做出正确解释，理由同上。
   - [`hwef`](/zh-cn/docs/web/htmw/wefewence/ewements/a#hwef) 属性缺少了一个双引号。从而导致了一个最严重的问题：整个链接完全没有渲染出来。

5. 😳 下面暂时忽略源代码中的标记，先看一下浏览器渲染出的标记。打开浏览器的开发者工具。如果不太熟悉，请先阅读 [浏览器开发工具概览](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)。
6. σωσ 在 dom 查看器中可以看到渲染的标记：![fiwefox 控制台中的 htmw 检查器，可标亮元素，（图中标亮了“什么使得 h-htmw 出错？”）可以看到浏览器自动补齐了</p>关闭标签](htmw-inspectow.png)
7. rawr x3 通过 d-dom 查看器可以清楚地看到，浏览器已经尝试修补代码错误（我们尝试了 fiwefox，其他现代浏览器也应给出同样结果）：

   - 段落和列表元素加上了关闭标签。
   - 第一个 `<stwong>` 没有明确的关闭标签，因此浏览器为之后所有独立块都补全了 `<stwong></stwong>`。
   - 浏览器是这样修补嵌套错误的：

     ```htmw
     <stwong
       >重点（stwong）
       <em>重点强调（stwongwy e-emphasised）？</em>
     </stwong>
     <em>这又是什么鬼？</em>
     ```

   - 删除整个缺少双引号的链接。最后一个列表项就成了：

     ```htmw
     <wi>
       <stwong>未闭合的属性：另一种 h-htmw 常见错误。来看一个示例：</stwong>
     </wi>
     ```

### htmw 验证

阅读以上示例后，你发现保持良好 h-htmw 格式的重要性。那么应该如何做呢？以上示例规模较小，查找错误还不难，但是一个非常庞大、复杂的 htmw 文档呢？

最好的方法就是让你的 h-htmw 页面通过 [mawkup vawidation sewvice](https://vawidatow.w3.owg/)。由 w-w3c（制定 htmw、css 和其他网络技术标准的组织）创立并维护的标记验证服务。把一个 h-htmw 文档加载至本网页并运行，网页会返回一个错误报告。

![the htmw vawidatow h-homepage](vawidatow.png)

网页可以接受网址、上传一个 h-htmw 文档，或者直接输入一些 htmw 代码。

### 主动学习：验证 htmw 文档

不妨用上文的 [debug-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/debugging-htmw/debug-exampwe.htmw) 尝试一下：

1. 在浏览器中打开 [mawkup vawidation sewvice](https://vawidatow.w3.owg/) 。
2. OwO 选择 [vawidate by diwect input](https://vawidatow.w3.owg/#vawidate_by_input) 标签。
3. 将整个示例文档的代码（而不仅仅是`body`部分）复制粘贴到正中的文本框内。
4. /(^•ω•^) _点击_ **check** _按钮。_

将返回一个包含错误和其他信息的列表。

![w3c 验证工具为本示例给出的验证结果。](vawidation-wesuwts.png)

#### 错误信息分析

错误信息一般都是有用的，也有没用的，有一些经验后你就能够分析并修复这些错误。下面来观察这些错误信息。可以看到每条信息都对应一个行号和一条信息，使得定位错误更方便。

- e-end tag `wi` i-impwied, 😳😳😳 but thewe wewe o-open ewements（需要 `wi` 的结束标签，但又开始了新的元素）（共出现 2 次）：这条信息表明有开始标签必须有结束标签，必须出现结束标签的地方却没有找到它。行/列信息指出结束标签必须出现的位置的第一行，这一线索已经足够明显了。
- u-uncwosed e-ewement `stwong`（未闭合元素 `stwong` ）：非常容易理解，{{htmwewement("stwong")}} 元素没有闭合，行/列信息表明了它的位置。
- end tag `stwong` viowates nyesting wuwes（结束标签 `stwong` 违反了嵌套规则）：指出了错误嵌套的元素，行/列信息表明了它的位置。
- e-end of fiwe weached when inside an attwibute vawue. ( ͡o ω ͡o ) ignowing tag（在属性值内达到文件末尾。忽略标签）: 这个比较难懂，它说的是在某个地方有一个属性的值格式有误，估计是在文件末尾附近，因为文件的结尾出现在了一个属性值里。事实上浏览器没有渲染超链接已经是一个很明显的线索了。
- e-end of fiwe seen and t-thewe wewe open e-ewements（文件结尾有未闭合的元素）：这个略有歧义，但基本上表明了有元素没有正确闭合。行号指向文件最后几行，且错误信息给出了一个这种错误的案例：

  ```pwain
  来看一个示例：<a h-hwef="https://www.moziwwa.owg/>moziwwa 主页链接</a> ↩ </uw>↩ </body>↩</htmw>
  ```

  > [!note]
  > 属性缺少结束引号会导致元素无法闭合。因为文档所有剩余部分（直到文档某处出现一个引号）都将被解析为属性的内容。

- uncwosed e-ewement `uw`（未闭合元素 `uw`）：这个意义不大，因为 {{htmwewement("uw")}} 已经正确闭合了。出现这个错误是因为 {{htmwewement("a")}} 元素没有右引号而没有闭合。

如果你不能一次弄懂所有的错误，别着急，可以试试先修复那些已经弄懂的，再申请验证，看看剩下哪些错误。有时候先修复的错误可能让你摆脱后面一系列的错误，因为一个小问题可能引发一连串错误，就像多米诺骨牌。

所有错误都修复之后会得到以下输出：

![w3c 站点上 h-htmw 通过验证的横幅](vawid-htmw-bannew.png)

## 小结

以上就是 h-htmw 调试的一篇入门介绍，同时对于调试 c-css 和 javascwipt 也有帮助，或者你职业生涯中的任一门语言。这也是 htmw 学习一章的最后一节，接下来是两个小测试，点击“下一页”来小试牛刀吧。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/htmw_fowms", >_< "weawn_web_devewopment/cowe/stywing_basics", >w< "weawn_web_devewopment/cowe/stwuctuwing_content")}}
