---
title: "AudioListener: setPosition() メソッド"
short-title: setPosition()
slug: Web/API/AudioListener/setPosition
l10n:
  sourceCommit: dd193edd475b51b9f4622a4e849459692115553b
---

{{ APIRef("Web Audio API") }} {{deprecated_header}}

`setPosition()` は {{ domxref("AudioListener") }} インターフェイスのメソッドで、聞き手の位置を定義します。

3 つの引数 `x`, `y`, `z` には単位がなく、正しいデカルト座標系に従って 3D 空間におけるリスナーの位置を記述します。 {{domxref("PannerNode")}} オブジェクトは空間化のために、個々の音声ソース関連のこの位置を使用します。

位置ベクトルの既定値は `(0, 0, 0)` です。

> [!NOTE]
> このメソッドは非推奨ですので、代わりに {{domxref("AudioListener.positionX", "positionX")}}, {{domxref("AudioListener.positionY", "positionY")}}, {{domxref("AudioListener.positionZ", "positionZ")}} の各プロパティを使用してください。

## 構文

```js-nolint
setPosition(x, y, z)
```

### 引数

- `x`
  - : 3D 空間内の聞き手の x 位置です。
- `y`
  - : 3D 空間内の聞き手の y 位置です。
- `z`
  - : 3D 空間内の聞き手の z 位置です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

サンプルコードは [`BaseAudioContext.createPanner()`](/ja/docs/Web/API/BaseAudioContext/createPanner#例) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
