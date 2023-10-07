---
title: StyleSheet.media
slug: Web/API/StyleSheet/media
l10n:
  sourceCommit: 84fc68f1674c9b2d1708fb38dc2824e228f9bb3f
---

{{APIRef("CSSOM")}}

**`media`** は {{domxref("StyleSheet")}} インターフェイスのプロパティで、スタイル情報の対象となる出力先メディアを指定します。これは読み取り専用の配列風の `MediaList` オブジェクトで、 `deleteMedium()` で削除し、 `appendMedium()` で追加することが可能です。

## 値

読み取り専用、配列風の `MediaList` オブジェクトです。

## 例

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Test page</title>
    <link rel="stylesheet" href="document.css" media="screen" />
    <style rel="stylesheet" media="screen, print">
      body {
        background-color: snow;
      }
    </style>
  </head>
  <body>
    <script>
      for (let i = 0; i < document.styleSheets.length; i++) {
        console.log(
          `document.styleSheets[${i}].media: ${JSON.stringify(
            document.styleSheets[i].media,
          )}`,
        );
        if (iSheetIndex === 0)
          document.styleSheets[i].media.appendMedium("handheld");
        if (iSheetIndex === 1)
          document.styleSheets[i].media.deleteMedium("print");
        console.log(
          `document.styleSheets[${i}].media: ${JSON.stringify(
            document.styleSheets[i].media,
          )}`,
        );
      }
      // This will log:
      // document.styleSheets[0].media: {"0":"screen"}
      // document.styleSheets[0].media: {"0":"screen","1":"handheld"}
      // document.styleSheets[1].media: {"0":"screen","1":"print"}
      // document.styleSheets[1].media: {"0":"screen"}
    </script>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
