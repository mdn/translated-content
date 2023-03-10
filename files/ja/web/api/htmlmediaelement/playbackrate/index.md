---
title: HTMLMediaElement.playbackRate
slug: Web/API/HTMLMediaElement/playbackRate
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.playbackRate`** プロパティは、メディアが再生されるレートを設定します。これはユーザーが早送りやスローモーションなどのユーザー制御を実装するために使用されます。通常の再生レートにこの値を掛けて現在のレートが求められるため、 1.0 の値が通常の速度です。

`playbackRate` が負の数であれば、メディアは逆方向に再生されます。

音声は、逆方向の再生であったり、早送りやスロー再生が実用的な範囲を外れていた場合（例えば、 Gecko では `0.25` から `4.0` の範囲であれば）ミュートされます。

既定の設定では、音声のピッチが補正されます。ピッチ補正は {{domxref("HTMLMediaElement.preservesPitch")}} プロパティで無効にすることができます。

## 値

[`double`](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) 値です。 `1.0` は「通常の速度」で、 `1.0` より小さければ通常より遅く、大きければ通常より早く再生されます。（**既定値:** `1.0`）

## 例

```js
const obj = document.createElement('video');
console.log(obj.playbackRate); // Expected Output: 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
