---
title: Window.moveBy()
slug: Web/API/Window/moveBy
tags:
  - API
  - CSSOM View
  - メソッド
  - リファレンス
  - Window
browser-compat: api.Window.moveBy
translation_of: Web/API/Window/moveBy
---
{{APIRef}}

**`moveBy()`** は {{domxref("Window")}} インターフェイスのメソッドで、現在のウィンドウを指定された量だけ移動します。

> **Note:** この関数はウィンドウを現在の位置からの相対位置で移動します。
> それに対して、 {{domxref("window.moveTo()")}} はウィンドウを絶対位置へ移動します。

## 構文

```js
moveBy(deltaX, deltaY)
```

### 引数

- `deltaX` は、ピクセル数でウィンドウを水平方向に移動させる量を示します。正の値は右へ、負の値は左へ移動します。
- `deltaY` は、ピクセル数でウィンドウを垂直方向に移動させる量を示します。正の値は下方向、負の値は上方向です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、ウィンドウを右に 10 ピクセル、上に 10 ピクセル移動させています。

```js
function budge() {
  moveBy(10, -10);
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

- {{domxref("Window.moveTo()")}}
