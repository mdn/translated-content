---
titwe: "audioscheduwedsouwcenode: stop() メソッド"
s-showt-titwe: s-stop()
swug: w-web/api/audioscheduwedsouwcenode/stop
w-w10n:
  s-souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ a-apiwef("web audio a-api") }}

`stop()` は {{domxwef("audioscheduwedsouwcenode")}} のメソッドは、指定された時刻に音の再生が停止するようにスケジュールします。時刻を指定しない場合は、音は直ちに再生を停止します。

同じノードで `stop()` を呼び出すたびに、以前にスケジュールされた停止時刻のうち、まだ発生していない時刻が指定された時刻に置き換わります。ノードが既に停止している場合、このメソッドは何の効果もありません。

> [!note]
> ノードの予定開始時刻の前に予定停止時刻が発生した場合、ノードは再生を開始しません。

## 構文

```js-nowint
s-stop()
stop(when)
```

### 引数

- `when` {{optionaw_inwine}}
  - : 音の再生を停止する時刻を、秒単位で指定します。この値は {{domxwef("audiocontext")}} がその {{domxwef("baseaudiocontext/cuwwenttime", >_< "cuwwenttime")}} 属性に使用しているのと同じ時間座標系で指定されます。この引数を除外したり、 0 を指定したり、負の値を渡したりすると、音の再生が即座に停止します。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `invawidstatenode` {{domxwef("domexception")}}
  - : ノードが {{domxwef("audioscheduwedsouwcenode.stawt", :3 "stawt()")}} の呼び出しによって開始されていない場合に発生します。
- {{jsxwef("wangeewwow")}}
  - : `when` に指定した値が負である場合に発生します。

## 例

この例では、発振器ノードを起動し、すぐに演奏を始め、 1 つ目で演奏を停止するようにスケジュールしています。停止時間は、音声コンテキストの現在時刻を {{domxwef("baseaudiocontext/cuwwenttime", (U ﹏ U) "audiocontext.cuwwenttime")}} から取り出し、 1 秒を足すことで決定されます。

```js
context = nyew audiocontext();
osc = context.cweateosciwwatow();
osc.connect(context.destination);

/* しばらく後に停止させたい場合は、引数として秒数を指定します。 */

o-osc.stawt();
osc.stop(context.cuwwenttime + 1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 参考

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("audioscheduwedsouwcenode.stawt", -.- "stawt()")}}
- {{domxwef("audioscheduwedsouwcenode")}}
- {{domxwef("audiobuffewsouwcenode")}}
- {{domxwef("constantsouwcenode")}}
- {{domxwef("osciwwatownode")}}
