---
title: <legend>：字段集标题元素
slug: Web/HTML/Element/legend
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

**`<legend>`** [HTML](/zh-CN/docs/Web/HTML) 元素表示其父元素 {{HTMLElement("fieldset")}} 内容的标题。

{{EmbedInteractiveExample("pages/tabbed/legend.html", "tabbed-standard")}}

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 示例

有关 `<legend>` 的示例，请参阅 {{HTMLElement("form")}}。

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
        <a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
        >和<a href="/zh-CN/docs/Web/HTML/Element/Heading_Elements">标题</a>（h1–h6 元素）。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        一个 {{HTMLElement("fieldset")}}，其第一个子元素是此 <code>&#x3C;legend></code> 元素
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有对应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code>。</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLLegendElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ARIA：Form 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles/form_role)
