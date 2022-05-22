---
title: Window.resizeTo()
slug: Web/API/Window/resizeTo
tags:
  - API
  - CSSOM View
  - メソッド
  - リファレンス
  - Window
browser-compat: api.Window.resizeTo
translation_of: Web/API/Window/resizeTo
---
{{APIRef}}

**`Window.resizeTo()`** メソッドは、ウィンドウのサイズを動的に変更します。

## 構文

```js
resizeTo(width, height)
```

### 引数

- `width`
  - : 整数で、新しい {{domxref("window.outerWidth","outerWidth")}} （スクロールバーやタイトルバーなどを含む大きさ）をピクセル数で表します。
- `height`
  - : 整数で、新しい {{domxref("window.outerHeight","outerHeight")}} （スクロールバーやタイトルバーなどを含む大きさ）をピクセル数で表します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この関数は、利用可能な画面の 1/4 を占めるようにウィンドウをリサイズします。 {{domxref("Screen.availWidth")}} および {{domxref("Screen.availHeight")}} プロパティを参照してください。

```js
function quarter() {
  window.resizeTo(
    window.screen.availWidth / 2,
    window.screen.availHeight / 2
  );
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

注: **`window.open()`** によって作成されていないウィンドウまたはタブのサイズを変更することはできません。また、ウィンドウに複数のタブがある場合、サイズを変更することはできません。

## 関連情報

- {{domxref("window.resizeBy()")}}
