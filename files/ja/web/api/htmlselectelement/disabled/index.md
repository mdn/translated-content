---
title: "HTMLSelectElement: disabled プロパティ"
short-title: disabled
slug: Web/API/HTMLSelectElement/disabled
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.disabled`** プロパティは論理値で、HTML の [`disabled`](/ja/docs/Web/HTML/Element/select#disabled) 属性を反映し、このコントロールが無効であるかどうかを示します。無効であった場合、クリックを受け付けません。無効な要素は使用できず、クリックできません。

## 値

論理値です。

## 例

### HTML

```html
<label>
  飲み物はいかが？
  <input id="allow-drinks" type="checkbox" />
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
const allowDrinksCheckbox = document.getElementById("allow-drinks");
const drinkSelect = document.getElementById("drink-select");

allowDrinksCheckbox.addEventListener(
  "change",
  (event) => {
    drinkSelect.disabled = !event.target.checked;
  },
  false
);
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
