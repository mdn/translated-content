---
title: Document.execCommand()
slug: Web/API/Document/execCommand
---

{{ApiRef("DOM")}}{{deprecated_header}}

當 HTML 文件（document）被切換到 [`designMode`](/zh-TW/docs/Web/API/Document/designMode) 時，它的 `document` 物件就會對外暴露 **`execCommand`** 方法作為操控目前可編輯區域的指令，譬如 [form inputs](/zh-TW/docs/Web/HTML/Element/input) 或 [`contentEditable`](/zh-TW/docs/Web/HTML/Global_attributes/contenteditable) 元素。

多數的指令會作用在文件的[選取](/zh-TW/docs/Web/API/Selection) （粗體、斜體等），而其他則像是插入新的元素（新增一個連結）或是影響一整列的文字（縮排）。當使用 `contentEditable` 時， `execCommand()` 會作用在目前活躍的可編輯元素上。

## 語法

```plain
document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### 回傳值

如果該指令不被支援或停用將回傳一個 `false` 的 {{jsxref('Boolean')}} 值。

> **備註：** 只有在使用者互動的部分回傳 `true` 。請不要嘗試在呼叫指令前使用回傳值來確認瀏覽器是否支援。

### 參數

- `aCommandName`
  - : 一個 {{domxref("DOMString")}} 作為指定要執行的指令。所有可用的指令列表請見 [指令](#指令) 。
- `aShowDefaultUI`
  - : 一個 {{jsxref("Boolean")}} 作為指示是否顯示預設的使用者介面。 Mozilla 並未實作這項功能。
- `aValueArgument`
  - : 針對需要提供輸入引數的指令，藉由 {{domxref("DOMString")}} 提供相關的資訊。譬如， `insertImage` 需要提供圖片的 URL 。若沒有引數的需求則可指定為 `null` 。

### 指令

- `backColor`
  - : 變更文件的背景色彩。在 `styleWithCss` 模式中，它作用於涵蓋區域的背景色彩。這個指令需要提供一個 {{cssxref("&lt;color&gt;")}} 值字串作為引數值。請留意， Internet Explorer 使用這個指令作為設定文字的背景色彩。
- `bold`
  - : 切換選取區域插入點的粗體與否。 Internet Explorer 使用 {{HTMLElement("strong")}} 標籤而不是 {{HTMLElement("b")}}.
- `ClearAuthenticationCache`
  - : 清除所有快取中的驗證憑證。
- `contentReadOnly`
  - : 使內容文件成為唯讀或可編輯。此指令需要提供布林值 true/false 作為引數值。（Internet Explorer 不支援）。
- `copy`
  - : 複製目前選取的區域到剪貼簿。各個瀏覽器對於這個指令的行為可能有所差異且不斷變更。如果你有使用這個指令的情境，請先查閱相容性表格來決定如何使用。
- `createLink`
  - : 對選取的區域建立超連結，僅限於有選取內容。需要提供一個 [URI](/zh-TW/docs/Archive/Mozilla/URIs_and_URLs) 字串值作為超連結的 `href` 。 URI 必須最少包含一個字元且可以是空白字元（Internet Explorer 會建立一個 `null` 值的連結）。
- `cut`
  - : 移除目前選取的區域並複製到剪貼簿。各個瀏覽器對於這個指令的行為可能有所差異且不斷變更。使用細節請查閱[相容性表格](#Browser_compatibility)。
- `decreaseFontSize`
  - : 在選取區域或插入點的前後加入一個 {{HTMLElement("small")}} 標籤（ Internet Explorer 不支援）
- `defaultParagraphSeparator`
  - : 變更可編輯文字區域於新增段落時的段落分隔器。更多細節請查閱 [產生 markup 的區別](/zh-TW/docs/Web/Guide/HTML/Editable_content#Differences_in_markup_generation)。
- `delete`
  - : 刪除目前選取的區域。
- `enableAbsolutePositionEditor`
  - : 啟用或停用用於移動絕對定位元素的抓取器。這個指令在 Firefox 63 Beta/Dev 版本中預設停用（[Firefox bug 1449564](https://bugzil.la/1449564)）。
- `enableInlineTableEditing`
  - : 啟用或停用表格的列 / 欄的插入及刪除。此指令在 Firefox 63 Beta/Dev 版本中預設停用（[Firefox bug 1449564](https://bugzil.la/1449564)）。
- `enableObjectResizing`
  - : 啟用或停用圖片、表格、絕對定位元素、其他可重設大小物件的重設大小處理。此指令在 Firefox 63 Beta/Dev 版本中預設停用（[Firefox bug 1449564](https://bugzil.la/1449564)）。
- `fontName`
  - : 變更選取區域或插入點的字型名稱。此指令需要字型名稱字串（如「Arial」）作為引數值。
- `fontSize`
  - : 變更選取區域或插入點的字型大小。此指令需要 `1`-`7` 的整數作為引數值。
- `foreColor`
  - : 變更選取區域或插入點的字型色彩。此指令需要十六進位的色彩字串作為引數值。
- `formatBlock`
  - : 在目前選取區域的前後加入一個 HTML 區塊層級元素，若選取區域已經存在區塊元素則取代之。（在 Firefox 中， {{HTMLElement("blockquote")}} 是個例外——它會包裹住任何所包含的區塊元素）。 此指令需要一個標籤名稱字串作為引數值。幾乎所有區塊層級元素都可以使用（Internet Explorer and Edge 僅支援標題標籤 `H1`–`H6` 、 `ADDRESS` 、 `PRE` 且必須由角括號包裹起來，譬如 `"<H1>"` ）。
- `forwardDelete`
  - : 刪除游標位置後的字元，等同於在 Windows 按下 Delete 鍵盤按鍵。
- `heading`
  - : 在選取區域或插入點前後加入一個標題元素。此指令需要標籤名稱字串作為引數值（例：`"H1"`, `"H6"` ）（Internet Explorer 及 Safari 不支援）。
- `hiliteColor`
  - : 變更選取區域或插入點的背景色彩。此指令需要一個色彩字串作為引數值。 `useCSS` 必須為 `true` 才能有作用（Internet Explorer 不支援）。
- `increaseFontSize`
  - : 在選取區域或插入點前後加入一個 {{HTMLElement("big")}} 標題（Internet Explorer 不支援）。
- `indent`
  - : 縮排選取區域或插入點所包含的列。在 Firefox ，如果選取的範圍跨越多列且不同的縮排層級，只有選取中最淺層縮排列的才會被縮排。
- `insertBrOnReturn`
  - : 控制 Enter 按鍵按下時在目前區塊元素中插入 {{HTMLElement("br")}} 元素或分割成為兩個元素（Internet Explorer 不支援）。
- `insertHorizontalRule`
  - : 在插入點插入一個 {{HTMLElement("hr")}} 元素或以它取代選取的內容。
- `insertHTML`
  - : 在插入點插入一個 HTML 字串（會刪除選取內容）需要一個有效的 HTML 字串作為引數值（Internet Explorer 不支援）。
- `insertImage`
  - : 在插入點插入一個圖片（會刪除選取內容）。需要一個 URL 字串作為圖片的 `src` 引數值。這個需求跟 `createLink` 的字串是一樣的。
- `insertOrderedList`
  - : 在選取區域或插入點建立一個[有序的清單](/zh-TW/docs/Web/HTML/Element/ol)。
- `insertUnorderedList`
  - : 在選取區域或插入點建立一個[無序的清單](/zh-TW/docs/Web/HTML/Element/ul)。
- `insertParagraph`
  - : 在選取區域或目前列的前後插入[段落](/zh-TW/docs/Web/HTML/Element/p)（Internet Explorer 會在插入點插入段落並刪除選取的內容）。
- `insertText`
  - : 在插入點處插入給予的純文字（選取內容將被刪除）。
- `italic`
  - : 切換選取區域或插入點的斜體開關（Internet Explorer 使用 {{HTMLElement("em")}} 元素而不是 {{HTMLElement("i")}} ）。
- `justifyCenter`
  - : 置中對齊選取區域或插入點的內容。
- `justifyFull`
  - : 左右對齊選取區域或插入點的內容。
- `justifyLeft`
  - : 靠左對齊選取區域或插入點的內容。
- `justifyRight`
  - : 靠右對齊選取區域或插入點的內容。
- `outdent`
  - : 凸排選取區域或插入點所包含的列。
- `paste`
  - : 在目前的插入點貼上剪貼簿的內容（取代目前選取的項目）。網頁內容無法使用。詳閱 \[1]。
- `redo`
  - : 復原上一個取消的指令。
- `removeFormat`
  - : 移除目前選取區域所有的格式。
- `selectAll`
  - : 選取可編輯區域的所有內容。
- `strikeThrough`
  - : 切換選取區域或插入點的刪除線開關。
- `subscript`
  - : 切換選取區域或插入點的 [subscript](/zh-TW/docs/Web/HTML/Element/sub) 開關。
- `superscript`
  - : 切換選取區域或插入點的 [superscript](/zh-TW/docs/Web/HTML/Element/sup) 開關。
- `underline`
  - : 切換選取區域或插入點的[底線](/zh-TW/docs/Web/HTML/Element/u)開關。
- `undo`
  - : 取消上一個執行的指令。
- `unlink`
  - : 從選取的超連結刪除[錨點元素](/zh-TW/docs/Web/HTML/Element/a)。
- `useCSS` {{Deprecated_inline}}
  - : 針對產生的 markup 使用 HTML 標籤或 CSS。此指令需要一個布林值 true/false 作為引數值。注意：這個引述在邏輯上是反向的（舉例：使用 `false` 會使用 CSS ，反之使用 `true` 則使用 HTML 且 Internet Explorer 不支援。這個指令已經被棄用並由 `styleWithCSS` 取而代之。
- `styleWithCSS`
  - : 取代 `useCSS` 的指令。 `true` 會在 markup 修改 / 產生 `style` 屬性， false 會產生展示用的元素。

## 範例

一個在 CodePen 上展示[如果使用](https://codepen.io/chrisdavidmills/full/gzYjag/)的範例。

## 規格

<table class="spectable standard-table">
  <tbody>
    <tr>
      <th scope="col">規格</th>
      <th scope="col">狀態</th>
      <th scope="col">備註</th>
    </tr>
    <tr>
      <td>
        <a href="https://w3c.github.io/editing/execCommand.html#execcommand()"
          >execCommand</a
        >
      </td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## 瀏覽器相容性

{{Compat}}

## 相關資訊

- {{domxref("HTMLElement.contentEditable")}}
- {{domxref("document.designMode")}}
- [Rich-Text Editing in Mozilla](/zh-TW/docs/Rich-Text_Editing_in_Mozilla)
- [Scribe's "Browser Inconsistencies" documentation](https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md) with bugs related to `document.execCommand`.
