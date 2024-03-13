---
title: Window.scrollByLines()
slug: Web/API/Window/scrollByLines
---

{{ ApiRef() }} {{Non-standard_header}}

**`Window.scrollByLines()`** メソッドは、指定された行数だけ文書をスクロールさせます。

## 構文

```js
window.scrollByLines(lines);
```

### 引数

- `lines` は文書をスクロールする行数です。これは正または負の整数を指定することができます。

## 例

```html
<!-- 文書を 5 行だけ上方向にスクロールする -->
<button id="scroll-up" onclick="scrollByLines(-5);">Up 5 lines</button>

<!-- 文書を 5 行だけ下方向にスクロールする -->
<button id="scroll-down" onclick="scrollByLines(5);">Down 5 lines</button>
```

## 仕様書

どの仕様書にもありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.scroll()")}}
- {{domxref("window.scrollBy()")}}
- {{domxref("window.scrollByPages()")}}
- {{domxref("window.scrollTo()")}}
