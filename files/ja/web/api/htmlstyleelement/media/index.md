---
title: "HTMLStyleElement: media プロパティ"
short-title: media
slug: Web/API/HTMLStyleElement/media
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

**`HTMLStyleElement.media`** プロパティは、スタイル情報の対象と想定されるメディアを指定します。

## 値

単一のメディアまたはカンマで区切られたリストを記述した文字列です。

## 例

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Test page</title>

    <link
      id="LinkedStyle"
      rel="stylesheet"
      href="document.css"
      media="screen" />
    <style id="InlineStyle" rel="stylesheet" media="screen, print">
      p {
        color: blue;
      }
    </style>
  </head>
  <body>
    <script>
      alert("LinkedStyle: " + document.getElementById("LinkedStyle").media); // 'screen'
      alert("InlineStyle: " + document.getElementById("InlineStyle").media); // 'screen, print'
    </script>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
