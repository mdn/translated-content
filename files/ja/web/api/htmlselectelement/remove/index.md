---
title: "HTMLSelectElement: remove() メソッド"
short-title: remove()
slug: Web/API/HTMLSelectElement/remove
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.remove()`** メソッドは、この select 要素の選択肢の集合から指定された位置の要素を削除します。

## 構文

```js-nolint
remove(index)
```

### 引数

- `index` はゼロから始まる long 値で、集合から削除する {{ domxref("HTMLOptionElement") }} の位置を表します。この位置の要素が見つからなかった場合は、このメソッドは効果がありません。

### 返値

なし（{{jsxref("undefined")}}）。

## 例

```html
<select id="existingList" name="existingList">
  <option value="1">Option: Value 1</option>
  <option value="2">Option: Value 2</option>
  <option value="3">Option: Value 3</option>
</select>
```

```js
let sel = document.getElementById("existingList");
sel.remove(1);
```

HTML は次のようになります。

```html
<select id="existingList" name="existingList">
  <option value="1">Option: Value 1</option>
  <option value="3">Option: Value 3</option>
</select>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Element.remove") }} は、{{ domxref("HTMLSelectElement") }} 上で remove が引数無しに呼び出された場合に呼び出されるメソッドです。
- 実装先の {{domxref("HTMLSelectElement") }}
