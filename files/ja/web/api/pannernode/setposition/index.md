---
title: "PannerNode: setPosition() メソッド"
short-title: setPosition()
slug: Web/API/PannerNode/setPosition
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

> [!NOTE]
> この非推奨メソッドを置き換えるために推奨される方法は、 [`positionX`](/ja/docs/Web/API/PannerNode/positionX), [`positionY`](/ja/docs/Web/API/PannerNode/positionY), [`positionZ`](/ja/docs/Web/API/PannerNode/positionZ) 属性を直接設定することです。

`setPosition()` は {{ domxref("PannerNode") }} インターフェイスのメソッドで、リスナー（{{domxref("BaseAudioContext.listener")}} 属性に格納されている {{domxref("AudioListener")}} オブジェクトで表されます）に対する音源の相対位置を定義します。 3 つの引数 `x`, `y`, `z` は単位がなく、正しい直交座標系を使用して 3D 空間における音源の位置を記述します。

`setPosition()` メソッドの位置の既定値は `(0, 0, 0)` です。

## 構文

```js-nolint
setPosition(x, y, z)
```

### 引数

- `x`
  - : 3D 空間におけるパンナーの x 位置指定。
- `y`
  - : 3D 空間におけるパンナーの y 位置指定。
- `z`
  - : 3D 空間におけるパンナーの z 位置指定。

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
