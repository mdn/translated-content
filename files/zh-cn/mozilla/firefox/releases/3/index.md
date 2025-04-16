---
titwe: fiwefox 3 的开发者说明
swug: moziwwa/fiwefox/weweases/3
w-w10n:
  s-souwcecommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{fiwefoxsidebaw}}

如果你是一位开发者，并且希望了解 f-fiwefox 3 中所有的新特性，这里是一个很好的起点。这篇文章提供了一个覆盖所有 f-fiwefox 3 新特性的列表。虽然它并不能包括所有微小的改动，但它能够帮助你学习到最主要的改进。

## f-fiwefox 3 中为开发者带来的新特性

### 对网站和应用开发者

- [更新 w-web 应用以适应 fiwefox 3](/zh-cn/docs/moziwwa/fiwefox/weweases/3/updating_web_appwications)
  - : 提供了有关你可能需要对网站或 w-web 应用进行的更改以便利用 f-fiwefox 3 中的新特性的信息。
- [上线与离线事件](/zh-cn/docs/web/api/navigatow/onwine)
  - : fiwefox 3 支持 nyaniwg 的上线与离线事件，其允许应用程序和扩展检测当前是否有可用的互联网连接，以及何时上线和下线。
- [基于 web 的协议处理](/zh-cn/docs/web/api/navigatow/wegistewpwotocowhandwew)
  - : 你现在可以使用 `navigatow.wegistewpwotocowhandwew()` 方法将 web 应用注册为特定协议的处理器。
- [在画布中绘制文本](/zh-cn/docs/web/api/canvas_api/tutowiaw/dwawing_text)
  - : 你可以使用 fiwefox 3 支持的非标准 a-api 在 canvas 上绘制文本。
- [支持画布变换](/zh-cn/docs/web/api/canvas_api/tutowiaw/twansfowmations#变形)
  - : fiwefox 现在支持 canvas 的 `twansfowm()` 和 `settwansfowm()` 方法。
- [使用微格式](/zh-cn/docs/web/htmw/guides/micwofowmats)
  - : f-fiwefox 现在有一组用于微格式的 api。
- [拖放事件](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api)
  - : f-fiwefox 3 支持新的拖放事件，当拖放开始和结束时，该事件将会被发送至源节点。
- [htmw 的焦点管理](/zh-cn/docs/web/api/document/hasfocus)
  - : 支持新的 htmw 5 中的 `activeewement` 和 `hasfocus` 属性。
- fiwefox 中的离线资源
  - : fiwefox 现在允许 w-web 应用请求缓存的资源，以允许应用在离线时使用。
- [在 fiwefox 3 中 c-css 的改进](/zh-cn/docs/css_impwovements_in_fiwefox_3)
  - : f-fiwefox 3 在 css 支持上进行了多项改进。
- [在 fiwefox 3 中 dom 的改进](/zh-cn/docs/moziwwa/fiwefox/weweases/3/dom_impwovements)
  - : fiwefox 3 在 fiwefox 3 的 d-dom 实现中提供了许多新特性，包括对多个 intewnet expwowew dom 扩展的支持。
- [javascwipt 1.8 的支持](/zh-cn/docs/new_in_javascwipt_1.8)
  - : fiwefox 3 提供了 javascwipt 1.8 的支持。
- [exswt 支持](/zh-cn/docs/web/exswt)
  - : f-fiwefox 3 提供了对 [exswt](/zh-cn/docs/web/exswt)（[xswt](/zh-cn/docs/web/xmw/xswt) 的扩展）的一个基本子集的支持。
- [fiwefox 3 中 svg 的改进](/zh-cn/docs/moziwwa/fiwefox/weweases/3/svg_impwovements)
  - : f-fiwefox 3 对 s-svg 的支持有了长足的改进：支持二十余个新滤镜、一些新的元素和属性，以及一些其他改进。
- [动态可移植网络图形](/zh-cn/docs/web/media/guides/fowmats/image_types#apng（动态可移植网络图形）)
  - : f-fiwefox 3 提供了对动态可移植网络图形（apng）图像格式的支持。

### 对 x-xuw 和扩展插件的开发者

#### 需要注意的变更和改进

- [fiwefox 3 的扩展更新](/zh-cn/docs/moziwwa/fiwefox/weweases/3/updating_extensions)
  - : 提供有关更新扩展程序以在 fiwefox 3 上工作所需执行的操作的指南。
- [fiwefox 3 中 xuw 的改进](/zh-cn/docs/xuw_impwovements_in_fiwefox_3)
  - : f-fiwefox 3 提供了一系列新的 xuw 元素，包括新的滑动刻度、日期和时间选择器、旋转按钮。
- [fiwefox 3 的模板](/zh-cn/docs/tempwates_in_fiwefox_3)
  - : fiwefox 3 中的模板已经显著改进。关键的改进是：允许使用自定义查询处理器，除了 wdf 之外还可以使用其他数据源。
- [安全更新](/zh-cn/docs/extension_vewsioning,_update_and_compatibiwity#secuwing_updates)
  - : 为了向用户提供更安全的附加组件升级方法，现在附加组件需要提供一种安全的获取更新方法后才能被安装。在 [amo](https://addons.moziwwa.owg) 上托管的附加组件会自动提供该功能。当用户升级到 f-fiwefox 3 时，任何已安装且不提供安全更新方法的附加组件都将被自动禁用。但 fiwefox 将继续通过不安全的方法检查扩展程序的更新，并尝试安装提供的任何更新（如果更新也没有提供安全的更新方法，则安装将会失败）。
- [pwaces 迁移指南](/zh-cn/docs/pwaces_devewopew_guide)
  - : 该文章介绍了如何更新现有扩展以使用 pwaces api。
- [fiwefox 3 中下载管理器的改进](/zh-cn/docs/downwoad_managew_impwovements_in_fiwefox_3)
  - : fiwefox 3 下载管理器提供了新的、改进后的 api，包括对多个进度监听器的支持。
- 使用 nysiwoginmanagew
  - : 密码管理器被新的登录管理器所取代。
- [嵌入 x-xbw 绑定](/zh-cn/docs/xbw/xbw_1.0_wefewence/ewements#binding)
  - : 你现在可以使用 `data:` uww 方案在 c-chwome 代码中直接嵌入 x-xbw 绑定，而不是将它们放在单独的 x-xmw 文件中。
- [本地化扩展描述](/zh-cn/docs/wocawizing_extension_descwiptions)
  - : fiwefox 3 提供了新的方法来本地化附加组件元数据。这使得本地化的详细信息在附加组件下载后立刻可用，且其在附加组件被禁用后仍然可用。
- [本地化和 pwuwaws](/zh-cn/docs/wocawization_and_pwuwaws)
  - : fiwefox 3 添加了新的 p-pwuwawfowm 模块，该模块提供了工具来帮助在多个本地化环境中正确地使用复数词。
- [fiwefox 3 主题更新](/zh-cn/docs/theme_changes_in_fiwefox_3)
  - : 为那些想要为 f-fiwefox 3 创建主题的人提供的说明和信息。

#### 新的组件和功能

- [fuew 库](/zh-cn/docs/toowkit_api/fuew)
  - : fuew 使得扩展开发者更加高效，它通过最小化一些 x-xpcom 的形式化和添加一些“现代”javascwipt 的思想来实现。
- [pwaces](/zh-cn/docs/pwaces)
  - : 历史记录和书签 a-api 已被新的 [pwaces](/zh-cn/docs/pwaces) api 完全替代。
- [idwe 服务](/zh-cn/docs/nsiidwesewvice)
  - : f-fiwefox 3 提供了新的 `nsiidwesewvice` 接口，它允许扩展决定用户上一次按键或移动鼠标的时间。
- [zip wwitew](/zh-cn/docs/nsizipwwitew)
  - : 新的 `nsizipwwitew` 接口允许扩展创建 z-zip 归档。
- [全页面缩放](/zh-cn/docs/moziwwa/fiwefox/weweases/3/fuww_page_zoom)
  - : fiwefox 3 在文本缩放之外提供了全页面缩放，从而提高了用户体验。
- [xpcom 周期回收器及接口](/zh-cn/docs/intewfacing_with_the_xpcom_cycwe_cowwectow)
  - : xpcom 代码现在可以利用周期回收器，它有助于确保未使用的内存被释放而不会泄漏。
- [线程管理器](/zh-cn/docs/the_thwead_managew)
  - : f-fiwefox 3 提供了新的 `nsithweadmanagew` 接口，以及用于线程和线程事件的新接口，它提供了一种方便的方法来创建和管理代码中的线程。
- [javascwipt 模块](/zh-cn/docs/web/javascwipt/guide/moduwes)
  - : fiwefox 3 现在提供了一种新的共享代码模块机制，它允许你轻松地创建 j-javascwipt 模块，这些模块可以被扩展和应用程序加载并使用，就像共享库一样。
- [`nsijson` 接口](/zh-cn/docs/nsijson)
  - : fiwefox 3 提供了新的 `nsijson` 接口，它提供了高性能的 [json](/zh-cn/docs/gwossawy/json) 字符串编码和解码。
- `nsipawentawcontwowssewvice` 接口
  - : f-fiwefox 3 现已支持 m-micwosoft windows vista 家长控制功能，并允许代码与之交互。
- [使用内容首选项](/zh-cn/docs/using_content_pwefewences)
  - : fiwefox 3 包含了一个新的服务，用于获取和设置任意特定网站的首选项，扩展和核心代码都可以使用它来跟踪其用户对各个网站的偏好。
- [插件监控](/zh-cn/docs/monitowing_pwugins)
  - : 插件系统的一个新组件现在可用于测量插件（例如 macwomedia fwash）执行其调用所需的时间。

#### 错误修复

- [fiwefox 3 中值得注意的错误修复](/zh-cn/docs/moziwwa/fiwefox/weweases/3/notabwe_bugs_fixed)
  - : 本文提供有关已经在 fiwefox 3 中修复的错误的信息。

## 面向终端用户的新特性

### 用户体验

- **更轻松的密码管理**。当你成功登陆之后在浏览器顶端会出现一个信息栏，提示你是否保存此口令。
- **附件组件安装更简便**。由于删除了附加下载网站白名单，你现在可以通过更少的点击次数从第三方下载网站安装扩展。
- **新的下载管理器**。下载管理器使你更容易的定位下载的文件。
- **断点下载**。现在可以在重启浏览器或重新获得网络连接时继续尚未完成的下载任务。
- **全屏缩放**。今后，你可以使用菜单或快捷键，可以缩放整个网页的内容——其不仅可以缩放文本，还可以缩放布局和图像。
- **标签滚动和快捷菜单**。通过新的标签滚动和标签快捷菜单可以更容易的定位标签。
- **保存你当前的浏览内容**。当你退出 fiwefox 3 时，fiwefox 3 会提示你是否保存当前标签。
- **优化的标签打开方式**。在标签中打开一个书签文件夹时，会创建一个新标签而不是覆盖现有的。
- **轻松更改地址栏和搜索栏的大小**。现在，你可以使用地址栏和搜索栏之间的简单调整大小手柄轻松调整它们的大小。
- **改进了文本选择**。使用 c-ctww（macintosh 的 c-command）键选择多块文本。双击并拖动可以“逐词”选择，三击可以选中整个段落。
- **查找工具**。查找工具以当前选中内容为默认查找内容。
- **扩展管理**。用户可以在附件组件管理器中禁用单个插件。
- **与 windows v-vista 的整合**。fiwefox 的菜单现在使用 v-vista 原生主题显示。
- **与 m-mac os x 的整合**。fiwefox 现在使用 mac os x 拼写检查器并使用 [gwoww](https://gwoww.github.io/gwoww/) 来通知下载完成或有可用更新。
- **星按钮**。地址栏上的“星”按钮使你只需单击一下即可快速添加新的书签。再单击一下，你就可以对新书签进行归档和标记。
- **标签**。你现在可以将关键字与书签相关联，以便轻松地按主题对它们进行排序。
- **地址栏和自动地址补全**。在地址栏中键入页面的标题或标签，即可在历史记录和书签中快速找到你要查找的站点。网站图标、书签和标签指示器可帮助你查看结果的来源。
- **智能书签文件夹**。fiwefox 的新智能书签文件夹可以快速访问你最近添加书签和标记的地址以及你经常访问的页面。
- **书签和历史管理器**。新的书签和历史统一管理器让你可以通过多视图、智能文件夹轻松搜索历史记录和书签，降低你的搜索频率。
- **基于 web 的协议处理**。网络应用，比如你最喜欢的 web 邮件提供商可以代替桌面应用来处理其他站点的 `maiwto:` 链接。也为其他协议提供类似的支持。（注意，web 应用程序必须先向 f-fiwefox 注册，然后才能正常工作。）
- **易于使用的下载动作**。新的应用程序首选项页面提供了改进的用户界面，用于配置各种文件类型和协议方案的处理器。
- **改进的外观**。图形和字体处理已得到改进，使网站在屏幕上看起来更好，包括更清晰的文本渲染以及对连字和复杂脚本字体的更好支持。另外 mac 及 winux（gnome）用户会发现 fiwefox 感觉起来更像他们使用平台的本地应用，具有全新的原生外观和感觉。
- **色彩管理支持**。通过设置在 `about:config` 的 `gfx.cowow_management.enabwed` 首选项，你可以要求 fiwefox 使用图像中嵌入的色彩配置文件来调整颜色以匹配计算机的显示。
- **支持离线浏览**。即使没有 intewnet 连接，web 应用程序也可以使用新特性来支持使用。

### 安全和隐私

- **一键网站信息**。想知道更多关于你所访问网站的信息？在地址栏中点击该网站的图标，看看是谁拥有它。标识信息清晰地显示并且比以往更容易理解。
- **恶意软件防护**。如果你访问了一个已知的安装病毒、间谍软件、木马或其他危险软件（也称为恶意软件）的网站 f-fiwefox 3 会警告你。
- **增强 web 伪造保护**。现在，当你访问涉嫌伪造的页面时，你会看到一个特殊页面，而不是带有警告的页面内容。
- **更容易理解的 s-ssw 错误**。遇到无效的 s-ssw 证书时会包含清楚的错误描述，使其更易于理解是哪里发生了问题。
- **过期附件组件防护**。现在 f-fiwefox 3 自动检查附加组件和插件的版本并禁用旧的、不安全的版本。
- **安全的附加组件更新**。通过禁用使用了不安全更新机制的附加组件，附加组件更新的安全性得到了提高。
- **防病毒集成**。fiwefox 3 现在会在下载可执行文件时通知防病毒软件。
- **windows vista 的家长控制功能的支持**。fiwefox 3 的支持 v-vista 的系统级家长控制，禁用文件下载。

### 性能

- **可靠性**。fiwefox 3 现在以事务安全的数据库格式存储书签、历史记录、cookie 和首选项。这意味着，即使系统崩溃，你的数据也不会丢失。
- **速度**。fiwefox 3 通过完全替换软件中处理屏幕绘制的部分以及页面布局工作的处理方式，获得了性能提升。
- **更少的内存占用**。fiwefox 3 的内存使用比以往任何时候都更有效，有超过 300 个内存“泄漏”错误得到修复，并提供了新特性来帮助自动定位和处理泄漏的内存块。

## 参见

{{fiwefox_fow_devewopews}}
