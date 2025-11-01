---
title: ruby-position
slug: Web/CSS/Reference/Properties/ruby-position
original_slug: Web/CSS/ruby-position
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`ruby-position`** は CSS のプロパティで、ベース要素に対するルビ要素の位置を定義します。要素の上方 (`over`)、下方 (`under`)、文字の間の右側 (`inter-character`) に配置できます。

{{InteractiveExample("CSS デモ: ruby-position")}}

```css interactive-example-choice
ruby-position: over;
```

```css interactive-example-choice
ruby-position: under;
```

```html interactive-example
<section id="default-example">
  <ruby id="example-element"> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
</section>
```

```css interactive-example
#example-element {
  font-size: 2em;
}
```

## 構文

```css
/* キーワード値 */
ruby-position: over;
ruby-position: under;
ruby-position: alternate;
ruby-position: alternate over;
ruby-position: alternate under;
ruby-position: inter-character;

/* グローバル値 */
ruby-position: inherit;
ruby-position: initial;
ruby-position: revert;
ruby-position: revert-layer;
ruby-position: unset;
```

### 値

- `over`
  - : ![over の例](screen_shot_2015-03-04_at_13.02.20.png)
    ルビを主テキストの上（横書きの場合）または右（縦書きの場合）に配置することを示すキーワードです。
- `under`
  - : ![under の例](screen_shot_2015-03-04_at_13.02.07.png)
    ルビを主テキストの下（横書きの場合）または左（縦書きの場合）に配置することを示すキーワードです。
- `alternate`
  - : 複数のレベルの注釈があった場合に、ルビが上と下の間で交互に表示されることを示すキーワードです。
- `inter-character`
  - : 指定された場合、縦書きモードでは `over` として動作します。それ以外の場合、ルビを異なる文字の間に配置するため、横書きテキストの場合はベーステキストの右側に現れ、ルビ表記コンテナーの子は強制的に書字方向が `vertical-rl` になります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### テキストの上に配置したルビ

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
  ruby-position: over;
}
```

#### 結果

{{EmbedLiveSample("テキストの上に配置したルビ", 100, 40)}}

### テキストの下に配置したルビ

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
  ruby-position: under;
}
```

#### 結果

{{EmbedLiveSample("テキストの下に配置したルビ", 100, 40)}}

### 交互のルビ

#### HTML

```html
<ruby>
  <rb>A</rb><rb>B</rb><rb>C</rb>
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

{{EmbedLiveSample("交互のルビ", 100, 40)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML のルビ関連要素: {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}}, {{HTMLElement("rtc")}}
- {{cssxref("ruby-align")}}
