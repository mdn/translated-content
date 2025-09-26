---
title: "Navigator: setAppBadge() メソッド"
slug: Web/API/Navigator/setAppBadge
l10n:
  sourceCommit: e5705e3f2ac69db70dbcb14bfe887882113a99b1
---

{{APIRef("Badging API")}}

{{domxref("Navigator")}} インターフェイスの **`setAppBadge()`** メソッドは、このアプリケーションに関連付けられたアイコン上のバッジを設定します。メソッドに値を渡した場合は、この値をバッジの値として設定します。値を渡さなかった場合は、バッジは点、もしくはプラットフォームで定義されたその他の表示になります。

## 構文

```js-nolint
setAppBadge()
setAppBadge(contents)
```

### 引数

- `contents` {{optional_inline}}
  - : バッジの値として用いる {{jsxref("number")}} です。`contents` が `0` の場合は、バッジは `nothing` に設定され、非表示になります。

### 返値

{{jsxref("undefined")}} で解決する {{jsxref("Promise")}} を返します。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : {{domxref("Navigator")}} に操作を実行する対象のドキュメントが無いとき投げられます。

## 例

以下の例では、未読カウントを `setAppBadge()` に渡します。その結果、バッジは `30` を表示するはずです。

```js
const unread = 30;
navigator.setAppBadge(unread);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Badging for app icons](https://web.dev/badging-api/)
