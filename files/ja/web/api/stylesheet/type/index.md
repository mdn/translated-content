---
title: StyleSheet.type
slug: Web/API/StyleSheet/type
---

{{ApiRef}}

## 概要

そのスタイルシートの `type` 属性の値を取得 / 設定します。

## 構文

```
string = stylesheet.type;
```

## 例

```js
var ss = document.styleSheets[0]; // 文書中の最初のスタイルシートを参照

ss.type = "text/css"; // 設定
alert( ss.type ); // 取得
```

## 仕様書

- [type](http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-type)
