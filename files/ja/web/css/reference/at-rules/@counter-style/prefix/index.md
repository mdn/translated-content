---
title: prefix
slug: Web/CSS/Reference/At-rules/@counter-style/prefix
original_slug: Web/CSS/@counter-style/prefix
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{cssxref('@counter-style')}} ルールの **`prefix`** 記述子は、カウンターのマーカー表現の先頭に追加されるコンテンツを指定します。

カウンター値が負の場合、`prefix` は負の符号の前に、 {{cssxref("@counter-style/negative", "negative")}} 記述子によって追加されたその他の `<symbol>` の前に付きます。

## 構文

```css
/* <symbol> 値 */
prefix: "»";
prefix: "Page ";
prefix: url(bullet.png);
```

### 値

**`prefix`** 記述子は、その値として単一の `<symbol>` を取ります。

- `<symbol>`
  - : マーカーに先立って表示される `<symbol>` を指定します。 {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;custom-ident&gt;")}} の何れかです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### カウンターに接頭辞を追加

この例では、それぞれのカウンタ番号の前に "Book " （空白付き）が接頭辞として付加され、その後にコロン (`:`) が続きます。コロンは、{{cssxref("@counter-style/suffix", "suffix")}} 記述子によって追加されます。

#### HTML

```html
<ol class="books">
  <li>Flamer, by Mike Curato</li>
  <li>Gender Queer: A Memoir, by Maia Kobabe</li>
  <li>Tricks, by Ellen Hopkins</li>
  <li>The Handmaid's Tale: The Graphic Novel, by Margaret Atwood</li>
  <li>Crank, by Ellen Hopkins</li>
</ol>
```

#### CSS

```css
@counter-style books {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  prefix: "書籍 ";
  suffix: ": ";
}

.books {
  list-style: books;
  padding-left: 15ch;
}
```

#### 結果

{{ EmbedLiveSample('Adding_a_prefix_to_a_counter') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@counter-style")}} 記述子: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- リストスタイルのプロパティ: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, 無名のカウンタースタイルを生成する関数記法。
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
