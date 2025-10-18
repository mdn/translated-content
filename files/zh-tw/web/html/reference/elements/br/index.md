---
title: <br>：換行元素
slug: Web/HTML/Reference/Elements/br
---

**`<br>`** [HTML](/zh-TW/docs/Web/HTML) 元素可在文字中插入換行（回車）。在寫詩或地址時，這很有用，因為行的分隔是重要的。

{{InteractiveExample("HTML Demo: &lt;br&gt;", "tabbed-standard")}}

```html interactive-example
<p>
  O’er all the hilltops<br />
  Is quiet now,<br />
  In all the treetops<br />
  Hearest thou<br />
  Hardly a breath;<br />
  The birds are asleep in the trees:<br />
  Wait, soon like these<br />
  Thou too shalt rest.
</p>
```

```css interactive-example
p {
  font-size: 1rem;
  font-family: sans-serif;
  margin: 20px;
}
```

如上例所示，每當我們希望文字換行時，都會包含一個 `<br>` 元素。 `<br>` 後的文本將重新開始於文本塊的下一行的開頭。

> [!NOTE]
> 不要使用 `<br>` 創建段落之間的邊距；將它們包裝在 {{htmlelement("p")}} 元素中，並使用 [CSS](/zh-TW/docs/Web/CSS) 的 {{cssxref('margin')}} 屬性來控制它們的大小。

## 屬性

此元素的屬性包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

### 已棄用的屬性

- `clear` {{Deprecated_Inline}}
  - : 指示中斷後下一行的開始位置。

## 使用 CSS 設計

`<br>` 元素具有單一且明確的目的——在文本塊中插入換行。因此，它本身沒有尺寸或視覺輸出，幾乎不能對其進行任何樣式設置。

你可以在 `<br>` 元素本身上設置 {{cssxref("margin")}} 以增加文本塊中行之間的間距，但這是一種不良做法——你應該使用專門設計用於此目的的 {{cssxref("line-height")}} 屬性。

## 範例

### 簡單的 `<br>` 範例

在以下示例中，我們使用 `<br>` 元素在不同行的郵寄地址之間創建換行：

```html
Mozilla<br />
331 E. Evelyn Avenue<br />
Mountain View, CA<br />
94041<br />
USA<br />
```

#### 結果

{{ EmbedLiveSample('簡單的 br 範例', 640, 120) }}

## 無障礙議題

使用 `<br>` 創建單獨的文本段落不僅是不良做法，而且對於使用屏幕閱讀技術導航的人來說也是有問題的。屏幕閱讀器可能會宣佈元素的存在，但不會宣佈 `<br>` 內部的任何內容。對於使用屏幕閱讀器的人來說，這可能是一種令人困惑和沮喪的體驗。

使用 `<p>` 元素，並使用 CSS 屬性如 {{cssxref("margin")}} 來控制它們的間距。

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>無，這是一個 {{Glossary("void element")}}。</td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        必須有開始標籤，不得有結束標籤。在 XHTML 文件中，將此元素寫為 <code>&#x3C;br /></code>。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >的元素。
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
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLBRElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("address")}} 元素
- {{HTMLElement("p")}} 元素
- {{HTMLElement("wbr")}} 元素
