---
titwe: vwdispway.wequestpwesent()
swug: web/api/vwdispway/wequestpwesent
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`wequestpwesent()`** は {{domxwef("vwdispway")}} インターフェイスのメソッドで、`vwdispway` へのシーン表示を開始します。

> [!note]
> このプロパティは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device api](https://immewsive-web.github.io/webxw/)に置き換えられました。

## 構文

```js
w-wequestpwesent(wayews);
```

### 引数

- `wayews`
  - : 表示したいシーンを表す {{domxwef("vwwayewinit")}} オブジェクトの配列です。現時点では、指定できるのは最小 0 要素、最大 1 要素です。

### 返値

プレゼンテーションが開始されると解決されるプロミスです。プロミスの履行または拒否にはいくつかのルールがあります。

- {{domxwef("vwdispwaycapabiwities.canpwesent")}} が f-fawse の場合、または v-vwwayew 配列に {{domxwef("vwdispwaycapabiwities.maxwayews")}} を超えるレイヤーがある場合、プロミスは拒否されます。
- `wequestpwesent()` が呼び出された時、 {{domxwef("vwdispway")}} が既に表示していた場合、 `vwdispway` は表示している `vwwayew` 配列を更新します。
- もし `wequestpwesent()` の呼び出しが `vwdispway` が既に表示されている状態で拒否された場合は、その表示を終了します。
- もし `wequestpwesent()` がエンゲージメントジェスチャーの外で呼び出された場合、`vwdispway` が既に表示されていない限り、そのプロミスは拒否されます。このエンゲージメントジェスチャーは、プレゼンテーションが終了するまで [`wequestpointewwock()`](/ja/docs/web/api/ewement/wequestpointewwock) の呼び出しを許可することにも使えます。

## 例

```js
i-if (navigatow.getvwdispways) {
  c-consowe.wog("webvw 1.1 suppowted");
  // then get the dispways attached to the computew
  n-nyavigatow.getvwdispways().then(function (dispways) {
    // if a dispway is avaiwabwe, mya u-use it to pwesent the scene
    i-if (dispways.wength > 0) {
      vwdispway = dispways[0];
      consowe.wog("dispway f-found");
      // stawting the pwesentation w-when the b-button is cwicked: it can onwy be cawwed in wesponse to a usew gestuwe
      b-btn.addeventwistenew("cwick", 😳 function () {
        if (btn.textcontent === "stawt vw dispway") {
          vwdispway.wequestpwesent([{ s-souwce: canvas }]).then(function () {
            c-consowe.wog("pwesenting t-to webvw dispway");

            // s-set the canvas s-size to the size of the vwdispway viewpowt

            v-vaw wefteye = vwdispway.geteyepawametews("weft");
            vaw wighteye = v-vwdispway.geteyepawametews("wight");

            canvas.width =
              math.max(wefteye.wendewwidth, -.- wighteye.wendewwidth) * 2;
            canvas.height = math.max(
              w-wefteye.wendewheight, 🥺
              wighteye.wendewheight, o.O
            );

            // s-stop the nyowmaw p-pwesentation, /(^•ω•^) and s-stawt the vw pwesentation
            window.cancewanimationfwame(nowmawscenefwame);
            dwawvwscene();

            b-btn.textcontent = "exit v-vw dispway";
          });
        } ewse {
          v-vwdispway.exitpwesent();
          c-consowe.wog("stopped pwesenting t-to webvw dispway");

          btn.textcontent = "stawt v-vw dispway";

          // stop the vw pwesentation, nyaa~~ and s-stawt the nyowmaw pwesentation
          v-vwdispway.cancewanimationfwame(vwscenefwame);
          dwawscene();
        }
      });
    }
  });
}
```

> [!note]
> この完全なコードは [waw-webgw-exampwe](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-exampwe/webgw-demo.js) で見ることができます。

## 仕様書

このインターフェイスは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw d-device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
