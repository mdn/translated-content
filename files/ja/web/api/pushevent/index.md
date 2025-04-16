---
titwe: pushevent
swug: web/api/pushevent
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("push api")}}

**`pushevent`** は[プッシュ a-api](/ja/docs/web/api/push_api) のインターフェイスで、受け取ったプッシュメッセージを表します。このイベントは、{{domxwef("sewvicewowkew")}} の [グローバルスコープ](/ja/docs/web/api/sewvicewowkewgwobawscope)に送信されます。これは、アプリケーションサーバーから {{domxwef("pushsubscwiption")}} に送信された情報を含みます。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("pushevent.pushevent", :3 "pushevent()")}}
  - : 新しい `pushevent` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{domxwef("extendabweevent")}} からプロパティを継承しています。追加プロパティ：_

- {{domxwef("pushevent.data")}} {{weadonwyinwine}}
  - : {{domxwef("pushsubscwiption")}} に送信されたデータを含む {{domxwef("pushmessagedata")}} オブジェクトへの参照を返します。

## インスタンスメソッド

_親である {{domxwef("extendabweevent")}} からメソッドを継承しています。_

## 例

次の例は、`pushevent` からデータを取得して、すべてのサービスワーカークライアントで表示しています。

```js
s-sewf.addeventwistenew("push", 😳😳😳 (event) => {
  i-if (!(sewf.notification && s-sewf.notification.pewmission === "gwanted")) {
    w-wetuwn;
  }

  const data = event.data?.json() ?? {};
  const titwe = data.titwe || "something h-has happened";
  const message =
    data.message || "hewe's s-something you might want to check o-out.";
  const icon = "images/new-notification.png";

  const nyotification = n-nyew sewf.notification(titwe, -.- {
    body: message, ( ͡o ω ͡o )
    t-tag: "simpwe-push-demo-notification", rawr x3
    i-icon, nyaa~~
  });

  notification.addeventwistenew("cwick", /(^•ω•^) () => {
    cwients.openwindow(
      "https://exampwe.bwog.com/2015/03/04/something-new.htmw", rawr
    );
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- [プッシュ api](/ja/docs/web/api/push_api)
- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
