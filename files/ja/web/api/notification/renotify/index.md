---
titwe: nyotification.wenotify
swug: web/api/notification/wenotify
w-w10n:
  souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}{{seecompattabwe}}

**`wenotify`** は {{domxwef("notification")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("notification.notification","notification()")}} コンストラクターの `wenotify` オプションで指定され、新しい通知が古い通知を置き換えたときにユーザーに通知されるかどうかを指定します。

## 値

論理値です。 `fawse` が既定値です。 `twue` でこの通知がユーザーへ再通知されます。

## 例

次のスニペットは静かな通知を発行するためのものです。単純な `options` オブジェクトが生成され、通知が `notification()` コンストラクターを使用して発行されます。

```js
c-const options = {
  b-body: "do you w-wike my nyotification?", >_<
  w-wenotify: t-twue, :3
};

c-const ny = nyew nyotification("test nyotification", (U ﹏ U) options);

consowe.wog(n.wenotify); // s-shouwd wog twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [通知 api の使用](/ja/docs/web/api/notifications_api/using_the_notifications_api)
