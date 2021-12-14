---
title: HTMLSelectElement.disabled
slug: Web/API/HTMLSelectElement/disabled
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - プロパティ
browser-compat: api.HTMLSelectElement.disabled
translation_of: Web/API/HTMLSelectElement/disabled
---
{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.disabled`** は論理値で、HTML の [`disabled`](/ja/docs/Web/HTML/Element/select#attr-disabled) 属性を反映し、このコントロールが無効であるかどうかを示します。無効であった場合、クリックを受け付けません。無効な要素は使用できず、クリックできません。

## 構文

```js
aSelectElement.disabled = aBool;
```

<h2 id="Example">例</h2>

### HTML

```html
<label>
  飲み物はいかが？
  <input id="allow-drinks" type="checkbox"/>
</label>

<label for="drink-select">飲み物の選択:</label>
<select id="drink-select" disabled>
  <option value="1">水</option>
  <option value="2">ビール</option>
  <option value="3">ペプシ</option>
  <option value="4">ウィスキー</option>
</select>
```

### JavaScript

```js
var allowDrinksCheckbox = document.getElementById("allow-drinks");
var drinkSelect = document.getElementById("drink-select");

allowDrinksCheckbox.addEventListener("change", function(event) {
  if (event.target.checked) {
    drinkSelect.disabled = false;
  } else {
    drinkSelect.disabled = true;
  }
}, false);
```

### 結果

{{EmbedLiveSample('Example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
