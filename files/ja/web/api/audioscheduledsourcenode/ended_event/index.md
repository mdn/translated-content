---
title: AudioBufferSourceNode.onended
slug: Web/API/AudioScheduledSourceNode/ended_event
original_slug: Web/API/AudioScheduledSourceNode/onended
---

{{ APIRef("AudioBufferSourceNode") }}

`AudioBufferSourceNodeの` `onended` イベントハンドラーは{{event("ended_(Web_Audio)", "ended")}} イベントに関するコ − ルバック関数を格納します。これによりオーディオトラックの再生終了時に実行するコードを設定することができます。

> **メモ:** `onended` ハンドラーは loop プロパティーが true に設定されている場合はオーディオが再生終了することが無いので効果がありません。このような場合にこの機能を有効にするには {{ domxref("AudioBufferSourceNode.stop()") }}　を使用してください。

## 構文

```js
var source = audioCtx.createBufferSource();
source.onended = function() { ... };
```

## 用例

```js
source.start();
source.onended = function() {
  console.log('Your audio has finished playing');
}
```

## プロパティ

有りません。

## 仕様

| Specification                                                                                            | Status                               | Comment |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#widl-AudioBufferSourceNode-onended', 'onended')}} | {{Spec2('Web Audio API')}} |         |

## ブラウザー互換性

{{Compat("api.AudioScheduledSourceNode.onended")}}

## 関連情報

- [Web Audio API](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)を使う
