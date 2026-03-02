---
title: "Window: moveTo() メソッド"
short-title: moveTo()
slug: Web/API/Window/moveTo
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

**`moveTo()`** は {{domxref("Window")}} インターフェイスのメソッドで、現在のウィンドウを指定された座標へ移動します。

> [!NOTE]
> この関数はウィンドウを絶対位置へ移動します。それに対して、 {{domxref("window.moveBy()")}} はウィンドウを現在の位置からの相対位置へ移動します。

## 構文

```js-nolint
moveTo(x, y)
```

### 引数

- `x`
  - : 移動先の水平座標です。
- `y`
  - : 移動先の垂直座標です。

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

Firefox 7 より、ウェブサイトは[以下の場合](https://bugzil.la/565541#c24)にブラウザーウィンドウを移動できなくなりました。

1. {{domxref("Window.open()")}} で作成されたものではないウィンドウやタブを移動することはできません。
2. ウィンドウに複数のタブがある場合は、ウィンドウやタブを移動することができません。

> [!NOTE]
> この関数はウィンドウを同期的に移動しない可能性があります。
> 一部の環境（Wayland やモバイルなど）では、ウィンドウが全く移動しない可能性があります。現在、移動イベントを監視する方法は存在しません。詳細は [CSS ワーキンググループ課題 #7693](https://github.com/w3c/csswg-drafts/issues/7693) を参照してください。

## 関連情報

- {{domxref("Window.moveBy()")}}
