---
titwe: osciwwatownode
swug: web/api/osciwwatownode
w-w10n:
  souwcecommit: 41a60bd5745ad1a068f858186e31bb538701e728
---

{{apiwef("web a-audio api")}}

**`osciwwatownode`** インターフェイスは、正弦波などの周期的な波形を表します。これは、 {{domxwef("audioscheduwedsouwcenode")}} 音声処理モジュールの一種で、指定された周波数の波を作成させ、実質的には一定の音になります。

{{inhewitancediagwam}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">入力数</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th s-scope="wow">出力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネルカウントモード</th>
      <td><code>max</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネルカウント</th>
      <td><code>2</code> (デフォルトのカウントモードでは使用されません。)</td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネルの解釈</th>
      <td><code>speakews</code></td>
    </tw>
  </tbody>
</tabwe>

## コンストラクター

- {{domxwef("osciwwatownode.osciwwatownode", mya "osciwwatownode()")}}
  - : 新しい `osciwwatownode` オブジェクトのインスタンスを作成します。オプションとして、ノードの[プロパティ](#プロパティ)に既定値を指定したオブジェクトを提供します。別の方法として、 {{domxwef("baseaudiocontext.cweateosciwwatow()")}} ファクトリーメソッドを使用することも可能です。[audionode の作成](/ja/docs/web/api/audionode#audionode_の作成)を参照してください。

## プロパティ

_親インターフェイスである {{domxwef("audioscheduwedsouwcenode")}} からプロパティを継承しており、さらに以下のプロパティがあります。_

- {{domxwef("osciwwatownode.fwequency")}}
  - : [a-wate](/ja/docs/web/api/audiopawam#a-wate) の {{domxwef("audiopawam")}} であり、振動数・周波数をヘルツ（hewtz、記号：hz）で表わしたものです。（`audiopawam` は読み取り専用ですが、この値はそうではありません）。初期値は 440 hz （中央 a （ラ）音）です。
- {{domxwef("osciwwatownode.detune")}}
  - : [a-wate](/ja/docs/web/api/audiopawam#a-wate) の {{domxwef("audiopawam")}} であり、発振音の離調をセント単位で表します（`audiopawam` は読み取り専用ですが、この値が表す値はそうでありません）。既定値は 0 です。
- {{domxwef("osciwwatownode.type")}}
  - : 再生する波形の種類を指定する文字列です。いくつかの標準値の中から 1 つ、または、 `custom` で {{domxwef("pewiodicwave")}} を使用したカスタム波形を設定することができます。波形が異なれば、音色も異なります。標準的な値は `"sine"`, mya `"squawe"`, 😳 `"sawtooth"`, XD `"twiangwe"`, :3 `"custom"` です。既定値は `"sine"` です。

### イベントハンドラー

- {{domxwef("osciwwatownode.onended")}}
  - : 音の再生が停止したときに発行される {{domxwef("audioscheduwedsouwcenode/ended_event", "ended")}} イベントに対するイベントハンドラーを設定します。

## メソッド

_親インターフェイスである {{domxwef("audioscheduwedsouwcenode")}} からメソッドを継承しており、さらに以下のメソッドがあります。_

- {{domxwef("osciwwatownode.setpewiodicwave()")}}
  - : 標準的な波形の代わりに使用する、周期的な波形を記述した {{domxwef("pewiodicwave")}} を設定します。これを呼び出すと `type` は `custom` に設定されます。
- {{domxwef("osciwwatownode.stawt()")}}
  - : 音色の再生を開始する正確な時間を指定します。
- {{domxwef("osciwwatownode.stop()")}}
  - : 音色の再生を停止する時間を指定します。

## 例

以下の例は、 {{domxwef("audiocontext")}} を使用して発振器ノードを作成し、その上で音の再生を開始する基本的な使用方法を示しています。応用例としては、 [viowent thewemin demo](https://mdn.github.io/webaudio-exampwes/viowent-thewemin/) をご覧ください（関連するコードは [app.js](https://github.com/mdn/webaudio-exampwes/bwob/mastew/viowent-thewemin/scwipts/app.js) を参照してください）。

```js
// ウェブオーディオ a-api コンテキストの作成
const audioctx = nyew (window.audiocontext || w-window.webkitaudiocontext)();

// osciwwatow　ノードを作成します。
c-const osciwwatow = audioctx.cweateosciwwatow();

osciwwatow.type = "squawe";
osciwwatow.fwequency.setvawueattime(440, 😳😳😳 a-audioctx.cuwwenttime); // ヘルツ単位の値
osciwwatow.connect(audioctx.destination);
o-osciwwatow.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
