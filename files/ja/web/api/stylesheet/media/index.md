---
title: StyleSheet.media
slug: Web/API/StyleSheet/media
---

{{APIRef("CSSOM")}}

**StyleSheet.media** は、スタイル情報の対象として想定するメディアを指定します。これは読み取り専用で配列風の `MediaList` オブジェクトであり、 `deleteMedium()` で削除したり `appendMedium()` で追加したりすることができます。

## 例

```
<!doctype html>
<html>
<head>
<link rel="stylesheet" href="document.css" type="text/css" media="screen" />
<style rel="stylesheet" type="text/css" media="screen, print">
body  { background-color: snow; }
</style>
</head>
<body>

<script>
for (var iSheetIndex = 0; iSheetIndex < document.styleSheets.length; iSheetIndex++)
 {
  console.log('document.styleSheets[' + String(iSheetIndex) + '].media: ' +
   JSON.stringify(document.styleSheets[iSheetIndex].media));
  if (iSheetIndex === 0)
    document.styleSheets[iSheetIndex].media.appendMedium('handheld');
  if (iSheetIndex === 1)
    document.styleSheets[iSheetIndex].media.deleteMedium('print');
  console.log('document.styleSheets[' + String(iSheetIndex) + '].media: ' +
   JSON.stringify(document.styleSheets[iSheetIndex].media));
 }
/*
will log:
document.styleSheets[0].media: {"0":"screen"}
document.styleSheets[0].media: {"0":"screen","1":"handheld"}
document.styleSheets[1].media: {"0":"screen","1":"print"}
document.styleSheets[1].media: {"0":"screen"}
*/
</script>

</body>
</html>
```

## 仕様書

DOM Level 2 Styles - STYLESHEET

[W3C: Document Object Model Style Sheets - MediaList](https://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-MediaList)
