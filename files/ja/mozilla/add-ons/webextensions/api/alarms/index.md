---
title: alarms
slug: Mozilla/Add-ons/WebExtensions/API/alarms
---

{{AddonSidebar}}

コードが動作するタイミングを予約します。この API は [`setTimeout()`](/ja/docs/Web/API/Window/setTimeout) や [`setInterval()`](/ja/docs/Web/API/Window/setInterval) と似ていますが、 alarms API はバックグラウンドで動作する点が異なります。

この API を利用するには "alarms" [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) が必要です。

## 関連する値の型

- {{WebExtAPIRef("alarms.Alarm")}}
  - : 特定のアラームに関する情報が含まれます。

## メソッド

- {{WebExtAPIRef("alarms.create()")}}
  - : 新しいアラームを生成します。
- {{WebExtAPIRef("alarms.get()")}}
  - : 与えた名前に対応するアラームを取得します。
- {{WebExtAPIRef("alarms.getAll()")}}
  - : 予約されたアラームすべてを取得します。
- {{WebExtAPIRef("alarms.clear()")}}
  - : 与えた名前に対応するアラームを解除します。
- {{WebExtAPIRef("alarms.clearAll()")}}
  - : 予約されたアラームすべてを解除します。

## イベント

- {{WebExtAPIRef("alarms.onAlarm")}}
  - : アラームが動作した際に発火します。

## ブラウザーの互換性

{{Compat}} {{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API に基づいています。
