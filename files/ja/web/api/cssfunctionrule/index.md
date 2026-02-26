---
title: CSSFunctionRule
slug: Web/API/CSSFunctionRule
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

**`CSSFunctionRule`** は [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)のインターフェイスで、CSS の {{cssxref("@function")}}（カスタム関数）[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには {{domxref("CSSGroupingRule")}} から継承したプロパティがあります。_

- {{domxref("CSSFunctionRule.name")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : このカスタム関数の名前を表す文字列を返します。
- {{domxref("CSSFunctionRule.returnType")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : このカスタム関数の返値の型を表す文字列を返します。

## インスタンスメソッド

_このインターフェイスには {{domxref("CSSGroupingRule")}} から継承したメソッドがあります。_

- {{domxref("CSSFunctionRule.getParameters()")}} {{experimental_inline}}
  - : このカスタム関数の引数を表すオブジェクトの配列を返します。

## 例

### 基本的な `CSSFunctionRule` の使い方

この例では、CSS カスタム関数を定義し、CSSOM を使用してアクセスします。

#### CSS

この CSS では、{{cssxref("@function")}} アットルールを使用してカスタム関数を定義しています。この関数は `--lighter()` と呼ばれ、入力された色の明るさを調整した結果を返します。`--lighter()` は {{cssxref("&lt;color&gt;")}} と {{cssxref("&lt;number&gt;")}} の 2 つの引数を受け入れます。この関数は、[相対色構文](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)を使用して作成された {{cssxref("color_value/oklch", "oklch()")}} 色を返します。入力された色は `oklch()` 色に変換され、その明度チャンネルが入力された数値分だけ増加されます。

```css live-sample___cssfunctionrule-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

このスクリプトはまず、{{domxref("HTMLStyleElement.sheet")}} を使用して文書に添付されたスタイルシートへの参照を取得し、次に {{domxref("CSSStylesheet.cssRules")}} を通じてスタイルシート内の唯一のルールである `CSSFunctionRule` への参照を取得します。その後、`CSSFunctionRule` のそれぞれのメンバーをコンソールにログ出力します。

```js live-sample___cssfunctionrule-basics
// CSSFunctionRule を取得
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// CSSFunctionRule メンバーにアクセス
console.log(cssFunc.name);
console.log(cssFunc.returnType);
console.log(cssFunc.getParameters());
```

- `name` プロパティは `--lighter` となります。
- `returnType` プロパティは `<color>` となります。
- `getParameters()` メソッドは次のような配列を返します。

  ```js
  [
    { name: "--color", type: "<color>" },
    { defaultValue: "0.2", name: "--lightness-adjust", type: "<number>" },
  ];
  ```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@function")}}
- {{domxref("CSSFunctionDescriptors")}}
- {{domxref("CSSFunctionDeclarations")}}
