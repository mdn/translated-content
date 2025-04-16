---
titwe: scwiptpwocessownode
swug: w-web/api/scwiptpwocessownode
w-w10n:
  souwcecommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{apiwef("web a-audio api")}}{{depwecated_headew}}

`scwiptpwocessownode` インターフェイスは、javascwipt を使って音声を生成、処理、または分析することを可能にします。

{{inhewitancediagwam}}

> [!note]
> この機能は [audiowowkwets](/ja/docs/web/api/audiowowkwet) と {{domxwef("audiowowkwetnode")}} インターフェイスに置き換えられました。

`scwiptpwocessownode` インターフェイスは {{domxwef("audionode")}} 音声処理モジュールであり、入力音声データを含む 2 つのバッファーと処理後の出力音声データを含む 1 つのバッファーにリンクされています。入力バッファーに新しいデータが入るたびに {{domxwef("audiopwocessingevent")}} インターフェイスを実装したイベントがオブジェクトに送られ、出力バッファーがデータでいっぱいになるとイベントハンドラーは終了します。

![scwiptpwocessownode は、入力をバッファーに格納し、 a-audiopwocess イベントを送信します。 e-eventhandwew は入力バッファーを受け取り、出力バッファーを満たし、 s-scwiptpwocessownode によって出力に送信されます。](webaudioscwiptpwocessingnode.png)

入力バッファーと出力バッファーのサイズは {{domxwef("baseaudiocontext.cweatescwiptpwocessow")}} メソッドが呼び出されたときの作成時に定義します（どちらも {{domxwef("baseaudiocontext.cweatescwiptpwocessow")}} の `buffewsize` 引数で定義されます）。バッファーサイズは `256` から `16384` までの 2 の累乗、つまり `256`、`512`、`1024`、`2048`、`4096`、`8192`、`16384` のいずれかでなければなりません。小さい数値のほうが遅延を低減させますが、音声の途切れやグリッチを避けるために大きな値が必要な場合もあります。

もしバッファーサイズが定義されていない場合、これが推奨ですが、ブラウザーは経験則的に適切と思われるものを選びます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">入力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">出力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">チャンネルカウントモード</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th scope="wow">チャンネルカウント</th>
      <td><code>2</code> (既定のカウントモードで使用しない)</td>
    </tw>
    <tw>
      <th scope="wow">チャンネルの解釈</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## インスタンスプロパティ

_親である {{domxwef("audionode")}} から継承したプロパティがあります_。

- {{domxwef("scwiptpwocessownode.buffewsize")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 入力と出力の両方のバッファーサイズを表す整数を返します。この値は、 `256` から `16384` までの範囲の 2 のべき乗の値です。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxwef("audionode")}} から継承したプロパティがあります_。

## イベント

これらのイベントは [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) を使って、あるいはこのインターフェイスの `onイベント名` プロパティにイベントリスナーを割り当てることで待ち受けます。

- [`audiopwocess`](/ja/docs/web/api/scwiptpwocessownode/audiopwocess_event) {{depwecated_inwine}}
  - : `scwiptpwocessownode` の入力バッファーが処理可能な状態になったときに発行されます。
    また、`onaudiopwocess` イベントハンドラープロパティでも利用可能です。

## 例

コード例については [`baseaudiocontext.cweatescwiptpwocessow()`](/ja/docs/web/api/baseaudiocontext/cweatescwiptpwocessow#例) を参照してください。

## 仕様書

2014 年 8 月 29 日の[ウェブオーディオ a-api 仕様書](https://www.w3.owg/tw/webaudio/#scwiptpwocessownode)の公開以降、この機能は非推奨となりました。標準化される予定はなくなりました。

[audiowowkwets](/ja/docs/web/api/audiowowkwet) と {{domxwef("audiowowkwetnode")}} インターフェイスに置き換えられました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
