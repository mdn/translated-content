---
title: ::backdrop
slug: Web/CSS/Reference/Selectors/::backdrop
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**`::backdrop`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、何らかの要素が全画面モード（{{glossary("top layer", "最上位レイヤー")}}）で表示される直下に直接表示される{{Glossary("viewport", "ビューポート")}}の寸法のボックスです。

{{InteractiveExample("CSS デモ: ::backdrop", "tabbed-shorter")}}

```css interactive-example
button {
  font-size: 1.2rem;
  padding: 5px 15px;
}

dialog::backdrop {
  background-color: salmon;
}
```

```html-nolint interactive-example
<button id="showDialogBtn">ダイアログを表示</button>

<dialog id="favDialog">
  <form method="dialog">
    <p>このダイアログの外側に表示される背景がバックドロップです。</p>
    <button id="confirmBtn">ダイアログを閉じる</button>
  </form>
</dialog>
```

```js interactive-example
const showDialogBtn = document.getElementById("showDialogBtn");
const favDialog = document.getElementById("favDialog");

showDialogBtn.addEventListener("click", () => favDialog.showModal());
```

## 構文

```css
::backdrop {
  /* ... */
}
```

## 解説

バックドロップは以下の状況で現れます。

- [全画面 API](/ja/docs/Web/API/Fullscreen_API) の {{domxref("Element.requestFullscreen()")}} メソッドを使用した全画面モードに配置される要素
- {{domxref("HTMLDialogElement.showModal()")}} の呼び出しにより最上位レイヤーで表示される {{HTMLElement("dialog")}} 要素
- {{domxref("HTMLElement.showPopover()")}} の呼び出しにより最上位レイヤーで表示される{{domxref("Popover API", "ポップオーバー", "", "nocode")}}要素

全画面モードで複数の要素が配置されたときは、それぞれに自身の `::backdrop` 擬似要素があります。

```css
/* バックドロップはダイアログが dialog.showModal() で開いている時のみ表示されます */
dialog::backdrop {
  background: rgb(255 0 0 / 25%);
}
```

要素は最上位レイヤーに後入れ先出し (LIFO) スタックとして最上位レイヤーに配置されます。`::backdrop` 擬似要素により、最上位レイヤー要素の下記にあるすべての要素を覆い隠したり、スタイルを適用したり、完全に非表示にしたりすることが可能となります。

`::backdrop` 擬似要素はどの要素にも継承せず、どの要素からも継承しません。この擬似要素に適用するプロパティの制限はありません。

## 例

### モーダルダイアログのバックドロップのスタイル設定

この例では、`::backdrop` 擬似要素を使用して、モーダルで {{htmlelement("dialog")}} が開いているときのバックドロップをスタイル設定します。

#### HTML

{{htmlelement("button")}} を設置し、それをクリックすると `<dialog>` が開くようにします。`<dialog>` が開いたら、ダイアログを閉じるためのボタンにフォーカスが当たります。

```html
<dialog>
  <button autofocus>閉じる</button>
  <p>このモーダルダイアログには美しいバックドロップがあります！</p>
</dialog>
<button>ダイアログを表示</button>
```

#### CSS

[CSS グラデーション](/ja/docs/Web/CSS/Reference/Values/gradient)を使用してカラフルなドーナツを作成し、バックドロップに背景を追加します。

```css
::backdrop {
  background-image:
    radial-gradient(
      circle,
      white 0 5vw,
      transparent 5vw 20vw,
      white 20vw 22.5vw,
      #eeeeee 22.5vw
    ),
    conic-gradient(
      #272b66 0 50grad,
      #2d559f 50grad 100grad,
      #9ac147 100grad 150grad,
      #639b47 150grad 200grad,
      #e1e23b 200grad 250grad,
      #f7941e 250grad 300grad,
      #662a6c 300grad 350grad,
      #9a1d34 350grad 400grad,
      #43a1cd 100grad 150grad,
      #ba3e2e
    );
}
```

#### JavaScript

ダイアログを [`.showModal()`](/ja/docs/Web/API/HTMLDialogElement/showModal) メソッドを使用してモーダルで開き、[`.close()`](/ja/docs/Web/API/HTMLDialogElement/close) メソッドを使用して閉じます。

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// 「ダイアログを表示する」ボタンでダイアログをモーダルで開く
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// 「閉じる」ボタンでダイアログを閉じる
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### 結果

{{EmbedLiveSample("Styling a modal dialog's backdrop", 450, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":fullscreen")}} 擬似クラス
- {{HTMLElement("dialog")}} HTML 要素
- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) HTML グローバル属性
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
