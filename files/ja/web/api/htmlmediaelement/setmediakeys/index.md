---
title: HTMLMediaElement.setMediaKeys()
slug: Web/API/HTMLMediaElement/setMediaKeys
l10n:
  sourceCommit: 5e10a2aab4ec9ecbcf8cf79f589f9b7ece88ef60
---

{{APIRef("HTML DOM")}}

**`setMediaKeys()`** は {{domxref("HTMLMediaElement")}} インターフェイスのメソッドで、このメソッドは、渡された {{domxref("MediaKeys")}} に解決する {{jsxref("Promise")}} を返します。これは、再生中にメディアの暗号を解除するために使用されます。

## 構文

```js-nolint
setMediaKeys(mediaKeys)
```

### 引数

- `mediaKeys`
  - : 再生中にメディアデータの復号のために {{domxref("HTMLMediaElement")}} が使用できる {{domxref("MediaKeys")}} オブジェクトへの参照です。

### 返値

{{jsxref("Promise")}} で、 `MediaKeys` の渡されたインスタンスに解決します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
