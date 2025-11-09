---
title: text-indent
slug: Web/CSS/Reference/Properties/text-indent
original_slug: Web/CSS/text-indent
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

**`text-indent`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ブロック内のテキストの行の前に置く空白（字下げ）の幅を設定します。

{{InteractiveExample("CSS デモ: text-indent")}}

```css interactive-example-choice
text-indent: 0;
```

```css interactive-example-choice
text-indent: 30%;
```

```css interactive-example-choice
text-indent: -3em;
```

```css interactive-example-choice
text-indent: 3em each-line;
```

```css interactive-example-choice
text-indent: 3em hanging;
```

```css interactive-example-choice
text-indent: 3em hanging each-line;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      This text is contained within a single paragraph. This paragraph is two
      sentences long.
    </p>
    <p>
      This is a new paragraph. There is a line break element
      <code>&lt;br&gt;</code> after this sentence.<br />There it is! Notice how
      it affects the indentation.
    </p>
  </div>
</section>
```

```css interactive-example
section {
  font-size: 1.25em;
  background-color: #483d8b;
  align-items: start;
}

#example-element {
  text-align: left;
  margin: 0 0 0 3em;
  background-color: #6a5acd;
  color: white;
}
```

包含ブロック要素のコンテンツボックスの左端（右書きの場合は右端）に、水平に空白が挿入されます。

## 構文

```css
/* <length> 値 */
text-indent: 3mm;
text-indent: 40px;

/* <percentage> 値
   包含ブロックの幅に対する割合 */
text-indent: 15%;

/* キーワード値 */
text-indent: 5em each-line;
text-indent: 5em hanging;
text-indent: 5em hanging each-line;

/* グローバル値 */
text-indent: inherit;
text-indent: initial;
text-indent: revert;
text-indent: revert-layer;
text-indent: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : {{cssxref("&lt;length&gt;")}} を絶対値として字下げが指定されます。負の値も許可されます。利用できる単位は {{cssxref("&lt;length&gt;")}} をご覧ください。
- {{cssxref("&lt;percentage&gt;")}}
  - : 包含ブロックの幅の {{cssxref("&lt;percentage&gt;")}} 分だけ字下げされます。
- `each-line`
  - : *強制的な改行*の後の各行も、ブロックコンテナーの先頭行と同様に字下げします。ただし*自動折り返し*の次の行は字下げしません。
- `hanging`
  - : インデントされる行が逆になります。つまり、先頭行*以外の*すべての行を字下げします。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的なインデント

#### HTML

```html live-sample___basic_indent
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
```

#### CSS

```css live-sample___basic_indent
p {
  text-indent: 5em;
  background: powderblue;
}
```

#### 結果

{{ EmbedLiveSample('Basic_indent','100%','100%') }}

### 最初の段落の字下げをスキップ

段落の字下げがある場合の一般的な組版では、最初の段落の字下げを省略します。_The Chicago Manual of Style_ によると、「中間見出しに続くテキストの最初の行は、完全に左端から始めてもよいし、通常の段落の字下げで字下げしてもよい」とされています。

最初の段落とそれ以降の段落を別扱いにするには、次の例のように[次兄弟結合子](/ja/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)を使います。

#### HTML

```html live-sample___skipping_indentation_on_the_first_paragraph
<h2>Lorem ipsum</h2>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu
  venenatis quam. Vivamus euismod eleifend metus vitae pharetra. In vel tempor
  metus. Donec dapibus feugiat euismod. Vivamus interdum tellus dolor. Vivamus
  blandit eros et imperdiet auctor. Mauris sapien nunc, condimentum a efficitur
  non, elementum ac sapien. Cras consequat turpis non augue ullamcorper, sit
  amet porttitor dui interdum.
</p>

<p>
  Sed laoreet luctus erat at rutrum. Proin velit metus, luctus in sapien in,
  tincidunt mattis ex. Praesent venenatis orci at sagittis eleifend. Nulla
  facilisi. In feugiat vehicula magna iaculis vehicula. Nulla suscipit tempor
  odio a semper. Donec vitae dapibus ipsum. Donec libero purus, convallis eu
  efficitur id, pulvinar elementum diam. Maecenas mollis blandit placerat. Ut
  gravida pellentesque nunc, in eleifend ante convallis sit amet.
</p>

<h2>Donec ullamcorper elit nisl</h2>

<p>
  Donec ullamcorper elit nisl, sagittis bibendum massa gravida in. Fusce tempor
  in ante gravida iaculis. Integer posuere tempor metus. Vestibulum lacinia,
  nunc et dictum viverra, urna massa aliquam tellus, id mollis sem velit
  vestibulum nulla. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Donec vulputate leo ut iaculis ultrices.
  Cras egestas rhoncus lorem. Nunc blandit tempus lectus, rutrum hendrerit orci
  eleifend id. Ut at quam velit.
</p>

<p>
  Aenean rutrum tempor ligula, at luctus ligula auctor vestibulum. Sed
  sollicitudin velit in leo fringilla sollicitudin. Proin eu gravida arcu. Nam
  iaculis malesuada massa, eget aliquet turpis sagittis sed. Sed mollis tellus
  ac dui ullamcorper, nec lobortis diam pellentesque. Quisque dapibus accumsan
  libero, sed euismod ipsum ullamcorper sed.
</p>
```

#### CSS

```css live-sample___skipping_indentation_on_the_first_paragraph
p {
  text-align: justify;
  margin: 1em 0 0 0;
}
p + p {
  text-indent: 2em;
  margin: 0;
}
```

#### 結果

{{ EmbedLiveSample('Skipping_indentation_on_the_first_paragraph','','500px') }}

### パーセント値の字下げ

#### HTML

```html live-sample___percentage_indent
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
```

#### CSS

```css live-sample___percentage_indent
p {
  text-indent: 30%;
  background: plum;
}
```

#### 結果

{{ EmbedLiveSample('Percentage_indent','100%','100%') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS を使用した HTML のスタイル付け](/ja/docs/Learn_web_development/Core/Styling_basics)
- 関連する CSS プロパティ:
  - [`text-justify`](/ja/docs/Web/CSS/Reference/Properties/text-justify)
  - [`text-orientation`](/ja/docs/Web/CSS/Reference/Properties/text-orientation)
  - [`text-overflow`](/ja/docs/Web/CSS/Reference/Properties/text-overflow)
  - [`text-rendering`](/ja/docs/Web/CSS/Reference/Properties/text-rendering)
  - [`text-transform`](/ja/docs/Web/CSS/Reference/Properties/text-transform)
  - {{cssxref('hanging-punctuation')}}

- [CSS テキスト装飾](/ja/docs/Web/CSS/Guides/Text_decoration) CSS モジュール
- [CSS テキスト](/ja/docs/Web/CSS/Guides/Text) モジュール
