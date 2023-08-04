---
title: 进行测试的策略
slug: Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Introduction","Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS", "Learn/Tools_and_testing/Cross_browser_testing")}}

这篇文章主要是讨论如何进行跨浏览器测试，回答一些比较常见的疑惑，譬如：“什么是跨浏览器测试？”，“会遇到哪些常见的问题？”以及“如何测试、区分以及修复问题？”

<table>
  <tbody>
    <tr>
      <th scope="row">准备：</th>
      <td>
        熟练掌握 <a href="/zh-CN/docs/Learn/HTML">HTML</a>,
        <a href="/zh-CN/docs/Learn/CSS">CSS</a>, 和
        <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言; 了解<a
          href="/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
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

## 是否需要测试？

开始跨浏览器测试（cross browser testing）之前您需要确定哪些浏览器将进入被测试名单。测试所有用户可能使用的浏览器或移动设备是不可能的——数量太大，而且浏览器和设备总在不断更新。

可行的替代方案是，尝试确保您的网站适用于最常见的浏览器和设备，然后进行防御性编码，以便为您的网站提供最广泛的支持范围。

防御性编码的实质是一种智能回退措施：如果某个功能或样式在浏览器中不起作用，该网站能够将其降级为不太令人兴奋的后备方案，但仍然能提供可接受的用户体验——主要目的是保证网站可以访问，即使它看起来逊色一点。

本章的目的是建立一个供您在测试时参考的浏览器/设备图表。您可以根据需要将其设置成简单或复杂版本——常见的方法是具有多个等级的支持，例如：

1. A 级别：常见/现代浏览器（仍在广泛使用）：需要彻底测试并提供全功能支持。
2. B 级别：较旧/功能少的浏览器（少数用户还在使用）：测试并提供更基础的体验，使得核心内容和服务能够完整访问。
3. C 级别：罕见/未知浏览器：不需要测试，假设网站内容可以显示。在我们的防御性编码起效的情况下，用户可以访问到网页的全部内容。

在以下各节中，我们将以此等级为参考构建支持图表。

> **备注：** 雅虎最先使这一方法流行起来，详情参见《浏览器分级支持系统》（[Graded browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support)**）。**

### 有根据地假设

您可以称之为“假设”或“直觉”。这不是一种准确、科学的方法，但作为具有网络行业经验的人，您应该要清晰地了解您所想测试的一些浏览器，这将形成一个良好的初级浏览器分级支持系统。

例如，如果您居住在西欧或北美，您会发现许多人使用 Windows 和 Mac 的台式机或笔记本电脑，常用浏览器是 Chrome，Firefox，Safari，IE 和 Edge。您可以测试前三个浏览器的最新版本，因为它们会定期更新。对于 Edge 和 IE，您应当测试它们近期的几个版本。以上这些浏览器都属于 A 级别。

> **备注：** 您一次只能在计算机上安装一个版本的 IE 或 Edge，因此您可能必须使用虚拟机或其他方法来执行所需的测试。稍后请参阅[虚拟机](#虚拟机)部分。

很多人使用 iOS 和 Android，因此您可能还想测试最新版本的 iOS Safari，最近几个版本的 Android stock 浏览器，以及适用于 iOS 和 Android 的 Chrome 和 Firefox。理想情况下，您应该在手机和平 板电脑上测试它们，以确保响应式设计正常运行。

您也许知道很多人仍然在使用 IE 9，它版本老旧而且功能较少，所以我们把它列为 B 级别。

到目前为止，我们整理了以下浏览器支持级别：

1. A 级别：Windows / Mac 的 Chrome 和 Firefox，Mac 的 Safari，Windows 的 Edge 和 IE（它们的最后两个版本），iPhone / iPad 的 iOS Safari，手机/平板电脑的 Android stock 浏览器（最后两个版本），手机和平板电脑上的 Chrome 和适 Android 的 Firefox（最后两个版本）。
2. B 级别：Windows 的 IE 9
3. C 级别：无

如果您居住在其他地方，或者正在开发其他地方（例如某些国家或地区）的网站，那您可能需要对不同的常用浏览器进行测试。

> **备注：** “我老板用 Blackberry，所以我们最好确保它看起来很好”也是一个很有说服力的理由。

### 浏览器份额统计

有一个很有用的方法来确定您要测试的浏览器的范围，那就是浏览器份额统计数据。有许多网站提供这些统计数据，例如：

- [Netmarketshare](https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0)
- [Statcounter](http://gs.statcounter.com/)

这些数据都偏向于北美，并不是特别准确，不过它们可以让您了解大致趋势。

例如，让我们转到 [Netmarketshare](https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0)。您可以看到 Opera 的使用人数很少但仍然有人使用，所以我们应该将其作为 C 级别添加到支持图表中。

IE8 被列为重要，但它较老且不再更新。Opera Mini 也很重要，但在运行复杂的 JavaScript 方面，它的能力并不强（有关详细信息，请参阅 [Opera Mini and JavaScrip](https://dev.opera.com/articles/opera-mini-and-javascript/)）。我们应该把它放到 B 级别。

### 使用分析工具

使用像 [Google Analytics](https://www.google.com/analytics/) 这样的分析网站来获取更准确的数据。它能够为您提供诸如人们在用什么浏览器来浏览您的网站这样的精准的统计数据。当然，这需要您已经有一个网站在使用它，所以它不太适合新上线的网站。

但是，析历史记录可用于查找支持统计信息以影响公司网站的新版本或要添加到现有站点的新功能。如果您有这些可用，它们比上述全球浏览器统计信息更准确。

#### 配置 Google 分析

1. 首先，您需要一个谷歌帐户。使用此帐户可登录[Google Analytics](https://www.google.com/analytics/)。
2. 选择 [Google Analytics](https://analytics.google.com/analytics/web/) (web)) 选项，然后单击"注册"按钮。
3. 在注册页面中输入您的网站/应用详细信息。这是相当直观的设置;获得正确的最重要的字段是网站 URL。这需要是您的网站/应用的根 URL。
4. 填写完所有内容后，按"获取跟踪 ID"按钮，然后接受显示的服务条款。
5. 下一页为您提供一些代码段和其他说明。对于基本网站，您需要做的是复制网站跟踪代码块，并将其粘贴到您要在网站上使用 Google Analytics 跟踪的所有不同页面。您可以在关闭`</body>`标记下方，也可以位于其他适当位置，以防止其与应用程序代码混淆。
6. 将更改上载到开发服务器，或将代码上载到其他任何位置。

就是这样！您的网站现在应该准备好开始报告分析数据。

#### 学习分析数据

现在，您应该能够返回 [Analytics Web](https://analytics.google.com/analytics/web)主页，并开始查看您收集的有关网站的数据 (当然，您需要留出一点时间才能真正收集一些数据)。

默认情况下，您应该看到报告选项卡，如下所示：

![](analytics-reporting.png)

有大量的数据，你可以看看使用谷歌分析––自定义报告在不同的类别，等等––我们没有时间讨论这一切。 [Getting started with Analytics](https://support.google.com/analytics/answer/1008015) 为初学者提供了一些有关报告 (以及更多) 的有用指导。

还应鼓励您查看左侧的不同选项，并查看您可以找到哪些类型的数据。例如，您可以通过从左侧菜单中选择" _Audience > Technology > Browser & OS_"来了解用户正在使用的浏览器和操作系统。

> **备注：** 使用 Google 分析时，您需要提防误导性偏见，例如"我们没有 Firefox 移动用户"可能会导致您不必为 Firefox 移动提供支持。但是，你不会有任何火狐移动用户，如果该网站被打破在火狐手机摆在首位。

### 其他注意事项

您可能还应包括其他注意事项。您绝对应该将辅助功能作为 A 级测试要求 (我们将在处理常见辅助功能问题一文中介绍您应该测试的内容)

此外，您可能还有其他注意事项。如果要创建某种公司 Intranet，以便向经理提供销售数据，并且例如，所有经理都提供了 Windows 手机，则可能需要将移动 IE 支持作为优先事项。

### 最终的支持图表

因此，我们的最终支持图表最终将如下所示：

1. A 级：适用于 Windows/Mac 的 Chrome 和 Firefox、适用于 Mac 的 Safari、Windows 的"边缘"和"IE"(每个版本的最后两个版本)、iPhone/iPad 的 iOS Safari、手机/平板电脑上的 Android 股票浏览器 (最后两个版本)、适用于 Android 的 Chrome 和 Firefox(最后两个版本) 在手机平板电脑上。通过常见测试的无障碍。
2. B 级：IE 8 和 9 用于 Windows，Opera Mini。
3. C 级：Opera，其他合适的现代浏览器。

## 你想要测试什么？

当您的代码库有需要测试的新添加项时，在开始测试之前，应编写出需要通过才能接受的测试要求列表。这些要求可以是可视的，也可以是功能性的，两者结合起来，成为可用的网站功能。

思考下面的例子 (查看[源码](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)，[在线预览](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![](sliding-box-demo.png)

此功能的测试标准可以这样编写：

A 级和 B 级：

- 按钮应该由用户的主要控制机制激活，不管它是什么 ––这应该包括鼠标、键盘和触摸
- 切换按钮应使信息框显示/消失。
- 文本应可读。
- 使用屏幕阅读器的视障用户应该能够访问文本。

A 级：

- 信息框在出现/消失时应平滑地动画。
- 渐变和文本阴影应显示为增强框的外观。

You may notice from the text in the example that it won't work in IE8 — this is a problem according to our support chart, which you'll have to work on, perhaps by using a feature detection library to implement the functionality in a different way if the browser doesn't support CSS transitions (see Implementing feature detection, later on in the course).您可能会从示例中的文本中注意到它在 IE8 中不起作用 ––根据我们的支持图表，这是一个问题，您必须处理这个问题，如果浏览器不采用其他方式，则可能使用功能检测库以不同的方式实现功能（如果浏览器不支持 CSS 转换的话）(请参阅实现功能检测，稍后将在本课程中)。

您可能还注意到，该按钮仅使用键盘无法使用，这也需要纠正。也许我们可以使用一些 JavaScript 来实现一个键盘控件的切换，或者完全使用一些其他的方法？

这些测试条件很有用，因为：

- 当您执行测试时，它们会为您提供一组要遵循的步骤。
- 在执行测试时，可以轻松地将它们转换为用户组要遵循的指令集 (e.g. "try to active the button using your mouse, and then the keyboard...")–– 请参阅下面的 [用户测试](#用户测试)。
- 它们还可以为编写自动测试提供基础。如果您确切知道要测试的内容以及成功条件是什么 (请参阅使用自动化工具自动执行浏览器测试，请稍后在系列中) 编写此类测试。

## 建立一个测试实验室

执行浏览器测试的一个选项是自己进行测试。为此，您可能需要使用实际物理设备和模拟环境的组合 (使用仿真器或虚拟机)。

### 真实设备

通常最好让一个实际的设备运行您要测试的浏览器 , 这在行为和整体用户体验方面提供了最高的准确性。对于合理的低级设备实验室，您可能需要以下内容：

- Mac，安装了您需要测试的浏览器，包括火狐、Chrome、Opera 和 Safari。
- 安装了需要测试的浏览器的 Windows 电脑，其中可能包括 Edge (or IE), Chrome, Firefox 和 Opera。
- 更高规格的 Android 手机和平板电脑，安装了浏览器，你需要测试 - 这可能包括 Chrome，火狐，和 Opera Mini 的 Android，以及原来的 Android stock 浏览器。
- 更高规格的 iOS 手机和平板电脑，并安装了您需要测试的浏览器 , 这可能包括 iOS Safari，以及适用于 iOS 的 Chrome、Firefox 和 Opera Mini。

如果可以获取这些选项，则以下是不错的选项：

- 可用的 Linux PC ,以防您需要测试特定于 Linux 版本的浏览器的错误。Linux 用户只使用火狐、Opera 和 Chrome。如果只有一台计算机可用，则可以考虑在单独的分区上创建运行 Linux 和 Windows 的双引导计算机。Ubuntu 的安装程序使设置起来非常简单;有关此帮助，请参阅[WindowsDualBoot](https://help.ubuntu.com/community/WindowsDualBoot)。
- 几个低规格的移动设备，因此您可以测试低功率处理器上的动画等功能的性能。

您的主工作计算机也可以用于安装其他工具以用于特定目的，例如辅助功能审核工具、屏幕阅读器和仿真器/虚拟机。

一些大型公司拥有设备实验室，这些实验室库存了大量不同的设备，使开发人员能够在非常具体的浏览器/设备组合上查找 Bug。较小的公司和个人通常负担不起如此复杂的实验室，因此倾向于使用较小的实验室、仿真器、虚拟机和商业测试应用程序。

我们将介绍下面的其他选项。

> **备注：** 已做出一些努力用来创建可公开访问的设备实验室，请参阅 [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/)。

> **备注：** 我们还需要考虑辅助功能 — 可以在计算机上安装许多有用的工具，以方便辅助功能测试，但我们将在本课程的后面部分介绍"处理常见辅助功能问题"一文中的工具。

### 模拟器

仿真器基本上是在计算机内运行并模拟某种设备或特定设备条件的程序，允许您比查找要测试的特定硬件/软件组合更方便地执行某些测试。

仿真器可能与测试设备条件一样简单。例如，如果要对宽度/高度媒体查询进行一些快速而粗劣的测试以进行响应式设计，则可以使用 Firefox 的[Responsive Design Mode](/zh-CN/docs/Tools/Responsive_Design_Mode)。Safari 也有类似的模式，可以通过访问“*Safari > 首选项”*和"显示开发"菜单，然后选择"开发"\&gt;"输入响应式设计模式"来启用。Chrome 也有类似的功能：设备模式 (请参阅[Simulate Mobile Devices with Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode/))。

不过，您经常必须安装某种仿真器。要测试的最常见设备/浏览器如下所示：

- 用于开发 Android 应用程序的官方[Android Studio IDE](https://developer.android.com/studio/)对于仅测试 Google Chrome 或旧版 Android 浏览器上的网站来说有点沉重，但它确实附带了一个强大的[emulator](https://developer.android.com/studio/run/emulator.html)。如果你想要更轻巧的东西，[LeapDroid](http://leapdroid.com/)是 Windows 的一个很好的选择，[Andy](http://www.andyroid.net/) 是一个合理的选择，可以在 Windows 和 Mac 上运行。
- Apple 提供了一个名为[Simulator](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/iOS_Simulator_Guide/Introduction/Introduction.html) 的应用程序，它运行在[XCode](https://developer.apple.com/xcode/)开发环境之上，并模拟 iPad / iPhone / Apple Watch / Apple TV。这包括本机 iOS Safari 浏览器。不幸的是，这只能在 Mac 上运行。

您也经常可以为其他移动设备环境找到模拟器，例如：

- [Blackberry](https://developer.blackberry.com/develop/simulator/) （适用于 Windows，Mac OSX 和 Linux 的模拟器）。
- 如果要进行测试，可以单独模拟[Opera Mini](https://dev.opera.com/articles/installing-opera-mini-on-your-computer/)。
- 适用于 Windows Mobile 操作系统的仿真器：请参阅[Windows Phone Emulator for Windows Phone 8](<https://msdn.microsoft.com/en-us/library/windows/apps/ff402563(v=vs.105).aspx>) 和[Test with the Microsoft Emulator for Windows 10 Mobile](https://msdn.microsoft.com/en-us/windows/uwp/debug-test-perf/test-with-the-emulator)（这些仅适用于 Windows）。

> **备注：** 许多模拟器实际上需要使用虚拟机（见下文）;在这种情况下，通常提供指令，和/或将虚拟机的使用合并到仿真器的安装程序中。

### 虚拟机

虚拟机是在台式计算机上运行的应用程序，允许您运行整个操作系统的仿真，每个操作系统都划分在自己的虚拟硬盘驱动器中（通常由主机硬盘上存在的单个大文件表示）。有许多流行的虚拟机应用程序可用，例如[Parallels](www.parallels.com/)，[VMWare](http://www.vmware.com/)和[Virtual Box](https://www.virtualbox.org/wiki/Downloads);我们个人喜欢后者，因为它是免费的。

> **备注：** 您需要可用的大容量硬盘空间来运行虚拟机模拟;模拟的每个操作系统都会占用大量内存。您可能倾向于为每次安装选择所需的硬盘空间;你也可能会试图侥幸使用 10GB 空间，但会被建议使用 50GB 空间或更多，以便让操作系统运行可靠。大多数虚拟机应用程序提供的一个很好的选择是创建一个动态分配（**dynamically allocated）**的硬盘驱动器，它会随着需要的增长和缩小而动态改变。

要使用虚拟盒，您需要：

1. 获取要模拟的操作系统的安装程序磁盘或映像（例如 ISO 文件）。Virtual Box 无法提供这些;大多数，如 Windows 操作系统，是无法自由分发的商业产品。
2. [下载](https://www.virtualbox.org/wiki/Downloads)适用于您的操作系统的相应安装程序并进行安装。
3. 打开应用程序;您将看到如下视图： ![](virtualbox.png)
4. 要创建新虚拟机，请按左上角的“新建”按钮。
5. 按照说明进行操作，并根据需要填写以下对话框。你会：

   1. 为新虚拟机提供名称
   2. 选择要在其上安装的操作系统和版本
   3. 设置应分配多少 RAM（我们建议使用 2048MB 或 2GB）
   4. 创建虚拟硬盘（在包含立即创建虚拟硬盘，VDI（虚拟磁盘映像）和动态分配的三个对话框中选择默认选项）。
   5. 选择虚拟硬盘的文件位置和大小（选择一个合理的名称和位置来保留它，并且大小指定大约 50GB，或者您可以轻松指定）。

现在，新的虚拟框应出现在 Virtual Box UI 主窗口的左侧菜单中。此时，您可以双击它以打开虚拟机––它将开始启动虚拟机，但它还没有安装操作系统。此时，您需要将对话框指向安装程序映像/磁盘，它将运行在虚拟机上安装它的步骤，就像它是真正的计算机一样。

![](virtualbox-installer.png)

> **警告：** 你需要确保此时要在虚拟机上安装要安装的操作系统映像，然后立即安装。如果此时取消该进程，它可能会使虚拟机无法使用，并使其成为您需要删除它并再次创建它。这不是致命的，但令人讨厌。

完成此过程后，您应该有一台虚拟机在主机窗口内运行操作系统。

![](virtualbox-running.png)

您需要像处理任何实际安装一样处理此虚拟操作系统安装 - 例如，安装要测试的浏览器，安装防病毒程序以保护其免受病毒侵害。

拥有多个虚拟机非常有用，特别是对于 Windows IE / Edge 测试 - 在 Windows 上，您无法并排安装多个版本的默认浏览器，因此您可能需要构建一个虚拟机库来处理根据需要进行不同测试，例如：

- Windows 10 with Edge 14
- Windows 10 with Edge 13
- Windows 8.1 with IE11
- Windows 8 with IE10
- Windows 7 with IE9
- Windows XP with IE8
- Windows XP with IE7
- Windows XP with IE6

> **备注：** 虚拟机的另一个好处是虚拟磁盘映像是相当独立的。如果您正在团队中工作，则可以创建一个虚拟磁盘映像，然后复制并传递它。如果它是许可产品，只需确保您拥有运行所有 Windows 副本或正在运行的任何其他副本所需的许可证。

### 自动化和商业应用

正如上一章所述，通过使用某种自动化系统，您可以从浏览器测试中减少很多痛苦。您可以设置自己的测试自动化系统（[Selenium](http://www.seleniumhq.org/)是首选的流行应用程序），它确实需要一些设置，但是当您解决问题时可能会相当受益。

还有一些商业工具，如[Sauce Labs](https://saucelabs.com/)和[Browser Stack](https://www.browserstack.com/)，可以为您做这种事情，如果您愿意在测试中投入一些资金，则无需担心设置的问题。

我们将在后续文章中查看如何使用此类工具。

## 用户测试

在我们继续之前，我们将通过谈论用户测试来完成本文––如果您有一个愿意用户组来测试您的新功能，这可能是一个很好的选择。请记住，这可以像你希望的那样廉价又有效––你的用户群可以是一群朋友，一群同事，或一群无偿或有偿志愿者，这取决于你是否有钱花在测试上。

通常，您可以让用户在某种开发服务器上查看包含新功能的页面或视图，这样您就不会在完成之前放置最终站点或更改。你应该让他们按照一些步骤报告他们得到的结果。提供一组步骤（有时称为脚本）非常有用，这样您就可以获得与您尝试测试的内容相关的更可靠的结果。我们在上面的 [你想要测试什么](#你想要测试什么？) 部分中提到了这一点––很容易将其中详述的测试标准转换为要遵循的步骤。例如，以下内容适用于有视力的用户：

- 在台式计算机上使用鼠标单击问号按钮几次。刷新浏览器窗口。
- 使用台式计算机上的键盘选择并激活问号按钮几次。
- 在触摸屏设备上点击几次问号按钮。
- 切换按钮应使信息框显示/消失。在上述三种情况中，是否都这样做？
- 文字可读吗？
- 信息框在出现/消失时是否能够流畅地生成动画？

运行测试时，最好还是：

- 尽可能设置单独的浏览器配置文件，禁用浏览器扩展和其他此类操作，并在该配置文件中运行测试（例如，请参阅[Use the Profile Manager to create and remove Firefox profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-and-remove-firefox-profiles)和[Share Chrome with others or add personas](https://support.google.com/chrome/answer/2364824)）
- 在可用的情况下运行测试时使用浏览器的私有模式功能（例如，Firefox 中的[Private Browsing](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history)，Chrome 中的[Incognito Mode](https://support.google.com/chrome/answer/95464)），因此不会保存 cookie 和临时文件等内容。

这些步骤旨在确保您正在测试的浏览器尽可能“纯粹（pure）”，即没有安装任何可能影响测试结果的内容。

> **备注：** 如果您有可用的硬件，另一个有用的低功耗选项是在低端手机/其他设备上测试您的网站 - 随着网站变得更大并且具有更多效果，网站放慢速度的可能性更高，因此您需要开始给予表现更多考虑。尝试在低端设备上运行您的功能将使更高端设备的体验更有可能。

> **备注：** 某些服务器端开发环境提供了有用的机制，可以将站点更改部署到仅部分用户，从而提供了一种有用的机制，可以在不需要单独的开发服务器的情况下获取由用户子集测试的功能。示例：[Django Waffle Flags](https://github.com/jsocol/django-waffle)。

## 总结

阅读本文后，您现在应该知道如何识别目标受众/目标浏览器列表，然后在该列表上有效地执行跨浏览器测试。

接下来，我们将把注意力转向测试可能发现的实际代码问题，从 HTML 和 CSS 开始。

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Introduction","Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS", "Learn/Tools_and_testing/Cross_browser_testing")}}
