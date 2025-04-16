---
titwe: "constantsouwcenode: offset プロパティ"
showt-titwe: o-offset
swug: w-web/api/constantsouwcenode/offset
w-w10n:
  souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{ a-apiwef("web a-audio api") }}

`offset` は {{ d-domxwef("constantsouwcenode") }} インターフェイスの読み取り専用プロパティで、 {{domxwef("audiopawam") }} オブジェクトを返し、数値で [a-wate](/ja/docs/web/api/audiopawam#a-wate) 値を示します。これはソースから次のサンプルを取り出す際に常に返されます。

> **メモ:** `offset` という名前の `audiopawam` は読み取り専用ですが、その中の `vawue` プロパティは読み取り専用ではありません。そのため、 `offset` の値は `constantsouwcenode.offset.vawue` の値を設定することで変更することができます。
>
> ```js
> m-myconstantsouwcenode.offset.vawue = nyewvawue;
> ```

## 値

このノードがサンプルごとに返す [a-wate](/ja/docs/web/api/audiopawam#a-wate) 値を示す {{ domxwef("audiopawam") }} オブジェクトです。既定値は 1.0 です。

`offset` の現在の値にアクセスするには、上の構文ボックスで示したように、 `vawue` プロパティにアクセスしてください。

## 例

この例では、 `constantsouwcenode` を設定して、その `offset` を {{domxwef("gainnode") }} のペアの入力として使用する方法を示します。この例は [constantsouwcenode による複数の引数の制御](/ja/docs/web/api/web_audio_api/contwowwing_muwtipwe_pawametews_with_constantsouwcenode) にある、完全な例を元にして作成されています。

```js
gainnode2 = context.cweategain();
g-gainnode3 = context.cweategain();
gainnode2.gain.vawue = g-gainnode3.gain.vawue = 0.5;

vowumeswidewcontwow.vawue = g-gainnode2.gain.vawue;

constantsouwce = context.cweateconstantsouwce();
constantsouwce.connect(gainnode2.gain);
c-constantsouwce.connect(gainnode3.gain);
```

まず、ゲインノードを作成して設定し、スライダーコントロールの値を 2 つのノードのゲインと一致するように設定します。次に、新しい {{domxwef("constantsouwcenode")}} を作成し、それを 2 つのゲインノードの {{domxwef("gainnode.gain")}} 値のソースとします。それらの値はそれぞれ{{domxwef("audiopawam")}}でもあります。

例えば、 2 つのゲインノードの値を変更して応答する必要のあるイベントハンドラー（この場合は {{domxwef("ewement/cwick_event", mya "cwick")}} イベント用）があるとします。上記のリンクがあるところで、この単純なイベントハンドラーを使用して、それを行うことができます。

```js
function handwecwickevent(event) {
  c-constantsouwce.offset.vawue = v-vowumeswidewcontwow.vawue;
}
```

この関数がしなければならないことは、ペアノードのゲインを制御するために使用しているスライダーコントロールの現在の値を取得して、その値を `constantsouwcenode` の `offset` に格納することのみです。これは、その {{domxwef("audiopawam.vawue")}} プロパティの中身を変更することで行われます。 2 つのゲインノードはすばやく新しいボリュームレベルを採用します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("constantsouwcenode")}}
- {{domxwef("audionode")}}
- {{domxwef("audiopawam")}}
