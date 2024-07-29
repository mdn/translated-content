---
title: "PannerNode: maxDistance プロパティ"
short-title: maxDistance
slug: Web/API/PannerNode/maxDistance
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

`maxDistance` は {{ domxref("PannerNode") }} インターフェイスのプロパティで、インターフェイスは音声ソースとリスナーの間の最大距離を表す倍精度浮動小数点値です。それ以上音量を縮小しないようにします。この値は `linear` 距離モデルでのみ使用します。

`maxDistance` プロパティの既定値は `10000` です。

## 値

倍精度浮動小数点値です。既定値は `10000` であり、正ではない値は許可されません。

### 例外

- {{jsxref("RangeError")}}
  - : プロパティに受け入れられる範囲外の値が指定された場合に発生します。

## 例

例のコードのについては [`BaseAudioContext.createPanner()`](/ja/docs/Web/API/BaseAudioContext/createPanner#examples) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
