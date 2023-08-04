---
title: "HTMLSelectElement: item() メソッド"
short-title: item()
slug: Web/API/HTMLSelectElement/item
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.item()`** メソッドは、選択肢のリスト内で引数で渡された位置にある {{domxref("HTMLOptionElement")}} に対応する {{domxref("Element")}} を返します。存在しない場合は `null` を返します。

JavaScript では、ブラケット構文に `unsigned long` の値を入れた `selectElt[index]` の形で、`selectElt.namedItem(index)` と同等になります。

## 構文

```js-nolint
item(index)
// or collection[index]
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

```js
// Returns the HTMLOptionElement representing #o2
elem1 = document.forms[0]["myFormControl"][1];
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 実装先の {{domxref("HTMLSelectElement")}}
