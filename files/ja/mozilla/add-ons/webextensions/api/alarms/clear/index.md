---
title: alarms.clear()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clear
---

{{AddonSidebar}}

与えた名前に対応するアラームを解除します。

## 構文

```js
browser.alarms.clear(
  name,                        // 文字列
  function(wasCleared) {...}   // 関数
)
```

### 引数

- `name`{{optional_inline}}
  - : `string`. 解除したいアラームの名前を指定します。指定しなかった場合は空文字列 "" が用いられます。
- `callback`{{optional_inline}}

  - : `function`. この関数には以下の引数が渡されます。

    - `wasCleared`
      - : `boolean`. アラームが解除された場合は `true` が、それ以外の場合は `false` が入ります。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API に基づいています。
