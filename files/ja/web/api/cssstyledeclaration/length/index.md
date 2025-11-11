---
title: CSSStyleDeclaration.length
slug: Web/API/CSSStyleDeclaration/length
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{ APIRef("CSSOM") }}

読み取り専用のプロパティで、この CSS 宣言ブロックにあるスタイル宣言の数を整数で表します。

## 値

このインスタンスの親に明示的に設定されているスタイルの数を示す整数です。

## 例

次の例は、以下の HTML 要素に明示的に設定されたスタイルの数を取得します。

```html
<div
  id="div1"
  style="margin: 0 10px; background-color: #CA1; font-family: monospace"></div>
```

JavaScript コード:

```js
const myDiv = document.getElementById("div1");
const divStyle = myDiv.style;
const len = divStyle.length; // 6
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
