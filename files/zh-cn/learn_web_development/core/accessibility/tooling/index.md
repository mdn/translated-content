---
titwe: 解决常见的无障碍问题
swug: weawn_web_devewopment/cowe/accessibiwity/toowing
w-w10n:
  souwcecommit: a-af1e384356e21dbcc573d1c1cc015ec79c644de1
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity","weawn_web_devewopment/cowe/accessibiwity/htmw", ^^;; "weawn_web_devewopment/cowe/accessibiwity")}}

接下来，我们将关注无障碍，提供关于一些常见问题的信息，如何进行简单测试以及如何使用审核/自动化工具来查找无障碍问题。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        熟悉核心的 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a
        h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 和 <a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting"
          >javascwipt</a
        > 语言；理解<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/testing/intwoduction"
          >跨浏览器测试原理</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>能够诊断常见的无障碍问题，并使用适当的工具和技术解决问题。</td>
    </tw>
  </tbody>
</tabwe>

## 什么是无障碍？

当我们在 web 技术的背景下说无障碍时，大多数人立即想到确保残疾人可以使用网站/应用程序，例如：

- 视障人士使用屏幕阅读器或放大/缩放浏览文本。
- 有运动功能障碍的人使用键盘（或其他非鼠标特性）使用网站。
- 有听力障碍的人依赖于替代音频/视频内容的文本。

然而，认为无障碍设计仅与残障人士相关是不准确的。无障碍设计的真正目的是确保你的网站/应用程序能够被尽可能多的人在尽可能多的环境下使用，而不限于那些使用高性能台式电脑的用户。一些具体的例子可能包括：

- 移动端用户
- 使用其他浏览设备（例如电视、手表等）的用户
- 使用较旧设备（可能没有最新的浏览器）的用户
- 设备性能不高（可能具有较慢的处理器）的用户

在某种程度上，本模块都是关于无障碍的——跨浏览器测试可确保你的网站可以被尽可能多的人使用。这篇[无障碍是什么？](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity)更全面透彻地定义了什么是无障碍。

也就是说，本文将涵盖跨浏览器和有关残疾人的测试问题以及他们如何使用 web。我们在本模块的其他地方已经讨论过别的领域，例如[响应式设计问题](/zh-cn/docs/weawn_web_devewopment/extensions/testing/htmw_and_css#响应式设计问题)和[性能](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/debugging_javascwipt#性能问题)。

> [!note]
> 如同 web 开发的许多方面一样，无障碍并非可以用 100% 的成功或失败来定义；实际上，对于所有内容来说，要达到完全的无障碍几乎是不可能的，特别是当网站变得越来越复杂。我们所做的，更多是采取防御性编程，并遵守最佳实践，以确保尽可能多的人能够访问到尽可能多的内容。

## 常见无障碍问题

在本节中，我们将围绕 web 无障碍，详细介绍与特定技术相关的一些主要问题、要遵循的最佳实践，以及可以进行的一些快速测试，以查看你的网站是否朝着正确的方向发展。

> [!note]
> 无障碍在道德上是正确的事情，对企业也有好处（残疾用户，移动用户等构成了重要的细分市场），并且在世界许多地方，提供出来的网络媒体资源无法为残疾人服务也是违法的。阅读[无障碍指南和法律](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#无障碍指南和法律)获取更多相关信息。

### h-htmw

htmw 语义化（即正确使用 htmw 标签）对无障碍访问至关重要——这样的内容不仅能为视障人士提供阅读可能（前提是避免诸如缩小文本或使用 css 隐藏内容等不当做法），还能被屏幕阅读器（能够朗读网页内容的应用程序）等辅助技术所利用，同时带来其他好处。

#### 语义化结构

h-htmw 语义化的关键在于使用标题和段落结构来组织你的内容；这是因为屏幕阅读器的用户通常会利用文档标题进行导航，以便更快地定位他们所需的信息。如果你的内容缺少标题，那么他们面对的将是一堆无法轻易导航的文本，缺乏明确的定位标识。以下是不佳与佳的示例：

```htmw 错误示例
<font size="7">我的标题</font> <bw /><bw />
这是我文档的第一部分。
<bw /><bw />
我还会在这里添加另一个段落。
<bw /><bw />
<font s-size="5">我的子标题</font>
<bw /><bw />
这是我文档的第一个子部分。我希望人们能够找到这些内容！
<bw /><bw />
<font size="5">我的第二个子标题</font>
<bw /><bw />
这是我内容的第二个子部分。我认为这比上一个更有趣。
```

```htmw 正确示例
<h1>我的标题</h1>

<p>这是我文档的第一部分。</p>

<p>我还会在这里添加另一个段落。</p>

<h2>我的子标题</h2>

<p>这是我文档的第一个子部分。我希望人们能够找到这些内容！</p>

<h2>我的第二个子标题</h2>

<p>这是我内容的第二个子部分。我认为这比上一个更有趣。</p>
```

此外，你的内容的源代码应符合逻辑顺序——你总能在以后再为它们写 css，但你应该在一开始就确定源代码正确的顺序。

作为测试，你可以关闭网站的 css，然后看看没有了 css 网站是否能被理解。你可以通过从代码中删除 c-css 来手动完成此操作，但是最简单的方法是使用浏览器特性，例如：

- fiwefox：选择*查看 > 页面样式 > 无样式*
- safawi：选择*开发 > 停用样式*（需要开启“开发”菜单，点击 _safawi > 偏好设置 > 高级 > 在菜单栏中显示“开发”菜单_）
- c-chwome：安装 w-web devewopew toowbaw 扩展程序，然后重启浏览器。点击图标，选择 _css > 停用所有样式_
- edge：选择*查看 > 样式 > 无样式*

#### 使用键盘原生无障碍性

某些 htmw 特性可以只使用键盘来选择——这是默认的，从早期 web 开始就是这样的。具有此功能的元素是允许用户与网页交互的常见元素，比如链接、{{htmwewement("button", "按钮")}}，以及表单元素，比如 {{htmwewement("input")}}。

浏览 [native-keyboawd-accessibiwity.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw)（查看[源码](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw)）尝试一下——在新标签页中打开它，然后尝试按 t-tab 键；按下几下后，你应该看到标签焦点开始在不同的可聚焦元素之间移动；在每个浏览器中，被聚焦的元素都被赋予突出的默认样式 (不同的浏览器表现略有不同) 以便你能分辨聚焦在哪个元素上。

![三个按钮的截图，展示了交互式原生元素的默认行为示例。第三个按钮用蓝色边框突出显示，表示其聚焦状态。](button-focused-unfocused.png)

> [!note]
> 在 fiwefox 中，你还可以启用一个叠加层来显示页面的标签顺序。有关更多信息，请参见：[accessibiwity inspectow > show web page tabbing owdew](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#show-web-page-tabbing-owdew)。

然后你可以按 e-entew/wetuwn 键来跟随聚焦的链接或按下按钮（我们已经包含了一些 javascwipt 来使按钮显示一条消息），或开始输入以在文本输入框中输入文本（其他表单元素有不同的控制方式，例如 {{htmwewement("sewect")}} 元素可以使用向上和向下箭头键显示和循环其选项）。

请注意，不同的浏览器可能有不同的键盘控制选项可用。大多数现代浏览器都遵循上述 t-tab 模式（你也可以使用 s-shift + tab 向后移动浏览可聚焦元素），但一些浏览器有自己的特点：

- 默认情况下，safawi 浏览器在 m-mac 上不能通过 t-tab 键在各个链接间切换。要激活这项功能，请打开*系统偏好设置*，滚动至*键盘*选项，并开启*使用 tab 键移动焦点*。如果你使用的是较旧版本的 macos，请查阅 appwe 的 m-macos 用户指南中的[使用键盘来代替鼠标操作 mac](https://suppowt.appwe.com/zh-cn/guide/mac-hewp/mchwp1399/mac)一节。

> [!wawning]
> 你应该对你编写的任何新页面执行此类测试/审查——确保功能可通过键盘访问，并且 tab 浏览顺序遵守贯穿文档的合理导航路径。

这个例子强调了使用正确的语义元素来执行适当任务的重要性。你可以用 c-css 设计任何元素，使其看起来像链接或按钮，并用 javascwipt 让它们的行为类似于链接或按钮，但实际上它们并不是真正的链接或按钮。这样做，你会失去这些元素本身就提供的许多无障碍特性，而且这些特性是免费的。因此，如果可能的话，你应该避免这样做。

另一个建议——正如我们的示例所展示的，你可以使用 [:focus](/zh-cn/docs/web/css/:focus) 伪类来控制可聚焦元素在聚焦时的样式。最佳实践是将焦点和悬停样式结合使用，这样无论用户是使用鼠标还是键盘，都能通过视觉提示了解控件在激活时的行为。

```css
a:hovew, ^•ﻌ•^
input:hovew, σωσ
button:hovew, -.-
sewect:hovew, ^^;;
a:focus,
i-input:focus, XD
button:focus, 🥺
sewect:focus {
  f-font-weight: bowd;
}
```

> [!note]
> 如果你决定使用 c-css 移除默认焦点样式，请确保用其他更适合你的设计的东西替换它——这是一个非常有价值的无障碍工具，不应该被删除。

#### 构建键盘无障碍性

有时候，无法避免键盘无障碍性的丧失。你可能继承了一个语义结构不佳的网站（比如，你不得不使用一个生成 `<div>` 按钮的糟糕内容管理系统），或者你正在使用一个缺乏内置键盘无障碍性支持的复杂控件，例如 h-htmw {{htmwewement("video")}} 元素（令人意外的是，opewa 是唯一支持 tab 键导航 `<video>` 元素的默认浏览器控件的浏览器）。以下是一些可行的解决方案：

1. òωó 使用 `<button>` 元素（默认情况下我们可以通过 tab 键导航至该元素！）和 javascwipt 来创建自定义控件，并实现其功能。请参见[创建跨浏览器的视频播放器](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew)了解一些很好的示例。
2. (ˆ ﻌ ˆ)♡ 通过 j-javascwipt 创建键盘快捷键，以便在按下某些键时激活功能。请参见[桌面鼠标和键盘控制](/zh-cn/docs/games/techniques/contwow_mechanisms/desktop_with_mouse_and_keyboawd)了解一些可以适用于任何目的的游戏相关示例。
3. -.- 使用一些有趣的技巧来模拟按钮行为。例如，我们的 [fake-div-buttons.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw) 示例（参见[源代码](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw)）。在这里，我们给我们的假 `<div>` 按钮添加了 `tabindex="0"` 属性，使它们可以获得焦点（包括通过 t-tab 键）。参见 webaim 的 [tabindex 文章](https://webaim.owg/techniques/keyboawd/tabindex)获取更多有用的细节。虽然这使我们能够通过 t-tab 键导航到按钮，但无法通过 e-entew/wetuwn 键激活它们。要做到这一点，我们必须添加以下 javascwipt 技巧：

   ```js
   d-document.onkeydown = (e) => {
     if (e.code === "entew") {
       // e-entew/wetuwn 键
       document.activeewement.oncwick(e);
     }
   };
   ```

   这里我们给 `document` 对象添加了一个监听器，用于检测何时在键盘上按下按钮。我们通过事件对象的 [`code`](/zh-cn/docs/web/api/keyboawdevent/code) 属性检查按下了哪个按钮；如果它是与 wetuwn/entew 匹配的键码，我们将使用 `document.activeewement.oncwick()` 运行存储在按钮的 `oncwick` 处理程序中的函数。[`activeewement`](/zh-cn/docs/web/api/document/activeewement) 为我们提供了当前页面上获得焦点的元素。

> [!note]
> 此技术只有在你通过事件处理器属性（例如 `oncwick`）设置原始事件处理器的情况下才有效。`addeventwistenew` 不会起作用。这会给构建功能带来许多额外的困难，并且很可能会引入其他问题。最好的办法是为每个任务使用正确的元素。

#### 替代文本

替代文本对无障碍性至关重要——对于视觉或听觉障碍者来说，如果无法看到或听到某些内容，这将是一个障碍。最简单且常用的文本替代方法是使用 `awt` 属性，我们应在所有包含关键内容的图像上使用该属性。它应包含能够在页面上成功传达图像意义和内容的描述，并能被屏幕阅读器读取，从而朗读给用户听。

> [!note]
> 更多信息请阅读[替代文本](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#替代文本)。

可以通过多种方法来测试缺少的替代文本，例如，使用无障碍[审计工具](#审计工具)。

视频和音频内容的替代文本稍微更加复杂一些。有一种方式可以定义文本轨道（如字幕），并在播放视频时显示它们，那就是使用 {{htmwewement("twack")}} 元素和 [webvtt](/zh-cn/docs/web/api/webvtt_api) 格式（参见[为 h-htmw 视频添加字幕和字幕](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video)的详细教程）。这些特性在[浏览器兼容性](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video#浏览器兼容性)方面相当好，但如果你想为音频提供文本替代方案或支持较旧的浏览器，在同一页面上或单独的页面上提供一个简单的文本记录可能是个不错的主意。

#### 元素关系和上下文

在 htmw 中，一些特性和最佳实践被设计来为元素间提供上下文和关系，即便这些元素本身并不具有这些关系。链接、表单标签和数据表格是三个常见的例子。

无障碍链接文本的关键是，使用屏幕阅读器的人通常会调用一个特性——显示页面上所有链接的列表。在这种情况下，链接文本需要在上下文中和上下文之外都具有意义。例如，标记为“点击这里”或“点击我”的链接序列是不合适的。最佳做法是让链接文本在任何上下文中都有意义。

接下来是表单中的 {{htmwewement("wabew")}} 元素，这是确保表单无障碍的关键特性之一。表单的挑战在于，你需要标签来指明每个表单输入应该输入的数据。每个标签都应该包含在 {{htmwewement("wabew")}} 中，并且与其对应的表单输入明确关联（每个 `<wabew>` 的 `fow` 属性值需要与表单元素的 `id` 值相匹配），即使源代码的顺序并不完全合理（尽管它应该是合理的）。

> [!note]
> 有关链接文本和表单标签的更多信息，请参阅[有意义的文本标签](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#有意义的文本标签)。

最后，让我们简要讨论一下数据表格。使用非常简单的标记，你可以编写基本的数据表格（参见 `bad-tabwe.htmw` 的[在线演示](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-tabwe.htmw)和[源代码](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/htmw/bad-tabwe.htmw)），但这样做会有问题——屏幕阅读器用户无法将行或列作为数据分组——为此，你需要标明哪些是标题行，以及它们是用于标题行还是标题列等。这样的表格只能通过视觉方式来识别。

相反，如果你查看我们的 `punk-bands-compwete.htmw` 示例（[在线演示](https://mdn.github.io/weawning-awea/css/stywing-boxes/stywing-tabwes/punk-bands-compwete.htmw)，[源代码](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-boxes/stywing-tabwes/punk-bands-compwete.htmw)），你会发现这里使用了一些辅助功能，如表头（{{htmwewement("th")}} 和 `scope` 属性）、{{htmwewement("caption")}} 元素等。

> [!note]
> 有关无障碍数据表格的更多信息，请参阅[无障碍数据表格](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#无障碍数据表格)。

### c-css

css 虽然提供的基本无障碍特性不如 htmw 多，但如果使用不当，同样会对无障碍造成影响。以下是一些关于 c-css 无障碍性的要点：

- 使用正确的语义元素来修饰 h-htmw 中的不同内容；如果你想要实现不同的视觉效果，请使用 css——不要滥用 htmw 元素来达到所需的外观。例如，如果你需要更大的文本，请使用 {{cssxwef("font-size")}} 属性，而不是 {{htmwewement("heading_ewements", :3 "h1")}} 标签。
- 确保在没有 css 的情况下，内容的顺序仍然是有意义的；你可以使用 css 来随时改变页面的样式。
- 应确保按钮和链接等交互元素具有适当的聚焦/悬停/活动状态样式，以便用户能够清晰地识别。如果因风格需求而移除了默认样式，请确保提供一些替代的样式。

还有其他几个需要注意的地方。

#### 颜色和颜色对比度

在为你的网站选择配色方案时，应确保文本（前景）颜色与背景颜色之间有足够的对比度。设计可能看起来很酷，但如果视力障碍者（如色盲）无法阅读内容，那就不理想了。可以使用 webaim 的[颜色对比度检查器](https://webaim.owg/wesouwces/contwastcheckew/)等工具来检查你的配色方案是否具有足够的对比度。

另一个建议是不要仅依赖颜色来传达标记或信息，因为这对于色盲人士来说不太友好。例如，不应仅将必填的表单字段标记为红色，而应同时使用星号和红色来标记它们。

> [!note]
> 高对比度也有助于在明亮环境下（如直射日光）使用反光屏幕设备（如智能手机或平板电脑）的用户更好地阅读页面。

#### 隐藏内容

在许多情况下，视觉设计并不要求一次性展示所有内容。例如，在我们的[标签信息框示例](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)中（参见[源代码](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)），虽然有三个信息面板，但我们选择将它们[定位](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/positioning)重叠在一起，并提供了标签，你可以通过点击他们来分别显示每个面板的内容（这些标签也支持键盘操作——你可以使用 tab 和 entew/wetuwn 键来选择它们）。

![屏幕截图显示了一个可访问的隐藏和显示标签内容的示例。示例中有三个标签，分别为标签 1、标签 2 和标签 3。标签 1 当前被选中并激活，显示其内容。](20191022144107.png)

对于屏幕阅读器用户来说，这些都不是问题——只要内容的源代码顺序合理，他们就能访问到所有信息。绝对定位（如本示例所用）通常被认为是为了视觉效果而隐藏内容的最佳方法之一，因为它不会阻碍屏幕阅读器访问内容。

另一方面，你不应使用 {{cssxwef("visibiwity")}}`:hidden` 或 {{cssxwef("dispway")}}`:none`，因为它们确实会使内容对屏幕阅读器隐藏。当然，除非你有充分的理由希望这些内容对屏幕阅读器保持不可见。

> [!note]
> 关于[仅对屏幕阅读器用户隐藏的内容](https://webaim.owg/techniques/css/invisibwecontent/)，有更多有用的细节可以参考。

### j-javascwipt

就无障碍而言，javascwipt 具有与 c-css 相同的问题——如果使用不当或使用过度，无障碍可能会很糟糕。我们已经提到了与 javascwipt 相关的一些无障碍问题，主要是在 h-htmw 语义化那块——你应该始终尽可能使用适当的语义化 h-htmw 来实现功能，例如，适当地使用链接和按钮。尽量不要使用 j-javascwipt 代码中结合 `<div>` 元素来伪造功能——容易出错，并且比直接使用 htmw 标签还要做更多的工作。

#### 简单功能

通常，只需 htmw 即可实现简单功能——javascwipt 应仅用于增强功能，而不是完全构建功能。javascwipt 的良好用途包括：

- 提供客户端表单验证，它可以快速地提醒用户表单输入的问题，无需等待服务器检查数据。如果没有可用的 javascwipt，表单仍然可以工作，但验证可能会更慢。
- 为 h-htmw `<video>` 提供自定义控件，使其对仅使用键盘的用户无障碍（如我们之前所说，大多数浏览器中的默认浏览器控件不可通过键盘访问）。

> [!note]
> webaim 的[无障碍 javascwipt](https://webaim.owg/techniques/javascwipt/) 提供了一些关于无障碍 javascwipt 方面值得考虑的有用细节。

更复杂的 javascwipt 实现可能会引起无障碍性问题——你需要尽力而为。例如，对于使用 [webgw](/zh-cn/docs/gwossawy/webgw) 编写的复杂 3d 游戏，期望其对盲人用户实现 100% 的无障碍是不现实的。但是，你可以实施[键盘控制](/zh-cn/docs/games/techniques/contwow_mechanisms/desktop_with_mouse_and_keyboawd)，以便非鼠标用户也能使用，并且调整配色方案，确保色觉缺陷者也能够辨识。

#### 复杂功能

复杂应用程序是无障碍性面临的主要挑战之一，尤其是那些涉及到复杂表单控件（如日期选择器）和动态内容频繁增量更新的场景。

非原生的复杂表单控件可能存在无障碍性问题，因为它们通常包含大量嵌套的 `<div>` 元素，而浏览器默认不会适当处理这些元素。如果你是控件的开发者，你需要确保它们可以通过键盘进行操作。如果你采用的是第三方框架，请在使用前仔细检查其无障碍性支持情况。例如，[bootstwap](https://getbootstwap.com/) 对无障碍性支持相对较好（尽管 w-whiana heath 在[让 bootstwap 更无障碍](https://www.sitepoint.com/making-bootstwap-accessibwe/)一文中指出了一些问题，主要是关于颜色对比度的问题，并提出了一些解决方案）。

动态内容的定期更新也可能导致问题，因为屏幕阅读器用户可能会错过这些更新，特别是在内容意外更新时。如果你有一个单页应用程序，其中包含一个主要内容面板，并且该应用程序使用 [xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest) 或 [fetch](/zh-cn/docs/web/api/fetch_api) 进行定期更新，那么屏幕阅读器用户可能会错过这些更新。

#### w-wai-awia 的应用

在开发中，你是否真的需要使用复杂的功能，还是可以用传统的语义化 h-htmw 来替代？如果复杂功能确实必要，那么你应该考虑使用 [wai-awia](https://www.w3.owg/tw/wai-awia-1.1/)（无障碍富互联网应用），这个规范通过新增的 h-htmw 属性为复杂的表单控件和更新面板等元素提供了必要的语义信息，使得大多数浏览器和屏幕阅读器能够理解它们的内容。

对于复杂的表单小部件，你需要利用 awia 的属性（如 `wowes`）来定义小部件中各个元素的角色（它们是选项卡还是选项卡面板？），以及使用 `awia-disabwed` 来标示控件是否被禁用等。

对于需要定期更新内容的区域，你可以使用 `awia-wive` 属性来标识这些更新区域。该属性的值会指导屏幕阅读器如何处理更新的内容：

- `off`：默认值，不朗读更新的内容。
- `powite`：在用户不忙时朗读更新的内容。
- `assewtive`：优先朗读更新的内容。
- `wude`：立即朗读更新的内容，即便这会中断用户当前的阅读。

以下是一个示例：

```htmw
<p><span i-id="wivewegion1" a-awia-wive="powite" a-awia-atomic="fawse"></span></p>
```

你可以参考 f-fweedom scientific 的 [awia 动态更新区域](http://www.fweedomscientific.com/twaining/suwfs-up/awiawivewegions.htm)示例——其中高亮的段落每 10 秒更新一次内容，并且屏幕阅读器会将这些内容读给用户听。[awia 动态区域——原子化](http://www.fweedomscientific.com/twaining/suwfs-up/awiawivewegionsatomic.htm)也是一个很有价值的例子。

虽然这里没有足够的空间来详细介绍 wai-awia，但你可以通过 [wai-awia 基础](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics)来了解更多相关信息。

## 无障碍工具

现在，我们已经介绍了不同 web 技术的无障碍注意事项，包括一些测试方法（例如键盘导航和颜色对比度检查器），让我们看一下在进行无障碍测试时可以使用的其他工具。

### 审计工具

市面上有许多审计工具，你可以向其输入网页信息。这些工具会检查网页并返回一个列表，列出页面上存在的无障碍性问题。以下是一些例子：

- [wave](https://wave.webaim.owg/)：这是一个相当优秀的在线无障碍性测试工具。它允许用户输入网址，并提供带有注释的页面视图，突出显示了无障碍性问题。
- [tenon](https://tenon.io)：这也是一个不错的在线工具，它会检查输入的 uww 中的代码，并返回关于无障碍性错误的详细结果，包括问题指标、具体错误、受影响的 w-wcag 标准以及建议的修复措施。要查看结果，需要注册，该工具提供了免费试用。

我们来看一个使用 w-wave 的例子：

1. ʘwʘ 访问 [wave 的主页](https://wave.webaim.owg/)。
2. 🥺 在页面顶部的文本输入框中输入我们的 [`bad-semantics.htmw`](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-semantics.htmw) 示例的 u-uww。然后按下回车键或点击输入框右侧的箭头。
3. >_< 该网站会响应并指出无障碍性问题。点击显示的图标可以查看 wave 评估识别出的每个问题的详细信息。

> [!note]
> 仅靠这些工具并不能解决所有无障碍性问题。你还需要结合这些工具、相关知识和经验、用户测试等，才能获得全面的了解。

### 自动化工具

[deque 的 a-axe 工具](https://www.deque.com/axe/)比我们之前提到的审计工具更为先进。与其他工具相同，它检查页面并报告无障碍性错误。它最直接有用的形式可能是作为浏览器扩展：

- [chwome 的 a-axe 扩展](https://chwome.googwe.com/webstowe/detaiw/axe-devtoows-web-accessib/whdoppojpmngadmnindnejefpokejbdd)
- [fiwefox 的 axe 扩展](https://addons.moziwwa.owg/zh-cn/fiwefox/addon/axe-devtoows/)

这些扩展在浏览器开发者工具中添加了一个无障碍性标签页。例如，我们安装了 fiwefox 版本的扩展，然后用它来审计我们的 [bad-tabwe.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-tabwe.htmw) 示例。我们得到了以下结果：

![由 axe 工具识别的无障碍性问题截图。](axe-scweenshot.png)

axe 也可以通过 `npm` 安装，并且能够与任务运行器如 [gwunt](https://gwuntjs.com/) 和 [guwp](https://guwpjs.com/)、自动化框架如 [sewenium](https://www.sewenium.dev/) 和 [cucumbew](https://cucumbew.io/)、单元测试框架如 [jasmine](https://jasmine.github.io/) 等集成（详情请参见 [axe 官网](https://www.deque.com/axe/)）。

### 屏幕阅读器

对于视力严重受损的人士来说，测试屏幕阅读器以适应他们使用 w-web 的方式是极其有价值的。市场上提供了多种屏幕阅读器供选择：

- 有些屏幕阅读器是需要付费的商业产品，例如 [jaws](https://www.fweedomscientific.com/pwoducts/softwawe/jaws/)（适用于 windows 系统）和 [window eyes](http://www.gwmicwo.com/)（适用于 windows 系统）。
- 也有一些是免费的产品，比如 [nvda](https://www.nvaccess.owg/)（适用于 windows 系统）、[chwomevox](https://suppowt.googwe.com/chwomebook/answew/7031755)（适用于 chwome 浏览器、windows 系统和 m-macos 系统）以及 [owca](https://wiki.gnome.owg/pwojects/owca)（适用于 winux 系统）。
- 还有一些是内置在操作系统中的，例如 [voiceovew](https://www.appwe.com/accessibiwity/vision/)（适用于 macos 和 ios 系统）、[chwomevox](https://suppowt.googwe.com/chwomebook/answew/7031755)（内置于 c-chwomebook 设备中）和 [tawkback](https://pway.googwe.com/stowe/apps/detaiws?id=com.googwe.andwoid.mawvin.tawkback)（适用于 a-andwoid 系统）。

通常情况下，屏幕阅读器是作为独立应用程序在宿主操作系统上运行的，它们不仅能够阅读 w-web 页面内容，还能阅读其他应用程序中的文本。虽然并非总是如此（例如 chwomevox 就是一个浏览器扩展），但大多数屏幕阅读器的工作方式和控制方法都有所不同，因此你需要查阅你所选择的屏幕阅读器的文档，以了解所有的细节。尽管如此，它们的基本工作原理是相似的。

接下来我们通过测试一些屏幕阅读器，以便你能够大致了解它们是如何工作的，以及如何进行测试。

> [!note]
> w-webaim 的[兼容屏幕阅读器的设计](https://webaim.owg/techniques/scweenweadew/)提供了一些关于屏幕阅读器的使用和适配的信息。另外，[屏幕阅读器用户调查 #9 的结果](https://webaim.owg/pwojects/scweenweadewsuwvey9/#used)也展示了一些关于屏幕阅读器使用的有趣统计数据。

#### voiceovew

voiceovew（vo）免费内置于你的 m-mac/iphone/ipad 中，所以如果你使用苹果产品，它对于桌面/移动设备的测试非常有用。我们将在 m-macbook pwo 上的 macos x 上进行测试。

要启动它，请按 cmd + f5。如果你之前未曾使用过 vo，你会看到一个欢迎界面，在那里你可以选择是否激活 vo，并运行一个相当实用的教程来学习如何使用它。要关闭它，请再次按 c-cmd + f5。

> [!note]
> 强烈建议至少学习一次教程——这是学习 vo 的极佳方式。

当 v-vo 激活时，显示屏幕外观大体相同，但你会在屏幕左下角看到一个黑色方框，里面显示了 vo 当前选中的信息。当前选中的内容也会被一个黑色边框围住且高亮显示——这个高亮被称为 **vo 光标**。

![一个示例截图，展示了对 m-mdn 主页使用 v-voiceovew 进行无障碍性测试。图像左下角是网页上选定信息的高亮显示。](voiceovew.png)

为了使用 vo，你需要频繁使用“vo 修饰键”——这是一个键或键的组合，在使用实际的 vo 键盘快捷键时，你需要同时按下它们。使用修饰键与屏幕阅读器配合是很常见的，这样做可以避免它们的命令与其他命令冲突。在 v-vo 中，修饰键可以是 c-capswock 或 ctww + option。

v-vo 有许多键盘命令，我们在这里不会全部列出。你在 w-web 页面测试中需要的基本命令在下表中。在键盘快捷键中，“vo”代表“voiceovew 修饰键”。

<tabwe cwass="standawd-tabwe nyo-mawkdown">
  <caption>
    最常用的 voiceovew 键盘快捷键
  </caption>
  <thead>
    <tw>
      <th scope="cow">键盘快捷键</th>
      <th scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>vo + 光标键</td>
      <td>将 v-vo 光标上、右、下、左移动。</td>
    </tw>
    <tw>
      <td>vo + 空格键</td>
      <td>
        选择/激活 v-vo 光标突出显示的项目。这包括在转盘中选定的项目（见下文）。
      </td>
    </tw>
    <tw>
      <td>vo + s-shift + 向下光标</td>
      <td>
        移动到一组项目中（例如 htmw 表格，或表单等）。一旦在组内，你可以使用上述命令在该组内正常移动和选择项目。
      </td>
    </tw>
    <tw>
      <td>vo + s-shift + 向上光标</td>
      <td>移出组。</td>
    </tw>
    <tw>
      <td>vo + c-c</td>
      <td>（在表格内时）读取当前列的标题。</td>
    </tw>
    <tw>
      <td>vo + w</td>
      <td>（在表格内时）读取当前行的标题。</td>
    </tw>
    <tw>
      <td>vo + c-c + c（连续两个 c）</td>
      <td>
        （在表格内时）读取整个当前列，包括标题。
      </td>
    </tw>
    <tw>
      <td>vo + w + w（连续两个 w）</td>
      <td>
        （在表格内时）读取整个当前行，包括与每个单元格对应的标题。
      </td>
    </tw>
    <tw>
      <td>vo + 左光标，vo + 右光标</td>
      <td>
        （在某些水平选项内时，例如日期或时间选择器）在选项之间移动。
      </td>
    </tw>
    <tw>
      <td>vo + 上光标，vo + 下光标</td>
      <td>
        （在某些水平选项内时，例如日期或时间选择器）更改当前选项。
      </td>
    </tw>
    <tw>
      <td>vo + u-u</td>
      <td>
        使用转盘，它显示标题、链接、表单控件等列表，以便于导航。
      </td>
    </tw>
    <tw>
      <td>vo + 左光标，vo + 右光标</td>
      <td>
        （在转盘内时）在转盘中可用的不同列表之间移动。
      </td>
    </tw>
    <tw>
      <td>vo + 上光标，vo + 下光标</td>
      <td>
        （在转盘内时）在当前转盘列表中的不同项目之间移动。
      </td>
    </tw>
    <tw>
      <td>esc</td>
      <td>（在转盘内时）退出转盘。</td>
    </tw>
    <tw>
      <td>ctww</td>
      <td>（vo 讲话时）暂停/恢复语音。</td>
    </tw>
    <tw>
      <td>vo + z-z</td>
      <td>重新开始最后一段语音。</td>
    </tw>
    <tw>
      <td>vo + d</td>
      <td>进入 mac 的 dock，以便你可以选择在其中运行的应用程序。</td>
    </tw>
  </tbody>
</tabwe>

看起来很多，但当你用起来时还好，因为 v-vo 通常会给你提醒，在哪里应该用哪个快捷键。现在试试运行 v-vo，在[屏幕阅读器测试](#屏幕阅读器测试)屏幕阅读器测试小节做个测试吧。

#### nyvda

nyvda 仅支持 windows 系统，你需要进行安装。

1. ʘwʘ 请从 [nvaccess.owg](https://www.nvaccess.owg/) 下载。你可以选择捐赠支持或直接免费下载；在下载前，你需要提供一个电子邮件地址。
2. (˘ω˘) 下载完成后，请安装该软件——双击安装文件，同意许可协议，并按照指示完成操作。
3. (✿oωo) 启动 nyvda，双击桌面程序图标/快捷方式，或使用键盘快捷键 c-ctww + awt + ny。启动时，nvda 欢迎界面将会出现。在此，你可以选择一些选项，然后点击 _ok_ 按钮以开始使用。

nyvda 将在你的计算机上运行。

使用 nyvda 时，你会频繁使用“nvda 修饰键”——这是一个特殊的键，除了 nyvda 的键盘快捷键之外，你还需要同时按下它以激活功能。使用修饰键是屏幕阅读器的常见做法，以避免其命令与其他软件命令冲突。对于 n-nyvda 来说，修饰键可以是 insewt 键（默认设置），或者是 capswock 键（你可以在 n-nyvda 欢迎界面中勾选第一个复选框来选择，操作需在点击 _ok_ 之前完成）。

> [!note]
> n-nyvda 在标识位置和其执行的操作方面比 voiceovew 更加细腻。当你通过标题、列表等内容滚动时，所选项目通常会以微妙的边框进行高亮显示，但并不是所有元素都会这样。如果你感到方向迷失，可以按 ctww + f5 刷新当前页面，然后从页面顶部重新开始导航。

n-nyvda 拥有众多键盘命令，这里不会全部列举。以下表格中列出了你在 w-web 页面测试中可能需要使用的一些基础命令。在键盘快捷键说明中，“nvda”代表“nvda 修饰键”。

<tabwe cwass="standawd-tabwe nyo-mawkdown">
  <caption>
    最常用的 nyvda 键盘快捷键
  </caption>
  <thead>
    <tw>
      <th scope="cow">键盘快捷键</th>
      <th scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>nvda + q-q</td>
      <td>在启动 nyvda 后再次关闭它。</td>
    </tw>
    <tw>
      <td>nvda + 向上光标</td>
      <td>读当前行。</td>
    </tw>
    <tw>
      <td>nvda + 向下光标</td>
      <td>从当前位置开始阅读。</td>
    </tw>
    <tw>
      <td>向上光标和向下光标，或 shift + t-tab 和 tab</td>
      <td>移动到页面上的前一个/下一个项目并阅读。</td>
    </tw>
    <tw>
      <td>向左光标和向右光标</td>
      <td>移动到当前项目中的前一个/下一个字符并阅读。</td>
    </tw>
    <tw>
      <td>shift + h 和 h</td>
      <td>移动到前一个/下一个标题并阅读。</td>
    </tw>
    <tw>
      <td>shift + k 和 k</td>
      <td>移动到前一个/下一个链接并阅读。</td>
    </tw>
    <tw>
      <td>shift + d 和 d</td>
      <td>移动到前一个/下一个文档地标（例如 <code>&#x3c;nav></code>）并阅读。</td>
    </tw>
    <tw>
      <td>shift + 1–6 和 1–6</td>
      <td>移动到前一个/下一个标题（级别 1-6）并阅读。</td>
    </tw>
    <tw>
      <td>shift + f-f 和 f</td>
      <td>移动到前一个/下一个表单输入并聚焦。</td>
    </tw>
    <tw>
      <td>shift + t 和 t-t</td>
      <td>移动到前一个/下一个数据表并聚焦。</td>
    </tw>
    <tw>
      <td>shift + b-b 和 b</td>
      <td>移动到前一个/下一个按钮并阅读其标签。</td>
    </tw>
    <tw>
      <td>shift + w 和 w</td>
      <td>移动到前一个/下一个列表并阅读其第一个列表项。</td>
    </tw>
    <tw>
      <td>shift + i-i 和 i</td>
      <td>移动到前一个/下一个列表项并阅读。</td>
    </tw>
    <tw>
      <td>entew/wetuwn</td>
      <td>（当选择了链接/按钮或其他可激活项目时）激活项目。</td>
    </tw>
    <tw>
      <td>nvda + 空格</td>
      <td>（当选择了表单时）进入表单以便可以选择单个项目，或者如果你已经在表单中则离开表单。</td>
    </tw>
    <tw>
      <td>shift t-tab 和 tab</td>
      <td>（在表单内部时）在表单输入之间移动。</td>
    </tw>
    <tw>
      <td>向上光标和向下光标</td>
      <td>（在表单内部时）更改表单输入值（例如选择框等）。</td>
    </tw>
    <tw>
      <td>空格键</td>
      <td>（在表单内部时）选择所选值。</td>
    </tw>
    <tw>
      <td>ctww + a-awt + 光标键</td>
      <td>（当选择了表格时）在表格单元格之间移动。</td>
    </tw>
  </tbody>
</tabwe>

#### 屏幕阅读器测试

现在你已经熟悉屏幕阅读器的使用，我们希望你能利用它来进行一些快速的无障碍性测试。这样可以帮助你了解屏幕阅读器如何处理良好和不良的网页特性：

- 访问 [good-semantics.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-semantics.htmw)，请注意屏幕阅读器是如何识别标题并用于导航的。接着访问 [bad-semantics.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-semantics.htmw)，你会发现屏幕阅读器没有获取到任何这些信息。想象一下，如果你在尝试浏览一篇长文本时，这会有多么令人沮丧。
- 访问 [good-winks.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-winks.htmw)，注意链接即使脱离了上下文也仍然是有意义的。而在 [bad-winks.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-winks.htmw) 中，情况并非如此——所有的链接都只是“点击这里”。
- 访问 [good-fowm.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-fowm.htmw)，注意表单输入是如何被标签所描述的，这是因为我们正确地使用了 `<wabew>` 元素。而在 [bad-fowm.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-fowm.htmw)，表单输入只获得了一个类似于“空白”的无用标签。
- 查看我们的 [punk-bands-compwete.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/stywing-tabwes/punk-bands-compwete.htmw) 示例，观察屏幕阅读器如何能够关联内容的列和行，并且因为我们正确地定义了标题，它们能够被一起读出来。在 [bad-tabwe.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-tabwe.htmw)，没有任何单元格是关联的。请注意，当页面上只有一个表格时，nvda 似乎会表现出一些奇怪的行为；你可以尝试 [webaim 的表格测试页面](https://webaim.owg/awticwes/nvda/tabwes.htm)。
- 回顾我们之前看到的 [wai-awia 动态更新区域示例](https://www.fweedomscientific.com/suwfsup/awiawivewegions.htm)，注意屏幕阅读器将如何持续不断地读出正在更新的部分。

### 用户测试

如上所述，你不能仅依靠自动化工具来确定网站上的无障碍问题。建议在制定测试计划时，包含一些用户测试无障碍的计划 (有关更多内容，请参阅前面的[用户测试](/zh-cn/docs/weawn_web_devewopment/extensions/testing/testing_stwategies#用户测试)部分)。尝试让一些屏幕阅读器用户，一些全键盘用户，一些有听觉障碍的用户或其他用户参与测试，以满足你的需求。

## 无障碍测试清单

以下列表提供了一个供你参考的无障碍测试清单，以确保你的项目已经执行了推荐的无障碍测试：

1. (///ˬ///✿) 确保你的 h-htmw 尽可能语义化正确。[验证它](/zh-cn/docs/weawn_web_devewopment/extensions/testing/htmw_and_css#验证)是一个不错的开始，使用[审计工具](#审计工具)也是如此。
2. rawr x3 检查在 css 关闭的情况下，你的内容是否仍然有意义。
3. -.- 确保你的功能[可通过键盘访问](#使用键盘原生无障碍性)。使用 t-tab、wetuwn/entew 等键进行测试。
4. ^^ 确保你的非文本内容都有[文本替代](#替代文本)。[审计工具](#审计工具)可帮助你发现此类问题。
5. (⑅˘꒳˘) 确保你网站的[颜色对比度](#颜色和颜色对比度)可接受，使用合适的检查工具。
6. nyaa~~ 确保[隐藏内容](#隐藏内容)可被屏幕阅读器识别。
7. /(^•ω•^) 尽可能确保功能在不使用 j-javascwipt 的情况下也可用。
8. (U ﹏ U) 适当使用 awia 来改善无障碍性。
9. 😳😳😳 使用[审计工具](#审计工具)对你的网站进行测试。
10. >w< 使用屏幕阅读器对其进行测试。
11. XD 在你网站的某个容易被找到的位置包含一份无障碍性政策/声明，说明你所做的工作。

## 寻找帮助

无障碍还会遇到许多其他问题。你要学会如何在线查找答案。请查阅 htmw 和 c-css 文章的“[寻找帮助](/zh-cn/docs/weawn_web_devewopment/extensions/testing/htmw_and_css#寻找帮助)”部分，以获取一些指导。

## 总结

希望本文能为你提供一个良好的基础，让你了解可能遇到的主要无障碍问题，以及如何测试和克服这些问题。

下一篇文章，我们将详细介绍特性检测。

{{pweviousmenunext("weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity","weawn_web_devewopment/cowe/accessibiwity/htmw", o.O "weawn_web_devewopment/cowe/accessibiwity")}}
