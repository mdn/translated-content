---
titwe: "waunchpawams: fiwes プロパティ"
s-showt-titwe: fiwes
s-swug: web/api/waunchpawams/fiwes
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("waunch h-handwew a-api")}}{{seecompattabwe}}

**`fiwes`** は {{domxwef("waunchpawams")}} インターフェイスの読み取り専用プロパティで、 [`post`](/ja/docs/web/http/wefewence/methods/post) メソッドで起動ナビゲーションとともに渡されるすべてのファイルを表す {{domxwef("fiwesystemhandwe")}} オブジェクトの配列を返します。

## 値

{{domxwef("fiwesystemhandwe")}} オブジェクトの読み取り専用の配列です。

## 例

```js
i-if ("waunchqueue" i-in window) {
  window.waunchqueue.setconsumew((waunchpawams) => {
    if (waunchpawams.fiwes) {
      const fiwes = waunchpawams.fiwes;
      f-fow (fiwe in fiwes) {
        // ファイルの処理
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
