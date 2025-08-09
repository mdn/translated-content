---
title: "SVGLengthList: replaceItem() メソッド"
short-title: replaceItem()
slug: Web/API/SVGLengthList/replaceItem
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

**`replaceItem()`** は {{domxref("SVGLengthList")}} インターフェイスのメソッドで、リスト内の既存のアイテムを新しいアイテムに置き換えます。新しいアイテムがすでにリスト内に存在する場合は、このリストに挿入される前に、以前のリストから除去されます。挿入されるアイテムはアイテムそのものであり、コピーではありません。アイテムがすでにこのリスト内に存在する場合は、置き換えられるアイテムのインデックスは、アイテムが除去される前であることに注意してください。

## 構文

```js-nolint
replaceItem(newItem, index)
```

### 引数

- `newItem`
  - : リストに追加する {{domxref("SVGLength")}} です。
- `index`
  - : 削除するアイテムのインデックスを指定する、非負の整数です。

### 返値

リストに追加された {{domxref("SVGNumber")}} です。

### 例外

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : リストが読み取り専用である場合に発生します。
- {{domxref("DOMException")}} `IndexSizeError`
  - : インデックスがリストの範囲を外れていた場合に発生します。

## 例

完全な例については {{domxref("SVGLengthList")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
