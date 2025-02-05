---
title: "-webkit-line-clamp"
slug: Web/CSS/line-clamp
original_slug: Web/CSS/-webkit-line-clamp
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

**`-webkit-line-clamp`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{Glossary("block", "ブロック")}}のコンテンツを指定した行数に制限することができます。

{{cssxref("display")}} プロパティに `-webkit-box` もしくは `-webkit-inline-box` が設定されており、かつ {{cssxref("box-orient", "-webkit-box-orient")}} プロパティに `vertical` が設定されている組み合わせのときのみ使用できます。 これらは非推奨のプロパティですが、これら3つのプロパティの共依存性は完全に仕様化された動作であり、今後も対応していきます。

ほとんどの場合、 {{cssxref("overflow")}} に `hidden` を設定できます。そうしなければ内容は切り取られませんが、省略記号は指定した行数の後に表示されます。

アンカー要素に適用すると、切り捨てがテキストの途中で行われる場合があるかもしれませんが、必ずしも末尾で切り捨てが行われるとは限りません。

> [!NOTE]
> このプロパティはもともと WebKit で実装されたもので、他の 2 種類の古いプロパティに依存しているなどの課題を持っています。古いブラウザーへの対応のため、 [CSS Overflow Module Level 4](https://drafts.csswg.org/css-overflow-4/#propdef--webkit-line-clamp) で標準化されました。CSS Overflow Module Level 4 では {{cssxref("line-clamp")}} プロパティも定義しており、このプロパティを置き換えて問題を避けることを意味しています。ただし、`line-clamp` に対応しているすべてのブラウザーは、互換性のために `-webkit-line-clamp` にも対応します。

## 構文

```css
/* キーワード値 */
-webkit-line-clamp: none;

/* <integer> 値 */
-webkit-line-clamp: 3;
-webkit-line-clamp: 10;

/* グローバル値 */
-webkit-line-clamp: inherit;
-webkit-line-clamp: initial;
-webkit-line-clamp: revert;
-webkit-line-clamp: revert-layer;
-webkit-line-clamp: unset;
```

### 値

- `none`
  - : この値は、コンテンツの行数が制限されないことを指定します。
- {{cssxref("integer")}}
  - : この値は、コンテンツの制限される行数を指定します。 0 より大きな値でなければなりません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 段落の切り捨て

#### HTML

```html
<p>
  In this example the <code>-webkit-line-clamp</code> property is set to
  <code>3</code>, which means the text is clamped after three lines. An ellipsis
  will be shown at the point where the text is clamped.
</p>
```

#### CSS

```css
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

#### 結果

{{EmbedLiveSample("Truncating_a_paragraph", "100%", "130")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Line Clampin' (Truncating Multiple Line Text)](https://css-tricks.com/line-clampin/)
- {{cssxref("line-clamp")}}
