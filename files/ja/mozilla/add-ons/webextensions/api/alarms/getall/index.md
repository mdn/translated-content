---
title: alarms.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/getAll
---

{{AddonSidebar}}

予約されたアラームすべてを取得します。取得されたアラームは {{WebExtAPIRef('alarms.Alarm')}} オブジェクトの配列としてコールバック関数に渡されます。

## 構文

```js
browser.alarms.getAll(
  function(array) {...}   // 関数
)
```

### 引数

- `callback`
  - : `function`. この関数には以下の引数が渡ります。
    - `alarms`
      - : 予約されたアラームすべてを含む `{{WebExtAPIRef('alarms.Alarm')}}` の配列です。予約されたアラームがない場合は空の配列となります。

## ブラウザーの互換性

{{Compat}}

## 例

コールバックを用いた例：

```js
function gotAll(alarms) {
  for (var alarm of alarms) {
    console.log(alarm.name);
  }
}

chrome.alarms.getAll(gotAll);
```

Promise を用いた例：

```js
function gotAll(alarms) {
  for (var alarm of alarms) {
    console.log(alarm.name);
  }
}

var getAlarms = browser.alarms.getAll();
getAlarms.then(gotAll);
```

{{WebExtExamples}}

> [!NOTE]
>
> この API は Chromium の [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API に基づいています。
