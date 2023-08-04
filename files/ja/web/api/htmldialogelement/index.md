---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}

**`HTMLDialogElement`** インターフェイスは {{HTMLElement("dialog")}} 要素を操作するメソッドを提供します。 {{domxref("HTMLElement")}} インターフェースからプロパティとメソッドを継承しています。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLDialogElement.open")}}
  - : 論理値で、ダイアログが操作可能であることを示す [`open`](/ja/docs/Web/HTML/Element/dialog#open) 属性の値を反映します。
- {{domxref("HTMLDialogElement.returnValue")}}
  - : 文字列で、ダイアログの返値を設定または返却します。

## インスタンスメソッド

_親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

- {{domxref("HTMLDialogElement.close()")}}
  - : ダイアログを閉じます。任意で引数として文字列を渡すことができ、これがダイアログの `returnValue` を更新します。
- {{domxref("HTMLDialogElement.show()")}}
  - : ダイアログをモードレスで開きます。すなわち、その間にダイアログの外のコンテンツが操作できます。
- {{domxref("HTMLDialogElement.showModal()")}}
  - : ダイアログをモーダルで、他のダイアログがあればその最も上に表示します。ダイアログの外の操作はブロックされます。ダイアログの外はすべて [inert](/ja/docs/Web/API/HTMLElement/inert) となり、ダイアログの外の操作はブロックされます。

## イベント

- {{domxref("HTMLDialogElement/cancel_event", "cancel")}}
  - : ユーザーがエスケープキーで現在開いているダイアログを解除したときに発行されます。
- {{domxref("HTMLDialogElement/close_event", "close")}}
  - : エスケープキー、`HTMLDialogElement.close()` メソッド、または [`method="dialog"`](/ja/docs/Web/HTML/Element/form#メソッド) でダイアログ内のフォームを送信することによって、このダイアログが閉じられたときに発行されます。

## 例

### モーダルダイアログを開く

以下の例はボタンを表示し、クリックすると、フォームの入ったモーダルダイアログ ({{htmlelement("dialog")}}) を {{domxref("HTMLDialogElement.showModal()")}} 関数によって開きます。そこから _Cancel_ ボタンを押して ({{domxref("HTMLDialogElement.close()")}} 関数で) ダイアログを閉じるか、送信ボタンでフォームを送信するかします。Cancel ボタンを選択すると、{{domxref("HTMLDialogElement/close_event", "close")}} イベントを生成します。{{domxref("HTMLDialogElement/cancel_event", "cancel")}} イベントではありません。

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
