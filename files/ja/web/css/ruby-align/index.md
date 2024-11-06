---
title: ruby-align
slug: Web/CSS/ruby-align
---

{{CSSRef}}

**`ruby-align`** は CSS のプロパティで、ベースに対するさまざまなルビの配分を定義します。

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
ruby-align: unset;
```

## 構文

### 値

- `start`
  - : ルビをベーステキストの始点に揃えることを示すキーワードです。
- `center`
  - : ルビをベーステキストの中央に揃えることを示すキーワードです。
- `space-between`
  - : ルビの要素の範囲内に配分するよう、スペースを付加することを示すキーワードです。
- `space-around`
  - : ルビの要素の範囲内に配分するよう、スペースを付加することを示すキーワードです。また、ルビの周囲にもスペースを付加します。

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

### ルビ要素の範囲内にスペースを配分する

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

{{EmbedLiveSample("ルビ要素の範囲内にスペースを配分する", 180, 40)}}

### ルビ要素内および周囲にスペースを配分する

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

{{EmbedLiveSample("ルビ要素内および周囲にスペースを配分する", 180, 40)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML のルビ関連要素: {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}}, {{HTMLElement("rtc")}}
- CSS のルビ関連プロパティ: {{cssxref("ruby-position")}}, {{cssxref("ruby-merge")}}
