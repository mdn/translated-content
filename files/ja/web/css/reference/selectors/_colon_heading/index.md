---
title: CSS `:heading` 擬似クラス
short-title: :heading
slug: Web/CSS/Reference/Selectors/:heading
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{SeeCompatTable}}

**`:heading`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、文書内のすべての[見出し要素](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)に一致します。

## 構文

```css
:heading {
  /* ... */
}
```

## 解説

`:heading` 擬似クラスを使用すると、見出しを個別に一致させてスタイルを設定するのではなく、すべての見出しに対して一括でスタイルを設定することができます。

この擬似クラスは、デフォルトで意味的見出しとして認識される要素（`<h1>` から `<h6>` まで）にのみ一致します。[`role="heading"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) を持つ要素には一致しません。これらの要素を選択するには、`[role="heading"]` [属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)を使用してください。

`:heading` 擬似クラスは、クラスセレクターと同じ[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity#詳細度の計算方法)、つまり `0-1-0` を持ちます。したがって、`:heading` の詳細度は `0-1-0` ですが、`h1, h2, h3, h4, h5, h6` の詳細度は `0-0-1` となり、`section:heading` の詳細度は `0-1-1` となります。

## 例

### すべての見出しをスタイル設定

この例では、`:heading` 擬似クラスを使用して、複数のレベルの見出しにスタイルを設定しています。

#### HTML

この文書には、3 つの異なるレベルの見出しと、{{htmlelement("p")}} 段落要素が含まれています。

```html-nolint
<h1>CSS のマスター</h1>
<h2>第 1 章: セレクター</h2>
<p>
  CSS セレクターとは、CSS ルールの中で、そのルールが文書内のどの要素に適用されるかを記述する部分のことです。
</p>
<h3>1.1 擬似クラス</h3>
<p>
  CSS 擬似クラスを使用すると、文書ツリーの外にある情報に基づいて要素を選択することができます。
</p>
```

#### CSS

見出し要素をイタリック体で、色はトマトレッドに設定しました。

```css
:heading {
  color: tomato;
  font-style: italic;
}
```

#### 結果

{{EmbedLiveSample("styling_all_headings", "", "170")}}

`:heading` 擬似クラスは、文書内のすべての見出しに {{cssxref("color")}} および {{cssxref("font-style")}} を適用しますが、段落には適用されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`:heading()`](/ja/docs/Web/CSS/Reference/Selectors/:heading_function)
