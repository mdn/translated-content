---
title: HTMLSelectElement.remove()
slug: Web/API/HTMLSelectElement/remove
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - メソッド
  - リファレンス
browser-compat: api.HTMLSelectElement.remove
translation_of: Web/API/HTMLSelectElement/remove
---
{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.remove()`** メソッドは、この select 要素の選択肢の集合から指定された位置の要素を削除します。

## 構文

```js
collection.remove(index);
```

### 引数

- `index` は long 値で、集合から削除する {{ domxref("HTMLOptionElement") }} の位置を表します。この位置の要素が見つからなかった場合は、このメソッドは効果がありません。

## 例

```js
var sel = document.getElementById("existingList");
sel.remove(1);

/*
  以下の select オブジェクトが既にあるとします。

  <select id="existingList" name="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
    <option value="3">Option: Value 3</option>
  </select>

  以下のように変化します。

  <select id="existingList" name="existingList">
    <option value="1">Option: Value 1</option>
    <option value="3">Option: Value 3</option>
  </select>
*/
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Element.remove") }} は、{{ domxref("HTMLSelectElement") }} 上で remove が引数無しに呼び出された場合に呼び出されるメソッドです。
- 実装先の {{domxref("HTMLSelectElement") }}
