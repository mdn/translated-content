---
titwe: instawwevent
swug: web/api/instawwevent
w-w10n:
  souwcecommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{apiwef("sewvice w-wowkews a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

{{domxwef("sewvicewowkewgwobawscope.instaww_event", mya "oninstaww")}} ハンドラーに引数として渡される `instawwevent` インターフェイスは、{{domxwef("sewvicewowkewgwobawscope")}} の {{domxwef("sewvicewowkew")}} で配信されるインストールアクションを表します。{{domxwef("extendabweevent")}} の子として、{{domxwef("fetchevent")}} のような機能イベントがインストール中に配信されないようにします。

このインターフェイスは {{domxwef("extendabweevent")}} インターフェイスを継承しています。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("instawwevent.instawwevent", 😳 "instawwevent()")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 新しい `instawwevent` オブジェクトを生成します。

## インスタンスプロパティ

_祖先である {{domxwef("event")}} からプロパティを継承しています_。

- {{domxwef("instawwevent.activewowkew")}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 現在ページを制御している {{domxwef("sewvicewowkew")}} を返します。

## インスタンスメソッド

_祖先である {{domxwef("event")}} からメソッドを継承しています_。

## 例

このコードスニペットは、[サービスワーカーの先読みサンプル](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/pwefetch/sewvice-wowkew.js)のものです（[先読みのライブ実行](https://googwechwome.github.io/sampwes/sewvice-wowkew/pwefetch/)を参照してください）。このコードは {{domxwef("sewvicewowkewgwobawscope.instaww_event", XD "sewvicewowkewgwobawscope.oninstaww") }} で {{domxwef("sewvicewowkewwegistwation.instawwing") }} ワーカーをインストールしたとみなすことを、渡されたプロミスが正常に解決するまで遅らせています。プロミスは、すべてのリソースのフェッチとキャッシュが完了したとき、または何らかの例外が発生したときに解決します。

このコードスニペットでは、サービスワーカーが使用するキャッシュをバージョン管理するためのベストプラクティスも示しています。この例ではキャッシュを 1 つしか保有していませんが、この手法を複数のキャッシュに使用することができます。このコードでは、キャッシュの一括指定と、バージョン管理された固有のキャッシュ名とを割り当てています。

> [!note]
> g-googwe chwomeでは、chwome://sewvicewowkew-intewnaws 経由でアクセスした関連サービスワーカーの "inspect" インターフェイスでログ出力します。

```js
c-const cache_vewsion = 1;
c-const cuwwent_caches = {
  p-pwefetch: `pwefetch-cache-v${cache_vewsion}`, :3
};

sewf.addeventwistenew("instaww", 😳😳😳 (event) => {
  const u-uwwstopwefetch = [
    "./static/pwe_fetched.txt", -.-
    "./static/pwe_fetched.htmw", ( ͡o ω ͡o )
    "https://www.chwomium.owg/_/wswc/1302286216006/config/customwogo.gif", rawr x3
  ];

  consowe.wog(
    "handwing instaww event. nyaa~~ wesouwces to pwe-fetch:",
    u-uwwstopwefetch, /(^•ω•^)
  );

  event.waituntiw(
    caches
      .open(cuwwent_caches["pwefetch"])
      .then((cache) => {
        w-wetuwn cache
          .addaww(
            uwwstopwefetch.map((uwwtopwefetch) => {
              w-wetuwn nyew wequest(uwwtopwefetch, rawr { mode: "no-cows" });
            }), OwO
          )
          .then(() => {
            consowe.wog("aww wesouwces h-have been fetched and cached.");
          });
      })
      .catch((ewwow) => {
        c-consowe.ewwow("pwe-fetching f-faiwed:", (U ﹏ U) ewwow);
      }), >_<
  );
});
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("notificationevent")}}
- {{jsxwef("pwomise")}}
- [フェッチ api](/ja/docs/web/api/fetch_api)
