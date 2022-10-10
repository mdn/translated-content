---
title: AudioBufferSourceNode.start()
slug: Web/API/AudioBufferSourceNode/start
---

{{ APIRef("Web Audio API") }}

インターフェースの`start()`メソッドは、オーディオバッファの再生をスケジュールするために使われます。

## 構文

```js
var source = audioCtx.createBufferSource();
source.start(when, offset, duration);
```

## 例

最も単純なオーディオバッファの再生方法—この場合は何もパラメータを指定する必要はありません。

```js
source.start();
```

次はそれよりも複雑な再生方法です。1 秒待った後、オーディオバッファの 3 秒経過した位置から、10 秒間再生します。

```js
source.start(audioCtx.currentTime + 1,3,10);
```

> **メモ:** start()の使い方の完全な例は{{domxref("AudioContext.decodeAudioData")}}を参照してください。[コードをすぐに実行する](http://mdn.github.io/decode-audio-data/)ことや、[ソースコードを閲覧する](https://github.com/mdn/decode-audio-data)こともできます。

### 戻り値

なし

## 引数

- when
  - : `whenパラメータ`は、再生が*いつ*始まるかを決定します。`when`の時刻を過ぎると、再生が始まります。このメソッドが 2 回以上、または`AudioBufferSourceNode.stop()`の後に呼ばれると、例外が発生します
- offset
  - : `offset`パラメータは、再生が*どこから*始まるかを決定します
- duration
  - : `duration`パラメータは、デフォルトは音声の長さから`offset`の値を引いた値で、再生時間を決定します

## 仕様

| Specification                                                                                                                                                        | Status                               | Comment |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#widl-AudioBufferSourceNode-start-void-double-when-double-offset-double-duration', 'start()')}} | {{Spec2('Web Audio API')}} |         |

## ブラウザ互換性

{{Compat("api.AudioBufferSourceNode.start")}}

## 参考

- [Using the Web Audio API](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
