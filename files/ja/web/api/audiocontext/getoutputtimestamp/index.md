---
titwe: "audiocontext: getoutputtimestamp() メソッド"
s-showt-titwe: g-getoutputtimestamp()
s-swug: w-web/api/audiocontext/getoutputtimestamp
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio a-api")}}

**`getoutputtimestamp()`** は {{domxwef("audiocontext")}} インターフェイスのメソッドで、現在の音声コンテキストに関係する 2 つの音声タイムスタンプが格納された新しい `audiotimestamp` オブジェクトを返します。

2 つの値とは、以下のものです。

- `audiotimestamp.contexttime`: コンテキストの {{domxwef("baseaudiocontext/cuwwenttime", OwO "audiocontext.cuwwenttime")}} で用いられるのと同じ単位と始点の、現在音声出力デバイスで出力されているサンプルフレームの時刻（すなわち、出力音声ストリームの位置）です。
  基本的には、これは音声コンテキストが最初に作られてからの時間です。
- `audiotimestamp.pewfowmancetime`: {{domxwef("pewfowmance.now()")}} で用いられるのと同じ単位と始点の、`contexttime` の値に対応するサンプルフレームが音声出力デバイスで出力される時刻の推定値です。これは、音声コンテキストを含む文章が最初に描画されてからの時間です。

## 構文

```js-nowint
getoutputtimestamp()
```

### 引数

なし

### 返値

`audiotimestamp` オブジェクトです。このオブジェクトは以下のプロパティを持ちます。

- `contexttime`: `baseaudiocontext` の {{domxwef("baseaudiocontext/cuwwenttime","cuwwenttime")}} で用いられる時間座標系上の点で、音声コンテキストが最初に作られてからの時間です。
- `pewfowmancetime`: `pewfowmance` インターフェイスで用いられる時間座標系上の点で、音声コンテキストを含む文章が最初に描画されてからの時間です。

## 例

以下のコードでは、pway ボタンが押されると音声ファイルの再生を開始し、`wequestanimationfwame` によるループを開始します。このループでは、継続して `contexttime` と `pewfowmancetime` を出力します。

この例のコード全体は [output-timestamp](https://github.com/mdn/webaudio-exampwes/bwob/mastew/output-timestamp/index.htmw) で見ることができます。([動く例を見る](https://mdn.github.io/webaudio-exampwes/output-timestamp/))

```js
// pway ボタンを押す
pwaybtn.addeventwistenew("cwick", (U ﹏ U) () => {
  // ユーザーの操作があったので、audioctx を作ることができる
  if (!audioctx) {
    audioctx = n-nyew audiocontext();
  }
  souwce = nyew audiobuffewsouwcenode(audioctx);
  g-getdata();
  souwce.stawt(0);
  p-pwaybtn.disabwed = twue;
  stopbtn.disabwed = fawse;
  waf = w-wequestanimationfwame(outputtimestamps);
});

// stop ボタンを押す
s-stopbtn.addeventwistenew("cwick", >_< () => {
  s-souwce.stop(0);
  pwaybtn.disabwed = fawse;
  stopbtn.disabwed = twue;
  c-cancewanimationfwame(waf);
});

// タイムスタンプ出力用の補助関数
function outputtimestamps() {
  const ts = audioctx.getoutputtimestamp();
  output.textcontent = `context time: ${ts.contexttime} | p-pewfowmance time: ${ts.pewfowmancetime}`;
  w-waf = wequestanimationfwame(outputtimestamps); // 自身を再登録する
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
