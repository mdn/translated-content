---
title: CSSFunctionDescriptors
slug: Web/API/CSSFunctionDescriptors
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

**`CSSFunctionDescriptors`** は [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)のインターフェイスで、{{domxref("CSSFunctionDeclarations")}} で表現された一連の CSS 宣言に含まれる記述子を表します。

`CSSFunctionDescriptors` オブジェクトは {{domxref("CSSFunctionDeclarations.style")}} プロパティからアクセスできます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには {{domxref("CSSStyleDeclaration")}} から継承したプロパティがあります。_

- {{domxref("CSSFunctionDescriptors.result")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : `result` 記述子が関連する一連の宣言の中に存在する場合、それを表す文字列を返します。

## 例

### 基本的な `CSSFunctionDescriptors` の使い方

この例では、CSS カスタム関数を定義し、CSSOM を使用してその宣言にアクセスします。

#### CSS

この CSS では、{{cssxref("@function")}} アットルールを用いてカスタム関数を定義しています。この関数は `--lighter()` と呼ばれ、入力された色の明るさを増したバージョンを出力します。`--lighter()` は 2 つの引数として {{cssxref("&lt;color&gt;")}} と {{cssxref("&lt;number&gt;")}} を取ります。[相対色構文](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)を用いて生成された {{cssxref("color_value/oklch", "oklch()")}} 色を返します。入力された色を `oklch()` 色に変換し、その明度チャンネルを入力された数値分だけ増加させます。

```css live-sample___cssfunctiondescriptors-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

スクリプトはまず、{{domxref("HTMLStyleElement.sheet")}} を使用してこの文書に添付されたスタイルシートへの参照を取得します。次に、{{domxref("CSSStylesheet.cssRules")}} を通じて、スタイルシート内の唯一のルールである `CSSFunctionRule` への参照を取得します。

次に、関数内で唯一の連続した宣言群を表す `CSSFunctionDeclarations` オブジェクトを {{domxref("CSSGroupingRule.cssRules", "cssRules[0]")}} で参照し、その記述子の情報を {{domxref("CSSFunctionDeclarations.style")}} で取得した後、記述子のスタイル情報を参照します。この情報はすべてコンソールにログ出力されます。

```js live-sample___cssfunctiondescriptors-basics
// CSSFunctionRule を取得
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// CSSFunctionDeclarations と CSSFunctionDescriptors へのアクセス
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);
```

特に注目すべきは、`result` プロパティが `@function` 本体の `result` 記述子と等しい点であり、これが `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` であることです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@function")}}
- {{domxref("CSSFunctionRule")}}
- {{domxref("CSSFunctionDeclarations")}}
