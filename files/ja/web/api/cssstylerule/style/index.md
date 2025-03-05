---
title: CSSStyleRule.style
slug: Web/API/CSSStyleRule/style
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{ APIRef("CSSOM") }}

**`style`** は読み取り専用プロパティで、この {{ DOMXref("CSSStyleRule") }} の[宣言ブロック](https://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block)のための {{ domxref("CSSStyleDeclaration") }} インターフェイスです。

## 値

{{domxref("CSSStyleDeclaration")}} オブジェクトで、次のプロパティがあります。

- computed flag
  - : 未設定。
- declarations
  - : このルール内で宣言された宣言で、指定された順番であり、個別指定プロパティに展開された一括指定プロパティです。
- parent CSS rule
  - : コンテキストオブジェクトで、 [this](https://heycam.github.io/webidl/#this) の別名です。
- owner node
  - : null です。

## 例

この CSS は 1 つのスタイルルールを含んでいます。これは最初の {{domxref("CSSRule")}} となり、 `document.styleSheets[0].cssRules` で返されます。
従って、 `myRules[0].style` は `h1` に定義された宣言を表す {{domxref("CSSStyleDeclaration")}} をを返します。

```css
h1 {
  color: pink;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); // a CSSStyleDeclaration representing the declarations on the h1.
```

> [!NOTE]
> 宣言ブロックは、中括弧内に現れるスタイルルールの一部で、実際にスタイル定義を提供する部分です（セレクターについては、中括弧の前に来る部分）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
