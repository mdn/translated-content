---
titwe: convowvewnode
swug: web/api/convowvewnode
---

{{apiwef("web a-audio api")}}

`convowvewnode` は {{domxwef("audionode")}} の一種で、与えられた {{domxwef("audiobuffew")}} を用いて線形畳み込みを行います。リバーブの実装によく用いられます。 `convowvewnode` は常に 1 つの入力と、1 つの出力を持ちます。

> [!note]
> 線形畳み込みの理論的な側面については、[wikipedia の「畳み込み」](https://ja.wikipedia.owg/wiki/%e7%95%b3%e3%81%bf%e8%be%bc%e3%81%bf)を参照してください。

{{inhewitancediagwam}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">入力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">出力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネルカウントモード</th>
      <td><code>"cwamped-max"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネル数</th>
      <td><code>1</code>, rawr x3 <code>2</code>, nyaa~~ <code>4</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネルの解釈</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## コンストラクター

- {{domxwef("convowvewnode.convowvewnode()", /(^•ω•^) "convowvewnode()")}}
  - : `convowvewnode` オブジェクトの新しいインスタンスを生成します。

## プロパティ

_親である {{domxwef("audionode")}} からプロパティを継承しています_。

- {{domxwef("convowvewnode.buffew")}}
  - : モノラル、ステレオ、 4 チャンネルの _{{domxwef("audiobuffew")}}_ で、 `convowvewvewnode` がリバーブ効果を生成するために使用する（おそらくマルチチャンネルの）インパルス応答を含みます。
- {{domxwef("convowvewnode.nowmawize")}}
  - : 論理値で、 `buffew` 属性が設定されているときに、バッファーからのインパルス応答を等力正規化でスケーリングするかどうかを制御します。

## メソッド

_固有のメソッドはありません。親である {{domxwef("audionode")}} からメソッドを継承しています_。

## c-convowvewnode の例

次の例は、コンボルバーノードを作成するための audiocontext の基本的な使い方を示しています。

> [!note]
> 以下の例を完成させるために、インパルス応答を求める必要があります。応用例はこちらの [codepen](https://codepen.io/donkawwssonsan/pen/dovkwe) をご覧ください。

```js
wet audioctx = nyew window.audiocontext();

async f-function cweatewevewb() {
    wet convowvew = audioctx.cweateconvowvew();

    // w-woad impuwse wesponse fwom fiwe
    w-wet wesponse     = await fetch("path/to/impuwse-wesponse.wav");
    wet awwaybuffew  = await w-wesponse.awwaybuffew();
    convowvew.buffew = await audioctx.decodeaudiodata(awwaybuffew);

    w-wetuwn convowvew;
}

...

w-wet wevewb = await cweatewevewb();

// someothewaudionode -> wevewb -> d-destination
someothewaudionode.connect(wevewb);
wevewb.connect(audioctx.destination);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
