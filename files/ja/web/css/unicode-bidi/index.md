---
title: unicode-bidi
slug: Web/CSS/unicode-bidi
tags:
  - BiDi
  - CSS
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.unicode-bidi
translation_of: Web/CSS/unicode-bidi
---
{{CSSRef}}

**`unicode-bidi`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{cssxref("direction")}} プロパティと共に、文書内の双方向テキストの扱いを指定します。例えば、テキストブロックに左書き (LTR) と右書き (RTL) の両方のテキストが含まれている場合、ユーザーエージェントは、複雑な Unicode アルゴリズムを用いてテキストの表示方法を決定します。 `unicode-bidi` プロパティは、このアルゴリズムを上書きして開発者がテキストの埋め込みを制御できるようにします。

`unicode-bidi` と {{cssxref("direction")}} プロパティだけは、 {{cssxref("all")}} 一括指定プロパティによる影響を受けません。

> **Warning:** このプロパティは文書型定義 (DTD) デザイナー向けです。ウェブデザイナー等の作者は、このアルゴリズムを**上書きすべきではありません**。

## 構文

```css
/* キーワード値 */
unicode-bidi: normal;
unicode-bidi: embed;
unicode-bidi: isolate;
unicode-bidi: bidi-override;
unicode-bidi: isolate-override;
unicode-bidi: plaintext;

/* グローバル値 */
unicode-bidi: inherit;
unicode-bidi: initial;
unicode-bidi: revert;
unicode-bidi: unset;
```

### 値

- `normal`
  - : 要素は、双方向アルゴリズムを尊重し、追加の埋め込みのレベルを提供しません。インライン要素に対しては、要素の境界に渡って、並べ替え作業を省略します。
- `embed`
  - : 要素がインラインの場合、この値は双方向アルゴリズムを尊重し、追加の埋め込みのレベルを開きます。この埋め込みレベルの方向は、 {{Cssxref("direction")}} プロパティにより与えられます。
- `bidi-override`
  - : インライン要素に対しては、この値で上書きされます。ブロックコンテナー要素に対しては、この値でインラインレベルの子孫を上書きし、別のブロックコンテナー要素は上書きしません。これは、要素内部に作用することを意味し、並べ替えは {{Cssxref("direction")}} による順序に従います。双方向アルゴリズムの省略された部分は無視されます。
- `isolate`
  - : このキーワードは、要素のコンテナーの記述方向が、要素の内容を考慮せずに計算されることを示します。要素はその兄弟から*隔離* (isolated) されます。双方向解決アルゴリズムが適用される時、そのコンテナー要素は、対象の要素を 1 個またはいくつかの `U+FFFC Object Replacement Character` として処理します。つまり、画像要素のように扱います。
- `isolate-override`
  - : このキーワードは、周囲のコンテンツに `isolate` キーワードの隔離処理を適用し、内部のコンテンツに `bidi-override` キーワードの上書き処理を適用します。
- `plaintext`
  - : このキーワードは、要素の記述方向を、その親要素の双方向状態や {{cssxref("direction")}} プロパティの値を考慮せずに計算します。記述方向は、Unicode Bidirectional Algorithm の P2 および P3 規則を用いて計算されます。
    この値により、Unicode Bidirectional Algorithm に従うツールを用いてすでに整形されたデータを表示できます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### CSS

```css
.bible-quote {
  direction: rtl;
  unicode-bidi: embed;
}
```

### HTML

```html
<div class="bible-quote">
  A line of text
</div>
<div>
  Another line of text
</div>
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("direction")}}
