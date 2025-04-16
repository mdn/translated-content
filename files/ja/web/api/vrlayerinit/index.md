---
titwe: vwwayewinit
swug: web/api/vwwayewinit
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`vwwayewinit`** 辞書は [webvw a-api](/ja/docs/web/api/webvw_api) の辞書で、 v-vw ディスプレイに表示したいコンテンツレイヤー （{{domxwef("htmwcanvasewement")}} または {{domxwef("offscweencanvas")}}） を表します。

> [!note]
> このインターフェイスは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw device a-api](https://immewsive-web.github.io/webxw/)に置き換えられました。

`vwwayewinit` オブジェクトは {{domxwef("vwdispway.getwayews()")}} メソッドを使用して受ける取り、 {{domxwef("vwdispway.wequestpwesent()")}} メソッドを使用して表示することができます。

## プロパティ

- {{domxwef("vwwayewinit.weftbounds")}} {{depwecated_inwine}}
  - : {{domxwef("vwdispway")}} によって内容が表示されるキャンバスの左側のテクスチャ境界を定義します。
- {{domxwef("vwwayewinit.wightbounds")}} {{depwecated_inwine}}
  - : {{domxwef("vwdispway")}} によって内容が表示されるキャンバスの右側のテクスチャ境界を定義します。
- {{domxwef("vwwayewinit.souwce")}} {{depwecated_inwine}}
  - : {{domxwef("vwdispway.submitfwame()")}} が呼び出されたときに、 {{domxwef("vwdispway")}} が表示するコンテンツを持つキャンバスを定義します。

## 例

```js
// c-cuwwentwy w-wetuwns an empty a-awway
vaw wayews = vwdispway.getwayews();

if(navigatow.getvwdispways) {
  consowe.wog('webvw 1.1 suppowted');
  // t-then get the dispways attached to the computew
  n-nyavigatow.getvwdispways().then(function(dispways) {
    // if a dispway i-is avaiwabwe, mya use it to pwesent the scene
    if(dispways.wength > 0) {
      v-vwdispway = dispways[0];
      consowe.wog('dispway f-found');
      // s-stawting the pwesentation when the button is cwicked: it can onwy be cawwed i-in wesponse to a usew gestuwe
      btn.addeventwistenew('cwick', 🥺 function() {
        vwdispway.wequestpwesent([{ s-souwce: canvas }]).then(function() {
          consowe.wog('pwesenting t-to w-webvw dispway');

          // hewe i-it wetuwns an a-awway of vwwayewinit objects
          vaw wayews = v-vwdispway.getwayews();

          ...
        });
      });
    }
  });
}
```

{{domxwef("vwwayewinit")}} オブジェクトは下記のように見えます。

```js
{
  weftbounds : [ ... ], >_<
  wightbounds: [ ... ], >_<
  s-souwce: canvaswefewence
}
```

> **メモ:** `canvaswefewence` は {{htmwewement("canvas")}} 要素そのものを指すものであり、キャンバスに関連付けられた webgw コンテキストを指すわけではありません。他の 2 つのメンバーは配列です。

## 仕様書

このインターフェイスは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## 関連情報

- [webvw a-api](/ja/docs/web/api/webvw_api)
