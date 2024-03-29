---
title: <fieldset>：欄集元素
slug: Web/HTML/Element/fieldset
---

{{HTMLSidebar}}

**`<fieldset>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於在網頁表單中將多個控件以及標籤（{{HTMLElement("label")}}）分組。

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

正如上面的範例所示，`<fieldset>` 元素為 HTML 表單的一部分提供了分組功能，其中嵌套的 {{htmlelement("legend")}} 元素為 `<fieldset>` 提供了標題。它有一些屬性，其中最顯著的是 `form`，它可以包含同一頁面上的 {{htmlelement("form")}} 的 `id`，這允許你將 `<fieldset>` 作為該 `<form>` 的一部分，即使它不在其中，以及 `disabled`，它允許你一次性禁用 `<fieldset>` 及其所有內容。

## 屬性

此元素包括[全局屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `disabled`
  - : 如果設置了這個布爾屬性，則所有位於 `<fieldset>` 下的表單控件都會被禁用，這意味著它們是不可編輯的，並且不會隨著 {{htmlelement("form")}} 一起提交。它們將不會接收任何瀏覽事件，比如鼠標點擊或焦點相關事件。默認情況下，瀏覽器會將此類控件顯示為灰色。請注意，位於 {{HTMLElement("legend")}} 元素內的表單元素將不會被禁用。
- `form`
  - : 這個屬性接受一個 {{HTMLElement("form")}} 元素的 [`id`](/zh-TW/docs/Web/HTML/Global_attributes#id) 屬性的值，你希望 `<fieldset>` 成為該表單的一部分，即使它不在表單內。請注意，這種用法很混亂——如果你希望 `<fieldset>` 內的 {{HTMLElement("input")}} 元素與表單關聯，則需要直接在這些元素上使用 `form` 屬性。你可以使用 JavaScript 來檢查哪些元素與表單關聯，使用 {{domxref("HTMLFormElement.elements")}}。
- `name`

  - : 與該組關聯的名稱。

    > **備註：** `<fieldset>` 的標題由嵌套在其中的第一個 {{HTMLElement("legend")}} 元素提供。

## 使用 CSS 進行樣式設置

對於 `<fieldset>`，有一些特殊的樣式考慮因素。

它的 {{cssxref("display")}} 默認值為 `block`，並建立了一個[塊格式化上下文](/zh-TW/docs/Web/CSS/CSS_display/Block_formatting_context)。如果 `<fieldset>` 以內聯級別的 `display` 值進行樣式設置，則其行為將像 `inline-block` 一樣，否則將像 `block` 一樣。默認情況下，周圍有一個 `2px` 的 `groove` 邊框圍繞內容，並有一小部分默認填充。元素默認具有 {{cssxref("min-inline-size", "min-inline-size: min-content")}}。

如果存在 {{htmlelement("legend")}}，則其位於 `block-start` 邊框之上。`<legend>` 將會縮小包裹，並且也會建立一個格式化上下文。`display` 值被轉換為塊級別。（例如，`display: inline` 行為與 `block` 一樣。）

將有一個匿名框來容納 `<fieldset>` 的內容，它會從 `<fieldset>` 繼承某些屬性。如果 `<fieldset>` 被設置為 `display: grid` 或 `display: inline-grid`，則匿名框將是一個網格格式化上下文。如果 `<fieldset>` 被設置為 `display: flex` 或 `display: inline-flex`，則匿名框將是一個彈性格式化上下文。否則，它將建立一個塊格式化上下文。

你可以隨意設計 `<fieldset>` 和 `<legend>` 的樣式，以適應你的頁面設計。

## 範例

### 簡單的欄集

此範例展示了一個非常簡單的 `<fieldset>` 範例，帶有一個 `<legend>` 和一個內部的控件。

```html
<form action="#">
  <fieldset>
    <legend>Do you agree?</legend>
    <input type="checkbox" id="chbx" name="agree" value="Yes!" />
    <label for="chbx">I agree</label>
  </fieldset>
</form>
```

#### 結果

{{ EmbedLiveSample('簡單的欄集', '100%', '80') }}

### 禁用的欄集

此範例展示了一個禁用的 `<fieldset>`，其中包含兩個控件。請注意，由於位於禁用的 `<fieldset>` 內部，因此兩個控件都被禁用。

```html
<form action="#">
  <fieldset disabled>
    <legend>Disabled login fieldset</legend>
    <div>
      <label for="name">Name: </label>
      <input type="text" id="name" value="Chris" />
    </div>
    <div>
      <label for="pwd">Archetype: </label>
      <input type="password" id="pwd" value="Wookie" />
    </div>
  </fieldset>
</form>
```

#### 結果

{{ EmbedLiveSample('禁用的欄集', '100%', '110') }}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類別</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Element/Heading_Elements#sectioning_root"
          >章節根</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#form_listed"
          >listed</a
        >、<a
          href="/zh-TW/docs/Web/HTML/Content_categories#表單相關內容類型"
          >表單相關內容類型</a
        >的元素、捫及內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        一個可選的 {{HTMLElement("legend")}} 元素，後跟流內容。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必需的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLFieldSetElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("legend")}} 元素
- {{HTMLElement("input")}} 元素
- {{HTMLElement("label")}} 元素
- {{HTMLElement("form")}} 元素
