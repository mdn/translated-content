---
title: "Window: scrollByLines() メソッド"
short-title: scrollByLines()
slug: Web/API/Window/scrollByLines
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef}} {{Non-standard_header}}

**`Window.scrollByLines()`** メソッドは、指定された行数だけ文書をスクロールさせます。

## 構文

```js-nolint
scrollByLines(lines)
```

### 引数

- `lines`
  - : 文書をスクロールする行数です。正または負の整数を指定できます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```html
<button id="scroll-up">5 行上へスクロール</button>
<button id="scroll-down">5 行下へスクロール</button>
```

```js
document.getElementById("scroll-up").addEventListener("click", () => {
  window.scrollByLines(-5);
});
document.getElementById("scroll-down").addEventListener("click", () => {
  window.scrollByLines(5);
});
```

## 仕様書

この機能はどの仕様にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.scroll()")}}
- {{domxref("window.scrollBy()")}}
- {{domxref("window.scrollByPages()")}}
- {{domxref("window.scrollTo()")}}
