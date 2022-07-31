---
title: text-combine-upright
slug: Web/CSS/text-combine-upright
tags:
  - CSS
  - CSS プロパティ
  - CSS 書字方向
  - 実験的
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.text-combine-upright
translation_of: Web/CSS/text-combine-upright
---
{{CSSRef}}

**`text-combine-upright`** は [CSS](/ja/docs/Web/CSS) のプロパティで、一文字分の空間に挿入する文字の組み合わせを設定します。組み合わせたテキストが 1em の幅より広い場合、ユーザーエージェントはコンテンツを 1em の幅に収めなければなりません。合成結果は、レイアウトおよび装飾においてグリフ一文字として扱われます。このプロパティは、縦書きモードでのみ効果があります。

これは、日本語の縦中横、中国語の <span lang="zh-Hant">直書橫向</span> として知られる効果をもたらすために使用されます。

```css
/* キーワード値 */
text-combine-upright: none;
text-combine-upright: all;

/* Digits 値 */
text-combine-upright: digits;     /* 2 桁の数字を垂直テキスト内に水平に収めます */
text-combine-upright: digits 4;   /* 4 桁までの数字を垂直テキスト内に水平に収めます */

/* グローバル値 */
text-combine-upright: inherit;
text-combine-upright: initial;
text-combine-upright: revert;
text-combine-upright: unset;
```

## 構文

### 値

- `none`
  - : 何も特別な処理をしません。
- `all`
  - : タイプセットのすべての文字を水平に並べてボックス内に収めます。この幅は、縦書きボックス内で一文字分の空間を取ります。
- `digits <integer>?`
  - : 指定した桁数 (整数値) までの連続した ASCII 数字 (U+0030–U+0039) を水平に並べてボックス内に収めます。この幅は、縦書きボックス内で一文字分の空間を取ります。整数値を省略した場合の値は 2 になります。2 ～ 4 までの範囲外の整数値は不正です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### digits

digits 値は、数字の桁を組み合わせる際に all の値よりもマークアップが少なくてすみますが、対応しているブラウザーはあまり多くありません。

#### HTML

```html
<p lang="ja" class="exampleText">平成20年4月16日に</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-lr;
  text-combine-upright: digits 2;
  font: 36px serif;
}
```

#### 結果

{{EmbedLiveSample("Digits", 100, 350, "tate-chu-yoko.png")}}

### all

all の値は、水平テキストにするすべての部分にマークアップする必要があります。現在、これは digits 値よりも多くのブラウザーが対応しています。

#### HTML

```html
<p lang="zh-Hant">民國<span class="num">105</span
>年<span class="num">4</span
>月<span class="num">29</span>日</p>
```

#### CSS

```css
html { writing-mode: vertical-rl; font: 24px serif }
.num { text-combine-upright: all }
```

#### 結果

{{EmbedLiveSample("All", 250, 300, "text-combine-upright-all.png")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("writing-mode")}}, {{cssxref("text-orientation")}}
