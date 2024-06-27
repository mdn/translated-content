---
title: StyleSheet：media 属性
slug: Web/API/StyleSheet/media
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSSOM")}}

{{domxref("StyleSheet")}} 接口的 **`media`** 属性指定样式信息的预期目标媒体。它是一个只读的、类数组 `MediaList` 对象，可以使用 `deleteMedium()` 删除，也可以使用 `appendMedium()` 添加。

## 值

一个只读的类数组 `MediaList` 对象。

## 示例

```html
<!doctype html>
<html lang="zh-CN">
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
      // 这将输出：
      // document.styleSheets[0].media: {"0":"screen"}
      // document.styleSheets[0].media: {"0":"screen","1":"handheld"}
      // document.styleSheets[1].media: {"0":"screen","1":"print"}
      // document.styleSheets[1].media: {"0":"screen"}
    </script>
  </body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
