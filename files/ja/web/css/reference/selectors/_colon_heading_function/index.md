---
title: CSS `:heading()` 擬似クラス
short-title: :heading()
slug: Web/CSS/Reference/Selectors/:heading_function
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{SeeCompatTable}}

**`:heading()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、[見出し要素](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)のうち、カンマ区切りの整数のリストとレベルが一致するものすべてを表します。これにより、特定の見出しレベルの要素を個別に一致させてスタイルを設定するのではなく、まとめてスタイルを設定することができます。

> [!NOTE]
> 関数型擬似クラス `:heading()` は、クラスセレクターと同じ[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity#how_is_specificity_calculated)、つまり `0-1-0` を持ちます。例えば、`section:heading()` の詳細度は `0-1-1` となります。

## 構文

```css-nolint
:heading( <integer># ) {
  /* ... */
}
```

### 引数

`:heading()` 擬似クラス関数は、スタイル設定を行う見出しレベルを表す {{cssxref("&lt;integer&gt;")}} のカンマ区切りリストを受け取ります。

## 使用上のメモ

`:heading()` 関数型擬似クラスは、意味的に見出しとして認識される要素にのみ一致します。[`role="heading"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) や ['aria-level'](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) 属性を使用している要素には一致しません。

ブラウザーが異なる公開見出しレベルを算出する場合、`:heading()` で使用される見出しレベルは、要素の[要素型セレクター](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors)とは異なることがあります。例えば、`h1:heading(3)` は、レベル 3 の見出しとして公開されている `<h1>` 要素すべてに一致します。

## 例

### 特定の見出しレベルを選択

この例では、カンマ区切りの値のリストを使用して、奇数レベルの見出し（`<h1>` および `<h3>`）と偶数レベルの見出し（`<h2>` および `<h4>`）を対象としています。

```html
<h1>見出し 1</h1>
<h2>見出し 2</h2>
<h3>見出し 3</h3>
<h4>見出し 4</h4>
```

```css
:heading(1, 3) {
  color: tomato;
}
:heading(2, 4) {
  color: slateblue;
}
```

{{EmbedLiveSample("selecting_specific_heading_levels", "", "215")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":heading")}}
