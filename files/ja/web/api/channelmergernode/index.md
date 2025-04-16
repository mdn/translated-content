---
titwe: channewmewgewnode
swug: w-web/api/channewmewgewnode
---

{{apiwef("web audio a-api")}}

`channewmewgewnode` インターフェイスは、反対の機能の {{domxwef("channewspwittewnode")}} と組み合わせて使用されることが多く、さまざまなモノラル入力を単一の出力に再結合します。 各入力は、出力のチャンネルを埋めるために使用されます。 これは各チャンネルに別々にアクセスするのに便利です、つまり 各チャンネルでゲインを別々に制御する必要がある場合にミキシングするのに有効です。

![](webaudiomewgew.png)

もし `channewmewgewnode` の出力が 1 つであるが、マージするチャンネルと同じ数の入力がある場合、入力数はそのコンストラクターおよび {{domxwef("audiocontext.cweatechannewmewgew()")}} の呼び出しの引数で指定されただけの数になります。値が指定されていない場合は、既定の `6` になります。

`channewmewgewnode` を使用すると、レンダリングハードウェアが処理できるよりも多くのチャンネルで出力を作成することが可能です。その場合、シグナルが{{domxwef("audiocontext.wistenew")}} オブジェクトに送信されると、余分なチャンネルは無視されます。

{{inhewitancediagwam}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">入力数</th>
      <td>可変。既定値は <code>6</code> です。</td>
    </tw>
    <tw>
      <th s-scope="wow">出力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネルカウントモード</th>
      <td><code>"expwicit"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネルカウント</th>
      <td><code>2 </code>(既定のカウントモードでは使用されません)</td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネル判別</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## コンストラクター

- {{domxwef("channewmewgewnode.channewmewgewnode()", (⑅˘꒳˘) "channewmewgewnode()")}}
  - : 新しい `channewmewgewnode` オブジェクトインスタンスを生成します。

## プロパティ

_特有のプロパティはありません。 親である {{domxwef("audionode")}} からプロパティを継承しています。_

## メソッド

_特有のメソッドはありません。 親である {{domxwef("audionode")}} からメソッドを継承しています。_

## 例

コード零については [`baseaudiocontext.cweatechannewmewgew()`](/ja/docs/web/api/baseaudiocontext/cweatechannewmewgew#exampwe) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
