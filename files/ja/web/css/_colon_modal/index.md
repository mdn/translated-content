---
title: :modal
slug: Web/CSS/:modal
l10n:
  sourceCommit: 632289fcc10e926d166e1b49e5ba3505de182856
---

{{CSSRef}}

**`:modal`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、操作が解除されるまで、それ以外の要素とのすべての操作を除外する状態にある要素と一致します。 `:modal` 擬似クラスを使用して、複数の要素を同時に選択することができますが、アクティブになり、入力を受け付けることができるのはそのうちの 1 つのみです。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-modal.html", "tabbed-shorter")}}

## 構文

```css
:modal {
  /* ... */
}
```

## 使用上のメモ

ページの他の部分をユーザーが操作できないようにし、 `:modal` 擬似クラスによって選択される要素の例としては、例えば以下のようなものが含まれます。

- [`dialog`](/ja/docs/Web/HTML/Element/dialog) 要素が `showModal()` API で開かれたとき。
- `requestFullscreen()` API で開かれたときに [`:fullscreen`](/ja/docs/Web/CSS/:fullscreen) 擬似クラスで選択される要素。

## 例

### モーダルダイアログのスタイル設定

この例では、「詳細を更新」ボタンがアクティブ化された際に開くモーダルダイアログにスタイル設定を行なっています。この例は、 {{HTMLElement("dialog")}} 要素の[例](/ja/docs/Web/HTML/Element/dialog#ダイアログからの返値を扱い)を基に構築されています。

```html-nolint hidden live-sample___styling_a_modal_dialog
<!-- フォームを含む基本的なモーダルダイアログ -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label
        >好きな動物:
        <select>
          <option value="default">選択してください…</option>
          <option>アルテミア</option>
          <option>レッサーパンダ</option>
          <option>クモザル</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel">キャンセル</button>
      <button id="confirmBtn" value="default">確認</button>
    </div>
  </form>
</dialog>
<p>
  <button id="updateDetails">詳細を更新</button>
</p>
<output></output>
```

#### CSS

```css live-sample___styling_a_modal_dialog
:modal {
  border: 5px solid red;
  background-color: yellow;
  box-shadow: 3px 3px 10px rgb(0 0 0 / 50%);
}
```

```js hidden live-sample___styling_a_modal_dialog
const updateButton = document.getElementById("updateDetails");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof favDialog.showModal !== "function") {
  favDialog.hidden = true;
  // Your fallback script
}
// "Update details" button opens the <dialog> modally
updateButton.addEventListener("click", () => {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    outputBox.value = "このブラウザーはダイアログ API に対応していません。";
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener("close", () => {
  outputBox.value = `${
    favDialog.returnValue
  } button clicked - ${new Date().toString()}`;
});
```

### 結果

{{EmbedLiveSample("Styling_a_modal_dialog", "100%", 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`dialog`](/ja/docs/Web/HTML/Element/dialog) 要素
- 他の要素表示状態擬似クラス: {{CSSxRef(":fullscreen")}} および {{CSSxRef(":picture-in-picture")}}
- [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)の一覧
