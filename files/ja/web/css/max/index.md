---
title: max()
slug: Web/CSS/max
tags:
  - CSS
  - CSS 関数
  - Calculate
  - Compute
  - 関数
  - レイアウト
  - リファレンス
  - ウェブ
  - max
translation_of: Web/CSS/max()
original_slug: Web/CSS/max()
browser-compat: css.types.max
---
{{CSSRef}}

**`max()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、 CSS プロパティの値としてカンマで区切られた式のリストから最大の (最も正である) 値を設定できます。 `max()` 関数は {{CSSxRef("&lt;length&gt;")}}、{{CSSxRef("&lt;frequency&gt;")}}、{{CSSxRef("&lt;angle&gt;")}}、{{CSSxRef("&lt;time&gt;")}}、{{CSSxRef("&lt;percentage&gt;")}}、{{CSSxRef("&lt;number&gt;")}}、{{CSSxRef("&lt;integer&gt;")}} が使用できるところならばどこでも使用することができます。

{{EmbedInteractiveExample("pages/css/function-max.html")}}

上の例では、幅が 400px 以上になりますが、ビューポートが 2000px よりも広い場合 (1vw が 20px になるため、 20vw が 400px になる場合) はより広くなります。 `max()` の値はプロパティが取りうる<em>最小の</em>値を提供するものとして考えてください。

## 構文

`max()` 関数は、引数としてカンマで区切った 1 つ以上の式を取り、もっとも大きい (最も正である) 式の値をプロパティに割り当てられた値として使用します。

式は、 (算術演算子を用いた) 数式、リテラル値、あるいは、有効な引数の型 ({{CSSxRef("&lt;length&gt;")}} など) に評価される {{CSSxRef("attr()", "attr()")}} などの式や、ネストされた {{CSSxRef("min()", "min()")}} や `max()` 関数を用いることができます。

式の各値に異なる単位を使用することができます。必要に応じて、計算順序を決めるために括弧を使用することもできます。

## メモ

- 表の列、列グループ、行、行グループ、セルの幅と高さのパーセント値を含む数式は、自動レイアウト表と固定レイアウト表のどちらでも、あたかも `auto` が指定されていたかのように扱われる*可能性があります*。
- `min()` や他の `max()` 関数を式の値として入れ子にすることが認められています。式は完全な数式なので、 `calc()` 関数自体を使わずに直接加算、減算、乗算、除算を使うことができます。
- 式は、標準的な演算子の優先順位規則を使用して、加算 ( + )、減算 ( - )、乗算 ( * )、除算 ( / ) の各演算子を組み合わせた値にすることができます。オペランドの + と - の両側には必ず空白を入れてください。式の中のオペランドは、任意の `<length>` 構文値を使用できます。
- `min()` と `max()` の値を組み合わせたり、 `max()` を `clamp()` や `calc()` 関数の中で使用したりすることができます (そしてよく必要になります)。

### 形式文法

{{CSSSyntax}}

## 例

<h3 id="Setting_a_minimum_size_for_a_font">フォントに最小値を設定する</h3>

CSS 関数のもう一つの使用例は、少なくとも最小サイズを確保しながらフォントサイズを拡大していくことで、読みやすさを確保しながらレスポンシブなフォントサイズを可能にします。

多少の CSS を見てみましょう。

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

フォントサイズは最小で 2rem、ページの既定のフォントサイズの 2 倍になります。これは、それが読みやすく、アクセシビリティを確保することを保証します。

```html
<h1>このテキストは常に読みやすいですが、サイズは変わりません。</h1>
<h1 class="responsive">このテキストは、常に読みやすく、ある意味でレスポンシブです。</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

`max()` 関数はプロパティに許される最小値を探るものと考えてください。

<h2 id="Accessibility_concerns">アクセシビリティの考慮</h2>

`max()` を使用してテキストのサイズを制御する場合は、テキストが常に十分に読める大きさであることを確認してください。提案としては、 {{CSSxRef("min()", "min()")}} 関数を `max()` の中で入れ子にして使用し、その二番目の値として常に十分な大きさの[相対的な長さの単位](/ja/docs/Web/CSS/length#相対的な長さの単位)を持つようにします。

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

これにより、ページが拡大縮小されたときにテキストの大きさが拡大縮小され、最小サイズは _1rem_ になります。

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("calc()", "calc()")}}
- {{CSSxRef("clamp()", "clamp()")}}
- {{CSSxRef("min()", "min()")}}
- [CSS 値](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
