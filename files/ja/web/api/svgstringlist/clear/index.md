---
title: "SVGStringList: clear() メソッド"
short-title: clear()
slug: Web/API/SVGStringList/clear
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

**`clear()`** は {{domxref("SVGStringList")}} インターフェイスのメソッドで、リストから既存のアイテムをすべてクリアし、リストを空にします。

## 構文

```js-nolint
clear()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : {{domxref("SVGStringList")}} が読み取り専用属性に対応するか、オブジェクト自体が読み取り専用であった場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
