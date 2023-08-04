---
title: 解决常见的无障碍问题
slug: Learn/Tools_and_testing/Cross_browser_testing/Accessibility
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}

接下来，我们将关注无障碍，提供关于一些常见问题的信息，如何进行简单测试以及如何使用审核/自动化工具来查找无障碍问题。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        熟悉<a href="/zh-CN/docs/Learn/HTML">HTML</a>,
        <a href="/zh-CN/docs/Learn/CSS">CSS</a>,和<a
          href="/zh-CN/docs/Learn/JavaScript"
          >JavaScript</a
        >语言; 理解<a
          href="/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >跨浏览器测试原理</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>能够诊断常见的无障碍问题，并使用适当的工具和技术解决问题。</td>
    </tr>
  </tbody>
</table>

## 什么是无障碍？

当我们在 web 技术的背景下说无障碍时，大多数人立即想到确保残疾人可以使用网站/应用程序，例如：

- 视障人士使用屏幕阅读器或放大/缩放浏览文本
- 有运动功能障碍的人使用键盘（或其他非鼠标功能）使用网站。
- 有听力障碍的人依赖于替代音频/视频内容的文本。

但是，说无障碍仅与残疾人有关是错误的。实际上，无障碍的目的是使你的网站/应用程序在尽可能多的环境中被尽可能多的人使用，而不仅仅是那些使用高性能台式计算机的用户。极端的例子可能包括：

- 移动端用户
- 使用其他浏览设备（例如电视，手表等）
- 使用较旧设备的用户（他们可能没有最新的浏览器）
- 设备性能不高的用户（他们可能具有较慢的处理器）

在某种程度上，本模块都是关于无障碍的 — 跨浏览器测试可确保你的网站可以被尽可能多的人使用。这篇[无障碍是什么？](/zh-CN/docs/Learn/Accessibility/What_is_accessibility) 更全面透彻地定义了什么是无障碍。

也就是说，本文将涵盖跨浏览器和有关残疾人的测试问题以及他们如何使用 Web。我们在其他地方已经讨论过其他领域，例如[响应式设计问题](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1%E9%97%AE%E9%A2%98)和[性能](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Performance_issues)。

> **备注：** 就像 Web 开发中的许多事情一样，无障碍不是 100% 的成功或失败可以定义的；对于所有内容而言，几乎不可能实现 100％的无障碍，尤其是当站点变得越来越复杂时。我们更多的是通过防御性编码并遵循最佳实践，努力使尽可能多的人可以访问尽可能多的内容。

## 常见无障碍问题

在本节中，我们将围绕 Web 无障碍，详细介绍与特定技术相关的一些主要问题、要遵循的最佳实践，以及可以进行的一些快速测试，以查看你的网站是否朝着正确的方向发展。

> **备注：** 无障碍在道德上是正确的事情，对企业也有好处 (残疾用户，移动用户等构成了重要的细分市场), 并且在世界许多地方，提供出来的网络媒体资源无法为残疾人服务也是违法的。阅读[无障碍指南和法律](/zh-CN/docs/Learn/Accessibility/What_is_accessibility#%E6%97%A0%E9%9A%9C%E7%A2%8D%E6%8C%87%E5%8D%97%E5%92%8C%E6%B3%95%E5%BE%8B)获取更多相关信息。

### HTML

HTML 语义化 (语义化正确地使用 HTML 标签) 对于无障碍来说是开箱即用的 — 这类内容可供无视障人士阅读（前提是你不会做任何愚蠢的事情，例如使文本变小或使用 CSS 隐藏它），也可被屏幕阅读器（从字面上读出网页的应用）之类的辅助技术使用，并赋予其他优势。

#### 语义化结构

HTML 语义化最重要的捷径是为你的内容使用标题和段落的结构；这是因为屏幕阅读器用户倾向于将文档标题用作导航，以更快地找到他们需要的内容。如果你的内容没有标题，那么他们将获得的是一大坨文字，没有任何可定位的标记。坏的例子和好的例子如下：

```html example-bad
<font size="7">My heading</font> <br /><br />
This is the first section of my document.
<br /><br />
I'll add another paragraph here too.
<br /><br />
<font size="5">My subheading</font>
<br /><br />
This is the first subsection of my document. I'd love people to be able to find
this content!
<br /><br />
<font size="5">My 2nd subheading</font>
<br /><br />
This is the second subsection of my content. I think is more interesting than
the last one.
```

```html example-good
<h1>My heading</h1>

<p>This is the first section of my document.</p>

<p>I'll add another paragraph here too.</p>

<h2>My subheading</h2>

<p>
  This is the first subsection of my document. I'd love people to be able to
  find this content!
</p>

<h2>My 2nd subheading</h2>

<p>
  This is the second subsection of my content. I think is more interesting than
  the last one.
</p>
```

此外，你的内容应该在逻辑顺序上讲得通的 — 你总能在以后再为它们写 CSS，但你应该在一开始就确定内容正确的顺序。

作为测试，你可以关闭网站的 CSS，然后看看没有了 CSS 网站是否能被理解。你可以通过从代码中删除 CSS 来手动完成此操作，但是最简单的方法是使用浏览器功能，例如：

- Firefox: 选择*查看 > 页面样式 > 无样式*
- Safari: 选择*开发 > 停用样式* (需要开启“开发”菜单，点击*Safari > 偏好设置 > 高级 > 在菜单栏中显示“开发”菜单*)
- Chrome: 安装 Web Developer Toolbar 扩展程序，然后重启浏览器。点击图标，选择*CSS > 停用所有样式*
- Edge: 选择*查看 > 样式 > 无样式*

#### 使用键盘

某些 HTML 功能可以使用键盘来选择 — 这是默认的，从早期 web 开始就是这样的。具有此功能的元素是允许用户与网页交互的常见元素，比如 links, {{htmlelement("button")}}s, 以及表单元素，比如{{htmlelement("input")}}.

浏览[native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) (查看[源码](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)) 尝试一下— 在新标签页中打开它，然后尝试按 Tab 键；按下几下后，你应该看到标签焦点开始在不同的可聚焦元素之间移动；在每个浏览器中，被聚焦的元素都被赋予突出的默认样式 (不同的浏览器表现略有不同) 以便你能分辨聚焦在哪个元素上。

![](button-focused-unfocused.png)

然后，你可以按 Enter / Return 键来关注焦点链接，或者按一个按钮（我们已经包含一些 JavaScript 来使按钮提醒消息），或者在输入框开始输入文本，（其他表单元素具有不同的控件，例如{{htmlelement("select")}}元素可以使用向上和向下箭头键显示和循环显示其选项）。

请注意，不同的浏览器可能具有不同的键盘控制选项。大多数现代浏览器都遵循上述的标签模式（你也可以执行 Shift + Tab 来向后移动可聚焦元素），但是某些浏览器具有自己的特性：

- Firefox for the Mac doesn't do tabbing by default. To turn it on, you have to go to _Preferences > Advanced > General_, then uncheck "Always use the cursor keys to navigate within pages". Next, you have to open your Mac's System Preferences app, then go to _Keyboard > Shortcuts_, then select the _All Controls_ radio button.
- Safari 默认情况下不允许你按 tab 遍历链接；要启用此功能，你需要打开 Safari 的“_偏好设置_”，转到“_高级_”，然后选中“_按下 Tab 键以高亮显示网页上的每一项_”。

> **警告：** 你应该在所写的任何新页面上执行这种测试 — 确保可以通过键盘使用功能。

这个例子强调了正确使用语义元素的重要性。可以用 CSS 将任何元素的样式设置为看起来像链接或按钮，并使用 JavaScript 让其表现为像链接或按钮一样，但实际上它们不是链接或按钮，你将失去很多语义化元素带给你的无障碍。因此，尽量避免这样做。

另一个技巧 — 如我们的示例所示，你可以使用[:focus](/zh-CN/docs/Web/CSS/:focus)伪类控制可聚焦元素在聚焦时的外观。最好将焦点和悬停样式加重显示，这样无论是使用鼠标还是键盘的用户，都能直观地察觉控件在被激活时将执行的操作

```css
a:hover,
input:hover,
button:hover,
select:hover,
a:focus,
input:focus,
button:focus,
select:focus {
  font-weight: bold;
}
```

> **备注：** 如果你决定使用 CSS 删除默认的焦点样式，请确保将其替换为更适合你的设计的其他样式 — 这是一种非常有价值的无障碍工具，不应删除。

#### 模拟键盘

有时可能无法使用键盘完成无障碍。你可能有一个语义不是很好的网站（也许你最终得到了一个糟糕的 CMS 网页，该 CMS 生成了由\<div> 组成的按钮），或者你正在使用一个没有内置键盘无障碍的复杂控件，例如 HTML5 {{htmlelement("video")}} 元素（令人惊奇的是，Opera 是唯一允许你在\<video>元素的默认浏览器控件之间进行制表的浏览器）。你有几种选择：

1. 使用\<button>元素（默认情况下都是可以在 button 间使用 Tab 键）和 JavaScript 创建自定义控件，以连接其功能。有关此示例，请参见[Creating a cross-browser video player](/zh-CN/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player)。
2. 通过 JavaScript 创建键盘快捷键，因此当你按键盘上的某些键时，功能被激活。请参阅[Desktop mouse and keyboard controls](/zh-CN/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard)，以获取一些可用于任何目的（比如游戏）的例子。
3. 使用一些有趣的策略来伪造按钮行为。以我们的[fake-div-buttons.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)示例为例（[查看源码](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)）。这里我们通过为每个假按钮赋予属性`tabindex="0"`（请参阅 WebAIM 的[tabindex 文章](http://webaim.org/techniques/keyboard/tabindex)以获取更多详细信息），使假的\<div>按钮能够被聚焦（包括通过制表符）。这使我们可以跳到按钮上，但不能通过回车键激活它们。为此，我们必须添加以下 JavaScript 代码：

   ```js
   document.onkeydown = function (e) {
     if (e.keyCode === 13) {
       // The Enter/Return key
       document.activeElement.onclick(e);
     }
   };
   ```

   在这里，我们向`document`对象添加了一个监听器，以检测何时按下了键盘上的按钮。我们通过事件对象的 keyCode 属性检查按下了什么按钮；如果它是与回车键匹配的键码，则使用`document.activeElement.onclick()`运行存储在按钮的 onclick 处理程序中的函数。`document.activeElement`为我们提供了当前页面上被聚焦的元素。

> **备注：** 仅当你通过事件处理程序属性（例如`onclick`）设置原始事件处理程序时，此技术才有效。`addEventListener`将无法正常工作。重新构建功能会有很多额外的麻烦。并且肯定还有其他问题。最好能从根源解决问题，使用正确的语义化元素。

#### 替代文本

替代文本对于无障碍非常重要 — 如果一个人有视觉或听觉障碍使他们无法看到或听到某些内容，那么这就是一个问题。可用的最简单的文本替代方法是`alt`属性，我们应该在所有包含相关内容的图像上包括该属性。其中应包含对图像的描述，该描述可在页面上成功传达其含义和内容，并由屏幕阅读器读取并读出给用户。

> **备注：** 更多信息请阅读[Text alternatives](/zh-CN/docs/learn/Accessibility/HTML:%E4%B8%BA%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7%E6%8F%90%E4%BE%9B%E4%B8%80%E4%B8%AA%E8%89%AF%E5%A5%BD%E7%9A%84%E5%9F%BA%E7%A1%80#%E6%96%87%E6%9C%AC%E6%9B%BF%E4%BB%A3%E5%93%81)

可以通过多种方法来测试缺少的替代文本，例如，使用无障碍[审计工具](#审计工具)。

对于视频和音频内容，Alt 文本稍微复杂一些。有一种方法可以定义文本轨道（例如，字幕）并在播放视频时以{{htmlelement("track")}}元素和[WebVTT](/zh-CN/docs/Web/API/WebVTT_API)格式的形式显示它们（请参见[Adding captions and subtitles to HTML5 video](/zh-CN/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)以获取详细信息）。这些功能的[浏览器兼容性](/zh-CN/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9)相当好，但是如果你想提供音频的替代文本或支持较旧的浏览器，则在页面某处或单独页面上显示一个简单的文本记录可能是个好主意。

#### 元素关系和上下文

HTML 中有某些功能和最佳实践，旨在提供元素之间的上下文和关系。三个最常见的示例是链接，表单标签和数据表。

使用屏幕阅读器的人们通常会使用一项共同的功能，即他们会拉出页面上所有链接的列表。在这种情况下，链接文本需要脱离上下文。例如，标记为“单击此处”，“单击此处”等的链接列表确实对无障碍不利。链接文本最好在上下文和上下文之外都有意义。

表单{{htmlelement("label")}}元素是允许我们使表单可访问的主要功能之一。表单的麻烦在于，你需要标签来说明应在每个表单输入中输入哪些数据。每个标签都必须包含在{{htmlelement("label")}}内，以将其明确链接到其对应的表单输入框（属性值的每个`<label>`的`for`属性值必须与表单元素`id`值匹配），即使源顺序不是完全合乎逻辑的，也能提供很好的无障碍。

> **备注：** 更多关于链接文本和表单标签，请阅读[有意义的文字标签](/zh-CN/docs/learn/Accessibility/HTML:%E4%B8%BA%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7%E6%8F%90%E4%BE%9B%E4%B8%80%E4%B8%AA%E8%89%AF%E5%A5%BD%E7%9A%84%E5%9F%BA%E7%A1%80#%E6%9C%89%E6%84%8F%E4%B9%89%E7%9A%84%E6%96%87%E5%AD%97%E6%A0%87%E7%AD%BE)

最后，简要介绍一下数据表。基本数据表可以用非常简单的标记编写（请参阅[bad-table.html](http://mdn.github.io/learning-area/accessibility/html/bad-table.html)和[源码](https://github.com/mdn/learning-area/blob/main/accessibility/html/bad-table.html))），但这存在问题 — 屏幕阅读器用户无法将行或列作为数据分组关联在一起，但你需要知道标题行是什么，以及标题行行的标题还是列的标题等。这些只能从可视化的表格才能知道。

相反，如果你看一下我们的`punk-bands-complete.html`示例（[示例](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)，[源码](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html)），则可以在此处看到一些无障碍辅助，例如表头（{{htmlelement("th")}}和`作用域`属性），{{htmlelement("caption")}}元素等。

> **备注：** 更多信息，请阅读[可访问的表格](/zh-CN/docs/learn/Accessibility/HTML:%E4%B8%BA%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7%E6%8F%90%E4%BE%9B%E4%B8%80%E4%B8%AA%E8%89%AF%E5%A5%BD%E7%9A%84%E5%9F%BA%E7%A1%80#%E5%8F%AF%E8%AE%BF%E9%97%AE%E7%9A%84%E8%A1%A8%E6%A0%BC)

### CSS

CSS 往往提供的基本无障碍功能要比 HTML 少得多，但是如果使用不当，它仍然会对无障碍造成同样的损害。下面是一些涉及 CSS 的无障碍的点：

- 使用正确的语义元素修饰 HTML 中的不同内容；如果要创建不同的视觉效果，请使用 CSS-不要滥用 HTML 元素来获得所需的外观。例如，如果你想要更大的文本，请使用{{cssxref("font-size")}}，而不是{{htmlelement("h1")}}标签。
- 确保内容顺序在没有 CSS 的情况下有意义；你可以随时使用 CSS 设置页面样式。
- 你应该确保按钮和链接之类的交互元素具有适当的聚焦/悬停/活动状态设置，以便用户能姨一目了然。如果出于风格原因删除默认设置，请确保包括一些替代的样式。

还有其他几个需要注意的地方。

#### 颜色和颜色对比度

为你的网站选择配色方案时，应确保文本（前景）颜色与背景颜色形成鲜明对比。你的设计可能看起来很酷，但是如果视力障碍者（例如色盲）无法阅读你的内容，那就不好了。使用 WebAIM 的[Color Contrast Checker](http://webaim.org/resources/contrastchecker/)之类的工具来检查你的方案是否有足够对比度。

另一个提示是不要仅依靠颜色来表示界标/信息，因为这对于看不见颜色的人来说是不好的。例如，不要将所需的表单字段标记为红色，而应使用星号和红色标记它们。

> **备注：** 高对比度也可以让使用带有光滑屏幕的设备（例如智能手机或平板电脑）的人在明亮的环境（例如阳光）下可以更好地阅读页面。

#### 隐藏的内容

在许多情况下，视觉设计要求并非一次显示所有内容。例如，在我们的[Tabbed info box example](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html)“示例（查看[源码](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/info-box.html)）中，我们有三个信息面板，但是我们将它们放在彼此的顶部，用户可以通过单击以显示每个选项卡（也可以通过键盘访问 — 可以使用 Tab 键和回车键选择它们）。

![](20191022144107.png)

屏幕阅读器用户根本不关心这些，只要源内容顺序有意义，他们就很满意，并且他们可以全部获取。绝对定位（在本示例中使用的定位）通常被视为隐藏内容以产生视觉效果的最佳机制之一，因为它不会阻止屏幕阅读器获取相关内容。

另一方面，你不应该使用{{cssxref("visibility")}}`:hidden`或者{{cssxref("display")}}`:none`, 因为它们会让屏幕阅读器取不到那些内容，除非你真的想让屏幕阅读器不读取那些内容。

> **备注：** [Invisible Content Just for Screen Reader Users](http://webaim.org/techniques/css/invisiblecontent/)有更多关于这个话题的详细信息

### JavaScript

就无障碍而言，JavaScript 具有与 CSS 相同的问题 — 如果使用不当或使用过度，无障碍可能会很糟糕。我们已经提到了与 JavaScript 相关的一些无障碍问题，主要是在 HTML 语义化那块 — 你应该始终使用适当的语义化 HTML 来在合适的地方实现功能，例如，适当地使用链接和按钮。尽量不要使用 JavaScript 代码中结合`<div>`元素来伪造功能 — 容易出错，并且比直接使用 HTML 标签还要做更多的工作。

#### 简单的功能

通常，简单的功能只应使用 HTML 标签完成 — JavaScript 仅用于增强功能，而不能用于实现简单功能。好的 JavaScript 用法包括：

- 提供客户端表单验证，可在不等待服务器检查数据的情况下，迅速向用户发出有关表单条目问题的警报。如果不能在客户端验证，则该表格仍然可以使用，但验证速度可能会较慢。
- 提供全键盘用户可访问的 HTML5 `<video>`的自定义控件（如我们之前所述，默认浏览器视频控件在大多数浏览器中均无法通过键盘访问）。

> **备注：** WebAIM 的[Accessible JavaScript](http://webaim.org/techniques/javascript/)提供了一些关于 JavaScript 无障碍注意事项的信息。

更复杂的 JavaScript 实现可能会带来无障碍问题 — 你需要尽力而为。例如，期望让使用 WebGL 编写的复杂 3D 游戏对盲人来说 100％无障碍是不合理的，但是你可以实现键盘控件，以便非鼠标用户可以使用它，并使配色方案具有足够的对比度供有颜色分辨障碍的人使用。

#### 复杂的功能

无障碍存在问题的主要领域之一是复杂的应用程序，其中涉及复杂的表单控件（例如日期选择器）和动态内容，内容会经常增量更新。

非自带的复杂的表单控件可能会存在问题，因为它们往往涉及大量嵌套的`<div>`，浏览器默认情况下不知道如何处理它们。如果你自己开发控件，则需要确保它们可以通过键盘访问。如果你使用的是某种第三方框架，请在开始使用之前仔细检查可用的选项以了解它们是否具有完备的无障碍。例如，Bootstrap 就对无障碍有相当好的支持（尽管 Rhiana Heath 的[Making Bootstrap a Little More Accessible](https://www.sitepoint.com/making-bootstrap-accessible/)探讨了它的一些问题（主要与色彩对比度有关），并着眼于一些解决方案）。

定期更新的动态内容可能会成为问题，因为屏幕阅读器用户可能会错过这些内容，尤其是在意外更新的情况下。如果你有一个包含主要内容面板的单页应用程序，该应用程序使用[XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest)或[Fetch](/zh-CN/docs/Web/API/Fetch_API)定期更新，那么屏幕阅读器用户可能会错过这些更新。

#### WAI-ARIA

你是否需要使用这种复杂的功能，或者使用普通的旧语义化 HTML 代替？如果确实需要复杂性，则应考虑使用[WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)（Accessible Rich Internet Applications - 可访问的互联网应用），该规范为诸如复杂的表单控件和更新面板之类的项目提供了语义（以新的 HTML 属性形式），这样大部分浏览器和屏幕阅读器就能理解内容。

要处理复杂的表单窗口小部件，你需要使用 ARIA 属性（例如`roles`）来声明窗口小部件中不同元素的角色（例如，它们是选项卡还是选项卡面板？），用`aria-disabled`来表示控件是否禁用等。

要处理内容定期更新的区域，可以使用`aria-live`属性，该属性标识更新区域。它的值指示屏幕阅读器如何处理更新内容：

- `off`: 默认值。更新内容不被读出。
- `polite`: 当用户空闲时读出更新内容。
- `assertive`: 尽快读出更新内容。
- `rude`: 直接读出更新内容，即使会打断用户正常阅读。

例子如下：

```html
<p><span id="LiveRegion1" aria-live="polite" aria-atomic="false"></span></p>
```

浏览 Freedom Scientific 的[ARIA (Accessible Rich Internet Applications) 动态更新区域](http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm)示例 — 高亮显示的段落每 10 秒更新一次内容，屏幕阅读器应将此内容读出给用户。[ARIA Live Regions - Atomic](http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegionsAtomic.htm)是另一个很有用的例子。

我们这里没有足够的空间来详细介绍 WAI-ARIA，你可以在[WAI-ARIA basics](/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics)了解更多。

## 无障碍测试工具

现在，我们已经介绍了不同 Web 技术的无障碍注意事项，包括一些测试方法（例如键盘导航和颜色对比度检查器），让我们看一下在进行无障碍测试时可以使用的其他工具。

### 审计工具

你可以使用许多审计工具检查你的网页，这些审计工具将检查它们并返回页面上存在的无障碍问题列表。一些审计工具：

- [Tenon](https://tenon.io): 一个相当不错的在线应用程序，它通过提供的 URL 遍历代码，并返回有关无障碍错误的结果，包括度量标准，特定错误以及它们影响的 WCAG 标准以及建议的修复方式。
- [tota11y](http://khan.github.io/tota11y/): Khan Academy 的无障碍工具，采用 JavaScript 库的形式，你可以将其附加到页面上，以提供许多无障碍工具。
- [Wave](http://wave.webaim.org/): 另一个在线无障碍测试工具，它接受网址并返回该页面带注释的视图，其中高亮显示了无障碍问题。

看下面的例子，我们用的是 Tenon。

1. 访问[Tenon 主页](https://tenon.io)。
2. 使用[bad-semantics.html](http://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)示例测试，输入链接地址并按下*Analyse Your Webpage（译者注：开始分析你的网页）。*
3. 下滑，直到你看到错误/描述部分，如下图。

![](tenon-screenshot.png)

你还可以探索一些选项（请参阅页面顶部附近的*Show Options（译者注：显示选项）*链接），或者使用 Tenon 的 API。

> **备注：** 这些工具不足以单独解决你的所有无障碍问题。你需要将这些，知识和经验，用户测试等结合起来才能获得完整的解决方案。

### 自动化工具

[Deque's aXe tool](https://www.deque.com/products/axe/)比我们上面提到的审计工具更优秀。和其他工具一样，它检查页面并返回无障碍错误。它很有用，可以提供浏览器扩展程序：

- [aXe for Chrome](http://bitly.com/aXe-Chrome)
- [aXe for Firefox](http://bit.ly/aXe-Firefox)

扩展程序将无障碍选项卡添加到浏览器开发人员工具。例如，我们安装了 Firefox 版本，然后使用它来审核[bad-table.html](http://mdn.github.io/learning-area/accessibility/html/bad-table.html)示例。我们得到以下结果：

![](axe-screenshot.png)

aXe 也可以使用`npm`安装，并且可以与任务运行器（如[Grunt](http://gruntjs.com/) 和[Gulp](http://gulpjs.com/)），自动化框架（如[Selenium](http://www.seleniumhq.org/)和[Cucumber](https://cucumber.io/)），单元测试框架（如[Jasmin](http://jasmine.github.io/)）集成，以及更多其他功能（详见[main aXe page](https://www.deque.com/products/axe/) ）。

### 屏幕阅读器

为了了解有严重视力障碍的人是如何浏览网页的，我们需要测试屏幕阅读器。有几款屏幕阅读器：

- 有些是付费产品，比如[JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS) (Windows) 和[Window Eyes](http://www.gwmicro.com/window-eyes/) (Windows).
- 有些是免费产品，比如[NVDA](http://www.nvaccess.org/) (Windows), [ChromeVox](http://www.chromevox.com/) (Chrome, Windows, and Mac OS X), 和[Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- 有些内置在操作系统中，比如[VoiceOver](http://www.apple.com/accessibility/osx/voiceover/) (Mac OS X and iOS), [ChromeVox](http://www.chromevox.com/) (on Chromebooks), 和[TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

通常，屏幕阅读器是独立运行的应用程序，并且不仅仅支持阅读网页，也支持阅读其他应用程序。也有例外（比如 ChromeVox 是一个浏览器扩展程序）。不同的屏幕阅读器可能在控制键和表现上稍有不同，所以你必须查阅你选择的屏幕阅读器的文档来获取相关细节。总体来说他们是大同小异的。

一起看一下我们对几款不同的屏幕阅读器的测试。这将帮助你大致了解它们如何工作以及如何测试它们。

> **备注：** WebAIM 的 [Designing for Screen Reader Compatibility](http://webaim.org/techniques/screenreader/)提供了一些关于屏幕阅读器的使用和如何开发应用以最好的适用屏幕阅读器的信息。你也可以看下[Screen Reader User Survey #6 Results](http://webaim.org/projects/screenreadersurvey6/#used)这篇有关屏幕阅读器一些有趣的统计信息的文章。

#### VoiceOver

VoiceOver (VO) 是 Mac/iPhone/iPad 上的免费应用，所以如果你使用苹果公司的产品，可以用 VO 来进行测试。我们在 Mac OS X 系统上测试了它。

按下 Cmd + Fn + F5 打开它。如果你之前没用过 VO，将会出现一个可以选择是否开启 VO 的欢迎界面，并且还会有教程指导你如何使用。再次按下 Cmd + Fn + F5 可以关闭。

> **备注：** 你应该至少看一遍教程，它对于你了解 VO 是非常有用的。

当 VO 开启时，你会看到一个会显示当前选中信息的黑色框在屏幕的左下角，除此之外屏幕显示大体还是相同的。当前选中的部分也会出现一个黑色的边框以进行高亮显示，这个黑色框就是 VO 的光标。

![](voiceover.png)

在使用中，你会用到"VO 修饰键"，"VO 修饰键"是一个单独键或组合键，当你使用 VO 的快捷键时，你需要额外按下这个"VO 修饰键"。屏幕阅读器通常都会有修饰键，防止它们的快捷键和其他程序的快捷键冲突。VO 的修饰键是 CapsLock, 或 Ctrl + Option。

VO 有很多快捷键，我们没有全部列出来。只把测试网页无障碍常用的一些在下面列出了。表格里，"VO"代表"VO 修饰键"。

| 快捷键           | 描述                                                                             |
| ---------------- | -------------------------------------------------------------------------------- |
| VO + 方向键      | 移动 VO 光标                                                                     |
| VO + 空格键      | 选择/激活高亮的部分，包括 Rotor 里的内容（关于 Rotor 见下面）                    |
| VO + Shift + 下  | 移动到组合项目里（比如 HTML 表格，或表单等）。进入组合里，你能使用下面的快捷键。 |
| VO + Shift + 上  | 离开组合项目                                                                     |
| VO + C           | (当在表格里面时) 阅读当前列的头部                                                |
| VO + R           | (当在表格里面时) 阅读当前行的头部                                                |
| VO + C + C       | (当在表格里面时) 阅读当前列，包括列头                                            |
| VO + R + R       | (当在表格里面时) 阅读当前行，包括对应于每个小行的头                              |
| VO + 左，VO + 右 | (当在水平的选项卡里面时，比如日期选择或时间选择) 切换选项                        |
| VO + 上，VO + 下 | (当在垂直的选项卡里面时，比如日期选择或时间选择) 切换选项                        |
| VO + U           | 使用 Rotor。Rotor 使用列表展示标题，链接，表单选项等，以便为我们提供便利的导航。 |
| VO + 左，VO + 右 | (当在 Rotor 里) 切换到其他列表                                                   |
| VO + 上，VO + 下 | (当在 Rotor 里) 在当前列表里，切换到其他项                                       |
| Esc              | (当在 Rotor 里) 推出 Rotor                                                       |
| Ctrl             | (当 VO 阅读时) 暂停/继续                                                         |
| VO + Z           | 重复上一句话                                                                     |
| VO + D           | 进入 Mac 的程序坞，你能选择运行哪个应用                                          |

看起来很多，但当你用起来时还好，因为 VO 通常会给你提醒，在哪里应该用哪个快捷键。现在试试运行 VO，在[屏幕阅读器测试](#屏幕阅读器测试)屏幕阅读器测试章节做个测试吧。

#### NVDA

NVDA 只能运行在 Window 系统，你需要安装它。

1. 在[nvaccess.org](http://www.nvaccess.org/)下载。你能选择免费下载，或赞助后再下载；你需要在下载前提供你的邮箱地址。
2. 下载完成后，开始安装 - 双击安装程序，接受条款，一步步按提示来。
3. 双击 NVDA 程序或快捷方式，或者按下 Ctrl + Alt + N 打开它。你会看见欢迎界面。你能选择一些选项，然后按下 OK 继续。

NVDA 现在在你的电脑上开启了。

在使用中，你会用到"NVDA 修饰键"，"NVDA 修饰键"是一个单独键，当你使用 NVDA 的快捷键时，你需要额外按下这个"NVDA 修饰键"。屏幕阅读器通常都会有修饰键，防止它们的快捷键和其他程序的快捷键冲突。NVDA 的修饰键是 Insert 键（默认）, 或 CapsLock 键（在欢迎界面可以选择使用该键）。

> **备注：** 关于高亮方面，NVDA 比 VoiceOver 做的更好。当滚动过标题、列表等元素时，你选中的项目会被一个细微的边框包住以高亮，但不是对于所有元素都是这样的。如果你感觉迷失方向了，可以按 Ctrl + F5 刷新页面，并从顶部重新开始。

NVDA 有很多快捷键，我们没有全部列出来。只把测试网页无障碍常用的一些在下面列出了。表格里，"NVDA"代表"NVDA 修饰键"。

| 快捷键                          | 描述                                                          |
| ------------------------------- | ------------------------------------------------------------- |
| NVDA + Q                        | 关闭 NVDA                                                     |
| NVDA + 上                       | 阅读当前行                                                    |
| NVDA + 下                       | 在当前位置开始阅读                                            |
| 上和下，或者 Shift + Tab 和 Tab | 移动到上/下一项，开始阅读                                     |
| 左和右                          | 移动到当前项的上/下一个字符，开始阅读                         |
| Shift + H 和 H                  | 移动到上/下一标题，开始阅读                                   |
| Shift + K 和 K                  | 移动到上/下一链接项，开始阅读                                 |
| Shift + D 和 D                  | 移动到上/下一文档界标（比如\<nav>），开始阅读                 |
| Shift + 1–6 和 1–6              | 移动到上/下一标题（标题 1 - 6），开始阅读                     |
| Shift + F 和 F                  | 移动到上/下一表单选项，聚焦                                   |
| Shift + T 和 T                  | 移动到上/下一数据表，聚焦                                     |
| Shift + B 和 B                  | 移动到上/下一按钮，阅读它的 label                             |
| Shift + L 和 L                  | 移动到上/下一列表，阅读它的第一项                             |
| Shift + I 和 I                  | 移动到上/下一列表，开始阅读                                   |
| Enter/Return                    | (当链接或按钮或其他可激活的项选中时) 激活项                   |
| NVDA + 空格                     | (当选中表单时) 进入表单，或如果已经在表单里的情况下，离开表单 |
| Shift Tab 和 Tab                | (当在表单里面时) 切换到下一个 input                           |
| 上 和 下                        | (当在表单里面时) 改变 input 的值 (例如选择框).                |
| 空格                            | (当在表单里面时) 选择已选中的值                               |
| Ctrl + Alt + 方向键             | (当选中表格时) 切换表格单元格                                 |

#### 屏幕阅读器测试

现在你学会了如何使用屏幕阅读器，来使用它做一些无障碍测试吧。这样你才能了解屏幕阅读器在好的网页和坏的网页之间不同的表现：

- 浏览[good-semantics.html](http://mdn.github.io/learning-area/accessibility/html/good-semantics.html), 留意屏幕阅读器如何找到标题并将其用于导航。再看一下[bad-semantics.html](http://mdn.github.io/learning-area/accessibility/html/bad-semantics.html), 留意屏幕阅读器不会得到这些信息。想象一下，当尝试浏览非常长的文本页面时，这会是多么使人烦躁。
- 浏览[good-links.html](http://mdn.github.io/learning-area/accessibility/html/good-links.html), 并留意当不在上下文时他们对于你理解内容的帮助。而[bad-links.html](http://mdn.github.io/learning-area/accessibility/html/bad-links.html) 就无法帮助你理解— 他们仅仅会提示"click here（点击这里）".
- 浏览[good-form.html](http://mdn.github.io/learning-area/accessibility/html/good-form.html), 并注意如何使用其标签描述表单输入，因为我们已经正确使用了\<label>。在[bad-form.html](http://mdn.github.io/learning-area/accessibility/html/bad-form.html), 只能获取到无用的空白标签。
- 浏览[punk-bands-complete.html](http://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html), 并查看屏幕阅读器如何将内容的列和行关联起来，并一起读取它们，因为我们已经正确定义了标头。在[bad-table.html](http://mdn.github.io/learning-area/accessibility/html/bad-table.html), 无法得知单元格的关联关系。请注意，当页面上只有一个表时，NVDA 似乎表现得有些杂乱无章。你可以改用[WebAIM's table test page](http://webaim.org/articles/nvda/tables.htm)进行测试。
- 看一下之前看过的[WAI-ARIA live regions example](http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm), 并注意屏幕阅读器将实时读取不断更新的部分。

### 用户测试

如上所述，你不能仅依靠自动化工具来确定网站上的无障碍问题。建议在制定测试计划时，包含一些用户测试无障碍的计划 (有关更多内容，请参阅前面的[用户测试](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#User_testing)部分)。尝试让一些屏幕阅读器用户，一些全键盘用户，一些有听觉障碍的用户或其他用户参与测试，以满足你的需求。

## 测试无障碍检查清单

以下列表提供了一个清单，供参考，以确保已对项目执行建议的无障碍测试：

1. 确保 HTML 尽可能是语义化的。[验证](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#%E9%AA%8C%E8%AF%81)是一个好方法，就像使用[审计工具](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7#%E5%AE%A1%E8%AE%A1%E5%B7%A5%E5%85%B7)。
2. 检查当关闭 CSS 时，你的内容能够被理解。
3. 确认功能是[全键盘可访问](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7#%E4%BD%BF%E7%94%A8%E9%94%AE%E7%9B%98)的。使用 Tab 键、回车键等做测试。
4. 确保非文本内容有[替代文本](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7#%E6%9B%BF%E4%BB%A3%E6%96%87%E6%9C%AC)。 [审计工具](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7#%E5%AE%A1%E8%AE%A1%E5%B7%A5%E5%85%B7)能够很好地发现问题。
5. 确保[颜色和颜色对比度](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7#%E9%A2%9C%E8%89%B2%E5%92%8C%E9%A2%9C%E8%89%B2%E5%AF%B9%E6%AF%94%E5%BA%A6)是可接受的，使用合适的工具测试。
6. 确保[隐藏的内容](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7#%E9%9A%90%E8%97%8F%E7%9A%84%E5%86%85%E5%AE%B9)可以被屏幕阅读器读取。
7. 尽可能的使功能在没有 JavaScript 的情况下也可以正常使用。
8. 在合适的地方使用 ARIA 来提供无障碍。
9. 使用[审计工具](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7#%E5%AE%A1%E8%AE%A1%E5%B7%A5%E5%85%B7)测试一下你的网站。
10. 使用屏幕阅读器实际测试一下。
11. 在你的网站上可以添加无障碍策略/声明，以说明你的为无障碍做了什么。

## 寻找帮助

无障碍还会遇到许多其他问题。你要学会如何在线查找答案。请查阅 HTML 和 CSS 文章的“[寻找帮助](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#%E5%AF%BB%E6%89%BE%E5%B8%AE%E5%8A%A9)”部分，以获取一些指导。

## 总结

希望本文能让你了解无障碍，以及帮助你解决遇到的一些无障碍问题。

下一篇文章，我们将详细介绍特征检测。

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}
