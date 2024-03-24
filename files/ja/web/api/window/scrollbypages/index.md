---
title: Window.scrollByPages()
slug: Web/API/Window/scrollByPages
---

{{ ApiRef() }} {{Non-standard_header}}

**`Window.scrollByPages()`** メソッドは、現在の文書を指定されたページ数だけスクロールさせます。

## 概要

```js
window.scrollByPages(pages);
```

### 引数

- `pages` はスクロールさせるページ数です。正または負の整数を指定することができます。

## 例

```js
// 文書を下へ 1 ページスクロール
window.scrollByPages(1);

// 文書を上へ 1 ページスクロール
window.scrollByPages(-1);
```

## 仕様書

DOM Level 0 です。仕様書にはありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.scroll()")}}
- {{domxref("window.scrollBy()")}}
- {{domxref("window.scrollByLines()")}}
- {{domxref("window.scrollTo()")}}
