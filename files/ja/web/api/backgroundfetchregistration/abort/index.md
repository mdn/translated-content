---
title: BackgroundFetchRegistration.abort()
slug: Web/API/BackgroundFetchRegistration/abort
l10n:
  sourceCommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

{{domxref("BackgroundFetchRegistration")}} インターフェイスの **`abort()`** メソッドは、アクティブなバックグラウンドフェッチを中止します。

## 構文

```js-nolint
abort()
```

### 引数

なし。

### 返値

フェッチの中止が成功したときに `true` で解決される {{jsxref("Promise")}} を返します。

## 例

進行中のバックグラウンドフェッチを終了させるには、`abort()` を呼び出します。

```js
bgFetch.abort();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
