---
title: 无障碍树
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**无障碍树**（Accessibility tree）包含大多数 HTML 元素的与{{Glossary("accessibility", "无障碍")}}相关的信息。

浏览器将标记转换成一种内部表示形式，称为 [_DOM 树_](/zh-CN/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree)。DOM 树包含代表所有标记元素、属性和文本节点的对象。浏览器会根据 DOM 树创建无障碍树，而特定平台的无障碍 API 会使用该树提供辅助技术（如屏幕阅读器）可以理解的表示形式。

无障碍树对象有四个属性：

- **名称**
  - : 我们可以怎样描述这个东西？例如，一个包含“继续阅读”文本的链接会将“继续阅读”作为其名称（参见[无障碍名称及描述计算规范](https://www.w3.org/TR/accname-1.1/)）。
- **描述**
  - : 除了无障碍名称，我们还可以如何描述这个东西？一个表格的描述可以解释这个表格包含了什么样的信息。
- [**角色**](/zh-CN/docs/Web/Accessibility/ARIA/Roles)
  - : 这个是什么？例如，这是按钮、导航栏，还是列表？
- **状态**
  - : 它有状态吗？例如，复选框被选中与否、[`<summary>`](/zh-CN/docs/Web/HTML/Element/summary) 元素被展开与否。

除此之外，无障碍树经常包含可以对这个元素进行操作的行为：一个链接可以被*访问*，一个文本输入框可以被*输入*，等等。

截至 2022 年 4 月，**[无障碍对象模型](https://wicg.github.io/aom/explainer.html)**（**AOM**）在 Web 孵化器社区组中仍处于草案形式，目的是实现 API 接口，让无障碍语义的表达更容易，并且可能允许读取计算出的可访问性树。

## 参见

- [术语](/zh-CN/docs/Glossary)
  - {{Glossary("Accessibility", "无障碍")}}
  - {{Glossary("ARIA")}}
