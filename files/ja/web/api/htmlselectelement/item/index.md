---
title: HTMLSelectElement.item()
slug: Web/API/HTMLSelectElement/item
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - メソッド
  - リファレンス
browser-compat: api.HTMLSelectElement.item
translation_of: Web/API/HTMLSelectElement/item
---
{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.item()`** メソッドは、選択肢のリスト内で引数で渡された位置にある {{domxref("HTMLOptionElement")}} に対応する {{domxref("Element")}} を返します。存在しない場合は `null` を返します。

JavaScript では、ブラケット構文に `unsigned long` の値を入れた `selectElt[index]` の形が、`selectElt.namedItem(index)` と同等になります。

## 構文

```js
var item = collection.item(index);
var item = collection[index];
```

### 引数

- `index` は `unsigned long` の値です。

### 返値

- `item` は {{domxref("HTMLOptionElement")}} です。

## 例

### HTML

```html
<form>
  <select id="myFormControl">
    <option id="o1">Opt 1</option>
    <option id="o2">Opt 2</option>
  </select>
</form>
```

### JavaScript

```css
// Returns the HTMLOptionElement representing #o2
elem1 = document.forms[0]['myFormControl'][1];
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 実装先の {{domxref("HTMLSelectElement")}}
