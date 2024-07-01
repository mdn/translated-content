---
title: AudioDestinationNode
slug: Web/API/AudioDestinationNode
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{APIRef("Web Audio API")}}

`AudioDestinationNode` インターフェイスは、指定のコンテキストの音声の最後の目的地、通常は端末のスピーカーを表します。`OfflineAudioContext` と共に使えば、オーディオデータを「録音」するノードにもできます。

`AudioDestinationNode` には出力はなく（出力が**あれば**、これ以上 AudioNode に音声を結びつけることができません）、入力が 1 つあります。入力チャンネルの数は、0 から `maxChannelCount` 変数の間である必要があり、そうでなければ例外が発生します。

指定された `AudioContext` の `AudioDestinationNode` は {{domxref("BaseAudioContext/destination", "AudioContext.destination")}} プロパティで取得できます。

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">入力数</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">出力数</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルの数え方</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネル数</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルの意味</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## プロパティ

_親である {{domxref("AudioNode")}} から継承したプロパティがあります。_

- {{domxref("AudioDestinationNode.maxChannelCount")}}
  - : `unsigned long` で、この物理機器が扱うことができるチャンネルの最大数を定義します。

## メソッド

_固有のメソッドはありません。親である {{domxref("AudioNode")}} から継承したメソッドがあります。_

## 例

`AudioDestinationNode` の設定には複雑なことはありません。既定でユーザーのシステム（例:スピーカー）を表します。よって、数行のコードを書くだけで内部の音声を接続することができます。

```js
const audioCtx = new AudioContext();
const source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

完全な実装は、MDN Web Audio の [Voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) や [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) のような例を参考にしてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
