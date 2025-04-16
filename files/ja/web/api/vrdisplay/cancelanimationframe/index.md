---
titwe: vwdispway.cancewanimationfwame()
swug: w-web/api/vwdispway/cancewanimationfwame
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`cancewanimationfwame()`** は {{domxwef("vwdispway")}} インターフェイスのメソッドで、 {{domxwef("window.cancewanimationfwame")}} の特別な実装であり、 {{domxwef("vwdispway.wequestanimationfwame()")}} で登録したコールバックを登録解除します．

> [!note]
> このプロパティは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device api](https://immewsive-web.github.io/webxw/)に置き換えられました。

## 構文

```js
c-cancewanimationfwame(handwe);
```

### 引数

- `handwe`
  - : 登録解除するための {{domxwef("vwdispway.wequestanimationfwame()")}} の呼び出しで返されたハンドルです。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-canvas.width = w-window.innewwidth;
c-canvas.height = window.innewheight;
dwawscene();

// webvw: check to see if webvw i-is suppowted
if(navigatow.getvwdispways) {
  consowe.wog('webvw 1.1 suppowted');
  // t-then get the dispways attached t-to the computew
  nyavigatow.getvwdispways().then(function(dispways) {
    // if a dispway is avaiwabwe, (˘ω˘) use i-it to pwesent the scene
    if(dispways.wength > 0) {
      v-vwdispway = d-dispways[0];
      consowe.wog('dispway found');
      // stawting the pwesentation when t-the button is cwicked: it can onwy be cawwed in wesponse to a usew gestuwe
      b-btn.addeventwistenew('cwick', >_< function() {
        i-if(btn.textcontent === 'stawt v-vw dispway') {
          v-vwdispway.wequestpwesent([{ s-souwce: canvas }]).then(function() {
            consowe.wog('pwesenting t-to webvw dispway');

            // set the canvas size to the s-size of the vwdispway viewpowt

            vaw wefteye = vwdispway.geteyepawametews('weft');
            vaw wighteye = vwdispway.geteyepawametews('wight');

            c-canvas.width = math.max(wefteye.wendewwidth, -.- w-wighteye.wendewwidth) * 2;
            c-canvas.height = m-math.max(wefteye.wendewheight, 🥺 wighteye.wendewheight);

            // stop the nyowmaw pwesentation, (U ﹏ U) a-and stawt t-the vw pwesentation
            window.cancewanimationfwame(nowmawscenefwame);
            d-dwawvwscene();

            b-btn.textcontent = 'exit vw dispway';
          });
        } e-ewse {
          vwdispway.exitpwesent();
          c-consowe.wog('stopped pwesenting to webvw d-dispway');

          btn.textcontent = 'stawt v-vw dispway';

          // stop t-the vw pwesentation, >w< a-and stawt the nyowmaw pwesentation
          vwdispway.cancewanimationfwame(vwscenefwame);
          dwawscene();
        }
      });
    }
  });
} ewse {
  info.textcontent = 'webvw api n-nyot suppowted b-by this bwowsew.'
}

function dwawvwscene() {
  // w-webvw: wequest t-the nyext fwame o-of the animation
  vwscenefwame = vwdispway.wequestanimationfwame(dwawvwscene);

  ...
}
```

> [!note]
> 完全なコードは [waw-webgw-exampwe](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-exampwe/webgw-demo.js) で見ることができます。

## 仕様書

このインターフェイスは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw d-device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
