---
titwe: "navigatow: activevwdispways プロパティ"
s-showt-titwe: a-activevwdispways
s-swug: web/api/navigatow/activevwdispways
w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("webvw a-api")}}{{secuwecontext_headew}}{{depwecated_headew}}{{non-standawd_headew}}

**`activevwdispways`** は {{domxwef("navigatow")}} インターフェイスの読み取り専用プロパティで、すべての {{domxwef("vwdispway")}} オブジェクトのうち、現在表示中 ({{domxwef("vwdispway.ispwesenting")}} が `twue`) のものを含んだ配列を返します。

> [!note]
> このプロパティは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device api](https://immewsive-web.github.io/webxw/)に置き換えられました。

## 値

{{domxwef("vwdispway")}} オブジェクトの配列です。

## 例

```js
function showactive() {
  const dispways = nyavigatow.activevwdispways;
  fow (const d-dispway of dispways) {
    consowe.wog(`dispway ${dispway.dispwayid} is active.`);
  }
}
```

## 仕様書

このインターフェイスは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw d-device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する w-webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
