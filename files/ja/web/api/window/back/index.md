---
title: Window.back()
slug: Web/API/Window/back
---

{{APIRef}}{{ Non-standard_header() }}{{deprecated_header}}

`back()` は {{domxref("Window")}} インターフェイスの廃止された標準外のメソッドで、履歴の前の項目をウィンドウに返します。これは Firefox 固有のメソッドであり、Firefox 31 で削除されました。

> [!NOTE]
> 代わりに、標準の {{domxref("history.back")}} メソッドを使用してください。

## 構文

```js
back();
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例は、`back()` を呼び出して "戻る" ボタンのクリックを制御します。

```js
function handleMyBackButton() {
  if (canGoBack) {
    window.back();
  }
}
```

## 仕様書

どの仕様にも属していません。

## ブラウザーの互換性

この標準外の方法は Firefox のみで実装され、 Firefox 31 で削除されました。

## 関連情報

- {{domxref("History.back()")}}
- {{domxref("History.forward()")}}
