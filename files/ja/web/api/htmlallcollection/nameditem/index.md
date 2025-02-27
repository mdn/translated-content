---
title: "HTMLAllCollection: namedItem() メソッド"
short-title: namedItem()
slug: Web/API/HTMLAllCollection/namedItem
l10n:
  sourceCommit: 45088e6e93e190ba453db2cd6e2360af48904cae
---

{{APIRef("DOM")}}

**`namedItem()`** は {{domxref("HTMLAllCollection")}} インターフェイスのメソッドで、コレクション内の `id` または `name` 属性が指定した名前に一致する最初の要素 ({{domxref("Element")}}) を返します。一致する要素がなければ `null` を返します。

## 構文

```js-nolint
namedItem(name)
```

### 引数

- `name`
  - : 探している要素の `id` または `name` 属性の値を表す文字列。

### 返値

{{domxref("HTMLAllCollection")}} で最初に `name` に一致する要素 ({{domxref("Element")}})、ない場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLAllCollection.namedItem()")}}
