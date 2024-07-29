---
title: <dt>：定義術語元素
slug: Web/HTML/Element/dt
---

{{HTMLSidebar}}

**`<dt>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於指定描述或定義清單中的術語，因此必須在 {{HTMLElement("dl")}} 元素內使用。通常後面會跟著一個 {{HTMLElement("dd")}} 元素；但是連續多個 `<dt>` 元素表示所有這些術語都由接下來的 {{HTMLElement("dd")}} 元素定義。

隨後的 {{HTMLElement("dd")}}（描述詳細資訊）元素提供了使用 `<dt>` 指定的術語的定義或其他相關文字。

{{EmbedInteractiveExample("pages/tabbed/dt.html", "tabbed-standard")}}

## 屬性

這個元素只包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 範例

有關範例，請參見 [`<dl>` 元素提供的範例](/zh-TW/docs/Web/HTML/Element/dl#範例)。

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類型</a
        >
      </th>
      <td>無。</td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >，但不能包含 {{HTMLElement("header")}}、{{HTMLElement("footer")}}、章節型內容或標題內容的後代元素。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        開始標籤是必需的。如果此元素立即跟隨另一個 <code>&#x3C;dt></code> 元素或一個 {{HTMLElement("dd")}} 元素，或者父元素中沒有更多內容，則可以省略結束標籤。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        一個 {{HTMLElement("dl")}} 或者（在 {{Glossary("WHATWG")}} HTML、{{Glossary("W3C")}} HTML 5.2 及更高版本中）是 {{HTMLElement("dl")}} 的子元素的 {{HTMLElement("div")}}。<br />這個元素可以在 {{HTMLElement("dd")}} 或另一個 {{HTMLElement("dt")}} 元素之前使用。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >沒有相對應的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/Listitem_role"
            >listitem</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>
        {{domxref("HTMLElement")}} 在 Gecko 1.9.2（Firefox 4）及以前版本中，Firefox 為這個元素實現了 {{domxref("HTMLSpanElement")}} 介面。
      </td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("dl")}}
- {{HTMLElement("dd")}}
