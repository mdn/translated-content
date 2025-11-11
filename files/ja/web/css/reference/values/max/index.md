---
title: max()
slug: Web/CSS/Reference/Values/max
original_slug: Web/CSS/max
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`max()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、 CSS プロパティの値としてカンマで区切られた式のリストから最大の (最も正である) 値を設定できます。 `max()` 関数は {{CSSxRef("&lt;length&gt;")}}、{{CSSxRef("&lt;frequency&gt;")}}、{{CSSxRef("&lt;angle&gt;")}}、{{CSSxRef("&lt;time&gt;")}}、{{CSSxRef("&lt;percentage&gt;")}}、{{CSSxRef("&lt;number&gt;")}}、{{CSSxRef("&lt;integer&gt;")}} が使用できるところならばどこでも使用することができます。

{{InteractiveExample("CSS デモ: max()")}}

```css interactive-example-choice
width: max(20vw, 400px);
```

```css interactive-example-choice
width: max(20vw, 100px);
```

```css interactive-example-choice
width: max(5vw, 100px);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <img
      alt="Firefox logo"
      class="logo"
      src="/shared-assets/images/examples/firefox-logo.svg" />
  </div>
</section>
```

上記の最初の例では、幅は少なくとも 400px になりますが、ビューポートの幅が 2000px を超える場合はそれより広くなります（この場合、1vw は 20px なので、20vw は 400px になります）。この方法では、プロパティの固定最小値を指定するために絶対単位を使用し、より大きなビューポートに合わせて値を伸長できるように相対単位を使用しています。

## 構文

```css
max(1, 2, 3)
max(1px, 2px, 3px)
```

### 引数

`max()` 関数は、引数としてカンマで区切った 1 つ以上の式を取り、もっとも大きい (最も正である) 式の値をプロパティに割り当てられた値として使用します。

式は、 (算術演算子を用いた) 数式、リテラル値、あるいは、有効な引数の型 ({{CSSxRef("&lt;length&gt;")}} など) に評価される {{CSSxRef("attr", "attr()")}} などの式や、ネストされた {{CSSxRef("min", "min()")}} や `max()` 関数を用いることができます。

式の各値に異なる単位を使用することができます。必要に応じて、計算順序を決めるために括弧を使用することもできます。

## メモ

- 表の列、列グループ、行、行グループ、セルの幅と高さのパーセント値を含む数式は、自動レイアウト表と固定レイアウト表のどちらでも、あたかも `auto` が指定されていたかのように扱われる可能性があります。
- `min()` や他の `max()` 関数を式の値として入れ子にすることが認められています。式は完全な数式なので、 `calc()` 関数自体を使わずに直接加算、減算、乗算、除算を使うことができます。
- 式は、標準的な演算子の優先順位規則を使用して、加算 ( + )、減算 ( - )、乗算 ( \* )、除算 ( / ) の各演算子を組み合わせた値にすることができます。オペランドの + と - の両側には必ず空白を入れてください。式の中のオペランドは、任意の `<length>` 構文値を使用できます。
- `min()` と `max()` の値を組み合わせたり、 `max()` を `clamp()` や `calc()` 関数の中で使用したりすることができます (そしてよく必要になります)。

## 形式文法

{{CSSSyntax}}

## アクセシビリティ

`max()` を使用してテキストのサイズを制御する場合は、テキストが常に十分に読める大きさであることを確認してください。提案としては、 {{CSSxRef("min", "min()")}} 関数を `max()` の中で入れ子にして使用し、その二番目の値として常に十分な大きさの[相対的な長さの単位](/ja/docs/Web/CSS/Reference/Values/length#相対的な長さの単位)を持つようにします。

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

これにより、ページが拡大縮小されたときにテキストの大きさが拡大縮小され、最小サイズは _1rem_ になります。

- [MDN WCAG を理解する、ガイドライン 1.4 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 例

### フォントに最小値を設定する

`max()` 関数の用途は、フォントサイズを最小サイズ以上に伸長できるようにして、読みやすさを確保しながらレスポンシブなフォントサイズを実現することです。

少し CSS を見てみましょう。

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

フォントサイズは、最小で 2rem、またはページのフォントの既定サイズの 2 倍になります。これにより、読みやすく、アクセスしやすい状態が確実に保持されます。

```html
<h1>このテキストは常に読みやすいですが、サイズは変わりません。</h1>
<h1 class="responsive">
  このテキストは、常に読みやすく、ある意味でレスポンシブです。
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

`max()` 関数はプロパティに許される最小値を探るものと考えてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("min", "min()")}}
- [学習: 値と単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
