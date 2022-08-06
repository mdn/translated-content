---
title: Window.resizeBy()
slug: Web/API/Window/resizeBy
tags:
  - API
  - CSSOM View
  - メソッド
  - NeedsMarkupWork
  - リファレンス
  - Window
browser-compat: api.Window.resizeBy
translation_of: Web/API/Window/resizeBy
---
{{APIRef}}

**`Window.resizeBy()`** メソッドは、現在のウィンドウを指定した大きさにリサイズします。

## 構文

```js
resizeBy(xDelta, yDelta)
```

### 引数

- `xDelta` はウィンドウを水平方向に広げるピクセル数です。
- `yDelta` はウィンドウを垂直方向に広げるピクセル数です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// Shrink the window
window.resizeBy(-200, -200);
```

## メモ

このメソッドは、ウィンドウの大きさを現在の大きさからの相対値で変更します。ウィンドウの大きさを絶対的な値で変更する場合は {{domxref("window.resizeTo()")}} を使用してください。

### 外部ウィンドウの生成とリサイズ

セキュリティ上の理由から、 Firefox では、ウィンドウが `window.open()` によって生成されていない場合や、複数のタブを含む場合に、ウェブサイトがブラウザー内のウィンドウの既定のサイズを変更することができなくなりました。この変更の詳細については、互換性一覧表を参照してください。

`window.open()` によってウィンドウを作成しても、 **既定ではリサイズできません。** ウィンドウをリサイズ可能にするには、 `"resizable"` 特性を使用してウィンドウを開く必要があります。

```js
// リサイズ可能なウィンドウを作成
myExternalWindow = window.open("http://myurl.domain", "myWindowName", "resizable");

// ウィンドウを 500x500 にリサイズ
myExternalWindow.resizeTo(500, 500);

// ウィンドウをより小さく 400x400 にする
myExternalWindow.resizeBy(-100, -100);
```

作成するウィンドウは、「同一オリジンポリシー」を尊重する必要があります。開いたウィンドウと現在のウィンドウのオリジンが同じでない場合、そのウィンドウ/タブの大きさを変更したり、情報にアクセスしたりすることはできません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
