---
title: "HTMLAllCollection: item() メソッド"
short-title: item()
slug: Web/API/HTMLAllCollection/item
l10n:
  sourceCommit: e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{APIRef("HTML DOM")}}

**`item()`** は {{domxref("HTMLAllCollection")}} インターフェイスのメソッドで、集合内の指定したオフセットに位置する要素、または `id` 属性または `name` 属性に指定した値を持つ要素を返します。

## 構文

```js-nolint
item(nameOrIndex)
```

### 引数

- `nameOrIndex`
  - : この引数が整数、または整数に変換できる文字列の場合、{{domxref("Element")}} を返す位置を表します。`HTMLAllCollection` 内に現れる要素は、文書内のソースに現れる順番と同じです。引数が文字列で整数に変換できない場合は、返す要素の `name` または `id` として解釈されます。

### 返値

`nameOrIndex` がインデックスを表す場合、`item()` は指定したインデックスの {{domxref("Element")}} を返し、`nameOrIndex` が 0 より小さいか length プロパティ以上の場合は `null` を返します。`nameOrIndex` が名前を表す場合、 `item()` は {{domxref("HTMLAllCollection/namedItem", "namedItem()")}} と同じ値を返します。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCollection.item()")}}
