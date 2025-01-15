---
title: <colgroup>：表格欄群組元素
slug: Web/HTML/Element/colgroup
---

{{HTMLSidebar}}

**`<colgroup>`** [HTML](/zh-TW/docs/Web/HTML) 中定義表格內的一組欄的元素。

{{EmbedInteractiveExample("pages/tabbed/colgroup.html","tabbed-taller")}}

## 屬性

此元素包含[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `span`

  - : 指定`<colgroup>`元素跨越的連續欄數。該值必須是大於零的正整數。如果沒有指定，預設值為 `1`。

    > [!NOTE]
    > 如果在 `<colgroup>` 內有一個或多個 {{HTMLElement("col")}} 元素，則不允許使用 `span` 屬性。

### 已棄用屬性

以下屬性已棄用，不應使用。此處僅將其記錄，以供更新現有代碼和僅供歷史興趣時參考。

- `align` {{deprecated_inline}}

  - : 指定每個欄群組儲存格的水平對齊方式。可能的 {{Glossary("enumerated")}} 值包括 `left`、`center`、`right`、`justify` 和 `char`。當支援時，`char` 值將文字內容對齊到 [`char`](#char) 屬性中定義的字元和 [`charoff`](#charoff) 屬性中定義的偏移。請注意，後代{{HTMLElement("col")}}元素可能會使用其自己的 [`align`](/zh-TW/docs/Web/HTML/Element/col#align) 屬性覆蓋此值。請改用 {{cssxref("text-align")}} CSS 屬性應用於 {{htmlelement("td")}} 和 {{htmlelement("th")}} 元素，因為此屬性已棄用。

    > [!NOTE]
    > 在 `<colgroup>` 元素上設置 `text-align` 沒有效果，因為 {{HTMLElement("td")}} 和 {{HTMLElement("th")}} 元素不是 `<colgroup>` 元素的後代，因此不會繼承該屬性。
    >
    > 如果表格不使用 [`colspan`](/zh-TW/docs/Web/HTML/Element/td#colspan) 屬性，可以使用 `td:nth-of-type(an+b)` CSS 選擇器進行每欄的對齊，其中 `a` 是表格中欄的總數，`b` 是欄在表格中的序位位置，例如 `td:nth-of-type(7n+2) { text-align: right; }` 以使第二欄儲存格向右對齊。
    >
    > 如果表格使用了 [`colspan`](/zh-TW/docs/Web/HTML/Element/td#colspan) 屬性，可以通過組合適當的 CSS 屬性選擇器來達到效果，例如像 `[colspan=n]`，儘管這並不簡單。

- `bgcolor` {{deprecated_inline}}

  - : 定義每個欄群組儲存格的背景顏色。該值是一個 HTML 顏色；可以是 [6 位十六進制 RGB 碼](/zh-TW/docs/Web/CSS/hex-color)，前綴為「`#`」，或者是一個[顏色關鍵字](/zh-TW/docs/Web/CSS/named-color)。不支援其他 CSS {{cssxref("color_value", "&lt;color&gt")}} 值。請改用 {{cssxref("background-color")}} CSS 屬性，因為此屬性已棄用。

- `char` {{deprecated_inline}}

  - : 指定每個欄群組儲存格內容與字符的對齊方式。這個屬性的典型值包括當試圖對齊數字或貨幣值時使用的句點（`.`）。如果 [`align`](#align) 未設置為 `char`，則忽略此屬性，但它仍將作為屬於此欄群組的 {{HTMLElement("col")}} 元素的 [`align`](/zh-TW/docs/Web/HTML/Element/col#align) 的默認值使用。

- `charoff` {{deprecated_inline}}

  - : 指定要從 [`char`](#char) 屬性指定的對齊字符偏移的字符數。

- `valign` {{deprecated_inline}}

  - : 指定每個欄群組儲存格的垂直對齊方式。可能的{{Glossary("enumerated", "列舉")}}值包括 `baseline`、`bottom`、`middle` 和 `top`。請注意，後代 {{HTMLElement("col")}} 元素可能會使用其自己的 [`valign`](/zh-TW/docs/Web/HTML/Element/col#valign) 屬性覆蓋此值。請改用 {{cssxref("vertical-align")}} CSS 屬性應用於 {{htmlelement("td")}} 和 {{htmlelement("th")}} 元素，因為此屬性已棄用。

    > [!NOTE]
    > 在 `<colgroup>` 元素上設置 `vertical-align` 沒有效果，因為 {{HTMLElement("td")}} 和 {{HTMLElement("th")}} 元素不是 `<colgroup>` 元素的後代，因此不會繼承該屬性。
    >
    > 如果表格不使用 [`colspan`](/zh-TW/docs/Web/HTML/Element/td#colspan) 屬性，可以使用 [`td:nth-of-type()`](/zh-TW/docs/Web/CSS/:nth-of-type) CSS 選擇器進行每欄的對齊，例如 `td:nth-of-type(2) { vertical-align: middle; }` 使第二欄儲存格垂直居中。
    >
    > 如果表格使用了 [`colspan`](/zh-TW/docs/Web/HTML/Element/td#colspan) 屬性，可以通過組合適當的 CSS 屬性選擇器來達到效果，例如像 `[colspan=n]`，儘管這並不簡單。

- `width` {{deprecated_inline}}

  - : 指定當前欄群組中每個欄的默認寬度。除了標準的像素和百分比值外，此屬性還可以採用特殊形式 `0*`，表示每個跨越的欄的寬度應該是容納欄內容所需的最小寬度。也可以使用相對寬度，如 `5*`。請注意，後代 {{HTMLElement("col")}} 元素可能會使用其自己的 [`width`](/zh-TW/docs/Web/HTML/Element/col#width) 屬性覆蓋此值。請改用 {{cssxref("width")}} CSS屬性，因為此屬性已棄用。

## 使用說明

- `<colgroup>` 應該出現在 {{HTMLElement("table")}} 內，位於任何 {{HTMLElement("caption")}} 元素之後（如果使用），但位於任何 {{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tfoot")}} 和 {{HTMLElement("tr")}} 元素之前。
- 只有有限數量的 CSS 屬性影響 `<colgroup>`：
  - {{cssxref("background")}}：各種 `background` 屬性將為欄群組內的儲存格設置背景。由於欄群組的背景顏色是繪製在表格上方，但在背景顏色應用到欄（{{HTMLElement("col")}}）、行群組（{{htmlelement("thead")}}、{{htmlelement("tbody")}} 和 {{htmlelement("tfoot")}}）、行（{{htmlelement("tr")}}）和個別儲存格（{{htmlelement("th")}} 和 {{htmlelement("td")}}）之後，只有當所有位於其上的層都有透明背景時，表格欄群組的背景才可見。
  - {{cssxref("border")}}：各種 `border` 屬性適用，但僅當 `<table>` 具有 {{cssxref("border-collapse", "border-collapse: collapse")}} 設置時。
  - {{cssxref("visibility")}}：對於欄群組，`collapse` 值導致該欄群組中所有欄的儲存格都不呈現，並且跨越到其他欄的儲存格會被剪切。這些欄在欄群組中原本佔用的空間將被移除。但是，仍會根據存在於欄群組中折疊的欄中的儲存格來計算其他欄的大小。`visibility` 的其他值沒有效果。
  - {{cssxref("width")}}：`width` 屬性定義了欄群組內欄的最小寬度，就好像設置了 {{cssxref("min-width")}} 一樣。

## 範例

請參見 {{HTMLElement("table")}} 以查看一個完整的表格範例，介紹常見的標準和最佳實踐。

此範例演示了一個分成兩個 `<colgroup>` 元素的七欄表格，跨越多個欄。

### HTML

使用兩個 `<colgroup>` 元素來結構化一個基本表格，創建欄群組。每個欄群組中的欄數由 [`span`](#span) 屬性指定。

```html
<table>
  <caption>
    Personal weekly activities
  </caption>
  <colgroup span="5" class="weekdays"></colgroup>
  <colgroup span="2" class="weekend"></colgroup>
  <tr>
    <th>Mon</th>
    <th>Tue</th>
    <th>Wed</th>
    <th>Thu</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
  <tr>
    <td>Clean room</td>
    <td>Football training</td>
    <td>Dance Course</td>
    <td>History Class</td>
    <td>Buy drinks</td>
    <td>Study hour</td>
    <td>Free time</td>
  </tr>
  <tr>
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

可以使用分組的欄來在 CSS 中視覺上突出顯示結構：

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
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類型</a
        >
      </th>
      <td>無。</td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        如果存在 <a href="#span"><code>span</code></a> 屬性：無。<br />如果未指定該屬性：零個或多個 {{HTMLElement("col")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        如果具有 {{HTMLElement("col")}} 元素作為其第一個子元素，並且未在其前面有被省略的 {{HTMLElement("colgroup")}} 結束標籤，則可以省略開始標籤。<br />如果未在其後跟隨空格或註釋，則可以省略結束標籤。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        一個 {{HTMLElement("table")}} 元素。{{HTMLElement("colgroup")}} 必須出現在任何 {{HTMLElement("caption")}} 元素之後，但在任何 {{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tfoot")}} 和 {{HTMLElement("tr")}} 元素之前。
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
- {{HTMLElement("caption")}}、{{HTMLElement("col")}}、{{HTMLElement("table")}}、{{HTMLElement("tbody")}}、{{HTMLElement("td")}}、{{HTMLElement("tfoot")}}、{{HTMLElement("th")}}、{{HTMLElement("thead")}}、{{HTMLElement("tr")}}：其他與表格相關的元素
- {{cssxref("background-color")}}：設置每個欄群組儲存格的背景顏色的 CSS 屬性
- {{cssxref("border")}}：控制欄群組儲存格邊框的 CSS 屬性
- {{cssxref("text-align")}}：水平對齊每個欄群組儲存格內容的 CSS 屬性
- {{cssxref("vertical-align")}}：垂直對齊每個欄群組儲存格內容的 CSS 屬性
- {{cssxref("visibility")}}：隱藏（或顯示）欄群組的儲存格的 CSS 屬性
- {{cssxref("width")}}：控制欄群組中每個欄的默認寬度的 CSS 屬性
- {{cssxref(":nth-of-type")}}、{{cssxref(":first-of-type")}}、{{cssxref(":last-of-type")}}：CSS 偽類來選擇所需的欄儲存格
