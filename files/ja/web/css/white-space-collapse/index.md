---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
l10n:
  sourceCommit: 63e23080dd90d7802be807ac9beca286f6f31f7f
---

{{CSSRef}}

**`white-space-collapse`** は CSS プロパティで、要素内の{{Glossary("whitespace", "ホワイトスペース")}}を統合する方法を制御します。

> **メモ:** `white-space-collapse` および {{CSSxRef("text-wrap")}} プロパティは、 {{CSSxRef("white-space")}} 一括指定プロパティを用いて一緒に宣言することができます。

## 構文

```css
/* キーワード値 */
white-space-collapse: collapse;
white-space-collapse: preserve;
white-space-collapse: preserve-breaks;
white-space-collapse: preserve-spaces;
white-space-collapse: break-spaces;

/* グローバル値 */
white-space-collapse: inherit;
white-space-collapse: initial;
white-space-collapse: revert;
white-space-collapse: revert-layer;
white-space-collapse: unset;
```

`white-space-collapse` プロパティは下記の値の一覧から 1 つのキーワードを選んで指定します。

### 値

- `collapse`
  - : 連続したホワイトスペースを[統合します](#ホワイトスペースの統合)。
- `preserve`
  - : 連続したホワイトスペースと区間区切り文字を維持します。
- `preserve-breaks`
  - : 連続したホワイトスペースを統合しますが、区間区切り文字は維持します。
- `preserve-spaces`
  - : 連続したホワイトスペースを維持しますが、タブと区間区切り文字は空白に変換します。
- `break-spaces`
  - : 動作は以下の点を除いて `preserve` と同じです。
    - 維持された連続したホワイトスペースは、行末のものも含めて空間を確保します。
    - 維持されたホワイトスペース文字の後には、ホワイトスペース文字間も含め、改行の機会があります。
    - 維持されたスペースは空間を確保し、ぶら下がらないため、ボックスの内在サイズ（{{cssxref("min-content")}} のサイズと {{cssxref("max-content")}} のサイズ）に影響します。

> **メモ:** _区間区切り文字_ とは、テキストを新しい行に改行させる行送り文字などのことです。

## ホワイトスペースの統合

ユーザーエージェントは、以下のようにホワイトスペースの統合を処理します。

- タブは一般に空白に変換します。
- 区間区切り文字が統合される場合は、次のようになります。
  - 連続した区間区切り文字は、単一の区間区切り文字に統合されます。
  - 空白で単語を区切る言語（英語など）の場合は空白に変換し、空白で単語を区切らない言語（中国語など）の場合は完全に除去します。
- 空白が統合される場合は、次のようになります。
  - 区間区切り文字の前後の空白またはタブは除去されます。
  - 連続した空白は、単一の空白に変換、または「統合」ます。
- 空白が維持される場合、連続した空白はそれぞれの並びの末尾でソフト折り返しされることを除けば、改行されないものとして扱われます。つまり、次の行は常に次の空白でない文字から始まります。ただし、`break-spaces` 値の場合、それぞれの空白の後にソフト折り返しが発生する可能性があるので、次の行は 1 つ以上の空白で始まる可能性があります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### HTML

<!-- prettier-ignore-start -->
```html
<h2 class="collapse">Default behavior;
  all   whitespace   is   collapsed
  in    the          heading       .</h2>

<h2 class="preserve">In this case
  all   whitespace   is   preserved
  in    the          heading       .</h2>

<h2 class="preserve-breaks">In this case only
  the   line breaks  are  preserved
  in    the          heading       .</h2>
```
<!-- prettier-ignore-end -->

### CSS

```css
.collapse {
  white-space-collapse: collapse;
}

.preserve {
  white-space-collapse: preserve;
}

.preserve-breaks {
  white-space-collapse: preserve-breaks;
}

h2 {
  font-size: 1.6rem;
  font-family: monospace;
}
```

### 結果

{{EmbedLiveSample("Examples", "100%", 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `white-space-collapse` と {{CSSxRef("text-wrap")}} の一括指定: {{CSSxRef("white-space")}} プロパティ
- [CSS テキストモジュール](/ja/docs/Web/CSS/CSS_text)
