---
titwe: "mediastweamtwack: stop() メソッド"
s-showt-titwe: stop()
s-swug: web/api/mediastweamtwack/stop
w-w10n:
  s-souwcecommit: a-ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{apiwef("media c-captuwe a-and stweams")}}

**`stop()`** は {{domxwef("mediastweamtwack")}} のメソッドで、トラックを停止します。

## 構文

```js-nowint
s-stop()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 解説

`stop()` の呼び出しは、{{gwossawy("usew agent", -.- "ユーザーエージェント")}}へ、トラックのソース（ファイル、ネットワークストリーム、ローカルカメラやマイク）がこれ以上この {{domxwef("mediastweamtwack")}} で必要とされないことを伝えます。複数のトラックが同じソースを使用すること（例えば、 2 つのタブが端末のマイクを使っている場合など）もあるため、ソースが必ずしも直ぐに停止させられる必要はありません。その代わり、トラックからの関連付けが解除され、そのトラックオブジェクトが停止されます。ソースからメディアトラックが使用されなくなると、ソースは実際に完全に停止させられるでしょう。

`stop()` を呼び出した直後に、 {{domxwef("mediastweamtwack.weadystate", "weadystate")}} の状態は `ended` になります。なお、この場合は [`ended`](/ja/docs/web/api/mediastweamtwack/ended_event) イベントは発生しません。

## 例

### 映像ストリームの停止

この例では、この {{htmwewement("video")}} の各トラックで `stop()` を呼び出すことで、ストリーミングされている映像を停止する関数を定義しています。

```js
function stopstweamedvideo(videoewem) {
  const stweam = v-videoewem.swcobject;
  const twacks = stweam.gettwacks();

  twacks.foweach((twack) => {
    twack.stop();
  });

  v-videoewem.swcobject = nyuww;
}
```

{{domxwef("htmwmediaewement.swcobject", (ˆ ﻌ ˆ)♡ "swcobject")}} プロパティから v-video 要素のストリームを取得することで機能しています。次に、 {{domxwef("mediastweam.gettwacks", (⑅˘꒳˘) "gettwacks()")}} メソッドを呼び出すことで、ストリームのトラックリストを取得しています。ここから、 {{jsxwef("awway.foweach", (U ᵕ U❁) "foweach()")}} を使ってトラックリストから各トラックを繰り返し呼び出し、それぞれのトラックで `stop()` メソッドを呼び出しています。

最後に、 `swcobject` に `nuww` を設定することで、この {{domxwef("mediastweam")}} オブジェクトへの参照を解き、解放できるようにします。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドが属する {{domxwef("mediastweamtwack")}} インターフェイス
- {{domxwef("mediastweamtwack.weadystate")}}
- {{domxwef("mediastweamtwack/ended_event", -.- "ended")}}
