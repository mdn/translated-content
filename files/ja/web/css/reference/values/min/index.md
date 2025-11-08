---
title: min()
slug: Web/CSS/Reference/Values/min
original_slug: Web/CSS/min
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`min()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、 CSS プロパティの値としてカンマで区切られた式のリストから最小の (最も負である) 値を設定できます。 `min()` 関数は {{CSSxRef("&lt;length&gt;")}}、{{CSSxRef("&lt;frequency&gt;")}}、{{CSSxRef("&lt;angle&gt;")}}、{{CSSxRef("&lt;time&gt;")}}、{{CSSxRef("&lt;percentage&gt;")}}、{{CSSxRef("&lt;number&gt;")}}、{{CSSxRef("&lt;integer&gt;")}} が使用できるところならばどこでも使用することができます。

{{InteractiveExample("CSS デモ: min()")}}

```css interactive-example-choice
width: min(50vw, 200px);
```

```css interactive-example-choice
width: min(100vw, 4000px);
```

```css interactive-example-choice
width: min(150vw, 100px);
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

上の最初の例では、幅は最大 200px になりますが、ビューポートの幅が 400px 未満の場合はそれより狭くなります（この場合、1vw は 4px なので、50vw は 200px になります）。この方法では、プロパティの固定最大値を指定するために絶対単位を使用し、ビューポートの幅に合わせて値を縮小できるように相対単位を使用しています。

## 構文

```css
max(1, 2, 3)
max(1px, 2px, 3px)
```

### 引数

`min()` 関数は、引数としてカンマで区切った 1 つ以上の式を取り、もっとも小さい (最も負である) 式の値の結果を値として使用します。

式は、 (算術演算子を用いた) 数式、リテラル値、あるいは、有効な引数の型 ({{CSSxRef("&lt;length&gt;")}} など) に評価される {{CSSxRef("attr", "attr()")}} などの式を用いることができます。

必要に応じて、式の各値に異なる単位を使用することができます。必要に応じて、計算順序を決めるために括弧を使用することもできます。

### メモ

- 表の列、列グループ、行、行グループ、セルの幅と高さのパーセント値を含む数式は、自動レイアウト表と固定レイアウト表のどちらでも、あたかも `auto` が指定されていたかのように扱われる可能性があります。
- `max()` や他の `min()` 関数を式の値として入れ子にすることが認められています。式は完全な数式なので、 `calc()` 関数自体を使わずに直接加算、減算、乗算、除算を使うことができます。
- 式は、標準的な演算子の優先順位規則を使用して、加算 ( + )、減算 ( - )、乗算 ( \* )、除算 ( / ) の各演算子を組み合わせた値にすることができます。オペランドの + と - の両側には必ず空白を入れてください。式の中のオペランドは、任意の `<length>` 構文値を使用できます。
- `min()` と `max()` の値を組み合わせたり、 `min()` を `clamp()` や `calc()` 関数の中で使用したりすることができます (そしてよく必要になります)。
- 複数の制約を適用する場合は、3 つ以上の引数を与えることができます。

### 形式文法

{{CSSSyntax}}

## アクセシビリティ

`min()` を使用して最大フォントサイズを設定する場合、読めるようにするためにフォントが少なくとも 200% まで拡大できるようにしてください（ズーム機能などの支援技術なしで）。

- [MDN WCAG を理解する、ガイドライン 1.4 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 例

### ラベルと入力欄のために最大値を設定する

CSS 関数のもう一つの使用例は、レスポンシブなフォームコントロールに最大サイズを設定します。ラベルと入力欄の幅をフォームの幅の縮小に合わせて縮小できるようにします。

少し CSS を見てみましょう。

```css
input,
label {
  padding: 2px;
  box-sizing: border-box;
  display: inline-block;
  width: min(40%, 400px);
  background-color: pink;
}

form {
  margin: 4px;
  border: 1px solid black;
  padding: 4px;
}
```

ここでは、フォーム自体は、マージン、境界、パディングを含めて、親の幅の 100% になります。入力欄とラベルは、フォームのパディングまでの幅の 40% または幅 400px のどちらか小さい方になるように宣言します。言い換えれば、ラベルと入力欄の幅の最大値は 400px です。最も狭くなるのはフォームの幅の 40% であり、スマートウォッチの画面では非常に小さくなります。

```html
<form>
  <label>何か入力してください:</label>
  <input type="text" />
</form>
```

{{EmbedLiveSample("Setting_a_maximum_size_for_a_label_and_input", "100%", "110")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("calc()")}}
- {{CSSxRef("clamp()")}}
- {{CSSxRef("max()")}}
- [CSS 値](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
