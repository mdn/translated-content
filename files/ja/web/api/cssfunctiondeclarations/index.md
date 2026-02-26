---
title: CSSFunctionDeclarations
slug: Web/API/CSSFunctionDeclarations
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

**`CSSFunctionDeclarations`** は [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)のインターフェイスで、{{cssxref("@function")}} 本体に含む CSS 宣言の連続したものを表します。

この中には [CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)や、`@function` 本体内の `results` 記述子の値を含めることができますが、{{cssxref("@media")}} などのブロックや、入れることができるアットルールは含みません。宣言のセットの途中に含まれるこのようなブロックは、[複数の `CSSFunctionDeclarations`](#複数の_cssfunctiondeclarations) のデモにあるように、本体コンテンツが別個の `CSSFunctionDeclarations` オブジェクトになります。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには {{domxref("CSSRule")}} から継承したプロパティがあります。_

- {{domxref("CSSFunctionDeclarations.style")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : {{cssxref("@function")}} の本体で有効な記述子を表す {{domxref("CSSFunctionDescriptors")}} オブジェクトを返します。

## 例

### 基本的な `CSSFunctionDeclarations` の使い方

この例では、CSS カスタム関数を定義し、CSSOM を使用してその宣言にアクセスします。

#### CSS

この CSS では、{{cssxref("@function")}} アットルールを用いてカスタム関数を定義しています。この関数は `--lighter()` と呼ばれ、入力された色の明るさを増したバージョンを出力します。`--lighter()` は 2 つの引数として {{cssxref("&lt;color&gt;")}} と {{cssxref("&lt;number&gt;")}} を取ります。[相対色構文](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)を用いて生成された {{cssxref("color_value/oklch", "oklch()")}} 色を返します。入力された色を `oklch()` 色に変換し、その明度チャンネルを入力された数値分だけ増加させます。

```css live-sample___cssfunctiondeclarations-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  --someVar: 100;
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

関数内でローカル[カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) `--someVar` も設定しています。これは使用されませんが、`@function` 本体内で複数の宣言が連続して利用できる場合に何が起こるかを示しています。

#### JavaScript

スクリプトはまず、{{domxref("HTMLStyleElement.sheet")}} を使用してこの文書に添付されたスタイルシートへの参照を取得します。次に、{{domxref("CSSStylesheet.cssRules")}} を通じて、スタイルシート内の唯一のルールである `CSSFunctionRule` への参照を取得します。

次に、関数内で唯一の連続した宣言群を表す `CSSFunctionDeclarations` オブジェクトを {{domxref("CSSGroupingRule.cssRules", "cssRules[0]")}} で参照し、その記述子の情報を {{domxref("CSSFunctionDeclarations.style")}} で取得した後、記述子の長さおよびスタイル情報を参照します。この情報はすべてコンソールにログ出力されます。

```js live-sample___cssfunctiondeclarations-basics
// CSSFunctionRule を取得
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// CSSFunctionDeclarations と CSSFunctionDescriptors へのアクセス
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.length);
console.log(cssFunc.cssRules[0].style.result);
```

もっとも注目すべきことは次の通りです。

- `length` プロパティは `2` となります。これは記述子のテキストが 2 つの部分（`--someVar: 100;` と `result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);`）から構成されているためです。
- `result` プロパティは、`@function` 本体の `result` 記述子と等しく、これは `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` です。

### 複数の `CSSFunctionDeclarations`

この例では、一連の宣言の途中に挿入された `@media` アットルールが、2 つの `CSSFunctionDeclarations` オブジェクトを生成する様子を示します。

#### CSS

この CSS では仕様書から引用した `@function` の例 `--bar()` を示しています。これは特に機能はしませんが、`@media` ブロックで別個の宣言を特徴としています。

```css live-sample___multiple-cssfunctiondeclarations
@function --bar() {
  --x: 42;
  result: var(--y);
  @media (width > 1000px) {
    /* ... */
  }
  --y: var(--x);
}
```

#### JavaScript

スクリプトはまず、{{domxref("HTMLStyleElement.sheet")}} を通じて文書に添付されたスタイルシートへの参照を取得し、次に {{domxref("CSSStylesheet.cssRules")}} を通じてスタイルシート内の唯一のルールである `CSSFunctionRule` への参照を取得します。

次に、{{domxref("CSSGroupingRule.cssRules")}} にアクセスし、その値をコンソールにログ出力します。これにより、3 つのオブジェクトを含む {{domxref("CSSRuleList")}} オブジェクトが返されます。

- `CSSFunctionDeclarations` オブジェクトで `--x: 42;result: var(--y);` の部分を表すもの。
- {{domxref("CSSMediaRule")}} オブジェクトで `@media` アットルールを表すもの。
- 2 番目の `CSSFunctionDeclarations` オブジェクトで `--y: var(--x);` の部分を表すもの。

```js live-sample___multiple-cssfunctiondeclarations
// CSSFunctionRule を取得
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// 両方の CSSFunctionDeclarations にアクセス
console.log(cssFunc.cssRules);
```

次に、それぞれの `CSSFunctionDeclarations` オブジェクトに関するいくつかの詳細をコンソールにログ出力します。具体的には、オブジェクト自体、その `style` プロパティに含まれる {{domxref("CSSFunctionDescriptors")}} オブジェクト、および {{domxref("CSSFunctionDescriptors.result")}} プロパティです。

```js live-sample___multiple-cssfunctiondeclarations
console.log(cssFunc.cssRules[0]); // 1 つ目の CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);

console.log(cssFunc.cssRules[2]); // 2 つ目の CSSFunctionDeclarations
console.log(cssFunc.cssRules[2].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[2].style.result);
```

2 つ目の場合では、`result` は空文字列を返します。これは、2 つ目の宣言部分に `result` 記述子が含まれていないためです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@function")}}
- {{domxref("CSSFunctionRule")}}
- {{domxref("CSSFunctionDescriptors")}}
