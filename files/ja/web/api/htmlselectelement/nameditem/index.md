---
title: HTMLSelectElement.namedItem()
slug: Web/API/HTMLSelectElement/namedItem
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - メソッド
  - リファレンス
browser-compat: api.HTMLSelectElement.namedItem
translation_of: Web/API/HTMLSelectElement/namedItem
---
{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.namedItem()`** メソッドは、{{domxref("HTMLOptionElement")}} のうち `name` または `id` が指定された名前に一致する {{domxref("HTMLOptionElement")}} を、一致するものがない場合は `null` を返します。

JavaScript では、配列のブラケット構文に {{jsxref("String")}} を使用すると (`selectElt["value"]` など)、`selectElt.namedItem("value")` と同等になります。

## 構文

```js
var item = collection.namedItem(str);
var item = collection[str];
```

### 引数

- `str` is a {{domxref("DOMString")}}.

### 返値

- `item` is a {{domxref("HTMLOptionElement")}}.

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
elem1 = document.forms[0]['myFormControl']['o1']; // Returns the HTMLOptionElement representing #o1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 実装先の {{domxref("HTMLSelectElement")}} 
