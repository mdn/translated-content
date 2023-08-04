---
title: 致 Firefox 3 开发者
slug: Mozilla/Firefox/Releases/3
---

{{FirefoxSidebar}}

如果你是一个 Web 开发人员，并且希望了解 Firefox 3 中所有的新特性，这里是一个很好的起点。这篇文章提供了一个覆盖所有 Firefox 3 新特性的列表。虽然他并不是能够包括所有微小的改动，但他能够帮助你学习到最主要的更新。

### Firefox 3 中新的开发人员特性

#### 对网站和程序开发者

- [更新 WEB 应用以适应 Firefox 3](/zh-CN/%E6%9B%B4%E6%96%B0WEB%E5%BA%94%E7%94%A8%E4%BB%A5%E9%80%82%E5%BA%94Firefox_3)
  - : 提供了您用于更新 WEB 应用以受益于 Firefox 3 新特性所需的信息。
- [上线与离线事件](/zh-CN/%E4%B8%8A%E7%BA%BF%E4%B8%8E%E7%A6%BB%E7%BA%BF%E4%BA%8B%E4%BB%B6)
  - : Firefox 3 支持 WHATWG 的上线与离线事件，基于这一特性，程序可以检测当前是否有可用的互联网联接以及何时上线或下线。
- [跨域的 XMLHttpRequest 请求](/zh-CN/%E8%B7%A8%E5%9F%9F%E7%9A%84XMLHttpRequest%E8%AF%B7%E6%B1%82)
  - : Firefox 3 支持[W3C Access Control](http://www.w3.org/TR/access-control/)工作草案，使你有能够使用[XMLHttpRequests](/zh-CN/XMLHttpRequest)检索和操作其他站点的数据；使你能够创造令人印象深刻的以浏览器为基础的交互式应用（mashups）。
- [交错格式样表](/zh-CN/%E4%BA%A4%E9%94%99%E6%A0%BC%E5%BC%8F%E6%A0%B7%E8%A1%A8)
  - : Firefox 3 支持 CSS 层叠式样式表 API.
- [基于 web 的协议处理](/zh-CN/DOM/window.navigator.registerProtocolHandler)
  - : 你现在可以使用 `navigator.registerProtocolHandler()` 方法注册 web 应用
- [在画布（canvas）中“绘”出文字](/zh-CN/%E5%9C%A8%E7%94%BB%E7%94%BB%E5%B8%83%EF%BC%88canvas%EF%BC%89%E4%B8%AD%E2%80%9C%E7%BB%98%E2%80%9D%E5%87%BA%E6%96%87%E5%AD%97)
  - : 您可以使用 Firefox 3 支持的非标准 API 在 canvas 上绘制文字。
- [支持画布变换](/zh-CN/Canvas_tutorial/Transformations#Transforms)
  - : Firefox 现在的 canvas 支持 `transform()` 和 `setTransform()` 方法。
- [使用微格式](/zh-CN/%E4%BD%BF%E7%94%A8%E5%BE%AE%E6%A0%BC%E5%BC%8F)
  - : Firefox 现在有一组微格式的 API。
- [拖放事件](/zh-CN/%E6%8B%96%E6%94%BE%E4%BA%8B%E4%BB%B6)
  - : Firefox 3 支持新的拖放事件，当拖放开始和结束时，该事件将会被发送至源节点。
- [HTML 的焦点管理](/zh-CN/Focus_management_in_HTML)
  - : 新的 HTML 5 支持 activeElement 和 hasFocus 属性
- [离线浏览](/zh-CN/%E7%A6%BB%E7%BA%BF%E6%B5%8F%E8%A7%88)
  - : 在 Firefox 中，WEB 程序现在可以在离线时使用之前被缓存的资源。
- [在 Firefox 3 中 CSS 的改进](/zh-CN/%E5%9C%A8Firefox_3%E4%B8%ADCSS%E7%9A%84%E6%94%B9%E8%BF%9B)
  - : Firefox 3 在支持 CSS 的功能上进行了一些完善。
- [在 Firefox 3 中 DOM 的改进](/zh-CN/%E5%9C%A8Firefox_3%E4%B8%ADDOM%E7%9A%84%E6%94%B9%E8%BF%9B)
  - : Firefox 3 在 Firefox3 DOM 执行方面提供了一些新的功能，包括支持一些扩展的浏览器的 DOM。
- [JavaScript 1.8 的支持](/zh-CN/%E5%AF%B9_JavaScript_1.8)
  - : Firefox 3 提供了 JavaScript 1.8 标准的支持。
- [EXSLT 支持](/zh-CN/EXSLT)
  - : Firefox 3 提供了对 [EXSLT](/zh-CN/EXSLT)（ [XSLT](/zh-CN/XSLT)的扩展）一个基本子集个支持。
- [Firefox 3 中 SVG 的改进](/zh-CN/Firefox_3%E4%B8%ADSVG%E7%9A%84%E6%94%B9%E8%BF%9B)
  - : Firefox 3 对 SVG 的支持有了长足的改进：支持二十余个新透镜、一些新元素、一些新属性以及一些其他改进。
- [对 PNG 动画的支持](/zh-CN/%E5%AF%B9PNG%E5%8A%A8%E7%94%BB%E7%9A%84%E6%94%AF%E6%8C%81)
  - : Firefox 3 提供了对色彩艳丽的 PNG (APNG) 图像格式的支持。
- [`<a ping>`](/zh-CN/HTML/Element/a)
  - : `现在可以使用 <a ping>` 功能 ping 一个 URL ,并且此功能默认启用。

#### 对 XUL 和扩展插件的开发者

提供了你需要做的事情的向导，更新您的 Firefox 3 扩展。

- [更新扩展以兼容 Firefox 3](/zh-CN/%E6%9B%B4%E6%96%B0%E6%89%A9%E5%B1%95%E4%BB%A5%E5%85%BC%E5%AE%B9Firefox_3)
  - : FUEL 使扩展开发者完成更有成效，更精悍的 XPCOM 规范代码并获得一些 "模式" JavaScript 思想。
- [Firefox 3 在 XUL 上的改进](/zh-CN/XUL_improvements_in_Firefox_3)
  - : Firefox 3 的提供了一些新的 XUL 元素，包括新的缩放法，日期和时间获取，以及旋转按钮。
- [Firefox 3 的模板](/zh-CN/Templates_in_Firefox_3)
  - : Firefox 3 的模板已显着改善。关键的改进是，允许使用自定义查询处理器，除数据源之外还可以使用 RDF。
- [嵌入的 XBL 绑定](/zh-CN/XBL/XBL_1.0_Reference/Elements#binding)
  - : 现在，您可以使用 data: 网络协议直接嵌入 XBL 绑定，而不是在单独的 XML 文件中使用他们。
- [本地化扩展描述](/zh-CN/Localizing_extension_descriptions)
  - : 这可让本地化的详细信息在附加组件被下载时或被禁用即时生效。
- [可靠更新](/zh-CN/Extension_Versioning,_Update_and_Compatibility#Securing_Updates)
  - : In order to provide a more secure add-on upgrade path for users, add-ons are now required to provide a secure method for obtaining updates before they can be installed. Add-ons hosted at [AMO](http://addons.mozilla.org/) automatically provide this. Any add-ons installed that do not provide a secure update method when the user upgrades to Firefox 3 will be automatically disabled. Firefox will however continue to check for updates to the extension over the insecure path and attempt to install any update offered (installation will fail if the update also fails to provide a secure update method).
- [Idle service](/zh-CN/NsIIdleService)
  - : Firefox 3 offers the new `nsIIdleService` interface, which lets extensions determine how long it's been since the user last pressed a key or moved their mouse.
- [全屏缩放](/zh-CN/%E5%85%A8%E5%B1%8F%E7%BC%A9%E6%94%BE)
  - : Firefox 3 improves the user experience by offering full page zoom in addition to text-only zoom.
- [Interfacing with the XPCOM cycle collector](/zh-CN/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM code can now take advantage of the cycle collector, which helps ensure that unused memory gets released instead of leaking.
- [The Thread Manager](/zh-CN/The_Thread_Manager)
  - : Firefox 3 provides the new `nsIThreadManager` interface, along with new interfaces for threads and thread events, which provides a convenient way to create and manage threads in your code.
- [JavaScript 模块](/zh-CN/JavaScript%E6%A8%A1%E5%9D%97)
  - : Firefox 3 now offers a new shared code module mechanism that lets you easily create modules in JavaScript that can be loaded by extensions and applications for use, much like shared libraries.
- [Places](/zh-CN/Places)
  - : The history and bookmarks APIs have been completely replaced by the new [Places](/zh-CN/Places) API.
- [Making the transition to Places](/zh-CN/Making_the_transition_to_Places)
  - : An article about how to update an existing extension to use the Places API.
- [Firefox 3 中下载管理器的改进](/zh-CN/Firefox_3%E4%B8%AD%E4%B8%8B%E8%BD%BD%E7%AE%A1%E7%90%86%E5%99%A8%E7%9A%84%E6%94%B9%E8%BF%9B)
  - : The Firefox 3 Download Manager features new and improved APIs, including support for multiple progress listeners.
- [Using nsILoginManager](/zh-CN/Using_nsILoginManager)
  - : 密码管理已经被新的登录管理所代替。
- [Using content preferences](/zh-CN/Using_content_preferences)
  - : Firefox 3 includes a new service for getting and setting arbitrary site-specific preferences that extensions as well as core code can use to keep track of their users' preferences for individual sites.
- [Notable bugs fixed in Firefox 3](/zh-CN/Notable_bugs_fixed_in_Firefox_3)
  - : 文章中所提供的相关 Bug 信息，已经在 Firefox 3 中进行了修改。
- [Firefox 3 的界面改动](/zh-CN/Firefox_3_%E7%9A%84%E7%95%8C%E9%9D%A2%E6%94%B9%E5%8A%A8)
  - : Notes and information of use to people who want to create themes for Firefox 3.

### 最终用户将能体验到的新特性

#### 用户体验

- **更轻松的密码管理。** 当你成功登陆之后在浏览器顶端会出现一个信息栏，提示你是否保存此口令。
- **附件组件安装更简便。** 你可以更容易的通过第三方下载附件组件并安装它。
- **新的下载管理器。** 新的下载管理器使你更容易的定位下载文件。
- **断点下载。** 现在可以在重启浏览器或重新获得网络连接时继续尚未完成的下载任务。
- **全屏缩放。** 今后，你可以使用菜单或快捷键，可以缩放整个网页的内容——这个比例取决除了文字排版，还取决于更合适的图片排版。
- **标签滚动和快捷菜单。** 通过新的标签滚动和标签快捷菜单可以更容易的定位标签。
- **保存您当前的浏览内容。** 当你退出 Firefox 3 时，Firefox 3 会提示你是否保存当前标签。
- **优化的标签打开方式。** 在标签中打开一个书签文件夹时，会创建一个新标签二不是覆盖现有的。
- **轻松更改搜索引挚工具框的大小和位置。** 你可以简单的通过一个拖动鼠标改变搜索引擎工具栏和地址栏的分布。
- **改进了文本选择。** 使用 Crtl (Macintosh 的 Command) 键选择多块文本。双击可以选中个词（中文为一句）三击选中一段。
- **查找工具。** 查找工具以当前选中内容为默认查找内容。
- **扩展管理。** 用户可以在附件组件管理器中单独显示插件。
- **与 Windows Vista 的整合**。火狐菜单用一个 Vista 本地主题显示。
- **与 Mac OS X 的整合**。Firefox 现在使用 Mac OS X 拼写检查器并使用 [Growl](http://growl.info/) 来通知下载完成或有可用更新。
- **星按钮。** 地址栏上的“星”按钮使你通过一个点击添加一个新书签。一次双击保存并编辑你的新书签。
- **标签。** 可以为你的书签指定关键词，并按主题排序。
- **地址栏和自动地址补全。** 在地址栏键入页面标题或标签可以快速找到你在书签中的或是历史页面。图标、书签、标签可以帮助你判断结果的来源。
- **智能书签菜单。** Firefox 的智能书签会按照最新，访问频率来排序书签。
- **书签和历史管理器。** 书签和历史管理统一起来，让你可以通过多视图、按照频率组织的智能分组方便的同时检索书签及历史。
- **基于 Web 的协议处理。** 网络应用，比如你最喜欢的电子邮件提供商可以代替本地邮件应用来处理 `mailto:` 链接。对于其他也提供相似的支持。 (注意网络应用需要向火狐注册)
- **易于使用的下载。** 一个新的引用界面提供高级选项来配置对不同文件类型及协议策略的处理方案。
- **改进的浏览器外观。** 新的图形及字体处理方案使网页在你的屏幕上显示的更漂亮。包括清晰的文字渲染、连体字、复杂文字的更好支持。另外 Mac 及 Linux (Gnome) 用户会发现 Firefox 感觉起来更像他们本地的应用或平台一样。
- **支持颜色设置。** 通过设置 在 `about:config` 的 `gfx.color_management.enabled` 优先级，您可以要求 Firefox 的按照新的配置文件中对图像的颜色进行调整，以符合您电脑的显示器。
- **支持离线浏览。**即使您没有 Internet 连接，Web 应用程序仍可使用。

#### 安全和隐私

- **一键网站信息。** 想知道更多关于您所访问网站的信息？点击该网站的图标，在地址栏中看看是谁拥有它。信息更易理解。
- **恶意软件防护。**如果你访问了一个已知的安装病毒，间谍软件，木马，或其他危险软件（也称为恶意软件）的网站 Firefox 3 会警告你。你可以[点这里](https://www.mozilla.com/firefox/its-an-attack.html)看看警告是怎样的。
- **伪造网站保护加强。** 现在，当您访问的网站被怀疑是伪造时，会出现一个特殊的网页。[点击这里](https://www.mozilla.com/firefox/its-a-trap.html)看看是什么样子。

- **更容易理解的 SSL 错误**。遇到无效的 SSL 证书时会包含清楚的错误描述，使其更易于理解是哪里发生了问题。
- **过期附件组件防护。** 现在 Firefox 3 的自动检查插件和插件版本并禁用过时的，不安全的版本。
- **安全附件更新**。附件更新安全性提高了，不允许使用不安全的更新机制。
- **防病毒一体化。** Firefox 3 在下载文件的同时通知的反病毒软件。
- **Windows Vista 的家长控制功能的支持。** Firefox 3 的支持 Vista 的全系统家长控制，禁用文件下载。

#### 性能

- **可靠性。**Firefox 3 使用安全的数据库格式保存书签，历史记录，cookies，及偏好。这意味着，即使系统崩溃，您的数据也免受损失。
- **速度。** Firefox 3 有了较大的性能提升，完全取代了部分软件：包括图形屏幕处理，以及页面布局工作的处理等。
- **更少的内存占用。** Firefox 3 的内存使用比以往任何时候都有效，有超过 300 个内存“泄漏”漏洞得以修复，以及可帮助自动查找和处置泄漏内存的新功能被添加进来。

### 参见

- [对 Firefox 3 的扩展进行更新](/zh-CN/Updating_extensions_for_Firefox_3)
- [对 Firefox 3 的 Web 应用进行更新](/zh-CN/Updating_web_applications_for_Firefox_3)
- [Firefox 2 for developers](/zh-CN/Firefox_2_for_developers)
- [Firefox 1.5 for developers](/zh-CN/Firefox_1.5_for_developers)
