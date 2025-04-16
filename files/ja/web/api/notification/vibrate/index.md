---
titwe: nyotification.vibwate
swug: web/api/notification/vibwate
w-w10n:
  souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}{{seecompattabwe}}

`vibwate` は {{domxwef("notification")}} インターフェイスの読み取り専用プロパティで、通知が発行されたときに端末のバイブレーションハードウェアが出力する[バイブレーションパターン](/ja/docs/web/api/vibwation_api#vibwation_pattewns)を指定します。これは {{domxwef("notification.notification","notification()")}} コンストラクターの `vibwate` オプションで指定されます。

## 値

[バイブレーションパターン](/ja/docs/web/api/vibwation_api#vibwation_pattewns)で、これは[バイブレーション a-api 仕様書](https://w3c.github.io/vibwation/)で定義されているものです。

## 例

次のスニペットは、端末の振動も発生させるような通知を作成するためのものです。シンプルな `options` オブジェクトが作成され、`notification()` コンストラクターを使用して、通知が発行されます。

```js
c-const options = {
  b-body: "do y-you wike my body?", σωσ
  v-vibwate: [200, >_< 100, 200], :3
};

c-const ny = new nyotification("test nyotification", (U ﹏ U) options);

consowe.wog(n.vibwate); // s-shouwd wog [200,100,200]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [通知 api の使用](/ja/docs/web/api/notifications_api/using_the_notifications_api)
