---
title: 支配
slug: Glossary/Dominator
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

在图论中，如果从根节点到节点 B 的每条路径都经过节点 A，则称节点 A **支配**节点 B。

这个概念在{{Glossary("garbage collection", "垃圾回收")}}中非常重要，因为它意味着节点 B 只能通过节点 A 访问。因此，如果垃圾回收器发现节点 A 不可达并且可以回收，那么节点 B 也将不可达并且可以回收。因此，节点 A 所支配的对象会影响 A 的保留大小：A 本身被释放所可以释放的总内存量。

## 参见

- 维基百科上的[支配](<https://zh.wikipedia.org/wiki/支配_(圖論)>)
- [支配](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators/index.html)
- [垃圾回收](/zh-CN/docs/Web/JavaScript/Memory_management#垃圾回收)
