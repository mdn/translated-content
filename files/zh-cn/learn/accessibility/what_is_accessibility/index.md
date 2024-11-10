---
title: 什么是无障碍？
slug: Learn/Accessibility/What_is_accessibility
---

{{LearnSidebar}}{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

本文作为本模块的开篇阐述了究竟什么是“无障碍” — 主要包括哪些用户群体是我们所需要和为什么需要考虑的，不同用户使用哪些工具与网页交互，以及我们在网站开发流程中如何构建无障碍。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>基本的计算机知识，对 HTML 和 CSS 的基本理解。</td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>熟悉无障碍，包括它是什么，以及它对 web 开发人员的影响。</td>
    </tr>
  </tbody>
</table>

## 什么是无障碍？

无障碍是一种让尽可能多的用户可以使用你的网站的做法。传统上我们认为这只与残疾人士有关，但提升网站的无障碍也可以让其他用户群体受益。比如使用移动设备的人群，那些使用低速网络连接的人群。

你也可以把无障碍看成是同等地对待每一个人，给他们平等的机会，无论他们的能力或所处的环境如何。就像不能让坐轮椅的人可以进入大楼是错误的 (现代公共建筑通常有轮椅坡道或电梯)；不能让视觉有障碍的人士可以浏览我们的网站同样不正确。我们都是不同的，但我们都是人，因此享有同等的人权。

使网站具备无障碍才是正确的做法。它也是一些国家法律的一部分，它打开了一些重要的市场，否则那些市场的用户无法使用你的服务或者购买你的产品。

建立可访问的网站能让每个人都受益：

- 使用原语 HTML(译注：仅使用非样式标记而样式用 CSS 定义的 HTML 称为原语 HTML。那些描述内容呈现效果的标记如\<b>标记是样式标记，这些样式标记在 HTML5 中已经废弃），不仅提升了无障碍，也增强了搜索引擎优化，使你的网站更容易被找到。
- 关心无障碍表露出良好的道德品质，它提升了你的公众形象。
- 其他一些改善无障碍的做法也会让你的网站更容易被其他群体使用，比如手机用户，低速网络环境的用户等等。事实上，每个人都可以从这此改善中受益。
- 我们是否也曾提到过到这也是某些地方的法律规定？

## 我们应关注的残疾都有哪些种类？

残疾人士和正常人一样是多样化的，他们身患的残疾也多种多样。此处课题的关键是抛开思考你自己的电脑和你自己使用网页的方式，而是要开始了解别人如何使用网页——你不是你的用户。接下来会讲解需要考虑的主要残疾类型，以及他们访问网页内容时用到的一些特殊工具 (被称为辅助技术或 ATs)。

> [!NOTE]
> 世界卫生组织的“残疾和健康”状况说明书指出：“超过 10 亿人，约占世界总人口的 15%，患有某种形式的残疾”，而且“有 1.1 亿至 1.9 亿之间的成年人在身体功能上存在重大困难。”

### 有视觉障碍的人

有视觉障碍的人包括盲人、视力水平低下者、色盲。许多视觉障碍人士使用屏幕放大镜，要么是物理放大镜或是软件缩放功能。现今大多数浏览器和操作系统都具备缩放功能。某些用户使用屏幕阅读器，这是一种可以大声朗读数字文本的软件。一些屏幕阅读器的示例如下：

- 有些是付费产品，比如 [JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS) (Windows) 和 [Window Eyes](http://www.gwmicro.com/window-eyes/) (Windows).
- 有些是免费产品，比如 [NVDA](http://www.nvaccess.org/) (Windows)， [ChromeVox](http://www.chromevox.com/) (Chrome, Windows 和 Mac OS X)，和 [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- 有些内置在操作系统中，比如 [VoiceOver](http://www.apple.com/accessibility/osx/voiceover/) (Mac OS X and iOS)， [Narrator](https://support.microsoft.com/en-us/help/22798/windows-10-narrator-get-started) (Microsoft Windows)， [ChromeVox](http://www.chromevox.com/) (on ChromeOS)，和 [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

让自己熟悉屏幕阅读器是个好主意；你还应该设置一个屏幕阅读器并充分的使用它（盘它），以了解它是如何工作的。请参阅我们的[跨浏览器屏幕阅读器测试向导](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7#%E5%B1%8F%E5%B9%95%E9%98%85%E8%AF%BB%E5%99%A8)，以了解更多使用它们的细节。下面的视频还提供了一个简单的例子说明了体验是怎样的。

{{EmbedYouTube("IK97XMibEws")}}

据统计，世界卫生组织估计“全球有 2.85 亿人视力受损：3900 万人失明，2.46 亿人视力低下。”(参见[视力障碍和失明](http://www.who.int/mediacentre/factsheets/fs282/en/))。这是一个庞大而重要的用户群却仅因为你的网站没有合理的设计代码而流失——几乎相当于美国的人口总数。

### 有听觉障碍的人

也被称为有听力障碍的人或聋子，这群人要么听力水平较低要么或者完全听不到。这些人使用辅助技术（请参考 [听力、语音、说话或语言障碍患者的辅助设备](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)），但是并没有专用于计算机/网页的辅助技术。

但是，现在有专门的技术用于将文本转换成音频内容，范围从转换简单的文本文字到转换与视频一起显示的字幕。稍后，有文章将讨论这些技术。

听力受损的人也代表着一个重要的用户群体——“全世界有 4.66 亿人患有听力障碍”，世界卫生组织的耳聋和听力受损状况报告如此宣称。

### 行动障碍的人

这些人在行动方面存在着残疾，可能是因为纯粹的身体问题（例如肢体丧失或瘫痪），或导致肢体无力或失去控制的神经系统/遗传疾病。有些人可能难以做出使用鼠标所需的精准手部动作，而另一些人则可能受到的影响更为严重，可能会严重瘫痪到需要使用[头部指针](https://www.performancehealth.com/baseball-cap-head-pointer)与计算机进行交互的地步。

这种残疾也可能是由于年老体衰导致，而不是任何特定的创伤或状况造成，也可能是由于硬件限制所致——有些用户可能没有鼠标。

这些残疾通常影响 Web 开发工作的方式是要求通过键盘就可以访问控件——我们将在本模块的后续文章中讨论键盘无障碍，但最好是仅通过使用键盘来尝试访问一些网站，看看你能够做些什么。例如，你可以使用 Tab 键在 Web 表单的不同控件之间移动吗？你可以在我们的“[跨浏览器测试使用本机键盘的无障碍](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Using_native_keyboard_accessibility)”章节中找到有关键盘控制的更多详细信息。

据统计，有相当多的人患有行动障碍症。美国疾病控制与防御中心的“[残疾与机能（18 岁及以上的非住院成年人）](https://www.cdc.gov/nchs/fastats/disability.htm)”报道称美国有 15.1% 的成年人都患有身体功能疾病。

### 有认知障碍的人

认知障碍涵盖了一类范围广泛的残疾，从能力最受限的智障人士到随着年龄增长而导致思考和记忆困难的所有人。该范围包括了患有精神疾病的人，例如抑郁症和精神分裂症患者。还包括有学习障碍的人，例如阅读障碍患者和有注意力缺陷的多动症患者。重要的是，尽管认知障碍的临床定义存在很多差异，但与之相关的人们会遇到同一类功能问题。这类问题包括很难理解页面内容，难以记住如何完成任务，以及因不一致的网页布局而产生困惑。

对认识障碍人士来说一个好的无障碍机制包括：

- 使用多种方式传达内容，比如从文本到语音或是视频；
- 更易理解的内容，例如使用更通俗的语言书写的文本；
- 将注意力集中在重要内容上；
- 尽量减少干扰，例如不必要的内容或广告；
- 一致的网页布局和导航；
- 相似的元素，比如未访问的下划线链接使用蓝色而访问过的使用紫色；
- 将过程划分为更有逻辑的，必要的步骤并附上进度指示器；
- 在不影响安全性的情况下尽可能让网站认证更简单；并且
- 使表单容易完成，例如带有清晰的错误消息和简单的错误恢复。

### 注意

- 具有[认知无障碍](/zh-CN/docs/Web/Accessibility/Cognitive_accessibility)的设计将导致良好的设计实践。他们将使所有人受益。
- 许多有认知障碍的人也可能患有身体残疾。网站必须遵循 W3C 的“[网页内容无障碍指南](https://www.w3.org/WAI/standards-guidelines/wcag/)”包括[认知无障碍指南](/zh-CN/docs/Web/Accessibility/Cognitive_accessibility#Guidelines)。
- W3C 的“[认知和学习残疾无障碍专案组](https://www.w3.org/WAI/GL/task-forces/coga/)”为认知障碍人士制作了 web 无障碍指南。
- WebAIM 有一个[认知网页](https://webaim.org/articles/cognitive/)提供了相关的信息和资源。
- 美国疾病控制中心估计，截至 2018 年，美国四分之一的公民有残疾，[其中认知障碍是年轻人最常见的疾病](https://www.cdc.gov/media/releases/2018/p0816-disability.html)。
- 在美国，“智力障碍”是“智力低下”的新术语。在英国，“智力障碍”通常是指“学习障碍”或“学习困难”。

## 在你的项目中实现无障碍

一个流行的关于无障碍的传言认为：无障碍是实施在项目上的昂贵“附加功能”。这个传言确实可能成立，只要遇到以下任一情况：

- 你正在试图为一个现有存在重大无障碍问题的网站“改造”无障碍。
- 你只是在项目后期才开始考虑无障碍和此时才暴露的相关问题。

然而如果你能在项目的开始阶段就考虑到无障碍的话，使大多数内容无障碍化的代价就会相当微小。

在规划项目时，将无障碍测试纳入测试体系，就像对其他任何重要目标受众群体（例如台式机或移动浏览器的目标用户）进行测试一样。尽早和经常进行测试，理想情况下运行自动化测试找出程序化方式可检测到的缺失功能（例如，缺少图像[替代文本](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Text_alternatives)或不良链接文字——请参阅[元素关系与上下文](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Element_relationships_and_context)），并对残疾人士的用户群进行一些测试，以查看更复杂的网站功能是否对他们可用。例如：

- 我的日期选择器小部件是否可供使用屏幕阅读器的人使用？
- 如果内容动态更新，视力受损的人知道吗？
- 我的 UI 按钮是否可以使用键盘和触碰界面进行访问？

你可以并且应该在内容中记下潜在的问题区域，这些地方需要进行一些工作才能使其变得可访问，确保对其进行了彻底的测试并考虑解决方案/替代方法。文本内容（如你将在下一篇文章中看到的）相对容易，但是多媒体内容和时髦的 3D 图形又如何呢？你应该查看项目预算，并考虑可以使用哪些解决方案来实现这类内容的无障碍。转录所有多媒体内容是一种选择，当然成本可能很高。

还有，现实一点。“100% 的无障碍”是一个无法实现的理想——你总是会遇到某种边缘情况，导致某个用户发现某些内容难以使用——但你应该尽你所能去做。如果你计划包含一个使用 WebGL 呈现的时髦三维饼图，你可能希望也包含一个数据表，作为数据的可访问的替代表示。或者，你可能只需要包含表而去除 3D 饼图——这样每个人都可以访问该表，编写起来也更快，还能减少运行时的 CPU 耗费，维护也更容易。

另一方面，如果你正在一个画廊网站上展示有趣的 3D 艺术，期望每件艺术品都能被视觉障碍人士完美的访问是不合理的，毕竟它是一种完全的视觉媒体。

为了表明你关心并考虑了无障碍，请在你的网站上发布无障碍声明，其中详细说明你对无障碍的政策以及为使该站点可访问而采取的步骤。如果有人确实反映你的网站存在无障碍问题，请与他们展开对话，保持同情心，并采取合理的步骤尝试解决问题。

> [!NOTE]
> 我们的“[处理常见的无障碍问题](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)”一文涵盖了应更详细地测试的无障碍细节。

总结：

- 从项目一开始就考虑无障碍，并尽早进行测试。就像任何其他 bug 一样，越晚发现无障碍问题，修复它的代价会更高。
- 请记住，许多无障碍的最佳实践对每个人都有好处，而不仅仅局限于残疾人士。例如，原语标记不仅对屏幕阅读器有好处，而且使加载速度和性能也更快，因此对每个人来说都更有益，尤其是那些使用移动设备和/或慢速网络连接环境的人。
- 在你的站点上发布无障碍声明，并与遇到问题的人接触。

## 无障碍指南和法律

有许多可用于基于无障碍测试的检查列表和指南集，乍一看，这些准则可能会让人望而却步。我们的建议是让自己熟悉你需要注意的基本领域，以及理解与你最相关的指导方针的高层结构。

- 首先，W3C 发布了一个庞大而详细的文档，其中包含了非常精确的、与技术无关的无障碍一致性标准。这些被称为 Web 内容无障碍指南 (WCAG)，它们绝不是短读的。这些标准分为四大类，它们指定如何使实现具有可感知性、可操作性、可理解性和鲁棒性。最好的地方得到一个简单的介绍和开始学习是一目了然。没有必要用心学习 WCAG——注意主要关注的领域，并使用各种技术和工具来突出任何不符合 WCAG 标准的区域 (更多信息见下文)。
- 贵国还可能有具体立法，规定为其人口提供服务的网站必须能够访问 - 例如，美国“康复法”第 508 条、德国关于无障碍信息技术的联邦法令、联合王国的“平等法”、意大利的“无障碍法”、澳大利亚的“残疾歧视法”等。

因此，虽然 WCAG 是一套指导方针，但你的国家可能会有关于网络无障碍的法律，或者至少是对公众提供的服务的无障碍 (包括网站、电视、物理空间等)。找出你的法律是个好主意。如果你不努力检查你的内容是否可访问，你可能会陷入法律的麻烦，如果有二重性的人抱怨它。

这听起来很严肃，但正如上文所述，你只需要将无障碍视为 Web 开发实践的主要优先事项。如果有疑问，请咨询合格的律师。我们不会提供比这更多的建议，因为我们不是律师。

## 无障碍 API

Web 浏览器使用特殊的无障碍 API(由底层操作系统提供)，这些 API 公开对辅助技术 (ATS) 有用的信息-ATS 大多倾向于使用原语信息，因此这些信息不包括样式信息或 javascript 之类的内容。此信息是在一个称为无障碍树的信息树中构造的。

不同的操作系统有不同的无障碍 API：

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- Mac OS X: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

如果 Web 应用中的 HTML 元素提供的本机语义信息失效，则可以使用 [WAI-ARIA specification](https://www.w3.org/TR/wai-aria/) 的功能来补充该信息，这些功能向辅助功能树添加语义信息以提高无障碍。在 [WAI-ARIA basics](/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics) 文章中了解有关 WAI-ARIA 的更多详细信息。

## 摘要

本文应该给你提供一个有用的无障碍的高级概述，向你展示为什么它是重要的，并研究如何将它融入你的工作流程。现在，你还应该渴望了解可以使站点可访问的实现细节，我们将在下一节中开始，了解为什么 HTML 是无障碍的良好基础。

{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

## 本章目录

- [什么是无障碍？](/zh-CN/docs/Learn/Accessibility/What_is_accessibility)
- [HTML：无障碍的良好基础](/zh-CN/docs/Learn/Accessibility/HTML)
- [CSS 和 JavaScript 无障碍最佳实践](/zh-CN/docs/Learn/Accessibility/CSS_and_JavaScript)
- [WAI-ARIA 基础](/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics)
- [多媒体无障碍](/zh-CN/docs/Learn/Accessibility/Multimedia)
- [移动端无障碍](/zh-CN/docs/Learn/Accessibility/Mobile)
- [无障碍疑难解答](/zh-CN/docs/Learn/Accessibility/Accessibility_troubleshooting)

## 参见

- [WCAG](/zh-CN/docs/Web/Accessibility/Understanding_WCAG)

  - [Perceivable](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  - [Operable](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Operable)
  - [Understandable](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  - [Robust](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Robust)
