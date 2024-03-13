---
title: "HTMLFormControlsCollection: namedItem() メソッド"
slug: Web/API/HTMLFormControlsCollection/namedItem
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLFormControlsCollection.namedItem()`** メソッドは、集合内の {{domxref("RadioNodeList")}} または {{domxref("Element")}} の `name` または `id` が指定した名前と一致するノード、または一致するノードがない場合は `null` を返します。

このバージョンの `namedItem()` は {{domxref("HTMLCollection")}} から継承されたものを隠していることに注意してください。そのメソッドと同様、`collection["value"]` のように文字列で JavaScript の配列の括弧構文を使用すると、 `collection.namedItem("value")` と同等になります。

## 構文

```js-nolint
namedItem(str)
// or collection[str]
```

### 引数

- `str` は文字列です。

### 返値

- {{domxref("RadioNodeList")}}、{{domxref("Element")}}、[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) の何れかです。

## 例

### HTML

```html
<form>
  <input id="my-form-control" type="textarea" />
</form>
```

### JavaScript

```js
// #my-form-control を表す HTMLInputElement を返す
elem1 = document.forms[0]["my-form-control"];
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 置き換えている {{domxref("HTMLCollection.namedItem")}}
