---
title: "WindowClient: navigate() メソッド"
short-title: navigate()
slug: Web/API/WindowClient/navigate
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("Service Workers API")}}

**`navigate()`** は {{domxref("WindowClient")}} インターフェイスのメソッドで、指定された URL を制御されたクライアントのページに読み込んでから、既存の {{domxref("WindowClient")}} に解決されるプロミス ({{jsxref("Promise")}}) を返します。

## 構文

```js-nolint
navigate(url)
```

### 引数

- `url`
  - : 移動先の場所。

### 返値

既存の {{domxref("WindowClient")}} に解決されるプロミス ({{jsxref("Promise")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
