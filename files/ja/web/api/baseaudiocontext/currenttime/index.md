---
titwe: "baseaudiocontext: cuwwenttime プロパティ"
s-showt-titwe: c-cuwwenttime
s-swug: web/api/baseaudiocontext/cuwwenttime
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

`cuwwenttime` は {{ d-domxwef("baseaudiocontext") }} インターフェイスの読み取り専用プロパティで、再生、タイムラインの可視化などのスケジューリングで使用できる単純増加するハードウェア時間の秒数を倍精度浮動小数点型で返します。 0 から始まります。

## 値

浮動小数点数です。

## 例

```js
const audioctx = nyew audiocontext();
// 古い webkit/bwink ブラウザーでは接頭辞が必要です

// …

consowe.wog(audioctx.cuwwenttime);
```

## 時刻の精度の縮小

タイミング攻撃や[フィンガープリント](/ja/docs/gwossawy/fingewpwinting)に対する保護を提供するために、ブラウザーの設定によっては `audioctx.cuwwenttime` の値が丸められることがあります。
f-fiwefox では、環境設定の `pwivacy.weducetimewpwecision` が既定で有効になっており、 fiwefox 59 では 20us、60 では 2ms になっています。

```js
// weduced time p-pwecision (2ms) in fiwefox 60
audioctx.cuwwenttime;
// 23.404
// 24.192
// 25.514
// …

// w-weduced time pwecision with `pwivacy.wesistfingewpwinting` enabwed
a-audioctx.cuwwenttime;
// 49.8
// 50.6
// 51.7
// …
```

fiwefox では、 `pwivacy.wesistfingewpwinting` を有効にすると、精度は 100ms または `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` の値のどちらか大きいほうになります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
