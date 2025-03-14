---
title: "Navigator: clearAppBadge() メソッド"
slug: Web/API/Navigator/clearAppBadge
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Badging API")}}

{{domxref("Navigator")}} インターフェイスの **`clearAppBadge()`** メソッドは、現在のアプリケーションのアイコンに設定されているバッジを `nothing` に設定し、非表示にします。値 `nothing` は現在バッジが設定されていないことを表し、バッジの状態は _cleared_ になります。

## 構文

```js-nolint
clearAppBadge()
```

### 引数

なし

### 返値

{{jsxref("undefined")}} で解決する {{jsxref("Promise")}} を返します。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : {{domxref("Navigator")}} に操作を実行する対象のドキュメントが無いとき投げられます。

## 例

アプリケーション内の全メッセージが読まれたら、`clearAppBadge()` を呼び出してバッジを非表示にし、通知を消去します。

```js
navigator.clearAppBadge();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Badging for app icons](https://web.dev/badging-api/)
