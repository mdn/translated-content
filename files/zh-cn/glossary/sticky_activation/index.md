---
title: 粘性激活
slug: Glossary/Sticky_activation
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**粘性激活**（或“粘性用户激活”）是一种表示用户按下了按钮、移动了鼠标、使用了菜单或执行了其他用户交互窗口状态。

如果用户当前正在与页面交互或自页面加载以来完成了触摸、指针或键盘交互，则该页面被视为“用户已激活”。如果某个页面被设置了黏性激活状态，则在会话期间不会该状态被重置（与{{Glossary("Transient activation", "瞬态激活")}}不同）。

参见[由用户激活控制的特性](/zh-CN/docs/Web/Security/User_activation)以查看需要*粘性激活*的 API 示例。

参见 {{domxref("UserActivation.hasBeenActive")}} 属性以通过编程方式获取当前窗口的粘性激活状态。

## 参见

- [HTML 动态标准 > 黏性激活](https://html.spec.whatwg.org/multipage/interaction.html#sticky-activation)
- {{Glossary("Transient activation", "瞬态激活")}}
- {{domxref("UserActivation.hasBeenActive")}}
