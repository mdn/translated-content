---
title: "AudioNode: channelInterpretation プロパティ"
short-title: channelInterpretation
slug: Web/API/AudioNode/channelInterpretation
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

{{domxref("AudioNode")}} インターフェイスの **`channelInterpretation`** プロパティは、入力と出力の数が違う場合に入力のチャンネルを出力のチャンネルに対応付ける方法を表す列挙値です。たとえば、これによりモノラルの入力をステレオや 5.1 チャンネルの出力にアップミキシングする方法や、クアッドチャンネルの入力をステレオやモノラルの出力にダウンミキシングする方法が決まります。

このプロパティには、`speakers` と `discrete` の 2 個の選択肢があります。これらの説明は、[Basic concepts behind Web Audio API > アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%A2%E3%83%83%E3%83%97%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%80%E3%82%A6%E3%83%B3%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0)にあります。

## 値

値の説明は、[Basic concepts behind Web Audio API > アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%A2%E3%83%83%E3%83%97%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%80%E3%82%A6%E3%83%B3%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0)にあります。

簡単にいうと:

- `speakers`
  - : 一般的なスピーカーの入力と出力の設計の組み合わせ (モノラル、ステレオ、クアッド、5.1) 用の「通常の」対応付けを使用します。たとえば、この設定では、モノラルの入力はステレオの出力の両方のチャンネルに出力されます。
- `discrete`
  - : 入力のチャンネルは順に出力のチャンネルに対応付けられます。出力より入力が多い場合は、余った入力は捨てられます。入力の方が少ない場合は、余った出力は無音になります。

## 例

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelInterpretation = "discrete";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
