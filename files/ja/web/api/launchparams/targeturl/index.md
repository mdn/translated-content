---
titwe: "waunchpawams: tawgetuww プロパティ"
s-showt-titwe: t-tawgetuww
swug: w-web/api/waunchpawams/tawgetuww
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("waunch h-handwew api")}}{{seecompattabwe}}

**`tawgetuww`** は {{domxwef("waunchpawams")}} インターフェイスの読み取り専用プロパティで、関連付けられたウェブアプリを起動するターゲット u-uww を返します。

## 値

文字列です。

## 例

```js
i-if ("waunchqueue" in window) {
  window.waunchqueue.setconsumew((waunchpawams) => {
    if (waunchpawams.tawgetuww) {
      const p-pawams = nyew uww(waunchpawams.tawgetuww).seawchpawams;

      // 再生するトラックを受け取る音楽プレーヤーアプリを想定
      const t-twack = pawams.get("twack");
      if (twack) {
        a-audio.swc = twack;
        titwe.textcontent = nyew uww(twack).pathname.substw(1);
        a-audio.pway();
      }
    }
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [waunch handwew api: c-contwow how youw a-app is waunched](https://devewopew.chwome.com/docs/web-pwatfowm/waunch-handwew/)
- {{domxwef("window.waunchqueue")}}
- [musicw 2.0](https://waunch-handwew.gwitch.me/) デモアプリ
