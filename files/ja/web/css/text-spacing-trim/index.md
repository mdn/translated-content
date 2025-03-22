---
title: text-spacing-trim
slug: Web/CSS/text-spacing-trim
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{CSSRef}}{{seecompattable}}

**`text-spacing-trim`** は [CSS](/ja/docs/Web/CSS) のプロパティで、中国語/日本語/韓国語 (CJK) の約物文字（句読点や括弧など）について、隣接する文字との間、およびテキスト行の先頭または末尾に設定する内部空間（カーニング）を制御します。

## 構文

```css
/* キーワード値 */
text-spacing-trim: normal;
text-spacing-trim: space-all;
text-spacing-trim: space-first;
text-spacing-trim: trim-start;

/* グローバル値 */
text-spacing-trim: inherit;
text-spacing-trim: initial;
text-spacing-trim: revert;
text-spacing-trim: revert-layer;
text-spacing-trim: unset;
```

### 値

- `<spacing-trim>`

  - : さまざまな空間調整オプションを定義します。利用できる値は次のとおりです。

    - `normal`
      - : 各行の先頭にある CJK 全角の開始用約物文字を全角幅に設定します。各行の末尾にある CJK 全角の終端用約物文字を全角幅に設定し、または、その文字が前の行に収まりきらない場合は半角幅に設定します。約物文字間の[空間の折り畳み](#全角幅の約物の折り畳み)をします。
    - `space-all`
      - : すべての CJK 全角薬物文字を全角幅に設定します。
    - `space-first`
      - : `normal` と同様に動作しますが、 CJK 全角の開始用約物文字がテキストのブロックコンテナー内で最初の行の先頭、および改行文字などの明示的な改行の後に続くすべての行の先頭に来た場合には全角幅に設定します。
    - `trim-start`

      - : `normal` と同様に動作しますが、 CJK 全角の開始用約物文字が各行の先頭に来た場合には半角幅で設定します。

    > **メモ:** [CSS テキスト](/ja/docs/Web/CSS/CSS_text)モジュールは、 `trim-both`, `trim-all`, `auto` の値も定義しています。しかし、今のところどのブラウザーでも実装されていません。.

## 解説

`text-spacing-trim` プロパティは、[日本語組版処理の要件](https://w3c.github.io/jlreq/) (JLREQ) および [Requirements for Chinese text layout](https://www.w3.org/International/clreq/) (CLREQ) で定義されているように、 CJK の約物文字に間隔調整/カーニングを適用し、視覚的に美しい字組みを実現します。

多くの CJK 約物文字は字体内部に空間を含んでいます。例えば、 CJK の句点や閉じ括弧には、ふつう右側に字体内部の空間があります。これは他の漢字と[送り幅](/ja/docs/Glossary/Advance_measure)を一定にするためのものです。しかし、それらが横に並んでいる場合、字体内部の空間が過剰になることがあります。

`text-spacing-trim` を使用すると、隣接する文字間の過剰な空間（カーニング）や、テキスト行の先頭や末尾の空間を調整することができます。一般的に言えば、次の通りです。

- 全角の約物文字が全角幅に設定された場合、内部の空間が両側に設定され、それは漢字の横幅と一致します。
- 全角の薬物文字が半角幅に設定された場合、内部の空間は片方のみに設定され、もう一方の端は先頭（開始用約物文字の場合）または末尾（終端用約物文字の場合）に寄せられます。半角幅の文字は、ふつう漢字の幅の半分になります。

> [!NOTE]
> 過剰なカーニングのリスクを避けるため、フォントは OpenType Alternate Half Widths (`halt`) 機能、 Contextual Half-width Spacing (`chws`) 機能、またはその両方を持っていなければなりません。フォントがどちらの機能も持っていない場合、 `text-spacing-trim` は無効になります。

### 全角幅の約物の折り畳み

約物文字が 2 つ隣接している場合、間の空間は次のルールに従って縮小されます。

- 全角の開始用約物文字は、直前の文字が全角の開始用約物文字、全角の中点、全角の空白文字 (U+3000)、同等またはより大きなフォントサイズの全角の終端用約物文字、 [Unicode general category "Open punctuation" Ps](https://www.compart.com/en/unicode/category/Ps) に所属する文字のいずれかであった場合は半角幅に設定されます。それ以外の場合は、全角幅に設定されます。
- 全角の終端用約物文字は、次の文字が全角の終端用約物文字、全角の中点、全角の空白文字 (U+3000)、同等またはより大きなフォントサイズの全角の開始用約物文字、 [Unicode general category "Close punctuation" (Pe)](https://www.compart.com/en/unicode/category/Pe) に所属する文字のいずれかであった場合は半角幅に設定されます。それ以外の場合は、全角幅に設定されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### `text-spacing-trim` 値の比較

この例では、 4 つの異なる `text-spacing-trim` プロパティの効果を比較しています。 4 つの同じ段落に適用することで、それぞれの視覚的な違いを確認できます。

#### HTML

```html
<main>
  <div id="normal">
    <h2>normal</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="space-all">
    <h2>space-all</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="space-first">
    <h2>space-first</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="trim-start">
    <h2>trim-start</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
</main>
```

#### CSS

```css
main {
  font-family:
    "Yu Gothic", "YuGothic", "Noto Sans JP", "Hiragino Sans",
    "Hiragino Kaku Gothic ProN", sans-serif;
  display: grid;
  gap: 0.5em;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  margin: 0 auto;
}
h2 {
  font-size: 80%;
  margin: 0;
}
p {
  font-size: 20px;
  border: 1px solid blue;
  margin: 0;
}
#normal {
  text-spacing-trim: normal;
  grid-column: 1;
  grid-row: 1;
}
#space-all {
  text-spacing-trim: space-all;
  grid-column: 2;
  grid-row: 1;
}
#space-first {
  text-spacing-trim: space-first;
  grid-column: 1;
  grid-row: 2;
}
#trim-start {
  text-spacing-trim: trim-start;
  grid-column: 2;
  grid-row: 2;
}
```

#### 結果

{{EmbedLiveSample("`text-spacing-trim` value comparison", "100%",320)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`ic`](/ja/docs/Web/CSS/CSS_Values_and_Units#local_font-relative_lengths) および [`ric`](/ja/docs/Web/CSS/CSS_Values_and_Units#root_font-relative_lengths) の単位
- [CSS テキスト](/ja/docs/Web/CSS/CSS_text)モジュール
