---
title: <table>（表格元素）
slug: Web/HTML/Reference/Elements/table
---

**HTML `<table>` 元件**代表表格數據 ── 換句話說，就是透過二維資料表來呈現資訊。

{{InteractiveExample("HTML Demo: &lt;table&gt;", "tabbed-standard")}}

```html interactive-example
<table>
  <caption>
    2021 前端 Web 開發課程
  </caption>
  <thead>
    <tr>
      <th scope="col">學生</th>
      <th scope="col">對什麼感興趣</th>
      <th scope="col">年齡</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>HTML 表格</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Dennis</th>
      <td>Web 無障礙</td>
      <td>45</td>
    </tr>
    <tr>
      <th scope="row">Sarah</th>
      <td>JavaScript 框架</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">Karen</th>
      <td>Web 效能</td>
      <td>36</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">平均年齡</th>
      <td>33</td>
    </tr>
  </tfoot>
</table>
```

```css interactive-example
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
  font-weight: bold;
}

thead,
tfoot {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td:last-of-type {
  text-align: center;
}

tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/HTML/Content_categories">內容類型</a>
      </th>
      <td>
        <a href="/zh-TW/docs/HTML/Content_categories#Flow_content">流內容</a>
      </td>
    </tr>
    <tr>
      <th scope="row">允許內容</th>
      <td>
        <div>
          按照以下順序：
          <ol>
            <li>一個可選的{{HTMLElement("caption")}}元素，</li>
            <li>零個或更多的{{HTMLElement("colgroup")}}元素，</li>
            <li>一個可選的{{HTMLElement("thead")}}元素，</li>
            <li>
              一個在以下元素之前或之後的可選 {{HTMLElement("tfoot")}}
              元素：
              <ul>
                <li>零個或更多的{{HTMLElement("tbody")}}元素，</li>
                <li>或者，一個或更多的{{HTMLElement("tr")}}元素</li>
              </ul>
            </li>
          </ol>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許父元素</th>
      <td>任何允許流內容的元素</td>
    </tr>
    <tr>
      <th scope="row">允許 ARIA 規則</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLTableElement")}}</td>
    </tr>
  </tbody>
</table>

## 屬性

這個元件包含了 [全域屬性（global attributes）](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

### 棄用屬性

- `align` {{Deprecated_inline}}
  - : 這個枚舉屬性會指示表格中的文字要如何對齊。可用值如下：left：意思是表格應該顯示在文件的左方。
    - center：意思是表格應該顯示在文件的中間。
    - right：意思是表格應該顯示在文件的右方。在 CSS 要得出類似效果，應該設定 {{cssxref("margin-left")}} 與 {{cssxref("margin-right")}}；如果要置中，則要把 {{cssxref("margin")}} 屬性設定為 `0 auto`。

- `bgcolor` {{Deprecated_inline}}
  - : 定義表格的背景與內容顏色。它使用[六位十六進制 RGB code](/zh-TW/docs/Web/CSS/Reference/Values/color_value#RGB_colors)，前缀需要加上 '`#`' 。也可以用[預先定義的顏色字串](/zh-TW/docs/Web/CSS/Reference/Values/color_value#Color_keywords)可用。在 CSS 要得出類似效果，應該使用 {{cssxref("background-color")}} 屬性。
- `border` {{Deprecated_inline}}
  - : 這個屬性以像素為單位，定義了圍繞於表格框架的大小。如果設為 0，代表 [`frame`](#frame) 屬性為空。在 CSS 要得出類似效果，應該使用 {{cssxref("border")}} 屬性。
- `cellpadding` {{Deprecated_inline}}
  - : 這個屬性定義了元件與邊界線之間的空白，以及要不要顯示。如果輸入像素，像素長度的空白會套用到四個邊；如果輸入百分比，內容將居中、整體的垂直空間（上與下）會使用這個百分比表示。橫向空間（左與右）也適用這個規則。在 CSS 要得出類似效果，應該對 `<table>` 屬性使用 {{cssxref("border-collapse")}}；並對 {{HTMLElement("td")}} 使用 {{cssxref("padding")}}。
- `cellspacing` {{Deprecated_inline}}
  - : This attribute defines the size of the space between two cells in a percentage value or pixels. The attribute is applied both horizontally and vertically, to the space between the top of the table and the cells of the first row, the left of the table and the first column, the right of the table and the last column and the bottom of the table and the last row.To achieve a similar effect, apply the {{cssxref("border-spacing")}} property to the `<table>` element. `border-spacing` does not have any effect if {{cssxref("border-collapse")}} is set to collapse.
- `frame` {{Deprecated_inline}}
  - : 這個枚舉屬性定義圍繞在表格邊框的哪一邊要顯示。在 CSS 要得出類似效果，應該使用 {{cssxref("border-style")}} 與 {{cssxref("border-width")}} 屬性。
- `rules` {{Deprecated_inline}}
  - : 這個枚舉屬性定義諸如線條之類的規則，要如何出現在表格。它擁有以下數值：`none`，代表沒有任何規則上的指示。這是預設值。
    - `groups`，只標示行群組和列群組（行群組由 {{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、和 {{HTMLElement("tfoot")}} 定義；列群組由 {{HTMLElement("col")}} 與 {{HTMLElement("colgroup")}} 定義）；
    - `rows`，會創立一組標示行的規則；
    - `columns`，會創立一組標示列的規則；
    - `all`，會創立一組同時標示行與列的規則。在 CSS 要得出類似效果，應該針對 {{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tfoot")}}、{{HTMLElement("col")}}、{{HTMLElement("colgroup")}} 元素使用 {{cssxref("border")}} 屬性。

- `summary` {{Deprecated_inline}}
  - : 這個屬性定義了總結表格的替代文字。請改用 {{htmlelement("caption")}} 元素。
- `width` {{Deprecated_inline}}
  - : 這個屬性定義了表格的寬度。請改用 CSS {{cssxref("width")}} 屬性。

## 範例

### 簡單的表格

```html
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

{{EmbedLiveSample('簡單的表格', '100%', '100')}}

### 更多範例

```html
<p>有表頭的簡單表格</p>
<table>
  <tr>
    <th>姓</th>
    <th>名</th>
  </tr>
  <tr>
    <td>Doe</td>
    <td>John</td>
  </tr>
  <tr>
    <td>Doe</td>
    <td>Jane</td>
  </tr>
</table>

<p>有 thead、tfoot 和 tbody 的表格</p>
<table>
  <thead>
    <tr>
      <th>表頭 1</th>
      <th>表頭 2</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>頁腳 1</td>
      <td>頁腳 2</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>主體內容 1</td>
      <td>主體內容 2</td>
    </tr>
  </tbody>
</table>

<p>有 colgroup 的表格</p>
<table>
  <colgroup span="4"></colgroup>
  <tr>
    <th>國家</th>
    <th>首都</th>
    <th>人口</th>
    <th>語言</th>
  </tr>
  <tr>
    <td>美國</td>
    <td>華盛頓</td>
    <td>三億零九百萬</td>
    <td>英文</td>
  </tr>
  <tr>
    <td>瑞典</td>
    <td>斯德哥爾摩</td>
    <td>九百萬</td>
    <td>瑞典文</td>
  </tr>
</table>

<p>有colgroup和col的表格</p>
<table>
  <colgroup>
    <col style="background-color: #0f0" />
    <col span="2" />
  </colgroup>
  <tr>
    <th>酸橙</th>
    <th>檸檬</th>
    <th>橘子</th>
  </tr>
  <tr>
    <td>綠</td>
    <td>黃</td>
    <td>橙</td>
  </tr>
</table>

<p>有標題的簡單表格</p>
<table>
  <caption>
    美妙的標題
  </caption>
  <tr>
    <td>美妙的內容</td>
  </tr>
</table>
```

```css hidden
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table,
th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

{{EmbedLiveSample('更多範例', '100%', '700')}}

## 無障礙議題

### Caption

提供 {{HTMLElement("caption")}} 元素，以便清晰而簡潔地描述表格主旨。他能讓用戶決定自己是否該閱讀表格內容，還是要略過就好。

如此也能幫助螢幕閱讀器之類的輔具使用者、視力條件差、還有認知障礙的人。

- [MDN Adding a caption to your table with \<caption>](/zh-TW/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#Adding_a_caption_to_your_table_with_<caption>)
- [Caption & Summary • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Scope 行列

雖然在 HTML5 裡面 [`scope`](/zh-TW/docs/Web/HTML/Reference/Elements/td#scope) 屬性已經過時，但很多螢幕閱讀器會利用這屬性，複製不使用屏幕閱讀器的人的視覺關聯，以便推斷可能的視覺位置。

#### 示例

```html
<table>
  <caption>
    Color names and values
  </caption>
  <tbody>
    <tr>
      <th scope="col">名稱</th>
      <th scope="col">HEX</th>
      <th scope="col">HSLa</th>
      <th scope="col">RGBa</th>
    </tr>
    <tr>
      <th scope="row">青色</th>
      <td><code>#51F6F6</code></td>
      <td><code>hsla(180, 90%, 64%, 1)</code></td>
      <td><code>rgba(81, 246, 246, 1)</code></td>
    </tr>
    <tr>
      <th scope="row">金針菇色</th>
      <td><code>#F6BC57</code></td>
      <td><code>hsla(38, 90%, 65%, 1)</code></td>
      <td><code>rgba(246, 188, 87, 1)</code></td>
    </tr>
  </tbody>
</table>
```

在 {{HTMLElement("th")}} 元素提供 `scope="col"` 的宣告，有助於描述該單位屬於第一列。在 {{HTMLElement("td")}} 元素提供 `scope="row"` 則有助於描述該單位屬於第一行。

- [MDN Tables for visually impaired users](/zh-TW/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#Tables_for_visually_impaired_users)
- [Tables with two headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tables with irregular headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Using the scope attribute to associate header cells and data cells in data tables | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### 複雜的表格

針對單格複雜到無法歸類於直向或橫向的表格，諸如螢幕閱讀器之類的輔助技術，可能就無法解析。在這種情況下，通常就需要 [`colspan`](/zh-TW/docs/Web/HTML/Reference/Elements/td#colspan) 與 [`rowspan`](/zh-TW/docs/Web/HTML/Reference/Elements/td#rowspan) 屬性。

理想情況下，可以考慮使用其他方式來呈現表格的內容，例如把表格切分到不必依賴 `colspan` 和 `rowspan` 屬性。除了幫助使用輔助技術的人了解表格的內容之外，這樣也會使認知障礙者受益，因為他們可能難以理解表格佈局描述的關聯。

`如果表格無法切分，請結合 [`id`](/zh-TW/docs/Web/HTML/Global_attributes#id) 與 [`headers`](/zh-TW/docs/Web/HTML/Element/td#headers) 使用，以便程序化地關聯各表格單位與標題。`

- [`MDN Tables for visually impaired users`](/zh-TW/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#Tables_for_visually_impaired_users)
- [`Tables with multi-level headers • Tables • W3C WAI Web Accessibility Tutorials`](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [`H43: Using id and headers attributes to associate data cells with header cells in data tables | Techniques for W3C WCAG 2.0`](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## 規範

{{Specifications}}

## `瀏覽器相容性`

{{Compat}}

## 參見

- 適合格式化 `<table>` 元素的 CSS：
  - {{cssxref("width")}} 來控制表格寬度；
  - {{cssxref("border")}}、{{cssxref("border-style")}}、{{cssxref("border-color")}}、{{cssxref("border-width")}}、{{cssxref("border-collapse")}}、{{cssxref("border-spacing")}} 來控制表格外框、樣式規則以及單元格的外框；
  - {{cssxref("margin")}} 和 {{cssxref("padding")}} 來格式化單獨的單元格；
  - {{cssxref("text-align")}} 和 {{cssxref("vertical-align")}} 來定義單元格內容以及文字的位置偏向。
