---
title: <caption>：表格標題元素
slug: Web/HTML/Reference/Elements/caption
---

**`<caption>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於指定表格的標題或標題，為表格提供了一個{{glossary("accessible description", "無障礙描述")}}。

{{InteractiveExample("HTML Demo: &lt;caption&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    He-Man and Skeletor facts
  </caption>
  <tr>
    <td></td>
    <th scope="col" class="heman">He-Man</th>
    <th scope="col" class="skeletor">Skeletor</th>
  </tr>
  <tr>
    <th scope="row">Role</th>
    <td>Hero</td>
    <td>Villain</td>
  </tr>
  <tr>
    <th scope="row">Weapon</th>
    <td>Power Sword</td>
    <td>Havoc Staff</td>
  </tr>
  <tr>
    <th scope="row">Dark secret</th>
    <td>Expert florist</td>
    <td>Cries at romcoms</td>
  </tr>
</table>
```

```css interactive-example
caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th {
  background-color: rgb(230 230 230);
}

td {
  text-align: center;
}

tr:nth-child(even) td {
  background-color: rgb(250 250 250);
}

tr:nth-child(odd) td {
  background-color: rgb(240 240 240);
}

.heman {
  font: 1.4rem molot;
  text-shadow:
    1px 1px 1px #fff,
    2px 2px 1px #000;
}

.skeletor {
  font: 1.7rem rapscallion;
  letter-spacing: 3px;
  text-shadow:
    1px 1px 0 #fff,
    0 0 9px #000;
}
```

## 屬性

此元素包含[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

### 廢棄的屬性

以下屬性已被廢棄，不應使用。它們僅作為更新現有代碼和歷史興趣的參考而記錄如下。

- `align` {{deprecated_inline}}
  - : 指定標題應顯示在表格的哪一側。可能的{{Glossary("enumerated", "枚舉")}}值為 `left`、`top`、`right` 或 `bottom`。請改用 {{cssxref("caption-side")}} 和 {{cssxref("text-align")}} CSS 屬性，因為此屬性已被廢棄。

## 使用注意事項

- 如果包含，則 `<caption>` 元素必須是其父 {{htmlelement("table")}} 元素的第一個子元素。
- 當 `<table>` 嵌套在一個 {{HTMLElement("figure")}} 中並成為該 `<figure>` 的唯一內容時，應該通過 `<figcaption>` 而不是 `<caption>` 嵌套在 `<table>` 內部為 `<figure>` 添加標題。
- 對表格應用的任何 {{cssxref("background-color")}} 將不會應用於其標題。如果希望相同的顏色出現在標題背後，也應該將 `background-color` 添加到 `<caption>` 元素中。

## 範例

查看 {{HTMLElement("table")}} 以獲取引入常見標準和最佳實踐的完整表格範例。

此範例演示了包含描述所呈現數據的標題的基本表格。

這種「標題」對於快速掃描頁面的用戶非常有幫助，對於視覺受損的用戶尤其有益，它允許他們快速確定表格的相關性，而無需讓屏幕閱讀器閱讀許多單元格的內容來找出表格的內容是關於什麼的。

#### HTML

`<caption>` 元素用作 {{HTMLElement("table")}} 的第一個子元素，其文本內容類似於描述表格數據的標題。在 `<caption>` 之後，使用 {{HTMLElement("tr")}}、{{HTMLElement("th")}} 和 {{HTMLElement("td")}} 元素創建三行，第一行是標題行，有兩列。

```html
<table>
  <caption>
    User login email addresses
  </caption>
  <tr>
    <th>Login</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>user1</td>
    <td>user1@example.com</td>
  </tr>
  <tr>
    <td>user2</td>
    <td>user2@example.com</td>
  </tr>
</table>
```

#### CSS

使用一些基本的 CSS 來對 `<caption>` 進行對齊和突出顯示。

```css
caption {
  caption-side: top;
  text-align: left;
  padding-bottom: 10px;
  font-weight: bold;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th {
  background-color: rgb(230 230 230);
}

td {
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample('範例', 650, 140)}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類別</a
        >
      </th>
      <td>無。</td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        如果元素後面沒有立即跟著 ASCII 空格或註釋，則可以省略結束標籤。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        作為其第一個後代的 {{HTMLElement("table")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">caption</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>不允許任何 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLTableCaptionElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [學習：HTML 表格](/zh-TW/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("col")}}、{{HTMLElement("colgroup")}}、{{HTMLElement("table")}}、{{HTMLElement("tbody")}}、{{HTMLElement("td")}}、{{HTMLElement("tfoot")}}、{{HTMLElement("th")}}、{{HTMLElement("thead")}}、{{HTMLElement("tr")}}：其他與表格相關的元素
- {{cssxref("caption-side")}}：CSS 屬性，用於將 `<caption>` 定位相對於其父元素 {{HTMLElement("table")}}
- {{cssxref("text-align")}}：CSS 屬性，用於水平對齊 `<caption>` 的文本內容
