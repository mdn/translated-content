---
title: Document：execCommand() 方法
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("DOM")}}{{deprecated_header}}

**`execCommand`** 方法實現了多種不同的命令。其中一些提供對剪貼簿的存取，而其他則用於編輯[表單輸入](/zh-TW/docs/Web/HTML/Reference/Elements/input)、[`contenteditable`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/contenteditable) 元素或整個文件（當切換到[設計模式](/zh-TW/docs/Web/API/Document/designMode)時）。

若要存取剪貼簿，建議使用較新的 [Clipboard API](/zh-TW/docs/Web/API/Clipboard_API) 來取代 `execCommand()`。然而，對於編輯命令則沒有替代方案：與直接操作 DOM 不同，`execCommand()` 所執行的修改會保留撤銷緩衝區（編輯歷史）。

大多數命令會影響文件的[選取範圍](/zh-TW/docs/Web/API/Selection)。例如，一些命令（粗體、斜體等）會格式化當前選取的文字，而其他命令則刪除選取範圍、插入新元素（取代選取範圍）或影響整行（縮排）。只有當前處於活動狀態的可編輯元素可以被修改，但某些命令（例如 `copy`）可以在沒有可編輯元素的情況下運作。

> [!NOTE]
> `execCommand()` 所執行的修改可能會或可能不會觸發 {{domxref("Element/beforeinput_event", "beforeinput")}} 和 {{domxref("Element/input_event", "input")}} 事件，這取決於瀏覽器和配置。如果觸發，這些事件的處理器會在 `execCommand()` 回傳之前執行。作者需要注意這類遞迴呼叫，特別是在回應這些事件時呼叫 `execCommand()` 的情況下。從 Firefox 82 開始，巢狀的 `execCommand()` 呼叫將始終失敗，詳見 [bug 1634262](https://bugzil.la/1634262)。

## 語法

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### 參數

- `aCommandName`
  - : 指定要執行的命令名稱的字串。以下命令被指定：
    - `backColor`
      - : 更改文件背景顏色。在 `styleWithCss` 模式下，它會改變包含區塊的背景顏色。這需要傳遞一個 {{cssxref("&lt;color&gt;")}} 值字串作為引數值。
    - `bold`
      - : 切換選取範圍或插入點的粗體開／關。
    - `contentReadOnly`
      - : 使內容文件變為唯讀或可編輯。這需要一個布林值 true／false 作為引數值。
    - `copy`
      - : 將當前選取範圍複製到剪貼簿。此行為的啟用條件因瀏覽器而異，並隨時間演變。請檢查相容性表以確定是否可以在你的情況下使用。
    - `createLink`
      - : 從選取範圍創建一個超連結，但僅在有選取範圍時才有效。需要一個 {{Glossary("URI")}} 字串作為超連結 `href` 的引數值。URI 必須至少包含一個字元，可以是空白字元。
    - `cut`
      - : 移除當前選取範圍並將其複製到剪貼簿。此行為的啟用時間因瀏覽器而異，其條件也隨時間演變。請檢查[相容性表](#瀏覽器相容性)以獲取使用細節。
    - `decreaseFontSize`
      - : 在選取範圍或插入點周圍添加一個 {{HTMLElement("small")}} 標籤。
    - `defaultParagraphSeparator`
      - : 更改在可編輯文字區域中創建新段落時使用的段落分隔符。
    - `delete`
      - : 刪除當前選取範圍。
    - `enableAbsolutePositionEditor`
      - : 啟用或停用允許絕對定位元素移動的抓取器。從 Firefox 64 開始，抓取器預設為停用（[Firefox bug 1490641](https://bugzil.la/1490641)）。
    - `enableInlineTableEditing`
      - : 啟用或停用表格列／欄插入和刪除控制項。從 Firefox 64 開始，控制項預設為停用（[Firefox bug 1490641](https://bugzil.la/1490641)）。
    - `enableObjectResizing`
      - : 啟用或停用圖像、表格、絕對定位元素和其他可調整大小物件上的調整大小控制點。從 Firefox 64 開始，控制點預設為停用（[Firefox bug 1490641](https://bugzil.la/1490641)）。
    - `fontName`
      - : 更改選取範圍或插入點的字體名稱。這需要一個字體名稱字串（例如 `"Arial"`）作為引數值。
    - `fontSize`
      - : 更改選取範圍或插入點的字體大小。這需要一個從 `1` 到 `7` 的整數作為引數值。
    - `foreColor`
      - : 更改選取範圍或插入點的字體顏色。這需要一個十六進位顏色值字串作為引數值。
    - `formatBlock`
      - : 在包含當前選取範圍的行周圍添加一個 HTML 區塊級元素，若存在則替換包含該行的區塊元素（在 Firefox 中，{{HTMLElement("blockquote")}} 是例外——它會包裹任何包含的區塊元素）。需要一個標籤名稱字串作為引數值。幾乎所有區塊級元素都可以使用。（舊版 Edge 僅支援標題標籤 `H1` – `H6`、`ADDRESS` 和 `PRE`，這些標籤必須用尖括號包裹，例如 `"<H1>"`。）
    - `forwardDelete`
      - : 刪除[游標](https://zh.wikipedia.org/wiki/游標)位置前的字元，與按下 Windows 鍵盤上的 Delete 鍵相同。
    - `heading`
      - : 在選取範圍或插入點行周圍添加一個標題元素。需要標籤名稱字串作為引數值（例如 `"H1"`、`"H6"`）。(Safari 不支援。)
    - `highlightColor`
      - : 更改選取範圍或插入點的背景顏色。需要一個顏色值字串作為引數值。`useCSS` 必須為 `true` 才能運作。
    - `increaseFontSize`
      - : 在選取範圍或插入點周圍添加一個 {{HTMLElement("big")}} 標籤。
    - `indent`
      - : 縮排包含選取範圍或插入點的行。在 Firefox 中，如果選取範圍跨越多行且縮排層級不同，則僅會縮排選取範圍中縮排最少的行。
    - `insertBrOnReturn`
      - : 控制 Enter 鍵是插入 {{HTMLElement("br")}} 元素，還是將當前區塊元素分成兩個。
    - `insertHorizontalRule`
      - : 在插入點插入一個 {{HTMLElement("hr")}} 元素，或用它取代選取範圍。
    - `insertHTML`
      - : 在插入點插入一個 HTML 字串（刪除選取範圍）。需要一個有效的 HTML 字串作為引數值。
    - `insertImage`
      - : 在插入點插入一個圖像（刪除選取範圍）。需要一個圖像 `src` 的 URL 字串作為引數值。此字串的要求與 `createLink` 相同。
    - `insertOrderedList`
      - : 為選取範圍或插入點創建一個[編號的有序列表](/zh-TW/docs/Web/HTML/Reference/Elements/ol)。
    - `insertUnorderedList`
      - : 為選取範圍或插入點創建一個[帶點的無序列表](/zh-TW/docs/Web/HTML/Reference/Elements/ul)。
    - `insertParagraph`
      - : 在選取範圍或當前行周圍插入一個[段落](/zh-TW/docs/Web/HTML/Reference/Elements/p)。
    - `insertText`
      - : 在插入點插入給定的純文字（刪除選取範圍）。
    - `italic`
      - : 切換選取範圍或插入點的斜體開／關。
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
      - : 在插入點貼上剪貼簿內容（取代當前選取範圍）。對於 Web 內容不可用。
    - `redo`
      - : 重做上一個撤銷命令。
    - `removeFormat`
      - : 移除當前選取範圍的所有格式。
    - `selectAll`
      - : 選取可編輯區域的所有內容。
    - `strikeThrough`
      - : 切換選取範圍或插入點的刪除線開／關。
    - `subscript`
      - : 切換選取範圍或插入點的[下標](/zh-TW/docs/Web/HTML/Reference/Elements/sub)開／關。
    - `superscript`
      - : 切換選取範圍或插入點的[上標](/zh-TW/docs/Web/HTML/Reference/Elements/sup)開／關。
    - `underline`
      - : 切換選取範圍或插入點的[底線](/zh-TW/docs/Web/HTML/Reference/Elements/u)開／關。
    - `undo`
      - : 撤銷最後執行的命令。
    - `unlink`
      - : 從選取的超連結中移除[錨點元素](/zh-TW/docs/Web/HTML/Reference/Elements/a)。
    - `useCSS` {{Deprecated_inline}}
      - : 切換生成標記時使用 HTML 標籤或 CSS。需要一個布林值 true/false 作為引數值。
        > [!NOTE]
        > 此參數在邏輯上是反向的（即，使用 `false` 表示使用 CSS，使用 `true` 表示使用 HTML）。此功能已被 `styleWithCSS` 取代。
    - `styleWithCSS`
      - : 取代 `useCSS` 命令。`true` 修改／生成標記中的 `style` 屬性，`false` 生成展示用元素。
    - `AutoUrlDetect`
      - : 更改瀏覽器的自動連結行為。

- `aShowDefaultUI`
  - : 一個布林值，指示是否應顯示預設的使用者介面。Mozilla 中未實作此功能。
- `aValueArgument`
  - : 對於需要輸入引數的命令，是一個提供該資訊的字串。例如，`insertImage` 需要插入圖像的 URL。若不需要引數，請指定 `null`。

### 回傳值

一個布林值，若命令不支援或已停用則為 `false`。

> [!NOTE]
> 只有在作為使用者互動的一部分被呼叫時，`document.execCommand()` 才會回傳 `true`。你不能用它來在呼叫指令之前驗證瀏覽器是否支援該指令。

## 範例

[如何使用 execCommand 與 contentEditable 元素的範例](https://codepen.io/chrisdavidmills/full/gzYjag/)（CodePen）。

### 使用 insertText

此範例展示了兩個非常基本的 HTML 編輯器，一個使用 {{HTMLElement("textarea")}} 元素，另一個使用帶有 [`contenteditable`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/contenteditable) 屬性的 {{HTMLElement("pre")}} 元素。

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
// 準備操作按鈕
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
    console.error("捕獲的錯誤：", e);
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

- [Clipboard API](/zh-TW/docs/Web/API/Clipboard_API)
- {{domxref("HTMLElement.contentEditable")}}
- {{domxref("document.designMode")}}
