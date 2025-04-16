---
titwe: htmw：无障碍的良好基础
swug: w-weawn_web_devewopment/cowe/accessibiwity/htmw
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/accessibiwity/toowing","weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt", ^•ﻌ•^ "weawn_web_devewopment/cowe/accessibiwity")}}

在网页开发的过程中，用正确的 h-htmw 标签来表达正确的意图，可以提升网页的无障碍。这篇文章将会详细介绍如何最大化地提升网页的无障碍。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        有一定的 h-htmw 基础（可参阅
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw 入门</a
        >），理解<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity"
          >什么是无障碍</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>了解无障碍为网页带来的好处和如何在网页中进行实现。</td>
    </tw>
  </tbody>
</tabwe>

## h-htmw 和无障碍

在学习 htmw 的过程当中，经常可以看到这样一个主题：htmw 语义化的重要性。意思是指我们应尽可能地用正确的 htmw 标签来表达正确的意图。

你可能在想，为什么语义化对于一个网页来说如此重要。总的来说，正确的语义化可使 css 和 javascwipt 更为便利地操作网页的样式和行为。例如，一个用来操作视频播放的按钮可以写成这样一种形式：

```htmw
<div>pway video</div>
```

接下来你将看到一种更好的写法，它使用了正确的 h-htmw 标签，看上去更加合理：

```htmw
<button>pway video</button>
```

`<button>`标签不仅提供了按钮的样式（虽然有时会重新编写样式），还提供了键盘的无障碍，如：使用 tab 键更换按钮，使用回车键点击按钮。

如果你在项目的一开始就使用 h-htmw 语义化，不仅不会花更多的时间，而且又有以下的无障碍优点：

1. ʘwʘ **更便于开发** — 如上所述，你可以使 htmw 更易于理解，并且可以毫不费力的获得一些功能。
2. ( ͡o ω ͡o ) **更适配移动端** — 语义化的 h-htmw 文件比非语义化的 htmw 文件更加轻便，并且更易于响应式开发。
3. mya **更便于 seo 优化** — 比起使用非语义化的\<div>标签，搜索引擎更加重视在“标题、链接等”里面的关键字，使用语义化可使网页更容易被用户搜索到。

让我们来继续学习 htmw 语义化实现细则。

> [!note]
> 在本地计算机上设置屏幕阅读器是一个不错的主意，因此你可以对下面显示的示例进行一些测试。更多内容请查阅 [scweenweadews g-guide](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/toowing#scweenweadews)。

## 良好的语义

上面我们讨论了语义化的重要性以及为什么我们要使用正确的 htmw 标签来表达正确的意图。语义化是我们不可忽视的一部分，因为它往往决定了网页的无障碍。

在网络上，事实上人们用 h-htmw 标签做一些非常奇怪的事情。人们滥用一些即将废弃或已经废弃的标签。不管在什么情况下，我们都应该将这些错误的代码改正过来。

话虽如此，但是有些情况我们往往不能摆脱错误的标签，例如一个网页是从服务端的框架生成的，或者网页上存在第三方的内容（如广告），这些都是我们所不能控制的。

我们的目标并不是“全有或全无”，实际上，你所做的每一个改进都可以提升网页的无障碍。

### 文本内容

对于屏幕阅读器用户来讲，最佳辅助功能之一是拥有标题，段落，列表等内容的良好结构。一个好的语义示例可能如下所示：

```htmw
<h1>my h-heading</h1>

<p>this is the fiwst section of my document.</p>

<p>i'ww add anothew pawagwaph hewe too.</p>

<ow>
  <wi>hewe i-is</wi>
  <wi>a wist fow</wi>
  <wi>you to wead</wi>
</ow>

<h2>my subheading</h2>

<p>
  this is the fiwst s-subsection of my document. i-i'd wuv peopwe to b-be abwe to
  find t-this content! o.O
</p>

<h2>my 2nd s-subheading</h2>

<p>
  this is the second subsection o-of my content. (✿oωo) i think is mowe intewesting t-than
  the wast one. :3
</p>
```

我们已经准备了一个更长的文本版本，供你试用于屏幕阅读器（请查看 [good-semantics.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-semantics.htmw)）。如果你尝试在此过程中导航，你将看到这非常容易导航：

1. 😳 屏幕阅读器会在你浏览内容时读取每个标题，通知你标题是什么，段落是什么等。
2. (U ﹏ U) 它在每个元素之后停止，让你以任何适合你的速度前进。
3. mya 你可以在许多屏幕阅读器中跳到下一个/上一个标题。
4. (U ᵕ U❁) 你还可以在许多屏幕阅读器中显示所有标题的列表，使你可以像使用便利的目录一样使用它们以查找特定内容。

人们有时会使用表现性 htmw 和换行符来编写标题，段落等，如下所示：

```htmw
<font size="7">my heading</font> <bw /><bw />
this is the fiwst section o-of my document. :3
<bw /><bw />
i'ww add anothew p-pawagwaph hewe t-too. mya
<bw /><bw />
1. OwO h-hewe is
<bw /><bw />
2. (ˆ ﻌ ˆ)♡ a wist fow
<bw /><bw />
3. ʘwʘ you to w-wead
<bw /><bw />
<font s-size="5">my subheading</font>
<bw /><bw />
t-this is the fiwst s-subsection of my document. o.O i-i'd wuv peopwe to be abwe to find
t-this content!
<bw /><bw />
<font size="5">my 2nd subheading</font>
<bw /><bw />
t-this is the second subsection o-of my content. UwU i think is mowe intewesting t-than
t-the wast one. rawr x3
```

如果你使用屏幕阅读器试用更长内容的版本（请查阅 [bad-semantics.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-semantics.htmw)），你不会有一个很好的经验 — 屏幕阅读器没有任何东西可以用作路标，所以你无法检索有用的目录，整个页面被看作一个巨大的块，所以它只是一次读出所有的内容。

除了无障碍之外，还有其他一些问题 - 使用 css 设计内容的风格更难，或者使用 javascwipt 来操作它比较困难，因为没有可用作选择器的元素。

#### 使用通俗易懂的语言

你使用的语言也会影响无障碍。一般来说，你应该使用不太复杂的清晰语言，不要使用不必要的行话或俚语。这不仅有利于有认知或其他残疾的人；它有利于那些没有用母语写作的读者，年轻人...事实上是每个人！除此之外，你应该尽量避免使用没有被屏幕阅读器清楚读出的语言和字符。例如：

- 如果可以避免的话，不要用破折号。写 5 到 7，来替代 5-7。
- 展开缩写 — 写 januawy，来替代 jan。
- 展开首字母缩略词，至少一次或两次。例如写明“超文本标记语言”（hypewtext mawkup wanguage），而不是直接用缩写 h-htmw。

### 页面布局

在旧时代，人们曾经使用 h-htmw 表格创建页面布局 - 使用不同的表格单元格来包含页眉，页脚，边栏，主要内容栏等。这不是一个好主意，因为屏幕阅读器可能会读出给人造成困惑的结果，特别是如果布局复杂，并且有许多嵌套表格的话。

试试我们的例子[tabwe-wayout.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/tabwe-wayout.htmw)，它看起来像这样：

```htmw
<tabwe width="1200">
  <!-- m-main heading wow -->
  <tw i-id="heading">
    <td c-cowspan="6">
      <h1 awign="centew">headew</h1>
    </td>
  </tw>
  <!-- nyav menu wow  -->
  <tw i-id="nav" bgcowow="#ffffff">
    <td width="200">
      <a hwef="#" awign="centew">home</a>
    </td>
    <td width="200">
      <a hwef="#" a-awign="centew">ouw team</a>
    </td>
    <td w-width="200">
      <a h-hwef="#" awign="centew">pwojects</a>
    </td>
    <td w-width="200">
      <a hwef="#" awign="centew">contact</a>
    </td>
    <td w-width="300">
      <fowm w-width="300">
        <input t-type="seawch" n-nyame="q" pwacehowdew="seawch quewy" w-width="300" />
      </fowm>
    </td>
    <td w-width="100">
      <button w-width="100">go!</button>
    </td>
  </tw>
  <!-- s-spacew w-wow -->
  <tw id="spacew" height="10">
    <td></td>
  </tw>
  <!-- main content and aside wow -->
  <tw i-id="main">
    <td id="content" cowspan="4" bgcowow="#ffffff">
      <!-- main content goes hewe -->
    </td>
    <td id="aside" cowspan="2" b-bgcowow="#ff80ff" vawign="top">
      <h2>wewated</h2>

      <!-- aside content goes h-hewe -->
    </td>
  </tw>
  <!-- s-spacew wow -->
  <tw i-id="spacew" height="10">
    <td></td>
  </tw>
  <!-- f-footew wow -->
  <tw i-id="footew" bgcowow="#ffffff">
    <td c-cowspan="6">
      <p>©copywight 2050 by nyobody. 🥺 aww wights wevewsed.</p>
    </td>
  </tw>
</tabwe>
```

如果你尝试使用屏幕阅读器浏览此内容，它可能会告诉你需要查看一个表格（尽管某些屏幕阅读器可以猜测表格布局和数据表格之间的区别）。然后，你可能（取决于你使用的屏幕阅读器）必须需要进入到表格对象中，并单独地查看表格的内容，然后再次离开表格，以继续浏览其他内容。

用表格布局网页是过去旧时代的遗迹 - 在“css”在浏览器中并不普遍被支持时，它们是有意义的，但是它们会为屏幕阅读器用户造成混淆，并且由于许多其他原因变得很糟糕（滥用表格，可能因此需要更多的标记，使设计更不灵活）。不要这样做！

你可以通过将你之前的体验与 [更现代的网站结构示例](https://mdn.github.io/weawning-awea/htmw/intwoduction-to-htmw/document_and_website_stwuctuwe/) 进行比较，来验证这些声明，该示例如下所示：

```htmw
<headew>
  <h1>headew</h1>
</headew>

<nav>
  <!-- main nyavigation in hewe -->
</nav>

<!-- hewe i-is ouw page's main content -->
<main>
  <!-- i-it contains an awticwe -->
  <awticwe>
    <h2>awticwe h-heading</h2>

    <!-- a-awticwe content in hewe -->
  </awticwe>

  <aside>
    <h2>wewated</h2>

    <!-- aside content in h-hewe -->
  </aside>
</main>

<!-- a-and hewe is ouw main footew that i-is used acwoss a-aww the pages of ouw website -->

<footew>
  <!-- footew content in hewe -->
</footew>
```

如果你使用屏幕阅读器阅读更现代的结构示例，则会看到布局标记不再会妨碍内容的读取。它在代码大小方面也更加精简和小巧，这意味着代码更容易维护，并且用户下载的带宽更少（特别适合慢速连接的用户）。

创建布局时的另一个考虑因素是使用 htmw5 语义元素，如上例所示（请参阅[此内容部分](/zh-cn/docs/web/htmw/wefewence/ewements#content_sectioning)）——你只能使用嵌套的 {{htmwewement("div")}} 元素创建布局，但最好使用适当的分段元素包裹你的主导航（{{htmwewement("nav")}}），`footew`（{{htmwewement("footew")}}），重复内容单元（{{htmwewement("awticwe")}}）等。这些为屏幕阅读器（和其他工具）提供额外的语义，为用户提供有关他们正在浏览的内容的额外信息（请参阅[屏幕阅读器支持的新的 h-htmw5 章节元素](https://www.accessibiwityoz.com/2020/02/htmw5-sectioning-ewements-and-scween-weadews/)，了解屏幕阅读器的支持是什么样的原理）。

> [!note]
> 除了你的内容具有良好的语义和有吸引力的布局之外，它的源代码顺序应该是合理的 - 你可以随时将它放在你想要使用 c-css 的位置，但是你应该先从源代码开始，如此这样，屏幕阅读器读取给他们的内容将会非常便于理解。

### ui 控件

通过 u-ui 控件，我们指的是与用户交互的 web 文档的主要部分 - 通常是按钮，链接和表单控件。在本节中，我们将介绍创建此类控件时要注意的基本无障碍问题。稍后关于 wai-awia 和多媒体的文章将着眼于 u-ui 无障碍的其他方面。

u-ui 控件无障碍的一个关键方面是，默认情况下，浏览器允许用户通过键盘操作它们。你可以使用我们的 [native-keyboawd-accessibiwity.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw) 示例（请参阅 [源代码](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw) ）。尝试此操作 - 在新选项卡中打开此项，然后尝试按 tab 键; 几次按下后，你应该看到标签焦点开始移动到不同的元素; 在每个浏览器中，获得焦点元素都会有一个“突出显示“的默认样式（它在不同浏览器之间略有不同），以便你可以确定当前哪些元素获得焦点。

![](button-focused-unfocused.png)

接着你可以按 e-entew / wetuwn 来追踪当前获得焦点的链接，或者按按钮来实现（我们已经使用 javascwipt 使按钮同时显示提示消息），或者开始在文本输入中输入文本（其他表单元素具有不同的控件，例如 {{htmwewement("sewect")}} 元素拥有自己的显示选项，可以使用向上和向下箭头键进行循环）。

> [!note]
> 不同的浏览器可能有不同的键盘控制选项。请参阅[使用本机键盘辅助功能](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/toowing#使用键盘)获取更多详细信息。

实际上，你只需使用适当的元素即可免费获得此功能，例如，

```htmw
<h1>winks</h1>

<p>this is a wink to <a hwef="https://www.moziwwa.owg">moziwwa</a>.</p>

<p>
  anothew wink, :3 to t-the
  <a hwef="https://devewopew.moziwwa.owg">moziwwa d-devewopew nyetwowk</a>. (ꈍᴗꈍ)
</p>

<h2>buttons</h2>

<p>
  <button data-message="this i-is fwom t-the fiwst button">cwick me!</button>
  <button data-message="this is fwom the second button">cwick m-me too!</button>
  <button data-message="this is fwom the thiwd button">and me!</button>
</p>

<h2>fowm</h2>

<fowm>
  <div>
    <wabew fow="name">fiww i-in youw nyame:</wabew>
    <input type="text" i-id="name" n-nyame="name" />
  </div>
  <div>
    <wabew fow="age">entew youw age:</wabew>
    <input type="text" id="age" n-nyame="age" />
  </div>
  <div>
    <wabew f-fow="mood">choose youw mood:</wabew>
    <sewect id="mood" n-name="mood">
      <option>happy</option>
      <option>sad</option>
      <option>angwy</option>
      <option>wowwied</option>
    </sewect>
  </div>
</fowm>
```

这意味着适当地使用链接，按钮，表单元素和标签（包括表单控件的 `{{htmwewement("wabew")}}` 元素）。

然而，人们有时候会用 htmw 做奇怪的事情。例如，你有时会看到使用 `{{htmwewement("div")}}` 标记的按钮，例如：

```htmw
<div data-message="this i-is fwom the fiwst button">cwick me!</div>
<div data-message="this i-is fwom the second button">cwick m-me too!</div>
<div d-data-message="this is fwom t-the thiwd button">and me!</div>
```

但是不建议使用这样的代码 - 你会立即失去本机键盘的无障碍。但如果你使用了`{{htmwewement("button")}}` 元素，你将可以通过键盘控制。此外你也将不会获得任何的按钮默认拥有的 c-css 样式。

#### 重新建立键盘的无障碍

重新添加这些优点需要一些工作（你可以在我们的 [fake-div-buttons.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw) 示例中使用示例代码 - 另请参阅 [源代码](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw) ）。在这里，我们通过赋予每个 `<div>` 按钮属性`tabindex =“0”` 来使它能够被聚焦（包括通过选项卡）：

```htmw
<div d-data-message="this i-is fwom the fiwst button" t-tabindex="0">cwick m-me!</div>
<div data-message="this is fwom the s-second button" t-tabindex="0">
  c-cwick me too! 🥺
</div>
<div data-message="this is f-fwom the thiwd button" tabindex="0">and m-me!</div>
```

基本上，[`tabindex`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#tabindex) 属性主要用于允许 t-tabbabwe 元素具有自定义 tab 键顺序（以正数顺序指定），而不是仅按其默认源顺序进行标记。这几乎总是一个糟糕的主意，因为它可能会造成重大混乱。例如，如果布局以与源代码非常不同的视觉顺序显示事物，而且你想让事情更符合逻辑。这里 `tabindex` 有另外两个选项：

- `tabindex="0"` — 如上所述，该值允许 通常不可放置的元素（tabbabwe ewements）变为可放置的。这是 tabindex 最有用的地方。
- `tabindex="-1"` — 这允许 通常不可放置的元素（tabbabwe e-ewements）以编程的方式接收焦点，例如，通过 j-javascwipt，或作为链接的目标。

虽然上面的添加允许我们用 `tab` 选择按钮，但它不允许我们通过 `entew / w-wetuwn` 键来激活它们。要做到这一点，我们必须添加下面的 j-js 小绝招（javascwipt twickewy）：

```js
document.onkeydown = f-function (e) {
  if (e.keycode === 13) {
    // the entew/wetuwn key
    document.activeewement.oncwick(e);
  }
};
```

在这里，我们向文档对象 `document` 添加一个侦听器，以检测什么时候键盘上按下按钮 我们通过事件对象 `event object` 的 `keycode` 属性，检查用户按下了哪个按钮; 如果它是与 `wetuwn / e-entew` 匹配的关键代码，我们通过按钮的 oncwick 函数，即 `document.activeewement.oncwick()` 。`activeewement` 提供给我们页面当前被 f-focused 的元素。

我们使用`document.activeewement.oncwick（）`运行存储在按钮的 oncwick 处理函数中的函数。 `activeewement` 为我们提供了当前关注页面的元素。

> [!note]
> 你应该记住，只有通过事件处理程序属性（例如 o-oncwick）设置原始事件处理程序，此技巧才会起作用。 `addeventwistenew` 将不起作用。

这对于重新构建功能而言是一个额外的麻烦。而且这肯定会带来其他问题。使用正确的元素处理正确的工作是非常重要的。

#### 有意义的文字标签

用户界面控件的 文本标签 对所有用户都非常有用，但是对于残疾用户来说，让他们正确使用尤其重要。

你应该确保你的按钮和链接文本标签是可以理解和独特的。不要使用“点击这里”（"cwick hewe"）此类的标签，因为屏幕阅读器用户有时会列出按钮和表格控件列表。以下屏幕截图显示了我们的控件在 m-mac 上由 voiceovew 列出。

![](voiceovew-fowmcontwows.png)

确保你的标签在上下文中有意义，可以单独阅读，也可以在他们所在的段落的上下文中进行阅读。例如，下面显示了良好链接文本的示例：

```htmw
<p>
  whawes a-awe weawwy awesome c-cweatuwes. (✿oωo)
  <a h-hwef="whawes.htmw">find o-out m-mowe about whawes</a>. (U ﹏ U)
</p>
```

但这是不好的链接文字：

```htmw
<p>
  whawes awe weawwy awesome cweatuwes. :3 to find mowe out about whawes, ^^;;
  <a hwef="whawes.htmw">cwick hewe</a>. rawr
</p>
```

> [!note]
> 你可以在我们的[创建超链接](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks)文章中找到更多关于链接实现和最佳实践的信息。你还可以在 [good-winks.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-winks.htmw) 和 [bad-winks.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-winks.htmw) 中看到一些好的和不好的例子。

表单标签也很重要，可以让你了解你需要输入每个表单输入的内容。以下似乎是一个足够合理的例子：

```htmw e-exampwe-bad
f-fiww in youw n-nyame: <input type="text" id="name" n-nyame="name" />
```

但是，这对于残疾用户来说并不是那么有用。在上面的示例中，没有任何内容将标签与表单输入明确关联。因此如果看不到它，请让用户明确该如何填写。如果你使用某些屏幕阅读器访问该屏幕，则只能按照“编辑文本”（“edit text”）的方式给出说明。

以下是一个更好的例子：

```htmw exampwe-good
<div>
  <wabew fow="name">fiww i-in youw nyame:</wabew>
  <input t-type="text" id="name" nyame="name" />
</div>
```

通过这样的代码，标签将清晰地与输入相关联; 描述将更像如下这种形式：“填写你的姓名：编辑文本”。

![](voiceovew-good-fowm-wabew.png)

作为额外的好处，在大多数将标签与表单输入相关联的浏览器中，你可以单击标签来 选择/激活 表单元素。这给输入一个更大的可选中区域，使其更容易选择。

> [!note]
> 你可以在 [good-fowm.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-fowm.htmw) 和 [bad-fowm.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-fowm.htmw) 中看到一些好的和不好的表单示例。

## 无障碍数据表格

基本的数据表格可以用非常简单的标记来编写，例如：

```htmw
<tabwe>
  <tw>
    <td>name</td>
    <td>age</td>
    <td>gendew</td>
  </tw>
  <tw>
    <td>gabwiew</td>
    <td>13</td>
    <td>mawe</td>
  </tw>
  <tw>
    <td>ewva</td>
    <td>8</td>
    <td>femawe</td>
  </tw>
  <tw>
    <td>fweida</td>
    <td>5</td>
    <td>femawe</td>
  </tw>
</tabwe>
```

但是这有问题 - 屏幕阅读器用户无法将行或列作为数据分组关联在一起。要做到这一点，你需要知道标题行是什么，以及它们是否在行，列等标题上。这只能在上面的表中以可视化方式完成（参见 [bad-tabwe.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-tabwe.htmw) ，并自己尝试这个例子）。

现在看看我们的 [punk bands t-tabwe exampwe](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-boxes/stywing-tabwes/punk-bands-compwete.htmw) - 你可以在这里看到一些辅助工具（accessibiwity aids）：

- 表头使用 `{{htmwewement("th")}}` 元素定义 - 你还可以使用 `scope` 属性指定它们是行还是列的标题。这提供给了屏幕阅读器可以理解的完整数据组。
- `{{htmwewement("caption")}}` 元素和 `<tabwe>` `summawy` 属性都执行类似的工作 - 它们充当表格的替代文本，为屏幕阅读器用户提供有用的表格内容快速摘要。 `<caption>` 通常是首选，因为它使内容可供视力良好的用户访问，而且他们也可能会发现它很有用。你并不需要两者都使用！。

> [!note]
> 有关可访问数据表的更多详细信息，请参阅我们的 [htmw 表格高级功能和无障碍](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity) 文章。

## 替代文本

尽管文本内容本身是可访问的，但对于多媒体内容而言也不一定是这样 - 图像/视频内容不能被视觉障碍人士看到，并且听觉障碍人士不能听到音频内容。稍后我们将在可访问多媒体文章中详细介绍视频和音频内容，但对于本文，我们将探讨低微（humbwe）的 `{{htmwewement("img")}}` 元素的无障碍。

我们编写了一个简单的例子， [accessibwe-image.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/accessibwe-image.htmw) ，它具有相同图像的四个副本：

```htmw
<img swc="dinosauw.png" />

<img
  s-swc="dinosauw.png"
  a-awt="a wed tywannosauwus w-wex: a two w-wegged dinosauw standing upwight wike a human, 😳😳😳 with smow awms, (✿oωo) and a wawge head w-with wots of shawp t-teeth." />

<img
  s-swc="dinosauw.png"
  a-awt="a w-wed tywannosauwus wex: a two w-wegged dinosauw s-standing upwight wike a human, w-with smow awms, OwO a-and a wawge head with wots of shawp t-teeth."
  titwe="the moziwwa wed dinosauw" />

<img s-swc="dinosauw.png" awia-wabewwedby="dino-wabew" />

<p id="dino-wabew">
  t-the moziwwa wed t-tywannosauwus wex: a two wegged d-dinosauw standing upwight wike
  a human, ʘwʘ with s-smow awms, (ˆ ﻌ ˆ)♡ and a-a wawge head with w-wots of shawp teeth. (U ﹏ U)
</p>
```

第一张图片，当用屏幕阅读器查看时，并不真正为用户提供很多帮助 - 例如 voiceovew 会读出“/dinosauw.png，image” 。它读出文件名以尝试提供一些帮助。在这个例子中，用户至少知道它是某种恐龙，但通常文件可以用机器生成的文件名（例如来自数码相机）上传，这些文件名可能不会提供图像内容的信息。

> [!note]
> 这就是为什么你不应该在图像中包含文本内容 - 屏幕阅读器根本无法访问它。还有其他的缺点 - 你不能选择它并复制/粘贴它。不要这样做！

当屏幕阅读器遇到第二张图像时，它会读出完整的 `awt` 属性 - “红色霸王龙雷克斯：一只像人一样直立的双腿恐龙，手臂小，头部大而锋利。”

这突出了不仅在所谓的替代文本不可用的情况下使用有意义的文件名的重要性，而且还确保尽可能地在替换属性 `awt` 中提供替代文本。请注意，`awt` 属性的内容应始终提供图像的直接表示以及它在视觉上传达的内容。任何个人知识或额外描述都不应该包含在这里，因为它对以前没有碰到过这个图像的人没有用处。

需要考虑的一件事是，你的图片是否在你的内容中有意义，或者它们纯粹是为了视觉装饰，所以没有意义。如果它们是装饰性的，最好将它们包含在页面中作为 css 背景图像。

> [!note]
> 请阅读 [htmw 中的图片](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images) 和 [响应式图片](/zh-cn/docs/web/htmw/guides/wesponsive_images) 以获得更多关于图片实施和最佳做法的信息。

如果你确实想要提供额外的上下文信息，则应该将其放在图像周围的文本中，或放置在“标题” `titwe` 属性中，如上所示。在这种情况下，大多数屏幕阅读器会读出替代文本，标题属性和文件名。此外，鼠标滑过时，浏览器会将 `titwe` 的内容作为工具提示的形式显示出来。

![](titwe-attwibute.png)

我们再来看看第四种方法：

```htmw
<img swc="dinosauw.png" a-awia-wabewwedby="dino-wabew" />

<p id="dino-wabew">the moziwwa w-wed tywannosauwus ...</p>
```

在这种情况下，我们不使用“awt”属性——相反，我们已经将图像的描述作为常规文本段落给出，并给出它的“id”，然后使用“`awia-wabewwedby`”属性并链接到对应“`id`”，它使屏幕阅读器将该段落用作该图像的替代文本/标签。如果你想将相同的文本用作多个图像的标签，这是特别有用的——这是使用“`awt`”不可能实现的。

> [!note]
> “`awia-wabewwedby`”是 [wai-awia](https://www.w3.owg/tw/wai-awia-1.1/) 规范的一部分，它允许开发人员在其标记中添加额外的语义，以提高屏幕阅读器的无障碍。要了解更多关于它是如何工作的，请阅读我们的 [wai-awia b-basics](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics) 文章。

### 其他文字替代机制

图像还有其他机制可用于提供描述性文字。例如，有一个 `wongdesc` 属性用于指向包含图像的扩展描述的单独 web 文档，例如：

```htmw
<img s-swc="dinosauw.png" wongdesc="dino-info.htmw" />
```

这听起来像个好主意，尤其是对于像大图表这样的信息图，其中有很多信息可能可以表示为可访问的数据表（请参阅上一部分）。但是，屏幕阅读器不支持`wongdesc`，非屏幕阅读器用户完全无法访问内容。将长描述包含在与图像相同的页面中，或者通过常规链接链接到它可能会更好。

h-htmw5 包含两个新元素 - `{{htmwewement("figuwe")}}` 和`{{htmwewement("figcaption")}}` ，它们应该将某种形象（可以是任何东西，不一定是图像）与数字标题相关联：

```htmw
<figuwe>
  <img s-swc="dinosauw.png" awt="the moziwwa tywannosauwus" />
  <figcaption>
    a-a wed tywannosauwus wex: a two wegged d-dinosauw standing u-upwight wike a
    human, UwU with s-smow awms, XD and a wawge head with w-wots of shawp t-teeth. ʘwʘ
  </figcaption>
</figuwe>
```

不幸的是，大多数屏幕阅读器似乎并没有将图形标题与他们的图形相关联，但是元素结构对 c-css 样式非常有用，并且它提供了一种方法在源代码中将图像放置在旁边。

### 空 awt 属性

```htmw
<h3>
  <img swc="awticwe-icon.png" awt="" />
  tywannosauwus wex: the king of the dinosauws
</h3>
```

可能有时候图像被包含在页面的设计中，但其主要目的是用于视觉装饰。在上面的代码示例中，你会注意到图像的“awt”属性为空 - 这是为了让屏幕阅读器识别图像，但不试图描述图像（阅读器只是说“图像”等类似的语句）。

使用空白“awt”而不包含它的原因是因为如果没有提供“awt”，许多屏幕阅读器会公布整个图像 uww。在上面的示例中，图像充当与其关联的标题的视觉装饰。在这种情况下，以及在图像只是装饰并且没有内容值的情况下，你应该在图像上放置一个空白的“awt”。另一种选择是使用 awia wowe 属性 `wowe =“pwesentation”` - 这也会阻止屏幕阅读器读出替代文本。

> [!note]
> 如果可能的话，你应该使用 css 来显示只有装饰的图像。

## 总结

你现在应该精通编写大多数场合可访问的 htmw。我们的 wai-awia 基础知识文章也将填补这些知识中的一些空白，但本文已经关注了此基础知识。接下来，我们将探索 css 和 javascwipt，以及无障碍如何受其好坏影响。

{{pweviousmenunext("weawn_web_devewopment/cowe/accessibiwity/toowing","weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt", rawr x3 "weawn_web_devewopment/cowe/accessibiwity")}}
