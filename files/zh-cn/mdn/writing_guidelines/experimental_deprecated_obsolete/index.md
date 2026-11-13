---
title: 实验性、已弃用和过时
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
---

这些术语通常与技术和规范相关联，还用于在 MDN Web 文档上标记技术的状态。对于这些术语的定义，MDN Web 文档与[浏览器兼容性数据（BCD）](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)仓库保持一致。下文描述了这些术语以及它们应在 MDN Web 文档的哪些上下文中使用。

## 实验性

当一项技术在 MDN Web 文档中被描述为实验性（experimental）时，这意味着该技术是新出现且不成熟的，目前*正在*被添加到 web 平台（或正在考虑添加）。将一项技术标记为实验性表明读者在任何生产项目（即不仅仅是演示或实验的项目）中使用该技术之前应该谨慎考虑。鼓励读者[尝试实验性特性](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)并向浏览器供应商和标准作者提供反馈。

如果适用以下一项或多项条件，则将其标记为**实验性**的技术：

- 它**仅在一个**现代主流浏览器渲染引擎的发行版本中被默认实现和启用。
- 它仅通过更改配置（如首选项或标志）而被支持，无论支持的渲染引擎数量。
- 它的定义规范可能会以不兼容的方式发生重大变化（即，它可能会破坏依赖该特性的现有代码）。

> [!NOTE]
> 仅在一个渲染引擎上发布的特性，仍被视为是实验性的，即使在其他渲染引擎的预览版本中也可用（或通过设置首选项或标志）。

如果满足以下一项或多项条件，则技术可能不再是**实验性**状态：

- 它在**两个或更多**主流浏览器渲染引擎中被默认支持。
- 它在一个浏览器渲染引擎中默认支持两年或更长时间，并且没有发生重大变化。
- 它的定义规范不太可能以破坏兼容性的方式发生变化。

有关这些条件的示例，请参阅 BCD 文档：[实验性标志](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)。

通常，如果一项技术被多个主流浏览器支持，则其规范将变成稳定的，但并非总是如此。另一方面，有些技术可能有一个稳定的规范，但没有被浏览器原生支持。例如，[IMSC](/zh-CN/docs/Related/IMSC) 需要通过 JavaScript polyfill 使用。

作为现行规范或标准化流程的一部分且未标记为**已弃用**的特性或技术被认为处于**标准跟踪**（standard track）状态。

## 已弃用

MDN Web 文档中的**已弃用**（deprecated）术语用于标记不再推荐使用的 API 或技术。已弃用的 API 或技术可能会在将来被删除，也可能出于兼容性目的而保留，且仍然可以使用。我们建议避免使用已弃用的功能。

有关**已弃用**定义的更多信息，请参阅 BCD 文档中的[已弃用标志](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)。

## 过时

在 MDN Web 文档中，术语**过时**（obsolete）曾被用于指示不再推荐使用的 API 或技术，且已不在浏览器中实现。由于**过时**和**已弃用**之间的区别并不是很有用，因此我们不再在 MDN Web 文档中使用**过时**一词。

> [!NOTE]
> 如果你遇到任何**过时**的实例，应将其删除或替换为术语**已弃用**。

## 删除内容指南

有时，在新规范的开发过程中，或在 HTML 等动态标准（living standard）的发展过程中，会向规范中添加新元素、方法、属性等，保留一段时间，然后再删除。有时这种情况发生得很快，有时这些新项目在规范中保留了几个月甚至几年，然后才被删除。这可能会使人们很难决定如何处理从规范中删除的项目。

以下是相关的指南，可帮助你决定在规范中删除某些内容时应该做些什么。

> [!NOTE]
> 出于以下讨论的目的，术语“项目”用于表示规范中的任何内容：元素或元素的属性、接口或任何单独的方法、属性或接口的其他成员等。

### 如果该项目从未被实现

如果该项目*从未*在*任何*浏览器的发行版本中（甚至是通过首选项或标志）实现过，请从文档中删除对该项目的任何引用。

- 如果该项目有任何仅描述该项目的文档页面（例如 {{domxref("RTCPeerConnection.close()")}}），请删除该页面。
  如果被删除的项目是一个接口，则意味着删除描述该接口的属性和方法的任何子页面。
- 从属性、方法、接口等的任何列表中删除该项目。例如，对于接口的方法，这意味着从接口概述页面的“方法”部分中删除它。
- 在该接口、元素等的概述页面中搜索文本，查找对已删除项目的任何引用。删除这些引用，确保不会在文本中留下奇怪的语法问题或其他问题。这可能不仅意味着删除单词，还要重写句子或段落，使其更有意义。如果对该项目的使用描述很长，这也可能意味着删除整个内容部分。
- 同样，在与相关 API 或技术有关的指南和教程中查找对该项目的讨论。删除这些引用，确保不会在文本中留下奇怪的语法问题或其他问题。这可能不仅意味着删除单词，还要重写句子或段落，使其更有意义。如果对该项目的使用描述很长，这也可能意味着删除整个内容部分。
- 搜索 MDN Web 文档以获取对已删除项目的引用，以防有其他地方的讨论。这种情况不太可能发生，因为如果从未实现，那么不太可能被广泛讨论。请同样删除这些提及的内容。
- 如果[浏览器兼容性数据仓库](https://github.com/mdn/browser-compat-data)中的 JSON 文件包含已删除项目的数据，请从 JSON 代码中删除这些对象，并提交一个拉取请求（pull request），在提交消息和拉取请求的描述中解释原因。在执行此操作时，请注意检查是否破坏了 JSON 语法。

### 如果该项目在浏览器中是通过标志实现的

如果该项目在任何一个或多个浏览器的任意发行版本中实现，但*仅*通过首选项或标志启用，请不要立即从文档中删除该项目。而是将该项目标记为**已弃用**（deprecated），如下所示：

- 如果该项目有任何仅描述该项目的文档页面（例如 {{domxref("RTCPeerConnection.close()")}}），请在页面顶部添加 [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs) 宏，并在元数据中添加以下 `status:` 条目：

  > [!NOTE]
  > 本地化文档中并不需要添加 `status` 元数据（同样适用于下文），文档构建系统会自动合并来自英文文档的元数据。参见[针对 MDN 文档的本地化指南](https://github.com/mdn/translated-content/blob/main/docs/zh-cn/translation-guide.md#元数据)，以了解更多信息。

  ```yaml
  status:
    - deprecated
  ```

- 在该元素、接口或 API 的概述页面中搜索文本，查找包含已从规范中删除的项目的任何项目列表，并在该列表中的项目名称后添加 [`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) 宏。
- 搜索该接口、元素等的概述页面的提示性文本，查找对已删除项目的任何引用。在适当的位置添加警告框，其中包含以下文本：“\[item] 已从规范中删除，并将很快从浏览器中删除。请参阅 \[link to page] 以了解实现相同功能新的方法。”
- 同样，在与相关 API 或技术有关的指南和教程中查找对该项目的讨论。添加类似的警告。
- 搜索 MDN Web 文档以获取对已删除项目的引用，以防有其他地方的讨论。在那里也添加类似的警告框。
- 在未来的某个时间点，可能会决定从文档中删除该项目；我们通常不这样做，但如果该项目基本不被使用或不受人们关注，我们可能会决定这样做。
- 更新[浏览器兼容性数据仓库](https://github.com/mdn/browser-compat-data)中的任何相关条目，以反映受影响的项目已经过时。

### 如果该项目在浏览器中是默认实现的

如果该项目在一个或多个浏览器的任何发行版本中实现，而不需要通过首选项或标志，请将该项目标记为**已弃用**（deprecated），如下所示：

- 如果该项目有任何仅描述该项目的文档页面（例如 {{domxref("RTCPeerConnection.close()")}}），请在页面顶部添加 [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs) 宏，并在元数据中添加以下 `status:` 条目：

  ```yaml
  status:
    - deprecated
  ```

- 在该元素、接口或 API 的概述页面中搜索文本，查找包含已从规范中删除的项目的任何项目列表，并在该列表中的项目名称后添加 [`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) 宏。
- 搜索该接口、元素等的概述页面的提示性文本，查找对已删除项目的任何引用。在适当的位置添加警告框，其中包含以下文本：“\[item] 已从规范中删除，并将很快从浏览器中删除。请参阅 \[link to page] 以了解实现相同功能新的方法。”
- 同样，在与相关 API 或技术有关的指南和教程中查找对该项目的讨论。添加类似的警告。
- 搜索 MDN Web 文档以获取对已删除项目的引用，以防有其他地方的讨论。在那里也添加类似的警告框。
- 如果有的话，这些项目不太可能很快从文档中删除。
- 更新[浏览器兼容性数据仓库](https://github.com/mdn/browser-compat-data)中的任何相关条目，以反映受影响的项目已被弃用。

请用常识来处理上述指南中警告消息和对文本的其他修改。不同的项目需要不同的措辞和处理方式。如果有疑问，请随时在 [MDN Web 文档聊天室](/zh-CN/docs/MDN/Community/Communication_channels#聊天室)中寻求建议。

## 记录规范冲突指南

有时（但很少），不同的规范版本之间可能存在冲突（通常是 W3C 与 WHATWG 之间）。例如，一个版本可能将某个特性列为已弃用，而另一个版本则没有。在这种情况下，请考虑现实情况，也就是考虑浏览器实际上正在做什么，并编写一个“重要”备注来总结最新状态。例如，截至 2019 年 1 月，[`inputmode`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/inputmode) 全局属性存在冲突，可以这样总结：

> [!WARNING]
> 规范冲突：WHATWG 规范列出了 [`inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode)，且现代浏览器正在尝试支持它。而 [W3C HTML 5.2 规范](https://html.spec.whatwg.org/multipage/index.html#contents)不再将其列出（即将其标记为过时）。在达成共识之前，你应该将 WHATWG 定义视为正确。
