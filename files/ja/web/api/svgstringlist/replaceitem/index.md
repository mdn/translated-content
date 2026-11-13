---
title: "SVGStringList: replaceItem() メソッド"
short-title: replaceItem()
slug: Web/API/SVGStringList/replaceItem
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

**`replaceItem()`** は {{domxref("SVGStringList")}} インターフェイスのメソッドで、リスト内の既存のアイテムを新しいアイテムに置き換えます。挿入されるアイテムはアイテムそのものであり、コピーではありません。

- 新しいアイテムがすでにリスト内に存在する場合は、このリストに挿入される前に、以前のリストから除去されます。
- アイテムがすでにこのリスト内に存在する場合は、置き換えられるアイテムのインデックスは、アイテムが除去される前であることに注意してください。

## 構文

```js-nolint
replaceItem(newItem, index)
```

### 引数

- `newItem`
  - : リストに追加する文字列です。
- `index`
  - : 削除するアイテムのインデックスを指定する、非負の整数です。

### 返値

リストに追加された文字列です。

### 例外

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : リストが読み取り専用である場合に発生します。
- {{domxref("DOMException")}} `IndexSizeError`
  - : インデックスがリストの範囲を外れていた場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
