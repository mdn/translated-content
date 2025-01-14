---
title: 无障碍描述
slug: Glossary/Accessible_description
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**无障碍描述**（Accessible Description）是可以提供额外的信息给辅助技术，以帮助用户理解该元素及其上下文的用户界面元素的描述。它是与 HTML 或 SVG 元素相关联的文本描述，可以为辅助技术提供元素除{{glossary("accessible name", "无障碍名称")}}之外的描述内容。这对于依赖于像是{{glossary("Screen_reader", "屏幕阅读器")}}这样的辅助技术的用户而言尤其重要。元素的无障碍描述是{{glossary("accessibility tree", "无障碍树")}}的一部分。

例如，{{htmlelement("table")}} 的无障碍描述是其首个 {{htmlelement("caption")}} 的内容。在一个复杂的数据表中，一两句描述表格的内容就可以为表格提供一段描述信息。这也可以是表格前后（视觉上以及源代码中的顺序）的正文段落。如果在源代码中不是这个顺序，或者想要为此特定建立一个关联，就可以使用 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 属性来关联表格及其描述文本。

类似地，当一个用户被要求创建一段密码时，`<label>` 元素就能为 `password` 类型的 {{htmlelement("input")}} 提供无障碍名称。好的无障碍描述应当以一种对所有用户都可见的方式包含密码的要求。它也可以通过 `aria-describedby` 属性明确地与输入关联，这样就将其添加到无障碍树中作为该节点的“描述”。

描述被简化为文本字符串。在我们的密码示例中，如果输入的 `aria-describedby` 属性值是一个 HTML {{htmlelement("ul")}} 的 `id`，那么描述就由所有列表项的文本和文本等效项连接而成。

你可以查看页面上任何元素的无障碍描述：查看浏览器开发工具的无障碍选项卡——它其中就提供了当前选定元素的无障碍信息。

## 无障碍描述的计算

对于 HTML 元素，如果一个元素没有无障碍描述，那么描述需要通过编程的方式与相关元素关联。无障碍对象模型（AOM）通过按顺序检查以下特性来计算无障碍描述，直到某个特性被定义为止：

1. [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 属性。

2. [`aria-description`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-description) 属性。

3. 语言专有的特性可能也会参与到描述的计算中，如果这一特性尚未用于定义{{glossary("accessible name", "无障碍名称")}}。例如：

   - {{htmlelement("summary")}} 由其所嵌套的 {{htmlelement("details")}} 的内容描述。
   - {{htmlelement("input")}} 按钮（带有 `button`、`submit` 或 `reset` 类型属性）由其 `value` 属性的值描述。
   - 在 SVG 中，如果存在 [`<desc>`](/zh-CN/docs/Web/SVG/Element/desc) 元素，则由其内容描述；否则如果其后代文本容器元素（即 [`<text>`](/zh-CN/docs/Web/SVG/Element/text)）中的文本尚未被用于{{glossary("accessible name", "无障碍名称")}}，则由这些文本描述。

4. 如果以上的规则都没有满足，那么在 [`title`](/zh-CN/docs/Web/HTML/Global_attributes#title) 不是该元素的{{glossary("accessible name", "无障碍名称")}}的时候将采用这个属性作为元素的无障碍描述。

5. 如果以上都没有定义无障碍描述，那么无障碍描述为空。

这些 HTML 中定义无障碍描述的步骤在 [HTML-AAM 无障碍描述](https://www.w3.org/TR/html-aam-1.0/#accdesc-computation)中给出。SVG 元素的无障碍描述遵循相同的步骤，只是有一些小的差异（在 [SVG-AAM 无障碍描述](https://www.w3.org/TR/svg-aam-1.0/#mapping_additional_nd)中列出）。

## 参见

- [无障碍名称与描述计算 1.2（accname）](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [无障碍](/zh-CN/docs/Web/Accessibility)
- [学习无障碍](/zh-CN/docs/Learn_web_development/Core/Accessibility)
- 维基百科的 [Web 无障碍](https://zh.wikipedia.org/wiki/网站无障碍)
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/zh-CN/docs/Web/Accessibility/ARIA)
- [W3C Web 无障碍倡议（WAI）](https://www.w3.org/WAI/)
- [无障碍富互联网应用（WAI-ARIA）](https://w3c.github.io/aria/)
- 相关术语：
  - {{Glossary("Accessibility", "无障碍")}}
  - {{Glossary("Accessibility tree", "无障碍树")}}
  - {{Glossary("Accessible name", "无障碍名称")}}
  - {{Glossary("ARIA")}}
