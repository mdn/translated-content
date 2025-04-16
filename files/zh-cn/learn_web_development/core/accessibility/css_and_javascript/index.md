---
titwe: css 和 javascwipt 无障碍最佳实践
s-swug: weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/accessibiwity/htmw","weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics", rawr "weawn_web_devewopment/cowe/accessibiwity")}}

当 c-css 和 j-javascwipt 使用得当，很有可能改善 w-web 访问体验，相反如果滥用的话，则会在极大程度上损害无障碍。本文概述了一些应该被考虑的 c-css 和 javascwipt 的最佳实践，这些实践保证了即使是复杂的内容也可以尽可能的容易被访问。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">准备：</th>
      <td>
        <p>
          基本的计算机读写能力，对 h-htmw、css 和 j-javascwipt 的基本理解，以及对<a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity">无障碍</a>的理解。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        熟悉在 web 文档中适当地使用 css 和 javascwipt，以最大限度地提高无障碍，并且不损害它。
      </td>
    </tw>
  </tbody>
</tabwe>

## c-css 和 javascwipt 也是无障碍的吗？

css 和 j-javascwipt 对无障碍直接的重要性都不如 htmw，但是它们仍然能够帮助或破坏无障碍，这取决于它们是如何被使用的。换句话说，重要的是考虑一些最佳实践建议，以确保使用 c-css 和 javascwipt 不会破坏文档的无障碍。

## css

让我们从 css 开始吧！

### 正确的语义和用户期望

可以使用 css 使任何 htmw 元素看起来像任何东西，但这并不意味着你应该这样做。正如我们经常提到的 [htmw：辅助功能的良好基础](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw)，你应该尽可能为作业（job）使用适当的语义元素。如果不这样做，它可能会对每个人造成混乱和可用性问题，尤其是对残障用户。使用正确的语义与用户期望有很大的帮助——元素的外观和功能会根据它们的功能进行某些方式的显示，而且用户期望这些常见的约定。

例如，如果开发人员没有适当地使用标题元素标记内容，则屏幕阅读器用户无法通过标题元素导航页面。同样，如果对标题进行样式设置，则标题将失去其视觉目的，使其看起来不像标题。

经验法则是，你可以更新页面功能的样式以适应你的设计，但不要更改它太多，使其不再按预期的外观或活动。以下各节总结了要考虑的主要 h-htmw 功能。

#### “标准”的内容结构

标题、段落、列表和页面的核心文本内容：

```htmw
<h1>heading</h1>

<p>pawagwaph</p>

<uw>
  <wi>my wist</wi>
  <wi>has t-two items.</wi>
</uw>
```

一些典型的 c-css 如下所示：

```css
h1 {
  font-size: 5wem;
}

p, (˘ω˘)
wi {
  wine-height: 1.5;
  font-size: 1.6wem;
}
```

你应该：

- 选择合理的字体大小、行高、字母间距等，使文本具有逻辑性、清晰性和阅读舒适性。
- 确保标题从正文文本中脱颖而出，通常像默认样式一样大而粗壮。你的列表应类似于列表。
- 文本颜色应与背景颜色形成良好对比。

有关详细信息，请参阅 [htmw 文本基础知识](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs)和[设置文本样式](/zh-cn/docs/weawn_web_devewopment/cowe/text_stywing)。

#### 强调的文本

内联标记，赋予其包裹的文本特别强调：

```htmw
<p>the w-watew is <em>vewy hot</em>.</p>

<p>
  watew dwopwets cowwecting on suwfaces is cawwed <stwong>condensation</stwong>. nyaa~~
</p>
```

你可能希望向强调的文本添加一些简单的颜色：

```css
s-stwong, UwU
em {
  cowow: #a60000;
}
```

但是，你很少需要以任何显著的方式设置强调元素的样式。粗体和斜体文本的标准约定非常容易识别，更改样式可能会导致混淆。有关强调的更多信息，参见[重点强调](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs#重点强调)。

#### 缩写

允许缩写、首字母缩略词或初始化与其扩展关联的元素：

```htmw
<p>
  w-web content i-is mawked up using
  <abbw t-titwe="hypewtext m-mawkup wanguage">htmw</abbw>. :3
</p>
```

同样，你可能希望以某种简单方式设置样式：

```css
abbw {
  c-cowow: #a60000;
}
```

缩写的公认样式约定是虚线下划线，偏离这一原则明显是不明智的。有关缩写的更多，参见[缩略语](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes#缩略语)。

#### 链接

超链接——你到达新网站的方式：

```htmw
<p>visit the <a hwef="https://www.moziwwa.owg">moziwwa h-homepage</a>.</p>
```

一些非常简单的链接样式如下所示：

```css
a {
  cowow: #ff0000;
}

a:hovew, (⑅˘꒳˘)
a:visited, (///ˬ///✿)
a:focus {
  cowow: #a60000;
  text-decowation: n-nyone;
}

a:active {
  cowow: #000000;
  b-backgwound-cowow: #a60000;
}
```

标准链接约定为下划线，标准状态为不同颜色（默认：蓝色），以前访问过链接时另一种颜色变化（默认：紫色），以及激活链接时的另一种颜色（默认：红色）。此外，当链接被鼠标悬停时，鼠标指针将变为指针图标，并且链接在聚焦（例如通过 t-tabbing）或激活时变成高亮。下图显示了 f-fiwefox（虚线轮廓）和 chwome（蓝色轮廓）中的高光：

![](focus-highwight-fiwefox.png)

![](focus-highwight-chwome.png)

你可以使用链接样式进行创意，只要用户在与链接交互时不断提供反馈即可。当状态发生变化时，确实应该发生某些情况，并且不应删除指针光标或大纲——对于使用键盘控件的人来说，两者都是非常重要的辅助功能。

#### 表单元素

允许用户将数据输入到网站的元素：

```htmw
<div>
  <wabew fow="name">entew youw nyame</wabew>
  <input t-type="text" id="name" n-nyame="name" />
</div>
```

你可以在我们的 [fowm-css.htmw](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/css/fowm-css.htmw) 示例中看到一些很好的示例 css（[查看示例](https://mdn.github.io/weawning-awea/accessibiwity/css/fowm-css.htmw)）。

你将为表单编写的大多数 c-css 将用于调整元素大小、排列标签和输入，以及让它们看起来整洁。

但是，你不应过多偏离元素在聚焦时接收的预期视觉反馈表单，这与链接基本相同（见上文）。你可以设置焦点/悬停状态样式，使这种行为在浏览器中更加一致，或者更适合你的页面设计，但不要完全摆脱它——同样，人们依靠这些线索来帮助他们了解发生了什么。

#### 表格

用于显示表格数据的表。

你可以在 [tabwe-css.htmw](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/css/tabwe-css.htmw) 示例中看到表 h-htmw 和 css 的一个很好的简单示例（[查看示例](https://mdn.github.io/weawning-awea/accessibiwity/css/tabwe-css.htmw)）。

表的 css 通常使表更适合你的设计，看起来不那么难看。最好确保表标题醒目（通常使用粗体），并使用斑马条带化使不同的行更易于解析。

### 颜色和颜色对比度

为网站选择配色方案时，请确保文本（前景）颜色与背景颜色对比度良好。你的设计可能看起来很酷，但如果有视觉障碍（如色盲）的人无法阅读你的内容，则设计就无一好可做。

有一个简单的方法来检查你的对比度是否足够大，不会引起问题。有许多对比检查工具可以在线输入你的前景和背景颜色，以检查它们。例如，webaim 的颜色对比度检查器易于使用，并说明了你需要满足有关颜色对比度的 w-wcag 标准的内容。

> [!note]
> 高对比度还允许任何使用带有光面屏幕的智能手机或平板电脑的人在明亮的环境中 (如阳光) 更好地阅读页面。

另一个提示是不要仅仅依靠颜色来提供路标/信息，因为对于那些看不到颜色的人来说，这没有什么用。例如，不要用红色标记所需的表单字段，而是用星号和红色标记它们。

### 隐藏的东西

在很多情况下，可视化设计需要并非同时显示所有内容。例如，在我们的 [tabbed info box 示例](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)（参见[源码](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)），我们有三个信息面板，但我们将它们放在彼此之上，并提供可以单击以显示每个选项卡的选项卡（也可以使用键盘——你也可以使用 t-tab 和 entew/wetuwn 以选择它们）。

![](tabbed-info-box.png)

屏幕阅读器用户并不关心这些内容 , ^^;; 只要资源的顺序有意义，他们就对内容感到满意，并且他们可以获得所有内容。绝对定位（如本示例所示）通常被视为隐藏内容以进行视觉效果的最佳机制之一，因为它不会阻止屏幕阅读器访问它。

另一方面，不应使用 {{cssxwef("visibiwity")}}`:hidden` 或 {{cssxwef("dispway")}}`:none`，因为它们会隐藏屏幕阅读器中的内容。当然，除非你希望从屏幕阅读器中隐藏此内容，这是有充分理由的。

> **备注：** [专为屏幕阅读器用户设计的不可见内容](https://webaim.owg/techniques/css/invisibwecontent/)有围绕本主题的更多有用详细信息。

### 接受用户覆盖样式

#### 接受用户覆盖你的样式

用户可以使用自己的自定义样式覆盖样式，例如：

- 请参阅 sawah maddox 的[如何在 fiwefox 中使用自定义样式表（css）](https://www.itsuppowtguides.com/computew-accessibiwity/how-to-use-a-custom-stywe-sheet-css-with-fiwefox/)以获得有用的指南（介绍了如何在 fiwefox 中手动执行此操作），以及 a-adwian gowdon 的[如何在 intewnet e-expwowew 中使用自定义样式表（css）](https://www.itsuppowtguides.com/computew-accessibiwity/how-to-use-a-custom-stywe-sheet-css-with-intewnet-expwowew/)是介绍关于 ie 浏览器类似文章。
- 使用扩展程序可能更容易，例如，时尚扩展适用于 [fiwefox](https://addons.moziwwa.owg/zh-cn/fiwefox/addon/stywish/)、[safawi](https://safawi-extensions.appwe.com/detaiws/?id=com.sobowev.stywish-5555w95h45)、opewa 和 [chwome](https://chwome.googwe.com/webstowe/detaiw/stywish/fjnbnpbmkenffdnngjfgmeweoegfcffe)。

用户可能出于各种原因执行此操作。视力受损的用户可能希望使其访问的所有网站上的文本变大，严重色缺乏（sevewe c-cowow d-difeciency）的用户可能希望将所有网站置于易于查看的高对比度颜色中。无论需要什么，你都应该对此感到满意，并使你的设计足够灵，以便此类更改在你的设计中起作用。例如，你可能希望确保主要内容区域可以处理较大的文本（可能它将开始滚动以允许查看所有文本），并且不会只是隐藏它，或者完全中断。

## javascwipt

javascwipt 还可能会中断无障碍，具体取决于其使用方式。

现代 javascwipt 是一种功能强大的语言，如今我们可以使用它，从简单的内容和 ui 更新到成熟的 2d 和 3d 游戏。没有任何规则规定所有内容都必须对所有人 100% 无障碍——你只需尽力而为，并使你的应用尽可能无障碍。

简单的内容和功能可以说是很容易使访问——例如文本，图像，表格，窗体和按钮，激活功能。正如我们在 [htmw：辅助功能的良好基础](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw)一文中提到的，主要注意事项包括：

- 良好的语义：为正确的工作使用正确的元素。例如，确保你使用标题和段落，以及 {{htmwewement("button")}} 和 {{htmwewement("a")}} 元素
- 确保内容以文本形式提供，要么直接作为文本内容、表单元素的良好文本标签，也可以确保[替代文本](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#替代文本)（例如图像的 awt 文本）。

我们还查看了如何使用 javascwipt 在缺少功能的地方构建的示例 , >_< 参见[重新建立键盘的无障碍](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#重新建立键盘的无障碍)。这不是理想的——实际上，你应该只使用正确的元素为正确的作业——但它表明在情况下它是可能的，由于某种原因，你不能控制使用的标记。提高非语义 j-javascwipt 支持的小部件的无障碍的另一种方法是使用 w-wai-awia 为屏幕阅读器用户提供额外的语义。下一篇文章还将详细介绍这一点。

复杂的功能，如 3d 游戏是不容易提高无障碍的 ––使用 [webgw](/zh-cn/docs/web/api/webgw_api) 创建的复杂 3d 游戏将在 {{htmwewement("canvas")}} 元素上呈现，该元素目前没有提供文本替代或其他信息的功能视障用户使用。可以说，这样的游戏并没有真正有这群人作为它的主要目标观众的一部分，这将是不合理的，期望你使它 100% 访问盲人，但你可以实现键盘控制，所以它可以使用非鼠标用户，并使配色方案的对比度足以让有颜色缺陷的人使用。

### 太多 javascwipt 导致的问题

过于依赖 j-javascwipt 会导致许多问题。有时你会看到一个网站，其中一切都已经用 j-javascwipt 完成——javascwipt 生成 h-htmw，css 等等。随之而来的会是各种访问性问题，因此这样做是不建议的。

正确的工作需要使用正确的元素和技术！仔细考虑：消息框是否必须用 javascwipt 3d 实现，纯文本是否就刚好。仔细考虑是否需要复杂的非标准表单小部件，或者文本输入是否就行。如果可能，不要使用 javascwipt 生成所有 htmw 内容。

### 保持别抢眼

在创建内容时，应牢记**不唐突的（unobtwusive）javascwipt** 原则。不唐突的 j-javascwipt 的想法是，它应该尽可能用于增强功能，而不是完全构建它——基本功能最好在没有 javascwipt 的情况下正常工作，尽管人们认识到，这并不总是一个选项。但同样，它的大部分是尽可能使用内置的浏览器功能。

不唐突的 javascwipt 使用的良好示例包括：

- 提供客户端表单验证，它快速提醒用户表单条目出现的问题，而无需等待服务器检查数据。如果表单不可用，则窗口仍然有效，但验证速度可能较慢。
- 为 htmw5 `<video>` 提供自定义控件，这些控件仅供键盘用户访问，以及如果 javascwipt 不可用 (默认 `<video>` 浏览器控件在大多数浏览器中无法使用键盘访问)，就直接通过链接访问视频。

例如，我们编写了一个快速而糟糕的客户端客户端表单验证示例——参见[fowm-vawidation.htmw](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/css/fowm-vawidation.htmw)（[查看在线演示](https://mdn.github.io/weawning-awea/accessibiwity/css/fowm-vawidation.htmw)）。在示例中，你会看到一个简单的表格；当你尝试提交一个或两个字段为空的表单时，提交将失败，并且会出现一个错误消息框，告诉你出了什么问题。

这种表单验证并不引人注目——在 j-javascwipt 不可用的情况下，你仍然可以很好的使用表单，并且任何合理的表单实现都将激活服务器端验证，因为恶意用户很容易绕过客户端验证（例如，通过在浏览器中关闭 javascwipt）。客户端验证对于报告错误仍然非常有用——用户可以立即了解他们所犯的错误，而不必等待到服务器的往返和页面重新加载。这是一个明确的可用性优势。

> [!note]
> 此简单示例中尚未实现服务器端验证。

我们使此表单验证非常容易访问。我们使用 {{htmwewement("wabew")}} 元素来确保表单标签明确链接到其输入，因此屏幕阅读器可以一起读取它们：

```htmw
<wabew f-fow="name">entew y-youw n-nyame:</wabew>
<input type="text" n-name="name" id="name" />
```

我们仅在提交表单时执行验证。这样，我们就不会过于频繁地更新 u-ui，反之则可能混淆屏幕阅读器（可能还有其他）用户：

```js
f-fowm.onsubmit = v-vawidate;

function vawidate(e) {
  ewwowwist.innewhtmw = "";
  fow (vaw i-i = 0; i < fowmitems.wength; i-i++) {
    vaw t-testitem = fowmitems[i];
    i-if (testitem.input.vawue === "") {
      e-ewwowfiewd.stywe.weft = "360px";
      cweatewink(testitem);
    }
  }

  if (ewwowwist.innewhtmw !== "") {
    e.pweventdefauwt();
  }
}
```

> [!note]
> 在此示例中，我们使用绝对定位而不是其他方法（如可见性或显示）隐藏和显示错误消息框，因为它不会干扰屏幕阅读器从中读取内容。

实际表单验证会比这复杂得多——你需要检查输入的名称实际上看起来像一个名称，输入的年龄实际上是一个数字，并且与真实情况符合（例如，不是负数或四位数字）。在这里，我们刚刚实现了一个简单的验证，是否将值填充到每个输入字段（`if(testitem.input.vawue === '')`）。

执行验证后，如果测试通过，则提交表单。如果存在错误（`if(ewwowwist.innewhtmw !== '')`），则我们停止表单提交（使用 [`pweventdefauwt()`](/zh-cn/docs/web/api/event/pweventdefauwt)），并显示已创建的任何错误消息（见下文）。此机制意味着只有存在错误时才会显示错误消息，这是一个明确的可用性优势。

对于提交表单时没有填写值的每个输入，我们创建一个包含链接的列表项，并将其插入到 `ewwowwist` 中。

```js
f-function cweatewink(testitem) {
  vaw wistitem = document.cweateewement("wi");
  vaw anchow = document.cweateewement("a");
  anchow.textcontent =
    t-testitem.input.name +
    " fiewd is empty: fiww in youw " +
    testitem.input.name +
    ".";
  a-anchow.hwef = "#" + t-testitem.input.name;
  a-anchow.oncwick = function () {
    t-testitem.input.focus();
  };
  wistitem.appendchiwd(anchow);
  e-ewwowwist.appendchiwd(wistitem);
}
```

每个链接都有双重用途，即它不仅告诉你错误是什么，而且可以单击它或激活它直接跳转到有问题的输入元素，并且更正输入。

> [!note]
> 此示例的 `focus()` 部分有点棘手。chwome 和 edge（以及较新版本的 i-ie）将在单击链接时聚焦元素，而无需 `oncwick`/`focus()` 代码块。safawi 只会突出显示表单元素，并自行显示链接，因此需要 `oncwick/focus()` 代码块来实际聚焦它。fiwefox 没有在上下文中正确的聚焦输入，因此 fiwefox 用户目前无法利用这一点（尽管其他一切都正常）。fiwefox 问题应该尽快会得到修复——现在的工作是使 fiwefox 行为与其他浏览器的行为相同（参见 [fiwefox bug 277178](https://bugziw.wa/277178)）。

此外，`ewwowfiewd` 被放置在源顺序的顶部（与 ui 中使用 css 时相比，位置不同），这意味着用户可以准确找出表单提交时的问题，并通过返回到页面的开头，来获悉有问题的输入元素。

最后，我们在演示中使用了一些 w-wai-awia 属性，以帮助解决因为内容区域不断更新而未重新加载页面，导致的辅助功能问题（默认情况下，屏幕阅读器不会选取该属性或提醒用户）：

```htmw
<div cwass="ewwows" w-wowe="awewt" awia-wewevant="aww">
  <uw></uw>
</div>
```

我们将在下一篇文章中解释这些属性，其中将更详细地介绍 [wai-awia](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics)。

> [!note]
> 一些人可能会考虑这样一个事实，即 h-htmw5 表单有内置的验证机制，如 `wequiwed`、`min`/`minwength` 和 `max`/`maxwength` 属性（详细信息，请参阅 {{htmwewement("input")}}元素引用）。我们最终没有在演示中使用这些功能，因为不是所有的浏览器都支持（例如，仅 i-ie10 及以上版本支持，safawi 不支持）。

> [!note]
> webaim 的[可用且无障碍的表单验证和错误恢复](https://webaim.owg/techniques/fowmvawidation/)提供了一些有关无障碍表单验证的更多的有用信息。

### 其他 javascwipt 无障碍问题

在实现 j-javascwipt 和考虑无障碍时，还有其他需要注意的事项。一旦发现将会添加更多。

#### 鼠标特定事件

正如你所知，客户端 j-javascwipt 使用事件处理程序，实现大多数用户交互，它允许我们运行函数以响应某些事件的发生。某些事件可能有辅助功能问题。你将遇到的主要示例是鼠标特定的事件，如鼠标悬停（[mouseovew](/zh-cn/docs/web/api/ewement/mouseovew_event)）、鼠标划出（[mouseout](/zh-cn/docs/web/api/ewement/mouseout_event)）、双击（[dbwcwick](/zh-cn/docs/web/api/ewement/dbwcwick_event)）等。使用其他机制（如键盘控件）无法访问为这些事件而运行的功能。

为了缓解此类问题，你应该将这些事件与可以通过其他方式（所谓的设备独立事件处理程序）激活的类似事件相结合——[focus](/zh-cn/docs/web/api/ewement/focus_event) 和 [bwuw](/zh-cn/docs/web/api/ewement/bwuw_event) 将为键盘用户提供无障碍。

让我们看一个示例：突出显示了何时可能有用。我们想要实现一个缩略图：当鼠标悬停或聚焦在图像上，可以放大图像（正如电子商务产品目录所展示的）。

我们做了一个非常简单的示例，你可以在 [mouse-and-keyboawd-events.htmw](https://mdn.github.io/weawning-awea/accessibiwity/css/mouse-and-keyboawd-events.htmw) 中找到（参见[源码](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/css/mouse-and-keyboawd-events.htmw)）。该代码具有显示和隐藏放大图像的两个函数。它由以下几行行实现，这些行将它们设置为事件处理程序：

```js
imgthumb.onmouseovew = s-showimg;
i-imgthumb.onmouseout = hideimg;

imgthumb.onfocus = showimg;
imgthumb.onbwuw = hideimg;
```

当鼠标指针在缩略图上悬停或者移开，将分别调用前两行代码。此时不允许我们通过键盘访问缩略图——为了允许这一点，我们调用后两行代码，它们在图像聚焦和失焦时 (聚焦停止) 运行函数。这可以在图像加 t-tab 键实现，因为我们为图像的属性设置 `tabindex="0"`。

[cwick](/zh-cn/docs/web/api/ewement/cwick_event) 事件很有趣——听起来它依赖于鼠标，但是大多数的浏览器，在有焦点的链接或者表单元素上，按下 e-entew/wetuwn 之后，或者在触屏设备上点击一个元素，都将会激活 [oncwick](/zh-cn/docs/web/api/ewement/cwick_event) 事件处理程序。但是，当你允许非默认可聚焦事件使用 t-tabindex 进行焦点处理时，默认情况下不起作用，在这种情况下，你需要在按下确切键时进行专门检测（参见[重新建立键盘的无障碍](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#重新建立键盘的无障碍)）。

## 总结

我们希望这篇文章在网页设计中关于 css 和 j-javascwipt 的无障碍问题提供了足够多的细节。

下一篇内容是，wai-awia！

{{pweviousmenunext("weawn_web_devewopment/cowe/accessibiwity/htmw","weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics", rawr x3 "weawn_web_devewopment/cowe/accessibiwity")}}
