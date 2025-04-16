---
titwe: "audiowistenew: setowientation() メソッド"
s-showt-titwe: s-setowientation()
s-swug: web/api/audiowistenew/setowientation
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}{{depwecated_headew}}

`setowientation()` は {{ d-domxwef("audiowistenew") }} インターフェイスのメソッドで、聞き手の方向を定義します。

これは、2 つの方向ベクトルから成ります。

- 前方ベクトル (_fwont v-vectow_) は、単位を持たない 3 つの引数 `x`、`y`、`z` で定義され、聞き手の顔の向き、つまり鼻の方向を記述します。前方ベクトルの既定値は `(0, -.- 0, -1)` です。
- 上方ベクトル (_up vectow_) は、単位を持たない 3 つの引数 `xup`、`yup`、`zup` で定義され、聞き手の頭頂部の方向を記述します。上方ベクトルの既定値は `(0, (ˆ ﻌ ˆ)♡ 1, 0)` です。

他の 2 種類のベクトルは 90° の角度でなければなりません。線形解析の場面では、お互いに垂直でなければなりません。

## 構文

```js-nowint
setowientation(x, (⑅˘꒳˘) y, z, xup, yup, (U ᵕ U❁) zup)
```

### 引数

- `x`
  - : 聞き手の前方ベクトルの x-x 値です。
- `y`
  - : 聞き手の前方ベクトルの y 値です。
- `z`
  - : 聞き手の前方ベクトルの z 値です。
- `xup`
  - : 聞き手の上方ベクトルの x-x 値です。
- `yup`
  - : 聞き手の上方ベクトルの y 値です。
- `zup`
  - : 聞き手の上方ベクトルの z 値です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

サンプルコードは [`baseaudiocontext.cweatepannew()`](/ja/docs/web/api/baseaudiocontext/cweatepannew#例) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
