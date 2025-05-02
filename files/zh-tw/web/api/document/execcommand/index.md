---
title: Document：execCommand() 方法
short-title: execCommand()
slug: Web/API/Document/execCommand
page-type: web-api-instance-method
status:
  - 已淘汰
browser-compat: api.Document.execCommand
---

{{ApiRef("DOM")}}{{deprecated_header}}

**`execCommand`** 方法實現了多種不同的命令。其中一些提供對剪貼簿的存取，而其他則用於編輯 [表單輸入](/zh-TW/docs/Web/HTML/Reference/Elements/input)、[`contenteditable`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/contenteditable) 元素或整個文件（當切換到 [設計模式](/zh-TW/docs/Web/API/Document/designMode)時）。

若要存取剪貼簿，建議使用較新的 [剪貼簿 API](/zh-TW/docs/Web/API/Clipboard_API) 來取代 `execCommand()`。然而，對於編輯命令則沒有替代方案：與直接操作 DOM 不同，`execCommand()` 所執行的修改會保留撤銷緩衝區（編輯歷史）。

大多數命令會影響文件的[選取範圍](/zh-TW/docs/Web/API/Selection)。例如，一些命令（粗體、斜體等）會格式化當前選取的文字，而其他命令則刪除選取範圍、插入新元素（取代選取範圍）或影響整行（縮排）。只有當前活動的可編輯元素可以被修改，但某些命令（例如 `copy`）可以在沒有可編輯元素的情況下運作。

> [!NOTE]
> `execCommand()` 所執行的修改可能會或可能不會觸發 {{domxref("Element/beforeinput_event", "beforeinput")}} 和 {{domxref("Element/input_event", "input")}} 事件，這取決於瀏覽器和組態。如果觸發，這些事件的處理器會在 `execCommand()` 返回之前執行。作者需要小心這類遞迴呼叫，特別是當他們在回應這些事件時呼叫 `execCommand()` 時。從 Firefox 82 開始，嵌套的 `execCommand()` 呼叫將始終失敗，詳見 [bug 1634262](https://bugzil.la/1634262)。

## 語法

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### 參數

- `aCommandName`

  - : 指定要執行的命令名稱的字串。以下是指定的命令：
    - `backColor`
      - : 更改文件背景顏色。在 `styleWithCss` 模式下，它會改變包含區塊的背景顏色。這需要傳入 {{cssxref("&lt;color&gt;")}} 值字串作為值參數。
    - `bold`
      - : 切換選取範圍或插入點的粗體開/關。
    - `contentReadOnly`
      - : 使內容文件變為唯讀或可編輯。這需要布林值 true/false 作為值參數。
    - `copy`
      - : 將當前選取範圍複製到剪貼簿。啟用此行為的條件因瀏覽器而異，並隨時間演變。請檢查相容性表以確定是否可以在你的情況下使用。
    - `createLink`
      - : 從選取範圍創建超連結，但僅在有選取範圍時。需要一個 {{Glossary("URI")}} 字串作為超連結的 `href` 值參數。URI 必須至少包含一個字元，可以是空白字元。
    - `cut`
      - : 移除當前選取範圍並將其複製到剪貼簿。啟用此行為的時間因瀏覽器而異，其條件也隨時間演變。請檢查[相容性表](#browser_compatibility)以了解使用細節。
    - `decreaseFontSize`
      - : 在選取範圍或插入點周圍添加 {{HTMLElement("small")}} 標籤。
    - `defaultParagraphSeparator`
      - : 更改在可編輯文字區域中創建新段落時使用的段落分隔符。
    - `delete`
      - : 刪除當前選取範圍。
    - `enableAbsolutePositionEditor`
      - : 啟用或停用允許絕對定位元素移動的抓取器。從 Firefox 64 開始，抓取器預設為停用（[Firefox bug 1490641](https://bugzil.la/1490641)）。
    - `enableInlineTableEditing`
      - : 啟用或停用表格行/列插入和刪除控制項。從 Firefox 64 開始，控制項預設為停用（[Firefox bug 1490641](https://bugzil.la/1490641)）。
    - `enableObjectResizing`
      - : 啟用或停用影像、表格、絕對定位元素和其他可調整大小物件上的調整大小控制點。從 Firefox 64 開始，控制點預設為停用（[Firefox bug 1490641](https://bugzil.la/1490641)）。
    - `fontName`
      - : 更改選取範圍或插入點的字型名稱。這需要字型名稱字串（例如 `"Arial"`）作為值參數。
    - `fontSize`
      - : 更改選取範圍或插入點的字型大小。這需要一個介於 `1` 到 `7` 的整數作為值參數。
    - `foreColor`
      - : 更改選取範圍或插入點的字型顏色。這需要十六進位顏色值字串作為值參數。
    - `formatBlock`
      - : 在包含當前選取範圍的行周圍添加 HTML 區塊級元素，若已存在則取代該區塊元素（在 Firefox 中，{{HTMLElement("blockquote")}} 是例外——它會包裹任何包含的區塊元素）。需要標籤名稱字串作為值參數。幾乎所有區塊級元素都可以使用。（舊版 Edge 僅支援標題標籤 `H1` – `H6`、`ADDRESS` 和 `PRE`，這些標籤必須用尖括號包裹，例如 `"<H1>"`。）
    - `forwardDelete`
      - : 刪除[游標](https://en.wikipedia.org/wiki/Cursor_%28computers%29)位置前的字元，與按下 Windows 鍵盤上的 Delete 鍵相同。
    - `heading`
      - : 在選取範圍或插入點行周圍添加標題元素。需要標籤名稱字串作為值參數（例如 `"H1"`、`"H6"`）。(Safari 不支援。)
    - `highlightColor`
      - : 更改選取範圍或插入點的背景顏色。需要顏色值字串作為值參數。`useCSS` 必須為 `true` 才能運作。
    - `increaseFontSize`
      - : 在選取範圍或插入點周圍添加 {{HTMLElement("big")}} 標籤。
    - `indent`
      - : 縮排包含選取範圍或插入點的行。在 Firefox 中，如果選取範圍跨越多行且縮排層級不同，則僅會縮排選取範圍中縮排最少的行。
    - `insertBrOnReturn`
      - : 控制 Enter 鍵是插入 {{HTMLElement("br")}} 元素，還是將當前區塊元素分成兩個。
    - `insertHorizontalRule`
      - : 在插入點插入 {{HTMLElement("hr")}} 元素，或用它取代選取範圍。
    - `insertHTML`
      - : 在插入點插入 HTML 字串（刪除選取範圍）。需要有效的 HTML 字串作為值參數。
    - `insertImage`
      - : 在插入點插入影像（刪除選取範圍）。需要影像的 `src` URL 字串作為值參數。此字串的要求與 `createLink` 相同。
    - `insertOrderedList`
      - : 為選取範圍或插入點創建[編號有序清單](/zh-TW/docs/Web/HTML/Reference/Elements/ol)。
    - `insertUnorderedList`
      - : 為選取範圍或插入點創建[項目符號無序清單](/zh-TW/docs/Web/HTML/Reference/Elements/ul)。
    - `insertParagraph`
      - : 在選取範圍或當前行周圍插入[段落](/zh-TW/docs/Web/HTML/Reference/Elements/p)。
    - `insertText`
      - : 在插入點插入給定的純文字（刪除選取範圍）。
    - `italic`
      - : 切換選取範圍或插入點的斜體開/關。
    - `justifyCenter`
      - : 將選取範圍或插入點置中。
    - `justifyFull`
      - : 將選取範圍或插入點對齊。
    - `justifyLeft`
      - : 將選取範圍或插入點向左對齊。
    - `justifyRight`
      - : 將選取範圍或插入點向右對齊。
    - `outdent`
      - : 凸排包含選取範圍或插入點的行。
    - `paste`
      - : 在插入點貼上剪貼簿內容（取代當前選取範圍）。對於網頁內容已停用。
    - `redo`
      - : 重做上一個撤銷命令。
    - `removeFormat`
      - : 移除當前選取範圍的所有格式。
    - `selectAll`
      - : 選取可編輯區域的所有內容。
    - `strikeThrough`
      - : 切換選取範圍或插入點的刪除線開/關。
    - `subscript`
      - : 切換選取範圍或插入點的[下標](/zh-TW/docs/Web/HTML/Reference/Elements/sub)開/關。
    - `superscript`
      - : 切換選取範圍或插入點的[上標](/zh-TW/docs/Web/HTML/Reference/Elements/sup)開/關。
    - `underline`
      - : 切換選取範圍或插入點的[底線](/zh-TW/docs/Web/HTML/Reference/Elements/u)開/關。
    - `undo`
      - : 撤銷最後執行的命令。
    - `unlink`
      - : 從選取的超連結中移除[錨點元素](/zh-TW/docs/Web/HTML/Reference/Elements/a)。
    - `useCSS` {{Deprecated_inline}}
      - : 切換生成標記的 HTML 標籤或 CSS。需要布林值 true/false 作為值參數。
        > [!NOTE]
        > 此參數邏輯上是反向的（即，使用 `false` 來使用 CSS，
        > 使用 `true` 來使用 HTML）。這已被 `styleWithCSS` 取代。
    - `styleWithCSS`
      - : 取代 `useCSS` 命令。`true` 修改/生成標記中的 `style` 屬性，`false` 生成表現元素。
    - `AutoUrlDetect`
      - : 更改瀏覽器的自動連結行為。

- `aShowDefaultUI`
  - : 一個布林值，指示是否應顯示預設的使用者介面。Mozilla 未實作此功能。
- `aValueArgument`
  - : 對於需要輸入參數的命令，是一個提供該資訊的字串。例如，`insertImage` 需要插入影像的 URL。若不需要參數，請指定 `null`。

### 回傳值

一個布林值，若命令不支援或已停用則為 `false`。

> **注意：** `document.execCommand()` 僅在作為使用者互動的一部分調用時返回
> `true`。你無法使用它來在調用命令之前驗證瀏覽器支援。

## 範例

[如何使用 execCommand 與 contentEditable 元素](https://codepen.io/chrisdavidmills/full/gzYjag/) 的範例。

### 使用 insertText

此範例展示了兩個非常基本的 HTML 編輯器，一個使用 {{HTMLElement("textarea")}} 元素，另一個使用設有 [`contenteditable`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/contenteditable) 屬性的 {{HTMLElement("pre")}} 元素。

點擊「粗體」或「斜體」按鈕會在元素中插入相應的標籤，使用 `insertText` 來保留編輯歷史，因此使用者可以撤銷操作。

#### HTML

```html
<h2>textarea</h2>

<div class="actions" data-for="textarea">
  <button data-el="b">粗體</button>
  <button data-el="i">斜體</button>
</div>

<textarea class="editarea">一些文字。</textarea>

<h2>contenteditable</h2>

<div class="actions" data-for="pre">
  <button data-el="b">粗體</button>
  <button data-el="i">斜體</button>
</div>

<pre contenteditable="true" class="editarea">一些文字。</pre>
```

#### JavaScript

```js
// 準備動作按鈕
const buttonContainers = document.querySelectorAll(".actions");

for (const buttonContainer of buttonContainers) {
  const buttons = buttonContainer.querySelectorAll("button");
  const pasteTarget = buttonContainer.getAttribute("data-for");

  for (const button of buttons) {
    const elementName = button.getAttribute("data-el");
    button.addEventListener("click", () =>
      insertText(`<${elementName}></${elementName}>`, pasteTarget),
    );
  }
}

// 在游標處插入文字，或取代選取的文字
function insertText(newText, selector) {
  const textarea = document.querySelector(selector);
  textarea.focus();

  let pasted = true;
  try {
    if (!document.execCommand("insertText", false, newText)) {
      pasted = false;
    }
  } catch (e) {
    console.error("捕獲錯誤：", e);
    pasted = false;
  }

  if (!pasted) {
    console.error("貼上失敗，execCommand 不支援");
  }
}
```

#### 結果

{{EmbedLiveSample("使用 insertText", 100, 300)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [剪貼簿 API](/zh-TW/docs/Web/API/Clipboard_API)
- {{domxref("HTMLElement.contentEditable")}}
- {{domxref("document.designMode")}}
