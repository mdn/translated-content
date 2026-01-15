---
title: ruby-align
slug: Web/CSS/Reference/Properties/ruby-align
original_slug: Web/CSS/ruby-align
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
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
  - : ルビをベーステキストの始点に揃えることを示すキーワードです。
- `center`
  - : ルビをベーステキストの中央に揃えることを示すキーワードです。
- `space-between`
  - : ルビの要素の範囲内に割り付けるために、空間を付加することを示すキーワードです。
- `space-around`
  - : ルビの要素の範囲内に割り付けるために、空間を付加し、ルビの周囲にも空間を付加することを示すキーワードです。

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

### ルビ要素の範囲内に空間を配分する

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

{{EmbedLiveSample("ルビ要素の範囲内に空間を配分する", 180, 40)}}

### ルビ要素内および周囲に空間を配分する

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

{{EmbedLiveSample("ルビ要素内および周囲に空間を配分する", 180, 40)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML のルビ関連要素: {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}}, {{HTMLElement("rtc")}}
- CSS のルビ関連プロパティ: {{cssxref("ruby-position")}}, {{cssxref("ruby-merge")}}
