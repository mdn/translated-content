---
title: text-justify
slug: Web/CSS/text-justify
---

{{CSSRef}}

**`text-justify`** は CSS のプロパティで、要素に {{cssxref("text-align")}}`: justify;` が設定された時にテキストに適用される両端揃えの種類を設定します。

## 構文

```css
text-justify: none;
text-justify: auto;
text-justify: inter-word;
text-justify: inter-character;
text-justify: distribute; /* 非推奨の値 */

/* Global values */
text-justify: inherit;
text-justify: initial;
text-justify: revert;
text-justify: unset;
```

### 値

- `none`
  - : テキストの両端揃えは行われません。これは {{cssxref("text-align")}} をまったく設定しない場合と同様の効果を持ちますが、何らかの理由で両端揃えを有効または無効にする必要があるときに便利です。
- `auto`
  - : ブラウザーは性能と品質の釣り合いに基づいて、テキストの言語 (例えば英語か、日本語か、中国語かなど) に最も適切なものは何かも加味して、現在の状況のために最適な種類の揃え方を選択します。これは `text-justify` をまったく設定しない場合に使われる既定の揃え方です。
- `inter-word`
  - : 単語間に間隔を挿入する (事実上 {{cssxref("word-spacing")}} を変化させる) ことでテキストを揃えるもので、これは英語や韓国語のように、空白で単語を区切る言語に最も適しています。
- `inter-character`
  - : 文字間に間隔を挿入する (事実上 {{cssxref("letter-spacing")}} を変化させる) ことでテキストを揃えるもので、これは日本語のような言語に最も適しています。
- `distribute` {{deprecated_inline}}
  - : `inter-character` と同じ動作を見せます。この値は後方互換性のためのものです。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

### text-justify の様々な値のデモ

```html hidden
<p class="none">
  <code>text-justify: none</code> —<br />Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id
  mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat
  justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="auto">
  <code>text-justify: auto</code> —<br />Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id
  mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat
  justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="dist">
  <code>text-justify: distribute</code> —<br />Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="word">
  <code>text-justify: inter-word</code> —<br />Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="char">
  <code>text-justify: inter-character</code> —<br />Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
```

```css
p {
  font-size: 1.5em;
  border: 1px solid black;
  padding: 10px;
  width: 95%;
  margin: 10px auto;
  text-align: justify;
}

.none {
  text-justify: none;
}

.auto {
  text-justify: auto;
}

.dist {
  text-justify: distribute;
}

.word {
  text-justify: inter-word;
}

.char {
  text-justify: inter-character;
}
```

{{EmbedLiveSample("Examples","100%",400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("text-align")}}
