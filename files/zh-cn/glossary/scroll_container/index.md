---
title: 滚动容器
slug: Glossary/Scroll_container
l10n:
  sourceCommit: dfad9eccce7c2f11c195003ec1cbd7b0fd9db577
---

{{GlossarySidebar}}

**滚动容器**为一种元素盒。无论滚动条是否存在，滚动容器中的内容均可滚动。当 CSS 属性 {{CSSXref("overflow")}} 设置为 `scroll`，或者 `overflow` 设置为 `auto` *且*内容溢出滚动容器时，用户代理将为元素盒添加滚动条，使其成为滚动容器。

当元素盒的内容溢出其包围盒时，用户可使用滚动条滚动经过被裁减的内容，而这些内容本将在视野中被隐藏。

滚动容器含有滚动口和滚动条。

## 滚动口

滚动口为滚动容器的可见部分，与滚动容器的内边距盒重合。滚动条用于将内容移入或移出滚动口，由此使内容可见。
