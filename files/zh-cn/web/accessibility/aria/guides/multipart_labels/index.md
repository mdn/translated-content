---
title: 多部分标签：使用嵌入字段的标签的 ARIA
slug: Web/Accessibility/ARIA/Guides/Multipart_labels
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

## 问题

你有一个表单，在其中向用户提出一个问题，但答案已经在问题本身中提及了。我们都知道的一个经典例子是浏览器设置中的“在 x 天后删除历史记录”设置。“在 x 天后删除历史记录”位于文本框的左侧，x 是数字，例如 21，接着文本框后面是单词“天”，形成了一个易于理解的句子。

如果你正在使用屏幕阅读器，你是否注意到，在 Firefox 中进入此设置时，它会告诉你“在 21 天后删除历史记录”？然后它会宣布你在一个文本框中，并且它包含数字 21。这不是很酷吗？你不需要四处导航找到单位。“天”很容易被替换为“月”或“年”，在许多普通的对话框中，除了使用屏幕查看命令四处导航之外，没有其他方法可以找到这个信息。

解决方案在一个名为 `aria-labelledby` 的 ARIA 属性中。它的参数是一个字符串，由你想要连接成一个无障碍名称的 HTML 元素的 ID 组成。

`aria-labelledby `和 `aria-describedby` 都需要在添加标签的表单元素（例如 `<input>`）上指定。在这两种情况下，可能还存在着 label for 或标签控件的绑定，这些绑定会被 `aria-labelledby` 覆盖。如果在 HTML 页面上提供了 `aria-labelledby`，你还应该提供一个 label for 结构，以支持那些尚未具有 ARIA 支持的旧浏览器。通过 Firefox 3，你的视觉受损的用户将自动从新属性获得更好的无障碍性，但是老旧浏览器的用户不会因此而被遗忘。

### 示例

{{ EmbedLiveSample("示例") }}

```css hidden
body {
  margin: 1rem;
}
```

```html
<input
  aria-labelledby="labelShutdown shutdownTime shutdownUnit"
  type="checkbox" />

<span id="labelPrefix">在</span>

<input
  aria-labelledby="labelPrefix shutdownTime shutdownUnit labelShutdown"
  id="shutdownTime"
  type="text"
  value="10" />

<span id="shutdownUnit">分钟</span><span id="labelShutdown">后关机</span>
```

## 对 JAWS 8 用户的说明

JAWS 8.0 有自己的逻辑来查找标签，导致它始终覆盖 HTML 文档中文本框的 accessibleName。对于 JAWS 8，我还没有找到一种方法让它接受上面示例中的标签。但是 NVDA 和 Window-Eyes 可以很好地实现，Linux 上的 Orca 也没有问题。

> [!NOTE]
> 待定：添加更多兼容性信息

## 可以在没有 ARIA 的情况下完成吗？

社区成员 Ben Millard 在博客文章中指出，可以[像上面使用 HTML 4 中的示例那样将控件嵌入标签中](https://projectcerbera.com/blog/2008/03#day24)，通过将输入框嵌入到标签中。感谢你提供的信息，Ben！这是非常有用的，并且表明即使是一些多年来可用的技术，有时也会逃脱甚至是专家的注意。这种技术在 Firefox 中有效；然而，它目前在许多其他浏览器中，包括 IE 中，都不起作用。对于带有嵌入式表单控件的标签，使用 `aria-labelledby` 仍然是最佳方法。
