---
title: CSSNestedDeclarations
slug: Web/API/CSSNestedDeclarations
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{APIRef("CSSOM")}}

**`CSSNestedDeclarations`** は [CSS ルール API](/ja/docs/Web/API/CSSRule) のインターフェイスで、入れ子になった {{domxref("CSSRule")}} をグループ化するために使用されます。

このインターフェイスにより、 [CSS オブジェクトモデル (CSSOM)](/ja/docs/Web/API/CSS_Object_Model) は、入れ子になった CSS ルールを持つ CSS 文書の構造を反映し、ルールが宣言された順に確実に構文解析および評価が行われるようにします。

> [!NOTE]
> このインターフェイスに対応していない実装では、入れ子になったルールが間違った順序で構文解析される可能性があります。
> 詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSRule")}} から継承したプロパティがあります。_

- {{domxref("CSSNestedDeclarations.style")}} {{ReadOnlyInline}}
  - : 入れ子になったルールの値を返します。

## インスタンスメソッド

_固有のメソッドはありません。祖先である {{domxref("CSSRule")}} から継承したメソッドがあります。_

## 例

### CSS

下記の CSS には、2 つの宣言と 1 つのメディアクエリーを含むセレクター `.foo` が含まれています。

```css
.foo {
  background-color: silver;
  @media screen {
    color: tomato;
  }
  color: black;
}
```

これは、[CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model) 内のいくつもの JavaScript オブジェクトで表されます。

- {{domxref("CSSStyleRule")}} オブジェクトで、 `background-color: silver` ルールを表します。
  これは `document.styleSheets[0].cssRules[0]` で返されます。
- {{domxref("CSSMediaRule")}} オブジェクトで、`@media screen` ルールを表します。これは `document.styleSheets[0].cssRules[0].cssRules[0]` で返されます。
  - `CSSMediaRule` オブジェクトには `CSSNestedDeclaration` オブジェクトが含まれており、これは `@media screen` ルールの入れ子になっている `color: tomato` ルールを表します。
    これは `document.styleSheets[0].cssRules[0].cssRules[0].cssRules[0]` で返されます。
- 最後のルールは `CSSNestedDeclaration` オブジェクトであり、スタイルシート内の `color: black` ルールを表します。これは `document.styleSheets[0].cssRules[0].cssRules[1]` で返されます。

> [!NOTE]
> 最初の `CSSNestedDeclaration` の後のすべての最上位スタイルも、[CSS 入れ子の宣言ルール](/ja/docs/Web/CSS/Guides/Nesting/Using#入れ子の宣言ルール)に従うために、`CSSNestedDeclaration` オブジェクトとして表現する必要があります。

### CSSOM （CSS オブジェクトモデル）

```plain
↳ CSSStyleRule
  .style
    - background-color: silver
  ↳ CSSMediaRule
    ↳ CSSNestedDeclarations
      .style (CSSStyleDeclaration, 1) =
      - color: tomato
  ↳ CSSNestedDeclarations
    .style (CSSStyleDeclaration, 1) =
      - color: black
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CSSNestedDeclarations.style")}}
- [入れ子の宣言ルール](/ja/docs/Web/CSS/Guides/Nesting/Using#入れ子の宣言ルール)
