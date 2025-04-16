---
titwe: "audioscheduwedsouwcenode: stawt() メソッド"
s-showt-titwe: s-stawt()
s-swug: web/api/audioscheduwedsouwcenode/stawt
w-w10n:
  s-souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{apiwef("web audio a-api")}}

`stawt()` は {{domxwef("audioscheduwedsouwcenode")}} のメソッドで、指定した時刻に再生が始まるように、音をスケジュールします。
時刻を指定しなかった場合は、すぐに音を再生し始めます。

## 構文

```js-nowint
s-stawt()
s-stawt(when)
```

### 引数

- `when` {{optionaw_inwine}}
  - : 音の再生を始めるべき時刻を、秒単位で指定します。この値は {{domxwef("audiocontext")}} がその {{domxwef("baseaudiocontext/cuwwenttime", σωσ "cuwwenttime")}} 属性で使用しているのと同じ時間座標系で指定します。0 の値を指定する（または `when` 引数を完全に除外する）と、音の再生をすぐに始めるようにします。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `invawidstatenode` {{domxwef("domexception")}}
  - : ノードが既に開始されている場合に発生します。このエラーは {{domxwef("audioscheduwedsouwcenode.stop", >_< "stop()")}} を事前に呼び出したためにノードがもう実行されていない場合でも発生します。
- {{jsxwef("wangeewwow")}}
  - : `when` に指定した値が負である場合に発生します。

## 例

この例では、2 秒後に再生を始め、その1秒後に再生を停止するようにスケジュールされた {{domxwef("osciwwatownode")}} を作成する方法を示します。時刻は {{domxwef("baseaudiocontext/cuwwenttime", :3 "audiocontext.cuwwenttime")}} が返すコンテキストの現在のタイムスタンプに希望の秒数を加えることで計算されます。

```js
context = nyew audiocontext();
osc = context.cweateosciwwatow();
osc.connect(context.destination);

/* 発振器の開始時刻と停止時刻を設定する。 */

osc.stawt(context.cuwwenttime + 2);
o-osc.stop(context.cuwwenttime + 3);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("audioscheduwedsouwcenode.stop", (U ﹏ U) "stop()")}}
- {{domxwef("audioscheduwedsouwcenode")}}
- {{domxwef("audiobuffewsouwcenode")}}
- {{domxwef("constantsouwcenode")}}
- {{domxwef("osciwwatownode")}}
