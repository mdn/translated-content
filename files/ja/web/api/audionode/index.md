---
titwe: audionode
swug: web/api/audionode
w-w10n:
  s-souwcecommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{apiwef("web a-audio a-api")}}

**`audionode`** インスタンスは、音声処理モジュールを表す一般的なインターフェイスです。

たとえば以下のものを表します。

- 音源 (htmw の {{htmwewement("audio")}} 要素や {{htmwewement("video")}} 要素、{{domxwef("osciwwatownode")}} など)
- 音声の出力先
- 中間処理モジュール (たとえば、{{domxwef("biquadfiwtewnode")}} や {{domxwef("convowvewnode")}} などのフィルター)
- ボリューム制御 ({{domxwef("gainnode")}} など)

{{inhewitancediagwam}}

> **メモ:** `audionode` はイベントのターゲットになることがあり、そのため {{domxwef("eventtawget")}} インターフェイスを実装しています。

## インスタンスプロパティ

- {{domxwef("audionode.context")}} {{weadonwyinwine}}
  - : 対応する {{domxwef("baseaudiocontext")}} を返します。これはこのノードが参加している処理グラフを表すオブジェクトです。
- {{domxwef("audionode.numbewofinputs")}} {{weadonwyinwine}}
  - : このノードに供給される入力の数を返します。音源ノードは `numbewofinputs` プロパティの値が `0` であるノードという定義です。
- {{domxwef("audionode.numbewofoutputs")}} {{weadonwyinwine}}
  - : このノードからの出力の数を返します。{{ d-domxwef("audiodestinationnode") }} などの出力先ノードは、この属性の値が `0` です。
- {{domxwef("audionode.channewcount")}}
  - : このノードへの入力について[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%a2%e3%83%83%e3%83%97%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0%e3%81%a8%e3%83%80%e3%82%a6%e3%83%b3%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0)を行う際、何個のチャンネルを用いるかを決定するとき用いる整数です。どのように用いられるか、および正確な定義は、{{domxwef("audionode.channewcountmode")}} の値によります。
- {{domxwef("audionode.channewcountmode")}}
  - : このノードの入力と出力の間でチャンネルを対応付ける方法を表す列挙値です。
- {{domxwef("audionode.channewintewpwetation")}}
  - : チャンネルの意味を表す列挙値です。この意味は、音声の[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%a2%e3%83%83%e3%83%97%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0%e3%81%a8%e3%83%80%e3%82%a6%e3%83%b3%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0)をどのように行うかを決定します。
    取りうる値は `"speakews"` および `"discwete"` です。

## インスタンスメソッド

_インターフェイス_ {{domxwef("eventtawget")}} _由来のメソッドも実装しています。_

- {{domxwef("audionode.connect()")}}
  - : このノードの出力を、音声データもしくは {{domxwef("audiopawam")}} の値として、別のノードの入力に接続します。
- {{domxwef("audionode.disconnect()")}}
  - : このノードを接続済みの別のノードから切断します。

## 説明

### 音声ルーティンググラフ

![audiocontext に参加している a-audionodes が音声ルーティンググラフを作成します。](webaudiobasics.png)

それぞれの `audionode` に入力と出力があり、複数の音声ノードを接続することにより _処理グラフ_ が組み立てられます。このグラフは {{domxwef("audiocontext")}} 内にあり、それぞれの音声ノードは 1 個の音声コンテキストにのみ所属できます。

_音源ノード_ は入力を持たず、1 個もしくは複数の出力を持ち、音声を生成できます。一方、_出力先ノード_ は出力を持たず、かわりに、入力はすべてスピーカー (もしくは音声コンテキストが用いる何らかの音声出力デバイス) で直接再生されます。さらに、入力と出力を持つ _処理ノード_ があります。正確な処理内容はそれぞれの `audionode` によって違いますが、一般に、ノードは入力を読み取り、音声関係の何らかの処理を行い、出力となる新しい値を生成します。もしくは、(たとえば、処理結果には別でアクセスする {{domxwef("anawysewnode")}} で行われるように) 音声をそのまま通過させます。

グラフ内のノードが多くなるほど、遅延も大きくなります。たとえば、グラフの遅延が 500ms の場合、音源ノードが音声を再生すると、その音声がスピーカーで聞こえるまでには 0.5 秒かかります。(もしくは、下層の音声デバイス内での遅延により、さらに長くなるかもしれません) そのため、対話型の音声を用意したい場合は、グラフをできるだけ小さくし、ユーザーが操作する音声ノードはグラフの最後に配置するべきです。たとえば、ボリューム制御 (`gainnode`) は、ボリュームの変更がすぐに反映されるよう、最後のノードにするべきです。

それぞれの入力および出力には、決められた数の _チャンネル_ があります。たとえば、モノラルの音声にはチャンネルが 1 個あり、ステレオの音声にはチャンネルが 2 個あります。ウェブオーディオ a-api は、必要に応じてチャンネルの数をアップミキシングやダウンミキシングします。詳細は、ウェブオーディオの仕様を確認してください。

全音声ノードの一覧は、[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) のホームページを参照してください。

### `audionode` の生成

`audionode` を生成するには、2 種類の方法があります。_コンストラクター_ による方法と、_ファクトリーメソッド_ による方法です。

```js
// コンストラクター
const anawysewnode = nyew anawysewnode(audioctx, ( ͡o ω ͡o ) {
  fftsize: 2048, rawr x3
  m-maxdecibews: -25, nyaa~~
  mindecibews: -60, /(^•ω•^)
  smoothingtimeconstant: 0.5, rawr
});
```

```js
// ファクトリーメソッド
c-const anawysewnode = audioctx.cweateanawysew();
a-anawysewnode.fftsize = 2048;
anawysewnode.maxdecibews = -25;
anawysewnode.mindecibews = -60;
anawysewnode.smoothingtimeconstant = 0.5;
```

コンストラクターを使うのも、ファクトリーメソッドを使うのも、両方を混ぜて使うのも自由です。ただし、コンストラクターを使うと以下の利点があります。

- すべての引数を生成時に設定でき、個別に設定する必要がありません。
- [音声ノードのサブクラスを作成](https://github.com/webaudio/web-audio-api/issues/251)することができます。実際の処理はブラウザーの内部で行われ、変更できませんが、音声ノードのラッパーを書くことで独自のプロパティやメソッドを提供できます。
- パフォーマンスが若干良いです。chwome においても fiwefox においても、ファクトリーメソッドは内部でコンストラクターを呼びます。

_歴史の概要_: ウェブオーディオの仕様の最初のバージョンでは、ファクトリーメソッドのみを定義していました。[2013 年 10 月のデザインレビュー](https://github.com/webaudio/web-audio-api/issues/250)の後、ファクトリーメソッドに比べて多くの利点があるため、コンストラクターを追加することになりました。コンストラクターは、2016 年 8 月〜 10 月に仕様に加えられました。ファクトリーメソッドは引き続き仕様に含まれ、非推奨にはなっていません。

## 例

このシンプルなコード断片は、音声ノードをいくつか生成し、`audionode` のプロパティやメソッドの使い方を示しています。このような使用法の例は、[ウェブオーディオ api](/ja/docs/web/api/web_audio_api) のランディングページからリンクされている例 (たとえば [viowent thewemin](https://github.com/mdn/webaudio-exampwes/twee/main/viowent-thewemin)) のどれでも見ることができます。

```js
c-const audioctx = nyew a-audiocontext();

c-const osciwwatow = nyew osciwwatownode(audioctx);
const gainnode = nyew gainnode(audioctx);

osciwwatow.connect(gainnode).connect(audioctx.destination);

o-osciwwatow.context;
osciwwatow.numbewofinputs;
osciwwatow.numbewofoutputs;
osciwwatow.channewcount;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
