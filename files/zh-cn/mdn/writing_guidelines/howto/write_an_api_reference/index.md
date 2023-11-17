---
title: 如何撰写 API 参考文档
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
---

{{MDNSidebar}}

本篇指南将带你了解在 MDN 上编写 API 参考文档所需的所有知识。

## 做好准备

在实际撰写 API 参考文档前，应该提前准备和计划一些事情。

### 必备知识

假定阅读这篇指南前你已经在如下方面拥有一些适当的知识：

- HTML、CSS 和 JavaScript 等 Web 技术。JavaScript 是最重要的。
- 阅读 Web 技术标准。你需要在撰写 API 文档时，随时翻阅这些资料。

其他知识可以顺路学习到。

### 必备资源

在开始撰写 API 参考文档前，你需要准备：

1. 最新版的标准：无论是 W3C 建议还是早期的编辑草案，你都应该参考 API 规范的最新可用草案（或规范）。往往可以通过在网络上搜索到它们。最新版本通常会从所有版本的规范中链接出来，列在“latest draft”或类似的条目下。
2. 最新版的现代 web 浏览器：这些应该是实验性/alpha 版本，例如 [Firefox Nightly](https://www.mozilla.org/zh-CN/firefox/channel/desktop/) 或 [Chrome Canary](https://www.google.cn/intl/zh-cn/chrome/canary/)，这些版本更有可能支持你所撰写文档的功能。如果你正在为一个新的/实验性的 API 撰写文档，这一点尤其相关。
3. 演示页/博客文章/其他信息：尽可能找到充实的参考信息。
4. 实用的工程人员联系方式：找到一个友好的工程联系人来询问有关规范的问题是非常有用的，这个人可能参与了 API 的标准化或在浏览器中的实现。找到他们的好地方是：

   - 如果你在相关公司工作，可以在内部联系手册中找到。
   - 参与该 API 讨论的公开邮件列表，如 Mozilla 的 [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) 或 W3C 的 [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/) 等列表。
   - 规范本身。如 [Web Audio API 规范](https://webaudio.github.io/web-audio-api/)在最顶部列出了规范的作者和他们的联系方式。

### 花点时间体验 API

在编写 API 文档的过程中，你会多次返回到构建演示的过程，但在开始时花时间熟悉 API 的工作方式是很有用的——了解主要的接口、属性、方法是什么，主要的用例是什么，以及如何用它编写简单的功能。

当一个 API 发生变化时，你需要注意你所参考或学习的现有演示是否已经过时。检查演示中使用的主要结构，看它们是否与最新的规范相一致。它们也可能无法在最新的浏览器中工作，但这并不是一个非常可靠的测试，因为通常情况下，为了向后兼容，旧的功能会继续得到支持。

> **备注：** 如果规范最近被更新了，比如说，一个方法现在被定义得不一样了，但旧的方法在浏览器中仍然有效，那么你通常需要在同一个地方记录这两种方法，这样新旧两种方法都可以得到覆盖。如果你需要帮助，可以参考你找到的演示，或询问工程联系人。

### 建立你需要撰写或更新的页面列表

API 参考一般会包含以下页面。你可以在我们的[页面类型](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types)文章中找到更多关于每个页面包含的内容、示例和模板的细节。在你开始之前，你应该写下你应该创建的所有页面的清单。

1. 概述页
2. 接口页
3. 构造函数页
4. 方法页
5. 属性页
6. 事件页
7. 概念/使用指南页
8. 示例

> **备注：** 在本文中，我们将使用 [Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API) 作为示例。

#### 概述页

概述页是用来描述 API 的作用、它的顶级接口、其他接口中包含的相关功能以及其他高层次的细节的单个页面。它的名称和路径名需要以 API 的名称命名，后接“API”作为结尾。它位于 API 参考的顶层，是 [https://developer.mozilla.org/zh-CN/docs/Web/API](/zh-CN/docs/Web/API) 的直接子页面。

示例：

- 标题：_Web Audio API_
- 路径名：_Web_Audio_API_
- URL：[https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API](/zh-CN/docs/Web/API/Web_Audio_API)

#### 接口页

每个接口也会有自己的页面，描述该接口的目的，列出任何成员（构造函数、方法、属性等），并显示它与哪些浏览器兼容。每个页面的名称和路径名应该是接口的名称，与规范中写的完全一样。每个页面都被放置在 API 参考的顶层，作为 [https://developer.mozilla.org/zh-CN/docs/Web/API](/zh-CN/docs/Web/API) 的一个子页面。

示例：

- 标题：_AudioContext_
- 路径名：_AudioContext_
- URL：[https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext](/zh-CN/docs/Web/API/AudioContext)

- 标题：_AudioNode_
- 路径名：_AudioNode_
- URL：[https://developer.mozilla.org/zh-CN/docs/Web/API/AudioNode](/zh-CN/docs/Web/API/AudioNode)

> **备注：** 我们为接口中出现的每一个成员撰写文档。你应该牢记以下规则：

- 我们要为定义在实现该接口的对象原型上的方法（实例方法），以及定义在实际类本身上的方法（静态方法）撰写文档。在极少数情况下，如果它们都存在于同一个接口上，你应该把它们列在页面上的不同部分（静态方法/实例方法）。通常只有实例方法存在，在这种情况下，你可以把这些方法放在“Methods”标题下。
- 不必为接口的继承属性和方法撰写文档：它们被列在各自的父接口上。不过我们确实暗示了它们的存在。
- 我们确实为定义在 mixin 中的属性和方法撰写文档。请参阅 [mixins 的贡献指南](/zh-CN/docs/MDN/Writing_guidelines/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file#mixins)了解更多细节。
- 如果存在特殊方法，如字符串化方法（`toString()`）和 JSON 化方法（`toJSON()`），也会列出。
- 如果存在具名的构造函数（如 {{domxref("HTMLImageElement")}} 的 `Image()`），也会列出。

#### 构造函数页

每个接口都有 0 个或 1 个构造函数，记录在接口页面的子页面上。它描述了构造函数的目的，并显示了其语法的样子、使用示例、浏览器兼容性信息等。它的路径名是构造函数的名称，与接口名称完全相同，标题是接口名称、点、构造函数名称，然后是括号。

示例：

- 标题：_AudioContext.AudioContext()_
- 路径名：_AudioContext_
- URL：[https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext/AudioContext](/zh-CN/docs/Web/API/AudioContext/AudioContext)

#### 属性页

每个接口都有零个或多个属性，记录在接口页面的子页面上。每个页面都描述了该属性的目的，并显示了其语法的样子、使用示例、浏览器兼容性信息等。它的路径名是属性的名称，标题是接口名称、点，然后是属性名称。

示例：

- 标题：_AudioContext.state_
- 路径名：_state_
- URL: [https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext/state](/zh-CN/docs/Web/API/BaseAudioContext/state)

#### 方法页

每个接口都有零个或多个方法，记录在接口页面的子页面上。每个页面都描述了该方法的目的，并显示了其语法的样子、使用示例、浏览器兼容性信息等。它的路径名是方法的名称，标题是接口名称、点、方法名称，然后是括号。

示例：

- 标题：_AudioContext.close()_
- 路径名：_close_
- URL：[https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext/close](/zh-CN/docs/Web/API/AudioContext/close)
- 标题：_AudioContext.createGain()_
- 路径名：_createGain_
- URL：[https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext/createGain](/zh-CN/docs/Web/API/BaseAudioContext/createGain)

#### 事件页

事件页往往作为其目标接口的子页面，并使用 _eventname_\_event 路径名，标题设置为 `Interface：eventName 事件`。

不要为 `on` 事件处理程序属性创建页面。在 `eventName_event` 页面上提及访问事件的两种方式。

示例：

- 标题：XRSession：end 事件
- 路径：end_event
- URL：[https://developer.mozilla.org/zh-CN/docs/Web/API/XRSession/end_event](/zh-CN/docs/Web/API/XRSession/end_event)

#### 概念/指南页

大多数 API 参考资料至少有一个指南，有时还有一个概念页与之配套。至少，一个 API 参考资料应该包含一个名为“Using _name-of-api_”的指南，它将提供一个关于如何使用 API 的基本指南。更复杂的 API 可能需要多个使用指南来解释如何使用 API 的不同方面。

如果需要，你也可以包括一篇名为“_name-of-api_ concepts”的概念文章，它将提供与 API 相关的任何概念背后的理论解释，开发人员应该理解这些概念以有效使用它。

这些文章都应该作为 API 概述页面的子页面来创建。例如，Web 音频有四篇指南和一篇概念文章：

- [https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/zh-CN/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/zh-CN/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API/Porting_webkitAudioContext_code_to_standards_based_AudioContext](/zh-CN/docs/Web/API/Web_Audio_API/Migrating_from_webkitAudioContext)
- [https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### 示例

你应该创建一些例子，至少展示 API 的最常见的使用情况。你可以把这些放在适当的地方，推荐的地方是 [MDN GitHub 仓库](https://github.com/mdn/)。

#### 把它们都列出来

创建一个所有这些子页面的列表是跟踪它们的一个好方法。比如说：

- Web_Audio_API
- AudioContext

  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - ...
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - ...

- AudioNode

  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - ...
  - AudioNode.connect(Param)
  - ...

- AudioParam
- Events (update list)

  - start
  - end
  - …

列表中的每个接口都有一个单独的页面，作为 `https://developer.mozilla.org/zh-CN/docs/Web/API` 的子页面；例如，{{domxref("AudioContext")}}的文件将位于 `https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext`。每个[接口页](#接口页)解释该接口的作用，并提供构成该接口的方法和属性的列表。然后每个方法和属性都被记录在自己的页面上，该页面被创建为其所属接口的一个子页面。例如，{{domxref("BaseAudioContext/currentTime")}} 被记录在 `https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext/currentTime`。

## 创建页面

现在，根据下面的结构创建你需要的页面。我们的 [MDN 内容 README](https://github.com/mdn/content#adding-a-new-document) 包含创建新文件的说明，我们的[页面类型](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types)指南包含进一步的例子和可能有用的页面模板。

### 概述页的结构

API 着陆页的长度会有很大的不同，这取决于 API 有多大，但它们都有基本相同的功能。参见 [https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API](/zh-CN/docs/Web/API/Web_Audio_API)，了解大型着陆页的示例。

着陆页的页面特征概述如下：

1. **描述**：着陆页的第一段应该对 API 的总体目的进行简短而准确的描述。
2. **概念和使用方法部分**：下一节的标题应该是“\[API 名称]的概念和用法”，并概述该 API 提供的所有主要功能，它解决了什么问题，以及它是如何工作的。所有这些都是高层次的。这一节应该相当简短，不要涉及到代码或具体的实施细节。
3. **接口列表**：这一部分的标题应该是“\[API 名称]接口”，并提供指向构成 API 的每个接口的参考页面的链接，以及每个接口的简短描述。关于创建新页面的更快方法，请参见“用 \\{{domxref}} 宏引用其他 API 功能”一节。
4. **示例**：这一部分应该展示一两个简单的 API 使用案例。
5. **标准表格**: 在这一点上，你需要包含一个规范表格——详见“创建一个规范参考表格”部分。
6. **浏览器兼容性**：现在你需要包含一个浏览器兼容性表格。详见[兼容性表](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)指南。
7. **参见**：“参见”部分可以包括在学习这项技术时可能有用的进一步链接，包括 MDN（和外部）的教程、例子、库等。

### 接口页的结构

现在你应该准备好开始撰写你的接口页了。每个接口参考页都应该遵守以下结构：

1. **\\{{APIRef}}**：在每个界面页面的第一行中包含 \\{{APIRef}} 宏，将 API 的名称作为参数，例如 \\{{APIRef("Web Audio API")}}。这个宏的作用是在界面页面的左侧构建一个参考菜单，包括属性和方法，以及 [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) 宏中定义的其他快速链接（请人将你的 API 添加到现有的 GroupData 条目中，或者，如果它还没有被列在那里。则创建一个新的）。该目录实际看起来像这张截图一样。
   ![这个截图显示了由 APIRef 宏生成的 OscillatorNode 接口的垂直导航菜单，其中有方法和属性的多个子列表](apiref-links.png)
2. **标准化状态**：接下来应该添加表示标准化状态的横幅宏（这些横幅宏可以与 \\{{APIRef}} 宏放在同一行）：

   - 对于实验性功能（也就是说，还没处于候选推荐〔CR〕级别），使用 \\{{SeeCompatTable}}
   - \\{{Deprecated_header}}
   - \\{{Non-standard_header}}

3. **描述**：接口页面的第一段应该对接口的总体目的进行简短的描述。如果需要额外的描述，你也可以多写几段。如果这个接口实际上是一个字典，你应该用这个术语而不是“接口”。
4. **继承图**：使用 [`\{{InheritanceDiagram}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/InheritanceDiagram.ejs) 宏来嵌入接口的 SVG 继承图。
5. **属性列表、方法列表**：这些部分的标题应该是“Properties”和“Methods”，并使用 \\{{domxref}} 宏提供到该接口的每个属性/方法的参考页的链接，以及每个属性/方法的描述。这些应该用[描述/定义列表](/zh-CN/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#定义列表)来标注。每个描述都应该是短小精悍的，尽可能使用一句话进行概括。参见“用 \\{{domxref}} 宏引用其他 API 功能”一节，以了解创建其他页面链接的更快方法。

   在这两部分的开头，在属性/方法列表的开始之前，用适当的斜体句子表示继承性：

   - _This interface doesn't implement any specific properties, but inherits properties from \\{{domxref("XYZ")}}, and \\{{domxref("XYZ2")}}._（_本接口不实现任何特定属性，但是从 \\{{domxref("XYZ")}} 和 \\{{domxref("XYZ2")}} 继承属性。_）
   - _This interface also inherits properties from \\{{domxref("XYZ")}}, and \\{{domxref("XYZ2")}}._（_本接口也从 \\{{domxref("XYZ")}} 和 \\{{domxref("XYZ2")}} 继承属性。_）
   - _This interface doesn't implement any specific methods, but inherits methods from \\{{domxref("XYZ")}}, and \\{{domxref("XYZ2")}}._（_本接口不实现任何特定方法，但是从 \\{{domxref("XYZ")}} 和 \\{{domxref("XYZ2")}} 继承方法。_）
   - _This interface also inherits methods from \\{{domxref("XYZ")}}, and \\{{domxref("XYZ2")}}._（_本接口也从 \\{{domxref("XYZ")}} 和 \\{{domxref("XYZ2")}} 继承方法。_）

   > **备注：** 只读属性应该使用 \\{{ReadOnlyInline}} 宏，它可以创建一个漂亮的“只读”徽章，与它们的 \\{{domxref}} 链接在同一行（如果需要使用 \\{{experimentalInline}}、\\{{non-standard_Inline}} 和 \\{{deprecatedInline}} 宏，则需要放置在它们之后）。

6. **示例**：包括一个代码清单，以显示 API 的主要功能的典型用法。你不应该列出所有的代码，而应该列出其中一个有趣的子集。对于一个完整的代码清单，你可以参考包含完整示例的 [GitHub](https://github.com/) 仓库，你也可以链接到使用 [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) 功能创建的实时示例（当然，只要它只使用客户端代码）。如果该示例是可视化的，你也可以使用 MDN [实时示例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples)功能，使其在页面上实时播放。
7. **标准表格**：此时你需要包含一个标准表格——参见“创建规范参考表格”一节以获得更多信息。
8. **浏览器兼容性**：现在你需要包含一个浏览器兼容性表格——参见[兼容性表格](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)以获得更多细节。
9. **Polyfill**：如果合适的话，包括这一部分，提供一个 polyfill 的代码，使 API 即使在没有实现它的浏览器上也能使用。如果不存在或不需要 polyfill，则完全不需要这一部分。
10. **参见**：“参见”部分是一个可以包含在学习这项技术时可能有用的进一步链接的好地方，包括 MDN（和外部）教程、示例、图书馆等。我们对链接到外部资源有一个宽松的政策，但要注意：

    - 不要包括与 MDN 中另一个页面信息相同的页面，而是链接到该页面。
    - 不要写作者的名字——我们是一个作者中立的文档网站。链接到那个文档，作者的名字将显示在那里。
    - 要特别注意博客文章：它们往往会过时（旧的语法，错误的兼容信息）。只有当它们有明显的附加价值，而在维护的文件中又找不到时，才可以链接到它们。
    - 不要使用“参见......了解更多信息”或“点击......”这样的行动动词，你不知道你的读者是否能够看到，或点击链接（如在纸质版文件上）。

#### 接口页示例

以下是接口页的示例：

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 上的 {{domxref("Request")}}。
- [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API) 上的 {{domxref("SpeechSynthesis")}}。

### 属性页的结构

将你的属性页创建为它们所实现的接口的子页。复制另一个属性页的结构，作为你新页面的基础。

编辑属性页名称，以遵循 `Interface.property_name` 惯例。

属性页必须具有如下部分：

1. **标题**：页面的标题必须为 **InterfaceName.propertyName**。接口名称必须以大写字母开头。尽管接口在 JavaScript 中是在对象的原型上实现的，但我们不会像在 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)中那样，在标题中包括`.prototype.`。
2. **\\{{APIRef}}**：在每个属性页的第一行中包含 \\{{APIRef}} 宏，将 API 的名称作为参数，例如 \{{APIRef("Web Audio API")}}。这个宏的作用是在界面页面的左侧构建一个参考菜单，包括属性和方法，以及 [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) 宏中定义的其他快速链接（请人将你的 API 添加到现有的 GroupData 条目中，或者，如果它还没有被列在那里。则创建一个新的）。该目录实际看起来像这张截图一样。
   ![这个截图显示了由 APIRef 宏生成的 OscillatorNode 接口的垂直导航菜单，其中有方法和属性的多个子列表](apiref-links.png)
3. **标准化状态**：接下来应该添加表示标准化状态的横幅宏（这些横幅宏可以与 \\{{APIRef}} 宏放在同一行）：

   - 对于实验性功能（也就是说，还没处于候选推荐〔CR〕级别），使用 \\{{SeeCompatTable}}
   - \\{{Deprecated_header}}
   - \\{{Non-standard_header}}

4. **描述**：属性页的第一段应该对属性的总体目的提供一个简短的、扼要的描述。如果需要任何额外的描述，你可能还想再包括几段。要包括的额外信息是它的默认/初始值，以及它是否是只读的。第一句话的结构必须是：

   - 对于只读属性
     - : The **`InterfaceName.property`** read-only property returns a \\{{domxref("type")}} that...
   - 对于其他属性
     - : The **`InterfaceName.property`** property is a \\{{domxref("type")}} that…

   > **备注：** `InterfaceName.property` 需要使用 `<code>` 包裹，并且应当在首次使用时加粗（`<strong>`）。

5. **值**：Value 部分将包含属性值的描述。这应该包含该属性的数据类型，以及它所代表的内容。关于其示例，详见 {{domxref("SpeechRecognition.grammars")}}。

6. **示例**: 包括一个代码清单，以显示有关属性的典型用法。你应该从一个简单的例子开始，说明如何创建该类型的对象以及如何访问该属性。更复杂的例子可以在这样一个例子之后添加。在这些额外的例子中，不要列出所有的代码，你应该列出其中有趣的子集。对于完整的代码列表，你可以参考包含完整例子的 [GitHub](https://github.com/) 仓库，你也可以链接到使用 [GitHub gh-pages 功能](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)创建的实时示例（只要它只使用客户端代码）。如果例子是可视化的，你也可以使用 MDN 的[运行实例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples)功能来使它在页面上实时播放。
7. **标准表格**：此时你需要包含一个标准表格——参见“创建规范参考表格”一节以获得更多信息。
8. **浏览器兼容性**：现在你需要包含一个浏览器兼容性表格——参见[兼容性表格](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)以获得更多细节。
9. **参见**：“参见”部分是一个可以包含在学习这项技术时可能有用的进一步链接的好地方：比如受此属性变化影响的方法和属性，或者与此相关的事件。在学习这项技术时，可以添加更多有用的链接，包括 MDN（和外部）的教程、示例、库......，尽管考虑将它们添加到接口参考页上可能是有用的。

#### 属性页示例

以下是属性页的示例：

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 上的 {{domxref("Request.method")}}。
- [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API) 上的 {{domxref("SpeechSynthesis.speaking")}}。

## 方法页的结构

将你的方法页创建为它们所实现的接口的子页。复制另一个方法页的结构，作为你新页面的基础。

方法页需要包含以下部分：

1. **标题**: 页面的标题必须为 **InterfaceName.method()**（含有一对英文括号），但页面路径名不能包含括号。另外，接口名称必须以大写字母开头。尽管接口在 JavaScript 中是在对象的原型上实现的，但我们不会像在 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)中那样，在标题中包括 `.prototype.`。
2. **\\{{APIRef}}**：在每个方法页的第一行中包含 \\{{APIRef}} 宏，将 API 的名称作为参数，例如 \\{{APIRef("Web Audio API")}}。这个宏的作用是在界面页面的左侧构建一个参考菜单，包括属性和方法，以及 [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) 宏中定义的其他快速链接（请人将你的 API 添加到现有的 GroupData 条目中，或者，如果它还没有被列在那里。则创建一个新的）。该目录实际看起来像这张截图一样。
   ![这个截图显示了由 APIRef 宏生成的 OscillatorNode 接口的垂直导航菜单，其中有方法和属性的多个子列表](apiref-links.png)
3. **标准化状态**：接下来应该添加表示标准化状态的横幅宏（这些横幅宏可以与 \\{{APIRef}} 宏放在同一行）：

   - 对于实验性功能（也就是说，还没处于候选推荐〔CR〕级别），使用 \\{{SeeCompatTable}}
   - \\{{Deprecated_header}}
   - \\{{Non-standard_header}}

4. **描述**：方法页的第一段应该对该方法的首要目的进行简短的描述。如果需要额外的描述，你可能还想多写几段。明显需要包括的额外信息是它的默认参数值，该方法所依赖的任何理论，以及参数值的作用。

   - 第一句话的开头必须遵循这样的结构：
     - : The **InterfaceName.method()** method interface ...

   > **备注：** `InterfaceName.method()` 需要使用 `<code>` 包裹，并且应当在首次使用时加粗（`<strong>`）。

5. **语法**：语法部分应该包括一个 2-3 行的例子——通常只是构建接口，然后调用接口方法。

   - 语法应该是类似于这样的结构：
     - : method(param1, param2, …)

   语法部分应包括三个小节（见 {{domxref("SubtleCrypto.sign()")}} 的例子）：

   - “参数”：本部分内容应该包含一个定义列表（或无序列表），用来列出和描述该方法的不同参数。如果是可选参数，应该在参数名称旁边加入 \{{optional_inline}} 宏。如果没有参数，这部分应该省略。
   - “返回值”：本部分内容应该说明该方法的返回值，是一个简单的值（如双精度浮点数或布尔值），还是一个更复杂的值（如另一个接口对象）。在这种情况下，你可以使用 \{{domxref}} 宏来链接到涵盖该接口的 MDN API 页面（如果存在的话）。一个方法可能什么都不返回，在这种情况下，返回值应该写成“\\{{jsxref('undefined')}}”，在实际渲染的页面中看起来会是这样：{{jsxref("undefined")}}。
   - “异常”：本部分内容应该列出在调用该方法时可能引发的不同异常，以及导致这些异常的情况。如果没有异常，这一节应该被省略。

6. **示例**：包括一个代码清单，以显示有关方法的典型用法。不要列出所有的代码，你应该列出一个有趣的子集。对于完整的代码清单，你应该引用包含完整例子的 [GitHub](https://github.com/) 仓库，你也可以链接到使用 [GitHub gh-pages 功能](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)创建的实时示例（只要它只使用客户端代码）。如果例子是可视化的，你也可以使用 MDN 的[运行实例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples) 功能来使它在页面中实时播放。
7. **标准表格**：此时你需要包含一个标准表格——参见“创建规范参考表格”一节以获得更多信息。
8. **浏览器兼容性**：现在你需要包含一个浏览器兼容性表格——参见[兼容性表格](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)以获得更多细节。

### 方法页示例

以下是方法页的示例：

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API) 上的 {{domxref("Document.getAnimations()")}} 方法。
- [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 上的 {{domxref("GlobalFetch.fetch()")}} 方法。

## 侧边栏

一旦你创建了你的 API 参考页面，你要在上面插入正确的侧边栏，把这些页面联系在一起。我们的 [API 参考侧边栏](/zh-CN/docs/MDN/Writing_guidelines/Howto/Write_an_API_reference/Sidebars)指南解释了如何操作。
