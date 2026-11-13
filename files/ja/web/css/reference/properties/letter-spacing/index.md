---
title: "`letter-spacing` プロパティ (CSS)"
short-title: letter-spacing
slug: Web/CSS/Reference/Properties/letter-spacing
l10n:
  sourceCommit: 91e08923c809ca8deded3e3294f49bbe1a4a00b3
---

**`letter-spacing`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキストの字間スペースに関する挙動を設定します。この値はテキストを描画する際に文字間の自然な空間に追加されます。`letter-spacing` が正の値であった場合は、文字同士を拡散させるように広げ、`letter-spacing` が負の値であった場合は、文字同士を互いに近づけます。

{{InteractiveExample("CSS デモ: letter-spacing")}}

```css interactive-example-choice
letter-spacing: normal;
```

```css interactive-example-choice
letter-spacing: 0.2rem;
```

```css interactive-example-choice
letter-spacing: 1px;
```

```css interactive-example-choice
letter-spacing: 30%;
```

```css interactive-example-choice
letter-spacing: -1px;
```

```html-nolint interactive-example
<section id="default-example">
  <p id="example-element">
    通りにはまるで水が地球の表面から引き始めたばかりかのような泥が堆積し、ホルボーン・ヒルを象のようなトカゲ同様によたよたと歩く、全長約 40 フィートのメガロサウルスに出会っても不思議ではない。
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2");
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
letter-spacing: normal;

/* <length-percentage> 値 */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: -0.5px;
letter-spacing: 50%;

/* グローバル値 */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: revert;
letter-spacing: revert-layer;
letter-spacing: unset;
```

### 値

このプロパティは、以下のリストから 1 つの値を指定します。

- `normal`
  - : 現在のフォントでの通常の字間になります。 `0` の値とは異なり、この値は{{glossary("user agent", "ユーザーエージェント")}}が文字列を両端揃えするために字間を変えることを許可します。
- {{cssxref("&lt;length&gt;")}}
  - : 文字間のデフォルトのスペースに_加えて_、追加の文字間スペースを指定します。値は負の数でも指定できますが、実装固有の制限によって制約される場合があります。ユーザーエージェントは、テキストを揃えるために、文字間スペースをさらに拡大または縮小してはなりません。

    パーセント値は、テキストに適用されているフォントの空白文字の幅を基準として計算されます。

    > [!NOTE]
    > `letter-spacing` が 0 以外の場合、ユーザーエージェントは、通常 {{cssxref("font-variant-ligatures")}} によって制御される `liga`（標準合字）や `clig`（コンテキスト依存合字）などのオプションの合字を適用しません。
    > These features can be explicitly re-enabled with {{cssxref("font-feature-settings")}}.

## アクセシビリティ

正と負のどちらでも、大きすぎる値を `letter-spacing` に指定すると、スタイル設定が適用された語句が読みにくくなります。 とても大きな正の値でスタイル設定されたテキストの場合、文字と文字の間隔が広すぎて、語句がバラバラの文字の集まりとして現れることがあります。とても大きな負の値でスタイル設定されたテキストの場合、文字と文字が重なり合って、語句が認識できなくなる可能性があります。

フォントの文字幅は種類ごとに異なるため、読みやすい letter-spacing もそれぞれ異なります。すべてのフォントで読みやすさを提供してくれる単一の設定値というものはありません。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 国際化の考慮

書き言葉の中には、字間を適用してはいけないものがあります。例えば、アラビア文字を使用する言語では、次の例のように、つながった文字が視覚的につながったままであることが求められます。文字間隔を調整すると、テキストが崩れて見えることがあります。

```html live-sample___i18n-sample
<p lang="ar" dir="rtl">شسيبتنمك</p>
```

```css hidden live-sample___i18n-sample
p {
  font-size: 3em;
  margin-inline-start: 5px;
}
```

{{ EmbedLiveSample("i18n-sample", "100%", 180) }}

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 文字間隔を長さの値で設定

この例では、`letter-spacing` の値がそれぞれ異なる複数の段落を表示しており、それらを比較することができます。

#### HTML

HTML には、テキストコンテンツを含む複数の {{htmlelement("p")}} 要素が含まれています。

```html live-sample___length-letter-spacing
<p class="normal">letter spacing</p>
<p class="em-wide">letter spacing</p>
<p class="em-wider">letter spacing</p>
<p class="em-tight">letter spacing</p>
<p class="px-wide">letter spacing</p>
```

#### CSS

この CSS では、それぞれの段落に異なる `letting-spacing` の値を適用しています。

```css live-sample___length-letter-spacing
.normal {
  letter-spacing: normal;
}
.em-wide {
  letter-spacing: 0.4em;
}
.em-wider {
  letter-spacing: 1em;
}
.em-tight {
  letter-spacing: -0.05em;
}
.px-wide {
  letter-spacing: 6px;
}
```

#### 結果

レンダリングされた結果は次のようになります。

{{ EmbedLiveSample("length-letter-spacing", "100%", 200) }}

### 文字間隔の設定を長さとパーセント値で比較

この例は、パーセント値の `letter-spacing` 値が、レスポンシブなテキストサイズ調整に有益であることを示しています。

このコードでは、同じ `letter-spacing` が設定されたテキストを、フォントサイズを大きくしながら、いくつかの段落として表示させています。長さ単位とパーセント値の `letter-spacing` 値を切り替える機能が指定されており、パーセント値を使用した場合のレスポンシブな挙動を確認することができます。

#### HTML

この HTML には、テキストコンテンツを含むいくつかの {{htmlelement("p")}} 要素と、長さ単位の `letter-spacing` とパーセント値単位の `letter-spacing` を切り替えるために使用する [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) が含まれています。

```html live-sample___percentage-versus-length
<p class="x-small">X-small font-size (0.8em)</p>
<p class="small">Small font-size (1.3em)</p>
<p class="medium">Medium font-size (2em)</p>
<p class="large">Large font-size (3em)</p>
<p class="x-large">X-Large (3.5em)</p>

<form>
  <label for="ls-toggle">
    <code>letter-spacing</code> の切り替え（オフ: <code>8px</code>, オン:
    <code>12%</code>)
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

デフォルトで、すべての段落に `letter-spacing` の値として `8px` を適用しています。ただし、チェックボックスがオンになっている場合は、`letter-spacing` の値を `12%` に変更します。

```css live-sample___percentage-versus-length
p {
  letter-spacing: 8px;
}

p:has(~ form > input:checked) {
  letter-spacing: 12%;
}
```

#### 結果

レンダリングされた結果は次のようになります。

{{ EmbedLiveSample("percentage-versus-length", "100%", 460) }}

まず、初期の文字間隔の値は、大きなフォントサイズに適用した場合は問題ないように見えますが、小さなフォントサイズでは見栄えが悪くなる点に注目してください。これで、チェックボックスをオン／オフに切り替えてみてください。フォントサイズに応じて文字間隔が変倍されるため、すべての行で適切な文字間隔になることが分かるでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-kerning")}}
- {{cssxref("word-spacing")}}
- SVG の {{SVGAttr("letter-spacing")}} 属性
