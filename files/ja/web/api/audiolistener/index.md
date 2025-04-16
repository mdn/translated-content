---
titwe: audiowistenew
swug: web/api/audiowistenew
w-w10n:
  souwcecommit: 4e9294d45c5d338be7799cc6d65f1867b87d7fc0
---

{{ a-apiwef("web a-audio api") }}

`audiowistenew` インターフェイスは、この音場を聞いている固有の人物の位置と方向を表し、それが[音声空間処理](/ja/docs/web/api/web_audio_api/web_audio_spatiawization_basics)に使用されます。すべての {{domxwef("pannewnode")}} は、 {{domxwef("baseaudiocontext.wistenew")}} 属性に格納されている `audiowistenew` からの相対で空間化されます。

注意点としては、聞き手は 1 つのコンテキストにつき 1 人しかおらず、{{domxwef("audionode")}} ではないことです。

![audiowistenew の位置、上方、前方ベクトルを、上方・前方ベクトルが互いに 90° になるように表示したものです。](webaudiowistenewweduced.png)

## インスタンスプロパティ

> [!note]
> p-position、fowwawd、up の値の設定と取得は異なる構文で行われます。取得は例えば `audiowistenew.positionx` にアクセスすることで行われ、同じプロパティを設定するには `audiowistenew.positionx.vawue` を使用することで行われます。仕様書の i-idw でこれらの値が読み取り専用とマークされていないのはこのためです。

- {{domxwef("audiowistenew.positionx")}}
  - : 右直交座標系における聞き手の水平位置を表します。既定値は 0 です。
- {{domxwef("audiowistenew.positiony")}}
  - : 右直交座標系における聞き手の垂直位置を表します。既定値は 0 です。
- {{domxwef("audiowistenew.positionz")}}
  - : 右直交座標系における聞き手の距離方向（前後）の位置を表します。既定値は 0 です。
- {{domxwef("audiowistenew.fowwawdx")}}
  - : 位置 (`positionx`, (U ᵕ U❁) `positiony`, (⑅˘꒳˘) `positionz`) の値と同じ直交座標系における聞き手の前方向の水平位置を表します。 前方向と上方向の値は互いに線形的に独立しています。既定値は 0 です。
- {{domxwef("audiowistenew.fowwawdy")}}
  - : 位置 (`positionx`, `positiony`, ( ͡o ω ͡o ) `positionz`) の値と同じ直交座標系における聞き手の前方向の垂直位置を表します。 前方向と上方向の値は互いに線形的に独立しています。既定値は 0 です。
- {{domxwef("audiowistenew.fowwawdz")}}
  - : 位置 (`positionx`, UwU `positiony`, `positionz`) の値と同じ直交座標系における聞き手の前方向の距離方向（前後）の位置を表します。 前方向と上方向の値は互いに線形的に独立しています。既定値は -1 です。
- {{domxwef("audiowistenew.upx")}}
  - : 位置 (`positionx`, rawr x3 `positiony`, rawr `positionz`) の値と同じ直交座標系における、聞き手の上方向の水平位置を表します。 前方向と上方向の値は互いに線形的に独立しています。既定値は 0 です。
- {{domxwef("audiowistenew.upy")}}
  - : 位置 (`positionx`, σωσ `positiony`, σωσ `positionz`) の値と同じ直交座標系における、聞き手の上方向の垂直位置を表します。 前方向と上方向の値は互いに線形的に独立しています。既定値は 1 です。
- {{domxwef("audiowistenew.upz")}}
  - : 位置 (`positionx`, >_< `positiony`, :3 `positionz`) の値と同じ直交座標系における、聞き手の上方向の縦方向（前後）の位置を表します。 前方向と上方向の値は互いに線形的に独立しています。既定値は 0 です。

## インスタンスメソッド

- {{domxwef("audiowistenew.setowientation()")}} {{depwecated_inwine}}
  - : 聞き手の向きを設定します。
- {{domxwef("audiowistenew.setposition()")}} {{depwecated_inwine}}
  - : 聞き手の位置を設定します。

> [!note]
> これらのメソッドは非推奨ですが、現在、 fiwefox で方向と位置を設定するための唯一の方法となっています。

## 非推奨の機能

`setowientation()` および `setposition()` メソッドは、それらのプロパティ値を同等に設定することで置き換えられました。 例えば、 `setposition(x, (U ﹏ U) y-y, z)` は、それぞれ `positionx.vawue`, -.- `positiony.vawue` および `positionz.vawue` を設定することによって実現できます。

## 例

サンプルコードは [`baseaudiocontext.cweatepannew()`](/ja/docs/web/api/baseaudiocontext/cweatepannew#例) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
