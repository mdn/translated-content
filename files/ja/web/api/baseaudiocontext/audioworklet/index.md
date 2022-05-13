---
title: BaseAudioContext.audioWorklet
slug: Web/API/BaseAudioContext/audioWorklet
tags:
  - API
  - 音声
  - AudioContext
  - AudioWorklet
  - BaseAudioContext
  - プロパティ
  - リファレンス
  - ウェブ音声 API
  - Worklet
browser-compat: api.BaseAudioContext.audioWorklet
translation_of: Web/API/BaseAudioContext/audioWorklet
---
{{ APIRef("Web Audio API") }}{{securecontext_header}}

`audioWorklet` は {{domxref("BaseAudioContext")}} インターフェイスの読み取り専用プロパティで、 {{domxref("AudioWorklet")}} のインスタンスを返し案す。これは、独自の音声処理を実装する {{domxref("AudioWorkletProcessor")}} の派生クラスを追加するために使用します。

## 値

{{domxref("AudioWorklet")}} のインスタンスです。

## 例

_ユーザー定義のオーディオ処理を実演する完全な例については、 {{domxref("AudioWorkletNode")}} のページを参照してください。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioWorkletNode")}}
