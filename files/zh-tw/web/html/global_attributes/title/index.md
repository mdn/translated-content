---
title: title
slug: Web/HTML/Global_attributes/title
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar("Global_attributes")}}

[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes) **`title`** 包含表示與其所屬元素相關的建議資訊的文字。

{{EmbedInteractiveExample("pages/tabbed/attribute-title.html","tabbed-shorter")}}

`title` 屬性的主要用途是為輔助技術標記 {{HTMLElement("iframe")}} 元素。

`title` 屬性也可以用於標記[資料表](/zh-TW/docs/Web/HTML/Element/table)中的元素。

當 `title` 屬性添加到 [`<link rel="stylesheet">`](/zh-TW/docs/Web/HTML/Element/link) 時，會創建一個備用樣式表。當使用 `<link rel="alternate">` 定義備用樣式表時，此屬性是必需的，並且必須設置為非空字符串。

如果在 {{htmlelement('abbr')}} 開啟標籤中包含 `title` 屬性，則其值必須是縮寫或首字母縮略詞的完整擴展。建議盡可能在第一次使用縮寫或首字母縮略詞時，使用 `<abbr>` 標記縮寫，並在純文本中提供其完整擴展，而不是使用 `title` 屬性。這讓所有用戶都知道縮寫或首字母縮略詞代表的名稱或術語，同時也為用戶代理提供了如何朗讀內容的提示。

雖然 `title` 屬性可以用於為 {{HTMLElement("input")}} 元素提供以程式設計方式關聯的標籤，但這並不是良好的做法。建議改用 {{HTMLElement("label")}}。

## 多行標題

`title` 屬性可以包含多行。每個 `U+000A LINE FEED`（`LF`）字符表示一個換行符。使用時必須小心，因為這意味著以下內容會呈現為兩行：

### HTML

```html
<p>
  需要考量 <code>title</code> 中的換行問題。<span
    title="這是
多行的標題"
    >範例 span</span
  >
  有一個帶有換行符的 title 屬性。
</p>
<hr />
<pre id="output"></pre>
```

### JavaScript

我們可以查詢 `title` 屬性並將其顯示在空的 `<pre>` 元素中，如下所示：

```js
const span = document.querySelector("span");
const output = document.querySelector("#output");
output.textContent = span.title;
```

### 結果

{{EmbedLiveSample('多行標題')}}

## title 屬性繼承

如果一個元素沒有 `title` 屬性，那麼它會從它的父節點繼承它，而父節點又可能從它的父節點繼承它，以此類推。

如果此屬性設置為空字符串，則表示其祖先的 `title` 屬性無關緊要，並且不應在該元素的工具提示中使用。

### HTML

```html
<div title="CoolTip">
  <p>當滑鼠移動到這上面則會顯示「CoolTip」。</p>
  <p title="">當移動到這裡則不會顯示任何資訊。</p>
</div>
```

### 結果

{{EmbedLiveSample('title 屬性繼承')}}

## 無障礙議題

使用 `title` 屬性對於以下情況會造成很大的問題：

- 僅使用觸控設備的用戶
- 使用鍵盤導航的用戶
- 使用輔助技術（如螢幕閱讀器或放大鏡）進行導航的用戶
- 具有精細動作控制障礙的用戶
- 具有認知障礙的用戶

這是因為瀏覽器支援度不一致，再加上輔助技術對瀏覽器渲染頁面的額外解析，導致了這個問題。如果你需要工具提示效果，最好透過[使用更易於訪問的技術](https://inclusive-components.design/tooltips-toggletips/)，以便可以透過以上瀏覽方式訪問。

- [3.2.5.1. title 屬性 | W3C HTML 5.2: 3.HTML 文件的語義、結構和 API](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute)
- [使用 HTML title 屬性（更新版）| The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)
- [工具提示和切換提示——Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [title 屬性的試煉與磨難——24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 所有[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。
- {{domxref("HTMLElement.title")}} 反映这个属性的。
