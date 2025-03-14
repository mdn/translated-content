---
title: "HTMLDialogElement: close() メソッド"
slug: Web/API/HTMLDialogElement/close
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
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
そこから _X_ ボタンをクリックしてダイアログを閉じたり（ {{domxref("HTMLDialogElement.close()")}} メソッドで）、submit ボタンでフォームを送信したりすることができます。

```html
<!-- Simple pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <button id="close" aria-label="close" formnovalidate>X</button>
    <section>
      <p>
        <label for="favAnimal">Favorite animal:</label>
        <select id="favAnimal" name="favAnimal">
          <option></option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </p>
    </section>
    <menu>
      <button type="reset">Reset</button>
      <button type="submit">Confirm</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Update details</button>
</menu>

<script>
  (() => {
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

    // Update button opens a modal dialog
    updateButton.addEventListener("click", () => {
      dialog.showModal();
      openCheck(dialog);
    });

    // Form close button closes the dialog box
    closeButton.addEventListener("click", () => {
      dialog.close("animalNotChosen");
      openCheck(dialog);
    });
  })();
</script>
```

\[X] ボタンが `type="submit"` であったなら、JavaScript を必要とせずにダイアログが閉じられたはずです。
フォームを送信すると、[フォームのメソッドが `dialog`](/ja/docs/Web/HTML/Element/form#method) であれば、それが入った `<dialog>` を閉じるので、「閉じる」ボタンは必要ありません。

### 結果

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("dialog") }}
