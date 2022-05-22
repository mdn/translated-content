---
title: Window.moveTo()
slug: Web/API/Window/moveTo
tags:
  - API
  - CSSOM View
  - Method
  - Reference
  - Window
browser-compat: api.Window.moveTo
translation_of: Web/API/Window/moveTo
---
{{APIRef}}

**`moveTo()`** は {{domxref("Window")}} インターフェイスのメソッドで、現在のウィンドウを指定された座標へ移動します。

> **Note:** この関数はウィンドウを絶対位置へ移動します。それに対して、 {{domxref("window.moveBy()")}} はウィンドウを現在の位置からの相対位置へ移動します。

## 構文

```js
moveTo(x, y)
```

### 引数

- `x` は移動先の水平座標です。
- `y` は移動先の垂直座標です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、ウィンドウを画面の左上に移動しています。

```js
function origin() {
  window.moveTo(0, 0);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

Firefox 7 より、ウェブサイトは[以下の場合](https://bugzilla.mozilla.org/show_bug.cgi?id=565541#c24)にブラウザーウィンドウを移動できなくなりました。

1. {{domxref("Window.open()")}} で作成されたものではないウィンドウやタブを移動することはできません。
2. ウィンドウに複数のタブがある場合は、ウィンドウやタブを移動することができません。

## 関連情報

- {{domxref("Window.moveBy()")}}
