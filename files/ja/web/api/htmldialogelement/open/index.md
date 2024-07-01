---
title: "HTMLDialogElement: open プロパティ"
slug: Web/API/HTMLDialogElement/open
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`open`** は {{domxref("HTMLDialogElement")}} インターフェイスのプロパティで、HTML の [`open`](/ja/docs/Web/HTML/Element/dialog#open) 属性を反映した論理値です。これは {{htmlelement("dialog")}} が操作できる状態であるかどうかを示します。

## 値

論理値で、HTML の [`open`](/ja/docs/Web/HTML/Element/dialog#open) 属性の状態を表します。`true` は設定されており、従ってダイアログは表示されています。`false` は設定されておらず、従ってダイアログは表示されていません。

このプロパティは読み取り専用になりました。プログラムにより値を設定してダイアログを表示または非表示にすることは可能です。

## 例

以下の例では、クリックするとフォームを含む {{htmlelement("dialog")}} を `showModal()` メソッドで開くための単純なボタンを示しています。
そこから _Cancel_ ボタンをクリックしてダイアログを閉じたり（{{domxref("HTMLDialogElement.close()")}} メソッドで）、送信ボタンでフォームを送信したりすることができます。

```html
<!-- Simple pop-up dialog box -->
<dialog id="dialog">
  <form method="dialog">
    <button type="submit">Close</button>
  </form>
</dialog>

<p>
  <button id="openDialog">Open Dialog</button>
</p>
<p id="dialogStatus"></p>

<script>
  (() => {
    const openDialog = document.getElementById("openDialog");
    const dialog = document.getElementById("dialog");
    const text = document.getElementById("dialogStatus");

    function openCheck(dialog) {
      if (dialog.open) {
        text.innerText = "Dialog open";
      } else {
        text.innerText = "Dialog closed";
      }
    }

    // Update button opens a modal dialog
    openDialog.addEventListener("click", () => {
      dialog.showModal();
      openCheck(dialog);
    });

    dialog.addEventListener("close", () => {
      openCheck(dialog);
    });
  })();
</script>
```

### 結果

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("dialog") }}
