---
title: Document：querySelector() 方法
slug: Web/API/Document/querySelector
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{ApiRef("DOM")}}

{{domxref("Document")}} 的 **`querySelector()`** 方法回傳文件中第一個符合指定 [CSS 選擇器](/zh-TW/docs/Web/CSS/Guides/Selectors)或一組 CSS 選擇器的 {{domxref("Element")}}。如果沒有找到匹配項，則回傳 `null`。

匹配是使用深度優先前序遍歷來進行的，從文件標記中的第一個元素開始，依據子節點的數量順序，依序遍歷文件中的節點。

如果指定的選擇器匹配了在文件中被錯誤多次使用的 ID，則回傳具有該 ID 的第一個元素。

[CSS 偽元素](/zh-TW/docs/Web/CSS/Reference/Selectors/Pseudo-elements)永遠不會回傳任何元素。

## 語法

```js-nolint
querySelector(selectors)
```

### 參數

- `selectors`
  - : 包含一個或多個選擇器的字串。此字串必須是有效的 CSS 選擇器字串；如果不是，則會拋出 `SyntaxError` 例外。

    注意 HTML 規範並不要求屬性值是有效的 CSS 識別符。如果 [`class`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/class) 或 [`id`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/id) 屬性值不是有效的 CSS 識別符，那麼在選擇器中使用它之前，你必須對其進行轉義，可以通過呼叫 {{domxref("CSS.escape_static", "CSS.escape()")}} 或使用[轉義字元](/zh-TW/docs/Web/CSS/Reference/Values/ident#轉義字元)中描述的技術之一進行轉義。參見[轉義屬性值](#轉義屬性值)範例。

### 回傳值

一個 {{domxref("Element")}} 物件，表示文件中第一個符合指定 [CSS 選擇器](/zh-TW/docs/Web/CSS/Guides/Selectors)的元素；如果沒有匹配項，則回傳 `null`。

如果你需要符合指定選擇器的所有元素的清單，應該使用 {{domxref("Document.querySelectorAll", "querySelectorAll()")}}。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 當指定的*選擇器*語法無效時拋出。

## 範例

### 查找匹配類別的第一個元素

在此範例中，回傳文件中第一個具有類別 `myclass` 的元素：

```js
const el = document.querySelector(".myclass");
```

### 複雜選擇器

選擇器也可以非常強大，如以下範例所示。這裡回傳文件中位於類別為「user-panel main」的 {{HTMLElement("div")}}（`<div class="user-panel main">`）內，名稱為「login」的第一個 {{HTMLElement("input")}} 元素（`<input name="login"/>`）：

```js
const el = document.querySelector("div.user-panel.main input[name='login']");
```

### 反向

由於所有 CSS 選擇器字串都是有效的，你也可以反向選擇器：

```js
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']",
);
```

這將選擇一個父元素為具有 `user-panel` 類別但沒有 `main` 類別的 div 的輸入元素。

### 轉義屬性值

此範例顯示，如果 HTML 文件包含一個不是有效的 [CSS 識別符](/zh-TW/docs/Web/CSS/Reference/Values/ident)的 [`id`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/id)，那麼在 `querySelector()` 中使用它之前，我們必須對屬性值進行轉義。

#### HTML

在以下程式碼中，一個 {{htmlelement("div")}} 元素的 `id` 是 `"this?element"`，這不是有效的 CSS 識別符，因為 `"?"` 字元在 CSS 識別符中不被允許。

我們還有三個按鈕和一個用於記錄錯誤的 {{htmlelement("pre")}} 元素。

```html
<div id="this?element"></div>

<button id="no-escape">不轉義</button>
<button id="css-escape">CSS.escape()</button>
<button id="manual-escape">手動轉義</button>

<pre id="log"></pre>
```

#### CSS

```css
div {
  background-color: blue;
  margin: 1rem 0;
  height: 100px;
  width: 200px;
}
```

#### JavaScript

當點擊這三個按鈕時，它們都會嘗試選擇 `<div>`，然後將其背景顏色設定為隨機值。

- 第一個按鈕直接使用 `"this?element"` 值。
- 第二個按鈕使用 {{domxref("CSS.escape_static", "CSS.escape()")}} 對值進行轉義。
- 第三個按鈕通過反斜線顯式轉義 `"?"` 字元。注意，我們還必須使用另一個反斜線來轉義反斜線本身，像是：`"\\?"`。

```js
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const element = document.querySelector(`#${id}`);
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    element.style.backgroundColor = randomColor;
  } catch (e) {
    log.textContent = e;
  }
}

document.querySelector("#no-escape").addEventListener("click", () => {
  setBackgroundColor("this?element");
});

document.querySelector("#css-escape").addEventListener("click", () => {
  setBackgroundColor(CSS.escape("this?element"));
});

document.querySelector("#manual-escape").addEventListener("click", () => {
  setBackgroundColor("this\\?element");
});
```

#### 結果

點擊第一個按鈕會產生錯誤，而第二個和第三個按鈕則能正常工作。

{{embedlivesample("轉義屬性值", "", 200)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用選擇器定位 DOM 元素](/zh-TW/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- {{domxref("Element.querySelector()")}}
- {{domxref("Document.querySelectorAll()")}}
- {{domxref("Element.querySelectorAll()")}}
