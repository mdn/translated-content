---
title: <b>：引起注意元素
slug: Web/HTML/Element/b
---

{{HTMLSidebar}}

**`<b>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於引起讀者對其內容的注意，但該內容並非特別重要。這曾被稱為粗體元素，而大多數瀏覽器仍會以粗體顯示其文字。然而，你不應該使用 `<b>` 來設置文字樣式或賦予重要性。如果你希望使文字變成粗體，應該使用 CSS {{cssxref("font-weight")}} 屬性。如果你希望表示某個元素具有特殊重要性，應該使用 {{HTMLElement("strong")}} 元素。

{{EmbedInteractiveExample("pages/tabbed/b.html", "tabbed-shorter")}}

## 屬性

此元素僅包含[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 使用注意事項

- 在需要突出關鍵字的情況下使用 `<b>`，例如摘要中的關鍵字、評論中的產品名稱或其他通常以粗體顯示的文字範圍（但不包括任何特殊重要性）。
- 不要將 `<b>` 元素與 {{HTMLElement("strong")}}、{{HTMLElement("em")}} 或 {{HTMLElement("mark")}} 元素混淆。{{HTMLElement("strong")}} 元素代表某種*重要性*的文字，{{HTMLElement("em")}} 強調文字，{{HTMLElement("mark")}} 元素代表某種*相關性*的文字。`<b>` 元素不傳達此類特殊語義信息；只有在其他元素都不適合時才使用它。
- 同樣，不要使用 `<b>` 元素標記標題。對於這種目的，請使用 {{HTMLElement("Heading_Elements", "h1")}} 到 {{HTMLElement("Heading_Elements", "h6")}} 標籤。此外，樣式表可以改變這些元素的預設樣式，因此它們不一定會以粗體顯示。
- 在 `<b>` 元素上使用 [`class`](/zh-TW/docs/Web/HTML/Global_attributes#class) 屬性是一個良好的做法，以便根據需要傳達額外的語義信息（例如 `<b class="lead">` 用於段落的第一句話）。如果你的樣式需求發生變化，這樣可以更容易地管理 `<b>` 的多種用例，而無需更改 HTML 中的所有用例。
- 從歷史上看，`<b>` 元素的目的是使文字加粗。自 HTML4 以來，樣式信息已被廢棄，因此 `<b>` 元素的含義已經改變。
- 如果使用 `<b>` 元素沒有語義目的，你應該改用 CSS {{cssxref("font-weight")}} 屬性並設置值為 `"bold"`，以使文字加粗。

## 範例

```html
<p>
  This article describes several <b class="keywords">text-level</b> elements. It
  explains their usage in an <b class="keywords">HTML</b> document.
</p>
Keywords are displayed with the default style of the
<b>element, likely in bold.</b>
```

### 結果

{{EmbedLiveSample("範例")}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >、
        <a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >、捫及內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必需的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>任意</td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 其他傳達文本級語義的元素：{{HTMLElement("a")}}、{{HTMLElement("em")}}、{{HTMLElement("strong")}}、{{HTMLElement("small")}}、{{HTMLElement ("cite")}}、{{HTMLElement("q")}}、{{HTMLElement("dfn")}}、{{HTMLElement("abbr")}}、{{HTMLElement("time")}}、{{HTMLElement("code")}}、{{HTMLElement ("var")}}、{{HTMLElement("samp")}}、{{HTMLElement("kbd")}}、{{HTMLElement("sub")}}、{{HTMLElement("sup")}}、{{HTMLElement("i")}}、{{HTMLElement( "mark")}}、{{HTMLElement("ruby")}}、{{HTMLElement("rp")}}、{{HTMLElement("rt")}}、{{HTMLElement("bdo")}}、{{HTMLElement("span")}}、{{HTMLElement ("br")}}、{{HTMLElement("wbr")}}。
- [使用 \<b> 和 \<i> 元素（W3C）](https://www.w3.org/International/questions/qa-b-and-i-tags)
