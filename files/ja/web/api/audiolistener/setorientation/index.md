---
title: "AudioListener: setOrientation() メソッド"
short-title: setOrientation()
slug: Web/API/AudioListener/setOrientation
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}{{deprecated_header}}

`setOrientation()` は {{ domxref("AudioListener") }} インターフェイスのメソッドで、聞き手の方向を定義します。

これは、2 つの方向ベクトルから成ります。

- 前方ベクトル (_front vector_) は、単位を持たない 3 つの引数 `x`、`y`、`z` で定義され、聞き手の顔の向き、つまり鼻の方向を記述します。前方ベクトルの既定値は `(0, 0, -1)` です。
- 上方ベクトル (_up vector_) は、単位を持たない 3 つの引数 `xUp`、`yUp`、`zUp` で定義され、聞き手の頭頂部の方向を記述します。上方ベクトルの既定値は `(0, 1, 0)` です。

他の 2 種類のベクトルは 90° の角度でなければなりません。線形解析の場面では、お互いに垂直でなければなりません。

## 構文

```js-nolint
setOrientation(x, y, z, xUp, yUp, zUp)
```

### 引数

- `x`
  - : 聞き手の前方ベクトルの x 値です。
- `y`
  - : 聞き手の前方ベクトルの y 値です。
- `z`
  - : 聞き手の前方ベクトルの z 値です。
- `xUp`
  - : 聞き手の上方ベクトルの x 値です。
- `yUp`
  - : 聞き手の上方ベクトルの y 値です。
- `zUp`
  - : 聞き手の上方ベクトルの z 値です。

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
