---
title: alarms.get()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/get
---

{{AddonSidebar}}

与えた名前に対応するアラームを取得します。取得したアラームは、コールバック関数に渡す {{WebExtAPIRef('alarms.Alarm')}} オブジェクトとして用いることがあります。

## 構文

```js
browser.alarms.get(
  name,                   // 文字列
  function(alarm) {...}   // 関数
)
```

### 引数

- `name`{{optional_inline}}
  - : `string`. 取得したいアラームの名前を指定します。指定しなかった場合は空文字列 "" が用いられます。
- `callback`

  - : `function`. この関数には以下の引数が渡ります。

    - `alarm`
      - : `{{WebExtAPIRef('alarms.Alarm')}}`. 名前が `name` にマッチするアラームが入ります。マッチするアラームがなかった場合、`undefined` が入ります。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API に基づいています。
