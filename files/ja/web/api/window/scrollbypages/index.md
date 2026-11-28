---
title: "Window: scrollByPages() メソッド"
short-title: scrollByPages()
slug: Web/API/Window/scrollByPages
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}} {{Non-standard_header}}

**`Window.scrollByPages()`** メソッドは、現在の文書を指定されたページ数だけスクロールさせます。

## 構文

```js-nolint
scrollByPages(pages)
```

### 引数

- `pages`
  - : スクロールさせるページ数です。正または負の整数を指定できます。

### 返値

なし ({{jsxref("undefined")}}).

## 例

```js
// 文書を下へ 1 ページスクロール
window.scrollByPages(1);

// 文書を上へ 1 ページスクロール
window.scrollByPages(-1);
```

## 仕様書

DOM レベル 0 です。仕様には含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.scroll()")}}
- {{domxref("window.scrollBy()")}}
- {{domxref("window.scrollByLines()")}}
- {{domxref("window.scrollTo()")}}
