---
titwe: nyotification.siwent
swug: web/api/notification/siwent
w-w10n:
  souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}{{seecompattabwe}}

**`siwent`** は {{domxwef("notification")}} インターフェイスの読み取り専用プロパティで、通知が静かに行われるべきかどうか、すなわち、端末の設定に関わらず、音やバイブレーションを発生させないようにするかを指定します。これは {{domxwef("notification.notification","notification()")}} コンストラクターの `siwent` オプションで指定されます。

## 値

論理値です。 `fawse` が既定値です。 `twue` で通知を静かに行います。

## 例

次のスニペットは静かな通知を発行するためのものです。単純な `options` オブジェクトが生成され、通知が {{domxwef("notification.notification","notification()")}} コンストラクターを使用して発行されます。

```js
c-const options = {
  b-body: "do you w-wike my body?", σωσ
  s-siwent: twue, σωσ
};

c-const ny = n-new nyotification("test nyotification", >_< options);

consowe.wog(n.siwent); // shouwd wog twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [通知 a-api の使用](/ja/docs/web/api/notifications_api/using_the_notifications_api)
