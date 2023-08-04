---
title: HTMLMediaElement.defaultPlaybackRate
slug: Web/API/HTMLMediaElement/defaultPlaybackRate
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.defaultPlaybackRate`** プロパティは、メディアの既定の再生速度を示します。

## 値

double 型です。 `1.0` が「標準速度」で、 `1.0` より小さい値はメディアの再生速度が標準より遅くなり、値を大きくすると再生速度が速くなります。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 指定された値に対応していない場合に発生します。

## 例

```js
const obj = document.createElement('video');
console.log(obj.defaultPlaybackRate); // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
