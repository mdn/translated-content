---
title: text-combine-upright
slug: Web/CSS/Reference/Properties/text-combine-upright
original_slug: Web/CSS/text-combine-upright
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

**`text-combine-upright`** は [CSS](/ja/docs/Web/CSS) のプロパティで、一文字分の空間に挿入する文字の組み合わせを設定します。組み合わせたテキストが 1em の幅より広い場合、ユーザーエージェントはコンテンツを 1em の幅に収めなければなりません。合成結果は、レイアウトおよび装飾においてグリフ一文字として扱われます。このプロパティは、縦書きモードでのみ効果があります。

これは、日本語の縦中横、中国語の <i lang="zh-CN">直書橫向</i> として知られる効果をもたらすために使用されます。

{{InteractiveExample("CSS デモ: text-combine-upright")}}

```css interactive-example-choice
text-combine-upright: none;
```

```css interactive-example-choice
text-combine-upright: all;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>
      <span class="transition-all" id="example-element"
        >2022<span>年</span>12<span>月</span>8</span
      >日から楽しい
    </p>
  </div>
</section>
```

```css interactive-example
p {
  writing-mode: vertical-rl;
}
```

## 構文

```css
/* キーワード値 */
text-combine-upright: none;
text-combine-upright: all;

/* Digits 値 */
text-combine-upright: digits; /* 2 桁の数字を垂直テキスト内に水平に収めます */
text-combine-upright: digits 4; /* 4 桁までの数字を垂直テキスト内に水平に収めます */

/* グローバル値 */
text-combine-upright: inherit;
text-combine-upright: initial;
text-combine-upright: revert;
text-combine-upright: revert-layer;
text-combine-upright: unset;
```

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

### 横書きテキストでの 'all' の使用

all の値は、水平テキストにするすべての部分にマークアップする必要があります。現在、これは digits 値よりも多くのブラウザーが対応しています。

#### HTML

```html
<p lang="zh-Hant">
  民國<span class="num">105</span>年<span class="num">4</span>月<span
    class="num"
    >29</span
  >日
</p>
```

#### CSS

```css
html {
  writing-mode: vertical-rl;
  font: 24px serif;
}
.num {
  text-combine-upright: all;
}
```

#### 結果

{{EmbedLiveSample('横書きテキストでの "all" の使用', 250, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("writing-mode")}}, {{cssxref("text-orientation")}}
