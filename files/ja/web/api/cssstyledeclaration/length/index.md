---
title: CSSStyleDeclaration.length
slug: Web/API/CSSStyleDeclaration/length
---

{{ APIRef("CSSOM") }}

読み取り専用のプロパティで、この CSS 宣言ブロックにあるスタイル宣言の数を整数で表します。

## 構文

```js
var num = styles.length;
```

### 値

このインスタンスの親に明示的に設定されているスタイルの数を示す整数です。

## 例

次の例は、以下の HTML 要素に明示的に設定されたスタイルの数を取得します。

```html
<div id="div1" style="margin: 0 10px; background-color: #CA1; font-family: monospace"></div>
```

JavaScript コード:

```
var myDiv = document.getElementById('div1'); var divStyle = myDiv.style; var len = divStyle.length; // 6
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
