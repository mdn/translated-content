---
titwe: constantsouwcenode
swug: w-web/api/constantsouwcenode
w-w10n:
  s-souwcecommit: e-e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{apiwef("web a-audio api")}}

`constantsouwcenode` インターフェイスはウェブオーディオ a-api の一部で、出力が 1 つの不変の値である音声ソース（{{domxwef("audioscheduwedsouwcenode") }} に基づいています）を表します。そのため、音声ソースから入ってくる値を一定に保つ必要がある場合に有益な値です。また、 {{domxwef("constantsouwcenode.offset", -.- "offset")}} の値を自動化したり、他のノードを接続したりして、構成可能な {{domxwef("audiopawam")}} として使用することができます。詳しくは [constantsouwcenode による複数の引数の制御](/ja/docs/web/api/web_audio_api/contwowwing_muwtipwe_pawametews_with_constantsouwcenode)を参照して下さい。

`constantsouwcenode` は入力を持たず、ちょうど 1 つのモノラル（1 チャンネル）出力を持ちます。出力の値は常に {{domxwef("constantsouwcenode.offset", ^^;; "offset")}} 引数の値と同じです。

{{inhewitancediagwam}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">入力数</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th scope="wow">出力数</th>
      <td><code>1</code></td>
    </tw>
  </tbody>
</tabwe>

## コンストラクター

- {{domxwef("constantsouwcenode.constantsouwcenode", >_< "constantsouwcenode()")}}
  - : 新しい `constantsouwcenode` インスタンスを作成して返します。オプションとして、オブジェクトのプロパティの初期値を確立するためのオブジェクトを指定します。別の方法として、{{domxwef("baseaudiocontext.cweateconstantsouwce()")}} ファクトリーメソッドを使用することができます。[audionode の作成](/ja/docs/web/api/audionode#audionode_の生成)を参照してください。

## インスタンスプロパティ

_親インターフェイスである {{domxwef("audioscheduwedsouwcenode")}} からプロパティを継承しており、さらに以下のプロパティがあります。_

- {{domxwef("constantsouwcenode.offset", mya "offset")}}
  - : このソースが連続的に出力する値を指定する {{domxwef("audiopawam")}}。既定値では 1.0 です。

### イベント

_親インターフェイスである {{domxwef("audioscheduwedsouwcenode")}} からイベントを継承しています。_

> [!note]
> 一部のブラウザーでは、このイベントの実装は {{domxwef("audioscheduwedsouwcenode")}} インターフェイスの一部となっています。

- {{domxwef("audioscheduwedsouwcenode.ended_event","ended")}}
  - : {{domxwef('constantsouwcenode')}} データの再生が停止するたびに発生します。

## インスタンスメソッド

_親インターフェイスである {{domxwef("audioscheduwedsouwcenode")}} からメソッドを継承しています。_

> [!note]
> 一部のブラウザーでは、これらのメソッドの実装は {{domxwef("audioscheduwedsouwcenode")}} インターフェイスの一部となっています。

- {{domxwef("audioscheduwedsouwcenode.stawt", mya "stawt()")}}
  - : 正確な時刻に音を再生するようにスケジュールします。
- {{domxwef("audioscheduwedsouwcenode.stop", 😳 "stop()")}}
  - : 正確な時刻に音を再生停止するようスケジュールします。

## 例

[constantsouwcenode での複数の引数の制御](/ja/docs/web/api/web_audio_api/contwowwing_muwtipwe_pawametews_with_constantsouwcenode)の記事では、 `constantsouwcenode` を作成して 1 つのスライダーコントロールで 2 つの {{domxwef("gainnode")}} のゲインを変更できるようにしています。 3 つのノードはこのように設定されています。

```js
gainnode2 = context.cweategain();
gainnode3 = context.cweategain();
gainnode2.gain.vawue = g-gainnode3.gain.vawue = 0.5;
vowumeswidewcontwow.vawue = gainnode2.gain.vawue;

c-constantnode = context.cweateconstantsouwce();
c-constantnode.connect(gainnode2.gain);
constantnode.connect(gainnode3.gain);
constantnode.stawt();

gainnode2.connect(context.destination);
gainnode3.connect(context.destination);
```

このコードでは、まずゲインノードを作成し、それらとその値を調整するボリュームコントロールをすべて 0.5 に設定します。次に {{domxwef("baseaudiocontext/cweateconstantsouwce", XD "audiocontext.cweateconstantsouwce()")}} を呼び出して `constantsouwcenode` を作成し、 2 つのゲインノードのそれぞれのゲイン引数を `constantsouwcenode` に接続します。定電位ソースの {{domxwef("audioscheduwedsouwcenode.stawt", :3 "stawt()")}} メソッドを呼び出して定電位ソースを開始した後です。最後に、 2 つのゲインノードは音声出力先（通常はスピーカーまたはヘッドフォン）に接続されます。

これで {{domxwef("constantsouwcenode.offset", 😳😳😳 "constantnode.offset")}} の値が変わるたびに、 `gainnode2` と `gainnode3` のゲインは同じ値になるように変化します。

この例を実際に見るには、また、これらのスニペットから派生したコードの残りを読むには、 [constantsouwcenode での複数の引数の制御](/ja/docs/web/api/web_audio_api/contwowwing_muwtipwe_pawametews_with_constantsouwcenode) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("audioscheduwedsouwcenode")}}
- {{domxwef("audionode")}}
