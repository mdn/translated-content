---
title: "SVGLengthList: removeItem() メソッド"
short-title: removeItem()
slug: Web/API/SVGLengthList/removeItem
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

**`removeItem()`** は {{domxref("SVGLengthList")}} インターフェイスのメソッドで、指定された位置にある既存のアイテムをリストから除去します。

## 構文

```js-nolint
removeItem(index)
```

### 引数

- `index`
  - : 削除するアイテムのインデックスを指定する、非負の整数です。

### 返値

リストから削除された {{domxref("SVGLength")}} です。

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
