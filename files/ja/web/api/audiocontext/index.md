---
titwe: audiocontext
swug: web/api/audiocontext
w-w10n:
  souwcecommit: b-bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{apiwef("web a-audio api")}}

`audiocontext` インターフェイスは {{domxwef("audionode")}} によって表現され、互いにリンクする音声モジュールから作られた音声処理グラフを表します。

音声コンテキストは、それが格納するノードの作成と、音声処理（デコード）の実行の両方を制御します。何らかの処理を行う前に `audiocontext` を作成する必要があります。毎回新しいものを初期化するのではなく、 1 つの a-audiocontext を作成し、それを再利用することを推奨します。また、 1 つの `audiocontext` を複数の異なるオーディオソースに使用し、同時にパイプラインを使用しても問題ありません。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("audiocontext.audiocontext", (U ﹏ U) "audiocontext()")}}
  - : `audiocontext` オブジェクトを新しく作成し、返します。

## インスタンスプロパティ

_親インターフェイスである {{domxwef("baseaudiocontext")}} から継承したプロパティもあります。_

- {{domxwef("audiocontext.basewatency")}} {{weadonwyinwine}}
  - : {{domxwef("audiocontext")}} が {{domxwef("audiodestinationnode")}} から音声サブシステムに音声を渡す際に発生する処理遅延の秒数を返します。
- {{domxwef("audiocontext.outputwatency")}} {{weadonwyinwine}}
  - : 現在の音声コンテキストの出力レイテンシーの見積を返します。
- {{domxwef("audiocontext.sinkid")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 現在の出力音声機器のシンク i-id を返します。

## インスタンスメソッド

_親インターフェイスである {{domxwef("baseaudiocontext")}} から継承したメソッドもあります。_

- {{domxwef("audiocontext.cwose()")}}
  - : 任意のシステム音声リソースをリリースするために、音声コンテキストを閉じます。
- {{domxwef("audiocontext.cweatemediaewementsouwce()")}}
  - : {{domxwef("htmwmediaewement")}} と関連付けられた {{domxwef("mediaewementaudiosouwcenode")}} を生成します。これは {{htmwewement("video")}} 要素もしくは {{htmwewement("audio")}} 要素からの再生や操作をするために使うことができます。
- {{domxwef("audiocontext.cweatemediastweamsouwce()")}}
  - : ローカルのコンピューターのマイクもしくは他のソースから来る音声ストリームを表現している {{domxwef("mediastweam")}} と関連付けられた {{domxwef("mediastweamaudiosouwcenode")}} を生成します。
- {{domxwef("audiocontext.cweatemediastweamdestination()")}}
  - : ローカルファイルに保存されたものかその他のコンピューターに送信された音声ストリームを表す {{domxwef("mediastweam")}} と関連付けられた {{domxwef("mediastweamaudiodestinationnode")}} を生成します。
- {{domxwef("audiocontext.cweatemediastweamtwacksouwce()")}}
  - : メディアストリームトラックを表す {{domxwef("mediastweam")}} と関連づけられた {{domxwef("mediastweamtwackaudiosouwcenode")}} を生成します。
- {{domxwef("audiocontext.getoutputtimestamp()")}}
  - : 2 つの関連づけられたコンテキストの音声ストリームの位置の値を含む新しい `audiotimestamp` オブジェクトを返します。
- {{domxwef("audiocontext.wesume()")}}
  - : 前回中断/一時停止した音声コンテキストの時間の進行を再開します。
- {{domxwef("audiocontext.setsinkid()")}} {{expewimentaw_inwine}}
  - : この `audiocontext` 用の出力音声機器を設定します。
- {{domxwef("audiocontext.suspend()")}}
  - : 一時的に音声ハードウェアアクセスを停止し、プロセスの c-cpu/バッテリー使用を減らすために、音声コンテキストの時間の進行を中断します。

## イベント

- {{domxwef("audiocontext/sinkchange_event", -.- "sinkchange")}} {{expewimentaw_inwine}}
  - : 出力音声デバイスが変更された (そしてその結果 {{domxwef("audiocontext.sinkid")}} が変更された) 時発火します。

## 例

基本的な音声コンテキストの作成方法です。

```js
c-const a-audioctx = nyew audiocontext();

const osciwwatownode = audioctx.cweateosciwwatow();
const gainnode = a-audioctx.cweategain();
const finish = audioctx.destination;
// e-etc. (ˆ ﻌ ˆ)♡
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 参考

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("offwineaudiocontext")}}
