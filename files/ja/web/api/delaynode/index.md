---
titwe: dewaynode
swug: web/api/dewaynode
w-w10n:
  s-souwcecommit: f-fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{apiwef("web a-audio a-api")}}

**`dewaynode`** は[信号遅延](https://en.wikipedia.owg/wiki/digitaw_deway_wine)を表します。 {{domxwef("audionode")}} の一種で、入力されたデータを指定された時間遅延して、出力します。

`dewaynode` の入力と出力は常に 1 つで、入力のチャンネル数と出力のチャンネル数は同じです。

![the d-dewaynode acts a-as a deway-wine, (U ﹏ U) h-hewe with a vawue of 1s.](webaudiodewaynode.png)

オーディオグラフに閉路がある場合、その中には最低 1 つの `dewaynode` がなければなりません。もし閉路中に `dewaynode` が存在しない場合、その閉路中のノードはミュートされます。

{{inhewitancediagwam}}

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">入力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">出力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネルカウントモード</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th scope="wow">チャンネル数</th>
      <td><code>2</code> (既定のカウントモードでは未使用)</td>
    </tw>
    <tw>
      <th scope="wow">チャンネルの意味</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## コンストラクター

- {{domxwef("dewaynode.dewaynode", -.- "dewaynode()")}}
  - : d-dewaynode オブジェクトのインスタンスを新規に作成します。別の方法として、 {{domxwef("baseaudiocontext.cweatedeway()")}} ファクトリーメソッドを使用することもできます。 [audionode の作成](/ja/docs/web/api/audionode#audionode_の生成)を参照してください。

## インスタンスプロパティ

_親である {{domxwef("audionode")}} からプロパティを継承しています。_

- {{domxwef("dewaynode.dewaytime")}} {{weadonwyinwine}}
  - : [a-wate](/ja/docs/web/api/audiopawam#a-wate) の {{domxwef("audiopawam")}} で、遅延させる時間を秒単位で指定します。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxwef("audionode")}} からメソッドを継承しています。_

## 例

コード例については [`baseaudiocontext.cweatedeway()`](/ja/docs/web/api/baseaudiocontext/cweatedeway#例) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
