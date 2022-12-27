---
title: KeyboardEvent.altKey
slug: Web/API/KeyboardEvent/altKey
---

{{APIRef("UI Events")}}

**`KeyboardEvent.altKey`** は読み取り専用のプロパティで、イベント発生時に <kbd>alt</kbd> キー（macOS では <kbd>Option</kbd> または <kbd>⌥</kbd>）が押されたか (`true`) または押されていないか (`false`) を示す論理値です。

## 値

論理値です。

## 例

```js
<html>
<head>
<title>altKey の例</title>

<script type="text/javascript">

function showChar(e){
  alert(
    "Key KeyDown: " + String.fromCharCode(e.charCode) + "\n"
    + "charCode: " + e.charCode + "\n"
    + "ALT key KeyDown: " + e.altKey + "\n"
  );
}

</script>
</head>

<body onkeydown="showChar(event);">
<p>
ALT キーを押したまま、または押さずに、任意の文字キーを押してください。<br />
また、 SHIFT キーと ALT キーを同時に使用することもできます。
</p>
</body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("KeyboardEvent") }}
