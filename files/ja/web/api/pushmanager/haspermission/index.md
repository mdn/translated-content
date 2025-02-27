---
title: "PushManager: hasPermission() メソッド"
short-title: hasPermission()
slug: Web/API/PushManager/hasPermission
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{deprecated_header}}{{ApiRef("Push API")}}

**`PushManager.hasPermission()`** は {{domxref("PushManager")}} インターフェイスのメソッドで、 {{jsxref("Promise")}} を返します。このプロミスは、ウェブアプリへのリクエストの `PushPermissionStatus` に解決し、 `granted`, `denied`, `default` のいずれかになります。

> [!NOTE]
> この機能は {{domxref("PushManager.permissionState()")}} メソッドに置き換えられました。

## 構文

```js-nolint
hasPermission()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} で、このプロミスは `PushPermissionStatus` に解決します。

## 例

```js
// TBD
```

## 仕様書

この機能はもうどの仕様にも属していません。標準化の予定はなくなりました。

## ブラウザーの互換性

{{Compat}}
