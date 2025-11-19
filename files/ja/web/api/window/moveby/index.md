---
title: "Window: moveBy() メソッド"
short-title: moveBy()
slug: Web/API/Window/moveBy
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

**`moveBy()`** は {{domxref("Window")}} インターフェイスのメソッドで、現在のウィンドウを指定された量だけ移動します。

> [!NOTE]
> この関数はウィンドウを現在の位置からの相対位置で移動します。
> それに対して、 {{domxref("window.moveTo()")}} はウィンドウを絶対位置へ移動します。

## 構文

```js-nolint
moveBy(deltaX, deltaY)
```

### 引数

- `deltaX`
  - : ピクセル数でウィンドウを水平方向に移動させる量を示します。正の値は右へ、負の値は左へ移動します。
- `deltaY`
  - : ピクセル数でウィンドウを垂直方向に移動させる量を示します。正の値は下方向、負の値は上方向です。

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

Firefox 7 より、ウェブサイトは[以下の場合](https://bugzil.la/565541#c24)にブラウザーウィンドウを移動できなくなりました。

1. {{domxref("Window.open()")}} で作成されたものではないウィンドウやタブを移動することはできません。
2. ウィンドウに複数のタブがある場合は、ウィンドウやタブを移動することができません。

> [!NOTE]
> この関数はウィンドウを同期的に移動しない可能性があります。
> 一部の環境（Wayland やモバイルなど）では、ウィンドウが全く移動しない可能性があります。現在、移動イベントを監視する方法は存在しません。詳細は [CSS ワーキンググループ課題 #7693](https://github.com/w3c/csswg-drafts/issues/7693) を参照してください。

## 関連情報

- {{domxref("Window.moveTo()")}}
