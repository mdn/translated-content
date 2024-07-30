---
title: "HTMLDialogElement: showModal() メソッド"
short-title: showModal()
slug: Web/API/HTMLDialogElement/showModal
l10n:
  sourceCommit: 0900a5665090b4dc3b4936af5a48591521032bfd
---

{{ APIRef("HTML DOM") }}

**`showModal()`** は {{domxref("HTMLDialogElement")}} インターフェイスのメソッドで、ダイアログをモーダルに、見えるように他のダイアログの最も上に表示します。これは {{glossary("top layer", "最上位レイヤー")}} の中に {{cssxref('::backdrop')}} 擬似要素とともに表示されます。ダイアログの外の操作はブロックされ、ダイアログの外のコンテンツは不活性にレンダリングされます。

## 構文

```js-nolint
showModal()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : ダイアログが既に開いている場合（すなわち、`open` 属性が既に {{htmlelement("dialog")}} 要素に設定されている場合）、またはダイアログが既に示されている[ポップオーバー](/ja/docs/Web/API/Popover_API)である場合も発生します。

## 例

### モーダルダイアログを開く

次の例は、クリックするとフォームを含むモーダル {{htmlelement("dialog")}} を {{domxref("HTMLDialogElement.showModal()")}} 関数で開くボタンを示しています。開いている間、モーダルダイアログのコンテンツ以外は不活性になります。ここから、_Cancel_ ボタンをクリックしてダイアログを閉じたり（{{domxref("HTMLDialogElement.close()")}} 関数で）、submit ボタンによってフォームを送信したりすることができます。キャンセルボタンを選択するとダイアログが閉じられ、{{domxref("HTMLDialogElement/close_event", "close")}} イベントが作成されますが、{{domxref("HTMLElement/cancel_event", "cancel")}} イベントは作成されません。

#### HTML

```html
<!-- pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label for="favAnimal">Favorite animal:</label>
      <select id="favAnimal" name="favAnimal">
        <option></option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select>
    </p>
    <div>
      <button id="cancel" type="reset">Cancel</button>
      <button type="submit">Confirm</button>
    </div>
  </form>
</dialog>

<div>
  <button id="updateDetails">Update details</button>
</div>
```

#### JavaScript

```js
const updateButton = document.getElementById("updateDetails");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
dialog.returnValue = "favAnimal";

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("animalNotChosen");
  openCheck(dialog);
});
```

#### 結果

{{EmbedLiveSample("Opening a modal dialog")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("dialog") }}
