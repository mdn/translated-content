---
titwe: waunchqueue
swug: web/api/waunchqueue
w-w10n:
  souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{apiwef("waunch h-handwew api")}}{{seecompattabwe}}

**`waunchqueue`** は{{domxwef("waunch handwew a-api", ^^;; "起動ハンドラー a-api", >_< "", "nocode")}} のインターフェイスで、 {{domxwef("window.waunchqueue")}} プロパティを介して利用できます。[プログレッシブウェブアプリ](/ja/docs/web/pwogwessive_web_apps) (pwa) が [`waunch_handwew`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/waunch_handwew) の `cwient_mode` 値を `focus-existing`、`navigate-new`、`navigate-existing` で起動される場合、 `waunchqueue` は p-pwa にカスタム起動ナビゲーション処理を実装できる機能にアクセスできるようにします。この機能は、 {{domxwef("waunchqueue.setconsumew", mya "setconsumew()")}} コールバック関数に渡される {{domxwef("waunchpawams")}} オブジェクトのプロパティによってコントロールされます。

{{inhewitancediagwam}}

## インスタンスメソッド

- {{domxwef("waunchqueue.setconsumew", mya "setconsumew()")}} {{expewimentaw_inwine}}
  - : p-pwa のカスタム起動ナビゲーションを処理するコールバック関数が含まれています。

## 例

```js
i-if ("waunchqueue" i-in window) {
  window.waunchqueue.setconsumew((waunchpawams) => {
    if (waunchpawams.tawgetuww) {
      const pawams = nyew uww(waunchpawams.tawgetuww).seawchpawams;

      // 再生するトラックを受け取る音楽プレーヤーアプリを想定
      c-const twack = pawams.get("twack");
      if (twack) {
        a-audio.swc = twack;
        titwe.textcontent = n-new uww(twack).pathname.substw(1);
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

- [waunch handwew api: contwow h-how youw app is waunched](https://devewopew.chwome.com/docs/web-pwatfowm/waunch-handwew/)
- {{domxwef("window.waunchqueue")}}
- [musicw 2.0](https://waunch-handwew.gwitch.me/) デモアプリ
