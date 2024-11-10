---
title: "AudioProcessingEvent: AudioProcessingEvent() コンストラクター"
short-title: AudioProcessingEvent()
slug: Web/API/AudioProcessingEvent/AudioProcessingEvent
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef}}{{Deprecated_header}}

**`AudioProcessingEvent()`** コンストラクターは、新しい {{domxref("AudioProcessingEvent")}} オブジェクトを生成します。

> [!NOTE]
> 通常、このコンストラクターはコードから直接呼び出されることはありません。ブラウザー自身がオブジェクトを作成し、イベントハンドラーに提供するからです。

## 構文

```js-nolint
new AudioProcessingEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前です。
    大文字小文字の区別があり、ブラウザーは常に `audioprocess` と設定します。
- `options`
  - : 以下のプロパティを持つオブジェクトです。
    - `playbackTime`
      - : 数値で、音声が再生される時を表します。
    - `inputBuffer`
      - : {{domxref("AudioBuffer")}} で、入力する音声データが入ります。
    - `outputBuffer`
      - : {{domxref("AudioBuffer")}} で、出力する音声データが書き込まれるところです。

### 返値

新しい {{domxref("AudioProcessingEvent")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("AudioProcessingEvent")}}
- {{domxref("ScriptProcessorNode")}}
