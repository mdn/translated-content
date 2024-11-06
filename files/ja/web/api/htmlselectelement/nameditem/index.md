---
title: "HTMLSelectElement: namedItem() メソッド"
short-title: namedItem()
slug: Web/API/HTMLSelectElement/namedItem
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.namedItem()`** メソッドは、{{domxref("HTMLOptionElement")}} のうち `name` または `id` が指定された名前に一致する {{domxref("HTMLOptionElement")}} を、一致するものがない場合は `null` を返します。

JavaScript では、`selectElt.namedItem('value')` を使用すると `selectElt.namedItem('value')` と同等になります。

## 構文

```js-nolint
namedItem(str)
```

### 引数

- `str` は文字列です。

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
let selectElt = document.getElementById("myFormControl");
elem1 = selectElt.namedItem("o1"); // #o1 を表す HTMLOptionElement
```

ただし、次のように書くことはできません。

```js
let selectElt = document.getElementById("myFormControl");
elem1 = selectElt.o1; // undefined を返す
elem1 = selectElt["o1"]; // undefined を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 実装先の {{domxref("HTMLSelectElement")}}
