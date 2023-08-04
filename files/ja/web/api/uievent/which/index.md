---
title: UIEvent.which
slug: Web/API/UIEvent/which
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

**`UIEvent.which`** は {{domxref("UIEvent")}} インターフェイスの読み取り専用プロパティで、マウスの押されたボタンを示す数値、`keyCode` の数値、キーボードで押されたキーの文字コード (`charCode`) のいずれかを返します。

## 値

### KeyboardEvent の値 {{Non-standard_Inline}}

{{domxref("KeyboardEvent")}} においては、 `event.which` は、英数字キーと非英数字キーのどちらが押されたかに応じて、押された特定のキーに対する数値のコードを含んでいます。
詳しくは非推奨の {{domxref("KeyboardEvent.charCode")}} と {{domxref("KeyboardEvent.keyCode")}} を参照してください。

> **メモ:** 新しいコードでは {{domxref("KeyboardEvent.key")}} または {{domxref("KeyboardEvent.code")}} を検討してください。

### MouseEvent の値 {{Non-standard_Inline}}

{{domxref("MouseEvent")}} においては、 `event.which` は押されたボタンを表す数値型です。

- `0`: No button
- `1`: 左ボタン
- `2`: 中央ボタン
- `3`: 右ボタン

左利き用に設定されたマウスの場合、ボタンの動作は逆になります。この場合、値は右から左に読み取られます。

> **メモ:** 新しいコードでは {{domxref("MouseEvent.button")}} を検討してください。

## 例

```html
<html lang="en">
  <head>
    <title>charCode/keyCode/which example</title>

    <script>
      function showKeyPress(evt) {
        alert(
          `onkeypress handler:\n` +
            `keyCode property: ${evt.keyCode}\n` +
            `which property: ${evt.which}\n` +
            `charCode property: ${evt.charCode}\n` +
            `Character Key Pressed: ${String.fromCharCode(evt.charCode)}\n`
        );
      }

      function keyDown(evt) {
        alert(
          `onkeydown handler:\n` +
            `keyCode property: ${evt.keyCode}\n` +
            `which property: ${evt.which}\n`
        );
      }
    </script>
  </head>

  <body onkeypress="showKeyPress(event);" onkeydown="keyDown(event);">
    <p>Please press any key.</p>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("KeyboardEvent")}}
- {{domxref("MouseEvent")}}
