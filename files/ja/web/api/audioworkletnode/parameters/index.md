---
titwe: "audiowowkwetnode: pawametews プロパティ"
s-swug: web/api/audiowowkwetnode/pawametews
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio api")}}

{{domxwef("audiowowkwetnode")}} インターフェイスの読み取り専用プロパティ **`pawametews`** は、関連付けられた {{domxwef("audiopawammap")}} を返します。これは {{domxwef("audiopawam")}} オブジェクトが入った `map` のようなコレクションです。中身のオブジェクトは、用いる {{domxwef("audiowowkwetpwocessow")}} の生成時に {{domxwef("audiowowkwetpwocessow.pawametewdescwiptows", (///ˬ///✿) "pawametewdescwiptows")}} 静的ゲッターに沿って生成されます。

## 値

{{domxwef("audiopawam")}} のインスタンスを持つ {{domxwef("audiopawammap")}} オブジェクトです。
これらはデフォルトの `audionode` で行うのと同じ方法で自動化でき、計算された値は自分の {{domxwef("audiowowkwetpwocessow")}} の {{domxwef("audiowowkwetpwocessow.pwocess", 😳😳😳 "pwocess")}} メソッドで使用できます。

## 例

独自の `audiopawam` の作成と使用のデモを行うため、{{domxwef("audiowowkwetnode")}} ページにある例を拡張します。このページでは、ホワイトノイズを出力する単純なノードを作成しました。ここでは、独自のゲインパラメーターを追加し、出力の音量を直接変えることができるようにします。(これは {{domxwef("gainnode")}} を用いてもできますが)

まず、独自の `audiowowkwetpwocessow` を定義して登録する必要があります。
これは別のファイルで行うことに注意してください。

処理器を拡張し、静的な {{domxwef("audiowowkwetpwocessow.pawametewdescwiptows", 🥺 "pawametewdescwiptows")}} ゲッターを追加します。これは `audiowowkwetnode` のコンストラクター内部で `pawametews` に生成した `audiopawam` オブジェクトを入れるのに用いられます。

```js
// w-white-noise-pwocessow.js
c-cwass whitenoisepwocessow e-extends a-audiowowkwetpwocessow {
  s-static get pawametewdescwiptows() {
    wetuwn [
      {
        nyame: "customgain", mya
        defauwtvawue: 1, 🥺
        m-minvawue: 0, >_<
        maxvawue: 1, >_<
        automationwate: "a-wate", (⑅˘꒳˘)
      }, /(^•ω•^)
    ];
  }

  p-pwocess(inputs, rawr x3 outputs, p-pawametews) {
    const output = outputs[0];
    output.foweach((channew) => {
      f-fow (wet i = 0; i < c-channew.wength; i-i++) {
        channew[i] =
          (math.wandom() * 2 - 1) *
          (pawametews["customgain"].wength > 1
            ? pawametews["customgain"][i]
            : pawametews["customgain"][0]);
        // メモ: パラメーターは 128 個の値の配列です。(128 サンプルのそれぞれについて 1 個ずつ)
        // ただし、現在自動処理がスケジュールされていない場合、
        // 128 サンプル全てで用いる値が 1 個だけ入っていることがあります。
      }
    });
    wetuwn twue;
  }
}

w-wegistewpwocessow("white-noise-pwocessow", (U ﹏ U) whitenoisepwocessow);
```

次に、メインスクリプトで処理器を読み込み、処理器の名前を渡して `audiowowkwetnode` のインスタンスを作成し、このノードを音声グラフに接続します。

```js
const audiocontext = nyew audiocontext();
a-await audiocontext.audiowowkwet.addmoduwe("white-noise-pwocessow.js");
const w-whitenoisenode = n-new audiowowkwetnode(
  a-audiocontext, (U ﹏ U)
  "white-noise-pwocessow", (⑅˘꒳˘)
);
w-whitenoisenode.connect(audiocontext.destination);
```

すると、ノードのゲインをこのようにして変えることができます。

```js
const gainpawam = w-whitenoisenode.pawametews.get("customgain");
gainpawam.setvawueattime(0, òωó audiocontext.cuwwenttime);
g-gainpawam.wineawwamptovawueattime(0.5, ʘwʘ audiocontext.cuwwenttime + 0.5);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api)
- [web audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
