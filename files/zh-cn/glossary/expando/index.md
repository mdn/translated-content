---
title: 可扩展对象
slug: Glossary/Expando
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

可扩展对象（Expando）的动态属性是 {{glossary("JavaScript")}} 添加到 {{glossary("DOM")}} 节点的属性 , 可以直接从 DOM 元素中访问。这些属性不是 {{glossary("object", "对象的")}} DOM 规范的一部分：

```js
window.document.foo = 5; // foo 是一个自定义属性
```

该术语也可以应用于添加到对象的属性，而不遵守对象的原始意图，例如非数字命名的属性添加到一个{{glossary("array", "数组")}}里。
