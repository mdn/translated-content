---
title: "PannerNode: panningModel プロパティ"
short-title: panningModel
slug: Web/API/PannerNode/panningModel
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

`panningModel` は {{ domxref("PannerNode") }} インターフェイスのプロパティで、 3D 空間で音声を配置するために使用する空間化アルゴリズムを決定する列挙値です。

取りうる値は次の通りです。

- `equalpower`: 一般に単純で効率的と見なされる等出力のパンニングアルゴリズムを表します。 `equalpower` が既定値です。
- `HRTF`: `equalpower` よりも高品質なステレオ出力をレンダリングします。人間の被験者から測定したインパルスレスポンスによるコンボリューションを使用します。

## 値

列挙値です。 [`PanningModelType`](https://webaudio.github.io/web-audio-api/#idl-def-PanningModelType) を参照してください。

## 例

例のコードのについては [`BaseAudioContext.createPanner()`](/ja/docs/Web/API/BaseAudioContext/createPanner#examples) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
