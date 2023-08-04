---
title: 移动无障碍清单
slug: Web/Accessibility/Mobile_accessibility_checklist
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("Web/Accessibility", 1)}}
</section>

该文档为移动应用开发者提供一个无障碍需求的简要清单。此文档将随着技术模式的发展而不断演进。

## 颜色

- 颜色对比度**必须**遵循 [WCAG 2.0](http://www.w3.org/TR/WCAG/) AA 等级需求：

  - 普通文本的对比率为 4.5:1（小于 18 磅或黑体 14 磅）
  - 大文本对比率为 3:1（大于等于 18 磅或黑体 14 磅）【译者注：字体单位为 point、PT】

- 颜色传递的信息，**必须**也通过其他方式标明（例如，链接文本中的下划线）

> **备注：** Jon Snook 开发的 [颜色对比度检查器 - Colour Contrast Checker](http://snook.ca/technical/colour_contrast/colour.html) 可以轻松检查前景和背景的对比度。同样，[Tanaguru Contrast-Finder](http://contrast-finder.tanaguru.com/) 这个工具能做类似的检查，并且会推荐你考虑使用类似的更好的对比度

## 可视化

- **不**使用用于隐藏内容的技巧处理视觉效果，例如，不透明度为零，z-index 规则，离屏位置。
- 当前可见的屏幕之外的内容，**必须**是不可见的。（特别是单一页面应用中包含多个卡片选项）:

  - **使用** `hidden` 特性或 `visibility` 或 `display` 样式属性。
  - 除非不可避免，**不应该**使用 `aria-hidden` 特性。

## 焦点

- 所有可激活元素**必须**可被聚焦：

  - 标准控件，如链接、按钮、表单域默认可被聚焦。
  - 非标准控件**必须**分配给它们一个适当的 [ARIA Role](http://www.w3.org/TR/wai-aria/roles) 如 `button`，`link` 或者 `checkbox`。

- 焦点应该是有逻辑顺序，且方式一致。

## 文本等效

- 应用中，每个展示的非文本元素都**必须**提供等效文本。

  - 恰当的位置使用 _alt_ 和 _title_（请参考 Steve Faulkner 的帖子 - 关于 [Using the HTML title attribute](http://blog.paciellogroup.com/2013/01/using-the-html-title-attribute-updated/) 。）
  - 如果上面的特性不适用，使用恰当的[ARIA Properties](http://www.w3.org/WAI/PF/aria/states_and_properties#global_states_header)，比如 `aria-label`, `aria-labelledby`, 或 `aria-describedby`.

- **必须**避免文本图像。
- 所有的表单控件**必须**有标签 ({{ htmlelement("label") }} elements) ，以便于读屏用户的使用。

## 状态处理

- 标准控件，如单选按钮和复选是通过操作系统处理的，而其他自定义控件的状态改变需要通过 [ARIA States](http://www.w3.org/TR/wai-aria/states_and_properties#attrs_widgets_header) ，如 `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded`,和 `aria-pressed`.

## General Guidelines 常规指南

- 应用必须提供标题。【译者注：此处的标题为 title】
- 标题**不能**破坏层次结构。【译者注：此处的标题为 headings】

  ```html
  <h1>Top level heading</h1>
  <h2>Secondary heading</h2>
  <h2>Another secondary heading</h2>
  <h3>Low level heading</h3>
  ```

- 应使用 [ARIA Landmark Roles](http://www.w3.org/TR/wai-aria/roles#landmark_roles_header) 描述应用或文档的结构，如 `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- 触摸事件处理器，只能通过 `touchend` 事件触发。
- 触摸目标必须足够大，方便用户交互 (参考 [BBC Mobile Accessibility Guidelines](http://www.bbc.co.uk/guidelines/futuremedia/accessibility/mobile/design/touch-target-size) 关于触摸目标尺寸的指南)

> **备注：** [Tanaguru's automated accessibility testing service](http://www.tanaguru.com/) 提供一个有效的方法，排查网页上的，或者是可安装的 Web 应用中无障碍问题（如，Firefox OS）。[tanaguru.org](http://tanaguru.org/)，你可以参与该项目或者发现更多技术实现。

> **备注：** The 该文档的最初版本 - [original version of this document](http://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html) 是由 [Yura Zenevich](http://yzen.github.io/) 完成。
