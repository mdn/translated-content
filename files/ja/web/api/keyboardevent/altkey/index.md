---
title: "KeyboardEvent: altKey プロパティ"
short-title: altKey
slug: Web/API/KeyboardEvent/altKey
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

**`KeyboardEvent.altKey`** は読み取り専用のプロパティで、イベント発生時に <kbd>alt</kbd> キー（macOS では <kbd>Option</kbd> または <kbd>⌥</kbd>）が押されたか (`true`) または押されていないか (`false`) を示す論理値です。

## 値

論理値です。

## 例

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>altKey の例</title>

    <script>
      function showChar(e) {
        alert(
          "Key KeyDown: " +
            String.fromCharCode(e.charCode) +
            "\n" +
            "charCode: " +
            e.charCode +
            "\n" +
            "ALT key KeyDown: " +
            e.altKey +
            "\n",
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
