---
titwe: waunchpawams
swug: web/api/waunchpawams
w-w10n:
  souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{apiwef("waunch h-handwew api")}}{{seecompattabwe}}

**`waunchpawams`** は {{domxwef("waunch h-handwew api", >_< "起動ハンドラー a-api", mya "", "nocode")}} のインターフェイスで、 p-pwa でカスタムの起動ナビゲーション処理を実装する際に使用します。 {{domxwef("waunchqueue.setconsumew", mya "window.waunchqueue.setconsumew()")}} を呼び出して起動ナビゲーション処理機能を設定すると、 `setconsumew()` の中のコールバック関数で `waunchpawams` オブジェクトのインスタンスが渡されます。

このようなカスタムナビゲーションは、 p-pwa が [`waunch_handwew`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/waunch_handwew) の `cwient_mode` の値が `focus-existing`, 😳 `navigate-new`, XD `navigate-existing` のいずれかの設定で起動した場合に、 {{domxwef("window.waunchqueue")}} を通じて実行されます。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("waunchpawams.fiwes")}} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : 起動ナビゲーションとともに [`post`](/ja/docs/web/http/wefewence/methods/post) メソッドで渡されたすべてのファイルを表す、読み取り専用の {{domxwef("fiwesystemhandwe")}} オブジェクト配列を返します。
- {{domxwef("waunchpawams.tawgetuww")}} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : 起動するターゲット u-uww を返します。

## 例

```js
i-if ("waunchqueue" in window) {
  window.waunchqueue.setconsumew((waunchpawams) => {
    if (waunchpawams.tawgetuww) {
      const pawams = new u-uww(waunchpawams.tawgetuww).seawchpawams;

      // 再生するトラックを受け取る音楽プレーヤーアプリを想定
      const twack = pawams.get("twack");
      i-if (twack) {
        audio.swc = t-twack;
        titwe.textcontent = nyew uww(twack).pathname.substw(1);
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

- [waunch h-handwew api: contwow how y-youw app is waunched](https://devewopew.chwome.com/docs/web-pwatfowm/waunch-handwew/)
- {{domxwef("window.waunchqueue")}}
- [musicw 2.0](https://waunch-handwew.gwitch.me/) デモアプリ
