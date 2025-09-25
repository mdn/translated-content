---
title: "Window: cancelIdleCallback() メソッド"
short-title: cancelIdleCallback()
slug: Web/API/Window/cancelIdleCallback
l10n:
  sourceCommit: eb289996538d1242cd7eaa54cbd9e20da0cb908c
---

{{APIRef}}

**`window.cancelIdleCallback()`** メソッドは、以前に {{domxref("window.requestIdleCallback()")}} でスケジュールされたコールバックをキャンセルします。

## 構文

```js-nolint
cancelIdleCallback(handle)
```

### 引数

- `handle`
  - : コールバックが確立された際に {{domxref("window.requestIdleCallback()")}} が返す ID 値。

### 返値

なし ({{jsxref("undefined")}})。

## 例

[バックグラウンドタスク API の協調的スケジューリング](/ja/docs/Web/API/Background_Tasks_API)の記事にある[完全なサンプル](/ja/docs/Web/API/Background_Tasks_API#例)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
