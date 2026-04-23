---
title: "HTMLDialogElement: open プロパティ"
short-title: open
slug: Web/API/HTMLDialogElement/open
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{ APIRef("HTML DOM") }}

**`open`** は {{domxref("HTMLDialogElement")}} インターフェイスのプロパティで、HTML の [`open`](/ja/docs/Web/HTML/Reference/Elements/dialog#open) 属性を反映した論理値です。これは {{htmlelement("dialog")}} が操作できる状態であるかどうかを示します。

## 値

論理値で、HTML の [`open`](/ja/docs/Web/HTML/Reference/Elements/dialog#open) 属性の状態を表します。`true` はダイアログが表示されており、 `false` はダイアログが表示されていません。

> [!WARNING]
> `open` プロパティは技術的には読み取り専用ではなく直接設定可能ですが、[HTML 仕様書](https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-closedby)では強く禁じています。通常のダイアログ操作が予期せぬ形で破損する可能性があるためです。例えば、`open` をプログラムで `false` に設定しても、[`close`](/ja/docs/Web/API/HTMLDialogElement/close_event) イベントは発生せず、その後の [`close()`](/ja/docs/Web/API/HTMLDialogElement/close) および [`requestClose()`](/ja/docs/Web/API/HTMLDialogElement/requestClose) メソッドの呼び出しは効果がなくなります。代わりに、[`show()`](/ja/docs/Web/API/HTMLDialogElement/show)、[`showModal()`](/ja/docs/Web/API/HTMLDialogElement/showModal)、`close()`、`requestClose()`などのメソッドを使用して `open` 属性の値を変更することをお勧めします。

## 例

以下の例では、クリックするとフォームを含む {{htmlelement("dialog")}} を `showModal()` メソッドで開くための単純なボタンを示しています。
そこから［閉じる］ボタンをクリックしてダイアログを閉じたり（{{domxref("HTMLDialogElement.close()")}} メソッドで）、送信ボタンでフォームを送信したりすることができます。

```html
<!-- 単純なポップアップダイアログボックス -->
<dialog id="dialog">
  <form method="dialog">
    <button type="submit">閉じる</button>
  </form>
</dialog>

<p>
  <button id="openDialog">ダイアログを開く</button>
</p>
<p id="dialogStatus"></p>
```

```js
const openDialog = document.getElementById("openDialog");
const dialog = document.getElementById("dialog");
const text = document.getElementById("dialogStatus");

function openCheck(dialog) {
  if (dialog.open) {
    text.innerText = "ダイアログが開きました";
  } else {
    text.innerText = "ダイアログが閉じました";
  }
}

// ボタンでモーダルダイアログを開く
openDialog.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

dialog.addEventListener("close", () => {
  openCheck(dialog);
});
```

### 結果

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("dialog") }}
