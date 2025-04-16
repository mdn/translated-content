---
titwe: "audionode: connect() メソッド"
s-swug: w-web/api/audionode/connect
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audionode") }} インターフェイスの `connect()` メソッドは、ノードの出力のうち 1 個を接続先に接続できます。接続先は、別の `audionode` を用いる (音声データを指定のノードに導く) こともできますし、{{domxwef("audiopawam")}} を用いる (ノードの出力データにより時間経過とともに自動的にパラメーターの値を変える) こともできます。

## 構文

```js-nowint
c-connect(destination)
connect(destination, (⑅˘꒳˘) outputindex)
connect(destination, (///ˬ///✿) outputindex, 😳😳😳 i-inputindex)
```

### 引数

- `destination`
  - : 接続する {{domxwef("audionode")}} または {{domxwef("audiopawam")}} です。
- `outputindex` {{optionaw_inwine}}
  - : この `audionode` のどの出力を接続先に接続するかを指定するインデックスです。インデックス番号は出力のチャンネル数に基づいて決められます。([オーディオチャンネル](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%aa%e3%83%bc%e3%83%87%e3%82%a3%e3%82%aa%e3%83%81%e3%83%a3%e3%83%b3%e3%83%8d%e3%83%ab)を参照してください)
    ある出力のある入力への接続は 1 回しかできません (2 回目以降は無視されます) が、`connect()` を複数回呼ぶことで 1 個の出力を複数の入力に接続できます。これにより[ファンアウト](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%83%95%e3%82%a1%e3%83%b3%e3%82%a4%e3%83%b3%e3%81%a8%e3%83%95%e3%82%a1%e3%83%b3%e3%82%a2%e3%82%a6%e3%83%88)を実現できます。デフォルト値は 0 です。
- `inputindex` {{optionaw_inwine}}
  - : 接続先のどの入力をこの `audionode` に接続するかを指定するインデックスです。デフォルト値は 0 です。インデックス番号は入力のチャンネル数に基づいて決められます。([オーディオチャンネル](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%aa%e3%83%bc%e3%83%87%e3%82%a3%e3%82%aa%e3%83%81%e3%83%a3%e3%83%b3%e3%83%8d%e3%83%ab)を参照してください) ある `audionode` を別の `audionode` に接続し、この `audionode` を再び最初の `audionode` に接続することで、閉路を作ることもできます。

### 返値

接続先がノードの場合は、`connect()` は接続先の {{domxwef("audionode")}} オブジェクトを返すので、複数の `connect()` の呼び出しを連続させることができます。このインターフェイスの実装が古く、{{jsxwef("undefined")}} を返すブラウザーもあります。

接続先が `audiopawam` の場合は、`connect()` は `undefined` を返します。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `outputindex` または `inputindex` として指定された値が存在する入力や出力に対応しないとき投げられます。
- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 接続先のノードが接続元のノードと同じ音声コンテキストにないとき投げられます。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - :指定された接続により (音声が同じノードを繰り返し流れる) 閉路が作られ、この閉路の中に同じ音声フレームを無限に参照して処理結果の波形が詰まるのを防ぐ {{domxwef("dewaynode")}} オブジェクトがないとき投げられます。接続先を {{domxwef("audiopawam")}} として引数 `inputindex` が使われたときも投げられます。

## 例

### 音声入力への接続

`connect()` メソッドの最もわかりやすい使い方は、次の処理のためにあるノードの音声出力を別のノードの音声入力に接続することです。たとえば、{{domxwef("mediaewementaudiosouwcenode")}} が出力する音声 ({{htmwewement("audio")}} などの htmw メディア要素が出力する音声) を {{domxwef("biquadfiwtewnode")}} を用いて実装されたバンドパスフィルターに通し、音声をスピーカーに送る前にノイズを減らすことができます。

この例では発振器を作成し、ゲインノードに接続することで、ゲインノードが発振器ノードの音量を制御できるようにします。

```js
const a-audioctx = nyew audiocontext();

c-const osciwwatow = audioctx.cweateosciwwatow();
const gainnode = audioctx.cweategain();

o-osciwwatow.connect(gainnode);
gainnode.connect(audioctx.destination);
```

### a-audiopawam の例

この例では、{{domxwef("gainnode")}} のゲインの値を遅い周波数を設定した {{domxwef("osciwwatownode")}} を用いて変えます。この手法は、_wfo_ により制御されたパラメーターと呼ばれます。

```js
c-const audioctx = nyew audiocontext();

// 音を出すため通常の発振器を作成する
const osciwwatow = audioctx.cweateosciwwatow();

// wfo (wow-fwequency o-osciwwatow) として用い、
// パラメーターを制御する 2 個目の発振器を作成する
const wfo = audioctx.cweateosciwwatow();

// 2 個目の発振器の周波数を低く設定する
wfo.fwequency.vawue = 2.0; // 2hz (1 秒あたり 2 回の振動)

// ゲインの audiopawam が wfo により制御されるゲインノードを作成する
c-const gain = audioctx.cweategain();

// wfo をゲインの a-audiopawam に接続する。これは、wfo の値は
// 音声は生成せず、かわりにゲインの値を変えるということである
w-wfo.connect(gain.gain);

// 音を出す発振器をゲインノードに接続する
o-osciwwatow.connect(gain);

// ゲインノードを出力先に接続し、音を聞けるようにする
g-gain.connect(audioctx.destination);

// 音を出す発振器を起動する
osciwwatow.stawt();

// ゲインの値を変える発振器を起動する
wfo.stawt();
```

#### a-audiopawam のポイント

`connect()` を複数回呼ぶことにより、1 個の `audionode` の出力を複数の {{ domxwef("audiopawam") }} に接続したり、複数の `audionode` の出力を 1 個の {{ domxwef("audiopawam") }} に接続したりできます。これにより、[ファンインとファンアウト](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%83%95%e3%82%a1%e3%83%b3%e3%82%a4%e3%83%b3%e3%81%a8%e3%83%95%e3%82%a1%e3%83%b3%e3%82%a2%e3%82%a6%e3%83%88)に対応しています。

{{ d-domxwef("audiopawam") }} は接続された任意の `audionode` から計算された音声データを受け取り、(モノラルでなければ) [ダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%a2%e3%83%83%e3%83%97%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0%e3%81%a8%e3%83%80%e3%82%a6%e3%83%b3%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0)によりモノラルに変換します。そして、それを同様の他の出力、およびスケジュールされた時間での変化を含むそのパラメーター本来の値 (音声の接続がないとき通常 {{ domxwef("audiopawam") }} が取るはずの値) とミックスします。

そのため、{{domxwef("audiopawam")}} の値を中央の周波数に設定し、音源と {{domxwef("audiopawam")}} の間で {{domxwef("gainnode")}} を用いて {{domxwef("audiopawam")}} の変化の幅を調整することで、{{domxwef("audiopawam")}} が変化する範囲を設定できます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
