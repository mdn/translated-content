---
title: min()
slug: Web/CSS/min
tags:
  - CSS
  - CSS 関数
  - Calculate
  - Compute
  - 関数
  - レイアウト
  - リファレンス
  - min
translation_of: Web/CSS/min()
original_slug: Web/CSS/min()
browser-compat: css.types.min
---
{{CSSRef}}

**`min()`** は [CSS](/ja/docs/Web/CSS) 関数で、 CSS プロパティの値としてカンマで区切られた式のリストから最小の (最も負である) 値を設定できます。 `min()` 関数は {{CSSxRef("&lt;length&gt;")}}、{{CSSxRef("&lt;frequency&gt;")}},、{{CSSxRef("&lt;angle&gt;")}}、{{CSSxRef("&lt;time&gt;")}}、{{CSSxRef("&lt;percentage&gt;")}}、{{CSSxRef("&lt;number&gt;")}}、{{CSSxRef("&lt;integer&gt;")}} が利用できるところならばどこでも使用することができます。

{{EmbedInteractiveExample("pages/css/function-min.html")}}

上の例では、幅は最大 80px ですが、ビューポートの幅が 800px 未満または em の幅が 20px 未満の場合は狭くなります。言い換えれば、最大幅は 80px です。 `min()` の値はプロパティが取りうる*最大の*値を提供するものとして考えてください。

## 構文

`min()` 関数は、引数としてカンマで区切った 1 つ以上の式を取り、もっとも小さい (最も負である) 式の値の結果を値として使用します。

式は ({{CSSxRef("&lt;length&gt;")}} などの) 有効な引数の型として評価される、 (算術演算子を使用した) 数式、リテラル値、 {{CSSxRef("attr()")}} などのその他の式にすることができます。

必要に応じて、式の各値に異なる単位を使用することができます。必要に応じて、計算順序を決めるために括弧を使用することもできます。

### メモ

- 表の列、列グループ、行、行グループ、セルの幅と高さのパーセント値を含む数式は、自動レイアウト表と固定レイアウト表のどちらでも、あたかも `auto` が指定されていたかのように扱われる<em>可能性があります</em>。
- `max()` や他の `min()` 関数を式の値として入れ子にすることが認められています。式は完全な数式なので、 `calc()` 関数自体を使わずに直接加算、減算、乗算、除算を使うことができます。
- 式は、標準的な演算子の優先順位規則を使用して、加算 ( + )、減算 ( - )、乗算 ( * )、除算 ( / ) の各演算子を組み合わせた値にすることができます。オペランドの + と - の両側には必ず空白を入れてください。式の中のオペランドは、任意の `<length>` 構文値を使用できます。
- `min()` と `max()` の値を組み合わせたり、 `min()` を `clamp()` や `calc()` 関数の中で使用したりすることができます (そしてよく必要になります)。
- 複数の制約を適用する場合は、3 つ以上の引数を与えることができます。

### 形式文法

{{CSSSyntax}}

## アクセシビリティの考慮

`min()` を使用して最大フォントサイズを設定する場合、読めるようにするためにフォントが少なくとも 200% まで拡大できるようにしてください (ズーム機能などの支援技術なしで)。

- [MDN WCAG を理解する、ガイドライン 1.4 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 例

<h3 id="Setting_a_maximum_size_for_a_label_and_input" >ラベルと入力欄のために最大値を設定する</h3>

CSS 関数のもう一つの使用例は、レスポンシブなフォームコントロールに最大サイズを設定します。ラベルと入力欄の幅をフォームの幅の縮小に合わせて縮小できるようにします。

いくらか CSS を見てください。

```css
input, label {
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
  <label>Type something:</label>
  <input type="text">
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
- [CSS 値](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
