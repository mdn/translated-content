---
title: 无障碍工具与辅助技术
short-title: 无障碍工具
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

接下来，我们将关注无障碍工具，介绍可用于解决无障碍问题的各类工具，并帮助你了解残障人士为方便浏览网页所使用的辅助技术。在后续文章中，将使用本文介绍的这些工具。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        熟悉 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a> 和 <a
        href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a> 语言；理解<a
          href="/zh-CN/docs/Learn_web_development/Core/Accessibility/What_is_accessibility"
          >基本的无障碍概念</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>熟悉可用于解决无障碍问题的各类工具，例如审计工具。</li>
          <li>配置屏幕阅读器，并利用其在桌面端和移动端测试网站。</li>
          <li>熟悉其他类型的辅助技术，例如大字体或盲文键盘、替代指针设备以及屏幕放大软件。</li>
          <li>用户测试与自动化测试并重的重要性。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 无障碍工具

下面我们就来看看可以用来测试网站无障碍性并修复发现的问题的工具和方法。

### 测试源代码顺序

你的内容在源代码顺序上应符合逻辑——虽然稍后可以通过 CSS 以不同方式呈现内容，但首先应确保其底层结构正确。这是因为辅助技术会根据源代码的顺序读取网站内容，而残障人士通常会修改或禁用部分 CSS 以提高内容的可读性（常见示例包括增大字体大小和应用高对比度配色方案）。

要测试源代码顺序，你可以关闭网站的 CSS，看看在没有 CSS 的情况下内容是否易于理解。你可以手动从代码中移除 CSS 来实现这一点，但最简单的方法是使用浏览器功能，例如：

- Firefox：从主菜单中选择 _“视图” > “页面样式” > “无样式”_。
- Safari：[打开浏览器开发者工具](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#如何在浏览器中打开开发者工具)，点击开发者工具面板左上角附近的“设备设置”按钮（形状像一台电脑显示器），然后在弹出的面板中勾选“禁用 CSS”复选框。
- Chrome/Edge：安装 [Web Developer Toolbar](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) 扩展程序，然后重启浏览器。点击扩展程序菜单中现已出现的“Web Developer”齿轮图标，然后选择 _CSS > 禁用所有样式_。

### 颜色对比度检测工具

在为网站选择配色方案时，应确保文字（前景色）与背景色形成良好的对比。你的设计可能看起来很酷，但如果用户无法阅读内容，那就毫无意义。请使用 WebAIM 的[色彩对比度检测器](https://webaim.org/resources/contrastchecker/)等工具，检查你的配色方案是否具有足够的对比度。

另一个建议是，避免仅依靠颜色来标识或突出显示重要信息，因为色盲等视力障碍者可能会忽略这些提示。例如，不要仅用红色标记表单中的必填字段，而应同时使用星号和红色进行标记。

> [!NOTE]
> 高对比度还能让使用光面屏幕的智能手机或平板电脑用户，在阳光直射等明亮环境下更清晰地阅读网页内容。

### 审计工具

目前有多种审计工具可供使用，可以将网页提交至这些工具进行检测。它们会分析网页内容，并返回该页面存在的无障碍问题列表。让我们以 [Wave](https://wave.webaim.org/) 为例，这是一个在线无障碍测试工具，它接受网页地址，并返回该页面的标注视图，其中无障碍问题会被突出显示。

1. 访问 [Wave 主页](https://wave.webaim.org/)。
2. 在页面顶部附近的文本输入框中输入我们的示例 [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) 的 URL。然后按回车键，或点击/轻触输入框最右侧的箭头。
3. 该网站将突出显示存在的无障碍问题。点击显示的图标，即可查看 Wave 评估中识别出的每个问题的详细信息。

其他值得一试的无障碍检测工具：

- [Firefox 无障碍检查器](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI 书签小工具](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse 无障碍审计](https://developer.chrome.google.cn/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> 仅靠这些工具并不足以解决所有无障碍问题。需要综合运用这些工具、专业知识与经验、用户测试等手段，才能全面了解情况。

[Deque 的 aXe 工具](https://www.deque.com/axe/)比我们上面提到的审计工具功能更全面一些。与其他工具一样，它会检查网页并返回无障碍错误。其中最直接实用的形式可能是浏览器扩展程序：

- [Chrome 版 aXe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [Firefox 版 aXe](https://addons.mozilla.org/zh-CN/firefox/addon/axe-devtools/)

这些扩展会在浏览器开发者工具中添加一个“无障碍”选项卡。例如，我们安装了 Firefox 版本，然后用它来审计我们的 [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) 示例。我们得到了以下结果：

![Axe 工具识别出的无障碍问题截图。](axe-screenshot.png)

aXe 还可以通过 `npm` 安装，并可与 [Grunt](https://gruntjs.com/) 和 [Gulp](https://gulpjs.com/) 等任务运行器、[Selenium](https://www.selenium.dev/) 和 [Cucumber](https://cucumber.io/) 等自动化框架、以及 [Jasmine](https://jasmine.github.io/) 等单元测试框架，此外还有更多支持（详情请参阅 [aXe 主页](https://www.deque.com/axe/)）。

## 屏幕阅读器

残障人士使用最广泛的辅助技术（AT）之一——也是在测试网页无障碍性时最常使用的一种——就是**屏幕阅读器**。这是一种能够朗读网页内容或用户操作系统中已安装的其他应用程序内容的软件。屏幕阅读器使人们无需查看任何视觉内容即可使用计算机。

Web 浏览器会向屏幕阅读器（及其他辅助技术）提供有关页面内容的信息，以便它们通过一种称为[无障碍树](/zh-CN/docs/Glossary/Accessibility_tree)的表示形式与用户进行交互。该结构提供语义信息，例如元素的名称和描述、其用途或角色（是按钮还是输入框？），以及它们是否处于特定状态（例如，对话框是打开还是关闭？）。

对于一段文本而言，这些信息可能微不足道——因为文本听起来基本上与书面内容一致——但涉及下拉菜单或视频播放器等用户界面功能时，情况就会变得复杂。这就是为什么正确使用语义化 HTML 非常重要，本模块的下一篇文章将对此进行详细探讨。如果使用错误的元素对内容进行标记，可能会让屏幕阅读器用户感到困惑。

请确保在开发机上安装了一款或两款屏幕阅读器，并按照下文所述，尝试通过屏幕阅读器访问你常用的网站。了解视障人士如何使用网络，是设计出能更好地服务于所有人的产品的关键。

### 都有哪些可用的屏幕阅读器？

目前有几种屏幕阅读器可供选择：

- 有些是付费的商业产品，例如 [JAWS](https://vispero.com/jaws-screen-reader-software/)（Windows）。
- 有些是免费产品，例如 [NVDA](https://www.nvaccess.org/)（Windows）、[ChromeVox](https://support.google.com/chromebook/answer/7031755)（Chrome、Windows 和 macOS），以及 [Orca](https://wiki.gnome.org/Projects/Orca)（Linux）。
- 有些是内置于操作系统中的，例如 [VoiceOver](https://www.apple.com/accessibility/features/? vision)（macOS 和 iOS）、[ChromeVox](https://support.google.com/chromebook/answer/7031755)（Chromebook）以及 [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback)（Android）。

通常情况下，屏幕阅读器是运行在宿主操作系统上的独立应用程序，不仅可以朗读网页内容，还能朗读其他应用程序中的内容（但并非总是如此；例如，ChromeVox 就是一款浏览器扩展程序）。不同屏幕阅读器的具体行为和控制方式往往存在一些差异，因此需要查阅所选屏幕阅读器的文档以获取详细信息。话虽如此，它们的工作原理基本上是相似的。

在接下来的几节中，我们将使用几种不同的屏幕阅读器进行一些测试，以便让你大致了解它们的工作原理以及如何使用它们进行测试。

> [!NOTE]
> WebAIM 的[为屏幕阅读器兼容性进行设计](https://webaim.org/techniques/screenreader/)提供了关于屏幕阅读器使用情况以及最佳实践的一些有用信息。参见[屏幕阅读器用户调查第 10 期结果](https://webaim.org/projects/screenreadersurvey10/#used)，其中包含一些有趣的屏幕阅读器使用统计数据。

#### VoiceOver

VoiceOver（VO）是 Apple Mac/iPhone/iPad 预装的免费功能，因此如果使用 Apple 产品，它在桌面端和移动端测试中都非常实用。我们在 MacBook Pro 的 macOS 系统上进行了测试。

要启用该功能，请按 <kbd>Cmd</kbd> + <kbd>F5</kbd>。如果之前从未使用过 VO，系统会显示一个欢迎界面，可以在其中选择是否启动 VO，并完成一个非常实用的教程来学习如何使用它。要关闭该功能，请再次按下 <kbd>Cmd</kbd> + <kbd>F5</kbd>。

> [!NOTE]
> 应该至少完成一次教程——这是学习 VO 的非常有效的方式。

当 VoiceOver 启用时，显示界面基本保持不变，但你会在屏幕左下角看到一个黑色方框，其中包含 VoiceOver 当前所选内容的相关信息。当前选中的内容还会被高亮显示，并带有黑色边框——这种高亮效果被称为 **VoiceOver 光标**。

![一张示例截图，展示了在 MDN 主页上使用 VoiceOver 进行无障碍测试的情况。图片左下角高亮显示了网页上选中的内容。](voiceover.png)

要使用 VoiceOver，你需要频繁使用“VoiceOver 修饰键”——这是除了实际的 VoiceOver 键盘快捷键之外，还需要按下的单个键或组合键，才能使快捷键生效。使用此类修饰键在屏幕阅读器中很常见，目的是避免其命令与其他命令发生冲突。对于 VoiceOver 而言，修饰键可以是 <kbd>CapsLock</kbd>，也可以是 <kbd>Ctrl</kbd> + <kbd>Option</kbd>。

VoiceOver 拥有许多键盘命令，我们在此无法一一列举。下表列出了网页测试所需的基本命令。在键盘快捷键中，“VO”代表“VoiceOver 修饰键”。

<table class="standard-table no-markdown">
  <caption>
    常见的 VoiceOver 快捷键
  </caption>
  <thead>
    <tr>
      <th scope="col">快捷键</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VO + 光标键</td>
      <td>上/下/左/右移动 VO 光标。</td>
    </tr>
    <tr>
      <td>VO + 空格键</td>
      <td>
        选择/激活由 VO 光标高亮显示的项目。这包括在“转子”中选中的项目（见下文）。
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>Shift</kbd> + 下光标键</td>
      <td>
        进入一组对象（例如 HTML 表格或表单）。进入该组后，可以像往常一样使用上述命令在组内移动并选择对象。
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>Shift</kbd> + 上光标键</td>
      <td>移出所在的组。</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd></td>
      <td>（在表格内时）读取当前列的表头。</td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd></td>
      <td>（在表格内时）读取当前行的表头。</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd> + <kbd>C</kbd>（连续按两次 C 键）</td>
      <td>（在表格内时）读取当前列的全部内容，包括表头。</td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd> + <kbd>R</kbd>（连续按两次 R 键）</td>
      <td>（在表格内时）读取当前行的全部内容，包括表头。</td>
    </tr>
    <tr>
      <td>VO + 左光标键、VO + 右光标键</td>
      <td>（在某些水平排列的选项中，例如日期选择器）在选项之间切换。 </td>
    </tr>
    <tr>
      <td>VO + 上光标键、VO + 下光标键</td>
      <td>（在某些水平排列的选项中，例如日期选择器）更改当前选项。</td>
    </tr>
    <tr>
      <td>VO + <kbd>U</kbd></td>
      <td>打开“转子”，其中会显示标题、链接、表单控件等的列表，便于导航。</td>
    </tr>
    <tr>
      <td>VO + 左光标键、VO + 右光标键</td>
      <td>（在“转子”中时）在“转子”中可用的不同列表之间切换。</td>
    </tr>
    <tr>
      <td>VO + 上光标键、VO + 下光标键</td>
      <td>（在“转子”中时）在当前“转子”列表中的不同项之间切换。</td>
    </tr>
    <tr>
      <td><kbd>Esc</kbd></td>
      <td>（在“转子”中时）退出“转子”。</td>
    </tr>
    <tr>
      <td><kbd>Ctrl</kbd></td>
      <td>（当 VO 正在朗读时）暂停/恢复语音。</td>
    </tr>
    <tr>
      <td>VO + <kbd>Z</kbd></td>
      <td>重复语音的最后部分。</td>
    </tr>
    <tr>
      <td>VO + <kbd>D</kbd></td>
      <td>进入 Mac 的 Dock，以便选择要运行的应用程序。</td>
    </tr>
  </tbody>
</table>

这些命令看起来很多，但习惯之后其实也没那么难，而且 VO 会定期提醒你在特定情况下该使用哪些命令。现在就试着用用 VO 吧；之后你可以继续尝试[屏幕阅读器测试](#屏幕阅读器测试)部分中的部分示例。

#### NVDA

NVDA 仅支持 Windows 系统，需要先安装该软件。

1. 从 [nvaccess.org](https://www.nvaccess.org/) 下载 NVDA，然后进行安装。可以选择捐赠或免费下载；此外，在下载前还需要提供电子邮件地址。
2. 安装完成后，双击程序文件或快捷方式即可启动 NVDA，或者使用键盘快捷键 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>。启动后，你将看到 NVDA 欢迎对话框。在此可以从几个选项中进行选择，然后点击 _OK_ 按钮开始使用。

此时，NVDA 将在你的计算机上处于活动状态。

使用 NVDA 时，将频繁用到“NVDA 修饰键”——这是你需要在实际的 NVDA 键盘快捷键之外额外按下的键，才能使快捷键生效。NVDA 修饰键可以是 <kbd>Insert</kbd>（默认），也可以是 <kbd>CapsLock</kbd>（可在 NVDA 欢迎对话框中勾选第一个复选框后，在点击 _OK_ 之前进行选择）。

> [!NOTE]
> 在突出显示当前位置和操作状态方面，NVDA 比 VoiceOver 更为含蓄。当你在标题、列表等内容中滚动时，当前选中的项目通常会以一条细微的轮廓线进行高亮显示，但并非所有内容都会如此。如果完全迷失了方向，可以按 Ctrl + F5 刷新当前页面，然后从头开始。

NVDA 拥有许多键盘命令，我们在此不会一一列举。下表列出了网页测试中所需的基本命令。在键盘快捷键中，“NVDA”表示“NVDA 修饰键”。

<table class="standard-table no-markdown">
  <caption>
    常见的 NVDA 快捷键
  </caption>
  <thead>
    <tr>
      <th scope="col">快捷键</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NVDA + <kbd>Q</kbd></td>
      <td>启动后再次按此快捷键可退出 NVDA。</td>
    </tr>
    <tr>
      <td>NVDA + 上光标</td>
      <td>朗读当前行。</td>
    </tr>
    <tr>
      <td>NVDA + 下光标</td>
      <td>从当前位置开始连续朗读。</td>
    </tr>
    <tr>
      <td>上光标和下光标，或 <kbd>Shift</kbd> + <kbd>Tab</kbd> 和 <kbd>Tab</kbd></td>
      <td>移动到页面上的上一个/下一个项目并朗读它。</td>
    </tr>
    <tr>
      <td>左光标和右光标</td>
      <td>在当前项目内移动到上一个/下一个字符并朗读它。</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>H</kbd> 和 <kbd>H</kbd></td>
      <td>移动到上一个/下一个标题并朗读它。</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>K</kbd> 和 <kbd>K</kbd></td>
      <td>移动到上一个/下一个链接并朗读它。</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>D</kbd> 和 <kbd>D</kbd></td>
      <td>
        移动到上一个/下一个文档地标（例如 <code>&lt;nav&gt;</code>）并朗读它。
      </td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>1</kbd>–<kbd>6</kbd> 和 <kbd>1</kbd>–<kbd>6</kbd></td>
      <td>移动到上一个/下一个标题（级别 1–6）并朗读它。</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>F</kbd> 和 <kbd>F</kbd></td>
      <td>移动到上一个/下一个表单输入框并将焦点移至其上。</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>T</kbd> 和 <kbd>T</kbd></td>
      <td>移动到上一个/下一个数据表格并将焦点移至其上。</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>B</kbd> 和 <kbd>B</kbd></td>
      <td>移动到上一个/下一个按钮并朗读其标签。</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>L</kbd> 和 <kbd>L</kbd></td>
      <td>移动到上一个/下一个列表并朗读其第一个列表项。</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>I</kbd> 和 <kbd>I</kbd></td>
      <td>移动到上一个/下一个列表项并朗读它。</td>
    </tr>
    <tr>
      <td><kbd>Enter</kbd>/<kbd>Return</kbd></td>
      <td>（当选中链接、按钮或其他可激活项目时）激活该项目。</td>
    </tr>
    <tr>
      <td>NVDA + <kbd>空格键</kbd></td>
      <td>（当表单被选中时）进入表单以便选择各个项目，或如果已在表单内则退出表单。</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>Tab</kbd> 和 <kbd>Tab</kbd></td>
      <td>（在表单内部时）在表单输入框之间移动。</td>
    </tr>
    <tr>
      <td>上光标和下光标</td>
      <td>（在表单内部时）更改表单输入的值（适用于选择框等控件）。</td>
    </tr>
    <tr>
      <td><kbd>空格键</kbd></td>
      <td>（在表单内部时）选中当前值。</td>
    </tr>
    <tr>
      <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + 方向键</td>
      <td>（当表格被选中时）在表格单元格之间移动。</td>
    </tr>
  </tbody>
</table>

### 屏幕阅读器测试

既然已经习惯使用屏幕阅读器，我们希望你能利用它进行一些简单的无障碍测试，从而了解屏幕阅读器如何处理网页中设计合理与不合理的功能：

- 查看 [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)，注意屏幕阅读器是如何识别标题并将其作为导航元素使用的。现在请查看 [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)，注意屏幕阅读器无法获取任何此类信息。试想，当需要浏览一页非常长的文本时，这会多么令人烦恼。
- 查看 [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html)，注意这些链接在脱离上下文时（例如在 VoiceOver 转子中）依然通顺易懂。而 [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) 中的链接则并非如此——它们全都是简单的“点击此处”。
- 查看 [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html)，注意表单输入框是如何通过其标签进行描述的，因为我们添加了相应的 {{htmlelement("label")}} 元素。而在 [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) 中，这些输入框的标签却显示为“blank”之类的无用内容。
- 查看我们的 [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) 示例，你会发现屏幕阅读器能够将内容的行和列关联起来并一次性读出，这是因为我们正确定义了表格标题。而在 [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) 中，所有单元格都无法建立任何关联。请注意，当页面上仅有一个表格时，NVDA 的行为似乎会略显异常；可以改用 [WebAIM 的表格测试页面](https://webaim.org/articles/nvda/tables.htm) 进行测试。

## 其他工具

屏幕阅读器是网页开发人员最常接触的辅助技术类型之一，但除此之外还有其他类型的辅助技术，了解用户可能使用哪些辅助技术来访问你的内容非常有用。本节对其中一些进行了概述。

### 大字键盘或盲文键盘

可以购买专为视障用户或老年用户设计的大字键盘，以及专为盲人和重度视障人士设计的盲文键盘。

### 其他指针设备

提到指针设备，鼠标无疑是最典型的例子，但还有专为不同类型活动障碍的用户设计的其他指针设备，以便他们更轻松地操作用户界面：

- 轨迹球：类似于倒置的鼠标，轨迹球由一个固定在桌面上的球体组成，通过滚动该球体来移动光标。与鼠标相比，它被认为更精准、更易于操作，特别是对于手部活动受限的人来说。
- 操纵杆：一种通过移动控制杆来移动光标的设备。操纵杆的精准度虽不及轨迹球，但适用于各种身体障碍者，甚至包括重度残疾人士。
- 触控板：大多数现代笔记本电脑都配备触控板（有时也称为轨迹板）——这是一种平坦的触觉传感器，允许你用手指移动光标，并像操作移动设备一样执行多指手势。对于未内置触控板的设备，可以购买外置触控板。有些人认为触控板比鼠标更精准。

### 屏幕放大工具

屏幕放大工具可为视力受限的用户提供设备屏幕的放大视图，使他们能够更轻松地理解和操作设备内容；此外，这些工具还提供其他功能，例如针对色盲用户的色彩调整，以及调整鼠标指针和文本光标的大小，使其更易于辨识。

目前有软件和硬件两种类型的屏幕放大器可供选择：

- 大多数现代操作系统都内置了用于放大整个屏幕或部分屏幕的应用程序，例如 macOS 上的“Zoom”或 Windows 上的“放大镜”。这些应用程序通常还提供统一增大文字大小、鼠标光标大小等选项。此外，也有第三方软件可供选择。
- 硬件屏幕放大器通常由一个独立屏幕组成，该屏幕放置在设备屏幕旁边或前方，将屏幕内容或其部分内容放大后投射出来。

### 语音识别软件

语音识别软件允许通过语音下达指令来控制设备，以及/或口述电子邮件或文档的内容，由计算机代为输入文字。这对无法使用键盘或其他控制方式的人来说非常有用。

现代操作系统已内置相关功能（例如 Mac 上的“语音输入”或 Windows 上的“语音访问”），此外还有各种第三方应用程序可供选择，从桌面应用到浏览器扩展应有尽有。

### 开关控制

开关控制为行动能力极度受限或存在[认知障碍](/zh-CN/docs/Web/Accessibility/Guides/Cognitive_accessibility)的用户提供了一种与设备交互的机制。

开关控制的设置通常包括两个部分：

- 用于激活设备上各项选项的物理开关或按钮。还可以将开关功能分配给设备上的常规按钮（例如音量控制键）或键盘上的按键。
- 一种设备模式或第三方软件插件，用于使设备与开关或按钮控制兼容。例如，Android 系统中的“开关访问”模式，可循环显示不同情境下的各项选项（例如主屏幕上的应用），当滚动到所需选项时，即可通过按钮或开关进行选择。

## 无障碍规划

在每个项目启动之初，你就应该仔细考虑无障碍问题。确保在初期设计阶段就将可访问性纳入考量，这样你就可以：

- 打好基础，例如采用[良好的文档结构](/zh-CN/docs/Learn_web_development/Core/Accessibility/HTML#使用结构清晰的文本内容)，并为图片提供[替代文本](/zh-CN/docs/Learn_web_development/Core/Accessibility/HTML#替代文本)。
- 针对可能存在无障碍问题的功能，仔细考虑最佳解决方案。例如，音频和视频对某些人来说肯定无法访问，因此你应该提供替代方案，例如[文字稿](/zh-CN/docs/Learn_web_development/Core/Accessibility/Multimedia#音频脚本)和[字幕](/zh-CN/docs/Learn_web_development/Core/Accessibility/Multimedia#视频文本轨道)。
- 避免后期出现代价高昂的错误。项目临近尾声时发现的问题，其修复所需的时间和成本往往远高于早期发现的问题。

## 用户测试

仅靠自动化工具无法确定网站上的无障碍问题。每个网站项目都需要制定一份[用户测试策略](/zh-CN/docs/Learn_web_development/Extensions/Testing/Testing_strategies#用户测试)，强烈建议你将一些无障碍用户群体纳入其中：

- 尽量邀请屏幕阅读器用户、仅使用键盘的用户、听力障碍用户、行动不便的用户等参与测试。
- 让每个群体先对网站进行整体体验，从浏览首页和其他主要页面开始，并尝试一些核心功能。典型示例包括购买产品或进行预订。询问他们对网站的印象以及遇到的具体问题。
- 接下来，请他们重点关注包含特定无障碍顾虑的功能或工作流程，例如复杂的表单控件或视频播放器。询问他们在用户体验方面觉得有哪些不足，以及希望看到哪些改进。

有些项目会有预算支付测试小组的费用，而有些项目则依赖无偿志愿者，甚至同事和朋友。

## 无障碍测试清单

以下列表提供了一个供你参考的无障碍测试清单，以确保你的项目已经执行了推荐的无障碍测试：

1. 确保你的 HTML 尽可能语义化正确。[验证它](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_验证)是一个不错的开始，使用[审计工具](#审计工具)也是如此。
2. 检查在 CSS 关闭的情况下，你的内容是否仍然有意义。
3. 确保你的功能可通过键盘访问（参见[尽可能使用语义化 UI 控件](/zh-CN/docs/Learn_web_development/Core/Accessibility/HTML#尽可能使用语义化_ui_控件)），使用 Tab、Return/Enter 等键进行测试。
4. 确保你的非文本内容都有[替代文本](/zh-CN/docs/Learn_web_development/Core/Accessibility/HTML#替代文本)。[审计工具](#审计工具)可帮助你发现此类问题。
5. 确保网站的[颜色对比度](/zh-CN/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#颜色和颜色对比度)可接受，使用合适的检查工具。
6. 确保[隐藏内容](/zh-CN/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#隐藏的东西)可被屏幕阅读器识别。
7. 尽可能确保功能在不使用 JavaScript 的情况下也可用。
8. 适当使用 ARIA 来改善无障碍性。
9. 使用[审计工具](#审计工具)对你的网站进行测试。
10. 使用屏幕阅读器对其进行测试。
11. 在你网站的某个容易被找到的位置包含一份无障碍性政策/声明，说明你所做的工作。

## 总结

希望本文能让你对可用于解决无障碍问题的工具，以及残障人士为访问网络所使用的辅助技术有所了解。

在下一篇文章中，我们将探讨如何编写符合无障碍标准的 HTML。

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
