---
title: <button>：按鈕元素
slug: Web/HTML/Element/button
---

{{HTMLSidebar}}

**`<button>`** [HTML](/zh-TW/docs/Web/HTML) 元素是一個由使用者使用滑鼠、鍵盤、手指、語音命令或其他輔助技術啟動的互動元素。一旦啟動，它將執行一個動作，例如提交一個[表單](/zh-TW/docs/Learn_web_development/Extensions/Forms)或打開對話框。

預設情況下，HTML 按鈕會呈現為與{{Glossary("user agent", "使用者代理")}}所在平台類似的樣式，但你可以使用 [CSS](/zh-TW/docs/Web/CSS) 更改按鈕的外觀。

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

## 屬性

此元素的屬性包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `autofocus`
  - : 此布林屬性指定頁面加載時按鈕應該具有輸入[焦點](/zh-TW/docs/Web/API/HTMLElement/focus)。**文件中只能有一個元素擁有此屬性。**
- `disabled`

  - : 此布林屬性防止用戶與按鈕進行交互：它無法被按下或聚焦。

- `form`

  - : 與按鈕關聯（其*表單所有者*）的 {{HTMLElement("form")}} 元素。此屬性的值必須是同一文件中一個 `<form>` 元素的 `id`。（如果未設置此屬性，則 `<button>` 將與其祖先 `<form>` 元素關聯（如果有）。

    此屬性允許你將 `<button>` 元素與文件中的任何地方的 `<form>` 關聯，而不僅僅是在 `<form>` 內部。它還可以覆蓋祖 `<form>` 元素。

- `formaction`
  - : 處理按鈕提交的信息的 URL。覆蓋按鈕的表單所有者的 [`action`](/zh-TW/docs/Web/HTML/Element/form#action) 屬性。如果沒有表單所有者則不起作用。
- `formenctype`

  - : 如果按鈕是提交按鈕（它在 `<form>` 內部且沒有 `type="button"`），則指定要提交的表單數據的編碼方式。可能的值有：

    - `application/x-www-form-urlencoded`：如果未使用此屬性，則為默認值。
    - `multipart/form-data`：用於提交其 [`type`](/zh-TW/docs/Web/HTML/Element/input#type) 屬性設置為 `file` 的 {{HTMLElement("input")}} 元素。
    - `text/plain`：作為調試輔助工具使用；不應該用於實際表單提交。

    如果指定了此屬性，則它將覆蓋按鈕的表單所有者的 [`enctype`](/zh-TW/docs/Web/HTML/Element/form#enctype) 屬性。

- `formmethod`

  - : 如果按鈕是提交按鈕（它在 `<form>` 內部且沒有 `type="button"`），則此屬性指定用於提交表單的 [HTTP 方法](/zh-TW/docs/Web/HTTP/Methods)。可能的值有：

    - `post`：當將數據提交到服務器時，表單的數據將包含在 HTTP 請求的主體中。在表單包含不應該是公開的信息（例如登錄憑證）時使用。
    - `get`：將表單數據附加到表單的 `action` URL 中，使用 `?` 作為分隔符，並將生成的 URL 發送到服務器。當表單[沒有副作用](/zh-TW/docs/Glossary/Idempotent)時使用，例如搜索表單。
    - `dialog`：此方法用於指示按鈕關聯的 [dialog](/zh-TW/docs/Web/HTML/Element/dialog) 應該關閉，並且根本不傳輸表單數據。

    如果指定了此屬性，則它將覆蓋按鈕的表單所有者的 [`method`](/zh-TW/docs/Web/HTML/Element/form#method) 屬性。

- `formnovalidate`

  - : 如果按鈕是提交按鈕，此布林屬性指定提交表單時不應[驗證](/zh-TW/docs/Learn_web_development/Extensions/Forms/Form_validation)表單。如果指定了此屬性，則它將覆蓋按鈕的表單所有者的 [`novalidate`](/zh-TW/docs/Web/HTML/Element/form#novalidate) 屬性。

    此屬性也適用於 [`<input type="image">`](/zh-TW/docs/Web/HTML/Element/input/image) 和 [`<input type="submit">`](/zh-TW/docs/Web/HTML/Element/input/submit) 元素。

- `formtarget`

  - : 如果按鈕是提交按鈕，則此屬性是作者定義的名稱或標準化的、下劃線前綴的關鍵字，指示提交表單後要在哪裡顯示來自提交的回應。這是一個*瀏覽上下文*（一個分頁、窗口或 {{HTMLElement("iframe")}}）的 `name` 或關鍵字。如果指定了此屬性，則它將覆蓋按鈕的表單所有者的 [`target`](/zh-TW/docs/Web/HTML/Element/form#target) 屬性。以下關鍵字具有特殊含義：

    - `_self`：將回應加載到與當前瀏覽上下文相同的地方。如果未指定此屬性，則為默認值。
    - `_blank`：將回應加載到新的未命名瀏覽上下文中——通常是一個新的分頁或窗口，具體取決於用戶的瀏覽器設置。
    - `_parent`：將回應加載到當前瀏覽上下文的父瀏覽上下文中。如果沒有父瀏覽上下文，則此選項的行為與 `_self` 相同。
    - `_top`：將回應加載到頂級瀏覽上下文中（即當前瀏覽上下文的祖先，並且沒有父瀏覽上下文）。如果沒有父瀏覽上下文，則此選項的行為與 `_self` 相同。

- `name`

  - : 按鈕的名稱，與提交表單時的按鈕值一起作為表單數據的一部分提交。

- `popovertarget`

  - : 將 `<button>` 元素轉換為彈出控制按鈕；以要控制的彈出元素的 ID 作為值。有關更多詳細信息，請參見 {{domxref("Popover API", "Popover API", "", "nocode")}} 登錄頁面。

- `popovertargetaction`

  - : 指定由控制 `<button>` 的彈出元素執行的操作。可能的值為：

    - `"hide"`
      - : 按鈕將隱藏已顯示的彈出元素。如果你嘗試隱藏已經隱藏的彈出元素，則不會執行任何操作。
    - `"show"`
      - : 按鈕將顯示隱藏的彈出元素。如果你嘗試顯示已經顯示的彈出元素，則不會執行任何操作。
    - `"toggle"`
      - : 按鈕將在顯示和隱藏之間切換彈出元素。如果彈出元素是隱藏的，它將被顯示；如果彈出元素是顯示的，它將被隱藏。如果省略了 `popovertargetaction`，則 `"toggle"` 是控制按鈕執行的默認操作。

- `type`

  - : 按鈕的默認行為。可能的值為：

    - `submit`：按鈕將表單數據提交到服務器。如果按鈕與 `<form>` 關聯且未指定此屬性，或者屬性為空或無效值，則此為默認值。
    - `reset`：按鈕將所有控件重置為它們的初始值，類似於 [\<input type="reset">](/zh-TW/docs/Web/HTML/Element/input/reset)。（此行為可能會使用戶感到不滿。）
    - `button`：按鈕沒有默認行為，默認情況下按下時不執行任何操作。它可以讓客戶端腳本監聽元素的事件，當事件發生時觸發行為。

- `value`
  - : 定義按鈕與其 `name` 關聯的值，當使用此按鈕提交表單數據時，該值將作為參數傳遞到服務器。

## 備註

設置了 `formaction` 屬性的提交按鈕，但沒有相應的表單時，將不執行任何操作。你必須設置表單所有者，可以通過將其包裹在 `<form>` 中或將屬性 `form` 設置為表單的 id。

`<button>` 元素比 {{HTMLElement("input")}} 元素更容易樣式化。你可以添加內部 HTML 內容（例如 `<i>`、`<br>` 或甚至 `<img>`），並使用 {{Cssxref("::after")}} 和 {{Cssxref("::before")}} 偽元素進行複雜渲染。

如果你的按鈕不是用於將表單數據提交到服務器，請務必將其 `type` 屬性設置為 `button`。否則，它們將嘗試提交表單數據並加載（不存在的）響應，可能破壞文件的當前狀態。

雖然 `<button type="button">` 沒有默認行為，但可以編寫事件處理程序以觸發行為。使用[JavaScript](/zh-TW/docs/Learn_web_development/Core/Scripting)可以編寫可編程動作，例如從列表中刪除項目。

## 範例

```html
<button name="button">Press me</button>
```

{{ EmbedLiveSample('範例', 200, 64) }}

## 無障礙議題

### 圖標按鈕

僅顯示圖標以表示的按鈕沒有*可訪問名稱*。可訪問名稱提供了輔助技術（例如螢幕閱讀器）在解析文件並生成[無障礙樹](/zh-TW/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#無障礙網頁_api)時使用的信息。然後，輔助技術使用無障礙樹來導航和操作頁面內容。

要為圖標按鈕提供可訪問名稱，請在 `<button>` 元素中放置簡要描述按鈕功能的文本。

#### 範例

```html
<button name="favorite">
  <svg aria-hidden="true" viewBox="0 0 10 10">
    <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z" />
  </svg>
  Add to favorites
</button>
```

##### 結果

{{EmbedLiveSample('圖標按鈕')}}

如果要在視覺上隱藏按鈕的文本，可以使用[一系列 CSS 屬性](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link)將其從螢幕上去除，但保持輔助技術可解析。然而，值得注意的是，保留按鈕文本的視覺呈現有助於可能不熟悉圖標含義或不了解按鈕目的的人群。對於技術不熟悉的人，或者對按鈕使用的圖標具有不同文化解釋的人來說，這尤其重要。

- [什麼是可訪問名稱？| The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN 理解 WCAG，指南 4.1 解釋](/zh-TW/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [理解成功標準 4.1.2 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### 尺寸和接近性

#### 尺寸

按鈕等交互式元素應提供足夠大的區域，使其易於激活。這有助於各種人群，包括存在運動控制問題的人，以及使用非精確輸入形式（例如觸控筆或手指）的人。建議的最小交互尺寸為 44×44 [CSS 像素](https://www.w3.org/TR/WCAG21/#dfn-css-pixels)。

- [理解成功標準 2.5.5：目標尺寸 | W3C 理解 WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [目標尺寸和 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [快速測試：大型觸控目標 - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### 接近性

將大量交互式內容（包括按鈕等）放置在視覺上相鄰的地方時，應該有間距將它們分隔開來。這種間距有助於那些可能因為運動控制問題而意外激活錯誤交互式內容的人。

間距可以使用 CSS 屬性（例如 {{cssxref("margin")}}）創建。

- [手抖和巨型按鈕問題 - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA 狀態資訊

要描述按鈕的狀態，正確使用的 ARIA 屬性是 [`aria-pressed`](/zh-TW/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)，而不是 [`aria-checked`](/zh-TW/docs/Web/Accessibility/ARIA/Attributes/aria-checked) 或 [`aria-selected`](/zh-TW/docs/Web/Accessibility/ARIA/Attributes/aria-selected)。要了解更多信息，請閱讀有關 [ARIA 按鈕角色](/zh-TW/docs/Web/Accessibility/ARIA/Roles/button_role) 的信息。

### Firefox

Firefox 會在焦點位於按鈕上時添加一個小虛點邊框。這個邊框是在瀏覽器樣式表中通過 CSS 聲明的，但你可以覆蓋它以添加自己的焦點樣式，使用 [`button::-moz-focus-inner { }`](/zh-TW/docs/Web/CSS/::-moz-focus-inner)。

如果覆蓋了它，**確保當焦點移動到按鈕上時的狀態變化足夠明顯**，以便視力受損的人能夠感知它。

顏色對比度是通過比較按鈕文本和背景顏色值相對於按鈕放置在其上的背景的亮度來確定的。為了滿足當前的 [網頁內容無障礙性指南（WCAG）](https://www.w3.org/WAI/standards-guidelines/wcag/)，文本內容需要達到 4.5:1 的比率，大文本則需要 3:1。 （大文本被定義為 18.66px 和 {{cssxref("font-weight", "bold")}} 或更大，或者 24px 或更大。）

- [WebAIM: 顏色對比度檢查器](https://webaim.org/resources/contrastchecker/)
- [MDN 了解 WCAG，指南 1.4 說明](/zh-TW/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [了解成功標準 1.4.3 | W3C 了解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### 點擊和焦點

在大多數瀏覽器中，單擊 {{HTMLElement("button")}} 或 {{HTMLElement("input")}} 按鈕類型會導致其（默認情況下）獲得焦點，但是根據瀏覽器和操作系統，這是不同的。大多數瀏覽器確實會將焦點設置在單擊的按鈕上，但是 [Safari 由於設計原因不會這樣做](https://webkit.org/b/22261)。

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
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#互動型內容"
          >互動型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#form_listed"
          >listed</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#labelable"
          >labelable</a
        > 和 <a href="/zh-TW/docs/Web/HTML/Content_categories#submittable"
          >submittable</a
        > <a
          href="/zh-TW/docs/Web/HTML/Content_categories#表單相關內容"
          >表單相關內容</a
        >元素、<a href="/zh-TW/docs/Web/HTML/Content_categories#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >，但不能包含<a
          href="/zh-TW/docs/Web/HTML/Content_categories#互動型內容"
          >互動型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
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
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/button_role"
            >button</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLButtonElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
