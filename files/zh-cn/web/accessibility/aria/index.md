---
title: ARIA
slug: Web/Accessibility/ARIA
---

**ARIA** (Accessible Rich Internet Applications) 是一组属性，用于定义使残障人士更容易访问 Web 内容和 Web 应用程序（尤其是使用 JavaScript 开发的应用程序）的方法。

它补充了 HTML，以便在没有其他机制时可以将应用程序中常用的交互和小部件传递给辅助技术。例如，ARIA 支持 HTML4 中的可访问导航地标、JavaScript 小部件、表单提示和错误消息、实时内容更新等。

> **警告：** 许多这些小部件后来被合并到 HTML5 中，如果存在这样的元素，**开发人员应该更喜欢使用正确语义的 HTML 元素而不是使用 ARIA**。例如，原生元素具有内置的[键盘无障碍](/zh-CN/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)、角色和状态。但是，如果您选择使用 ARIA，则您有责任在脚本中模仿（等效）浏览器行为。

这是进度条小部件的标记：

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75"
     aria-valuemin="0" aria-valuemax="100">
</div>
```

这个进度条是使用 {{HTMLElement("div")}} 构建的，它没有任何意义。不幸的是，HTML 4 中没有更多语义标签可供开发人员使用，因此我们需要包含 ARIA 角色和属性。这些是通过向元素添加属性来指定的。在这个例子中， `role="progressbar"` 属性通知浏览器这个元素实际上是一个 JavaScript 驱动的进度条小部件。 `aria-valuemin` 和 `aria-valuemax` 属性指定进度条的最小值和最大值，`aria-valuenow` 描述进度条的当前状态和因此必须使用 JavaScript 保持更新。

除了将它们直接放置在元素中之外，还可以将 ARIA 属性添加到元素中，并使用 JavaScript 代码动态更新，如下所示：

```js
// Find the progress bar <div> in the DOM.
var progressBar = document.getElementById("percent-loaded");

// Set its ARIA roles and states,
// so that assistive technologies know what kind of widget it is.
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// Create a function that can be called at any time to update
// the value of the progress bar.
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

> **备注：** 请注意，ARIA 是在 HTML4 之后发明的，因此无法在 HTML4 或其 XHTML 变体中进行验证。然而，它提供的无障碍收益远远超过任何技术无效性。
>
> 在 HTML5 中，所有 ARIA 属性都经过验证。新的地标元素（{{HTMLElement("main")}}、{{HTMLElement("header")}}、{{HTMLElement("nav")}} 等）具有内置的 ARIA 角色，因此有无需复制它们。

## 支持

与任何其他 Web 技术一样，对 ARIA 有不同程度的支持。支持基于所使用的操作系统和浏览器，以及与之交互的辅助技术类型。此外，操作系统、浏览器和辅助技术的版本也是影响因素。较旧的软件版本可能不支持某些 ARIA 角色、仅部分支持或误报其功能。

同样重要的是要承认一些依赖辅助技术的人不愿意升级他们的软件，因为害怕失去与他们的计算机和浏览器交互的能力。因此，尽可能对 [使用语义化的 HTML 元素](/zh-CN/docs/Learn/Accessibility/HTML) 很重要，因为语义 HTML 对辅助技术的支持要好得多。

使用实际辅助技术测试您编写的 ARIA 也很重要。就像浏览器模拟器和模拟器不是测试完全支持的有效解决方案一样，代理辅助技术解决方案不足以完全保证功能。

## 教程

- [ARIA 简介](/zh-CN/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets)
  - : 快速介绍如何使用 ARIA 访问动态内容。另请参阅 2008 年的经典 [ARIA intro by Gez Lemon](https://dev.opera.com/articles/view/introduction-to-wai-aria/)。
- [Videos of screen readers using ARIA](https://zomigi.com/blog/videos-of-screen-readers-using-aria-updated/)
  - : 查看来自网络的真实和简化示例，视频包括 ARIA“之前”和 ARIA“之后”。
- [Using ARIA](https://w3c.github.io/using-aria/)
  - : 开发人员实用指南。它建议在 HTML 元素上使用哪些 ARIA 属性。建议是基于实施的实际情况。

## 简单的 ARIA 增强

- [Enhancing page navigation with ARIA landmarks](https://www.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
  - : 使用 ARIA 地标改进屏幕阅读器用户的网页导航的一个很好的介绍。参考 [ARIA landmark implementation notes](https://www.paciellogroup.com/blog/2011/07/html5-accessibility-chops-aria-landmark-support/) 和真实站点上的示例（截至 2011 年 7 月更新）。
- [Improving form accessibility](/zh-CN/docs/Web/Accessibility/ARIA/forms)
  - : ARIA 不仅适用于动态内容！了解如何使用附加 ARIA 属性提高 HTML 表单的无障碍。

## 脚本小部件的 ARIA

- [编写可通过键盘导航的 JavaScript 小部件](/zh-CN/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : {{HTMLElement("input")}}、{{HTMLElement("button")}} 等内置元素具有内置键盘辅助功能。如果您使用 {{HTMLElement("div")}} 和 ARIA 来“伪造”这些，则必须确保您的小部件可通过键盘访问。
- [实时区域](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
  - : 实时区域向屏幕阅读器提供有关如何处理页面内容更改的建议。
- [Using ARIA Live Regions to announce content changes](https://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm)
  - : JAWS 屏幕阅读器软件制造商对实时区域的快速总结。带有 Firefox 的 NVDA 和带有 Safari 的 VoiceOver 也支持实时区域。

## 参考文献

- [ARIA Roles](/zh-CN/docs/Web/Accessibility/ARIA/Roles)
  - : 参考页面涵盖了 MDN 上讨论的所有 WAI-ARIA 角色。

## 标准化工作

- [WAI-ARIA Specification](https://www.w3.org/TR/wai-aria-1.1/)
  - : W3C 规范本身。
- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
  - : 官方最佳实践记录了如何最好地对常见小部件和交互进行 ARIA 化。一个很好的资源。

## 视频

以下演讲是了解 ARIA 的好方法：

[ARIA, Accessibility APIs and coding like you give a damn! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)

## 提交错误

[在浏览器、屏幕阅读器和 JavaScript 库上提交 ARIA 错误。](/zh-CN/docs/Web/Accessibility/ARIA/How_to_file_ARIA-related_bugs)

## 相关话题

[Accessibility](/zh-CN/docs/Web/Accessibility), [AJAX](/zh-CN/docs/Web/Guide/AJAX), [JavaScript](/zh-CN/docs/Web/JavaScript)
