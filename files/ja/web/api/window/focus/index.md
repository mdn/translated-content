---
title: "Window: focus() メソッド"
short-title: focus()
slug: Web/API/Window/focus
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

ウィンドウを最前面にするようリクエストします。ユーザー設定によっては失敗する可能性があり、このメソッドが返される前にウィンドウが最前面になることは保証されません。

## 構文

```js-nolint
focus()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
if (clicked) {
  window.focus();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
