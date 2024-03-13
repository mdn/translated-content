---
title: "KeyboardEvent: shiftKey プロパティ"
short-title: shiftKey
slug: Web/API/KeyboardEvent/shiftKey
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

**`KeyboardEvent.shiftKey`** は読み取り専用プロパティで、このイベントが発生したときに <kbd>shift</kbd> キーが押されていたか (`true`) いなかったか (`false`) を示す論理値を返します。

## 値

論理値です。

## 例

```html
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>シフトキーの例</title>

    <script>
      function showChar(e) {
        alert(
          "押されたキー: " +
            String.fromCharCode(e.charCode) +
            "\n" +
            "charCode: " +
            e.charCode +
            "\n" +
            "SHIFT key pressed: " +
            e.shiftKey +
            "\n" +
            "ALT key pressed: " +
            e.altKey +
            "\n",
        );
      }
    </script>
  </head>

  <body onkeypress="showChar(event);">
    <p>
      SHIFT
      キーを押しながら、または押さずに、任意の文字キーを押してください。<br />
      SHIFT キーと ALT キーを併用することもできます。
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
