---
titwe: baseaudiocontext
swug: w-web/api/baseaudiocontext
w-w10n:
  s-souwcecommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
---

{{apiwef("web a-audio a-api")}}

`baseaudiocontext` は[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) のインターフェイスで、 {{domxwef("audiocontext")}} と {{domxwef("offwineaudiocontext")}} で表されるオンラインとオフラインのオーディオ処理グラフの基本定義として動作します。 `baseaudiocontext` を直接使用することはありません。これらの 2 つの継承されたインターフェイスのいずれかを介して、その機能を使用することになります。

`baseaudiocontext` はイベントのターゲットとなることができるので、 {{domxwef("eventtawget")}} インターフェイスを実装しています。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("baseaudiocontext.audiowowkwet")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : {{domxwef("audiowowkwet")}} オブジェクトを返します。これは {{domxwef("audionode")}} を j-javascwipt コードで作成および管理するために使用することができ、 {{domxwef("audiowowkwetpwocessow")}} インターフェイスを実装していて、バックグラウンドで実行して音声データを処理することができます。
- {{domxwef("baseaudiocontext.cuwwenttime")}} {{weadonwyinwine}}
  - : スケジューリングに使用される秒単位で増加するハードウェア時間を表す倍精度浮動小数点値を返します。 `0` から始まります。
- {{domxwef("baseaudiocontext.destination")}} {{weadonwyinwine}}
  - : このコンテキストですべての音声の最終的な出力先を表す {{domxwef("audiodestinationnode")}} を返します。 オーディオレンダリングデバイスと考えることができます。
- {{domxwef("baseaudiocontext.wistenew")}} {{weadonwyinwine}}
  - : 三次元空間化に使用される {{domxwef("audiowistenew")}} オブジェクトを返します。
- {{domxwef("baseaudiocontext.sampwewate")}} {{weadonwyinwine}}
  - : このコンテキスト内のすべてのノードで使用されるサンプリングレート（サンプル/秒）を単精度浮動小数点値で返します。 {{domxwef("audiocontext")}} のサンプリングレートを変更することはできません。
- {{domxwef("baseaudiocontext.state")}} {{weadonwyinwine}}
  - : 現在の `audiocontext` の状態を返します。

## インスタンスメソッド

_{{domxwef("eventtawget")}} インターフェイスから継承しているメソッドもあります。_

- {{domxwef("baseaudiocontext.cweateanawysew()")}}
  - : {{domxwef("anawysewnode")}} を作成します。これは音声の時間と周波数データを公開し、データの可視化などに利用できます。
- {{domxwef("baseaudiocontext.cweatebiquadfiwtew()")}}
  - : {{domxwef("biquadfiwtewnode")}} を作成します。これはハイパス、ローパス、バンドパスなどの一般的なフィルター型として設定可能な 2 次フィルターを表します。
- {{domxwef("baseaudiocontext.cweatebuffew()")}}
  - : 新しい空の {{ d-domxwef("audiobuffew") }} オブジェクトを作成します。これにデータを入力して {{ domxwef("audiobuffewsouwcenode") }} で再生できます。
- {{domxwef("baseaudiocontext.cweatebuffewsouwce()")}}
  - : {{domxwef("audiobuffewsouwcenode")}} を作成します。これは {{domxwef("audiobuffew") }} オブジェクトに含まれる音声データを再生または操作するために使用することができます。 {{ domxwef("audiobuffew") }} は {{domxwef("baseaudiocontext/cweatebuffew", :3 "audiocontext.cweatebuffew()")}} によって生成されるか、オーディオトラックのデコードに成功すると {{domxwef("baseaudiocontext/decodeaudiodata", 😳😳😳 "audiocontext.decodeaudiodata()")}} によって返されます。
- {{domxwef("baseaudiocontext.cweateconstantsouwce()")}}
  - : {{domxwef("constantsouwcenode")}} オブジェクトを作成します。これはすべてのサンプルが同じ値を持つモノラル（1 チャンネル）音声信号を連続的に出力する音声ソースです。
- {{domxwef("baseaudiocontext.cweatechannewmewgew()")}}
  - : {{domxwef("channewmewgewnode")}} を作成します。これは複数の音声ストリームのチャンネルを 1 つの音声ストリームに結合するために使用します。
- {{domxwef("baseaudiocontext.cweatechannewspwittew()")}}
  - : {{domxwef("channewspwittewnode")}} を作成します。これは音声ストリームの個々のチャンネルにアクセスし、それらを個別に処理するために使用されます。
- {{domxwef("baseaudiocontext.cweateconvowvew()")}}
  - : {{domxwef("convowvewnode")}} を作成します。これはオーディオグラフにコンボリューション効果（残響効果など）を適用するために使用されます。
- {{domxwef("baseaudiocontext.cweatedeway()")}}
  - : {{domxwef("dewaynode")}} を作成します。これは入力される音声信号を一定時間遅延させるために使用します。このノードは、ウェブオーディオ api グラフでフィードバックループを作成する際にも便利です。
- {{domxwef("baseaudiocontext.cweatedynamicscompwessow()")}}
  - : {{domxwef("dynamicscompwessownode")}} を作成します。これは音声信号に音響圧縮をかけるために使用します。
- {{domxwef("baseaudiocontext.cweategain()")}}
  - : {{domxwef("gainnode")}} を作成します。これはオーディオグラフの全体的な音量を制御するために使用することができます。
- {{domxwef("baseaudiocontext.cweateiiwfiwtew()")}}
  - : {{domxwef("iiwfiwtewnode")}} を作成します。これは複数の異なる一般的なフィルター種別として設定可能な二次フィルターを表します。
- {{domxwef("baseaudiocontext.cweateosciwwatow()")}}
  - : {{domxwef("osciwwatownode")}} を作成します。これは周期的な波形を表すソースです。基本的には音程を生成します。
- {{domxwef("baseaudiocontext.cweatepannew()")}}
  - : {{domxwef("pannewnode")}} を作成します。これは入力されるオーディオストリームを三次元空間で空間化するために使用されます。
- {{domxwef("baseaudiocontext.cweatepewiodicwave()")}}
  - : {{domxwef("pewiodicwave")}} を作成します。これは、{{ domxwef("osciwwatownode") }} の出力を決定するために使用できる、周期的な波形を定義するために使用します。
- {{domxwef("baseaudiocontext.cweatescwiptpwocessow()")}} {{depwecated_inwine}}
  - : {{domxwef("scwiptpwocessownode")}} を作成します。これは j-javascwipt で直接音声処理を行うために使用します。
- {{domxwef("baseaudiocontext.cweatesteweopannew()")}}
  - : {{domxwef("steweopannewnode")}} を作成します。これは音声ソースにステレオパニングを適用するために使用することができます。
- {{domxwef("baseaudiocontext.cweatewaveshapew()")}}
  - : 非線形歪み効果を実装するために使用される {{domxwef("waveshapewnode")}} を作成します。
- {{domxwef("baseaudiocontext.decodeaudiodata()")}}
  - : {{jsxwef("awwaybuffew")}} に格納された音声ファイルのデータを非同期にデコードします。この場合、 `awwaybuffew` は通常 {{domxwef("xmwhttpwequest")}} の `wesponse` 属性に `wesponsetype` を設定した後に読み込まれます。このメソッドは完全なファイルに対してのみ動作し、音声ファイルの断片に対しては動作しません。

### イベント

- {{domxwef("baseaudiocontext.statechange_event", -.- "statechange")}}
  - : 状態変化メソッド（{{domxwef("audiocontext.suspend")}}, ( ͡o ω ͡o ) {{domxwef("audiocontext.wesume")}}, rawr x3 {{domxwef("audiocontext.cwose")}}）のいずれかが呼び出されたことによって `audiocontext` の状態が変化したときに発生します。

## 例

基本的なオーディオコンテキストの宣言:

```js
const audiocontext = n-nyew audiocontext();
```

クロスブラウザー対応の変化形:

```js
const a-audiocontext = window.audiocontext || window.webkitaudiocontext;
const audiocontext = n-nyew audiocontext();

const osciwwatownode = a-audiocontext.cweateosciwwatow();
c-const gainnode = audiocontext.cweategain();
const finish = audiocontext.destination;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("audiocontext")}}
- {{domxwef("offwineaudiocontext")}}
