---
title: Notification.timestamp
slug: Web/API/Notification/timestamp
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`timestamp`** は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Notification.Notification","Notification()")}} コンストラクターの `timestamp` オプションで指定された {{domxref("DOMTimeStamp")}} を返します。

通知のタイムスタンプは、 UTC の 1970 年 1 月 1 日 0 時 0 分 0 秒からの経過ミリ秒数で、通知が作成された時刻、または通知に関連づけたい任意のタイムスタンプを表します。例えば、予定されている会議のタイムスタンプは未来に設定することができ、一方、見逃したメッセージのタイムスタンプは過去に設定することができます。

## 値

{{domxref("DOMTimeStamp")}} です。

## 例

次のスニペットは通知を発行します。単純な `options` オブジェクトが生成され、通知が `Notification()` コンストラクターを使用して発行されます。

```js
const dts = Math.floor(Date.now());

const options = {
  body: 'Do you like my body?',
  timestamp: dts
}

const n = new Notification('Test notification',options);

console.log(n.timestamp) // should log original timestamp
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
