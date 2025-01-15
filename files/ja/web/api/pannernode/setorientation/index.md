---
title: "PannerNode: setOrientation() メソッド"
short-title: setOrientation()
slug: Web/API/PannerNode/setOrientation
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

> [!NOTE]
> この非推奨メソッドを置き換えるために推奨される方法は、 [`orientationX`](/ja/docs/Web/API/PannerNode/orientationX), [`orientationY`](/ja/docs/Web/API/PannerNode/orientationY), [`orientationZ`](/ja/docs/Web/API/PannerNode/orientationZ) 属性を直接設定することです。

`setOrientation()` は {{ domxref("PannerNode") }} インターフェイスのメソッドで、音声ソースの再生方向を定義します。

音にとても指向性がある場合、これは大きな効果があります。 3 つのコーン関連の属性 {{domxref("PannerNode.coneInnerAngle")}}、{{domxref("PannerNode.coneOuterAngle")}}、{{domxref("PannerNode.coneOuterGain")}} によって制御できます。このような場合、リスナーから遠ざかった音はとても小さく、あるいは無音にさえなります。

3 つの引数 `x`, `y`, `z` は単位を持たず、正しい直交座標系を用いて 3 次元空間の方向ベクトルを記述します。方向ベクトルの既定値は `(1, 0, 0)` です。

## 構文

```js-nolint
setOrientation(x, y, z)
```

### 引数

- `x`
  - : 3D 空間におけるパンナーの方向ベクトルの x 値。
- `y`
  - : 3D 空間におけるパンナーの方向ベクトルの y 値。
- `z`
  - : 3D 空間におけるパンナーの方向ベクトルの z 値。

### 返値

なし ({{jsxref("undefined")}})。

## 例

例のコードのについては [`BaseAudioContext.createPanner()`](/ja/docs/Web/API/BaseAudioContext/createPanner#examples) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
