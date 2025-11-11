---
title: "HTMLDialogElement: close() メソッド"
short-title: close()
slug: Web/API/HTMLDialogElement/close
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{ APIRef("HTML DOM") }}

**`close()`** は {{domxref("HTMLDialogElement")}} インターフェイスのメソッドで、このダイアログ ({{htmlelement("dialog")}}) を閉じます。
引数としてオプションの文字列を渡すことができ、このダイアログの `returnValue` を更新します。

## 構文

```js-nolint
close()
close(returnValue)
```

### 引数

- `returnValue` {{optional_inline}}
  - : 文字列で、このダイアログの {{domxref("HTMLDialogElement.returnValue")}} を更新する値を表します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

次の例は単純なボタンですが、クリックするとフォームを含む {{htmlelement("dialog")}} を `showModal()` メソッドで開きます。
そこから _X_ ボタンをクリックしてダイアログを閉じたり（ `HTMLDialogElement.close()` メソッドで）、submit ボタンでフォームを送信したりすることができます。

```html
<!-- フォームを含む単純なポップアップダイアログボックス -->
<dialog id="favDialog">
  <form method="dialog">
    <button id="close" aria-label="close" formnovalidate>X</button>
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

```js
const updateButton = document.getElementById("updateDetails");
const closeButton = document.getElementById("close");
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
  dialog.showModal();
  openCheck(dialog);
});

// フォームの閉じるボタンでダイアログボックスを閉じる
closeButton.addEventListener("click", () => {
  dialog.close("animalNotChosen");
  openCheck(dialog);
});
```

\[X] ボタンが `type="submit"` であったなら、JavaScript を必要とせずにダイアログが閉じられたはずです。
フォームを送信すると、[フォームのメソッドが `dialog`](/ja/docs/Web/HTML/Reference/Elements/form#method) であれば、それが入った `<dialog>` を閉じるので、「閉じる」ボタンは必要ありません。

### 結果

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("dialog") }}
