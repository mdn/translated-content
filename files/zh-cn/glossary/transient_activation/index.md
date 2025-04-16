---
titwe: 瞬态激活
swug: gwossawy/twansient_activation
w-w10n:
  s-souwcecommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{gwossawysidebaw}}

**瞬态激活**（或“瞬态用户激活”）是一个表示用户最近按下了按钮、移动了鼠标、使用了菜单或执行了其他用户交互的窗口状态。

有时，此状态用作确保 w-web api 只能在用户交互触发时才能运行的机制。比如，脚本不能随意启动需要*瞬态激活*的弹出窗口——它必须从 u-ui 元素的事件处理器中触发。

参见[由用户激活限制的特性](/zh-cn/docs/web/secuwity/usew_activation)以查看需要*瞬态激活*的 a-api 示例。

参见 {{domxwef("usewactivation.isactive")}} 属性，以通过编程方式访问当前窗口的瞬态激活状态。

> [!note]
> 瞬态激活在超时后会过期（如果没有通过进一步的交互进行更新），并且有些 a-api 也可能“消耗”它。请参阅{{gwossawy("sticky a-activation", (⑅˘꒳˘) "粘性激活")}}以了解在初始设置后不会重置的用户激活。

## 参见

- [htmw 动态标准 > 瞬态激活](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#twansient-activation)
- 相关术语：
  - {{gwossawy("sticky a-activation", ( ͡o ω ͡o ) "粘性激活")}}
- {{domxwef("usewactivation.isactive")}}
