---
title: <col>：表格欄元素
slug: Web/HTML/Reference/Elements/col
---

**`<col>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於定義由其父元素 {{HTMLElement("colgroup")}} 表示的欄組中的一個或多個欄。`<col>` 元素僅在未定義 [`span`](/zh-TW/docs/Web/HTML/Reference/Elements/colgroup#span) 屬性的 {{HTMLElement("colgroup")}} 元素的情況下作為其子元素有效。

{{InteractiveExample("HTML Demo: &lt;col&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Superheros and sidekicks
  </caption>
  <colgroup>
    <col />
    <col span="2" class="batman" />
    <col span="2" class="flash" />
  </colgroup>
  <tr>
    <td></td>
    <th scope="col">Batman</th>
    <th scope="col">Robin</th>
    <th scope="col">The Flash</th>
    <th scope="col">Kid Flash</th>
  </tr>
  <tr>
    <th scope="row">Skill</th>
    <td>Smarts, strong</td>
    <td>Dex, acrobat</td>
    <td>Super speed</td>
    <td>Super speed</td>
  </tr>
</table>
```

```css interactive-example
.batman {
  background-color: #d7d9f2;
}

.flash {
  background-color: #ffe8d4;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 6px;
}

td {
  text-align: center;
}
```

## 屬性

此元素包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

- `span`
  - : 指定 `<col>` 元素橫跨的連續欄數。該值必須是大於零的正整數。如果未指定，則其默認值為 `1`。

### 已棄用的屬性

以下屬性已棄用，不應使用。在更新現有代碼時和僅出於歷史興趣，以下是這些屬性的文檔。

- `align` {{deprecated_inline}}
  - : 指定每個欄單元格的水平對齊方式。可能的 {{Glossary("enumerated")}} 值包括 `left`、`center`、`right`、`justify` 和 `char`。當支持時，`char` 值將文本內容對齊到 [`char`](#char) 屬性中定義的字符，並在 [`charoff`](#charoff) 屬性定義的偏移量上進行對齊。請注意，此屬性會覆蓋其 {{HTMLElement("colgroup")}} 父元素的指定 [`align`](/zh-TW/docs/Web/HTML/Reference/Elements/colgroup#align)。請改用 {{cssxref("text-align")}} CSS 屬性應用於 {{htmlelement("td")}} 和 {{htmlelement("th")}} 元素上，因為此屬性已棄用。

    > [!NOTE]
    > 在 `<col>` 元素上設置 `text-align` 不起作用，因為 `<col>` 沒有後代元素，因此沒有元素繼承自它。
    >
    > 如果表格未使用 [`colspan`](/zh-TW/docs/Web/HTML/Reference/Elements/td#colspan) 屬性，則可以使用 `td:nth-of-type(an+b)` CSS 選擇器。將 `a` 設置為零，將 `b` 設置為表格中欄的位置，例如 `td:nth-of-type(2) { text-align: right; }` 可以使第二欄單元格右對齊。
    >
    > 如果表格使用了 [`colspan`](/zh-TW/docs/Web/HTML/Reference/Elements/td#colspan) 屬性，則可以通過組合適當的 CSS 屬性選擇器，如 `[colspan=n]` 來達到效果，雖然這不是一個簡單的過程。

- `bgcolor` {{deprecated_inline}}
  - : 定義每個欄單元格的背景顏色。該值是一個 HTML 顏色，可以是一個以『`#`』為前綴的 [6 位十六進制 RGB 代碼](/zh-TW/docs/Web/CSS/Reference/Values/hex-color)，或者是一個 [顏色關鍵字](/zh-TW/docs/Web/CSS/Reference/Values/named-color)。不支持其他 CSS {{cssxref("color_value", "&lt;color&gt;")}} 值。請改用 {{cssxref("background-color")}} CSS 屬性，因為此屬性已棄用。
- `char` {{deprecated_inline}}
  - : 指定每個欄單元格的內容對齊到一個字符的方式。當將 [`align`](#align) 未設置為 `char` 時，此屬性將被忽略，但仍將覆蓋其 {{HTMLElement("colgroup")}} 父元素的指定 [`char`](/zh-TW/docs/Web/HTML/Reference/Elements/colgroup#char)。
- `charoff` {{deprecated_inline}}
  - : 指定欄單元格內容從由 [`char`](#char) 屬性指定的對齊字符的偏移量的字符數。
- `valign` {{deprecated_inline}}
  - : 指定每個欄單元格的垂直對齊方式。可能的{{Glossary("enumerated", "列舉")}}值包括 `baseline`、`bottom`、`middle` 和 `top`。請注意，此屬性會覆蓋其 {{HTMLElement("colgroup")}} 父元素的指定 [`valign`](/zh-TW/docs/Web/HTML/Reference/Elements/colgroup#valign)。請改用 {{cssxref("vertical-align")}} CSS 屬性應用於 {{htmlelement("td")}} 和 {{htmlelement("th")}} 元素上，因為此屬性已棄用。

    > [!NOTE]
    > 在 `<col>` 元素上設置 `vertical-align` 不起作用，因為 `<col>` 沒有後代元素，因此沒有元素繼承自它。
    >
    > 如果表格未使用 [`colspan`](/zh-TW/docs/Web/HTML/Reference/Elements/td#colspan) 屬性，則可以使用 `td:nth-of-type(an+b)` CSS 選擇器。將 `a` 設置為零，將 `b` 設置為表格中欄的位置，例如 `td:nth-of-type(2) { vertical-align: middle; }` 可以使第二欄單元格垂直居中。
    >
    > 如果表格使用了 [`colspan`](/zh-TW/docs/Web/HTML/Reference/Elements/td#colspan) 屬性，則可以通過組合適當的 CSS 屬性選擇器，如 `[colspan=n]` 來達到效果，雖然這不是一個簡單的過程。

- `width` {{deprecated_inline}}
  - : 為每個欄指定默認寬度。除了標準像素和百分比值外，此屬性還可以採用特殊形式 `0*`，表示每個跨度的欄的寬度應該是足以容納欄內容的最小寬度。也可以使用相對寬度，如 `5*`。請注意，此屬性會覆蓋其 {{HTMLElement("colgroup")}} 父元素的指定 [`width`](/zh-TW/docs/Web/HTML/Reference/Elements/colgroup#width)。請改用 {{cssxref("width")}} CSS 屬性，因為此屬性已棄用。

## 使用注意事項

- `<col>` 元素用於未定義 `span` 屬性的 {{HTMLElement("colgroup")}} 元素內。
- `<col>` 元素不會將欄在結構上分組在一起，這是 {{HTMLElement("colgroup")}} 元素的作用。
- 只有有限數量的 CSS 屬性會影響 `<col>`：
  - {{cssxref("background")}}：各種 `background` 屬性將為欄內的單元格設置背景。由於欄背景顏色繪製在表格和欄組（{{HTMLElement("colgroup")}}）的頂部，但在應用於欄組（{{htmlelement("thead")}}、{{htmlelement("tbody")}} 和 {{htmlelement("tfoot")}}）、欄（{{htmlelement("tr")}}）和單元格（{{htmlelement("th")}} 和 {{htmlelement("td")}}）的背景色之前，因此只有在所有覆蓋它們頂部的層都具有透明背景時，才會看到應用於表欄的背景。
  - {{cssxref("border")}}：各種 `border` 屬性適用，但僅當 `<table>` 具有 {{cssxref("border-collapse", "border-collapse: collapse")}} 設置時。
  - {{cssxref("visibility")}}：對於一欄，`collapse` 值導致該欄的所有單元格不被呈現，並且跨入其他欄的單元格被剪切。這些欄將佔用的空間被移除。但是，其他欄的大小仍然被計算，就好像摺疊欄中的單元格存在一樣。`visibility` 的其他值沒有效果。
  - {{cssxref("width")}}：`width` 屬性定義了欄的最小寬度，就像 {{cssxref("min-width")}} 被設置一樣。

## 範例

有關介紹常見標準和最佳實踐的完整表格範例，請參見 {{HTMLElement("table")}}。

此示例演示了一個分為三個 `<col>` 元素的八欄表格。

### HTML

一個 {{HTMLElement("colgroup")}} 元素提供了一個基本表格的結構，創建了一個隱式的單欄組。三個 `<col>` 元素包含在 `<colgroup>` 內，創建了三個可樣式化的欄。當省略時，[`span`](#span) 屬性指定了每個 `<col>` 應跨越的表格欄數（默認為 `1`），從而使每個 `<col>` 中的屬性可以在其所跨越的欄中共享。

```html
<table>
  <caption>
    Personal weekly activities
  </caption>
  <colgroup>
    <col />
    <col span="5" class="weekdays" />
    <col span="2" class="weekend" />
  </colgroup>
  <tr>
    <th>Period</th>
    <th>Mon</th>
    <th>Tue</th>
    <th>Wed</th>
    <th>Thu</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
  <tr>
    <th>a.m.</th>
    <td>Clean room</td>
    <td>Football training</td>
    <td>Dance Course</td>
    <td>History Class</td>
    <td>Buy drinks</td>
    <td>Study hour</td>
    <td>Free time</td>
  </tr>
  <tr>
    <th>p.m.</th>
    <td>Yoga</td>
    <td>Chess Club</td>
    <td>Meet friends</td>
    <td>Gymnastics</td>
    <td>Birthday party</td>
    <td>Fishing trip</td>
    <td>Free time</td>
  </tr>
</table>
```

### CSS

我們使用 CSS 而不是已棄用的 HTML 屬性來為欄提供背景顏色並對齊單元格內容：

```css
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 6px;
  text-align: center;
}

.weekdays {
  background-color: #d7d9f2;
}

.weekend {
  background-color: #ffe8d4;
}
```

```css hidden
table {
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
```

#### 結果

{{EmbedLiveSample('範例', 650, 170)}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類型</a
        >
      </th>
      <td>無。</td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>無，這是一個{{Glossary("void element", "置空元素")}}。</td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>必須有開始標籤，不能有結束標籤。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        只能是 {{HTMLElement("colgroup")}}，雖然它可以被隱式定義，因為其開始標籤並不是必需的。{{HTMLElement("colgroup")}} 不得有 <a href="/zh-TW/docs/Web/HTML/Reference/Elements/colgroup#span"><code>span</code></a> 屬性。
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
      <td>不允許 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLTableColElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [學習：HTML 表格](/zh-TW/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}、{{HTMLElement("colgroup")}}、{{HTMLElement("table")}}、{{HTMLElement("tbody")}}、{{HTMLElement("td")}}、{{HTMLElement("tfoot")}}、{{HTMLElement("th")}}、{{HTMLElement("thead")}}、{{HTMLElement("tr")}}：其他與表格相關的元素
- {{cssxref("background-color")}}：設置每個欄單元格的背景顏色的 CSS 屬性
- {{cssxref("border")}}：控制欄單元格邊框的 CSS 屬性
- {{cssxref("text-align")}}：水平對齊每個欄單元格內容的 CSS 屬性
- {{cssxref("vertical-align")}}：垂直對齊每個欄單元格內容的 CSS 屬性
- {{cssxref("visibility")}}：隱藏欄單元格的 CSS 屬性
- {{cssxref("width")}}：控制每個欄的默認寬度的 CSS 屬性
- {{cssxref(":nth-of-type")}}、{{cssxref(":first-of-type")}}、{{cssxref(":last-of-type")}}：CSS 偽類，用於選擇所需的欄單元格
