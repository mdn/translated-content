---
title: animation-iteration-count
slug: Web/CSS/animation-iteration-count
tags:
  - CSS
  - CSS アニメーション
  - CSS プロパティ
  - CSS プロパティアニメーション
  - recipe:css-property
browser-compat: css.properties.animation-iteration-count
translation_of: Web/CSS/animation-iteration-count
---
{{CSSRef}}

**`animation-iteration-count`** は [CSS](/ja/docs/Web/CSS) のプロパティで、停止するまでにアニメーション周期が再生される回数を指定します。

複数の値が指定された場合、アニメーションが再生されるたびにリスト中の次の値が使用され、最後の 1 つが使用されたら最初に戻ります。

{{EmbedInteractiveExample("pages/css/animation-iteration-count.html")}}

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* キーワード値 */
animation-iteration-count: infinite;

/* &lt;number&gt; 値 */
animation-iteration-count: 3;
animation-iteration-count: 2.4;

/* 複数の値 */
animation-iteration-count: 2, 0, infinite;

/* グローバル値 */
animation-iteration-count: inherit;
animation-iteration-count: initial;
animation-iteration-count: revert;
animation-iteration-count: unset;
```

**`animation-iteration-count`** プロパティは 1 つ以上のカンマで区切られた値で指定します。

### 値

- `infinite`
  - : アニメーションは無制限に繰り返されます。
- `{{cssxref("&lt;number&gt;")}}`
  - : アニメーションが繰り返される回数です。既定値は `1` です。アニメーション周期の一部を再生したい場合は、非整数の値を指定できます。例えば、 `0.5` はアニメーション周期の半分を再生します。負の数は無効です。

> **Note:** `animation-*` プロパティにコンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} プロパティで指定したアニメーションに割り当てられますが、いくつあるかによって異なる方法で割り当てられます。詳しくは、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values) を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 10 回実行されるアニメーション

#### HTML

```html
<div class="box"></div>
```

#### CSS

```css
.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-iteration-count: 10;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

#### 結果

{{EmbedLiveSample("Examples","100%","250")}}

[CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript の {{domxref("AnimationEvent")}} API
