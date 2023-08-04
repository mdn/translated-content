---
title: 隐私与:visited 选择器
slug: Web/CSS/Privacy_and_the_:visited_selector
---

{{CSSRef}}

在大概 2010 年时，[CSS](/zh-CN/docs/Web/CSS) 选择器 {{ cssxref(":visited") }} 被网站用来检测用户的浏览记录，并找出用户都访问过哪些网站。这些可以通过 {{domxref("window.getComputedStyle")}} 和其他技术实现。这个过程可以很迅速的执行，不仅能够判断用户是否曾经访问过这个页面，还能借此猜测出大量的用户身份信息。

为了解决这个问题，Gecko 2 实现了一项隐私方面的更新，限制网站可以从访问过的链接中获得的信息。其他的浏览器也已经做了相同的改变。

## 善意的谎言

为了保护用户隐私，火狐和其他浏览器会在特定情况下向网站应用撒谎：

- `window.getComputedStyle` 方法和其他类似的功能（例如 {{ domxref("element.querySelector") }}）将总是将所有链接都看待为“未访问过”的。
- 使用形如 `:visited + span` 的兄弟选择器时，指定的元素（本例中的 `span`）总是会按照链接未访问过显示。
- 在一些特殊的情况下，例如链接元素嵌套，且选中的元素不是检查历史记录的链接元素。对应元素同样会按照链接未访问过渲染。

## 对已访问链接样式的限制

你仍然可以给已访问链接设置视觉样式，但是对可用样式作出了限制。只有下列的属性才能被应用到已访问链接：

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} (and its sub-properties)
- {{ cssxref("outline-color") }}
- `fill` 和 `stroke` 属性的颜色部分

此外，即便是上述样式，你也不能给访问过和未访问过设置不同的透明度。你不能使用[`rgba()`](/zh-CN/docs/Web/CSS/color_value/rgba)、[`hsla()`](/zh-CN/docs/Web/CSS/color_value/hsla)或是 [`transparent`](/zh-CN/docs/Web/CSS/color_value#transparent_关键字) 关键词。

这是一个使用被限样式的例子：

```css
:link {
  outline: 1px dotted blue;
  background-color: white;
  /* background-color 的默认值为 'transparent'。
      你必须指定一个不同值，否则无法应用对 :visited 的修改 */
}

:visited {
  outline-color: orange; /* 已访问链接的轮廓为橘色 */
  color: yellow; /* 已访问链接的文本为黄色 */
  background-color: green; /* 已访问链接的背景为绿色 */
}
```

## 对 WEB 开发者的影响

总体来说，这不会显著地影响到 WEB 开发者。但在一些特殊情况下，网站需要做些修改：

- 使用背景图片来区分链接是否被访问过的样式不再起作用，因为只有颜色才能被作用到已访问链接上。
- 不能通过 `:visited` 选择器指定了透明或不透明的颜色。

## 更多

- [privacy-related changes coming to CSS :visited](http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) on Mozilla Hacks
- [Plugging the CSS History Leak](http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/) on the Mozilla Security Blog
- [Preventing attacks on a user's history through CSS :visited selectors](http://dbaron.org/mozilla/visited-privacy)
