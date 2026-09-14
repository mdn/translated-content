---
title: 使用 HTML 定义术语
slug: Web/HTML/How_to/Define_terms_with_HTML
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

HTML 提供了多种方式来传达描述性语义，既可以使用内联也可以使用结构化词汇表形式。本文将探讨如何正确使用标记定义关键词。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        需要熟悉如何<a href="/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website"
          >创建基本 HTML 文档</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习如何引入新关键词和构建描述列表。
      </td>
    </tr>
  </tbody>
</table>

当你需要查明某个术语的定义时，通常会直接翻阅词典或术语表。词典和术语表会正式地将关键词与一个或多个描述关联起来，例如：

> - 湛蓝色（_形容词_）
>   - : 如晴空般的色彩。_“湛蓝的晴空”_

但我们总是在非正式地定义关键词，例如在此处：

> **Firefox** 是由 Mozilla 基金会创建的 web 浏览器。

为处理这些使用场景，{{Glossary("HTML")}} 提供了{{Glossary("tag","标签")}}来标记描述内容与被描述的词语，确保意思能准确传达给读者。

## 如何标记非正式描述

在教科书中，关键词首次出现时，通常会将其加粗并立即定义。

HTML 同样采用此法，但因 HTML 并非视觉媒介，故不使用粗体。我们采用 {{htmlelement("dfn")}} 标签——这是专用于标记关键词首次出现的特殊元素。需注意：`<dfn>` 标签应包裹待定义的*词语*，而非定义内容（定义内容包含整个段落）：

```html
<p><dfn>Firefox</dfn> 是由 Mozilla 基金会创建的 web 浏览器。</p>
```

> [!NOTE]
> 粗体字的另一种用途是强调内容。粗体本身并非 HTML 的原生概念，但存在[用于标注强调的标签](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)。

### 特殊用例：缩写

最好使用 {{htmlelement("abbr")}} 对缩写词进行特殊标记，这样屏幕阅读器便能正确朗读它们，同时也方便你统一地处理所有缩写词。如同任何新关键词一样，缩写词应在首次出现时进行定义。

```html
<p>
  <dfn><abbr>HTML</abbr>（超文本标记语言）</dfn>是用于在 web
  上为文档建立结构的描述性语言。
</p>
```

> [!NOTE]
> HTML 规范确实[保留了 `title` 属性](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element)用于展开缩写。但这并非提供内联展开的可行替代方案。除非用户使用鼠标悬停在缩写词上，否则 `title` 内容对用户完全不可见。规范也明确[承认了这一点](https://html.spec.whatwg.org/multipage/dom.html#attr-title)。

### 提升无障碍性

{{HTMLElement('dfn')}} 标记定义的关键词，并表明当前段落定义了该关键词。换言之，`<dfn>` 元素与其容器之间存在隐含关系。若需建立更正式的关系，或定义仅包含单句而非整段文字时，可使用 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性将术语与其定义进行正式关联：

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn> 是由 Mozilla 基金会创建的 web
    浏览器。
  </span>
  你可以在 <a href="https://www.mozilla.org">mozilla.org</a> 下载它。
</p>
```

辅助技术常可利用此属性为特定术语查找文本替代方案。可在任何包含待定义关键词的标签上使用 `aria-describedby`（不仅限于 `<dfn>` 元素）。该属性通过 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 引用包含说明内容的元素。

## 如何构建描述列表

描述列表正如其名：由术语及其对应描述组成的列表（例如定义列表、词典条目、常见问题解答和键值对）。

> [!NOTE]
> 描述列表[不适用于标记对话内容](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element)，因为对话本身不会直接描述发言者。参见[标记对话的推荐方案](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations)。

描述术语需置于 {{htmlelement("dt")}} 元素内，对应说明紧随其后，包含于一个或多个 {{htmlelement("dd")}} 元素中。整个说明列表应由 {{htmlelement("dl")}} 元素包裹。

### 简单示例

以下是描述一些食物和饮料种类的示例：

```html
<dl>
  <dt>什锦饭</dt>
  <dd>以米饭为主料的主菜，通常包含鸡肉、香肠、海鲜及香料。</dd>

  <dt>寿喜烧</dt>
  <dd>日本特色料理，包括薄切肉片、蔬菜和面条，以清酒和酱油烹煮而成。</dd>

  <dt>基安蒂酒</dt>
  <dd>产自托斯卡纳的意大利干红葡萄酒。</dd>
</dl>
```

> [!NOTE]
> 如你所见，基本模式是交替使用 `<dt>` 术语和 `<dd>` 描述。若两个或多个术语连续出现，则后续描述适用于所有术语。若两个或多个描述连续出现，则它们均适用于最后给出的术语。

### 改进视觉输出效果

以下是图形浏览器显示前述列表的方式：

{{EmbedLiveSample("简单示例", 600, 180)}}

若需使关键词更醒目，可尝试加粗处理。请注意，HTML 并非视觉媒介；所有视觉效果均需借助 {{glossary("CSS")}} 实现。此处需运用 CSS 的 {{cssxref("font-weight")}} 属性：

```css
dt {
  font-weight: bold;
}
```

这产生了下面更易读的结果：

{{EmbedLiveSample("如何构建描述列表", 600, 180)}}

## 参见

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [如何使用 aria-describedby 属性](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
