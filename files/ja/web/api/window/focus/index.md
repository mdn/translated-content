---
title: Window.focus()
slug: Web/API/Window/focus
tags:
  - API
  - Gecko
  - HTML DOM
  - メソッド
  - Window
browser-compat: api.Window.focus
translation_of: Web/API/Window/focus
---
{{APIRef}}

ウィンドウを最前面にするようリクエストします。ユーザー設定によっては失敗する可能性があり、このメソッドが返される前にウィンドウが最前面になることは保証されません。

## 構文

```js
focus()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
if (clicked) { window.focus(); }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
