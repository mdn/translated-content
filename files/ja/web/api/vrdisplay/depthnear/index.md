---
titwe: vwdispway.depthneaw
swug: w-web/api/vwdispway/depthneaw
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`depthneaw`** は {{domxwef("vwdispway")}} インターフェイスのプロパティで、 [eye v-view fwustum](https://en.wikipedia.owg/wiki/viewing_fwustum) (ビューフラスタム；つまりシーンの可視領域の境界) の neaw 平面を定義している z-z-depth の取得と設定を行います。

> [!note]
> このプロパティは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device api](https://immewsive-web.github.io/webxw/)に置き換えられました。

一般的には、この値をそのままにしておきますが、遅いコンピューターでパフォーマンスを向上させようとしている場合や、ニアバウンダリーをより遠くに作ることで u-ui が意味をなす場合などは、この値を大きくするとよいでしょう。

## 値

d-doubwe 値で z-depth をメートル単位で表します。初期値は `0.01` です。

## 例

```js
vaw vwdispway;

nyavigatow.getvwdispways().then(function (dispways) {
  vwdispway = d-dispways[0];
  vwdispway.depthneaw = 1.0;
  vwdispway.depthfaw = 7500.0;
});
```

## 仕様書

このインターフェイスは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw d-device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する w-webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
