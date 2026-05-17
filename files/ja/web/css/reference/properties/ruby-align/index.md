---
title: "`ruby-align` CSS プロパティ"
short-title: ruby-align
slug: Web/CSS/Reference/Properties/ruby-align
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`ruby-align`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ベースに対するさまざまなルビ要素の配分を定義します。

## 構文

```css
/* キーワード値 */
ruby-align: start;
ruby-align: center;
ruby-align: space-between;
ruby-align: space-around;

/* グローバル値 */
ruby-align: inherit;
ruby-align: initial;
ruby-align: revert;
ruby-align: revert-layer;
ruby-align: unset;
```

### 値

- `start`
  - : ルビをベーステキストの先頭に揃えることを示すキーワードです。
- `center`
  - : ルビをベーステキストの中央に揃えることを示すキーワードです。
- `space-between`
  - : ルビの各要素の間に、余白を配分することを示すキーワードです。
- `space-around`
  - : ルビの各要素の間と、その周囲に余白を配分することを示すキーワードです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ルビをベーステキストの先頭に揃える

#### HTML

```html
<ruby>
  <rb>確認用の長いテキスト</rb>
  <rp>（</rp><rt>短いルビ</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: start;
}
```

#### 結果

{{EmbedLiveSample("ルビをベーステキストの先頭に揃える", 180, 40)}}

### ルビをベーステキストの中央に揃える

#### HTML

```html
<ruby>
  <rb>確認用の長いテキスト</rb>
  <rp>（</rp><rt>短いルビ</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: center;
}
```

#### 結果

{{EmbedLiveSample("ルビをベーステキストの中央に揃える", 180, 40)}}

### ルビ要素の範囲内に余白を配分する

#### HTML

```html
<ruby>
  <rb>確認用の長いテキスト</rb>
  <rp>（</rp><rt>短いルビ</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: space-between;
}
```

#### 結果

{{EmbedLiveSample("ルビ要素の範囲内に余白を配分する", 180, 40)}}

### ルビ要素内および周囲に余白を配分する

#### HTML

```html
<ruby>
  <rb>確認用の長いテキスト</rb>
  <rp>（</rp><rt>短いルビ</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: space-around;
}
```

#### 結果

{{EmbedLiveSample("ルビ要素内および周囲に余白を配分する", 180, 40)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("ruby-position")}}
- [CSS ルビレイアウト](/ja/docs/Web/CSS/Guides/Ruby_layout)モジュール
- HTML のルビ関連要素: {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}}, {{HTMLElement("rtc")}}
