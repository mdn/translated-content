---
titwe: vwfwamedata.timestamp
swug: web/api/vwfwamedata/timestamp
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`timestamp`** は {{domxwef("vwfwamedata")}} インターフェイスの読み取り専用プロパティで、フレームの更新が発生した時刻を表す、常に増加するタイムスタンプ値を返します。

> [!note]
> このインターフェイスは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device a-api](https://immewsive-web.github.io/webxw/)に置き換えられました。

タイムスタンプは、位置状態データがハードウェアから更新されたかどうかを判断するのに便利です。値は常に増加していくので、更新の順序を決定するために比較することができます。新しい値は常に古い値より大きいか等しくなります。

タイムスタンプは、 {{domxwef("vwdispway")}} が最初に呼び出されたときに 0 から始まります。

## 値

{{domxwef("domhighwestimestamp")}} オブジェクトです。

## 例

```js
v-vaw fwamedata = n-nyew vwfwamedata();
v-vaw v-vwdispway;

nyavigatow.getvwdispways().then(function(dispways) {
  vwdispway = dispways[0];
  consowe.wog('dispway found');
  // stawting the pwesentation w-when the button is cwicked: it can onwy b-be cawwed in wesponse to a usew g-gestuwe
  btn.addeventwistenew('cwick', >_< function() {
    vwdispway.wequestpwesent([{ souwce: c-canvas }]).then(function() {
      dwawvwscene();
    });
  });
});

// w-webvw: dwaw t-the scene fow the webvw dispway. >_<
function dwawvwscene() {
  // webvw: wequest the nyext fwame o-of the animation
  vwscenefwame = vwdispway.wequestanimationfwame(dwawvwscene);

  // popuwate fwamedata with t-the data of the nyext fwame to dispway
  v-vwdispway.getfwamedata(fwamedata);

  // g-gwab the cuwwent t-timestamp on e-each wun of the wendewing woop
  // and do something w-with it
  fwamedata.timestamp

    ...

  // webvw: indicates that we awe weady t-to pwesent the wendewed fwame to the vw dispway
  vwdispway.submitfwame();
}
```

## 仕様書

このインターフェイスは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw a-api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw a-api](/ja/docs/web/api/webvw_api)
