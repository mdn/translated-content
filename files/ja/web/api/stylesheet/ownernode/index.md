---
title: StyleSheet.ownerNode
slug: Web/API/StyleSheet/ownerNode
---

{{APIRef("CSSOM")}}

## 概要

**ownerNode** は、このスタイルシートを document と関連付けているノードを返します。

## 構文

```
objRef = stylesheet.ownerNode
```

## 例

```
<html>
 <head>
  <link rel="StyleSheet" href="example.css" type="text/css" />
  <script>
   function stilo() {
    alert(document.styleSheets[0].ownerNode);
   }
  </script>
 </head>
 <body>
   <button onclick="stilo()">ss</button>
 </body>
</html>
// displays "object HTMLLinkElement"
```

## 補記

HTML の場合、**ownerNode** は、相当する {{HTMLElement("link")}} 要素または {{HTMLElement("style")}} 要素になるでしょう。XML の場合、リンク処理命令になるでしょう。他のスタイルシートに含まれるスタイルシートの場合、この属性の値は `NULL` になります。

## 仕様書

DOM Level 2 Styles - STYLESHEET
