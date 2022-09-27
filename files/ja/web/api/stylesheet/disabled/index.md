---
title: StyleSheet.disabled
slug: Web/API/StyleSheet/disabled
---

{{ApiRef}}

## 概要

このプロパティは、そのスタイルシートが無効になっているかどうかを示す真偽値を返します。

## 構文

```
bool = stylesheet.disabled;
```

## 例

```js
var myStyleSheet = document.styleSheets[0];

if (myStyleSheet.disabled) {
 // スタイルシートが無効の場合の処理をここに記述
 // インラインスタイルの適用など…
}
```

## 仕様書

- {{spec("http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-disabled", "DOM 2 Style - disabled", "REC")}}
