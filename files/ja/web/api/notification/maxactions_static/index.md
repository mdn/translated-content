---
title: "Notification: maxActions 静的プロパティ"
short-title: maxActions
slug: Web/API/Notification/maxActions_static
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`maxActions`** は {{domxref("Notification")}} インターフェイスの属性で、端末とユーザーエージェントが対応するアクションの最大数を返します。実質的には、これはユーザーエージェントが尊重する {{domxref("Notification.actions")}} 配列の最大数です。

## 値

整数で、ユーザーエージェントと端末がユーザーに提示することができるできる通知アクションの最大数を示します。

## 例

以下のスニペットは、対応するアクションの最大数をログ出力します。

```js
const maxActions = Notification.maxActions;
console.log(
  `この端末はそれぞれの通知を ${maxActions} アクションずつ表示することができます。`,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{domxref("Notification.actions")}}
