---
title: "HTMLDialogElement: returnValue プロパティ"
short-title: returnValue
slug: Web/API/HTMLDialogElement/returnValue
l10n:
  sourceCommit: 892f5d7d285d5ed9d79012b5e19c459392a7669e
---

{{ APIRef("HTML DOM") }}

**`returnValue`** は {{domxref("HTMLDialogElement")}} インターフェイスのプロパティで、{{htmlelement("dialog")}} 要素が閉じたときの返値を表す文字列です。
値を直接設定したり (`dialog.returnValue = "result"`)、 {{domxref("HTMLDialogElement.close()", "close()")}} や {{domxref("HTMLDialogElement.requestClose()", "requestClose()")}} に文字列引数として提供する形設定したりすることができます。

## 値

ダイアログの `returnValue` を表す文字列です。
既定値は空文字列 (`""`) です。

## 例

### 返値の確認

次の例は、ダイアログを開くためのボタンを表示します。ダイアログは、利用規約の受け入れをユーザーに依頼します。

ダイアログには［承諾］または［拒否］ボタンが含まれます。ユーザーがどちらかのボタンをクリックすると、そのボタンのクリックハンドラーがダイアログを閉じ、選択内容を {{domxref("HTMLDialogElement.close()", "close()")}} 関数に渡します。これにより、選択内容がダイアログの `returnValue` プロパティに代入されます。

ダイアログの {{domxref("HTMLDialogElement.close_event", "close")}} イベントハンドラー内で、この例ではメインページのステータステキストを更新し、 `returnValue` を記録します。

ユーザーがボタンをクリックせずにダイアログを閉じると（例えば、 <kbd>Esc</kbd> キーを押すなど）、返値は設定されません。

#### HTML

```html
<dialog id="termsDialog">
  <p>利用規約に同意しますか？（リンク）</p>
  <button id="declineButton" value="declined">拒否</button>
  <button id="acceptButton" value="accepted">承諾</button>
</dialog>
<p>
  <button id="openDialogButton">利用規約の確認</button>
</p>
<p id="statusText"></p>
```

#### JavaScript

```js
const dialog = document.getElementById("termsDialog");
const statusText = document.getElementById("statusText");

const openDialogButton = document.getElementById("openDialogButton");
const declineButton = document.getElementById("declineButton");
const acceptButton = document.getElementById("acceptButton");

openDialogButton.addEventListener("click", () => {
  dialog.showModal();
});

declineButton.addEventListener("click", closeDialog);
acceptButton.addEventListener("click", closeDialog);

function closeDialog(event) {
  const button = event.target;
  dialog.close(button.value);
}

dialog.addEventListener("close", () => {
  statusText.innerText = dialog.returnValue
    ? `返値: ${dialog.returnValue}`
    : "返値はありません";
});
```

#### 結果

［利用規約の確認］をクリックし、ダイアログで「承諾」または［拒否］ボタンを選べますか、または <kbd>Esc</kbd> キーを押してダイアログを閉じる操作を行い、それぞれの状態更新を確認してください。

{{ EmbedLiveSample('Checking the return value', '100%', '200px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("dialog") }}
