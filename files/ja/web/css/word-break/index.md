---
title: word-break
slug: Web/CSS/word-break
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
- `break-word` {{Deprecated_Inline}}
  - : {{cssxref("overflow-wrap")}} プロパティの値とは関係なく、 `word-break: normal` や `overflow-wrap: anywhere` と同じ効果になります。

> **メモ:** `word-break: break-word` および `overflow-wrap: break-word` ({{cssxref("overflow-wrap")}} を参照) とは対照的に、 `word-break: break-all` はテキストがコンテナーからちょうどあふれたところで (単語全体を次の行に送れば途中で改行を防ぐことができる場合であっても) 位置で改行を生成します。

> **メモ:** `word-break: break-word` は非推奨ですが、指定した場合は {{cssxref("overflow-wrap")}} プロパティの値とは関係なく、 `word-break: normal` や `overflow-wrap: anywhere` と同じ効果になります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
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

<p>4. <code>word-break: break-word</code></p>
<p class="breakWord narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>
```

### CSS

```css
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
- {{cssxref("hyphens")}}
- {{cssxref("line-break")}}
- [テキストの分割と折り返しのガイド](/ja/docs/Web/CSS/CSS_Text/Wrapping_Text)
