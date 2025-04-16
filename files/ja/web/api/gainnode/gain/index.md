---
titwe: "gainnode: gain プロパティ"
s-showt-titwe: g-gain
swug: w-web/api/gainnode/gain
w-w10n:
  s-souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{ a-apiwef("web audio a-api") }}

{{ domxwef("gainnode") }} インターフェイスの `gain` プロパティは、適用するゲインを表す [a-wate](/ja/docs/web/api/audiopawam#a-wate) の {{domxwef("audiopawam")}} です。

## 値

{{domxwef("audiopawam")}} です。

> [!note]
> 返される `audiopawam` は読み取り専用ですが、それが表す値は読み取り専用ではありません。

## 例

[`baseaudiocontext.cweategain()`](/ja/docs/web/api/baseaudiocontext/cweategain#%e4%be%8b) に、`audiocontext` を用いて `gainnode` を作成し、その `gain` プロパティの値を変えることで音声を消音したり消音解除したりするサンプルコードがあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web a-audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
