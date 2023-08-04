---
title: "HTMLDialogElement: returnValue プロパティ"
slug: Web/API/HTMLDialogElement/returnValue
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`returnValue`** は {{domxref("HTMLDialogElement")}} インターフェイスのプロパティで、このダイアログ ({{htmlelement("dialog")}}) の返値を取得または設定します。ふつう、閉じる際にどのボタンが押されたかを示します。

## 値

ダイアログの `returnValue` を表す文字列です。

## 例

次の例では、フォームの入った {{htmlelement("dialog")}} を `showModal()` メソッドで開くためのボタンを表示しています。スクリプトは `returnvalue` に初期値を割り当てています。そこから、確認ボタンで検証つきフォームを送信し、「×」ボタンで検証なしでフォームを送信します。`method="dialog"` でフォームを送信すると、ダイアログが閉じられ、返値には送信ボタンの `name` （もしあれば）が設定されます。リセットボタンにはダイアログを閉じるイベントハンドラーがありますが、これは `returnValue` には何の影響もありません。<kbd>Esc</kbd> キーでダイアログを閉じることもできません。

```html
<!-- フォームの入った単純なポップアップのダイアログボックス -->
<dialog id="favDialog">
  <form method="dialog">
    <input
      type="submit"
      aria-label="close"
      value="X"
      name="Xbutton"
      formnovalidate />
    <p>
      <label
        >Favorite animal:
        <select name="favAnimal" required>
          <option></option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <menu>
      <button type="reset" value="resetBtn">Reset</button>
      <button type="submit" value="confirmBtn">Confirm</button>
    </menu>
  </form>
</dialog>

<p>
  <button id="openDialog">Open Dialog</button>
</p>
<p id="text"></p>

<script>
  (() => {
    const openDialog = document.getElementById("openDialog");
    const dialog = document.getElementById("favDialog");
    const text = document.getElementById("text");
    const reset = document.querySelector("[type='reset']");
    dialog.returnValue = "initialValue";

    function openCheck(dialog) {
      if (dialog.open) {
        text.innerText = "Dialog open";
      } else {
        text.innerText = "Dialog closed";
      }
    }

    function handleUserInput(returnValue) {
      if (!returnValue) {
        text.innerText += ". There was no return value";
      } else {
        text.innerText += ". Return value: " + returnValue;
      }
    }

    // "Open Dialog" ボタンは <dialog> をモーダルに開く
    openDialog.addEventListener("click", () => {
      dialog.showModal();
      openCheck(dialog);
      handleUserInput(dialog.returnValue);
    });

    reset.addEventListener("click", () => {
      dialog.close();
    });

    // ダイアログが閉じられたとき、どのように閉じられたかにかかわらず
    dialog.addEventListener("close", () => {
      openCheck(dialog);
      handleUserInput(dialog.returnValue);
    });
  })();
</script>
<style>
  [aria-label="close"] {
    appearance: none;
    border-radius: 50%;
    border: 1px solid;
    float: right;
  }
</style>
```

### 結果

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("dialog") }}
