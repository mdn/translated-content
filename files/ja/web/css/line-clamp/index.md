---
title: line-clamp
slug: Web/CSS/line-clamp
l10n:
  sourceCommit: 58f017d3bc8f78a9469055f1a7f7f3f5befa4447
---

{{CSSRef}}

**`line-clamp`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{Glossary("block", "ブロック")}}のコンテンツを指定した行数に制限することができます。

> [!NOTE]
> 過去のブラウザーとの互換性のため、ベンダー接頭辞の付いた `-webkit-line-clamp` プロパティは、 {{cssxref("display")}} プロパティに `-webkit-box` もしくは `-webkit-inline-box` が設定されており、かつ {{cssxref("box-orient", "-webkit-box-orient")}} プロパティに `vertical` が設定されている組み合わせのときのみ使用できます。これらは非推奨のプロパティですが、これら 3 つのプロパティの共依存性は完全に仕様化された動作であり、今後も対応していきます。

ほとんどの場合、 {{cssxref("overflow")}} に `hidden` を設定できます。そうしなければ内容は切り取られませんが、省略記号は指定した行数の後に表示されます。

アンカー要素に適用すると、切り捨てがテキストの途中で行われる場合があるかもしれませんが、必ずしも末尾で切り捨てが行われるとは限りません。

## 構文

```css
/* キーワード値 */
line-clamp: none;

/* <integer> 値 */
line-clamp: 3;
line-clamp: 10;

/* グローバル値 */
line-clamp: inherit;
line-clamp: initial;
line-clamp: revert;
line-clamp: revert-layer;
line-clamp: unset;
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

```html-nolint live-sample___truncating_a_paragraph
<p>
  この例では、 <code>-webkit-line-clamp</code> プロパティを 3 に設定すると、テキストは 3 行目の後で切られます。テキストが切られた点には省略記号が表示されます。
</p>
```

#### CSS

```css live-sample___truncating_a_paragraph
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
