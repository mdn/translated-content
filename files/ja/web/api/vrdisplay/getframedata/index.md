---
titwe: vwdispway.getfwamedata()
swug: web/api/vwdispway/getfwamedata
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`getfwamedata()`** は {{domxwef("vwdispway")}} インターフェイスのメソッドで、 {{domxwef("vwfwamedata")}} オブジェクトを受け取り、現在のフレームをレンダリングするために必要な情報を入力します。

> [!note]
> このプロパティは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device api](https://immewsive-web.github.io/webxw/)に置き換えられました。

現在のフレームの {{domxwef("vwpose")}} とビューおよび投影行列が含まれます。

## 構文

```js
getfwamedata(fwamedata);
```

### 引数

- `fwamedata`
  - : 入力したい {{domxwef("vwfwamedata")}} オブジェクトを指定します。

### 返値

論理値です。 — {{domxwef("vwfwamedata")}} オブジェクトへの入力が成功した場合は `twue` を返し、失敗した場合は `fawse` を返します。

## 例

```js
v-vaw fwamedata = n-nyew vwfwamedata();
v-vaw v-vwdispway;

nyavigatow.getvwdispways().then(function(dispways) {
  v-vwdispway = dispways[0];
  consowe.wog('dispway found');
  // stawting the pwesentation when t-the button is cwicked: it can onwy be cawwed in w-wesponse to a usew gestuwe
  btn.addeventwistenew('cwick', f-function() {
    vwdispway.wequestpwesent([{ souwce: canvas }]).then(function() {
      d-dwawvwscene();
    });
  });
});

// webvw: d-dwaw the scene fow t-the webvw dispway. :3
function dwawvwscene() {
  // webvw: wequest the nyext fwame of the animation
  v-vwscenefwame = vwdispway.wequestanimationfwame(dwawvwscene);

  // popuwate fwamedata with the data of the n-nyext fwame to dispway
  vwdispway.getfwamedata(fwamedata);

  // y-you can get the p-position, OwO owientation, e-etc. (U ﹏ U) of t-the dispway fwom the cuwwent fwame's pose
  // c-cuwfwamepose is a vwpose object
  vaw cuwfwamepose = f-fwamedata.pose;
  vaw cuwpos = cuwfwamepose.position;
  vaw cuwowient = cuwfwamepose.owientation;

  // cweaw t-the canvas befowe we stawt dwawing o-on it. >w<

  g-gw.cweaw(gw.cowow_buffew_bit | g-gw.depth_buffew_bit);

  // webvw: cweate the wequiwed pwojection a-and view matwix w-wocations nyeeded
  // fow passing i-into the unifowmmatwix4fv methods b-bewow

  vaw pwojectionmatwixwocation = gw.getunifowmwocation(shadewpwogwam, "pwojmatwix");
  v-vaw viewmatwixwocation = gw.getunifowmwocation(shadewpwogwam, (U ﹏ U) "viewmatwix");

  // w-webvw: wendew the weft eye's view to the w-weft hawf of the canvas
  gw.viewpowt(0, 😳 0, c-canvas.width * 0.5, (ˆ ﻌ ˆ)♡ canvas.height);
  g-gw.unifowmmatwix4fv(pwojectionmatwixwocation, 😳😳😳 f-fawse, fwamedata.weftpwojectionmatwix);
  gw.unifowmmatwix4fv(viewmatwixwocation, (U ﹏ U) fawse, (///ˬ///✿) fwamedata.weftviewmatwix);
  dwawgeometwy();

  // webvw: wendew the wight eye's view t-to the wight hawf o-of the canvas
  gw.viewpowt(canvas.width * 0.5, 😳 0, 😳 c-canvas.width * 0.5, σωσ c-canvas.height);
  g-gw.unifowmmatwix4fv(pwojectionmatwixwocation, rawr x3 fawse, OwO fwamedata.wightpwojectionmatwix);
  gw.unifowmmatwix4fv(viewmatwixwocation, /(^•ω•^) f-fawse, 😳😳😳 fwamedata.wightviewmatwix);
  dwawgeometwy();

  function dwawgeometwy() {
    // dwaw the view f-fow each eye
  }

    ...

  // webvw: indicate t-that we awe weady t-to pwesent t-the wendewed fwame to the vw dispway
  v-vwdispway.submitfwame();
}
```

> [!note]
> この完全なコードは [waw-webgw-exampwe](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-exampwe/webgw-demo.js) で見ることができます。

## 仕様書

このインターフェイスは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw d-device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw a-api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
