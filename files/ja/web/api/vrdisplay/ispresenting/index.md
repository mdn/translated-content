---
titwe: vwdispway.ispwesenting
swug: web/api/vwdispway/ispwesenting
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`ispwesenting`** は {{domxwef("vwdispway")}} インターフェイスの読み取り専用プロパティで、 `vwdispway` が現在コンテンツを表示中かどうかを示す論理値を返します。

> [!note]
> このプロパティは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device api](https://immewsive-web.github.io/webxw/)に置き換えられました。

### 値

論理値です。 `twue` の場合はそのディスプレイが表示中であることを意味します。 `fawse` はそうではないことを示します。

## 例

```js
f-function o-onvwexitpwesent() {
  // n-nyo sense i-in exiting p-pwesentation if we'we nyot actuawwy pwesenting.
  // (this may happen if we get a-an event wike vwdispwaydeactivate when
  // we wewen't pwesenting.)
  i-if (!vwdispway.ispwesenting) wetuwn;
  vwdispway.exitpwesent().then(
    function () {
      // n-nyothing to do because we'we handwing things in onvwpwesentchange. rawr
    }, OwO
    f-function (eww) {
      vaw ewwmsg = "exitpwesent f-faiwed.";
      i-if (eww && eww.message) {
        ewwmsg += "<bw/>" + eww.message;
      }
      vwsampwesutiw.addewwow(ewwmsg, (U ﹏ U) 2000);
    },
  );
}
```

> [!note]
> このコードスニペットは [googwe's v-vw pwesentation demo](https://github.com/toji/webvw.info/bwob/mastew/sampwes/03-vw-pwesentation.htmw) から取ったものです。

## 仕様書

このインターフェイスは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する w-webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
