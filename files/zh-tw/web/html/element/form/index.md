---
title: <form>：表單元素
slug: Web/HTML/Element/form
---

{{HTMLSidebar}}

**`<form>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表了一個包含用於提交信息的交互式控制項的文件章節。

{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}

可以使用 {{cssxref(':valid')}} 和 {{cssxref(':invalid')}} CSS [偽類](/zh-TW/docs/Web/CSS/Pseudo-classes)根據表單內的{{domxref("HTMLFormElement.elements", "元素", "", 1)}}是否有效來設置 `<form>` 元素的樣式。

## 屬性

該元素包含[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `accept` {{deprecated_inline}}

  - : 伺服器接受的逗號分隔的[內容類型](/zh-TW/docs/Web/SVG/Content_type)。

    > **備註：** **此屬性已被廢棄，不應再使用**。請改用 `<input type=file>` 元素上的 [`accept`](/zh-TW/docs/Web/HTML/Element/input#accept) 屬性。

- `accept-charset`

  - : 伺服器接受的{{Glossary("character encoding", "字元編碼")}}。該規範允許使用單一不區分大小寫的值——`"UTF-8"`，反映了這種編碼的普遍性（歷史上，可以以逗號分隔或空格分隔的清單指定多個字元編碼）。

- `autocapitalize`

  - : 控制輸入文本是否自動大寫，以及如何自動大寫。有關更多信息，請參見 [`autocapitalize`](/zh-TW/docs/Web/HTML/Global_attributes/autocapitalize) 全域屬性頁面。

- `autocomplete`

  - : 指示瀏覽器是否可以默認情況下自動完成輸入元素的值。表單元素上的 `autocomplete` 屬性會覆蓋 `<form>` 上的它。可能的值：

    - `off`：瀏覽器可能不會自動完成輸入。（瀏覽器傾向於忽略對懷疑的登錄表單的此屬性；請參見[自動完成屬性和登入欄](/zh-TW/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#the_autocomplete_attribute_and_login_fields)）
    - `on`：瀏覽器可能會自動完成輸入。

- `name`

  - : 表單的名稱。該值不能為空字符串，且必須在其所在的表單集合中唯一（如果有的話）。

- `rel`
  - : 控制註釋和表單創建的連接類型。註釋包括 [`external`](/zh-TW/docs/Web/HTML/Attributes/rel#external)、[`nofollow`](/zh-TW/docs/Web/HTML/Attributes/rel#nofollow)、[`opener`](/zh-TW/docs/Web/HTML/Attributes/rel#opener)、[`noopener`](/zh-TW/docs/Web/HTML/Attributes/rel#noopener) 和 [`noreferrer`](/zh-TW/docs/Web/HTML/Attributes/rel#noreferrer)。連接類型包括 [`help`](/zh-TW/docs/Web/HTML/Attributes/rel#help)、[`prev`](/zh-TW/docs/Web/HTML/Attributes/rel#prev)、[`next`](/zh-TW/docs/Web/HTML/Attributes/rel#next)、[`search`](/zh-TW/docs/Web/HTML/Attributes/rel#search) 和 [`license`](/zh-TW/docs/Web/HTML/Attributes/rel#license)。[`rel`](/zh-TW/docs/Web/HTML/Attributes/rel) 的值是這些枚舉值的空格分隔列表。

### 提交表單的屬性

以下屬性控制表單提交時的行為。

- `action`
  - : 處理表單提交的 URL。此值可以被 {{HTMLElement("button")}}、[`<input type="submit">`](/zh-TW/docs/Web/HTML/Element/input/submit) 或 [`<input type="image">`](/zh-TW/docs/Web/HTML/Element/input/image) 元素上的 [`formaction`](/zh-TW/docs/Web/HTML/Element/button#formaction) 屬性覆蓋。當設置 `method="dialog"` 時，將忽略此屬性。
- `enctype`

  - : 如果 `method` 屬性的值為 `post`，則 `enctype` 是表單提交的 [MIME 類型](https://zh.wikipedia.org/wiki/互联网媒体类型)。可能的值：

    - `application/x-www-form-urlencoded`：默認值。
    - `multipart/form-data`：如果表單包含帶有 `type=file` 的 {{HTMLElement("input")}} 元素，請使用此值。
    - `text/plain`：用於調試目的。

    這個值可以被 {{HTMLElement("button")}}、[`<input type="submit">`](/zh-TW/docs/Web/HTML/Element/input/submit) 或 [`<input type="image">`](/zh-TW/docs/Web/HTML/Element/input/image) 元素上的 [`formenctype`](/zh-TW/docs/Web/HTML/Element/button#formenctype) 屬性覆蓋。

- `method`

  - : 提交表單時使用的 [HTTP](/zh-TW/docs/Web/HTTP) 方法。
    允許的方法/值只有（不區分大小寫）：

    - `post`：{{HTTPMethod("POST")}} 方法；表單數據作為[請求主體](/zh-TW/docs/Web/API/Request/body)發送。
    - `get`（默認值）：{{HTTPMethod("GET")}}；表單數據附加到 `action` URL 上，使用 `?` 分隔符。當表單[沒有副作用](/zh-TW/docs/Glossary/Idempotent)時使用此方法。
    - `dialog`：當表單位於 {{HTMLElement("dialog")}} 內部時，關閉對話框並導致提交時觸發 `submit` 事件，而不提交數據或清除表單。

    這個值可以被 {{HTMLElement("button")}}、[`<input type="submit">`](/zh-TW/docs/Web/HTML/Element/input/submit) 或 [`<input type="image">`](/zh-TW/docs/Web/HTML/Element/input/image) 元素上的 [`formmethod`](/zh-TW/docs/Web/HTML/Element/button#formmethod) 屬性覆蓋。

- `novalidate`
  - : 此布林屬性表示提交表單時不應該驗證表單。如果未設置此屬性（因此表單**_被_**驗證），則可以被屬於表單的 {{HTMLElement("button")}}、[`<input type="submit">`](/zh-TW/docs/Web/HTML/Element/input/submit) 或 [`<input type="image">`](/zh-TW/docs/Web/HTML/Element/input/image) 元素上的 [`formnovalidate`](/zh-TW/docs/Web/HTML/Element/button#formnovalidate) 屬性覆蓋。
- `target`

  - : 提交表單後在哪裡顯示響應。它是一個用於*瀏覽上下文*的名稱/關鍵字（例如，標籤、窗口或 iframe）。以下關鍵字具有特殊含義：

    - `_self`（默認值）：加載到與當前瀏覽上下文相同的位置。
    - `_blank`：加載到新的未命名瀏覽上下文。這提供了與設置 [`rel="noopener"`](#rel) 相同的行為，該屬性不設置 [`window.opener`](/zh-TW/docs/Web/API/Window/opener)。
    - `_parent`：加載到當前瀏覽上下文的父級。如果沒有父級，則與 `_self` 的行為相同。
    - `_top`：加載到頂級瀏覽上下文（即，當前上下文的祖先，並且沒有父級）。如果沒有父級，則與 `_self` 的行為相同。
    - `_unfencedTop`：將表單中的響應加載到嵌入式[圍欄頁框](/zh-TW/docs/Web/API/Fenced_frame_API)的頂級框架（即穿越圍欄頁框的根，與其他保留目的地不同）。僅在圍欄頁框內可用。

    這個值可以被 {{HTMLElement("button")}}、[`<input type="submit">`](/zh-TW/docs/Web/HTML/Element/input/submit) 或 [`<input type="image">`](/zh-TW/docs/Web/HTML/Element/input/image) 元素上的 [`formtarget`](/zh-TW/docs/Web/HTML/Element/button#formtarget) 屬性覆蓋。

## 範例

```html
<!-- Form which will send a GET request to the current URL -->
<form method="get">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form which will send a POST request to the current URL -->
<form method="post">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form with fieldset, legend, and label -->
<form method="post">
  <fieldset>
    <legend>Do you agree to the terms?</legend>
    <label><input type="radio" name="radio" value="yes" /> Yes</label>
    <label><input type="radio" name="radio" value="no" /> No</label>
  </fieldset>
</form>
```

### 結果

{{EmbedLiveSample('範例')}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories">內容類型</a>
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容">流內容</a>、<a href="/zh-TW/docs/Web/HTML/Content_categories#捫及內容">捫及內容</a>
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容">流內容</a>，但不包含 <code>&#x3C;form></code> 元素
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必需的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#流內容">流內容</a>的元素
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/form_role">form</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <code><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code>、
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a> 或 <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLFormElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTML 表單指南](/zh-TW/docs/Learn_web_development/Extensions/Forms)
- 在創建表單時使用的其他元素：{{HTMLElement("button")}}、{{HTMLElement("datalist")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("input")}}、{{HTMLElement("label")}}、{{HTMLElement("legend")}}、{{HTMLElement("meter")}}、{{HTMLElement("optgroup")}}、{{HTMLElement("option")}}、{{HTMLElement("output")}}、{{HTMLElement("progress")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}}。
- 獲取表單中元素的列表：{{domxref("HTMLFormElement.elements")}}
- [ARIA：表單角色](/zh-TW/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA：搜索角色](/zh-TW/docs/Web/Accessibility/ARIA/Roles/search_role)
