---
title: 测试的策略
slug: Learn_web_development/Extensions/Testing/Testing_strategies
l10n:
  sourceCommit: 54c4741354cf49b4dd62e1bb3d8ab13181b210f0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}

本文解释如何进行跨浏览器测试：如何选择要测试的浏览器和设备、如何实际测试这些浏览器和设备，以及如何借助用户群体进行测试。

<table>
  <tbody>
    <tr>
      <th scope="row">准备：</th>
      <td>
        熟练掌握 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a
        href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a> 和
        <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a> 语言; 了解<a
          href="/zh-CN/docs/Learn_web_development/Extensions/Testing/Introduction"
          >跨浏览器测试的核心概念</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解跨浏览器测试所涉及的高级概念。</td>
    </tr>
  </tbody>
</table>

## 选择要测试的浏览器和设备

由于不可能测试每一种浏览器与设备的组合，只需确保你的网站能在最关键的浏览器和设备上正常运行。在实际操作中，“关键”通常指的是“目标用户群经常使用的”。

你可以根据计划提供的支持级别对浏览器和设备进行分类。例如：

1. A 级：常用/现代浏览器——已确认支持所有功能。进行全面测试并提供完整支持。
2. B 级：较旧版本/功能有限的浏览器——已知存在功能缺失。进行测试，并提供基础体验，确保能够访问所有核心内容和服务。
3. C 级：不常见/未知浏览器——不进行测试，但假定它们是功能齐全的。网站应提供完整内容，至少通过我们的防御性编码能够使用备选方案。

在后续章节中，我们将依照此格式逐步构建支持图表。

> [!NOTE]
> 雅虎通过他们的[分级浏览器支持](https://github.com/yui/yui3/wiki/Graded-Browser-Support)方法，最先使这一方法流行起来。

### 预测你的目标受众最常使用的浏览器

通常，这需要基于用户统计数据进行合理猜测。例如，假设你的用户位于北美和西欧：

在线搜索结果显示，北美和西欧大多数人使用 Windows 或 Mac 桌面/笔记本电脑，主要浏览器是 Chrome、Firefox、Safari 和 Edge。你可能只需要测试这些浏览器的最新版本，因为这些浏览器会定期更新。这些浏览器都应该放在 A 级别的分类中。

在这个统计数据中，大多数人也使用 iOS 或 Android 手机，所以你可能需要测试最新版本的 iOS Safari、旧版 Android 原生浏览器的最后几个版本，以及 iOS 和 Android 上的 Chrome 和 Firefox。最好在手机和平板电脑上都进行测试，以确保响应式设计正常工作。

Opera Mini [在运行复杂 JavaScript 方面性能不太好](https://dev.opera.com/articles/opera-mini-and-javascript/)，因此我们也应将其放入 B 级别。

因此，我们基于预计用户会使用的浏览器来确定选择测试哪些浏览器。通过这种方法，我们得到了以下支持图表：

1. A 级：Windows/Mac 上的 Chrome 和 Firefox、Mac 上的 Safari、Windows 上的 Edge、iPhone/iPad 上的 iOS Safari、手机/平板上的 Android 原生浏览器（最新两个版本）、手机/平板上的 Android 版 Chrome 和 Firefox（最新两个版本）
2. B 级：Opera Mini
3. C 级：无

如果你的目标受众主要位于其他地方，那么常用的浏览器和操作系统可能与上述不同。

> [!NOTE]
> “公司 CEO 使用的是黑莓手机，所以我们最好确保网站在该手机上显示良好”也是需要考虑的因素。

### 浏览器份额统计

有些网站会显示特定地区中流行的浏览器。例如，[Statcounter](https://gs.statcounter.com/) 可以提供北美地区的趋势概览。

### 使用分析工具

使用像 [Google Analytics](https://www.google.com/analytics/) 这样的分析网站来获取更准确的数据。它能够为你提供诸如人们在用什么浏览器来浏览你的网站这样的精准的统计数据。当然，这需要你已经有一个网站在使用它，所以它不太适合新上线的网站。

你还可以考虑使用开源且注重隐私的分析平台，如 [Open Web Analytics](https://www.openwebanalytics.com/) 和 [Matomo](https://matomo.org)。它们要求你自行托管分析平台。

#### 配置 Google Analytics

1. 首先，你需要一个谷歌帐户。使用此帐户登录 [Google Analytics](https://marketingplatform.google.com/about/analytics/)。
2. 选择 [Google Analytics](https://analytics.google.com/analytics/web/)（web）选项，然后点击*注册*按钮。
3. 在注册页面中输入你的网站/应用详细信息。配置过程相当直观；最重要的字段是网站 URL，你需要确保它填写正确。这应当是你的网站/应用的根 URL。
4. 填写完所有内容后，按*获取跟踪 ID*按钮，然后接受显示的服务条款。
5. 下一页会为你提供一些代码段和其他说明。对于基本网站，你需要做的是复制*网站跟踪*代码块，并将其粘贴到你要在网站上使用 Google Analytics 跟踪的所有页面。你可以将跟踪代码放在关闭标记 `</body>` 的下方，也可以放在其他适当位置，以防止其与应用程序代码混淆。
6. 将更改上传到开发服务器，或其他任何用到你的代码的位置。

就是这样！现在，你的网站应该可以开始报告分析数据了。

#### 学习分析数据

现在你可以回到 [Analytics Web](https://analytics.google.com/analytics/web) 首页，并开始查看你收集到的关于网站的数据（当然，你需要留出一些时间来收集一些实际的数据）。

默认情况下，你应该看到类似下面这样的报告标签页：

![Google Analytics 在其主报告仪表板中如何收集数据](analytics-reporting.png)

借助 Google Analytics，你可以查看大量的数据（不同类别的自定义报告等等），我们暂时不讨论这些。[开始使用 Analytics](https://support.google.com/analytics/answer/9306384?visit_id=637855964517698041-2103767437&rd=1) 为初学者提供了一些关于报告的指导，这些指导很有用。

你可以通过从左侧菜单选择*用户 > 技术 > 浏览器和操作系统*来查看用户使用的浏览器和操作系统。

> [!NOTE]
> 在使用 Google Analytics 时，你需要注意可能存在的误导性偏见，例如，“我们没有 Firefox 移动版用户”可能导致你不再支持 Firefox 移动版。但是，你之所以没有任何 Firefox 移动版用户，可能恰恰就是因为你的网站在 Firefox 移动版上受支持不佳。

### 其他注意事项

你应该将无障碍性作为 A 级测试要求（我们将在我们的[处理常见无障碍性问题](/zh-CN/docs/Learn_web_development/Core/Accessibility/Tooling)文章中详细介绍你应该测试的内容）。

此外，你还应注意特定情况下的需求。例如，如果你的产品面向的市场以手机为主要上网手段，那么你可能需要优先支持移动浏览器。

### 最终的支持图表

因此，我们的最终版支持图表如下所示：

1. A 级：Windows/Mac 的 Chrome 和 Firefox、Mac 的 Safari、Edge（最新两个版本）、iPhone/iPad 的 iOS Safari、手机/平板的 Android 原生浏览器（最新两个版本）、手机/平板的 Android 版 Chrome 和 Firefox（最新两个版本）。通过常见的无障碍测试。
2. B 级：Opera Mini。
3. C 级：Opera 以及其他小众的现代浏览器。

## 你将要测试什么？

当你向代码库中添加新代码并需要进行测试时，在开始测试之前，你应该列出一份测试需求清单。这样做是为了确保只有满足这些需求后，才能接受新添加的代码。这些需求可能是视觉上的，也可能是功能上的——它们共同构成了网站功能的可用性。

考虑以下示例（参见[源代码](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)，以及[在线运行的示例](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)）：

![如何准备一个测试场景，使其涵盖设计和用户需求](sliding-box-demo.png)

该特性的测试标准可以写成如下所示：

A 级和 B 级：

- 按钮应该能够由用户通过主要控制机制激活，无论是鼠标、键盘还是触摸。
- 切换按钮应该使信息框出现/消失。
- 文本应该可读。
- 使用屏幕阅读器的视力受损用户应该能够访问文本。

A 级：

- 信息框在出现/消失时应该具有平滑的动画效果。
- 应该有渐变和文字阴影，以增强信息框的外观。

你可能会注意到，根据示例中的文本，它在 IE8 中无法工作——根据我们的支持图表，这是一个问题，如果浏览器不支持 CSS 过渡效果（请参见课程后面的“实施特性检测”部分），你可能需要通过使用特性检测库以不同的方式实现功能。

你可能还会注意到，只使用键盘无法使用该按钮——这也需要解决。也许我们可以使用一些 JavaScript 来实现键盘控制切换，或者完全使用其他方法？

这些测试标准很有用，因为：

- 它们在执行测试时为你提供了一组步骤。
- 它们可以很容易地转化为用户组在进行测试时需要遵循的指示（例如，“尝试使用鼠标和键盘激活按钮…”）——请参见下面的[用户测试](#用户测试)部分。
- 它们还可以为编写自动化测试提供基础。如果你知道要测试什么以及成功条件是什么，编写此类测试就会更容易（请参见本系列中的 [Selenium](/zh-CN/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#selenium) 部分）。

## 建立测试实验环境

执行浏览器测试的一个选项是自己进行测试。为此，你可能需要使用物理设备和模拟环境的组合（使用模拟器或虚拟机）。

### 物理设备

通常情况下，最好使用真实设备来运行你想要测试的浏览器，这样可以获取最准确的行为和整体用户体验。要想搭建一个合理的低级别设备实验环境，你可能需要以下设备：

- 安装了你需要测试的浏览器的 Mac 设备，浏览器包括 Firefox、Chrome、Opera 和 Safari。
- 安装了你需要测试的浏览器的 Windows PC，浏览器包括 Edge（或 IE）、Chrome、Firefox 和 Opera。
- 配置较高的 Android 手机和平板，安装了你需要测试的浏览器，包括 Chrome、Firefox 和 Opera Mini Android 版，以及原始的 Android 原生浏览器。
- 配置较高的 iOS 手机和平板，安装了你需要测试的浏览器，包括 iOS Safari 和 Chrome、Firefox、Opera Mini iOS 版。

如果可能的话，以下也是不错的选择：

- 可用的 Linux PC，以便测试特定于 Linux 版本的浏览器的 bug。Linux 用户通常使用 Firefox、Opera 和 Chrome。如果只有一台机器可用，你可以考虑创建分别在不同分区上运行 Linux 和 Windows 的双启动机器。Ubuntu 的安装程序可以很容易地设置这个；参考 [Windows 双启动](https://help.ubuntu.com/community/WindowsDualBoot)获取帮助。
- 一些低配置的移动设备，这样你就可以测试在性能较弱的处理器上一些特性（比如动画效果）的表现。

你的主要工作机也可以安装其他工具，用于特定目的，比如无障碍审计工具、屏幕阅读器和模拟器/虚拟机。

一些大公司拥有设备实验环境，储备了各种不同的设备，使开发人员能够在特定的浏览器/设备组合中查找错误。较小的公司和个人通常无法承担如此复杂的实验环境成本，因此他们通常通过较小的实验环境、模拟器、虚拟机和商业测试应用来解决问题。

下面我们将介绍其他选项。

> [!NOTE]
> 已经有一些人在努力创建公共可使用的设备实验环境——参见 [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/)。

> [!NOTE]
> 我们还需要考虑无障碍性——你可以在计算机上安装一些有用的工具来进行无障碍性测试，但我们将在本课程后面的“处理常见无障碍性问题”文章中进行介绍。

### 模拟器

模拟器基本上是在计算机内部运行的程序，用于模拟某种设备或特定的设备环境，使你能够更方便地进行一些测试，而无需寻找特定的硬件/软件组合进行测试。

模拟器可以简单地用于测试设备条件。例如，如果你想快速测试响应式设计中的宽度/高度媒体查询，可以使用 Firefox 的[响应式设计模式](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)。Safari 也有类似的模式，可以通过转到“Safari > 首选项”并勾选“显示开发菜单”，然后选择“开发 > 进入响应式设计模式”来启用。Chrome 也有类似的功能：设备模式（参见[使用设备模式模拟移动设备](https://developer.chrome.google.cn/docs/devtools/device-mode)）。

然而，通常情况下，你需要安装某种模拟器。你可能需要测试的常见设备/浏览器如下：

- 用于开发 Android 应用程序的官方 [Android Studio IDE](https://developer.android.com/studio/) 对于只需要在 Google Chrome 或旧版 Android 浏览器上测试网站的人来说有点过于笨重，但它带有一个强大的[模拟器](https://developer.android.com/studio/run/emulator.html)。如果你想要更轻量级的选项，可以考虑在 Windows 和 Mac 上运行的 [Andy](https://www.andyroid.net/)。
- Apple 提供了一个名为 [Simulator](https://help.apple.com/simulator/mac/current/) 的应用程序，它在 [XCode](https://developer.apple.com/xcode/) 开发环境之上运行，并模拟 iPad/iPhone/Apple Watch/Apple TV。原生的 iOS Safari 浏览器包括在内。不幸的是，它只能在 Mac 上运行。

你还可以找到其他移动设备环境的模拟器，例如：

- 如果你想要测试 Opera Mini，可以单独模拟 [Opera Mini](https://dev.opera.com/articles/installing-opera-mini-on-your-computer/)。

> [!NOTE]
> 许多模拟器实际上需要使用虚拟机（参见下文）；当出现这种情况时，通常会提供说明，并且/或者虚拟机的使用已纳入模拟器的安装程序中。

### 虚拟机

虚拟机是一种在台式计算机上运行的软件应用，它允许用户模拟整个操作系统。每个操作系统都在其自己的虚拟硬盘上运行（这通常由主机机器硬盘上的一个大型文件来表示），实现了隔离。市面上有多种流行的虚拟机应用程序，包括 [Parallels](https://www.parallels.com/)、[VMWare](https://www.vmware.com/) 和 [Virtual Box](https://www.virtualbox.org/wiki/Downloads)。我们更倾向于推荐后者，因为它是免费的。

> [!NOTE]
> 运行虚拟机仿真需要大量的硬盘空间；每个模拟的操作系统可能会占用大量内存。你可以选择每次安装所需的硬盘空间；大约 10GB 的空间应该足够了，但有一些建议是使用多达 50GB 或更多的空间，以确保操作系统的可靠运行。大多数虚拟机应用程序都提供了创建**动态分配**的硬盘的功能，它会根据需要自动增长和收缩，这是一个很好的选择。

要使用 Virtual Box，你需要：

1. 获取要模拟的操作系统的安装程序光盘或映像（例如 ISO 文件）。Virtual Box 无法提供这些；因为大多数操作系统（如 Windows 操作系统）都是商业产品，不能自由分发。
2. [下载适合你操作系统的安装程序](https://www.virtualbox.org/wiki/Downloads)并进行安装。
3. 打开应用程序；你将看到以下界面：![应用程序窗口的左侧面板列出了 Windows 操作系统和 Opera TV 模拟器。右侧面板包括几个子面板，包括常规信息、系统、显示、设置、音频、网络和预览](virtualbox.png)
4. 要创建新的虚拟机，请点击左上角的“新建”按钮。
5. 按照说明填写适当的对话框。你需要：
   1. 为新虚拟机提供名称
   2. 选择要安装在虚拟机里面的操作系统和版本
   3. 设置要分配的内存大小（我们建议设置为 2048MB 或 2GB）
   4. 创建一个虚拟硬盘（在包含“立即创建虚拟硬盘”、“VDI（虚拟磁盘映像）”和“动态分配”选项的对话框中选择默认选项）。
   5. 选择虚拟硬盘的文件位置和大小（选择一个合理的名称和位置，并指定大约 50GB 的大小，或者根据你的需求选择大小）。

现在，新的虚拟机应该会出现在 Virtual Box 主用户界面窗口的左侧菜单中。此时，你可以双击打开它，它将开始启动虚拟机，但操作系统尚未安装。此时，你需要在对话框内指向安装程序镜像/光盘，然后它将按照步骤运行安装操作系统的过程，就像在物理机器上一样。

![如何为特定操作系统安装 Virtual Box](virtualbox-installer.png)

> [!WARNING]
> 请确保此时你有要安装在虚拟机上的操作系统映像，并立即进行安装。如果你在此时取消该过程，可能会导致虚拟机无法使用，并需要删除并重新创建它。这并不会导致严重问题，但会很麻烦。

完成该过程后，你将在主机计算机上的窗口中运行一个带有操作系统的虚拟机。

![在 macOS 上的 Virtual Box 中托管并运行的 Windows XP 截图](virtualbox-running.png)

你需要像对待实际安装的操作系统一样对待这个虚拟操作系统安装——例如，除了安装你想要测试的浏览器之外，还要安装一个防病毒程序来保护它免受病毒的侵害。

拥有多个虚拟机非常有用，特别是用于 Windows IE/Edge 测试——在 Windows 上，无法同时安装多个版本的默认浏览器，因此你可能需要建立一个虚拟机库，以根据需要处理不同的测试，例如：

- Windows 10 + Edge 14
- Windows 10 + Edge 13

> [!NOTE]
> 虚拟机的另一个优势在于虚拟磁盘映像的相对独立性。如果你在团队中工作，你可以创建一个虚拟磁盘映像，复制并将其分发给团队其他成员。只需确保你拥有合法许可，以运行所有这些包含版权的 Windows 或其他产品的副本。

### 自动化和商业应用

正如上一章所述，通过使用某种自动化系统，在浏览器测试的过程中你可以减少很多痛苦。你可以配置自己的测试自动化系统（[Selenium](http://www.seleniumhq.org/) 是首选的流行应用程序），它确实需要一些设置，但是当它开始起作用时你会受益匪浅。

如果你愿意在测试中投入一些资金，也可以使用一些商业工具，如 [Sauce Labs](https://saucelabs.com/)、[Browser Stack](https://www.browserstack.com/) 和 [LambdaTest](https://www.lambdatest.com/)，它们可以为你完成此类工作，而无需担心配置问题。

另一种选择是使用无代码测试自动化工具，如 [Endtest](https://endtest.io)。

我们将在后续文章中了解如何使用此类工具。

## 用户测试

我们在本文末尾谈论一下用户测试——如果你有一个有意愿的用户组测试你的新功能，这可能是一个很好的选择。请记住，这可以像你希望的那样廉价又有效——用户组可以是一群朋友、一群同事，也可以是一群无报酬或有报酬的志愿者，这取决于你是否有资金用于测试。

通常，你可以让用户在某种开发服务器上查看包含新功能的页面或视图，这样你就不用在完成之前放置最终站点或更改。你应该让他们遵守一些步骤并报告他们得到的结果。提供一组步骤（有时称为脚本）会非常有用，这样你就可以获得与你尝试测试的内容相关的更可靠的结果。我们在上面的[你将要测试什么](#你将要测试什么？)部分中提到了这一点——很容易将其中详述的测试标准转换为要遵循的步骤。例如，以下内容适用于有视力的用户：

- 在台式计算机上使用鼠标单击几次问号按钮。刷新浏览器窗口。
- 使用台式计算机上的键盘选择并激活几次问号按钮。
- 在触摸屏设备上点击几次问号按钮。
- 切换按钮应使信息框显示/消失。在上述三种情况中，是否都这样？
- 文字可读吗？
- 信息框在出现/消失时是否能够流畅地生成动画？

运行测试时，最好还是：

- 尽可能设置单独的浏览器配置文件，禁用浏览器扩展和其他类似功能，并在该配置文件中运行测试（例如，请参阅[使用配置文件管理器创建和删除 Firefox 配置文件](https://support.mozilla.org/zh-CN/kb/profile-manager-create-remove-switch-firefox-profiles) 和[与他人共享 Chrome 浏览器或添加角色](https://support.google.com/chrome/answer/2364824)）。
- 如果可以，运行测试时使用浏览器的隐私（private）模式（例如，Firefox 中的[隐私浏览](https://support.mozilla.org/zh-CN/kb/private-browsing-use-firefox-without-history)，Chrome 中的[隐私模式](https://support.google.com/chrome/answer/95464)），进而不会保存 cookie 和临时文件等内容。

这些步骤旨在确保你正在测试的浏览器尽可能“干净”，即没有安装任何可能影响测试结果的内容。

> [!NOTE]
> 如果你有可用的硬件，另一个有用的低功耗选项是在低端手机/其他设备上测试你的网站——随着网站变得更大并且具有更多特性，网站放慢速度的可能性更高，因此你需要开始更多考虑性能。尝试在低端设备上运行你的功能，也会使更高端设备上网站的体验更好。

> [!NOTE]
> 某些服务器端开发环境提供了一些有用的机制，可仅向部分用户推出网站变更，从而提供了一种有用的机制，可以在不需要单独的开发服务器的情况下让一部分用户测试特性。示例：[Django Waffle Flags](https://github.com/jsocol/django-waffle)。

## 总结

阅读本文后，你现在应该了解如何识别目标受众/目标浏览器列表，然后基于该列表有效地执行跨浏览器测试。

接下来，我们将把注意力转向测试可能发现的实际代码问题，从 HTML 和 CSS 开始。

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}
