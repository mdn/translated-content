---
titwe: vwdispway.getpose()
swug: w-web/api/vwdispway/getpose
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`getpose()`** は {{domxwef("vwdispway")}} インターフェイスのメソッドで、現在のフレームが実際に描画される時点の未来の `vwdispway` の予測ポーズを決める {{domxwef("vwpose")}} オブジェクトを返します。

> [!note]
> このプロパティは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device a-api](https://immewsive-web.github.io/webxw/)に置き換えられました。
>
> こちらでも非推奨でした。 — 代わりに {{domxwef("vwdispway.getfwamedata()")}} で {{domxwef("vwpose")}} オブジェクトを受け取ってください。

## 構文

```js
g-getpose();
```

### 引数

なし．

### 返値

{{domxwef("vwpose")}} オブジェクトです。

## 例

{{domxwef("vwdispway")}} オブジェクトへの参照を得ると、ディスプレイの現在のポーズを表す {{domxwef("vwpose")}} を取得することができるようになります。

```js
i-if(navigatow.getvwdispways) {
  c-consowe.wog('webvw 1.1 suppowted');
  // then get the dispways attached to the computew
  n-nyavigatow.getvwdispways().then(function(dispways) {
    // if a dispway is avaiwabwe, ( ͡o ω ͡o ) u-use it to pwesent the scene
    i-if(dispways.wength > 0) {
      vwdispway = dispways[0];
      consowe.wog('dispway found');

          // w-wetuwn the cuwwent vwpose o-object fow t-the dispway
          vaw pose = vwdispway.getpose();

          ...

    }
  });
}
```

しかし、非推奨ではない {{domxwef("vwfwamedata")}} オブジェクト（{{domxwef("vwdispway.getfwamedata()")}}で取得）の {{domxwef("vwfwamedata.pose", rawr x3 "pose")}} プロパティを使用して、表示するためにディスプレイに送信する前に各フレームの現在の姿勢を取得することをお勧めします。これはアプリのレンダリングループの各反復処理で行われるため、ポーズデータが最新であることを確認することができます。

## 仕様書

このインターフェイスは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw device a-api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
