---
title: 处理常见的 HTML 和 CSS 问题
slug: Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}

通过之前的准备，我们现在将专门研究在 HTML 和 CSS 代码中遇到的常见跨浏览器问题，以及哪些工具可以用来防止问题的发生，或者解决出现的问题。这包括静态分析代码，处理 CSS 前缀，使用浏览器开发工具来跟踪问题，使用 polyfills 添加到浏览器的支持，解决响应的设计问题，等等。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        <p>
          熟悉核心的 <a href="/zh-CN/docs/Learn/HTML">HTML</a>，<a
            href="/zh-CN/docs/Learn/CSS"
            >CSS</a
          >
          和 <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言；了解<a
            href="/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
            >跨浏览器测试</a
          >中涉及的高级概念。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">本文目标：</th>
      <td>
        为了能够诊断常见的 HTML 和 CSS
        跨浏览器问题，并使用适当的工具和技术来解决它们
      </td>
    </tr>
  </tbody>
</table>

## HTML 和 CSS 的问题

实际上，HTML 和 CSS 的问题在于，它们相当简单，简单到开发人员通常不会认真对待它们，因此难以确保代码简洁、高效，或是能在语义上描述页面各部分的功能。在最坏的情况下，一些网站甚至选择使用 JavaScript 来生成整个网页的内容和样式，这使得页面的可读性较差，并且性能低下（对性能而言，生成大量 DOM 元素的操作是较为昂贵的）。

> **备注：** 关于使用 JavaScript 生成网页的选择，抛开一切非决定性的因素，最终的关键还是我们开发者。
> 非决定性因素，比如页面本身，举个例子，如果页面是由大量的重复或有规律片段组成，使用适当、理想的 JavaScript 来生成这样的页面会是不错的选择。
>
> 但是，如果我们的决定性因素，开发者，不了解或不重视有关的问题，甚至盲目地崇拜一些基于 JavaScript 的前端页面生成方案，可能一切都是白搭。
> 反过来，如果开发者深谙简化、语义和性能等的意义与价值，对不同的方案有全面的了解，即使使用 JavaScript 在前端生成网页，最终也可以产生各方面表现良好的页面。虽然，多数情况下，这样的开发者往往会保留页面的基本框架，不由 JS 生成。

在其他情况中，不同浏览器对新特性的支持不同，也可能会使某些功能和样式对某些用户不起作用。除此之外，响应式设计问题也很常见——在桌面浏览器中看起来不错的网站可能会在移动设备上给出可怕的体验，因为内容太小而无法阅读，或者性能被代价昂贵的动画严重拖累。

让我们前进吧，看看我们如何能够减少 HTML / CSS 中的跨浏览器错误。

## 首先：解决一般问题

我们在本系列的[第一篇文章](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction#Testingdiscovery)中说过，一个好的策略是在桌面/移动设备上测试几个现代的浏览器，以确保您的代码正常工作，然后才能专注于跨浏览器问题。

在我们的[调试 HTML](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML) 和[调试 CSS](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS) 两篇文章中，我们也提供了一些关于调试 HTML/CSS 的基本指导——如果您不熟悉基础知识，那么在继续之前，您得学习这些文章。

基本上，这是一个如何检查您的 HTML 和 CSS 代码，是否格式正确、不包含任何语法错误的问题。

> **备注：** CSS 和 HTML 之间的一个常见问题，就是不同的 CSS 规则之间发生冲突。当您使用第三方代码时，问题可能大到难以修补。例如，你可能正用着一个 CSS 框架，并发现它使用的一个类名与你已经用于某处的类名冲突。或者，您可能会发现，由某种第三方 API（例如生成广告横幅的脚本）生成的 HTML 包含您已经用于别处的类名称或者 ID。
> 为了确保不会发生这种情况，您需要首先研究一下您正在使用的工具，了解它们可能使用的类名与 ID，并围绕，或者规避着它们来设计您的代码。设法为 CSS 加上“命名空间”也是值得的，例如，如果有一个小部件，就先确保它有一个独特的类，然后基于这个类来选择元件内的这个类的选择器，这样一来，冲突的可能性就小下来了。例如 .audio-player ul a。

### 验证

对于 HTML，要确保所有的标签都被正确地关闭和嵌套，写好 DOCTYPE，而且正确地使用各种标签。一个好的策略是定期验证你的代码。一个可以做到这一点的服务是 [W3C 标记验证服务](https://validator.w3.org/)，提供您的代码，它就能返回错误列表：

![The HTML validator homepage](validator.png)

CSS 有一个类似的路线——你需要检查你的属性名拼写是否正确，属性值拼写正确，并且对于它们使用的属性是有效的，你不会丢失任何大括号，等等。为了这个目的，W3C 也有一个 [CSS 验证器](http://jigsaw.w3.org/css-validator/)。

### Linter

另一个很好的选择就是所谓的 Linter 程序，它不仅可以指出错误，还可以标记关于 CSS 中不良做法的警告，以及其他一些要点。大家可以定制 Linter，以得到更严格或者更宽松的错误/警告报告。

有许多在线 Linter 程序，其中最好的可能是“脏标记”[Dirty Markup](https://www.dirtymarkup.com/)（HTML，CSS，JavaScript）和 [CSS Lint](http://csslint.net/)（仅限 CSS）。它们可以让你把代码粘贴到一个窗口中，并且会用十字标记任何错误，然后可以将它们悬停，以获得错误信息，通知你问题是什么。肮脏的标记还允许您使用清理按钮修复您的标记。

![](dirty-markup.png)

但是，将代码复制并粘贴到网页上以检查其有效性是不太方便的。你真正想要的 Linter 可以和你的工作流更加契合，减免一切窗口切换等麻烦。

许多代码编辑器都有 linter 插件。Github 的 [Atom](https://atom.io/) 代码编辑器例如有一个丰富的插件生态系统可用，有很多 linting 选项。向您展示一个这样的插件通常如何工作的例子：

1. 安装 Atom（如果您还没有安装最新版本），请从上面链接的 Atom 页面下载。
2. 转到 Atom 的*首选项...*对话框（例如在 Mac 上选择 _Atom > Preferences..._ 或在 Windows / Linux 上选择 _File > Preferences..._），然后在左侧菜单中选择 Install 选项。
3. 在搜索包文本字段中，输入“lint”，然后按 Enter / 回车键搜索与 lint 相关的包。
4. 您应该在列表顶部看到一个名为 lint 的包。首先安装它（使用安装按钮），因为其他短裤依靠它工作。之后，安装用于 linting CSS 的 linter-csslint 插件，和用于 lint HTML 的 linter-tidy 插件。
5. 软件包完成安装后，尝试加载一个 HTML 文件和一个 CSS 文件：在行号旁边会看到用绿色（警告）和红色（错误）圆圈，突出显示任何存在的问题，底部则提供行号、错误消息，有时有建议的值或者其他修复。

![](atom-htmltidy.png)![](atom-csslint.png)

其他受欢迎的编辑器也有类似的 linting 包可用。例如：

- [SublimeLinter](www.sublimelinter.com/) for Sublime Text
- [Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)
- [VSCode linter](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### 浏览器开发者工具

大多数浏览器中内置的开发人员工具还提供了有用的工具来查找错误，主要是针对 CSS 的。

> **备注：** 在开发工具中，HTML 错误不会直接显示，因为浏览器会尝试自动纠正错误形成的标记；目前，W3C 验证器是获取 HTML 错误的最佳方法——请参阅上面的[验证](/zh-CN/docs/preview-wiki-content#Validation)。

例如，在 Firefox 中，CSS 检查器将显示未应用的 CSS 声明，并带有警告三角形。悬停警告三角将提供一个描述性的错误信息：

![](css-message-devtools.png)

其他浏览器的开发者工具有相似的功能。

## 常见的跨浏览器问题

现在让我们继续看看一些最常见的跨浏览器 HTML 和 CSS 问题。这里，我们重点先看的方面是一些浏览器缺乏对现代功能和布局的支持所造成的问题。

### 旧版浏览器不支持新特性

这是一个常见的问题，尤其是当您需要支持旧的浏览器（例如旧的 IE 版本），或者您正在使用使用 CSS 前缀实现的功能时。通常，大多数核心 HTML 和 CSS 功能（如基本的 HTML 元素，CSS 基本颜色和文本样式）在大多数浏览器中都可以使用，当您开始想要使用 [Flexbox](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)，[HTML5 视频/音频](/zh-CN/docs/Web/Apps/Fundamentals/Audio_and_video_delivery)，甚至更新的 [CSS Grid](/zh-CN/docs/Learn/CSS/CSS_layout/Grids#Native_CSS_Grids_with_Grid_Layout) 或 [`-webkit-background-clip：text`](/zh-CN/docs/Learn/CSS/Styling_boxes/Advanced_box_effects#-webkit-background-clip_text) 等新功能时，会发现更多的问题。

一旦您确定了您将要使用的潜在问题技术列表，研究它们所支持的浏览器以及相关技术是否有用是一个不错的主意。请参阅下面的[查找帮助](/zh-CN/docs/preview-wiki-content#Finding_help)。

#### HTML 回退行为

一些问题可以通过利用 HTML / CSS 的自然工作方式来解决。

无法识别的 HTML 元素被浏览器视为匿名内联元素（有效内联元素，没有语义值，类似于 {{htmlelement("span")}} 元素）。您还可以参考他们通过自己的名字，并用 CSS 样式它们，例如 - 你只需要确保它们表现为你想让他们，例如对所有新的语义元素设置 `display: block;`（如 {{htmlelement("article")}}、{{htmlelement("aside")}} 等），但现在，基本只有在旧版本的 IE 不能识别他们（IE 8 和更低）。这样，新的浏览器就可以正常使用这些代码，但是旧的 IE 版本也可以对这些元素进行样式化。

> **备注：** 请参阅[IE 条件注释](/zh-CN/docs/preview-wiki-content#IE_conditional_comments)以获取最佳实践。

更复杂的元素，如 HTML [`<video>`](/zh-CN/docs/Web/HTML/Element/video)、[`<audio>`](/zh-CN/docs/Web/HTML/Element/audio)，和 [`<canvas>`](/zh-CN/docs/Web/HTML/Element/canvas)（和其他功能除外）有自然的 fallback 加入机制，其工作原理与上述相同。您可以在开始和结束标记之间添加回退内容，非支持的浏览器将有效地忽略外部元素并运行嵌套的内容。

例如：

```html
<video id="video" controls preload="metadata" poster="img/poster.jpg">
  <source src="video/tears-of-steel-battle-clip-medium.mp4" type="video/mp4" />
  <source
    src="video/tears-of-steel-battle-clip-medium.webm"
    type="video/webm" />
  <source src="video/tears-of-steel-battle-clip-medium.ogg" type="video/ogg" />
  <!-- Flash fallback -->
  <object
    type="application/x-shockwave-flash"
    data="flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4"
    width="1024"
    height="576">
    <param
      name="movie"
      value="flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />
    <param name="allowfullscreen" value="true" />
    <param name="wmode" value="transparent" />
    <param
      name="flashvars"
      value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />
    <img
      alt="Tears of Steel poster image"
      src="img/poster.jpg"
      width="1024"
      height="428"
      title="No video playback possible, please download the video from the link below" />
  </object>
  <!-- Offer download -->
  <a href="video/tears-of-steel-battle-clip-medium.mp4">Download MP4</a>
</video>
```

这个例子（来自[创建一个跨浏览器的视频播放器](/zh-CN/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player)）不仅包括旧的 IE 版本的 Flash 视频后备，而且还包括一个简单的链接，允许你下载视频，这样，即使 Flash 播放器无法运作，用户仍然可以访问视频。

HTML5 表单元素也表现出了后备素质--HTML5 引入了一些特殊的 [`<input>`](/zh-CN/docs/Web/HTML/Element/input) 类型，用于将特定的信息输入到时间，日期，颜色，数字等形式中。这些非常有用，特别是在移动平台上，它提供了一种无痛苦的输入数据对用户体验非常重要。当使用这些输入类型时，支持平台提供特殊的 UI 小部件，例如用于输入日期的日历小部件。

以下示例显示日期和时间输入：

```html
<form>
  <div>
    <label for="date">Enter a date:</label>
    <input id="date" type="date" />
  </div>
  <div>
    <label for="time">Enter a time:</label>
    <input id="time" type="time" />
  </div>
</form>
```

此代码的输出如下所示：

{{EmbedGHLiveSample("learning-area/tools-testing/cross-browser-testing/html-css/forms-test", '100%', 150)}}

> **备注：** 您也可以在 GitHub 上以[forms-test.html 的形式直接](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html)看到这个运行（参见[源代码](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/forms-test.html)）。

如果您在支持的浏览器（如桌面/ Android Chrome 或 iOS Safari）上查看该示例，则会在尝试输入数据时看到特殊的小部件/功能。在一个非支持的平台上，例如 Firefox 或 Internet Explorer，输入只会回退到正常的文本输入，所以至少用户仍然可以输入一些信息。

注意：当然，这对于您的项目需求来说可能不是一个很好的解决方案 - 视觉呈现方面的差异并不是很大，而且更难保证数据将以您希望的格式输入。对于跨浏览器表单，依靠简单的表单元素，或者选择性地使用高级表单元素来支持浏览器，或者使用提供体面的跨浏览器表单小部件（如 [jQuery UI](http://jqueryui.com/) 或 [Bootstrap datepicker](https://bootstrap-datepicker.readthedocs.io/en/latest/)）的库可能会更好。

#### CSS 回退行为

CSS 的情况可以说比 HTML 更好一些。如果一个浏览器遇到一个它不明白的声明或规则，它只会完全跳过它，而不会强行应用它或者抛出错误。这可能会让你和你的用户感到沮丧，如果这样的错误滑入产品代码，但至少意味着整个网站不会因为一个错误而崩溃，如果巧妙地使用，你可以使用它。

让我们来看一个例子——一个简单的 CSS 风格的框，它有一些 CSS3 特性提供的样式：

![](blingy-button.png)

> **备注：** 你也可以在 GitHub 上浏览这个例子：[button-with-fallback.html 的形式运行](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)（另见[源代码](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)）。

该按钮有一些样式声明，但我们最感兴趣的两个如下：

```css
button {
  ...

  background-color: #ff0000;
  background-color: rgba(255,0,0,1);
  box-shadow: inset 1px 1px 3px rgba(255,255,255,0.4),
              inset -1px -1px 3px rgba(0,0,0,0.4);
}

button:hover {
  background-color: rgba(255,0,0,0.5);
}

button:active {
  box-shadow: inset 1px 1px 3px rgba(0,0,0,0.4),
              inset -1px -1px 3px rgba(255,255,255,0.4);
}
```

在这里，我们提供了一个 [RGBA](</zh-CN/docs/Web/CSS/color_value#rgba()>) [background-color](/zh-CN/docs/Web/CSS/background-color)，改变悬停的不透明度，给用户一个暗示该按钮是交互式的提示，以及一些半透明的嵌入式 [box-shadow](/zh-CN/docs/Web/CSS/box-shadow) 阴影，使按钮有一点纹理和深度。问题在于 RGBA 颜色和方块阴影在 9 以前的 IE 版本中不起作用 - 在较旧的版本中，背景根本不会显示出来，所以文本将是不可读的，这没有任何好处！

![](unreadable-button.png)

为了解决这个问题，我们添加了第二个 background-color 声明，它只是指定了一个十六进制颜色 - 这在旧版本的浏览器中得到了支持，并且在现代闪亮功能无法使用的情况下作为后备。访问此页面的浏览器首先应用第一个 background-color 值，当它到达第二个 background-color 声明时，如果它支持 RGBA 颜色，它将用这个值覆盖初始值。如果不是的话，它会忽略整个声明，继续前进。

> **备注：** 这同样适用于其他 CSS 功能，如真正的[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)，[@font-face](/zh-CN/docs/Web/CSS/@font-face) 以及 [@supports](/zh-CN/docs/Web/CSS/@supports) 块 - 如果不支持他们，浏览器只是忽略它们。

#### IE 条件注释

IE 条件注释是修改后的专有 HTML 注释语法，可用于将 HTML 代码有选择地应用于不同版本的 IE。这已被证明是一个非常有效的机制来解决跨浏览器的错误。语法如下所示：

```html
<!--[if lte IE 8]>
  <script src="ie-fix.js"></script>
  <link href="ie-fix.css" rel="stylesheet" type="text/css" />
<![endif]-->
```

只有当浏览器查看页面是 IE 8 或更旧时，此块才会应用 IE 特定的 CSS 和 JavaScript。lte 意思是“小于或等于”，但是也可以使用 lt、gt、gte、!(NOT) 以及其他逻辑语法。

> **备注：** Sitepoint 的 [Internet Explorer 条件注释](https://www.sitepoint.com/web-foundations/internet-explorer-conditional-comments/)提供了一个有用的初学者教程/参考，详细解释了条件注释语法。

正如你所看到的，这对于将代码修复应用于旧版本的 IE 尤其有用。我们前面提到的用例（使旧版本的 IE 可以使用现代语义元素）可以通过使用条件注释来轻松实现，例如，您可以在 IE 样式表中添加类似这样的内容：

```css
aside,
main,
article,
section,
nav,
figure,
figcaption {
  display: block;
}
```

然而，这并不是那么简单 - 您还需要通过 JavaScript 在 DOM 中创建您想要样式化的每个元素的副本，让它们变得可以风格化; 这是一个奇怪的怪癖，我们不会在这里让你知道细节。例如：

```js
const asideElem = document.createElement('aside');
 ...
```

这听起来像是一个痛苦的处理，但幸运的是有一个 [polyfill](/zh-CN/docs/Glossary/polyfill) 可以为您做必要的修复，除此之外 - 请参阅 [HTML5Shiv](https://github.com/aFarkas/html5shiv) 了解所有细节（请参阅[手动安装](https://github.com/aFarkas/html5shiv#installation)以获取最简单的用法）。

#### 选择器支持

当然，如果你不使用正确的[选择器](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Selectors)来选择你想要的样式的话，就没有任何 CSS 功能可以应用！如果您只是错误地写了一个选择器，所以在任何浏览器中的样式都不像预期的那样，您只需要排除故障并找出选择器出了什么问题。我们发现使用浏览器的开发工具来检查你试图设计的元素是有帮助的，然后看一下 DOM 检查器倾向于提供的 DOM 树面包屑跟踪，看看你的选择器是否比它有意义。

例如，在 Firefox 开发工具中，您可以在 DOM 检查器的底部获得这种输出：

![](dom-breadcrumb-trail.png)

例如，如果您尝试使用此选择器，则可以看到它不会根据需要选择输入元素：

```css
form > #date
```

（date 表单输入不是直接在里面\<form>;你最好使用一般的后代选择器而不是子选择器）。

然而，出现在 IE 9 比旧的版本的另一个问题是，没有任何新的选择（主要是伪类和伪元素如 [:nth-of-type](/zh-CN/docs/Web/CSS/:nth-of-type)，[:not](/zh-CN/docs/Web/CSS/:not)，[::selection](/zh-CN/docs/Web/CSS/::selection)，等）的工作。如果你想在你的 CSS 中使用这些，并且需要支持较老的 IE 版本，那么一个好的方法就是使用 Keith Clark 的 [Selectivizr](http://selectivizr.com/) 库 - 这是一个小型的 JavaScript 库，可以在现有的 JavaScript 库（如 [jQuery](http://jquery.com/) 或 [MooTools](http://mootools.net/)）上工作。

1. 要尝试此示例，请创建 [selectivizr-example-start.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/selectivizr-example-start.html) 的本地副本。如果你看看这个现场直播，你会发现它包含两个段落，其中一个是风格。我们已经选择了这个段落 `p:first-child`，这在老版本的 IE 中不起作用。
2. 现在下载 [MooTools](http://mootools.net/)和[Selectivizr](http://selectivizr.com/)，并将它们保存在与示例 HTML 相同的目录中。
3. 将下面的代码放到 HTML 文档的开头，就在开始 `<style>` 标记之前：

   ```html
   <script type="text/javascript" src="MooTools-Core-1.6.0.js"></script>
   <!--[if (gte IE 6)&(lte IE 8)]>
     <script type="text/javascript" src="selectivizr-min.js"></script>
   <![endif]-->
   ```

如果你尝试在旧版本的 IE 中运行它，它应该可以正常工作。

![](new-selector-ie7.png)

#### 处理 CSS 前缀

CSS 前缀带来的另外一个问题是 - 这些是一种用于允许浏览器供应商在技术处于试验状态时实现自己版本的 CSS（或 JavaScript）特性的机制，所以他们可以使用它来获取它没有与其他浏览器的实现冲突，或者最终的前置实现。举个例子：

- Mozilla 使用 `-moz-`
- Chrome / Opera / Safari 使用 `-webkit-`
- 微软使用 `-ms-`

这里有一些例子：

```css
-webkit-transform: rotate(90deg);

background-image: -moz-linear-gradient(left, green, yellow);
background-image: -webkit-gradient(
  linear,
  left center,
  right center,
  from(green),
  to(yellow)
);
background-image: linear-gradient(to right, green, yellow);
```

第一行显示了一个[transform](/zh-CN/docs/Web/CSS/transform)带有-webkit-前缀的属性 - 这是在 Chrome 中使用变换功能所必需的，直到功能定稿，并且这些浏览器添加了该属性的前缀无版本（在撰写本文时，Chrome 支持这两个版本）。

最后三行显示了三个不同版本的[linear-gradient()](/zh-CN/docs/Web/CSS/linear-gradient)函数，用于在元素的背景中生成线性渐变：

1. 第一个有一个-moz-前缀，并显示一个略老的语法版本（Firefox）
2. 第二个有一个-webkit-前缀，并显示一个更老的专有版本的语法（这实际上是从一个真正的旧版本的 WebKit 引擎）。
3. 第三个没有前缀，并显示语法的最终版本（包含在定义此功能的[CSS 图像值和替换内容模块级别 3 规范中](https://drafts.csswg.org/css-images-3/#linear-gradients)）。

前缀功能从来不应该用于生产网站——它们可能会在没有警告的情况下更改或删除，并导致跨浏览器问题。当开发人员决定只使用-webkit- 某个属性的版本时，这是一个特别的问题 - 这意味着该网站在其他浏览器中不起作用。这实际上发生了很多，其他浏览器已经开始实现-webkit-各种 CSS 属性的前缀版本，所以他们将使用这样的代码。由于这些类型的问题，浏览器供应商使用前缀最近已经下降，但仍然有一些需要注意。

如果您坚持使用前缀功能，请确保使用正确的功能。您可以在 MDN 参考页面上查找哪些浏览器需要前缀，以及像[caniuse.com](http://caniuse.com/)这样的[站点](http://caniuse.com/)。如果你不确定，你也可以直接在浏览器中做一些测试。

试试这个简单的例子：

1. 打开 google.com 或具有突出标题或其他块级元素的其他站点。
2. 右键/ Cmd +单击有问题的元素并选择 Inspect / Inspect 元素（或者浏览器中的任何选项） - 这应该在浏览器中打开开发工具，在 DOM 检查器中高亮显示该元素。
3. 寻找可以用来选择该元素的功能。例如，在撰写本文时，主要的 Google 徽标的 ID 为 hplogo。
4. 将对此元素的引用存储在变量中，例如：

   ```js
   const test = document.getElementById("hplogo");
   ```

5. 现在尝试为您感兴趣的 CSS 属性设置一个新的值，你可以使用元素的[style](/zh-CN/docs/Web/API/HTMLElement/style)属性来做到这一点，例如尝试在 JavaScript 控制台中输入这些：

   ```js
   test.style.transform = "rotate(90deg)";
   test.style.webkitTransform = "rotate(90deg)";
   ```

当您开始在第二个点之后键入属性名称表示形式（请注意，在 JavaScript 中，CSS 属性名称是以较低的驼峰大小写，而不是连字符），JavaScript 控制台应该开始自动填充浏览器中存在的属性的名称并匹配到目前为止所写的内容。这对于找出在该浏览器中实现哪个版本的属性很有用。

在撰写本文时，Firefox 和 Chrome 都实现了 `-webkit-` 前缀和非前缀的[transform](/zh-CN/docs/Web/CSS/transform)！

一旦你找到了你需要支持的前缀，你应该把它们写在你的 CSS 中，例如：

```css
-ms-transform: rotate(90deg);
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
```

这可以确保所有支持上述任何属性的浏览器都可以使该功能正常工作。值得把非前缀版本放在最后，因为那将是最新的版本，如果可能的话，你会希望浏览器使用它。例如，如果浏览器实现了-webkit-版本和非前缀版本，则它将首先应用-webkit-版本，然后用非前缀版本覆盖它。你希望这样发生，而不是相反。

当然，这样做很多不同的 CSS 规则可能会变得非常乏味。最好使用自动化工具来为你做。而这样的工具存在：

[无前缀的 JavaScript 库](http://leaverou.github.io/prefixfree/)可以附加到页面上，并自动检测浏览器查看页面的功能，并根据需要添加前缀。使用起来非常简单方便，虽然它有一些缺点（请参阅上面的链接了解详细信息），但有一点是可争议的，即在您的站点中解析每个样式表并在运行时添加前缀可能会消耗计算机的处理能力为一个大的网站。

另一个解决方案是在开发过程中自动添加前缀，而这个（和其他的东西除外）可以使用像[Autoprefixer](https://github.com/postcss/autoprefixer)和[PostCSS](http://postcss.org/)这样的工具完成。这些工具可以以多种方式使用，例如 Autoprefixer 有一个[在线版本](http://autoprefixer.github.io/)，允许您在左侧输入非前缀 CSS，并在右侧给出前缀添加版本。您可以使用[Autoprefixer 选项中](https://github.com/postcss/autoprefixer#options)列出的符号来选择要确保支持的浏览器; 另请参阅基于此的[Browserslist 查询](https://github.com/ai/browserslist#queries)以获取更多详细信息。例如，以下查询将选择所有主流浏览器的最后 2 个版本和 IE9 以上的版本。

```plain
last 2 versions, ie > 9
```

Autoprefixer 也可用于其他更便捷的方式 - 请参阅[Autoprefixer 使用情况](https://github.com/postcss/autoprefixer#usage)。例如，您可以使用任务运行器/构建工具（如[Gulp](http://gulpjs.com/)或[Webpack）](https://webpack.github.io/)在开发完成后自动添加前缀。（解释这些工作如何超出本文的范围。）

您也可以使用插件来编辑文本编辑器，如 Atom 或 Sublime 文本。例如，在 Atom 中：

1. 您可以通过转到首选项>安装，搜索 Autoprefixer，然后安装。
2. 您可以通过按“Autoprefixer 设置”按钮并在页面的“设置”部分的文本字段中输入查询来设置浏览器查询。
3. 在你的代码中，你可以选择要添加前缀的 CSS 部分，打开命令调色板（Cmd / Ctrl + Shift + P），然后输入 Autoprefixer 并选择 Autoprefixer 自动完成的结果。

作为一个例子，我们输入了下面的代码：

```css
body {
  display: flex;
}
```

我们突出显示了它，并运行 Autoprefixer 命令，并用以下代码替换它：

```css
body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```

### 布局问题

另一个可能出现的问题是浏览器之间布局的差异。从历史上看，这往往是一个更大的问题，但是最近，现代浏览器倾向于更一致地支持 CSS，布局问题往往更倾向于：

- 对现代布局功能缺乏（或不同）支持。
- 布局在移动浏览器中看起来不太好（即响应式设计问题）。

> **备注：** 过去，Web 开发人员使用 reset CSS 删除应用于 HTML 的所有默认浏览器样式，然后将自己的样式应用于顶部的所有样式 - 这样做是为了使项目的样式更加一致，并减少可能的跨浏览器问题，特别是像布局的东西。然而现在它被认为过头了。我们现在最好的等价物是[normalize.css](https://necolas.github.io/normalize.css/)，这是一个整齐的 CSS，在默认的浏览器样式上略微增加一点，使事情更加一致，并解决一些布局问题。建议您将 normalize.css 应用于所有的 HTML 页面。

> **备注：** 当试图追踪一个棘手的布局问题，一个好方法是添加一个明亮的颜色[outline](/zh-CN/docs/Web/CSS/outline)到有问题的元素，或附近的所有元素。这使得更容易看到一切放置在哪里。请参阅[使用大纲可视化调试您的 CSS 以](http://www.otsukare.info/2016/10/05/debugging-css)获取更多详细信息。

#### 支持新的布局特性

今天网络上的大部分布局工作都是使用[浮动工具](/zh-CN/docs/Learn/CSS/CSS_layout/Floats)完成的 - 这是因为浮动支持得很好（可以回到 IE4，尽管如此，如果您尝试支持 IE，也需要调查一些错误很久以前）。但是，它们并不是真正用于布局的目的 - 使用浮动的方式实际上是一种黑客攻击 - 而且它们有一些严重的限制（例如，请参阅[为什么选择 Flexbox？](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox#Why_Flexbox)）

最近，出现了专门的布局机制，例如[Flexbox](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)和[CSS Grids](/zh-CN/docs/Learn/CSS/CSS_layout/Grids#Native_CSS_Grids_with_Grid_Layout)，这些布局机制使常见的布局任务变得更加容易并消除了这些缺点。但是，这些在浏览器中并没有得到很好的支持：

- CSS Grid 是非常新的；在撰写本文的时候，他们只在最新版本的现代浏览器中才[得到支持](http://gridbyexample.com/browsers/)。
- Flexbox 在现代浏览器中[得到](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox#Cross_browser_compatibility)了[很好的支持](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox#Cross_browser_compatibility)，但是在旧版浏览器中却存在问题。IE 9 根本不支持它，IE 10 和旧版本的 iOS /桌面 Safari 分别支持 Flexbox 规范的两种不兼容老版本。如果您想尝试在所有这些浏览器上使用 flexbox（请参阅[高级跨浏览器 Flexbox](https://dev.opera.com/articles/advanced-cross-browser-flexbox/)以获得创意），[则会](https://dev.opera.com/articles/advanced-cross-browser-flexbox/)导致一些有趣的浏览器前缀[杂乱](https://dev.opera.com/articles/advanced-cross-browser-flexbox/)。

布局功能并不像简单的颜色，阴影或渐变那样容易提供优雅的后备。如果布局属性被忽略，你的整个设计可能会崩溃。因此，您需要使用功能检测来检测访问的浏览器是否支持这些布局功能，并根据结果有选择地应用不同的布局（我们将在后面的文章中详细介绍功能检测）。

例如，您可以将 Flexbox 布局应用于现代浏览器，然后将浮动布局应用于不支持 Flexbox 的旧浏览器。

> **备注：** CSS 中还有一个相当新的特性 [@supports](/zh-CN/docs/Web/CSS/@supports)，它允许你实现原生特征检测测试。

#### 响应式设计问题

响应式设计是创建网页布局以适应不同设备形式因素（例如不同的屏幕宽度，方向（纵向或横向）或分辨率）的做法。例如桌面布局在移动设备上看起来会很糟糕，所以您需要使用[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries)来提供合适的移动布局，并确保使用[视口](/zh-CN/docs/Mozilla/Mobile/Viewport_meta_tag)正确应用它。您可以在[响应式设计的构建模块中](/zh-CN/docs/Web/Apps/Progressive/Responsive/responsive_design_building_blocks)找到这些实践的详细说明。

解决方案也是一个大问题 - 例如，移动设备不太可能需要比台式电脑大的图像，并且更可能具有较慢的互联网连接，并且甚至可能使昂贵的数据计划浪费带宽成为更多的问题。另外，不同的设备可以具有一系列不同的分辨率，这意味着较小的图像可以出现像素化。有许多技术可以让您解决这些问题，从简单的[移动第一媒体查询](/zh-CN/Apps/Progressive/Responsive/Mobile_first)到更复杂的[响应式图像技术](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes)。

可能出现问题的另一个困难是浏览器对使上述技术成为可能的特征的支持。媒体查询没有在 IE 8 或更少的支持，所以如果你想使用移动优先布局和具有桌面布局则适用于旧版本的 IE，你将有一个媒体查询应用于[填充工具](/zh-CN/docs/Glossary/polyfill)到您的网页，如 [css3- mediaqueries-js](https://code.google.com/archive/p/css3-mediaqueries-js/) 或 [Respond.js](https://github.com/scottjehl/Respond)。

## 寻找帮助

HTML 和 CSS 还有很多其他的问题。最重要的是如何在网上找到答案。

其中最好的支持信息来源是 Mozilla 开发者网络（你现在就在这！），[stackoverflow.com](http://stackoverflow.com/) 和 [caniuse.com](http://caniuse.com/)。

为使用 Mozilla 开发者网络（MDN），大多数人会搜索他们正在尝试查找信息的技术，以及术语“mdn”，例如“mdn HTML5 video”。MDN 包含几种有用的内容类型：

- 带有客户端网络技术浏览器支持信息的参考资料，例如[\<video> 参考页面](/zh-CN/docs/Web/HTML/Element/video)。
- 其他支持的参考资料，例如 [HTML 音频和视频元素支持的媒体格式](/zh-CN/docs/Web/HTML/Supported_media_formats)。
- 解决特定问题的有用教程，例如[创建跨浏览器的视频播放器](/zh-CN/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player)。

[caniuse.com](http://caniuse.com/) 提供支持信息，以及一些有用的外部资源链接。例如，请参阅<http://caniuse.com/#search=video>（您只需在文本框中输入要搜索的功能）。

[stackoverflow.com](http://stackoverflow.com/)（SO）是一个论坛网站，您可以提出问题，并让开发人员分享他们的解决方案，查看以前的帖子，并帮助其他开发人员。在发布新问题之前，建议您先看看是否已经回答了您的问题。例如，我们在 SO 上搜索了“cross browser html5 video”，并且很快得到了[具有完全跨浏览器兼容性的 HTML5 Video](http://stackoverflow.com/questions/16212510/html5-video-with-full-cross-browser-compatibility)。

除此之外，请尝试使用您最喜爱的搜索引擎来解决您的问题。如果有的话，搜索特定的错误信息通常很有用 - 其他开发人员可能会遇到与您一样的问题。

## 总结

现在您应该熟悉 Web 开发中主要的跨浏览器 HTML 和 CSS 问题，以及如何解决这些问题。

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}
