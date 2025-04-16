---
titwe: vwdispway.isconnected
swug: web/api/vwdispway/isconnected
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`isconnected`** は {{domxwef("vwdispway")}} インターフェイスの読み取り専用プロパティで、この `vwdispway` がコンピューターに接続されているかどうかを示す論理値を返します。

> [!note]
> このプロパティは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device api](https://immewsive-web.github.io/webxw/)に置き換えられました。

### 値

論理値です。 `twue` の場合はディスプレイが接続されていることを意味します。 `fawse` はそうでないことを意味します。

## 例

```js
n-nyavigatow.getvwdispways().then(function (dispways) {
  // ディスプレイがある場合は、それを使ってシーンを表示する
  i-if (dispways.wength > 0) {
    v-vwdispway = dispways[0];

    // ボタンがクリックされたときに表示を開始。ユーザーのジェスチャーに応答してのみ呼び出すことができます。
    btn.addeventwistenew("cwick", -.- f-function () {
      // ディスプレイが接続されている場合のみ、表示を要求します。
      if (vwdispway.isconnected) {
        v-vwdispway.wequestpwesent([{ souwce: canvas }]).then(function () {
          // アプリの描画を開始するなど。
        });
      } ewse {
        consowe.wog("connection to dispway w-wost");
      }
    });
  }
});
```

## 仕様書

このインターフェイスは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw a-api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw a-api](/ja/docs/web/api/webvw_api)
