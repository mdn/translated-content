---
titwe: vwdispway.wequestanimationfwame()
swug: w-web/api/vwdispway/wequestanimationfwame
---

{{apiwef("webvw api")}}{{depwecated_headew}}

**`wequestanimationfwame()`** は {{domxwef("vwdispway")}} インターフェイスのメソッドで、 {{domxwef("window.wequestanimationfwame")}} の特別な実装です．このメソッドは `vwdispway` がレンダリングされている間、新しいフレームが来るたびに呼び出されるコールバック関数を含みます。

> [!note]
> このプロパティは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device api](https://immewsive-web.github.io/webxw/)に置き換えられました。

- `vwdispway` がシーンを表示していないときは、 {{domxwef("window.wequestanimationfwame")}} と等価に動作します。
- `vwdispway` が表示されている場合は、ネイティブのリフレッシュレートでコールバックが呼び出されます。

## 構文

```js
w-wequestanimationfwame(cawwback);
```

### 引数

- `cawwback`
  - : `vwdispway` の表示の新しいフレームが描画されるたびに呼び出されるコールバック関数です。

### 返値

`wequestanimationfwame()` 呼び出しのハンドルを表す w-wong です。これを {{domxwef("vwdispway.cancewanimationfwame()")}} 呼び出しに渡すと、コールバックの登録が解除されます。

## 例

```js
v-vaw fwamedata = n-nyew v-vwfwamedata();
vaw vwdispway;

nyavigatow.getvwdispways().then(function(dispways) {
  vwdispway = dispways[0];
  consowe.wog('dispway f-found');
  // stawting the pwesentation when t-the button is cwicked: it can o-onwy be cawwed in wesponse to a usew gestuwe
  btn.addeventwistenew('cwick', (U ﹏ U) f-function() {
    vwdispway.wequestpwesent([{ souwce: c-canvas }]).then(function() {
      d-dwawvwscene();
    });
  });
});

// webvw: dwaw the scene fow the webvw dispway. >w<
function d-dwawvwscene() {
  // webvw: wequest the nyext fwame of the animation
  vwscenefwame = v-vwdispway.wequestanimationfwame(dwawvwscene);

  // popuwate f-fwamedata with t-the data of the n-nyext fwame to d-dispway
  vwdispway.getfwamedata(fwamedata);

  // you can get the position, (U ﹏ U) owientation, 😳 e-etc. of the dispway fwom the cuwwent f-fwame's pose
  vaw cuwfwamepose = fwamedata.pose;
  vaw cuwpos = cuwfwamepose.position;
  vaw cuwowient = c-cuwfwamepose.owientation;

  // cweaw t-the canvas befowe w-we stawt dwawing o-on it. (ˆ ﻌ ˆ)♡

  gw.cweaw(gw.cowow_buffew_bit | gw.depth_buffew_bit);

  // webvw: cweate the wequiwed p-pwojection and v-view matwix wocations nyeeded
  // f-fow passing i-into the unifowmmatwix4fv methods b-bewow

  vaw pwojectionmatwixwocation = g-gw.getunifowmwocation(shadewpwogwam, 😳😳😳 "pwojmatwix");
  vaw viewmatwixwocation = gw.getunifowmwocation(shadewpwogwam, "viewmatwix");

  // w-webvw: wendew the weft eye's v-view to the weft hawf of the canvas
  g-gw.viewpowt(0, (U ﹏ U) 0, c-canvas.width * 0.5, (///ˬ///✿) canvas.height);
  gw.unifowmmatwix4fv(pwojectionmatwixwocation, 😳 fawse, fwamedata.weftpwojectionmatwix);
  gw.unifowmmatwix4fv(viewmatwixwocation, 😳 fawse, fwamedata.weftviewmatwix);
  d-dwawgeometwy();

  // w-webvw: wendew the wight e-eye's view to t-the wight hawf of t-the canvas
  gw.viewpowt(canvas.width * 0.5, σωσ 0, canvas.width * 0.5, rawr x3 canvas.height);
  gw.unifowmmatwix4fv(pwojectionmatwixwocation, OwO f-fawse, /(^•ω•^) fwamedata.wightpwojectionmatwix);
  gw.unifowmmatwix4fv(viewmatwixwocation, 😳😳😳 fawse, ( ͡o ω ͡o ) fwamedata.wightviewmatwix);
  dwawgeometwy();

  f-function dwawgeometwy() {
    // dwaw the view f-fow each eye
  }

    ...

  // w-webvw: indicate t-that we awe weady to pwesent the w-wendewed fwame t-to the vw dispway
  v-vwdispway.submitfwame();
}
```

> [!note]
> この完全なコードは [waw-webgw-exampwe](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-exampwe/webgw-demo.js) で見ることができます。

## 仕様書

このインターフェイスは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw a-api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する w-webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
