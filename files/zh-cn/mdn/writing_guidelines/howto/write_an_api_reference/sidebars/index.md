---
title: API 参考侧边栏
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: fc7310a85a8e6d5c0677dfaffba9b8fbbadc94a9
---

你可以在 API 参考页面上包含一个自定义侧边栏，以便它显示与该 API 相关的接口、教程和其他资源的链接。本文介绍了如何实现。

## 创建侧边栏

你需要完成以下三个步骤来创建你的 API 侧边栏：

1. 创建你的 API 参考页面。
2. 将你的特定 API 的条目添加到 [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) 文件中。
3. 使用 [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) 宏将侧边栏插入到你想要显示它的每个页面中。

让我们依次介绍这三个步骤。本文中我们将以 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 为示例。

### 向 GroupData.json 添加条目

`GroupData.json` 文件包含与 API 参考侧边栏中应显示的链接相关的所有数据。在 `APIRef` 宏被调用时，需要将一个 API 名称作为参数传递给它，然后它会在 `GroupData.json` 中查找该名称，构建一个适当的侧边栏，并将其插入到页面中。

要在 `GroupData.json` 中添加条目，你需要：

1. 确保你有一个 [GitHub](https://github.com/) 账户。
2. 复刻（fork）MDN 内容（content）仓库，再创建一个新的分支来包含你的更改，并将仓库克隆到本地。
3. 在开始工作前，签出（checkout）你的新分支，并在完成工作后确保你将更改推送到该分支。
4. 创建拉取请求（pull request），以便 MDN 团队可以审查你的工作，并在必要时提出更改。

`GroupData.json` 文件可以在 `files/jsondata/` 目录中找到。查看该文件，你会看到一个巨大的 JSON 结构，其中每个 API 都有自己的成员。名称为 API 名称，值为一个对象，其中包含定义要创建的侧边栏链接的几个子成员。

例如，查看 MDN 上的 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 页面。在 `GroupData.json` 中对应的条目如下所示：

```json
"Fetch API": {
    "overview":   [ "Fetch API"],
    "interfaces": [ "Headers",
                    "Request",
                    "Response",
                    "FetchController",
                    "FetchObserver",
                    "FetchSignal",
                    "ObserverCallback" ],
    "methods":    [ "fetch()" ],
    "properties": [],
    "events":     []
},
```

如你所见，我们将“Fetch API”作为名称，其对象值中包含了许多子成员。

#### GroupData 条目中包含的子成员

此部分列出了你可以在 `GroupData` 条目中包含的所有子成员。

注意，列在列出的子成员中的大部分值都等同于链接文本，以及附加到主 API 索引页面（`https://developer.mozilla.org/<language-code>/docs/Web/API`）的末尾的别名（slug）以创建显示的链接的最终 URL。因此，例如，“Response”将创建如下链接：

```html
<li><a href="/zh-CN/docs/Web/API/Response">Response</a></li>
```

这也有些例外。例如，“guides”子成员包含指向与指南/教程相关的 URL。在这种情况下，URL 将附加到 MDN 文档根路径（`https://developer.mozilla.org/<language-code>`）的末尾，因而允许包含 MDN 上任何位置的文章。

以下是可用的成员。这些都是可选的，但强烈建议你不要省略它们，而是包含空数组。

1. `"overview"`——该值是一个数组，如果有的话，请在其中包含 API 概述页面的别名（slug）。“Fetch API”会创建如下链接：[https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API](/zh-CN/docs/Web/API/Fetch_API)。
2. `"interfaces"`——该值是一个数组，你应该在其中列出组成该 API 的所有接口。“Response”会创建如下链接：[https://developer.mozilla.org/zh-CN/docs/Web/API/Response](/zh-CN/docs/Web/API/Response)。
3. `"methods"`——该值是一个数组，其中应包含由规范添加的与其他 API 相关的接口的任何方法，例如在 {{domxref("Navigator")}} 或 {{domxref("Window")}} 上创建的实例化方法。如果有大量的方法，你可能需要考虑只列出最受欢迎的方法，或者将它们放在列表的前面。“fetch()”会创建如下链接：[https://developer.mozilla.org/zh-CN/docs/Web/API/fetch](/zh-CN/docs/Web/API/Window/fetch)。请*不要*列出属于同一 API 拥有的接口的成员方法。
4. `"properties"`——该值是一个数组，其中应包含与 API 相关的所有属性。这可以包括 API 规范中定义的接口的成员属性，以及 API 在其他接口上定义的属性。如果有大量的属性，你可能需要考虑只列出最受欢迎的属性，或者将它们放在列表的前面。“Headers.append”会创建如下链接：[https://developer.mozilla.org/zh-CN/docs/Web/API/Headers/append](/zh-CN/docs/Web/API/Headers/append)。
5. `"events"`——该值是一个数组，其中应包含属于 API 而定义它的接口又*不*属于该 API 的事件的*标题*（属于 API 的接口（`interfaces`）中的事件会被默认记录）。如果有大量的事件，你可能需要考虑只列出最受欢迎的事件，或者将它们放在列表的前面。例如，`"Document: selectionchange"` 属于 [Selection API](/zh-CN/docs/Web/API/Selection_API)，但 `Document` 并不属于，所以我们将该事件添加到数组中，[Selection API](/zh-CN/docs/Web/API/Selection_API) 主题会链接到该事件。
6. `"guides"`——该值是一个字符串数组，其中的每一个都是涉及解释如何使用该 API 的指南的主题。这些字符串包含了指南 URL 在语言路径之后的部分：即，指南 URL 的 `/docs/...` 部分。例如，要链接到位于 `https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch` 的主题“使用 Fetch”，指南数组中需要包含“/docs/Web/API/Fetch_API/Using_Fetch”。
7. `"dictionaries"`——该值是一个字符串数组，其中列出了 API 的所有字典。通常，只有被多个属性或方法使用的字典才应该在此列出，除非它们具有特殊意义或可能需要从多个页面引用。“CryptoKeyPair”会创建如下链接：[https://developer.mozilla.org/zh-CN/docs/Web/API/CryptoKeyPair](/zh-CN/docs/Web/API/CryptoKeyPair)。
   > [!NOTE]
   > MDN 正在逐步停止单独记录字典。在可能的情况下，这里现在描述的是使用了它们的对象。
8. `"types"`——该值是一个数组，其中包含 API 定义的 typedef 和枚举类型。你可以选择只列出那些特别重要的或被多个页面所引用的类型，以便保持列表的简洁。
   > [!NOTE]
   > MDN 正在逐步停止单独记录 typedef。在可能的情况下，这里现在描述的是使用了它们的值。
9. `"callbacks"`——该值是一个数组，其中包含 API 定义的所有回调类型的列表。你可能会发现即使是在包含回调类型的 API 上，也根本不需要使用这个组别，因为它们通常不适合单独记录。

## 侧边栏使用的标签

一些子成员是根据页面标签自动发现的。在顶级 API 下的页面在每次渲染侧边栏时都会被抓取，然后会自动创建方法（“Method”标签）、属性（“Property”标签）和构造函数（“Constructor”标签）的条目。

子成员会根据标签自动添加警告图标：为实验性（“Experimental”标签）、非标准（“Non Standard”或“Non-standard”标签）或已弃用（“Deprecated”标签）的子成员添加特定的图标。

有关基于标签的处理的更多信息，请参阅 [APIRef 源代码](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs)。

## 插入侧边栏

在你将 API 条目添加到 `GroupData.json` 中，并将其作为拉取请求提交且更改已被主仓库接受后，你可以使用 [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) 宏（该宏以你在 GroupData 中为 API 使用的名称作为参数），将其包含在 API 参考页面中。例如，通过以下内容为 [WebVR API](/zh-CN/docs/Web/API/WebVR_API) 添加侧边栏：

```plain
\{{APIRef("WebVR API")}}
```
