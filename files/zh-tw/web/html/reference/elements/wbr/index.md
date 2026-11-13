---
title: <wbr>：換行機會元素
slug: Web/HTML/Reference/Elements/wbr
---

**`<wbr>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表換行機會，即文本中的位置，瀏覽器可以選擇在該位置斷行，儘管其斷行規則在該位置本身不會創建斷行。

{{InteractiveExample("HTML Demo: &lt;wbr&gt;", "tabbed-shorter")}}

```html interactive-example
<div id="example-paragraphs">
  <p>Fernstraßenbauprivatfinanzierungsgesetz</p>
  <p>Fernstraßen<wbr />bau<wbr />privat<wbr />finanzierungs<wbr />gesetz</p>
  <p>Fernstraßen&shy;bau&shy;privat&shy;finanzierungs&shy;gesetz</p>
</div>
```

```css interactive-example
#example-paragraphs {
  background-color: white;
  overflow: hidden;
  resize: horizontal;
  width: 9rem;
  border: 2px dashed #999;
}
```

## 屬性

此元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 注意事項

在 UTF-8 編碼的頁面上，`<wbr>` 的行為類似於 `U+200B ZERO-WIDTH SPACE`（零寬空格）代碼點。特別是，它的行為類似於 Unicode 的雙向 BN 代碼點，意味著它對 {{Glossary("bidi")}} 排序沒有影響：`<div dir=rtl>123,<wbr>456</div>` 顯示為 `123,456` 而不是 `456,123`。

出於相同的原因，`<wbr>` 元素在斷行點不引入連字符。要使連字符只出現在行末，請改用軟連字符字符實體（`&shy;`）。

## 範例

[_雅虎風格指南_](https://web.archive.org/web/20121014054923/http://styleguide.yahoo.com/)建議[在標點符號之前斷開 URL](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses)，以避免在行末留下讓讀者誤以為是 URL 結尾的標點符號。

```html
<p>
  http://this<wbr />.is<wbr />.a<wbr />.really<wbr />.long<wbr />.example<wbr />.com/With<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages
</p>
```

### 結果

{{EmbedLiveSample("範例")}}

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
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>無</td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        必須有一個開始標籤，但不得有結束標籤。
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
      <td>任何</td>
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

- {{cssxref("overflow-wrap")}}
- {{cssxref("word-break")}}
- {{cssxref("hyphens")}}
- {{HTMLElement("br")}} 元素
