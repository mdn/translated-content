---
title: "UIEvent: which プロパティ"
short-title: which
slug: Web/API/UIEvent/which
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

**`UIEvent.which`** は {{domxref("UIEvent")}} インターフェイスの読み取り専用プロパティで、マウスの押されたボタンを示す数値、`keyCode` の数値、キーボードで押されたキーの文字コード (`charCode`) のいずれかを返します。

## 値

### KeyboardEvent の値 {{Non-standard_Inline}}

{{domxref("KeyboardEvent")}} においては、 `event.which` は、英数字キーと非英数字キーのどちらが押されたかに応じて、押された特定のキーに対する数値のコードを含んでいます。
詳しくは非推奨の {{domxref("KeyboardEvent.charCode")}} と {{domxref("KeyboardEvent.keyCode")}} を参照してください。

> [!NOTE]
> 新しいコードでは {{domxref("KeyboardEvent.key")}} または {{domxref("KeyboardEvent.code")}} を検討してください。

### MouseEvent の値 {{Non-standard_Inline}}

{{domxref("MouseEvent")}} においては、 `event.which` は押されたボタンを表す数値型です。

- `0`: No button
- `1`: 左ボタン
- `2`: 中央ボタン
- `3`: 右ボタン

左利き用に設定されたマウスの場合、ボタンの動作は逆になります。この場合、値は右から左に読み取られます。

> [!NOTE]
> 新しいコードでは {{domxref("MouseEvent.button")}} を検討してください。

## 例

```html
<html lang="ja">
  <head>
    <title>charCode/keyCode/which の例</title>

    <script>
      function showKeyPress(evt) {
        alert(
          `onkeypress ハンドラー:\n` +
            `keyCode プロパティ: ${evt.keyCode}\n` +
            `which プロパティ: ${evt.which}\n` +
            `charCode プロパティ: ${evt.charCode}\n` +
            `押されたキーの文字: ${String.fromCharCode(evt.charCode)}\n`,
        );
      }

      function keyDown(evt) {
        alert(
          `onkeydown ハンドラー:\n` +
            `keyCode プロパティ: ${evt.keyCode}\n` +
            `which プロパティ: ${evt.which}\n`,
        );
      }
    </script>
  </head>

  <body onkeypress="showKeyPress(event);" onkeydown="keyDown(event);">
    <p>何かキーを押してください。</p>
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
