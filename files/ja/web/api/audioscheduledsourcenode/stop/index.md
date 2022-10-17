---
title: AudioBufferSourceNode.stop()
slug: Web/API/AudioScheduledSourceNode/stop
original_slug: Web/API/AudioBufferSourceNode/stop
---

{{ APIRef("Web Audio API") }}

インターフェースの`stop()`メソッドは、オーディオバッファの再生を停止させるために使われます。

## 構文

```js
var source = audioCtx.createBufferSource();
source.stop(when);
```

## 例

最も単純なオーディオバッファ再生の停止方法—この場合は何もパラメータを指定する必要はありません。

```js
source.stop();
```

しばらく後に停止させたい場合は、引数として秒数を指定します。

```js
source.stop(3);
```

> **メモ:** stop()の使い方の完全な例は[`AudioContext.decodeAudioData`](/ja/docs/Web/API/AudioContext/decodeAudioData)を参照してください。[コードをすぐに実行する](http://mdn.github.io/decode-audio-data/)ことや、[ソースコードを閲覧する](https://github.com/mdn/decode-audio-data)こともできます。

## 引数

- when
  - : `when`パラメータは、再生を*いつ*停止するかを決定します。指定の時間を経過すると、再生はすぐに停止します。このメソッドが 2 回以上呼ばれると、例外が発生します

## 戻り値

なし

## 使用

| Specification                                                                                                                | Status                               | Comment |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#widl-AudioBufferSourceNode-stop-void-double-when', 'stop()')}} | {{Spec2('Web Audio API')}} |         |

## ブラウザ互換性

{{Compat("api.AudioScheduledSourceNode.stop")}}

## 参考

- [Using the Web Audio API](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
