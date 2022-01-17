---
title: UIEvent.which
slug: Web/API/UIEvent/which
tags:
  - API
  - DOM
  - UIEvent
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.UIEvent.which
translation_of: Web/API/UIEvent/which
original_slug: Web/API/MouseEvent/which
---
{{ APIRef("DOM Events") }} {{Non-standard_header}}

**`UIEvent.which`** は {{domxref("UIEvent")}} インターフェイスの読み取り専用プロパティで、マウスの押されたボタンを示す数値、`keyCode` の数値、キーボードで押されたキーの文字コード (`charCode`) のいずれかを返します。

## 値

### {{domxref("KeyboardEvent")}} の値 {{non-standard_inline}}

`event.which` は、英数字キーと非英数字キーのどちらが押されたかに応じて、押された特定のキーに対する数値のコードを含んでいます。
詳しくは非推奨の {{domxref("KeyboardEvent.charCode")}} と {{domxref("KeyboardEvent.keyCode")}} を参照してください。

> **Note:** 新しいコードでは {{domxref("KeyboardEvent.key")}} または {{domxref("KeyboardEvent.code")}} を検討してください。

### {{domxref("MouseEvent")}} の値 {{non-standard_inline}}

押されたボタンを表す数値型です。

- `0`: No button
- `1`: 左ボタン
- `2`: 中央ボタン
- `3`: 右ボタン

左利き用に設定されたマウスの場合、ボタンの動作は逆になります。この場合、値は右から左に読み取られます。

> **Note:** 新しいコードでは {{domxref("MouseEvent.button")}} を検討してください。


## 例

```html
<html>
<head>
<title>charCode/keyCode/which example</title>

<script type="text/javascript">

function showKeyPress(evt) {
alert("onkeypress handler: \n"
      + "keyCode property: " + evt.keyCode + "\n"
      + "which property: " + evt.which + "\n"
      + "charCode property: " + evt.charCode + "\n"
      + "Character Key Pressed: "
      + String.fromCharCode(evt.charCode) + "\n"
     );
}

function keyDown(evt) {
alert("onkeydown handler: \n"
      + "keyCode property: " + evt.keyCode + "\n"
      + "which property: " + evt.which + "\n"
     );
}

</script>
</head>

<body
 onkeypress="showKeyPress(event);"
 onkeydown="keyDown(event);"
>

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
