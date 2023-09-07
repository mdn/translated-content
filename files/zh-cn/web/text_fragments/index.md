---
title: 文本片段
slug: Web/Text_fragments
---

**文本片段**（Text Fragment）允许你直接链接到 web 文档中的特定文本部分，而不需要作者使用 URL 片段中的特定语法对其进行注释。支持的浏览器可以自由选择如何引起对链接文本的注意，例如，用颜色突出显示和/或滚动到页面上的内容。文本片段允许 web 内容作者与他们不控制的其他内容进行深度链接，而不需要依赖 ID 的存在来实现，在这一点上它很有用途。在此基础上，它可以用来生成更有效的内容共享链接，让用户相互传递。

## 概念和用法

从历史上来看，网络的关键特征之一一直是在不同文档间提供链接的能力——这就是让*网络*具有更强的互联作用的原因。

- 你可以通过文档的 URL 链接到其页面顶部，如：
  - [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a](/zh-CN/docs/Web/HTML/Element/a)
- 你可以通过文档的 URL 加上其*文档片段*（ID）链接到某一个特定的章节，如：
  - [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#浏览器兼容性](/zh-CN/docs/Web/HTML/Element/a#浏览器兼容性)

链接到特定的文档片段的问题是，链接页面的作者需要把一个锚放在那里，以便*实际地*链接到。上面的第二个例子链接到一个 {{htmlelement("Heading_Elements", "h2")}} 元素，ID 为`浏览器兼容性`：

```html
<h2 id="浏览器兼容性">
  <a href="#浏览器兼容性">浏览器兼容性</a>
</h2>
```

如果 ID 被改变或删除，文档片段就会被忽略，而链接只是链接到页面的顶部。这在优雅降级方面是合理的，但如果链接的作者能够完全控制它们链接到哪里，而不需要依赖页面作者，那可以说是更好的。

**文本片段**使这个想法成真——它们允许链接作者以灵活的方式指定要链接的文本内容，而不是文档片段。

## 语法

与文档片段行为类似，文本片段被附加到 URL 的哈希符号（`#`）后。但语法有轻微不同：

```
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

- `:~:`
  - : 又称*片段指令*，这一连串的字符告诉浏览器，接下来是一个或多个用户代理指令，这些指令在加载过程中会从 URL 中剥离，以便作者脚本不能直接与之交互。用户代理指令（instruction）也被称为指令（directive）。
- `text=`
  - : 一段文本指令。为浏览器提供了一个文本片段，定义了在链接文档中要链接的文本。
- `textStart`
  - : 一个文本字符串，指定链接文本的开始。
- `textEnd` {{optional_inline}}
  - : 一个文本字符串，指定链接文本的结束。
- `prefix-` {{optional_inline}}
  - : 一个文本字符串，后面是一个连字符，指定链接文本前面应该有什么文本。这有助于浏览器在有多个匹配的情况下选择正确的链接文本。
- `-suffix` {{optional_inline}}
  - : 一个连字符，后面是一个文本字符串，指定链接文本后面应该有什么文本。这有助于浏览器在有多个匹配的情况下选择正确的链接文本。

支持的浏览器将滚动到并高亮显示链接文档中与指定指令相匹配的第一个文本片段。请注意，可以在同一个 URL 中指定多个文本片段，用与字符（`&`）将它们分开来突出显示。

### 使用说明

- 用于 `textStart`、`textEnd`、`prefix-` 和 `suffix` 值的文本字符串需要作[百分比编码](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)。
- 匹配是大小写不敏感的。
- 单独的 `textStart`、`textEnd`、`prefix-` 和 `suffix` 字符串需要完全位于同一个[块级元素](/zh-CN/docs/Glossary/Block-level_content)中，但完整的匹配可以跨越多个元素的边界。
- 出于安全考虑，该功能要求在 noopener 上下文中打开链接——使用该特性时，你需要在你的 {{htmlelement("a")}} 元素中添加 `rel="noopener"`，并在你的 {{domxref("window.open()")}} 调用中添加 `noopener`。
- 文本片段只在完整的（非同一页面）、用户发起的导航中被调用。
- 文本片段只适用于主框架；文本不会在 {{htmlelement("iframe")}} 内被搜索到，并且 `iframe` 导航不会调用文本片段。
- 对于不希望使用该特性的网站，基于 Chromium 的浏览器支持可供发送给用户代理的[文档策略](https://wicg.github.io/document-policy/)标头值，这样用户代理就不会处理文本片段：

  ```http
  Document-Policy: force-load-at-top
  ```

> **备注：** 如果提供的文本片段与链接文档中的任何文本不匹配，或者浏览器不支持文本片段，整个文本片段将被忽略，而链接到文档的顶部。

## 示例

### 使用 textStart 的简单文本片段

- [https://example.com#:~:text=for](https://example.com#:~:text=for) 滚动到文档中第一次出现“for”文本的地方并高亮它。
- [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#:~:text=人类](/zh-CN/docs/Web/HTML/Element/a#:~:text=%E4%BA%BA%E7%B1%BB) 滚动到文档中第一次出现“人类”文本的地方并高亮它。
- [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#:~:text=href%20属性](/zh-CN/docs/Web/HTML/Element/a#:~:text=href%20%E5%B1%9E%E6%80%A7) 滚动到文档中第一次出现“href 属性”文本的地方并高亮它。

### textStart 和 textEnd

- [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#:~:text=人类,URL](/zh-CN/docs/Web/HTML/Element/a#:~:text=%E4%BA%BA%E7%B1%BB,URL) 滚动到文档中第一次以“人类”开头，并以“URL”结尾的文本的地方并高亮它。
- [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#:~:text=同源%20URL,人类语言](/zh-CN/docs/Web/HTML/Element/a#:~:text=%E5%90%8C%E6%BA%90%20URL,%E4%BA%BA%E7%B1%BB%E8%AF%AD%E8%A8%80) 滚动到文档中第一次以“同源 URL”开头，并以“人类语言”结尾的文本的地方并高亮它。注意高亮的文本如何在多个块级元素间跨越。

### 含有 prefix- 和/或 -suffix 的示例

- [https://example.com#:~:text=asking-,for](https://example.com#:~:text=asking-,for) 滚动到文档中第二次出现“for”文本的地方并高亮它。
- [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#:~:text=表示-,referrer](/zh-CN/docs/Web/HTML/Element/a#:~:text=%E8%A1%A8%E7%A4%BA-,referrer) 滚动到文档中第一次在文本“表示”后方出现“referrer”文本的地方并高亮它。这是该文档中“referrer”的第五次出现，如果没有前缀，会高亮第一次匹配。
- [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#:~:text=浏览器,-本身](/zh-CN/docs/Web/HTML/Element/a#:~:text=%E6%B5%8F%E8%A7%88%E5%99%A8,-%E6%9C%AC%E8%BA%AB) 滚动到文档中第一次在“浏览器”后方出现“本身”文本的地方并高亮它。这是该文档中“浏览器”的第七次出现，如果没有后缀，会高亮第一次匹配。
- [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#:~:text=浏览器-,对待下载,自动打开。,-自动打开](/zh-CN/docs/Web/HTML/Element/a#:~:text=%E6%B5%8F%E8%A7%88%E5%99%A8-,%E5%AF%B9%E5%BE%85%E4%B8%8B%E8%BD%BD,%E8%87%AA%E5%8A%A8%E6%89%93%E5%BC%80%E3%80%82,-%E8%87%AA%E5%8A%A8%E6%89%93%E5%BC%80) 滚动到文档中第一次出现“对待下载 ... 自动打开。”文本的地方，该文本以“浏览器”为前驱，“自动打开”为后续。这说明了一个更复杂的例子，前缀/后缀被用来锁定你想要链接的特定文本实例。尝试移除前缀，看看会匹配到什么。

### 使用多个文本片段的 URL

你可以在同一个 URL 中指定多个文本片段，用与字符（`&`）将它们分开来突出显示。让我们看几个例子：

- [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#:~:text=导致&text=链接的](/zh-CN/docs/Web/HTML/Element/a#:~:text=%E5%AF%BC%E8%87%B4&text=%E9%93%BE%E6%8E%A5%E7%9A%84) 滚动到文档中第一次出现“导致”和“链接”文本的地方并高亮它们。
- [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#:~:text=链接的%20URL,-，&text=当前-,页面,浏览环境](/zh-CN/docs/Web/HTML/Element/a#:~:text=%E9%93%BE%E6%8E%A5%E7%9A%84%20URL,-，&text=%E5%BD%93%E5%89%8D-,%E9%A1%B5%E9%9D%A2,%E6%B5%8F%E8%A7%88%E7%8E%AF%E5%A2%83) 滚动并高亮两段文本实例：
  - 后面有“，”文本直接跟随的“链接的 URL”文本的第一次出现。
  - 以“页面”开头，以“浏览环境”结尾的文本的第一个实例，其前缀为“当前”。

如果你没有看到你的一个或多个文本片段被高亮显示，而且你确信你的语法是正确的，你可能只是高亮显示了一个与你预期不同的实例。它可能被高亮了，但在屏幕之外。

### 为匹配的文本片段添加样式

浏览器可以自由地以它们选择的任何默认方式对突出显示的文本进行样式处理。[CSS 伪元素模块等级 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) 定义了 {{cssxref("::target-text")}} 伪元素，它允许你指定自定义样式。

例如，在我们的 [scroll-to-text 示例](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance)中我们有如下的 CSS 样式：

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

尝试在支持的浏览器中跟随上面的链接，以查看其效果。

### 编程访问文本片段

在支持的浏览器中，可以在 {{domxref("FragmentDirective")}} 对象中找到当前文档中匹配的文本片段信息，可以通过 {{domxref("Document.fragmentDirective")}} 属性访问该对象。

试着在支持浏览器的开发者工具中，在有一个或多个匹配文本片段的标签中运行以下内容：

```js
document.fragmentDirective;
```

你应该得到一个 {{domxref("FragmentDirective")}} 对象实例，其结构类似于以下内容：

```js
items: [
  {
    prefix: "",
    textStart: "Module Workers",
    textEnd: "",
    suffix: "support",
    type: "text",
  },
  {
    prefix: "feedback on",
    textStart: "usability",
    textEnd: "",
    suffix: "",
    type: "text",
  },
];
```

这一功能目前主要用于特性检测，但在未来，它可以扩展以包括其他信息，如翻译提示。

## 参考

### API

- {{domxref("FragmentDirective")}}
  - : 代表当前文档中已经高亮的文本片段的对象。
- {{domxref("Document.fragmentDirective")}}
  - : 返回当前文档的 {{domxref("FragmentDirective")}} 指令。

### CSS

- {{cssxref("::target-text")}}
  - : 代表当前文档高亮的文本片段。允许作者自定义文本片段的样式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [大胆地链接以前没有人链接过的地方：文本片段](https://web.dev/text-fragments/)
