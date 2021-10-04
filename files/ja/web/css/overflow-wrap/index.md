---
title: overflow-wrap
slug: Web/CSS/overflow-wrap
tags:
  - CSS
  - CSS テキスト
  - CSS プロパティ
  - Reference
  - recipe:css-property
browser-compat: css.properties.overflow-wrap
translation_of: Web/CSS/overflow-wrap
---
{{CSSRef}}

**`overflow-wrap`** は [CSS](/ja/docs/Web/CSS) のプロパティで、インライン要素に対して、テキストが行ボックスをあふれないように、ブラウザーが分割できない文字列の途中で改行を入れるかどうかの設定を適用します。

{{EmbedInteractiveExample("pages/css/overflow-wrap.html")}}

> **Note:** {{cssxref("word-break")}} とは対照的に、 `overflow-wrap` は単語全体があふれずに行内に配置できない場合にのみ、改行を生成します。

このプロパティはもともと、標準外かつ接頭辞のない `word-wrap` と呼ばれる Microsoft 拡張であり、多くのブラウザーはこの名前で実装していました。 `overflow-wrap` に改名されたため、 `word-wrap` は別名になりました。

## 構文

```css
/* キーワード値 */
overflow-wrap: normal;
overflow-wrap: break-word;
overflow-wrap: anywhere;

/* グローバル値 */
overflow-wrap: inherit;
overflow-wrap: initial;
overflow-wrap: revert;
overflow-wrap: unset;
```

`overflow-wrap` プロパティは、以下のうちの一つのキーワードで指定します。

### 値

- `normal`
  - : 通常の単語の分割位置 (2 つの単語の間の空白など) でのみ改行することを示します。
- `anywhere`
  - : あふれることを避けるために、行内にその他の分割可能な位置がない場合、その他の分割できない文字列 — 長い単語や URL — が任意の場所で分割されることがあります。分割位置にハイフン文字は挿入されません。コンテンツの最小固有寸法を計算する時には、単語分割によって導入された折り返し可能位置が考慮されます。
- `break-word`
  - : `anywhere` の値と同様に、行内にその他の分割可能な位置がない場合、通常は分割可能でない単語が任意の場所で分割されますが、コンテンツの最小固有寸法を計算する時に、単語分割によって導入された折り返し可能位置が考慮されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Comparing_overflow-wrap_word-break_and_hyphens">overflow-wrap, word-break, hyphens の比較</h3>

この例は、長い単語が分割されるときの `overflow-wrap`, `word-break`, `hyphens` の結果を比較するものです。

#### HTML

```html
<p>They say the fishing is excellent at
  Lake <em class="normal">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>normal</code>)</p>
<p>They say the fishing is excellent at
  Lake <em class="ow-anywhere">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>overflow-wrap: anywhere</code>)</p>
<p>They say the fishing is excellent at
  Lake <em class="ow-break-word">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>overflow-wrap: break-word</code>)</p>
<p>They say the fishing is excellent at
  Lake <em class="word-break">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>word-break</code>)</p>
<p>They say the fishing is excellent at
  Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>hyphens</code>, without <code>lang</code> attribute)</p>
<p lang="en">They say the fishing is excellent at
  Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>hyphens</code>, English rules)</p>
<p class="hyphens" lang="de">They say the fishing is excellent at
  Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>hyphens</code>, German rules)</p>
```

#### CSS

```css
p {
   width: 13em;
   margin: 2px;
   background: gold;
}

.ow-anywhere {
   overflow-wrap: anywhere;
}

.ow-break-word {
   overflow-wrap: break-word;
}

.word-break {
   word-break: break-all;
}

.hyphens {
   hyphens: auto;
}
```

#### 例

{{ EmbedLiveSample('Comparing_overflow-wrap_word-break_and_hyphens', '100%', 260) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("word-break")}}
- {{cssxref("hyphens")}}
- {{cssxref("text-overflow")}}
- [テキストの分割と折り返しのガイド](/ja/docs/Web/CSS/CSS_Text/Wrapping_Text)
