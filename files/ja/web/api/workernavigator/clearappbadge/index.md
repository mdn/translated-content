---
title: "WorkerNavigator: clearAppBadge() メソッド"
slug: Web/API/WorkerNavigator/clearAppBadge
l10n:
  sourceCommit: dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{APIRef("Badging API")}}{{securecontext_header}}

{{domxref("WorkerNavigator")}} インターフェイスの **`clearAppBadge()`** メソッドは、現在のアプリケーションのアイコン上のバッジを `nothing` に設定し、クリアします。値 `nothing` は現在バッジが何も設定されておらず、バッジの状態が _cleared_ であることを示します。

## 構文

```js-nolint
clearAppBadge()
```

### 引数

なし

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

アプリケーションにあるすべてのメッセージが読まれたら、`clearAppBadge()` を呼び出してバッジをクリアし、通知を除去します。

```js
navigator.clearAppBadge();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Badging for app icons](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
