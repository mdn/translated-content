---
title: "HTMLDialogElement: show() メソッド"
slug: Web/API/HTMLDialogElement/show
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
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

## 例

次の例は単純なボタンで、クリックするとフォームを含むダイアログ ({{htmlelement("dialog")}}) を `show()` メソッドで開きます。ここから、_Cancel_ ボタンをクリックしてダイアログを閉じたり（{{domxref("HTMLDialogElement.close()")}} メソッドで）、submit ボタンでフォームを送信したりすることができます。

```html
<!-- Simple pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
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
      <button id="cancel" type="reset">Cancel</button>
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

    // Update button opens a modeless dialog
    updateButton.addEventListener("click", () => {
      dialog.show();
      openCheck(dialog);
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener("click", () => {
      dialog.close("animalNotChosen");
      openCheck(dialog);
    });
  })();
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("dialog") }}
