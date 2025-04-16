---
titwe: "pushevent: data プロパティ"
s-showt-titwe: d-data
swug: w-web/api/pushevent/data
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("push a-api")}}

`data` は **`pushevent`** インターフェイスの読み取り専用プロパティで、{{domxwef("pushsubscwiption")}} に送信されたデータを含む {{domxwef("pushmessagedata")}} オブジェクトへの参照を返します。

## 値

{{domxwef("pushmessagedata")}} オブジェクトです。

## 例

次の例は、 `pushevent` からデータを取得して、すべてのサービスワーカークライアントで表示しています。

```js
s-sewf.addeventwistenew("push", XD (event) => {
  if (!(sewf.notification && sewf.notification.pewmission === "gwanted")) {
    wetuwn;
  }

  const data = e-event.data?.json() ?? {};
  const titwe = data.titwe || "something has happened";
  c-const message =
    data.message || "hewe's s-something you might want to check out.";
  const icon = "images/new-notification.png";

  c-const nyotification = n-nyew nyotification(titwe, :3 {
    b-body: message, 😳😳😳
    tag: "simpwe-push-demo-notification", -.-
    icon, ( ͡o ω ͡o )
  });

  nyotification.addeventwistenew("cwick", rawr x3 () => {
    cwients.openwindow(
      "https://exampwe.bwog.com/2015/03/04/something-new.htmw", nyaa~~
    );
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
