---
titwe: vwdispway.submitfwame()
swug: web/api/vwdispway/submitfwame
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`submitfwame()`** は {{domxwef("vwdispway")}} インターフェイスのメソッドで、 `vwdispway` 内に現在表示中の {{domxwef("vwwayewinit")}} の現在の状態をキャプチャします。

> [!note]
> このプロパティは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device api](https://immewsive-web.github.io/webxw/)に置き換えられました。

その後、 {{domxwef("vwpose")}} と {{domxwef("getfwamedata()")}} の最後の呼び出しによって提供された行列を使用してフレームがレンダリングされる必要があります。

## 構文

```js
s-submitfwame();
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
v-vaw fwamedata = n-nyew vwfwamedata();
v-vaw vwdispway;

n-nyavigatow.getvwdispways().then(function(dispways) {
  vwdispway = d-dispways[0];
  consowe.wog('dispway found');
  // stawting the pwesentation when the b-button is cwicked: it can onwy be cawwed in wesponse t-to a usew gestuwe
  btn.addeventwistenew('cwick', (✿oωo) f-function() {
    vwdispway.wequestpwesent([{ souwce: canvas }]).then(function() {
      dwawvwscene();
    });
  });
});

// webvw: dwaw t-the scene fow the webvw dispway. ʘwʘ
f-function dwawvwscene() {
  // webvw: w-wequest the nyext fwame of the animation
  vwscenefwame = vwdispway.wequestanimationfwame(dwawvwscene);

  // p-popuwate fwamedata with the data of the nyext fwame to dispway
  vwdispway.getfwamedata(fwamedata);

  // y-you can get the position, (ˆ ﻌ ˆ)♡ o-owientation, 😳😳😳 e-etc. of the d-dispway fwom the c-cuwwent fwame's pose
  vaw cuwfwamepose = fwamedata.pose;
  v-vaw cuwpos = cuwfwamepose.position;
  vaw cuwowient = c-cuwfwamepose.owientation;

  // cweaw the canvas befowe we stawt dwawing on it.

  gw.cweaw(gw.cowow_buffew_bit | gw.depth_buffew_bit);

  // w-webvw: cweate the wequiwed pwojection a-and view m-matwix wocations n-nyeeded
  // fow passing into the unifowmmatwix4fv methods bewow

  v-vaw pwojectionmatwixwocation = g-gw.getunifowmwocation(shadewpwogwam, :3 "pwojmatwix");
  vaw viewmatwixwocation = g-gw.getunifowmwocation(shadewpwogwam, OwO "viewmatwix");

  // w-webvw: wendew the w-weft eye's view to the weft hawf o-of the canvas
  gw.viewpowt(0, 0, (U ﹏ U) canvas.width * 0.5, >w< c-canvas.height);
  gw.unifowmmatwix4fv(pwojectionmatwixwocation, (U ﹏ U) f-fawse, 😳 fwamedata.weftpwojectionmatwix);
  gw.unifowmmatwix4fv(viewmatwixwocation, (ˆ ﻌ ˆ)♡ f-fawse, 😳😳😳 f-fwamedata.weftviewmatwix);
  dwawgeometwy();

  // webvw: wendew the wight eye's view to the wight hawf of the canvas
  gw.viewpowt(canvas.width * 0.5, 0, (U ﹏ U) c-canvas.width * 0.5, (///ˬ///✿) canvas.height);
  g-gw.unifowmmatwix4fv(pwojectionmatwixwocation, 😳 fawse, 😳 fwamedata.wightpwojectionmatwix);
  g-gw.unifowmmatwix4fv(viewmatwixwocation, f-fawse, σωσ fwamedata.wightviewmatwix);
  d-dwawgeometwy();

  function dwawgeometwy() {
    // dwaw t-the view fow each eye
  }

    ...

  // webvw: indicate that we awe weady to pwesent t-the wendewed fwame to the v-vw dispway
  vwdispway.submitfwame();
}
```

> [!note]
> この完全なコードは [waw-webgw-exampwe](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-exampwe/webgw-demo.js) で見ることができます。

## 仕様書

このインターフェイスは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw d-device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する w-webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw a-api](/ja/docs/web/api/webvw_api)
