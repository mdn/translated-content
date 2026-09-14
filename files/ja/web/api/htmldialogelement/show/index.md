---
title: "HTMLDialogElement: show() メソッド"
short-title: show()
slug: Web/API/HTMLDialogElement/show
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{ APIRef("HTML DOM") }}

**`show()`** は {{domxref("HTMLDialogElement")}} インターフェイスのメソッドで、ダイアログをモードレスに表示します。すなわち、ダイアログの外側のコンテンツも操作できる状態にします。

## 構文

```js-nolint
show()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : ダイアログが既に開いておりモーダルである場合（つまり、すでに {{domxref("HTMLDialogElement.showModal()")}} で開かれている場合）、例外が発生します。

## 例

次の例は単純なボタンで、クリックするとフォームを含むダイアログ ({{htmlelement("dialog")}}) を `show()` メソッドで開きます。ここから、_Cancel_ ボタンをクリックしてダイアログを閉じたり（{{domxref("HTMLDialogElement.close()")}} メソッドで）、submit ボタンでフォームを送信したりすることができます。

```html
<!-- フォームを含む単純なポップアップダイアログボックス -->
<dialog id="favDialog">
  <form method="dialog">
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
      <button id="cancel" type="reset">キャンセル</button>
      <button type="submit">確認</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">詳細を更新</button>
</menu>
```

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

// 更新ボタンでモーダルダイアログを開く
updateButton.addEventListener("click", () => {
  dialog.show();
  openCheck(dialog);
});

// フォームのキャンセルボタンでダイアログボックスを閉じる
cancelButton.addEventListener("click", () => {
  dialog.close("animalNotChosen");
  openCheck(dialog);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("dialog") }}
