---
title: <address>：聯絡地址元素
slug: Web/HTML/Reference/Elements/address
---

**`<address>`** [HTML](/zh-TW/docs/Web/HTML) 元素表示所包含的 HTML 提供了一個人、一組人或一個組織的聯絡資訊。

{{InteractiveExample("HTML Demo: &lt;address&gt;", "tabbed-standard")}}

```html interactive-example
<p>Contact the author of this page:</p>

<address>
  <a href="mailto:jim@example.com">jim@example.com</a><br />
  <a href="tel:+14155550132">+1 (415) 555‑0132</a>
</address>
```

```css interactive-example
a[href^="mailto"]::before {
  content: "📧 ";
}

a[href^="tel"]::before {
  content: "📞 ";
}
```

`<address>` 元素內容提供的聯絡資訊可以根據上下文而定，可能包含任何需要的聯絡資訊，例如實際地址、URL、電子郵件地址、電話號碼、社交媒體帳號、地理座標等等。`<address>` 元素應包含所述聯絡資訊所指的人、人群或組織的名稱。

`<address>` 可以應用於各種情境，例如在頁面標題中提供企業的聯絡資訊，或者通過在 {{HTMLElement("article")}} 中包含 `<address>` 元素來指示文章的作者。

## 屬性

此元素僅包含[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 使用注意事項

- `<address>` 元素只能用於表示其最近的 {{HTMLElement("article")}} 或 {{HTMLElement("body")}} 元素的聯絡資訊。
- 這個元素不應包含比聯絡資訊更多的資訊，比如發布日期（這屬於 {{HTMLElement("time")}} 元素）。
- 通常，`<address>` 元素可以放置在當前節的 {{HTMLElement("footer")}} 元素內（如果有的話）。

## 範例

此範例演示了使用 `<address>` 標記文章作者的聯絡資訊。

```html
<address>
  You can contact author at
  <a href="http://www.example.com/contact">www.example.com</a>.<br />
  If you see any bugs, please
  <a href="mailto:webmaster@example.com">contact webmaster</a>.<br />
  You may also want to visit us:<br />
  Mozilla Foundation<br />
  331 E Evelyn Ave<br />
  Mountain View, CA 94041<br />
  USA
</address>
```

### 結果

{{EmbedLiveSample("範例", "300", "200")}}

儘管它與 {{HTMLElement("i")}} 或 {{HTMLElement("em")}} 元素具有相同的預設樣式呈現文本，但在處理聯絡資訊時，使用 `<address>` 更加適合，因為它傳達了額外的語義信息。

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類別</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >、捫及內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >，但不能包含嵌套的 <code>&#x3C;address></code> 元素，不能包含標題型內容（如 {{HTMLElement("hgroup")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}），不能包含章節型內容（{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("section")}}、{{HTMLElement("nav")}}），也不能包含 {{HTMLElement("header")}} 或 {{HTMLElement("footer")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，起始和結束標籤均為必需的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >，但始終排除 <code>&#x3C;address></code> 元素（根據對稱的邏輯原則，如果 <code>&#x3C;address></code> 標籤作為父元素，則不能包含嵌套的 <code>&#x3C;address></code> 元素；同樣地， <code>&#x3C;address></code> 元素的內容不能包含 <code>&#x3C;address></code> 標籤作為其父元素）。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"
            >group</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>
        {{domxref("HTMLElement")}} 在 Gecko 2.0（Firefox 4）之前，Gecko 使用 {{domxref("HTMLSpanElement")}} 介面實現此元素。
      </td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 其他與區段相關的元素：{{HTMLElement("body")}}、{{HTMLElement("nav")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("hgroup")}}、{{HTMLElement("footer")}}、{{HTMLElement("section")}}、{{HTMLElement("header")}}；
- [HTML 文件的章節與大綱](/zh-TW/docs/Web/HTML/Reference/Elements/Heading_Elements)。
