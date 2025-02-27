---
title: word-break
slug: Web/CSS/word-break
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

**`word-break`** は [CSS](/ja/docs/Web/CSS) のプロパティで、改行しなければテキストがコンテンツボックスからあふれる場合に、ブラウザーが改行を挿入するかどうかを指定します。

{{EmbedInteractiveExample("pages/css/word-break.html")}}

## 構文

```css
/* キーワード値 */
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: auto-phrase; /* 実験的 */
word-break: break-word; /* 非推奨 */

/* グローバル値 */
word-break: inherit;
word-break: initial;
word-break: revert;
word-break: revert-layer;
word-break: unset;
```

`word-break` プロパティは、下記のリストの中から 1 つを選んで指定します。

### 値

- `normal`
  - : 既定の改行規則を使用します。
- `break-all`
  - : CJK (中国語、台湾語、日本語、韓国語) 以外のテキストにおいて、単語中などでの文字の改行に関する禁則処理を解除し、どの文字の間でも改行するようにします。
- `keep-all`
  - : CJK テキストの改行を許可しません。 CJK 以外のテキストについては `normal` と同じ挙動となります。
- `auto-phrase`
  - : `word-break: normal` と同様の効果がありますが、言語仕様上、自然なフレーズの途中に単語区切りを配置しないように単語区切りを改善する分析が行われます。
- `break-word`
  - : `overflow-wrap: anywhere` と `word-break: normal` を組み合わせたのと同様の効果がありますが、 {{cssxref("overflow-wrap")}} プロパティの実際の値とは関係ありません。

> **メモ:** `word-break: break-word` および `overflow-wrap: break-word` ({{cssxref("overflow-wrap")}} を参照) とは対照的に、 `word-break: break-all` はテキストがコンテナーからちょうどあふれたところで (単語全体を次の行に送れば途中で改行を防ぐことができる場合であっても) 位置で改行を生成します。

仕様書で、それ以外の値として `manual` も掲載していますが、現在どのブラウザーも対応していません。 `manual` が実装された場合、 `word-break: normal` と同じ効果を持ちますが、東南アジアの言語では自動的に改行が挿入されないという違いがあります。 これは、そのような言語ではユーザーエージェントが最適ではない位置に改行を挿入することが多いためです。 `manual` を使用すると、最適な位置に手動で改行を挿入することができます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html live-sample___examples
<p>1. <code>word-break: normal</code></p>
<p class="normal narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>2. <code>word-break: break-all</code></p>
<p class="breakAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>3. <code>word-break: keep-all</code></p>
<p class="keepAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>4. <code>word-break: manual</code></p>
<p class="manual narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>5. <code>word-break: auto-phrase</code></p>
<p class="autoPhrase narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>6. <code>word-break: break-word</code></p>
<p class="breakWord narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>
```

### CSS

```css live-sample___examples
.narrow {
  padding: 10px;
  border: 1px solid;
  width: 500px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 1px;
}

.normal {
  word-break: normal;
}

.breakAll {
  word-break: break-all;
}

.keepAll {
  word-break: keep-all;
}

.manual {
  word-break: manual;
}

.autoPhrase {
  word-break: auto-phrase;
}

.breakWord {
  word-break: break-word;
}
```

{{EmbedLiveSample('Examples', '100%', 600)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("overflow-wrap")}}
- {{cssxref("white-space")}}
- {{cssxref("hyphens")}}
- {{cssxref("line-break")}}
- [テキストの分割と折り返しのガイド](/ja/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
