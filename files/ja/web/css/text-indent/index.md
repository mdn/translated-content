---
title: text-indent
slug: Web/CSS/text-indent
tags:
  - CSS
  - CSS プロパティ
  - CSS テキスト
  - 字下げ
  - レイアウト
  - Reference
  - recipe:css-property
  - text-indent
browser-compat: css.properties.text-indent
translation_of: Web/CSS/text-indent
---
{{CSSRef}}

**`text-indent`** は CSS のプロパティで、ブロック内のテキストの行の前に置く空白 (字下げ) の幅を設定します。

{{EmbedInteractiveExample("pages/css/text-indent.html")}}

包含ブロック要素のコンテンツボックスの左端 (右書きの場合は右端) に、水平に空白が挿入されます。

## 構文

```css
/* <length> 値 */
text-indent: 3mm;
text-indent: 40px;

/* <percentage> 値
   包含ブロックの幅に対する割合 */
text-indent: 15%;

/* Keyword values */
text-indent: 5em each-line;
text-indent: 5em hanging;
text-indent: 5em hanging each-line;

/* Global values */
text-indent: inherit;
text-indent: initial;
text-indent: revert;
text-indent: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : {{cssxref("&lt;length&gt;")}} を絶対値として字下げが指定されます。負の値も許可されます。利用できる単位は {{cssxref("&lt;length&gt;")}} をご覧ください。
- {{cssxref("&lt;percentage&gt;")}}
  - : 包含ブロックの幅の {{cssxref("&lt;percentage&gt;")}} 分だけ字下げされます。
- `each-line` {{experimental_inline}}
  - : *強制的な改行*の後の各行も、ブロックコンテナーの先頭行と同様に字下げします。ただし*自動折り返し*の次の行は字下げしません。
- `hanging` {{experimental_inline}}
  - : インデントされる行が逆になります。つまり、先頭行*以外の*すべての行を字下げします。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h2 id="Simple_indent">単純なインデントの例</h2>

#### HTML

```html
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
```

#### CSS

```css
p {
  text-indent: 5em;
  background: powderblue;
}
```

#### 結果

{{ EmbedLiveSample('Simple_indent','100%','100%') }}

<h3 id="Skipping_indentation_on_the_first_paragraph">最初の段落の字下げをスキップ</h3>

段落の字下げがある場合の一般的な組版では、最初の段落の字下げを省略します。_The Chicago Manual of Style_ によると、「中間見出しに続くテキストの最初の行は、完全に左端から始めてもよいし、通常の段落の字下げで字下げしてもよい」とされています。

最初の段落とそれ以降の段落を別扱いにするには、次の例のように[隣接兄弟結合子](/ja/docs/Web/CSS/Adjacent_sibling_combinator)を使います。

#### HTML

```html
<h2>Lorem ipsum</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu
venenatis quam. Vivamus euismod eleifend metus vitae pharetra. In vel tempor metus.
Donec dapibus feugiat euismod. Vivamus interdum tellus dolor. Vivamus blandit eros
et imperdiet auctor. Mauris sapien nunc, condimentum a efficitur non, elementum ac
sapien. Cras consequat turpis non augue ullamcorper, sit amet porttitor dui
interdum.</p>

<p>Sed laoreet luctus erat at rutrum. Proin velit metus, luctus in sapien in,
tincidunt mattis ex. Praesent venenatis orci at sagittis eleifend. Nulla facilisi.
In feugiat vehicula magna iaculis vehicula. Nulla suscipit tempor odio a semper.
Donec vitae dapibus ipsum. Donec libero purus, convallis eu efficitur id, pulvinar
elementum diam. Maecenas mollis blandit placerat. Ut gravida pellentesque nunc, in
eleifend ante convallis sit amet.</p>

<h2>Donec ullamcorper elit nisl</h2>

<p>Donec ullamcorper elit nisl, sagittis bibendum massa gravida in. Fusce
tempor in ante gravida iaculis. Integer posuere tempor metus. Vestibulum lacinia,
nunc et dictum viverra, urna massa aliquam tellus, id mollis sem velit vestibulum
nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
ac turpis egestas. Donec vulputate leo ut iaculis ultrices. Cras egestas rhoncus
lorem. Nunc blandit tempus lectus, rutrum hendrerit orci eleifend id. Ut at quam
velit.</p>

<p>Aenean rutrum tempor ligula, at luctus ligula auctor vestibulum. Sed
sollicitudin velit in leo fringilla sollicitudin. Proin eu gravida arcu. Nam
iaculis malesuada massa, eget aliquet turpis sagittis sed. Sed mollis tellus ac
dui ullamcorper, nec lobortis diam pellentesque. Quisque dapibus accumsan libero,
sed euismod ipsum ullamcorper sed.</p>
```

#### CSS

```css
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

<h3 id="Percentage_indent">パーセント値の字下げ</h3>

#### HTML

```html
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
```

#### CSS

```css
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

- [CSS を使用した HTML のスタイル付け](/ja/docs/Learn/CSS)
- 関連する CSS プロパティ:

  - [`text-justify`](/ja/docs/Web/CSS/text-justify)
  - [`text-orientation`](/ja/docs/Web/CSS/text-orientation)
  - [`text-overflow`](/ja/docs/Web/CSS/text-overflow)
  - [`text-rendering`](/ja/docs/Web/CSS/text-rendering)
  - [`text-transform`](/ja/docs/Web/CSS/text-transform)

- [CSS テキスト装飾](/ja/docs/Web/CSS/CSS_Text_Decoration) CSS モジュール
- [CSS テキスト](/ja/docs/Web/CSS/CSS_Text) モジュール
