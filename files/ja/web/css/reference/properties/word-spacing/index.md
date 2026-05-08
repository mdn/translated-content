---
title: CSS `word-spacing` プロパティ
short-title: word-spacing
slug: Web/CSS/Reference/Properties/word-spacing
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`word-spacing`** は [CSS](/ja/docs/Web/CSS) のプロパティで、タグ間や単語間の間隔を設定します。

{{InteractiveExample("CSS デモ: word-spacing")}}

```css interactive-example-choice
word-spacing: normal;
```

```css interactive-example-choice
word-spacing: 1rem;
```

```css interactive-example-choice
word-spacing: 4px;
```

```css interactive-example-choice
word-spacing: 50%;
```

```css interactive-example-choice
word-spacing: -0.4ch;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    As much mud in the streets as if the waters had but newly retired from the
    face of the earth, and it would not be wonderful to meet a Megalosaurus,
    forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: "Amstelvar";
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: "Amstelvar", serif;
}
```

## 構文

```css
/* キーワード値 */
word-spacing: normal;

/* <length> 値 */
word-spacing: 3px;
word-spacing: 0.3em;
word-spacing: 65%;
word-spacing: -1ex;

/* グローバル値 */
word-spacing: inherit;
word-spacing: initial;
word-spacing: revert;
word-spacing: revert-layer;
word-spacing: unset;
```

### 値

- `normal`
  - : 現在のフォントやブラウザーで定義された普通の単語の間隔です。
- {{cssxref("length-percentage")}}
  - : フォントによって定義された単語の間隔に追加する間隔を定義します。パーセント値の場合は、テキストの {{cssxref("font-size")}} を基準として計算されます。

## アクセシビリティ

`word-spacing` 値を大きな生または負の値にすると、スタイル設定が適用された文が読みにくくなります。とても大きな正の値でスタイル設定されたテキストでは、単語が離れすぎてしまい、文として現れなくなります。大きな負の値でスタイル設定されたテキストでは、単語が互いに重なり合う可能性があり、各単語の始めと終わりが認識できなくなります。

読みやすい `word-spacing` は、フォントファミリーごとに文字幅が異なるため、案件ごとに決定する必要があります。 すべてのフォントファミリーで読みやすさを自動的に保証する値は存在しません。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 例

### HTML

この例は、`word-spacing` の基本的な使い方を示しています。

#### HTML

この HTML には、2 つの段落があります。

```html live-sample___basic-usage
<p id="mozdiv1">Lorem ipsum dolor sit amet.</p>
<p id="mozdiv2">Lorem ipsum dolor sit amet.</p>
```

#### CSS

この CSS では、それぞれの段落に異なる `word-spacing` を適用しています。

```css live-sample___basic-usage
#mozdiv1 {
  word-spacing: 15px;
}

#mozdiv2 {
  word-spacing: 5em;
}
```

#### 結果

この例は次のように表示されます。

{{ EmbedLiveSample("live-sample___basic-usage", "100%", "100") }}

### word-spacing 文字間隔の設定を、長さとパーセント値で比較

この例は、レスポンシブなテキストサイズ調整において、パーセント値の `word-spacing` 値が有益であることを示しています。

このコードでは、同じ `word-spacing` が設定されたテキストを、フォントサイズを大きくしながら数段落表示しています。長さ単位とパーセント値の `word-spacing` 値を切り替える機能を指定していますので、パーセント値を使用した場合のレスポンシブな挙動をご確認いただけます。

#### HTML

HTMLには、テキストコンテンツを含むいくつかの {{htmlelement("p")}} 要素と、長さ単位の `word-spacing` とパーセント値単位の `word-spacing` の値を切り替えるために使用する [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) が含まれています。

```html live-sample___percentage-versus-length
<p class="x-small">X-small font-size (0.8em)</p>
<p class="small">Small font-size (1.3em)</p>
<p class="medium">Medium font-size (2em)</p>
<p class="large">Large font-size (3em)</p>
<p class="x-large">X-Large (3.5em)</p>

<form>
  <label for="ls-toggle">
    <code>word-spacing</code> を切り替え (off: <code>10px</code>, on:
    <code>15%</code>)
  </label>
  <input type="checkbox" id="ls-toggle" />
</form>
```

#### CSS

この CSS では、連続するそれぞれの段落に対して、{{cssxref("font-size")}} の値を徐々に大きくしていくことから始まります。

```css hidden live-sample___percentage-versus-length
html {
  font-family: "Arial", sans-serif;
}
```

```css live-sample___percentage-versus-length
.x-small {
  font-size: 0.8em;
}

.small {
  font-size: 1.3em;
}

.medium {
  font-size: 2em;
}

.large {
  font-size: 3em;
}

.x-large {
  font-size: 3.5em;
}
```

デフォルトで、すべての段落に `word-spacing` の値を `10px` に設定しています。ただし、チェックボックスがオンになっている場合は、`word-spacing` の値を `15%` に変更します。

```css live-sample___percentage-versus-length
p {
  word-spacing: 10px;
}

p:has(~ form > input:checked) {
  word-spacing: 15%;
}
```

#### 結果

レンダリングされた結果は、このようになります。

{{ EmbedLiveSample("percentage-versus-length", "100%", 460) }}

まず、初期の文字間隔の値は、大きなフォントサイズでは問題なく見えますが、小さなフォントサイズでは見栄えが良くないことにご注目ください。次に、チェックボックスを切り替えてみてください。パーセント値の文字間隔は、フォントサイズに合わせて変倍されるため、すべての行で適切に見えることにご注目ください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("letter-spacing")}}
- SVG の {{SVGAttr("word-spacing")}} 属性
