---
title: ruby-position
slug: Web/CSS/ruby-position
tags:
  - CSS
  - CSS プロパティ
  - CSS ルビ
  - Reference
  - recipe:css-property
browser-compat: css.properties.ruby-position
translation_of: Web/CSS/ruby-position
---
{{CSSRef}}

**`ruby-position`** は CSS のプロパティで、ベース要素に対するルビ要素の位置を定義します。要素の上方 (`over`)、下方 (`under`)、文字の間の右側 (`inter-character`) に配置できます。

## 構文

```css
/* キーワード値 */
ruby-position: over;
ruby-position: under;
ruby-position: inter-character;
ruby-position: alternate;

/* グローバル値 */
ruby-position: inherit;
ruby-position: initial;
ruby-position: revert;
ruby-position: unset;
```

### 値

- `over`
  - : ![over の例](screen_shot_2015-03-04_at_13.02.20.png)ルビを主テキストの上 (横書きの場合) または右 (縦書きの場合) に配置することを示すキーワードです。
- `under`
  - : ![under の例](screen_shot_2015-03-04_at_13.02.07.png)ルビを主テキストの下 (横書きの場合) または左 (縦書きの場合) に配置することを示すキーワードです。
- `inter-character`
  - : ルビをそれぞれの文字の間に配置することを示すキーワードです。
- `alternate`
  - : 複数のレベルの注釈があった場合に、ルビが上と下の間で交互に表示されることを示すキーワードです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Ruby_positioned_over_the_text">テキストの上に配置したルビ</h3>

#### HTML

```html
<ruby>
  <rb>超電磁砲</rb>
  <rp>（</rp><rt>レールガン</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
    ruby-position:over;
}
```

#### 結果

{{EmbedLiveSample("Ruby_positioned_over_the_text", 100, 40)}}

<h3 id="Ruby_positioned_under_the_text">テキストの下に配置したルビ</h3>

#### HTML

```html
<ruby>
  <rb>超電磁砲</rb>
  <rp>（</rp><rt>レールガン</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
    ruby-position:under;
}
```

#### 結果

{{EmbedLiveSample("Ruby_positioned_under_the_text", 100, 40)}}

<h3 id="Ruby_alternate">交互のルビ</h3>

#### HTML

```html
<ruby>
  <rb>A<rb>B<rb>C</rb>
  <rtc>Above</rtc>
  <rtc>Below</rtc>
</ruby>
```

#### CSS

```css
ruby {
    ruby-position: alternate; /* 初期値でもある */
}
```

#### 結果

{{EmbedLiveSample("Ruby_alternate", 100, 40)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML のルビ関連要素: {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}}, {{HTMLElement("rtc")}}
- CSS のルビ関連プロパティ: {{cssxref("ruby-align")}}, {{cssxref("ruby-merge")}}
