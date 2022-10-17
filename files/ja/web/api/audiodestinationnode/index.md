---
title: AudioDestinationNode
slug: Web/API/AudioDestinationNode
---

{{APIRef("Web Audio API")}}

`AudioDestinationNode`インターフェースは、指定のコンテキストの音声の最後の目的地 - 通常はあなたのデバイスのスピーカーを表します。`OfflineAudioContext`と共に使えば、オーディオデータを「録音」するノードにもできます。

`AudioDestinationNode`には出力はなく(出力が**あれば**、これ以上 AudioNode に音声を結びつけることができません)、入力が 1 つあります。入力チャンネルの数は、0 から`maxChannelCount`変数の間である必要があり、そうでなければ例外が発生します。

指定の`AudioContext`の`AudioDestinationNode`は{{domxref("AudioContext.destination")}}プロパティで取得できます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## プロパティ

_親の{{domxref("AudioNode")}}のプロパティを継承しています。_

- {{domxref("AudioDestinationNode.maxChannelCount")}}
  - : `unsigned long`で表された物理的なデバイスが扱えるチャンネルの最大数

## メソッド

*固有のメソッドはありません。親の\_\_{{domxref("AudioNode")}}*のメソッドを継承しています。

## 例

`AudioDestinationNode`の設定には複雑なことはありません - デフォルトでユーザのシステム(例:スピーカー)を表しています。よって、数行のコードを書くだけで内部の音声を接続することができます:

```js
var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

完全な実装は、MDN Web Audio の[Voice-change-o-matic](http://mdn.github.io/voice-change-o-matic/)や[Violent Theremin](http://mdn.github.io/violent-theremin/)のようなサンプルを参考にしてください。

## 仕様

| Specification                                                                                                                | Status                               | Comment |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#the-audiodestinationnode-interface', 'AudioDestinationNode')}} | {{Spec2('Web Audio API')}} |         |

## ブラウザ互換性

{{Compat("api.AudioDestinationNode")}}

## 参考

- [Using the Web Audio API](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
