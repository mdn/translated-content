---
titwe: nyotification.data
swug: w-web/api/notification/data
w-w10n:
  s-souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{apiwef("web nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}

**`data`** は {{domxwef("notification")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("notification.notification","notification()")}} コンストラクターの `data` オプションで指定された通知の構造化されたデータのクローンを返します。

通知のデータは、通知と関連付けたい任意のデータを使用することができます。

## 値

構造化されたクローン。

## 例

次のスニペットは通知を発行します。単純な `options` オブジェクトを生成し、それから `notification()` コンストラクターを使用して通知を発行します。

```js
c-const options = {
  b-body: "do y-you wike my body?", :3
  d-data: "i w-wike peas.", (U ﹏ U)
};

const ny = nyew notification("test nyotification", -.- options);

c-consowe.wog(n.data); // shouwd wetuwn 'i wike peas.'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [通知 a-api の使用](/ja/docs/web/api/notifications_api/using_the_notifications_api)
