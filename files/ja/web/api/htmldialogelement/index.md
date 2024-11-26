---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{APIRef("HTML DOM")}}

**`HTMLDialogElement`** インターフェイスは {{HTMLElement("dialog")}} 要素を操作するメソッドを提供します。 {{domxref("HTMLElement")}} インターフェイスからプロパティとメソッドを継承しています。

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

_親インターフェイスである {{DOMxRef("HTMLElement")}} から継承したイベントがあります。_

これらのイベントを {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} を使用して、またはこのインターフェイスの `onイベント名` プロパティにイベントリスナーを代入することによって待ち受けます。

- {{domxref("HTMLDialogElement/close_event", "close")}}
  - : エスケープキー、`HTMLDialogElement.close()` メソッド、または [`method="dialog"`](/ja/docs/Web/HTML/Element/form#メソッド) でダイアログ内のフォームを送信することによって、このダイアログが閉じられたときに発行されます。

## 例

### モーダルダイアログを開く

以下の例はボタンを表示し、クリックすると、フォームの入ったモーダルダイアログ ({{htmlelement("dialog")}}) を {{domxref("HTMLDialogElement.showModal()")}} 関数によって開きます。そこから _Cancel_ ボタンを押して ({{domxref("HTMLDialogElement.close()")}} 関数で) ダイアログを閉じるか、送信ボタンでフォームを送信するかします。Cancel ボタンを選択すると、{{domxref("HTMLDialogElement/close_event", "close")}} イベントを生成します。{{domxref("HTMLElement/cancel_event", "cancel")}} イベントではありません。

#### HTML

```html
<!-- フォームが入ったポップアップダイアログボックス -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label for="favAnimal">好きな動物:</label>
      <select id="favAnimal" name="favAnimal">
        <option></option>
        <option>アルテミア</option>
        <option>レッサーパンダ</option>
        <option>クモザル</option>
      </select>
    </p>
    <div>
      <button id="cancel" type="reset">キャンセル</button>
      <button type="submit">確認</button>
    </div>
  </form>
</dialog>

<div>
  <button id="updateDetails">詳細を更新</button>
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

// 更新ボタンを押すとモーダルダイアログが開く
updateButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// ダイアログボックスを閉じるフォームキャンセルボタン
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
