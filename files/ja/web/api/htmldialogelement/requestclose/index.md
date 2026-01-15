---
title: "HTMLDialogElement: requestClose() メソッド"
short-title: requestClose()
slug: Web/API/HTMLDialogElement/requestClose
l10n:
  sourceCommit: 48a1966f4fb3633ab40daa544bcb267a7794afb1
---

{{ APIRef("HTML DOM") }}

**`requestClose()`** は {{domxref("HTMLDialogElement")}} インターフェイスのメソッドで、{{htmlelement("dialog")}} を閉じる要求を行います。
引数としてオプションの文字列を渡すことができ、これによりダイアログの `returnValue` が更新されます。

このメソッドは、{{domxref("HTMLDialogElement.close()")}} メソッドとは異なり、{{domxref("HTMLDialogElement.close_event", "close")}} イベントを発生させる前に {{domxref("HTMLDialogElement.cancel_event", "cancel")}} イベントを発生させます。
製作者は、`cancel` イベントのハンドラー内で {{domxref("Event.preventDefault()")}} を呼び出すことで、ダイアログは閉じることを防止できます。

このメソッドは、ダイアログの内部クローズ監視機能と同じ動作を公開します。

## 構文

```js-nolint
requestClose()
requestClose(returnValue)
```

### 引数

- `returnValue` {{optional_inline}}
  - : ダイアログの {{domxref("HTMLDialogElement.returnValue")}} の更新値を表します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### requestClose() の使い方

次の例は、クリックすると `showModal()` メソッドを介してフォームを含む {{htmlelement("dialog")}} を表示させる単純なボタンを示しています。
開いた後、 **X** ボタンをクリックしてダイアログを閉じる要求（`HTMLDialogElement.requestClose()` メソッド経由）を行うか、 **確認** ボタンでフォームを送信することができます。

#### HTML

```html
<!-- フォームを含む単純なポップアップダイアログボックス -->
<dialog id="favDialog">
  <form method="dialog">
    <button type="button" id="close" aria-label="close" formnovalidate>
      X
    </button>
    <section>
      <p>
        <label for="favAnimal">好きな動物:</label>
        <select id="favAnimal" name="favAnimal">
          <option></option>
          <option>ブラインシュリンプ</option>
          <option>レッサーパンダ</option>
          <option>クモザル</option>
        </select>
      </p>
    </section>
    <menu>
      <button type="reset">リセット</button>
      <button type="submit">確認</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">詳細を更新</button>
</menu>
```

#### JavaScript

```js
const updateButton = document.getElementById("updateDetails");
const closeButton = document.getElementById("close");
const dialog = document.getElementById("favDialog");

// 更新ボタンでモーダルダイアログを開く
updateButton.addEventListener("click", () => {
  dialog.showModal();
});

// フォームの閉じるボタンでダイアログボックスを閉じる
closeButton.addEventListener("click", () => {
  dialog.requestClose("animalNotChosen");
});

function dialogShouldNotClose() {
  // ダイアログを閉じることをできるかどうかを決定するロジックを追加
  // 既定では閉じるのが防止される
  return true;
}

dialog.addEventListener("cancel", (event) => {
  if (!event.cancelable) return;
  if (dialogShouldNotClose()) {
    console.log("Closing prevented");
    event.preventDefault();
  }
});
```

"X" ボタンが `type="submit"` であれば、JavaScript なしでダイアログは閉じられたはずです。
フォーム送信を送信すると、[フォームのメソッドが `dialog`](/ja/docs/Web/HTML/Reference/Elements/form#method) である場合、それを含む `<dialog>` を閉じます。そのため、「閉じる」ボタンは必要ありません。

#### 返値

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("dialog") }}
