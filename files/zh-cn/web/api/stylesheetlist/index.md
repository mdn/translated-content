---
title: StyleSheetList
slug: Web/API/StyleSheetList
---

{{APIRef("CSSOM")}}

StyleSheetLists 接口表示一个 StyleSheet 的列表。

这是一个像数组一样的对象，但是不能使用数组方法进行遍历。但是它可以通过 for 循环遍历其下标，或者把它转换成数组。

## 范例

### 使用 for 循环获取文档 [styleSheet](/zh-CN/docs/Web/API/CSSStyleSheet) 对象

```plain
for (var i=0; i < document.styleSheets.length; i++){
  var styleSheet = document.styleSheets[i];
}
```

### 使用 Array 方法获取文档的所有 CSS 规则

```plain
var allCSS =
    [].slice.call(document.styleSheets)
        .reduce(function (prev, styleSheet) {
            if (styleSheet.cssRules) {
                return prev +
                    [].slice.call(styleSheet.cssRules)
                        .reduce(function (prev, cssRule) {
                            return prev + cssRule.cssText;
                        }, '');
            } else {
                return prev;
            }
        }, '');
```
