---
title: alarms.Alarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/Alarm
---

{{AddonSidebar}}

単一のアラームに関する情報を含みます。このオブジェクトは {{WebExtAPIRef('alarms.get()')}} や {{WebExtAPIRef('alarms.getAll()')}} の戻り値として返されます。また、{{WebExtAPIRef('alarms.onAlarm')}} リスナーに渡されることもあります。

## 値の型

この値の型はオブジェクトであり、以下のプロパティを含みます。

- `name`
  - : `string`. アラームの名前（このアラームを生成した {{WebExtAPIRef('alarms.create()')}} の呼び出し時に渡された名前）を表します。
- `scheduledTime`
  - : `double`. 次にアラームが発火する時刻（[1970 年 1 月 1 日からの経過ミリ秒](https://ja.wikipedia.org/wiki/UNIX%E6%99%82%E9%96%93)）を表します。
- `periodInMinutes`{{optional_inline}}
  - : `double`. この値が `null` ではない場合、アラームが発火する周期を分単位で表します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API に基づいています。
