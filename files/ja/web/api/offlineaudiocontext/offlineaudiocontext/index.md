---
title: OfflineAudioContext()
slug: Web/API/OfflineAudioContext/OfflineAudioContext
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{APIRef("Web Audio API")}}

**`OfflineAudioContext()`** コンストラクターは、[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の一部で、新しい {{domxref("OfflineAudioContext")}} オブジェクトインスタンスを生成して返します。これは音声出力機器ではなく {{domxref("AudioBuffer")}} に音声を出力することができるものです。

## 構文

```js-nolint
new OfflineAudioContext(options)

new OfflineAudioContext(numberOfChannels, length, sampleRate)
```

### 引数

`OfflineAudioContext()` コンストラクターの引数は {{domxref("BaseAudioContext.createBuffer")}} メソッドに入力する引数と同じものを指定するか、あるいは `options` オブジェクトにそれらの引数を渡して指定することも可能です。いずれにせよ、個々の引数は同じものです。

- `numberOfChannels`
  - : 整数で、結果の {{domxref("AudioBuffer")}} が持つチャンネル数を指定します。
- `length`
  - : 整数値で、音声コンテキスト用に作成するバッファーのサイズを指定します。サンプルフレームは、音声データの各チャンネルに対して、音声データの単一のサンプルを格納することができる単位です。例えば、 `sampleRate` が 48000Hz で 5 秒間のバッファーは `5 * 48000 = 240000` サンプルフレームの長さになります。
- `sampleRate`
  - : リニア音声データのサンプルレート（1 秒あたりのサンプルフレーム数）。すべてのユーザーエージェントは 8000Hz から 96000Hz の範囲に対応していますが、それよりも広い範囲に対応することもあります。最も有益なのは 44100Hz で、これは CD 音声で使用されるサンプルレートです。

注意すべき点は、引数なしで {{domxref("AudioContext")}} コンストラクターを使用して新しい {{domxref("AudioContext.AudioContext()", "new AudioContext()")}} が作成できるのに対し、 `OfflineAudioContext()` コンストラクターは `AudioBuffer` を作成しなければいけないので 3 つの引数が必要になる点です。これは新しい {{domxref("AudioBuffer")}} を {{domxref("BaseAudioContext.createBuffer")}} メソッドで作成したときと全く同じように動作します。詳しくは[オーディオバッファー: フレーム、サンプル、チャンネルセクション](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#オーディオバッファー_フレーム、サンプル、チャンネルセクション)をご覧ください。

### 返値

新しい {{domxref("OfflineAudioContext")}} オブジェクトで、関連付けられた `AudioBuffer` はリクエストされたとおりに構成されます。

通常の `AudioContext` と同様に、 `OfflineAudioContext` はイベントの対象となることができます。そのため、このインターフェイスは {{domxref("EventTarget")}} を実装しています。

## 例

```js
const offlineCtx = new OfflineAudioContext({
  numberOfChannels: 2,
  length: 44100 * 40,
  sampleRate: 44100,
});
const source = offlineCtx.createBufferSource();
// …
```

動作する例全体は、 [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) を GitHub リポジトリーで参照してください（[ソースコード](https://github.com/mdn/webaudio-examples/blob/master/offline-audio-context-promise/index.html)も参照してください）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
