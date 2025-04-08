---
title: window.forward
slug: conflicting/Web/API/History/forward
original_slug: Web/API/Window/forward
---

{{ApiRef}}{{Non-standard_header}} {{deprecated_header}}

## 概要

ウィンドウの文書の履歴のひとつ分だけ前へ進めます。これは Firefox 固有のメソッドであり、Firefox 31 で削除しました。代わりに、標準の {{domxref("History.forward", "window.history.forward()")}} メソッドを使用してください。

## 構文

```
window.forward();
```

### 引数

ありません。

### 戻り値

`undefined` です。

## 例

```js
function goForward() {
  if (canGoForward) {
    window.forward();
  }
}
```

## 仕様書

どの仕様にも属していません。

## ブラウザーの互換性

この非標準メソッドは Firefox だけが実装しており、Firefox 31 で削除しました。

## 関連情報

- {{domxref("History.back()")}}
- {{domxref("History.forward()")}}
