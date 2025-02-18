---
title: <dt>：描述性术语元素
slug: Web/HTML/Element/dt
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

**`<dt>`** [HTML](/zh-CN/docs/Web/HTML) 元素指定描述或定义列表中的术语，因此必须在 {{HTMLElement("dl")}} 元素内部使用。它通常后面跟着一个 {{HTMLElement("dd")}} 元素；然而，多个连续的 `<dt>` 元素表示由紧随其后的一个 {{HTMLElement("dd")}} 元素定义的多个术语。

随后的 {{HTMLElement("dd")}}（**描述详情**）元素提供与使用 `<dt>` 指定的术语相关的定义或其他相关文本。

{{EmbedInteractiveExample("pages/tabbed/dt.html", "tabbed-standard")}}

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 示例

有关示例，请参阅[为 `<dl>` 元素提供的示例](/zh-CN/docs/Web/HTML/Element/dl#示例)。

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
        >、但不包括任何 {{HTMLElement("header")}}、{{HTMLElement("footer")}}、分段内容或标题内容的后代元素。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>
        开始标签是必要的。如果该元素后面紧跟着另一个 <code>&#x3C;dt></code> 元素或 {{HTMLElement("dd")}} 元素，或者父元素中没有更多内容，则可以省略结束标签。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        一个 {{HTMLElement("dl")}} 或（在 {{Glossary("WHATWG")}} HTML、{{Glossary("W3C")}} HTML 5.2 及以后版本中）作为 {{HTMLElement("dl")}} 子元素的 {{HTMLElement("div")}}。<br />该元素可以在 {{HTMLElement("dd")}} 或另一个 <code>&lt;dt&gt;</code> 元素之前使用。
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
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/listitem_role"
            >listitem</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>
        {{domxref("HTMLElement")}} 直到 Gecko 1.9.2（Firefox 4）版本为止，Firefox 为该元素实现了 {{domxref("HTMLSpanElement")}} 接口。
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("dl")}}
- {{HTMLElement("dd")}}
