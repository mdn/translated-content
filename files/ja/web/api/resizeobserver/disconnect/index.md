---
title: "ResizeObserver: disconnect() メソッド"
short-title: disconnect()
slug: Web/API/ResizeObserver/disconnect
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Resize Observer API")}}

**`disconnect()`** は {{domxref("ResizeObserver")}} インターフェイスのメソッドで、すべての監視されている {{domxref('Element')}} または {{domxref('SVGElement')}} をターゲットとした監視を解除します。

## 構文

```js-nolint
disconnect()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

なし。

## 例

```js
btn.addEventListener("click", () => {
  resizeObserver.disconnect();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
