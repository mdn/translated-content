---
title: <summary>：摘要展现元素
slug: Web/HTML/Element/summary
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<summary>` 元素** 指定了 {{HTMLElement("details")}} 元素展开盒子的内容的摘要，标题或图例。点击 `<summary>` 元素可以切换父元素 `<details>` 开启和关闭的状态。

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## 属性

本元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 使用注意

`<summary>` 元素的内容可以是任意标题内容、纯文本，或是可以在段落内使用的 HTML 代码。

`<summary>` 元素*仅*可作为 `<details>` 元素的第一个子节点。当用户在 `<summary>` 元素上点击时，父元素 `<details>` 会切换开启和关闭的状态，并会向 `<details>` 元素发送 {{domxref("HTMLDetailsElement/toggle_event", "toggle")}} 事件，令用户得知这样的状态改变何时发生。

### 默认标签文字

如果一个 `<details>` 元素的第一个子节点不是 `<summary>` 元素，{{Glossary("user agent", "用户代理")}}会使用一个默认字符串（通常为“详细信息”或“详情”）作为展开盒子的标签内容。

### 默认样式

根据 HTML 规范，`<summary>` 元素的默认样式包括 `display: list-item`。这使得改变或移除显示为标签旁边的展现部件的图标成为可能，默认的图标通常是一个三角形。

你也可以将样式改变为 `display: block` 来移除展开三角形。

参见[浏览器兼容性](#浏览器兼容性)以了解其中的细节，因为并不是所有浏览器支持这个元素的全部功能。

对于基于 Webkit 的浏览器，例如 Safari，可以通过非标准的 CSS 伪元素 `::-webkit-details-marker` 来控制图标显示。要删除展开三角形，请使用 `summary::-webkit-details-marker { display: none }`。

## 示例

下面有一些 `<summary>` 元素的用法示例。你可以在 {{HTMLElement("details")}} 元素的文档中找到更多示例。

### 基本示例

一个简单的例子显示了在 {{HTMLElement("details")}} 元素中如何使用 `<summary>`：

```html
<details open>
  <summary>概况</summary>
  <ol>
    <li>手上的现钱：$500.00</li>
    <li>当前发票：$75.30</li>
    <li>到期日：5/6/19</li>
  </ol>
</details>
```

#### 结果

{{EmbedLiveSample("基本示例", 650, 120)}}

### 使用标题元素作为总结

你可以在 `<summary>` 元素中像这样使用标题元素：

```html
<details open>
  <summary><h4>概况</h4></summary>
  <ol>
    <li>手上的现钱：$500.00</li>
    <li>当前发票：$75.30</li>
    <li>到期日：5/6/19</li>
  </ol>
</details>
```

#### 结果

{{EmbedLiveSample("使用标题元素作为总结", 650, 120)}}

目前这有一些间距问题，可以用 CSS 解决。

> **警告：** 因为 `<summary>` 元素的默认角色是 [button](/zh-CN/docs/Web/Accessibility/ARIA/Roles/button_role)（它将所有角色从子元素中剥离），这个例子对于使用辅助技术的用户来说是不可行的，例如屏幕阅读器。`<h4>` 的角色将被删除，因此对这些用户来说，不会被视为标题。

### summary 元素中的 HTML

这个示例给 `<summary>` 元素增加了一些语义，以表明标签的重要性：

```html
<details open>
  <summary><strong>概况</strong></summary>
  <ol>
    <li>手上的现钱：$500.00</li>
    <li>当前发票：$75.30</li>
    <li>到期日：5/6/19</li>
  </ol>
</details>
```

#### 结果

{{EmbedLiveSample("summary_元素中的_HTML", 650, 120)}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
        >，或<a href="/zh-CN/docs/Web/HTML/Content_categories#标题内容"
          >标题内容</a
        >元素之一
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>否，开始和结束标签都不能省略</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>{{HTMLElement("details")}} 元素</td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/button_role"
            >button</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("details")}}
