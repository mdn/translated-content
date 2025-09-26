---
title: StyleSheet.href
slug: Web/API/StyleSheet/href
l10n:
  sourceCommit: 84fc68f1674c9b2d1708fb38dc2824e228f9bb3f
---

{{APIRef("CSSOM")}}

**`href`** は {{domxref("StyleSheet")}} インターフェイスのプロパティで、スタイルシートの場所を返します。

## 値

文字列で、このスタイルシートの URI を保持します。

## 例

ローカルで下記のコードを実行してください。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>href example</title>
    <link rel="styleSheet" href="example.css" />
    <script>
      function sref() {
        alert(document.styleSheets[0].href);
      }
    </script>
  </head>
  <body>
    <div class="thunder">Thunder</div>
    <button onclick="sref()">ss</button>
  </body>
</html>
```

"file:////C:/Windows/Desktop/example.css" を返します。

## メモ

スタイルシートがリンクされたスタイルシートの場合、この属性の値はその位置となります。
インラインスタイルシートの場合、この属性の値は `NULL` です。

このプロパティは Firefox、 Opera、 Google Chrome、 Safari では読み取り専用ですが、 Internet Explorer では読み取り / 書き込みともに可能となっています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
