---
title: 无障碍树
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**无障碍树** 包含对大多数 HTML 元素而言与{{Glossary("accessibility", "无障碍")}}相关的信息。

浏览器将标记转换成一种内部表示形式，称为_[DOM 树](/en-US/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree)_。DOM 树包含代表所有标记元素、属性和文本节点的对象。浏览器会根据 DOM 树创建无障碍树，而特定平台的无障碍 API 会使用该树提供协助技术（如屏幕阅读器）可以理解的表示方法。

无障碍树对象有四个属性：

- **名称**
  - ：我们可以如何描述这个东西呢？例如，一个包含"阅读更多"文本的链接会以"阅读更多"作为其名称（参见[无障碍名称及描述计算规范](https://www.w3.org/TR/accname-1.1/)）。
- **描述**
  - ：我们可以如何在除了无障碍名称之外描述这个东西？一个表格的描述可以解释这个表格包含了什么样的信息。
- [**角色**](/en-US/docs/Web/Accessibility/ARIA/Roles)
  - ：这个是什么？例如，这是一个按钮、是个导航栏、是一个列表。
- **状态**
  - ：它有状态吗？例如，复选框被选中与否、[`<summary>`](/en-US/docs/Web/HTML/Element/summary) 元素被展开与否。

除此之外，无障碍树经常包含可以对这个元素进行操作的行为：一个链接可以被"关注"，一个文本输入框可以被"输入"。

截至 2022 年 4 月，**[无障碍对象模型](https://wicg.github.io/aom/explainer.html)（AOM，Accesibility Object Model）**在 Web 孵化社区群组中仍处于草案形式，目的是实现 API 接口，让可访问性语义的表达更容易，并且可能允许读取计算出的可访问性树。

## 参见

- [术语](/en-US/docs/Glossary)
  - {{Glossary("Accessibility", "无障碍")}}
  - {{Glossary("ARIA")}}
