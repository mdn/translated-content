---
title: "WorkerNavigator: setAppBadge() メソッド"
slug: Web/API/WorkerNavigator/setAppBadge
l10n:
  sourceCommit: dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{APIRef("Badging API")}}{{securecontext_header}}

{{domxref("WorkerNavigator")}} インターフェイスの **`setAppBadge()`** メソッドは、このアプリケーションに関連付けられたアイコンにバッジを設定します。このメソッドに値が渡された場合は、この値がバッジの値として設定されます。渡されなかった場合は、バッジは点もしくはプラットフォームで定義されたその他のインジケーターとして表示されます。

## 構文

```js-nolint
setAppBadge()
setAppBadge(contents)
```

### 引数

- `contents` {{optional_inline}}
  - : バッジの値として用いる {{jsxref("number")}} です。`contents` が `0` の場合は、バッジはクリアを表す `nothing` に設定されます。

### 返値

{{jsxref("undefined")}} で解決する {{jsxref("Promise")}} です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 文書が完全にアクティブでないとき投げられます。
- `SecurityError` {{domxref("DOMException")}}
  - : 呼び出しが[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)によりブロックされたとき投げられます。
- `NotAllowedError` {{domxref("DOMException")}}
  - : {{domxref('PermissionStatus.state')}} が `granted` でないとき投げられます。

## 例

以下の例では、未読カウントを `setAppBadge()` に渡します。すると、バッジに `30` が表示されるはずです。

```js
const unread = 30;
navigator.setAppBadge(unread);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Badging for app icons](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
