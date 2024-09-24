---
title: aria-controls
slug: Web/Accessibility/ARIA/Attributes/aria-controls
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

全局 `aria-controls` 属性标识其内容或存在由设置此属性的元素控制的一个或多个元素。

## 描述

当一个交互式微件或元素（如组合框、标签页、按钮等）用于调整或修改文档或应用程序中的另一个元素或微件时，可以使用 `aria-controls` 属性以编程方式将相应的元素与控制元素关联起来。`aria-controls` 属性用于标识由设置该属性的元素控制的一个或多个元素，无论是哪种类型的交互触发了受影响的行为。

例如，[组合框](/zh-CN/docs/Web/Accessibility/ARIA/Roles/combobox_role)元素的 `aria-controls` 设置为一个值，引用了作为弹出窗口的元素。`aria-controls` 仅在弹出窗口可见时需要设置，但如果引用的元素不可见，则设置是有效的，且编程实现更为简便。

其他控制元素的示例包括：

- 手风琴小部件中的按钮部分，切换其相关面板内容的可见性。每个按钮可能都有一个 `aria-controls`，指定引用包含与调用控制相关内容的元素的 ID。
- 具有 [`scrollbar`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) 角色的元素：滚动条需要一个 `aria-controls` 属性，引用它所控制的元素的 ID。
- 一组选项卡，每个选项卡显示不同的标签页面板：每个具有 [`role="tab"`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tab_role) 角色的元素都具有一个 `aria-controls` 属性，引用其关联的 [`tabpanel`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)。

## 示例

在以下标签页示例中，每个标签页都控制一个标签页面板：

```html
<div class="tab-interface">
  <div role="tablist" aria-label="Sample Tabs">
    <span
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0">
      第一标签页
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1">
      第二标签页
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-3"
      id="tab-3"
      tabindex="-1">
      第三标签页
    </span>
  </div>
  <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>第一个面板的内容</p>
  </div>
  <div
    id="panel-2"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="tab-2"
    class="display-none">
    <p>第二个面板的内容</p>
  </div>
  <div
    id="panel-3"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="tab-3"
    class="display-none">
    <p>第三个面板的内容</p>
  </div>
</div>
```

> [!NOTE]
> ARIA 仅修改元素的无障碍树，标识辅助技术如何向用户呈现内容。ARIA 不改变任何隐式功能或样式。

## 值

- `id` 列表
  - : 一个或多个 ID 值的空格分隔列表，引用当前元素所控制的元素

## 关联接口

- {{domxref("Element.ariaControlsElements")}}
  - : `ariaControlsElements` 属性是每个元素接口的一部分。其值是与 `aria-controls` 属性中指定的 ID 值对应的 {{domxref("Element")}} 元素的列表。

## 关联角色

用于**所有**角色。

## 规范

{{Specifications}}

## 参见

- [`aria-owns`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
