---
title: Firefox 3 的开发者说明
slug: Mozilla/Firefox/Releases/3
---

{{FirefoxSidebar}}

如果你是一位开发者，并且希望了解 Firefox 3 中所有的新特性，这里是一个很好的起点。这篇文章提供了一个覆盖所有 Firefox 3 新特性的列表。虽然它并不能包括所有微小的改动，但它能够帮助你学习到最主要的改进。

### Firefox 3 中为开发者带来的新特性

#### 对网站和应用开发者

- [更新 web 应用以适应 Firefox 3](/zh-CN/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : 提供了有关你可能需要对网站或 web 应用进行的更改以便利用 Firefox 3 中的新特性的信息。
- [上线与离线事件](/zh-CN/docs/Web/API/Navigator/onLine)
  - : Firefox 3 支持 WHATWG 的上线与离线事件，其允许应用程序和扩展检测当前是否有可用的互联网连接，以及何时上线或下线。
- [基于 web 的协议处理](/zh-CN/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers)
  - : 你现在可以使用 `navigator.registerProtocolHandler()` 方法将 web 应用注册为特定协议的处理器。
- [在画布（canvas）中“绘制”文字](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : 你可以使用 Firefox 3 支持的非标准 API 在 canvas 上绘制文字。
- [支持画布变换](/zh-CN/Canvas_tutorial/Transformations#Transforms)
  - : Firefox 现在支持 canvas 的 `transform()` 和 `setTransform()` 方法。
- [使用微格式](/zh-CN/docs/Web/HTML/microformats)
  - : Firefox 现在有一组用于微格式的 API。
- [拖放事件](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 支持新的拖放事件，当拖放开始和结束时，该事件将会被发送至源节点。
- [HTML 的焦点管理](/zh-CN/docs/Web/API/Document/hasFocus)
  - : 支持新的 HTML 5 中的 `activeElement` 和 `hasFocus` 属性。
- Firefox 中的离线资源
  - : Firefox 现在允许 web 应用请求缓存的资源，以允许应用在离线时使用。
- [在 Firefox 3 中 CSS 的改进](/zh-CN/docs/CSS_improvements_in_Firefox_3)
  - : Firefox 3 在 CSS 支持上进行了多项改进。
- [在 Firefox 3 中 DOM 的改进](/zh-CN/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 在 Firefox 3 的 DOM 实现中提供了许多新特性，包括对多个 Internet Explorer DOM 扩展的支持。
- [JavaScript 1.8 的支持](/zh-CN/docs/New_in_JavaScript_1.8)
  - : Firefox 3 提供了 JavaScript 1.8 的支持。
- [EXSLT 支持](/zh-CN/docs/Web/EXSLT)
  - : Firefox 3 提供了对 [EXSLT](/zh-CN/docs/Web/EXSLT)（[XSLT](/zh-CN/docs/Web/XSLT) 的扩展）的一个基本子集的支持。
- [Firefox 3 中 SVG 的改进](/zh-CN/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : Firefox 3 对 SVG 的支持有了长足的改进：支持二十余个新滤镜、一些新的元素和属性，以及一些其他改进。
- [动态可移植网络图形](/zh-CN/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 提供了对动态可移植网络图形（APNG）图像格式的支持。

### 对 XUL 和扩展插件的开发者

#### 需要注意的变更和改进

提供了你需要做的事情的向导，更新你的 Firefox 3 扩展。

- [Firefox 3 的扩展更新](/zh-CN/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : 提供有关更新扩展程序以在 Firefox 3 上工作所需执行的操作的指南。
- [Firefox 3 的模板](/zh-CN/docs/Templates_in_Firefox_3)
  - : Firefox 3 中的模板已经显著改进。关键的改进是，允许使用自定义查询处理器，除了 RDF 之外还可以使用其他数据源。
- [安全更新](/zh-CN/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : 为了向用户提供更安全的附加组件升级方法，现在附加组件需要提供一种安全的方法来获取更新后才能安装。在 [AMO](https://addons.mozilla.org) 上托管的附加组件会自动提供该功能。当用户升级到 Firefox 3 时，任何已安装且不提供安全更新方法的附加组件都将被自动禁用。但 Firefox 仍会继续检查附加组件的更新，如果提供了不安全的更新方法，Firefox 会尝试安装任何提供的更新（如果更新也没有提供安全的更新方法，则安装将会失败）。
- [Places API 迁移指南](/zh-CN/docs/Places_Developer_Guide)
  - : 该文章介绍了如何更新现有扩展以使用 Places API。
- [Firefox 3 中下载管理器的改进](/zh-CN/docs/Download_Manager_improvements_in_Firefox_3)
  - : Firefox 3 下载管理器提供了新的和改进后的 API，包括对多个进度监听器的支持。
- 使用 nsILoginManager
  - : 密码管理器被新的登录管理器所取代。
- [嵌入 XBL 绑定](/zh-CN/docs/XBL/XBL_1.0_Reference/Elements#binding)
  - : 你现在可以使用 `data:` URL 方案在 chrome 代码中直接嵌入 XBL 绑定，而不是将它们放在单独的 XML 文件中。
- [本地化扩展描述](/zh-CN/docs/Localizing_extension_descriptions)
  - : Firefox 3 提供了新的方法来本地化附加组件元数据。这使得本地化的详细信息在附加组件下载后立刻可用，且其在附加组件被禁用后仍然可用。
- [本地化和 Plurals](/zh-CN/docs/Localization_and_Plurals)
  - : Firefox 3 添加了新的 PluralForm 模块，该模块提供了工具来帮助在多个本地化环境中正确地使用复数。
- [Firefox 3 主题更新](/zh-CN/docs/Theme_changes_in_Firefox_3)
  - : 为那些想要为 Firefox 3 创建主题的人提供的说明和信息。

#### 新的组件和功能

- [FUEL 库](/zh-CN/docs/Toolkit_API/FUEL)
  - : FUEL 使得扩展开发者更加高效，它通过最小化一些 XPCOM 的形式化和添加一些“现代”JavaScript 的思想来实现。
- [Places](/zh-CN/docs/Places)
  - : 历史记录和书签 API 已被新的 [Places](/zh-CN/docs/Places) API 完全替代。
- [Idle 服务](/zh-CN/docs/nsIIdleService)
  - : Firefox 3 提供了新的 `nsIIdleService` 接口，它允许扩展决定用户上一次按键或移动鼠标的时间。
- [ZIP writer](/zh-CN/docs/nsIZipWriter)
  - : 新的 `nsIZipWriter` 接口允许扩展创建 ZIP 归档。
- [全页面缩放](/zh-CN/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 在文本缩放之外提供了全页面缩放，从而提高了用户体验。
- [XPCOM 周期回收器及接口](/zh-CN/docs/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM 代码现在可以利用周期回收器，它有助于确保未使用的内存被释放而不会泄漏。
- [线程管理器](/zh-CN/docs/The_Thread_Manager)
  - : Firefox 3 提供了新的 `nsIThreadManager` 接口，以及用于线程和线程事件的新接口，它提供了一种方便的方法来创建和管理代码中的线程。
- [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)
  - : Firefox 3 现在提供了一种新的共享代码模块机制，它允许你轻松地创建 JavaScript 模块，这些模块可以被扩展和应用程序加载并使用，就像共享库一样。
- [`nsIJSON` 接口](/zh-CN/docs/nsIJSON)
  - : Firefox 3 提供了新的 `nsIJSON` 接口，它提供了高性能的 [JSON](/zh-CN/docs/Glossary/JSON) 字符串编码和解码。
- `nsIParentalControlsService` 接口
  - : Firefox 3 现已支持 Microsoft Windows Vista 家长控制功能，并允许代码与之交互。
- [使用内容首选项](/zh-CN/docs/Using_content_preferences)
  - : Firefox 3 包含了一个新的服务，用于获取和设置任意特定网站的首选项，扩展和核心代码都可以使用它来跟踪其用户对各个网站的偏好。
- [插件监控](/zh-CN/docs/Monitoring_plugins)
  - : 插件系统的一个新组件现在可用于测量插件（例如 Macromedia Flash）执行其调用所需的时间。

#### 错误修复

- [Firefox 3 中值得注意的错误修复](/zh-CN/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : 本文提供有关已经在 Firefox 3 中修复的错误的信息。

## 面向终端用户的新特性

### 用户体验

- **更轻松的密码管理**。当你成功登陆之后在浏览器顶端会出现一个信息栏，提示你是否保存此口令。
- **附件组件安装更简便**。你可以更容易的通过第三方下载附件组件并安装它。
- **新的下载管理器**。新的下载管理器使你更容易的定位下载文件。
- **断点下载**。现在可以在重启浏览器或重新获得网络连接时继续尚未完成的下载任务。
- **全屏缩放**。今后，你可以使用菜单或快捷键，可以缩放整个网页的内容——这个比例取决除了文字排版，还取决于更合适的图片排版。
- **标签滚动和快捷菜单**。通过新的标签滚动和标签快捷菜单可以更容易的定位标签。
- **保存你当前的浏览内容**。当你退出 Firefox 3 时，Firefox 3 会提示你是否保存当前标签。
- **优化的标签打开方式**。在标签中打开一个书签文件夹时，会创建一个新标签二不是覆盖现有的。
- **轻松更改搜索引挚工具框的大小和位置**。你可以简单的通过一个拖动鼠标改变搜索引擎工具栏和地址栏的分布。
- **改进了文本选择**。使用 Crtl（Macintosh 的 Command）键选择多块文本。双击可以选中个词（中文为一句）三击选中一段。
- **查找工具**。查找工具以当前选中内容为默认查找内容。
- **扩展管理**。用户可以在附件组件管理器中单独显示插件。
- **与 Windows Vista 的整合**。火狐菜单用一个 Vista 本地主题显示。
- **与 Mac OS X 的整合**。Firefox 现在使用 Mac OS X 拼写检查器并使用 [Growl](https://growl.github.io/growl/) 来通知下载完成或有可用更新。
- **星按钮**。地址栏上的“星”按钮使你通过一个点击添加一个新书签。一次双击保存并编辑你的新书签。
- **标签**。可以为你的书签指定关键词，并按主题排序。
- **地址栏和自动地址补全**。在地址栏键入页面标题或标签可以快速找到你在书签中的或是历史页面。图标、书签、标签可以帮助你判断结果的来源。
- **智能书签菜单**。Firefox 的智能书签会按照最新，访问频率来排序书签。
- **书签和历史管理器**。书签和历史管理统一起来，让你可以通过多视图、按照频率组织的智能分组方便的同时检索书签及历史。
- **基于 Web 的协议处理**。网络应用，比如你最喜欢的电子邮件提供商可以代替本地邮件应用来处理 `mailto:` 链接。对于其他也提供相似的支持。 (注意网络应用需要向火狐注册)
- **易于使用的下载**。一个新的引用界面提供高级选项来配置对不同文件类型及协议策略的处理方案。
- **改进的浏览器外观**。新的图形及字体处理方案使网页在你的屏幕上显示的更漂亮。包括清晰的文字渲染、连体字、复杂文字的更好支持。另外 Mac 及 Linux (Gnome) 用户会发现 Firefox 感觉起来更像他们本地的应用或平台一样。
- **支持颜色设置**。通过设置 在 `about:config` 的 `gfx.color_management.enabled` 优先级，你可以要求 Firefox 的按照新的配置文件中对图像的颜色进行调整，以符合你电脑的显示器。
- **支持离线浏览。**即使你没有 Internet 连接，Web 应用程序仍可使用。

### 安全和隐私

- **一键网站信息**。想知道更多关于你所访问网站的信息？点击该网站的图标，在地址栏中看看是谁拥有它。信息更易理解。
- **恶意软件防护。**如果你访问了一个已知的安装病毒，间谍软件，木马，或其他危险软件（也称为恶意软件）的网站 Firefox 3 会警告你。你可以[点这里](https://www.mozilla.com/firefox/its-an-attack.html)看看警告是怎样的。
- **伪造网站保护加强**。现在，当你访问的网站被怀疑是伪造时，会出现一个特殊的网页。[点击这里](https://www.mozilla.com/firefox/its-a-trap.html)看看是什么样子。

- **更容易理解的 SSL 错误**。遇到无效的 SSL 证书时会包含清楚的错误描述，使其更易于理解是哪里发生了问题。
- **过期附件组件防护**。现在 Firefox 3 的自动检查插件和插件版本并禁用过时的，不安全的版本。
- **安全附件更新**。附件更新安全性提高了，不允许使用不安全的更新机制。
- **防病毒一体化**。Firefox 3 在下载文件的同时通知的反病毒软件。
- **Windows Vista 的家长控制功能的支持**。Firefox 3 的支持 Vista 的全系统家长控制，禁用文件下载。

### 性能

- **可靠性。**Firefox 3 使用安全的数据库格式保存书签，历史记录，cookies，及偏好。这意味着，即使系统崩溃，你的数据也免受损失。
- **速度**。Firefox 3 有了较大的性能提升，完全取代了部分软件：包括图形屏幕处理，以及页面布局工作的处理等。
- **更少的内存占用**。Firefox 3 的内存使用比以往任何时候都有效，有超过 300 个内存“泄漏”漏洞得以修复，以及可帮助自动查找和处置泄漏内存的新功能被添加进来。

### 参见

{{Firefox_for_developers('2')}}
