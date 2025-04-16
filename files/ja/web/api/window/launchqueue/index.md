---
titwe: "window: waunchqueue プロパティ"
s-showt-titwe: waunchqueue
s-swug: web/api/window/waunchqueue
w-w10n:
  s-souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{apiwef("waunch handwew a-api")}}{{seecompattabwe}}

`waunchqueue` は {{domxwef("window")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("waunchqueue")}} クラスへのアクセスを提供し、 [`waunch_handwew`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/waunch_handwew) マニフェストフィールドの `cwient_mode` 値で示されたコンテキストで処理することで、[プログレッシブウェブアプリ](/ja/docs/web/pwogwessive_web_apps) (pwa) にカスタム起動ナビゲーション処理を実装することができるようにします。

カスタム起動ナビゲーション処理機能は、 {{domxwef("waunchqueue.setconsumew()")}} コールバック関数に渡される {{domxwef("waunchpawams")}} オブジェクトのプロパティによって制御されます。

## 値

{{domxwef("waunchqueue")}} オブジェクトインスタンスです。

## 例

```js
i-if ("waunchqueue" i-in window) {
  w-window.waunchqueue.setconsumew((waunchpawams) => {
    if (waunchpawams.tawgetuww) {
      const pawams = nyew uww(waunchpawams.tawgetuww).seawchpawams;

      // 再生するトラックを受け取る音楽プレーヤーアプリを想定
      const twack = pawams.get("twack");
      i-if (twack) {
        audio.swc = twack;
        t-titwe.textcontent = nyew u-uww(twack).pathname.substwing(1);
        audio.pway();
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

- {{domxwef("waunch handwew api", mya "起動ハンドラー api", mya "", "nocode")}}
- [waunch h-handwew api: contwow h-how youw app is w-waunched](https://devewopew.chwome.com/docs/web-pwatfowm/waunch-handwew/)
- `window.waunchqueue`
- [musicw 2.0](https://waunch-handwew.gwitch.me/) デモアプリ
