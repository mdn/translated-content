---
title: ':disabled'
slug: Web/CSS/:disabled
tags:
  - CSS
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.disabled
translation_of: Web/CSS/:disabled
---
{{CSSRef}}

**`:disabled`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、無効な要素を表します。無効な要素とは、アクティブ化（選択、クリック、入力など）したりフォーカスを得たりすることができないものです。要素には有効な状態、つまりアクティブ化したりフォーカスを得たりすることができる状態もあります。

```css
/* 無効な <input> を選択 */
input:disabled {
  background: #ccc;
}
```

## 構文

{{csssyntax}}

## 例

この例は基本的な送り先フォームを表示します。 [JavaScript](/ja/docs/Web/JavaScript) の {{domxref("HTMLElement/change_event", "change")}} イベントを使用して、ユーザーが請求先欄を有効化／無効化できるようにします。

### HTML

```html
<form action="#">
  <fieldset id="shipping">
    <legend>送り先</legend>
    <input type="text" placeholder="名前">
    <input type="text" placeholder="住所">
    <input type="text" placeholder="郵便番号">
  </fieldset>
  <br>
  <fieldset id="billing">
    <legend>請求先</legend>
    <label for="billing_is_shipping">送り先と同じ:</label>
    <input type="checkbox" id="billing-checkbox" checked>
    <br>
    <input type="text" placeholder="名前" disabled>
    <input type="text" placeholder="住所" disabled>
    <input type="text" placeholder="郵便番号" disabled>
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

```js
// ページの読み込みの終了を待つ
document.addEventListener('DOMContentLoaded', function () {
  // チェックボックスに 'change' イベントリスナーを追加
  document.getElementById('billing-checkbox').onchange = toggleBilling;
}, false);

function toggleBilling() {
  // 請求先のテキストフィールドを選択
  var billingItems = document.querySelectorAll('#billing input[type="text"]');

  // 請求先テキストフィールドを切り替え
  for (var i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
  }
}
```

### 結果

{{EmbedLiveSample('Examples', 300, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref(":enabled")}}
