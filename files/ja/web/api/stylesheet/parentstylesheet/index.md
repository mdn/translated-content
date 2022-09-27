---
title: StyleSheet.parentStyleSheet
slug: Web/API/StyleSheet/parentStyleSheet
---

{{ApiRef}}

## 概要

対象のスタイルシートを含む親スタイルシートが存在する場合は、それを返します。

## 構文

```
parentStyleSheetObj = stylesheet.parentStyleSheet
```

## 注記

対象スタイルシートがトップレベルのスタイルシートの場合、または対象スタイルシートがインクルードをサポートしていない場合、戻り値は `null` となります。

## 例

```js
var stylesheet = document.styleSheets[0]; // 文書中の最初のスタイルシート


// 親スタイルシートが存在する場合はそれを、
// 無ければ自身への参照を変数 sheet に代入しています。
if (stylesheet.parentStyleSheet) {
  sheet = stylesheet.parentStyleSheet;
} else {
  sheet = stylesheet;
}
```

## 仕様書

- [parentStyleSheet](http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-parentStyleSheet)
- [CSS Object Model (CSSOM)](http://dev.w3.org/csswg/cssom/#widl-StyleSheet-parentStyleSheet)
