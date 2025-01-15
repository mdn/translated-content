---
title: 瞬态激活
slug: Glossary/Transient_activation
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**瞬态激活**（或“瞬态用户激活”）是一个表示用户最近按下了按钮、移动了鼠标、使用了菜单或执行了其他用户交互的窗口状态。

有时，此状态用作确保 Web API 只能在用户交互触发时才能运行的机制。比如，脚本不能随意启动需要*瞬态激活*的弹出窗口——它必须从 UI 元素的事件处理器中触发。

参见[由用户激活限制的特性](/zh-CN/docs/Web/Security/User_activation)以查看需要*瞬态激活*的 API 示例。

参见 {{domxref("UserActivation.isActive")}} 属性，以通过编程方式访问当前窗口的瞬态激活状态。

> [!NOTE]
> 瞬态激活在超时后会过期（如果没有通过进一步的交互进行更新），并且有些 API 也可能“消耗”它。请参阅{{Glossary("Sticky activation", "粘性激活")}}以了解在初始设置后不会重置的用户激活。

## 参见

- [HTML 动态标准 > 瞬态激活](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
- 相关术语：
  - {{Glossary("Sticky activation", "粘性激活")}}
- {{domxref("UserActivation.isActive")}}
