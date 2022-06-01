---
title: animation-direction
slug: Web/CSS/animation-direction
tags:
  - CSS
  - CSS アニメーション
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.animation-direction
translation_of: Web/CSS/animation-direction
---
{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`animation-direction`** プロパティは、アニメーション再生の向きを順方向、逆方向、前後反転のいずれにするかを設定します。

{{EmbedInteractiveExample("pages/css/animation-direction.html")}}

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* 単一のアニメーション */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* 複数のアニメーション */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* グローバル値 */
animation-direction: inherit;
animation-direction: initial;
animation-direction: revert;
animation-direction: unset;
```

### 値

- `normal`
  - : アニメーションを毎回<em>順方向</em>に再生します。言い換えれば、アニメーション周期ごとに、アニメーションを最初の状態にリセットしてそこからまた始めます。これが既定値です。
- `reverse`
  - : アニメーションを毎回<em>逆方向</em>に再生します。言い換えれば、アニメーション周期ごとに、アニメーションを最後の状態にリセットしてそこからまた始めます。アニメーションを逆方向に実行し、タイミング関数も逆になります。例えば、タイミング関数の `ease-in` が `ease-out` になります。
- `alternate`
  - : アニメーションを毎回反転させ、初回は<em>順方向</em>になります。周期が偶数か奇数かを特定する回数は1から始まります。
- `alternate-reverse`
  - : アニメーションを毎回反転させ、初回は<em>逆方向</em>になります。周期が偶数か奇数かを特定する回数は1から始まります。

> **Note:** `animation-*` プロパティにコンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} プロパティで指定したアニメーションに割り当てられますが、いくつあるかによって異なる方法で割り当てられます。詳しくは、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values)を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 逆方向に実行されるアニメーション

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
  animation-direction: reverse;
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
