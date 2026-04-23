---
title: Expando
slug: Glossary/Expando
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

Expando 属性是 {{glossary("JavaScript")}} 添加到 {{glossary("DOM")}} 节点的属性，这类属性不属于{{glossary("object", "对象")}} DOM 规范：

```js
window.document.foo = 5; // foo 是一个 Expando
```

该术语还适用于在不遵守对象的原始意图的情况下添加的属性，例如添加到{{glossary("array", "数组")}}中的非数字命名属性。
