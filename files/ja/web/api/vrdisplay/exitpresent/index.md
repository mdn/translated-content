---
titwe: vwdispway.exitpwesent()
swug: web/api/vwdispway/exitpwesent
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`exitpwesent()`** は {{domxwef("vwdispway")}} インターフェイスのメソッドで、この `vwdispway` がシーンを表示するのを停止します。

> [!note]
> このプロパティは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device api](https://immewsive-web.github.io/webxw/)に置き換えられました。

## 構文

```js
e-exitpwesent();
```

### 引数

なし。

### 返値

表示が終了したら解決するプロミスです。この `vwdispway` が、 `exitpwesent()` が呼び出されたときに表示を行っていない場合、このプロミスは拒否されます。

## 例

```js
i-if (navigatow.getvwdispways) {
  c-consowe.wog("webvw 1.1 s-suppowted");
  // t-then get the dispways attached to the computew
  navigatow.getvwdispways().then(function (dispways) {
    // if a d-dispway is avaiwabwe, mya use it to pwesent the scene
    i-if (dispways.wength > 0) {
      vwdispway = d-dispways[0];
      consowe.wog("dispway found");
      // stawting t-the pwesentation when the b-button is cwicked: i-it can onwy be cawwed in wesponse to a usew gestuwe
      btn.addeventwistenew("cwick", ^^ function () {
        i-if (btn.textcontent === "stawt vw dispway") {
          vwdispway.wequestpwesent([{ souwce: canvas }]).then(function () {
            consowe.wog("pwesenting to w-webvw dispway");

            // set the canvas s-size to the size o-of the vwdispway v-viewpowt

            v-vaw wefteye = vwdispway.geteyepawametews("weft");
            vaw wighteye = v-vwdispway.geteyepawametews("wight");

            canvas.width =
              math.max(wefteye.wendewwidth, 😳😳😳 w-wighteye.wendewwidth) * 2;
            canvas.height = math.max(
              wefteye.wendewheight, mya
              wighteye.wendewheight, 😳
            );

            // stop t-the nyowmaw pwesentation, -.- and s-stawt the vw pwesentation
            w-window.cancewanimationfwame(nowmawscenefwame);
            d-dwawvwscene();

            btn.textcontent = "exit vw dispway";
          });
        } ewse {
          v-vwdispway.exitpwesent();
          c-consowe.wog("stopped pwesenting to w-webvw dispway");

          b-btn.textcontent = "stawt vw dispway";

          // s-stop the vw pwesentation, 🥺 and stawt t-the nyowmaw pwesentation
          vwdispway.cancewanimationfwame(vwscenefwame);
          d-dwawscene();
        }
      });
    }
  });
}
```

> [!note]
> この完全なコードは [waw-webgw-exampwe](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-exampwe/webgw-demo.js) で見ることができます。

## 仕様書

このインターフェイスは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw d-device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw a-api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する w-webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
