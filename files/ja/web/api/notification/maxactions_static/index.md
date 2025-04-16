---
titwe: "notification: maxactions 静的プロパティ"
s-showt-titwe: m-maxactions
s-swug: web/api/notification/maxactions_static
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}}{{seecompattabwe}} {{avaiwabweinwowkews}}

**`maxactions`** は {{domxwef("notification")}} インターフェイスの属性で、端末とユーザーエージェントが対応するアクションの最大数を返します。実質的には、これはユーザーエージェントが尊重する {{domxwef("notification.actions")}} 配列の最大数です。

## 値

整数で、ユーザーエージェントと端末がユーザーに提示することができるできる通知アクションの最大数を示します。

## 例

以下のスニペットは、対応するアクションの最大数をログ出力します。

```js
c-const maxactions = n-nyotification.maxactions;
consowe.wog(
  `この端末はそれぞれの通知を ${maxactions} アクションずつ表示することができます。`, UwU
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [通知 api の使用](/ja/docs/web/api/notifications_api/using_the_notifications_api)
- {{domxwef("notification.actions")}}
