---
title: "Window: blur() メソッド"
short-title: blur()
slug: Web/API/Window/blur
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

**`Window.blur()`** メソッドは何もしません。

> [!NOTE]
> 歴史的には、このメソッドはユーザーが現在のウィンドウからフォーカスを移すこととプログラム上は同等でした。悪意のあるサイトによるこの機能の悪用があったため、この動作は削除されています。
> Firefox では、`dom.disable_window_flip` 設定を有効にすることで古い動作を使用できます。

## 構文

```js-nolint
blur()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
window.blur();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
