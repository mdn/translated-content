---
title: :disabled
slug: Web/CSS/Reference/Selectors/:disabled
original_slug: Web/CSS/:disabled
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

**`:disabled`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、無効な要素を表します。無効な要素とは、アクティブ化（選択、クリック、入力など）したりフォーカスを得たりすることができないものです。要素には有効な状態、つまりアクティブ化したりフォーカスを得たりすることができる状態もあります。

{{InteractiveExample("CSS デモ: :disabled", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

*:disabled {
  background-color: dimgrey;
  color: linen;
  opacity: 1;
}
```

```html interactive-example
<form>
  <label for="name">名前:</label>
  <input id="name" name="name" type="text" />

  <label for="emp">雇用中:</label>
  <select id="emp" name="emp" disabled>
    <option>No</option>
    <option>Yes</option>
  </select>

  <label for="empDate">雇用日:</label>
  <input id="empDate" name="empDate" type="date" disabled />

  <label for="resume">履歴書:</label>
  <input id="resume" name="resume" type="file" />
</form>
```

## 構文

```css
:disabled {
  /* ... */
}
```

## 例

この例は基本的な送り先フォームを表示します。 [JavaScript](/ja/docs/Web/JavaScript) の {{domxref("HTMLElement/change_event", "change")}} イベントを使用して、ユーザーが請求先欄を有効化／無効化できるようにします。

### HTML

```html
<form action="#">
  <fieldset id="shipping">
    <legend>送り先</legend>
    <input type="text" placeholder="名前" />
    <input type="text" placeholder="住所" />
    <input type="text" placeholder="郵便番号" />
  </fieldset>
  <br />
  <fieldset id="billing">
    <legend>請求先</legend>
    <label for="billing_is_shipping">送り先と同じ:</label>
    <input type="checkbox" id="billing-checkbox" checked />
    <br />
    <input type="text" placeholder="名前" disabled />
    <input type="text" placeholder="住所" disabled />
    <input type="text" placeholder="郵便番号" disabled />
  </fieldset>
</form>
```

### CSS

```css
input[type="text"]:disabled {
  background: #ccc;
}
```

### JavaScript

チェックボックスがクリックされたときに、無効になっている入力フィールドを切り替えます。

```js
const checkbox = document.querySelector("#billing-checkbox");
const billingItems = document.querySelectorAll('#billing input[type="text"]');

checkbox.addEventListener("change", () => {
  billingItems.forEach((item) => {
    item.disabled = !item.disabled;
  });
});
```

### 結果

チェックボックスをオンまたはオフにすると、請求先フィールドのスタイル設定を変更できます。

{{EmbedLiveSample('Examples', 300, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref(":enabled")}}
