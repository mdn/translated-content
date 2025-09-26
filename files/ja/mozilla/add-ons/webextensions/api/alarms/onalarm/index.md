---
title: alarms.onAlarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm
---

{{AddonSidebar}}

アドオンによってアラームが動作した際に発火します。

## 構文

```js
browser.alarms.onAlarm.addListener(function(
  alarm      // Alarm
) {...})
browser.alarms.onAlarm.removeListener(listener)
browser.alarms.onAlarm.hasListener(listener)
```

このイベントには 3 つのメソッドが用意されています。

- `addListener(callback)`
  - : イベントリスナーを追加します。
- `removeListener(listener)`
  - : イベントリスナーを削除します。引数 `listener` には削除したいリスナーを指定します。
- `hasListener(listener)`
  - : `listener` がイベントリスナーとして登録されているか確認します。登録されていれば `true` を、それ以外の場合は `false` を返します。

## addListener の構文

### 引数

- `callback`
  - : このイベントが発火した際に呼び出される関数を指定します。この関数には以下の引数が渡ります。
    - `alarm`
      - : 発火するアラーム {{WebExtAPIRef('alarms.Alarm')}} が入ります。発火したアラームを判別するには `Alarm.name` が利用できます。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API に基づいています。
