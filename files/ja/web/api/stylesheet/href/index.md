---
title: StyleSheet.href
slug: Web/API/StyleSheet/href
---

{{ApiRef}}

## 概要

スタイルシートの URI を返します。

## 構文

```
uri = stylesheet.href
```

- `uri` : スタイルシートの URI

## 例

以下に示す HTML をローカルに配置して表示し、ボタンを押下した場合 `file:////C:/Windows/Desktop/example.css` などの様な文字列が表示されます。

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="example.css" />
<script>
function sref() {
  alert(document.styleSheets[0].href);
}
</script>
</head>

<body>
  <button onclick="sref()">alert(document.styleSheets[0].href) を実行</button>
</body>

</html>
```

## 注記

スタイルシートがリンクされたものである場合は、その {{HTMLElement("style")}} 要素の `href` 属性の示す位置が返ります。インラインスタイルのシートの場合の戻り値は `NULL` となります。

このプロパティは Firefox 、 Opera 、 Google Chrome 、 Safari に於いては読取専用ですが、 Internet Explorer では読取 / 書込ともに可能となっています。

## 仕様書

- [href](http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-href)
