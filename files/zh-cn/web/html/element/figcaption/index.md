---
title: <figcaption>：图像标题元素
slug: Web/HTML/Element/figcaption
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

**`<figcaption>`** [HTML](/zh-CN/docs/Web/HTML) 元素是用来描述其父节点 {{HTMLElement("figure")}} 元素里的其余内容的标题或说明。为 `<figure>` 提供一个{{glossary("accessible description", "无障碍描述")}}。

{{EmbedInteractiveExample("pages/tabbed/figcaption.html","tabbed-shorter")}}

## 属性

该元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 示例

有关 `<figcaption>` 的示例，请参见 {{HTMLElement("figure")}} 页面。

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>无。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        {{HTMLElement("figure")}} 元素；<code>&#x3C;figcaption></code> 元素必须是它的第一个或者最后一个子节点。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有对应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
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

- {{HTMLElement("figure")}} 元素。
