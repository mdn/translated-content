---
title: "HTMLSelectElement: form プロパティ"
short-title: form
slug: Web/API/HTMLSelectElement/form
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.form`** は読み取り専用のプロパティで、この要素が関連付けられているフォームを表す {{domxref("HTMLFormElement")}} を返します。この要素が {{HTMLElement("form")}} 要素に関連付けられていなかった場合は、`null` を返します。

## 値

{{domxref("HTMLFormElement")}} です。

## 例

```html
<form id="pet-form">
  <label for="pet-select">ペットを選択してください</label>
  <select name="pets" id="pet-select">
    <option value="dog">犬</option>
    <option value="cat">猫</option>
    <option value="parrot">オウム</option>
  </select>

  <button type="submit">送信</button>
</form>

<label for="lunch-select">ランチを選んでください</label>
<select name="lunch" id="lunch-select">
  <option value="salad">サラダ</option>
  <option value="sandwich">サンドウィッチ</option>
</select>

<script>
  const petSelect = document.getElementById("pet-select");
  const petForm = petSelect.form; // <form id="pet-form">

  const lunchSelect = document.getElementById("lunch-select");
  const lunchForm = lunchSelect.form; // null
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
