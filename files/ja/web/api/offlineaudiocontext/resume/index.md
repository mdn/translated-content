---
title: OfflineAudioContext.resume()
slug: Web/API/OfflineAudioContext/resume
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{ APIRef("Web Audio API") }}

**`resume()`** は {{domxref("OfflineAudioContext")}} インターフェイスのメソッドで、 一時停止していた音声コンテキストの時刻の進行を再開します。 `OfflineAudioContext` は音声ハードウェアを必要としないので、プロミスはすぐに解決されます。

## 構文

```js-nolint
resume()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} で、 {{jsxref('undefined')}} に解決します。

### 例外

例外が発生した場合、プロミスが拒否されます。

- `InvalidStateError` {{domxref("DOMException")}}
  - : コンテキストが現在中断されていないか、レンダリングが始まっていない場合に返されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
