---
title: ARIA
slug: Web/Accessibility/ARIA
---

<section id="Quick_links">
  <ol>
    <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Annotations">ARIA 注解</a></li>
    <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Guides">ARIA 指南</a></li>
    <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">ARIA 流动区域</a></li>
    <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide">ARIA 屏幕阅读器实现指南</a></li>
    <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques">使用 ARIA：角色、状态和属性</a></li>
    <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Multipart_labels">多部分标签</a></li>
    <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/How_to_file_ARIA-related_bugs">如何提交与 ARIA 有关的 bug</a></li>
    <li class="toggle">
      <details><summary>ARIA 状态和属性</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Attributes", 1)}}
      </details>
    </li>
    <li class="toggle">
      <details><summary>WAI-ARIA 角色</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Roles", 1)}}
      </details>
    </li>
  </ol>
</section>

**ARIA** (Accessible Rich Internet Applications) 是一组[角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles)和[特性](/zh-CN/docs/Web/Accessibility/ARIA/Attributes)，用于定义使残障人士更容易访问 Web 内容和 Web 应用程序（尤其是使用 JavaScript 开发的应用程序）的方法。

它补充了 HTML，以便在没有其他机制时可以将应用程序中常用的交互和小部件传递给辅助技术。例如，ARIA 支持 HTML4 中的无障碍 JavaScript 小部件、表单提示和错误消息、实时内容更新等。

> **警告：** 许多这些小部件后来被合并到 HTML5 中，如果存在这样的元素，**开发人员应该更喜欢使用正确语义的 HTML 元素而不是使用 ARIA**。例如，原生元素具有内置的[键盘无障碍](/zh-CN/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)、角色和状态。但是，如果您选择使用 ARIA，则您有责任在脚本中模仿（等效）浏览器行为。

使用 [ARIA 的第一规则](https://www.w3.org/TR/using-aria/#rule1)是“如果你能够使用原生的 HTML 元素或属性，并且有你需要但已经建立在里面的语义和行为，而不是重新调整元素的用途并添加 ARIA 角色、状态或者属性来使它更加无障碍，那么你就应该如此。”

> **注意：** 有个说法叫做“ARIA 宁缺毋滥”。在 [WebAim's survey of over one million home pages](https://webaim.org/projects/million/#aria) 中，他们发生，有 ARIA 存在的主页比那些没有 ARIA 的，多检测出了平均 41% 的错误。尽管 ARIA 是为了使网页更加无障碍而设计的，但是如果使用不当，可能适得其反。

这是进度条小部件的标记：

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

这个进度条是使用 {{HTMLElement("div")}} 构建的，没有任何意义。我们加入 ARIA 角色和属性以添加意义。在这个例子中，[`role="progressbar"`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/progressbar_role) 属性告知浏览器，这个元素实际上是一个由 JavaScript 驱动的进度条小部件。[`aria-valuemin`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) 和 [`aria-valuemax`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) 属性指定进度条的最小值和最大值，，[`aria-valuenow`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) 描述进度条的当前状态和因此必须使用 JavaScript 保持更新。

除了将它们直接放置在元素中之外，还可以将 ARIA 属性添加到元素中，并使用 JavaScript 代码动态更新，如下所示：

```js
// 在 DOM 中，寻找进度条 <div>。
var progressBar = document.getElementById("percent-loaded");

// 设置其 ARIA 属性和状态，
// 这样辅助技术知道它是哪一种部件。
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// 创建可以在任何时候调用的函数，
// 以更新进度条的值。
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

所有对非辅助技术的可用的内容都应该对辅助技术可用。类似地，不应包含针对辅助技术用户使用但对于不使用辅助技术的用户无法访问的任何功能。这个进度条需要有相应的样式，从而看起来像进度条。

如果使用原生的 {{HTMLElement('progress')}} 元素，则会简单得多：

```HTML
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> **Note:**  {{HTMLElement('progress')}} 元素不允许 `min` 属性，最小值永远为 0。

> HTML 陆标元素（{{HTMLElement("main")}}、{{HTMLElement("header")}}、{{HTMLElement("nav")}} 等）具有内置的 ARIA 角色，因此有无需复制它们。

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

## 参考

- [ARIA 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles)
  - : 包含了 MDN 中讨论的所有 WAI-ARIA 角色的参考页面。
- [ARIA 状态和属性](/zh-CN/docs/Web/Accessibility/ARIA/Attributes)
  - : 包含了 MDN 中讨论的所有 WAI-ARIA 状态和属性的参考页面。

## 标准化工作

- [WAI-ARIA Specification](https://www.w3.org/TR/wai-aria-1.1/)
  - : W3C 规范本身。
- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
  - : 官方最佳实践记录了如何最好地对常见小部件和交互进行 ARIA 化。一个很好的资源。

## 脚本小部件的 ARIA

- [编写可通过键盘导航的 JavaScript 小部件](/zh-CN/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : {{HTMLElement("input")}}、{{HTMLElement("button")}} 等内置元素具有内置键盘辅助功能。如果您使用 {{HTMLElement("div")}} 和 ARIA 来“伪造”这些，则必须确保您的小部件可通过键盘访问。
- [实时区域](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
  - : 实时区域向屏幕阅读器提供有关如何处理页面内容更改的建议。

## 视频

以下演讲是了解 ARIA 的好方法：

[ARIA, Accessibility APIs and coding like you give a damn! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)
