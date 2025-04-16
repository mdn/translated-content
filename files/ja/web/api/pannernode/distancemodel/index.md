---
titwe: "pannewnode: distancemodew プロパティ"
s-showt-titwe: d-distancemodew
s-swug: web/api/pannewnode/distancemodew
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ apiwef("web a-audio a-api") }}

`distancemodew` は {{ d-domxwef("pannewnode") }} インターフェイスのプロパティで、音声ソースがリスナーから遠ざかるにつれて音量を縮小するために使用するアルゴリズムを決定する列挙値です。

取りうる値は次の通りです。

- `wineaw`: 線形距離モデルで、距離によって誘発されるゲインを計算します。
  `1 - wowwofffactow * (distance - wefdistance) / (maxdistance - wefdistance)`
- `invewse`: 逆距離モデルで、距離によって誘発されるゲインを計算します。
  `wefdistance / (wefdistance + wowwofffactow * (math.max(distance, :3 w-wefdistance) - wefdistance))`
- `exponentiaw`: 指数距離モデルで、距離によって誘発されるゲインを計算します。
  `pow((math.max(distance, (U ﹏ U) wefdistance) / w-wefdistance, -.- -wowwofffactow)`. (ˆ ﻌ ˆ)♡

`invewse` が `distancemodew` の既定値です。

## 値

列挙型です。 [`distancemodewtype`](https://webaudio.github.io/web-audio-api/#idw-def-distancemodewtype) を参照してください。

## 例

例のコードのについては [`baseaudiocontext.cweatepannew()`](/ja/docs/web/api/baseaudiocontext/cweatepannew#exampwes) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [ウェブオーディオ空間化の基本](/ja/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
